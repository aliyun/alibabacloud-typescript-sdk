// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
  description?: string;
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
   * The application principal name in the format of `<app_name>@app.<account_id>.onaliyun.com`.
   * 
   * @example
   * GiteePrd@app.177242285274****.onaliyun.com
   */
  appPrincipalName?: string;
  /**
   * @remarks
   * The installation timestamp.
   * 
   * @example
   * 1603693518000
   */
  createDate?: string;
  /**
   * @remarks
   * The permission scope information of the application.
   */
  delegatedScope?: ProvisionExternalApplicationResponseBodyExternalApplicationDelegatedScope;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * GiteeAliyun
   */
  displayName?: string;
  /**
   * @remarks
   * The external application ID.
   * 
   * @example
   * 403550611646604****
   */
  foreignAppId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the external application is installed.
   * 
   * @example
   * 157242285274****
   */
  tenantId?: string;
  /**
   * @remarks
   * The update timestamp.
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
   * The external application information.
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

