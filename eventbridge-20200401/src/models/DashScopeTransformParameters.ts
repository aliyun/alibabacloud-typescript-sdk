// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DashScopeTransformParametersMessages extends $dara.Model {
  form?: string;
  role?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      role: 'Role',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      role: 'string',
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

export class DashScopeTransformParameters extends $dara.Model {
  apiKey?: string;
  messages?: DashScopeTransformParametersMessages[];
  model?: string;
  requestPerMinute?: number;
  structuredOutputJsonSchema?: string;
  tokenPerMinute?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      messages: 'Messages',
      model: 'Model',
      requestPerMinute: 'RequestPerMinute',
      structuredOutputJsonSchema: 'StructuredOutputJsonSchema',
      tokenPerMinute: 'TokenPerMinute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      messages: { 'type': 'array', 'itemType': DashScopeTransformParametersMessages },
      model: 'string',
      requestPerMinute: 'number',
      structuredOutputJsonSchema: 'string',
      tokenPerMinute: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

