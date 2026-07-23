// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkApiDestinationParametersBodyParameters extends $dara.Model {
  /**
   * @remarks
   * Defines how the parameter\\"s value is created. Use `CONSTANT` to specify a static string in the `value` field. Use `JSONPATH` to extract data from the event payload with a JSONPath expression in the `value` field. Use `TEMPLATE` to build the value from the `template` field.
   */
  form?: string;
  /**
   * @remarks
   * The template to use to build the parameter value. This field is used only when the `form` is set to `TEMPLATE`. You can use variables, such as `${event.id}`, in the template to reference event data.
   */
  template?: string;
  /**
   * @remarks
   * The static value or JSONPath expression for the parameter. This field applies only when the `form` is set to `CONSTANT` or `JSONPATH`.
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
   * Defines how the parameter\\"s value is created. Use `CONSTANT` to specify a static string in the `value` field. Use `JSONPATH` to extract data from the event payload with a JSONPath expression in the `value` field. Use `TEMPLATE` to build the value from the `template` field.
   */
  form?: string;
  /**
   * @remarks
   * The template to use to build the parameter value. This field is used only when the `form` is set to `TEMPLATE`. You can use variables, such as `${event.id}`, in the template to reference event data.
   */
  template?: string;
  /**
   * @remarks
   * The static value or JSONPath expression for the parameter. This field applies only when the `form` is set to `CONSTANT` or `JSONPATH`.
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
   * Defines how the parameter\\"s value is created. Use `CONSTANT` to specify a static string in the `value` field. Use `JSONPATH` to extract data from the event payload with a JSONPath expression in the `value` field. Use `TEMPLATE` to build the value from the `template` field.
   */
  form?: string;
  /**
   * @remarks
   * The template to use to build the parameter value. This field is used only when the `form` is set to `TEMPLATE`. You can use variables, such as `${event.id}`, in the template to reference event data.
   */
  template?: string;
  /**
   * @remarks
   * The static value or JSONPath expression for the parameter. This field applies only when the `form` is set to `CONSTANT` or `JSONPATH`.
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
   * The parameters for the HTTP request body, specified as key-value pairs.
   */
  bodyParameters?: SinkApiDestinationParametersBodyParameters;
  /**
   * @remarks
   * The custom HTTP header parameters to add to the request, specified as key-value pairs.
   */
  headerParameters?: SinkApiDestinationParametersHeaderParameters;
  /**
   * @remarks
   * The name of the API destination.
   */
  name?: string;
  /**
   * @remarks
   * The query string parameters to add to the endpoint URL, specified as key-value pairs.
   */
  queryStringParameters?: SinkApiDestinationParametersQueryStringParameters;
  /**
   * @remarks
   * The timeout for the API call, in seconds. If the endpoint does not respond within this period, the call fails. The valid range is 1 to 60.
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

