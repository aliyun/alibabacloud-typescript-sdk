// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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

export class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopes extends $dara.Model {
  predefinedScope?: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope },
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

export class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScope extends $dara.Model {
  predefinedScopes?: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopes,
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

export class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfo extends $dara.Model {
  accountId?: string;
  appId?: string;
  appName?: string;
  createDate?: string;
  delegatedScope?: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScope;
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
      delegatedScope: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScope,
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

export class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfos extends $dara.Model {
  applicationProvisionInfo?: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfo[];
  static names(): { [key: string]: string } {
    return {
      applicationProvisionInfo: 'ApplicationProvisionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationProvisionInfo: { 'type': 'array', 'itemType': ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfo },
    };
  }

  validate() {
    if(Array.isArray(this.applicationProvisionInfo)) {
      $dara.Model.validateArray(this.applicationProvisionInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationProvisionInfosResponseBody extends $dara.Model {
  applicationProvisionInfos?: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfos;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E403EBFD-C997-489D-BFC7-37C05E66D67C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationProvisionInfos: 'ApplicationProvisionInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationProvisionInfos: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationProvisionInfos && typeof (this.applicationProvisionInfos as any).validate === 'function') {
      (this.applicationProvisionInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

