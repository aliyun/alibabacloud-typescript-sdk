// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityProviderRequestBodyMetadata extends $dara.Model {
  /**
   * @remarks
   * The App ID of the Lark application. This parameter is required when the binding type is Feishu.
   * 
   * @example
   * cli_exampleappid01
   */
  appId?: string;
  /**
   * @remarks
   * The AppKey of the DingTalk application. This parameter is required when the binding type is DingTalk.
   * 
   * @example
   * dingexampleappkey01
   */
  appKey?: string;
  /**
   * @remarks
   * Required. The secret of the external identity provider application. This parameter is used only for write operations. The query API does not return this field.
   * 
   * @example
   * example-app-secret
   */
  appSecret?: string;
  /**
   * @remarks
   * The CorpId of the DingTalk enterprise. This parameter is required when the binding type is DingTalk.
   * 
   * @example
   * dingexamplecorpid01
   */
  corpId?: string;
  /**
   * @remarks
   * The data encryption key for event subscription. The value must be the same as the one configured in the external identity provider application. This parameter is used only for write operations. The query API does not return this field.
   * 
   * @example
   * example-encrypt-key
   */
  encryptKey?: string;
  /**
   * @remarks
   * The verification token for event subscription. The value must be the same as the one configured in the external identity provider application. This parameter is used only for write operations. The query API does not return this field.
   * 
   * @example
   * example-verification-token
   */
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appKey: 'appKey',
      appSecret: 'appSecret',
      corpId: 'corpId',
      encryptKey: 'encryptKey',
      verificationToken: 'verificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      appSecret: 'string',
      corpId: 'string',
      encryptKey: 'string',
      verificationToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestBody extends $dara.Model {
  /**
   * @remarks
   * The type of the external identity provider. Valid values: DingTalk, Feishu.
   * 
   * This parameter is required.
   * 
   * @example
   * DingTalk
   */
  identityProviderType?: string;
  /**
   * @remarks
   * Specifies whether workspace users are allowed to log on through this external identity provider.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The application configuration of the external identity provider. When binding DingTalk, you must provide appKey, appSecret, and corpId. When binding Lark, you must provide appId and appSecret.
   */
  metadata?: CreateIdentityProviderRequestBodyMetadata;
  /**
   * @remarks
   * Specifies whether to enable organization member synchronization. After this feature is enabled, the external identity provider synchronizes organization members as workspace users.
   */
  syncEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      identityProviderType: 'identityProviderType',
      loginEnabled: 'loginEnabled',
      metadata: 'metadata',
      syncEnabled: 'syncEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderType: 'string',
      loginEnabled: 'boolean',
      metadata: CreateIdentityProviderRequestBodyMetadata,
      syncEnabled: 'boolean',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for binding an external identity provider.
   */
  body?: CreateIdentityProviderRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateIdentityProviderRequestBody,
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

