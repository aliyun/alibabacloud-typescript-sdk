// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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

export class GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopes extends $dara.Model {
  predefinedScope?: GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope },
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

export class GetApplicationResponseBodyApplicationDelegatedScope extends $dara.Model {
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
  predefinedScopes?: GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopes,
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

export class GetApplicationResponseBodyApplicationRedirectUris extends $dara.Model {
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

export class GetApplicationResponseBodyApplication extends $dara.Model {
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
   * The name of the application.
   * 
   * @example
   * myapp
   */
  appName?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   WebApp: a web application.
   * *   NativeApp: a native application that runs on an operating system, such as a desktop or mobile operating system.
   * *   ServerApp: an application that can access Alibaba Cloud services without the need for user logon. Only applications that synchronize user information based on the System for Cross-domain Identity Management (SCIM) protocol are supported.
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
  delegatedScope?: GetApplicationResponseBodyApplicationDelegatedScope;
  /**
   * @remarks
   * The display name of the application.
   * 
   * @example
   * myapp
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
  /**
   * @remarks
   * The callback URL.
   */
  redirectUris?: GetApplicationResponseBodyApplicationRedirectUris;
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
      delegatedScope: GetApplicationResponseBodyApplicationDelegatedScope,
      displayName: 'string',
      isMultiTenant: 'boolean',
      redirectUris: GetApplicationResponseBodyApplicationRedirectUris,
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

export class GetApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the application.
   */
  application?: GetApplicationResponseBodyApplication;
  /**
   * @remarks
   * The ID of the request.
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
      application: GetApplicationResponseBodyApplication,
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

