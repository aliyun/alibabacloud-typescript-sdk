// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
  accountId?: string;
  appId?: string;
  appName?: string;
  appPrincipalName?: string;
  createDate?: string;
  delegatedScope?: ProvisionApplicationResponseBodyApplicationProvisionInfoDelegatedScope;
  displayName?: string;
  tenantId?: string;
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
  applicationProvisionInfo?: ProvisionApplicationResponseBodyApplicationProvisionInfo;
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

