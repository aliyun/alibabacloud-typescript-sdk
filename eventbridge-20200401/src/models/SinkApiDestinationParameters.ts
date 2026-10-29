// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkApiDestinationParametersBodyParameters extends $dara.Model {
  /**
   * @remarks
   * Form
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * Template
   * 
   * @example
   * {"message":"${message}"}
   */
  template?: string;
  /**
   * @remarks
   * Value
   * 
   * @example
   * {"message":"$.data.message"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SinkApiDestinationParametersHeaderParameters extends $dara.Model {
  /**
   * @remarks
   * Form
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * Template
   * 
   * @example
   * {"${headerName1}":"${headerValue1}"}
   */
  template?: string;
  /**
   * @remarks
   * Value
   * 
   * @example
   * {"headerName1":"X-Example","headerValue1":"example-value"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SinkApiDestinationParametersQueryStringParameters extends $dara.Model {
  /**
   * @remarks
   * Form
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The template used to construct the parameter value. This parameter is used only when Form is set to TEMPLATE. You can use variables such as ${event.id} to reference event data.
   * 
   * @example
   * {"id":"${event.id}"}
   */
  template?: string;
  /**
   * @remarks
   * Value
   * 
   * @example
   * {"id":"$.data.id"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SinkApiDestinationParameters extends $dara.Model {
  /**
   * @remarks
   * The HTTP body parameters.
   */
  bodyParameters?: SinkApiDestinationParametersBodyParameters;
  /**
   * @remarks
   * The HTTP header parameters.
   */
  headerParameters?: SinkApiDestinationParametersHeaderParameters;
  /**
   * @remarks
   * The name of the API destination.
   * 
   * @example
   * example-api-destination
   */
  name?: string;
  /**
   * @remarks
   * The HTTP query parameters.
   */
  queryStringParameters?: SinkApiDestinationParametersQueryStringParameters;
  /**
   * @remarks
   * The timeout period for the API call, in seconds. Valid values: 1 to 60. If the destination does not respond within this period, the call fails.
   * 
   * @example
   * 30
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      name: 'Name',
      queryStringParameters: 'QueryStringParameters',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: SinkApiDestinationParametersBodyParameters,
      headerParameters: SinkApiDestinationParametersHeaderParameters,
      name: 'string',
      queryStringParameters: SinkApiDestinationParametersQueryStringParameters,
      timeout: 'number',
    };
  }

  validate() {
    if(this.bodyParameters && typeof (this.bodyParameters as any).validate === 'function') {
      (this.bodyParameters as any).validate();
    }
    if(this.headerParameters && typeof (this.headerParameters as any).validate === 'function') {
      (this.headerParameters as any).validate();
    }
    if(this.queryStringParameters && typeof (this.queryStringParameters as any).validate === 'function') {
      (this.queryStringParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

