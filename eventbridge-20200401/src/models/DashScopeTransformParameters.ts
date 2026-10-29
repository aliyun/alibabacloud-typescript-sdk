// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DashScopeTransformParametersMessages extends $dara.Model {
  /**
   * @remarks
   * The template form.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The role.
   * 
   * @example
   * USER
   */
  role?: string;
  /**
   * @remarks
   * The template.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The template value.
   * 
   * @example
   * $.data.message
   */
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
  /**
   * @remarks
   * The API key for DashScope.
   * 
   * @example
   * Q37sQ****
   */
  apiKey?: string;
  /**
   * @remarks
   * The prompts.
   */
  messages?: DashScopeTransformParametersMessages[];
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-max
   */
  model?: string;
  /**
   * @remarks
   * The rate limit in requests per minute.
   * 
   * @example
   * 1000
   */
  requestPerMinute?: number;
  /**
   * @remarks
   * The structured output schema.
   * 
   * @example
   * {"type":"object","properties":{"message":{"type":"string"}},"required":["message"]}
   */
  structuredOutputJsonSchema?: string;
  /**
   * @remarks
   * The rate limit in tokens per minute.
   * 
   * @example
   * 10000
   */
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

