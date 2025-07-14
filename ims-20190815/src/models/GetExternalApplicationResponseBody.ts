// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
  /**
   * @remarks
   * The description of the permission.
   * 
   * @example
   * Obtains the OpenID of the user. This is the default scope and cannot be deleted.
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

export class GetExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes extends $dara.Model {
  predefinedScope?: GetExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': GetExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope },
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

export class GetExternalApplicationResponseBodyExternalApplicationDelegatedScope extends $dara.Model {
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
  predefinedScopes?: GetExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: GetExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopes,
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

export class GetExternalApplicationResponseBodyExternalApplication extends $dara.Model {
  /**
   * @remarks
   * The name of the application principal. The value is in the `<app_name>@app.<account_id>.onaliyun.com` format.
   * 
   * @example
   * GiteePrd@app.153082740420****.onaliyun.com
   */
  appPrincipalName?: string;
  /**
   * @remarks
   * The time when the application was installed. The value is a timestamp.
   * 
   * @example
   * 1737534146000
   */
  createDate?: string;
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
  delegatedScope?: GetExternalApplicationResponseBodyExternalApplicationDelegatedScope;
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
   * 407426893752729****
   */
  foreignAppId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account for which the application is installed.
   * 
   * @example
   * 173082740420****
   */
  tenantId?: string;
  /**
   * @remarks
   * The update time of the application. The value is a timestamp.
   * 
   * @example
   * 1737534146000
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
      delegatedScope: GetExternalApplicationResponseBodyExternalApplicationDelegatedScope,
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

export class GetExternalApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the external application.
   */
  externalApplication?: GetExternalApplicationResponseBodyExternalApplication;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E4C4D1BD-2558-5BD1-8C36-A5D7FB174A55
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
      externalApplication: GetExternalApplicationResponseBodyExternalApplication,
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

