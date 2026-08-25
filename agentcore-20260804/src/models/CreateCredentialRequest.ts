// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialRequestBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"apiKey":"sk-example-value"}
   */
  credentialMetadata?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * apiKey
   */
  credentialType?: string;
  /**
   * @example
   * 线上环境调用模型服务使用的 API Key
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * model-api-key
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      credentialMetadata: 'credentialMetadata',
      credentialType: 'credentialType',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialMetadata: 'string',
      credentialType: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCredentialRequest extends $dara.Model {
  body?: CreateCredentialRequestBody;
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
      body: CreateCredentialRequestBody,
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

