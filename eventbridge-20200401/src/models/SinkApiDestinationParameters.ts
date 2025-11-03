// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkApiDestinationParametersBodyParameters extends $dara.Model {
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  form?: string;
  template?: string;
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
  bodyParameters?: SinkApiDestinationParametersBodyParameters;
  headerParameters?: SinkApiDestinationParametersHeaderParameters;
  name?: string;
  queryStringParameters?: SinkApiDestinationParametersQueryStringParameters;
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      name: 'Name',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: SinkApiDestinationParametersBodyParameters,
      headerParameters: SinkApiDestinationParametersHeaderParameters,
      name: 'string',
      queryStringParameters: SinkApiDestinationParametersQueryStringParameters,
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

