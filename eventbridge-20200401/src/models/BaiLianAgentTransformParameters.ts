// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BaiLianAgentTransformParametersPrompt extends $dara.Model {
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

export class BaiLianAgentTransformParameters extends $dara.Model {
  apiKey?: string;
  applicationId?: string;
  prompt?: BaiLianAgentTransformParametersPrompt;
  requestPerMinute?: number;
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

