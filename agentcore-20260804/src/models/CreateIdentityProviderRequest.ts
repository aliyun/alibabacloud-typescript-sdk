// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityProviderRequestBodyMetadata extends $dara.Model {
  /**
   * @remarks
   * The app ID of the Lark application. This parameter is required when the binding type is Feishu.
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
   * Required. The secret of the external identity provider application. This parameter is used only for writing and is not returned by query API operations.
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
   * The data encryption key for event subscription. The value must be the same as the one configured in the external identity provider application. This parameter is used only for writing and is not returned by query API operations.
   * 
   * @example
   * example-encrypt-key
   */
  encryptKey?: string;
  /**
   * @remarks
   * The verification token for event subscription. The value must be the same as the one configured in the external identity provider application. This parameter is used only for writing and is not returned by query API operations.
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

export class CreateIdentityProviderRequestBodySyncScope extends $dara.Model {
  /**
   * @remarks
   * When the mode is SelectedDepartments, the list must contain at least one non-empty department ID, which should be obtained from ListIdentityProviderDepartments. When the mode is AllAuthorized, pass an empty array or omit this parameter.
   * 
   * @example
   * ["10001"]
   */
  departmentIds?: string[];
  /**
   * @remarks
   * AllAuthorized: the full authorization scope, which is limited by the application address book authorization. SelectedDepartments: the selected departments and all their sub-departments. When explicitly submitting syncScope, you must provide a valid mode, which is verified by the backend.
   * 
   * @example
   * SelectedDepartments
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      departmentIds: 'departmentIds',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departmentIds)) {
      $dara.Model.validateArray(this.departmentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestBody extends $dara.Model {
  /**
   * @remarks
   * The type of the external identity provider. Valid values: DingTalk and Feishu.
   * 
   * This parameter is required.
   * 
   * @example
   * DingTalk
   */
  identityProviderType?: string;
  /**
   * @remarks
   * Specifies whether to allow workspace users to log on through the external identity provider.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The application configuration of the external identity provider. When you bind DingTalk, you must provide appKey, appSecret, and corpId. When you bind Lark, you must provide appId and appSecret.
   */
  metadata?: CreateIdentityProviderRequestBodyMetadata;
  /**
   * @remarks
   * Specifies whether to enable organization member synchronization. If enabled, the external identity provider synchronizes organization members as workspace users.
   */
  syncEnabled?: boolean;
  /**
   * @remarks
   * Controls the first synchronization when DingTalk or Lark is bound. If omitted or set to null, the default value is true. If set to false, only the configuration is saved, and synchronization is explicitly triggered later. CustomSSO does not use the vendor pull link.
   */
  syncOnBind?: boolean;
  /**
   * @remarks
   * Retains the department-based synchronization scope definition. If omitted during creation, the default value is AllAuthorized. The first vendor synchronization is determined by syncOnBind. If omitted or set to null during an update, the original value is retained. Updating and saving the scope does not automatically perform full synchronization.
   */
  syncScope?: CreateIdentityProviderRequestBodySyncScope;
  static names(): { [key: string]: string } {
    return {
      identityProviderType: 'identityProviderType',
      loginEnabled: 'loginEnabled',
      metadata: 'metadata',
      syncEnabled: 'syncEnabled',
      syncOnBind: 'syncOnBind',
      syncScope: 'syncScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderType: 'string',
      loginEnabled: 'boolean',
      metadata: CreateIdentityProviderRequestBodyMetadata,
      syncEnabled: 'boolean',
      syncOnBind: 'boolean',
      syncScope: CreateIdentityProviderRequestBodySyncScope,
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(this.syncScope && typeof (this.syncScope as any).validate === 'function') {
      (this.syncScope as any).validate();
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
   * The request content for binding an external identity provider.
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

