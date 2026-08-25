// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialRequestBody extends $dara.Model {
  /**
   * @example
   * {"apiKey":"sk-example-value"}
   */
  credentialMetadata?: string;
  /**
   * @example
   * 线上环境调用模型服务使用的 API Key
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      credentialMetadata: 'credentialMetadata',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialMetadata: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialRequest extends $dara.Model {
  body?: UpdateCredentialRequestBody;
  /**
   * @example
   * 暂不支持
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateCredentialRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

