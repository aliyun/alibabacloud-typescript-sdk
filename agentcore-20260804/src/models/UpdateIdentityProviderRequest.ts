// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderRequestBodyMetadata extends $dara.Model {
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
   * Required. The secret of the external identity provider application. This parameter is write-only and is not returned by query operations.
   * 
   * @example
   * example-app-secret
   */
  appSecret?: string;
  /**
   * @remarks
   * The CorpId of the DingTalk organization. This parameter is required when the binding type is DingTalk.
   * 
   * @example
   * dingexamplecorpid01
   */
  corpId?: string;
  /**
   * @remarks
   * The data encryption key for event subscriptions. The value must be consistent with the one configured in the external identity provider application. This parameter is write-only and is not returned by query operations.
   * 
   * @example
   * example-encrypt-key
   */
  encryptKey?: string;
  /**
   * @remarks
   * The verification token for event subscriptions. The value must be consistent with the one configured in the external identity provider application. This parameter is write-only and is not returned by query operations.
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

export class UpdateIdentityProviderRequestBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether workspace users are allowed to log on through this external identity provider.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The new application configuration of the external identity provider. If not specified, the existing configuration remains unchanged.
   */
  metadata?: UpdateIdentityProviderRequestBodyMetadata;
  /**
   * @remarks
   * Specifies whether to enable organization member synchronization. After this feature is enabled, the external identity provider synchronizes organization members as workspace users.
   */
  syncEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      loginEnabled: 'loginEnabled',
      metadata: 'metadata',
      syncEnabled: 'syncEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginEnabled: 'boolean',
      metadata: UpdateIdentityProviderRequestBodyMetadata,
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

export class UpdateIdentityProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for updating the external identity provider.
   */
  body?: UpdateIdentityProviderRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateIdentityProviderRequestBody,
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

