// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyAssetScopeRequestDatabases extends $dara.Model {
  /**
   * @remarks
   * The database account scope to which the control policy applies. Valid values:
   * 
   * - **All**: The policy applies to all accounts in the database.
   * - **AccountId**: The policy applies to specified accounts in the database.
   * 
   * @example
   * AccountId
   */
  accountScopeType?: string;
  /**
   * @remarks
   * The IDs of the database accounts to which the control policy applies.
   * 
   * > This parameter is required when AccountScopeType is set to AccountId.
   */
  databaseAccountIds?: string[];
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * 3
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

export class SetPolicyAssetScopeRequestHostGroups extends $dara.Model {
  /**
   * @remarks
   * The names of the asset accounts to which the control policy applies.
   * 
   * > This parameter is required when AccountScopeType is set to AccountNames.
   */
  accountNames?: string[];
  /**
   * @remarks
   * The asset account scope to which the control policy applies. Valid values:
   * 
   * - **All**: The policy applies to all accounts in the asset group.
   * - **AccountName**: The policy applies to specified accounts in the asset group.
   * 
   * @example
   * All
   */
  accountScopeType?: string;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * @example
   * 86
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

export class SetPolicyAssetScopeRequestHosts extends $dara.Model {
  /**
   * @remarks
   * The host account scope to which the control policy applies. Valid values:
   * 
   * - **All**: The policy applies to all accounts on the host.
   * - **AccountId**: The policy applies to specified accounts on the host.
   * 
   * @example
   * All
   */
  accountScopeType?: string;
  /**
   * @remarks
   * The IDs of the host accounts to which the control policy applies.
   * 
   * > This parameter is required when AccountScopeType is set to AccountId.
   */
  hostAccountIds?: string[];
  /**
   * @remarks
   * The ID of the host.
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

export class SetPolicyAssetScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The database asset scope to which the control policy applies.
   * 
   * > This parameter is required when ScopeType is set to Database. You can specify up to 500 databases.
   */
  databases?: SetPolicyAssetScopeRequestDatabases[];
  /**
   * @remarks
   * The asset group scope to which the control policy applies.
   * 
   * > This parameter is required when ScopeType is set to HostGroup. You can specify up to 100 asset groups.
   */
  hostGroups?: SetPolicyAssetScopeRequestHostGroups[];
  /**
   * @remarks
   * The host scope to which the control policy applies.
   * 
   * > This parameter is required when ScopeType is set to Host. You can specify up to 500 hosts.
   */
  hosts?: SetPolicyAssetScopeRequestHosts[];
  /**
   * @remarks
   * The instance ID of the Bastionhost.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the control policy that you want to modify.
   * > You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to query the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  policyId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The asset scope to which the control policy applies. Valid values:
   * - **All**: The policy applies to all assets.
   * - **Host**: The policy applies to selected hosts.
   * - **Database**: The policy applies to selected databases.
   * - **HostGroup**: The policy applies to selected asset groups.
   * 
   * This parameter is required.
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
      instanceId: 'InstanceId',
      policyId: 'PolicyId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': SetPolicyAssetScopeRequestDatabases },
      hostGroups: { 'type': 'array', 'itemType': SetPolicyAssetScopeRequestHostGroups },
      hosts: { 'type': 'array', 'itemType': SetPolicyAssetScopeRequestHosts },
      instanceId: 'string',
      policyId: 'string',
      projectId: 'number',
      regionId: 'string',
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

