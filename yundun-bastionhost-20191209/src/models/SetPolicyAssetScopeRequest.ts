// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetPolicyAssetScopeRequestDatabases } from "./SetPolicyAssetScopeRequestDatabases";
import { SetPolicyAssetScopeRequestHostGroups } from "./SetPolicyAssetScopeRequestHostGroups";
import { SetPolicyAssetScopeRequestHosts } from "./SetPolicyAssetScopeRequestHosts";


export class SetPolicyAssetScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The databases to which the control policy applies.
   * 
   * >  This parameter is required if ScopeType is set to Database. You can specify up to 500 databases.
   */
  databases?: SetPolicyAssetScopeRequestDatabases[];
  /**
   * @remarks
   * The asset groups to which the control policy applies.
   * 
   * > This parameter is required if ScopeType is set to HostGroup. You can specify up to 100 asset groups.
   */
  hostGroups?: SetPolicyAssetScopeRequestHostGroups[];
  /**
   * @remarks
   * The hosts to which the control policy applies.
   * 
   * > This parameter is required if ScopeType is set to Host. You can specify up to 500 hosts.
   */
  hosts?: SetPolicyAssetScopeRequestHosts[];
  /**
   * @remarks
   * The bastion host ID.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
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
   * 
   * >  You can call the [ListPolicies](https://help.aliyun.com/document_detail/2758876.html) operation to query the control policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scope of assets to which the control policy applies. Valid values:
   * 
   * * **All**: The control policy applies to all assets.
   * * **Host**: The control policy applies to specified hosts.
   * * **Database**: The control policy applies to specified databases.
   * * **HostGroup**: The control policy applies to specified asset groups.
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

