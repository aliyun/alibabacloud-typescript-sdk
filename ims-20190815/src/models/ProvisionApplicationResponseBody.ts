// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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

export class ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes extends $dara.Model {
  predefinedScope?: ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope },
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

export class ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScope extends $dara.Model {
  /**
   * @remarks
   * The information about the permissions that are granted to the application.
   */
  predefinedScopes?: ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes,
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

export class ProvisionApplicationResponseBodyApplicationProvisionInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
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
   * 452392483381546****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * GiteePrd
   */
  appName?: string;
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
   * The information about the permissions that are granted to the application.
   */
  delegatedScope?: ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScope;
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
   * The ID of the Alibaba Cloud account for which the application was installed.
   * 
   * @example
   * 177242285274****
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
      accountId: 'AccountId',
      appId: 'AppId',
      appName: 'AppName',
      appPrincipalName: 'AppPrincipalName',
      createDate: 'CreateDate',
      delegatedScope: 'DelegatedScope',
      displayName: 'DisplayName',
      tenantId: 'TenantId',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      appId: 'string',
      appName: 'string',
      appPrincipalName: 'string',
      createDate: 'string',
      delegatedScope: ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScope,
      displayName: 'string',
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

export class ProvisionApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The installation information of the application.
   */
  applicationProvisionInfo?: ProvisionApplicationResponseBodyApplicationProvisionInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8AE06ED-9593-5BF9-8D4A-68D5DDCC90AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationProvisionInfo: 'ApplicationProvisionInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationProvisionInfo: ProvisionApplicationResponseBodyApplicationProvisionInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationProvisionInfo && typeof (this.applicationProvisionInfo as any).validate === 'function') {
      (this.applicationProvisionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

