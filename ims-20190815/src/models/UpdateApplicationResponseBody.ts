// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
  /**
   * @remarks
   * The description of the permission.
   * 
   * @example
   * Obtain the OpenID of the user. This is the default permission that you cannot remove.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * openid
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the permission is automatically selected by default when you install the application. Valid values:
   * 
   * *   true
   * *   false
   * 
   * `openid` is required by default.
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      required: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopes extends $dara.Model {
  predefinedScope?: UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope },
    };
  }

  validate() {
    if(Array.isArray(this.predefinedScope)) {
      $dara.Model.validateArray(this.predefinedScope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBodyApplicationDelegatedScope extends $dara.Model {
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
  predefinedScopes?: UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopes,
    };
  }

  validate() {
    if(this.predefinedScopes && typeof (this.predefinedScopes as any).validate === 'function') {
      (this.predefinedScopes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBodyApplicationRedirectUris extends $dara.Model {
  redirectUri?: string[];
  static names(): { [key: string]: string } {
    return {
      redirectUri: 'RedirectUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUri: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.redirectUri)) {
      $dara.Model.validateArray(this.redirectUri);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The validity period of the access token. Unit: seconds.
   * 
   * @example
   * 3600
   */
  accessTokenValidity?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the application belongs.
   * 
   * @example
   * 177242285274****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * myapp
   */
  appName?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * WebApp
   */
  appType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-23T08:06:57Z
   */
  createDate?: string;
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
  delegatedScope?: UpdateApplicationResponseBodyApplicationDelegatedScope;
  /**
   * @remarks
   * The display name of the application.
   * 
   * @example
   * NewApp
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the application can be installed by using other Alibaba Cloud accounts.
   * 
   * @example
   * true
   */
  isMultiTenant?: boolean;
  protocolVersion?: string;
  /**
   * @remarks
   * The callback URLs.
   */
  redirectUris?: UpdateApplicationResponseBodyApplicationRedirectUris;
  /**
   * @remarks
   * The validity period of the refresh token. Unit: seconds.
   * 
   * @example
   * 7776000
   */
  refreshTokenValidity?: number;
  /**
   * @remarks
   * Indicates whether a secret is required.
   * 
   * @example
   * true
   */
  secretRequired?: boolean;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-23T08:06:57Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenValidity: 'AccessTokenValidity',
      accountId: 'AccountId',
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      createDate: 'CreateDate',
      delegatedScope: 'DelegatedScope',
      displayName: 'DisplayName',
      isMultiTenant: 'IsMultiTenant',
      protocolVersion: 'ProtocolVersion',
      redirectUris: 'RedirectUris',
      refreshTokenValidity: 'RefreshTokenValidity',
      secretRequired: 'SecretRequired',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenValidity: 'number',
      accountId: 'string',
      appId: 'string',
      appName: 'string',
      appType: 'string',
      createDate: 'string',
      delegatedScope: UpdateApplicationResponseBodyApplicationDelegatedScope,
      displayName: 'string',
      isMultiTenant: 'boolean',
      protocolVersion: 'string',
      redirectUris: UpdateApplicationResponseBodyApplicationRedirectUris,
      refreshTokenValidity: 'number',
      secretRequired: 'boolean',
      updateDate: 'string',
    };
  }

  validate() {
    if(this.delegatedScope && typeof (this.delegatedScope as any).validate === 'function') {
      (this.delegatedScope as any).validate();
    }
    if(this.redirectUris && typeof (this.redirectUris as any).validate === 'function') {
      (this.redirectUris as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the application.
   */
  application?: UpdateApplicationResponseBodyApplication;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6616F09B-2768-4C11-8866-A8EE4C4A583E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: UpdateApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  validate() {
    if(this.application && typeof (this.application as any).validate === 'function') {
      (this.application as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

