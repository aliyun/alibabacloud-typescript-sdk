// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExternalApplicationResponseBodyExternalApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
  appPrincipalName?: string;
  createDate?: string;
  delegatedScope?: GetExternalApplicationResponseBodyExternalApplicationDelegatedScope;
  displayName?: string;
  foreignAppId?: string;
  tenantId?: string;
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
  externalApplication?: GetExternalApplicationResponseBodyExternalApplication;
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

