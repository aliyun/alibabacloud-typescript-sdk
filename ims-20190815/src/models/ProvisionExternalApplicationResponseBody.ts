// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
  /**
   * @remarks
   * The description of the permission scope.
   * 
   * @example
   * Obtains the OpenID of the user. This is the default scope and cannot be deleted.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission scope.
   * 
   * @example
   * openid
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes extends $dara.Model {
  predefinedScope?: ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope },
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

export class ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScope extends $dara.Model {
  /**
   * @remarks
   * The information about the scopes of permissions that are granted to the application.
   */
  predefinedScopes?: ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes,
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

export class ProvisionExternalApplicationResponseBodyExternalApplication extends $dara.Model {
  /**
   * @remarks
   * The name of the application principal. The value is in the `<app_name>@app.<account_id>.onaliyun.com` format.
   * 
   * @example
   * GiteePrd@app.177242285274****.onaliyun.com
   */
  appPrincipalName?: string;
  /**
   * @remarks
   * The time when the application was installed. The value is a timestamp.
   * 
   * @example
   * 1603693518000
   */
  createDate?: string;
  /**
   * @remarks
   * The information about the scopes of permissions that are granted to the application.
   */
  delegatedScope?: ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScope;
  /**
   * @remarks
   * The display name of the application.
   * 
   * @example
   * GiteeAliyun
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 403550611646604****
   */
  foreignAppId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the external application belongs.
   * 
   * @example
   * 157242285274****
   */
  tenantId?: string;
  /**
   * @remarks
   * The update time. The value is a timestamp.
   * 
   * @example
   * 1603693518000
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      appPrincipalName: 'AppPrincipalName',
      createDate: 'CreateDate',
      delegatedScope: 'DelegatedScope',
      displayName: 'DisplayName',
      foreignAppId: 'ForeignAppId',
      tenantId: 'TenantId',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPrincipalName: 'string',
      createDate: 'string',
      delegatedScope: ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScope,
      displayName: 'string',
      foreignAppId: 'string',
      tenantId: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    if(this.delegatedScope && typeof (this.delegatedScope as any).validate === 'function') {
      (this.delegatedScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProvisionExternalApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the external application.
   */
  externalApplication?: ProvisionExternalApplicationResponseBodyExternalApplication;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 55535873-9A6B-5C87-853F-C7CD258826F2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      externalApplication: 'ExternalApplication',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalApplication: ProvisionExternalApplicationResponseBodyExternalApplication,
      requestId: 'string',
    };
  }

  validate() {
    if(this.externalApplication && typeof (this.externalApplication as any).validate === 'function') {
      (this.externalApplication as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

