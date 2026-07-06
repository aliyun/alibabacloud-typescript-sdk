// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
  description?: string;
  name?: string;
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

export class ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes extends $dara.Model {
  predefinedScope?: ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope },
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

export class ListApplicationsResponseBodyApplicationsApplicationDelegatedScope extends $dara.Model {
  predefinedScopes?: ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes,
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

export class ListApplicationsResponseBodyApplicationsApplicationRedirectUris extends $dara.Model {
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

export class ListApplicationsResponseBodyApplicationsApplication extends $dara.Model {
  accessTokenValidity?: number;
  accountId?: string;
  appId?: string;
  appName?: string;
  appType?: string;
  createDate?: string;
  delegatedScope?: ListApplicationsResponseBodyApplicationsApplicationDelegatedScope;
  displayName?: string;
  isMultiTenant?: boolean;
  protocolVersion?: string;
  redirectUris?: ListApplicationsResponseBodyApplicationsApplicationRedirectUris;
  refreshTokenValidity?: number;
  secretRequired?: boolean;
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
      delegatedScope: ListApplicationsResponseBodyApplicationsApplicationDelegatedScope,
      displayName: 'string',
      isMultiTenant: 'boolean',
      protocolVersion: 'string',
      redirectUris: ListApplicationsResponseBodyApplicationsApplicationRedirectUris,
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

export class ListApplicationsResponseBodyApplications extends $dara.Model {
  application?: ListApplicationsResponseBodyApplicationsApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplication },
    };
  }

  validate() {
    if(Array.isArray(this.application)) {
      $dara.Model.validateArray(this.application);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $dara.Model {
  applications?: ListApplicationsResponseBodyApplications;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE458B58-8C40-46F7-A9D4-CB85136B0C06
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: ListApplicationsResponseBodyApplications,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applications && typeof (this.applications as any).validate === 'function') {
      (this.applications as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

