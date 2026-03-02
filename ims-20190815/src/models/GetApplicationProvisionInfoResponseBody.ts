// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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

export class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes extends $dara.Model {
  predefinedScope?: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope },
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

export class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScope extends $dara.Model {
  predefinedScopes?: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScopePredefinedScopes,
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

export class GetApplicationProvisionInfoResponseBodyApplicationProvisionInfo extends $dara.Model {
  accountId?: string;
  appId?: string;
  appName?: string;
  createDate?: string;
  delegatedScope?: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScope;
  displayName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      appId: 'AppId',
      appName: 'AppName',
      createDate: 'CreateDate',
      delegatedScope: 'DelegatedScope',
      displayName: 'DisplayName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      appId: 'string',
      appName: 'string',
      createDate: 'string',
      delegatedScope: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfoDelegatedScope,
      displayName: 'string',
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

export class GetApplicationProvisionInfoResponseBody extends $dara.Model {
  applicationProvisionInfo?: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationProvisionInfo: 'ApplicationProvisionInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationProvisionInfo: GetApplicationProvisionInfoResponseBodyApplicationProvisionInfo,
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

