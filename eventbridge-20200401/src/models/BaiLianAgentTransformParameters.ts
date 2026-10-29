// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BaiLianAgentTransformParametersPrompt extends $dara.Model {
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

export class BaiLianAgentTransformParameters extends $dara.Model {
  /**
   * @remarks
   * The API key for Model Studio.
   * 
   * @example
   * Q34****
   */
  apiKey?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 0123456789abcdef0123456789abcdef
   */
  applicationId?: string;
  /**
   * @remarks
   * The prompt.
   */
  prompt?: BaiLianAgentTransformParametersPrompt;
  /**
   * @remarks
   * The throttling limit in requests per minute.
   * 
   * @example
   * 1000
   */
  requestPerMinute?: number;
  /**
   * @remarks
   * The throttling limit in tokens per minute.
   * 
   * @example
   * 100000
   */
  tokenPerMinute?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      applicationId: 'ApplicationId',
      prompt: 'Prompt',
      requestPerMinute: 'RequestPerMinute',
      tokenPerMinute: 'TokenPerMinute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      applicationId: 'string',
      prompt: BaiLianAgentTransformParametersPrompt,
      requestPerMinute: 'number',
      tokenPerMinute: 'number',
    };
  }

  validate() {
    if(this.prompt && typeof (this.prompt as any).validate === 'function') {
      (this.prompt as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

