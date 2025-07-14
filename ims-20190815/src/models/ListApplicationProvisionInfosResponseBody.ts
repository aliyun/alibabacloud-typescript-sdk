// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
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
  /**
   * @remarks
   * The information about the permissions that are granted to the application.
   */
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
  delegatedScope?: ListApplicationProvisionInfosResponseBodyApplicationProvisionInfosApplicationProvisionInfoDelegatedScope;
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
  /**
   * @remarks
   * The information about the installed applications.
   */
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

