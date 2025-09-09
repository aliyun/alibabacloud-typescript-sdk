// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyAssetScopeResponseBodyAssetScopeDatabases extends $dara.Model {
  /**
   * @remarks
   * The scope of database accounts to which the control policy applies. Valid values:
   * 
   * *   **All**: The control policy applies to all database accounts of the database.
   * *   **AccountId**: The control policy applies to specified database accounts of the database.
   * 
   * @example
   * AccountId
   */
  accountScopeType?: string;
  /**
   * @remarks
   * The IDs of database accounts to which the control policy applies.
   */
  databaseAccountIds?: string[];
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 17
   */
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      accountScopeType: 'AccountScopeType',
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScopeType: 'string',
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseAccountIds)) {
      $dara.Model.validateArray(this.databaseAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAssetScopeResponseBodyAssetScopeHostGroups extends $dara.Model {
  /**
   * @remarks
   * The asset accounts to which the control policy applies.
   */
  accountNames?: string[];
  /**
   * @remarks
   * The scope of asset accounts to which the control policy applies. Valid values:
   * 
   * *   **All**: The control policy applies to all accounts in the asset group.
   * *   **AccountName**: The control policy applies to specified accounts in the asset group.
   * 
   * @example
   * All
   */
  accountScopeType?: string;
  /**
   * @remarks
   * The asset group ID.
   * 
   * @example
   * 4
   */
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNames: 'AccountNames',
      accountScopeType: 'AccountScopeType',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNames: { 'type': 'array', 'itemType': 'string' },
      accountScopeType: 'string',
      hostGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountNames)) {
      $dara.Model.validateArray(this.accountNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAssetScopeResponseBodyAssetScopeHosts extends $dara.Model {
  /**
   * @remarks
   * The scope of host accounts to which the control policy applies. Valid values:
   * 
   * *   **All**: The control policy applies to all accounts of the host.
   * *   **AccountId**: The control policy applies to specified accounts of the host.
   * 
   * @example
   * All
   */
  accountScopeType?: string;
  /**
   * @remarks
   * The host accounts to which the control policy applies.
   */
  hostAccountIds?: string[];
  /**
   * @remarks
   * The host ID.
   * 
   * @example
   * 1
   */
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      accountScopeType: 'AccountScopeType',
      hostAccountIds: 'HostAccountIds',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScopeType: 'string',
      hostAccountIds: { 'type': 'array', 'itemType': 'string' },
      hostId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostAccountIds)) {
      $dara.Model.validateArray(this.hostAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAssetScopeResponseBodyAssetScope extends $dara.Model {
  /**
   * @remarks
   * The databases and database accounts to which the control policy applies.
   */
  databases?: GetPolicyAssetScopeResponseBodyAssetScopeDatabases[];
  /**
   * @remarks
   * The asset groups and asset accounts to which the control policy applies.
   */
  hostGroups?: GetPolicyAssetScopeResponseBodyAssetScopeHostGroups[];
  /**
   * @remarks
   * The hosts and host accounts to which the control policy applies.
   */
  hosts?: GetPolicyAssetScopeResponseBodyAssetScopeHosts[];
  /**
   * @remarks
   * The scope of assets to which the control policy applies.
   * 
   * *   If **All** is returned for this parameter, the control policy applies to all assets.
   * 
   * *   If no value is returned for this parameter, the control policy applies to the assets specified in the return values of Databases, HostGroups, and Hosts.
   * 
   * @example
   * All
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      hostGroups: 'HostGroups',
      hosts: 'Hosts',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': GetPolicyAssetScopeResponseBodyAssetScopeDatabases },
      hostGroups: { 'type': 'array', 'itemType': GetPolicyAssetScopeResponseBodyAssetScopeHostGroups },
      hosts: { 'type': 'array', 'itemType': GetPolicyAssetScopeResponseBodyAssetScopeHosts },
      scopeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    if(Array.isArray(this.hostGroups)) {
      $dara.Model.validateArray(this.hostGroups);
    }
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAssetScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The assets to which the control policy applies.
   */
  assetScope?: GetPolicyAssetScopeResponseBodyAssetScope;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetScope: 'AssetScope',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetScope: GetPolicyAssetScopeResponseBodyAssetScope,
      requestId: 'string',
    };
  }

  validate() {
    if(this.assetScope && typeof (this.assetScope as any).validate === 'function') {
      (this.assetScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

