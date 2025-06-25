// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPolicyAssetScopeResponseBodyAssetScopeDatabases } from "./GetPolicyAssetScopeResponseBodyAssetScopeDatabases";
import { GetPolicyAssetScopeResponseBodyAssetScopeHostGroups } from "./GetPolicyAssetScopeResponseBodyAssetScopeHostGroups";
import { GetPolicyAssetScopeResponseBodyAssetScopeHosts } from "./GetPolicyAssetScopeResponseBodyAssetScopeHosts";


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

