// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourceGroupsResponseBodyResourceGroupAppRules } from "./DescribeResourceGroupsResponseBodyResourceGroupAppRules";
import { DescribeResourceGroupsResponseBodyResourceGroupPolicies } from "./DescribeResourceGroupsResponseBodyResourceGroupPolicies";
import { DescribeResourceGroupsResponseBodyResourceGroupTimers } from "./DescribeResourceGroupsResponseBodyResourceGroupTimers";


export class DescribeResourceGroupsResponseBodyResourceGroup extends $dara.Model {
  appRules?: DescribeResourceGroupsResponseBodyResourceGroupAppRules[];
  /**
   * @example
   * 3
   */
  authCount?: string;
  /**
   * @example
   * 2022-11-29T17:25:40.000000000Z
   */
  createTime?: string;
  policies?: DescribeResourceGroupsResponseBodyResourceGroupPolicies[];
  /**
   * @example
   * 119
   */
  resourceCount?: string;
  /**
   * @example
   * rg-cyo0il2pzge1***
   */
  resourceGroupId?: string;
  resourceGroupName?: string;
  timers?: DescribeResourceGroupsResponseBodyResourceGroupTimers[];
  static names(): { [key: string]: string } {
    return {
      appRules: 'AppRules',
      authCount: 'AuthCount',
      createTime: 'CreateTime',
      policies: 'Policies',
      resourceCount: 'ResourceCount',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      timers: 'Timers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appRules: { 'type': 'array', 'itemType': DescribeResourceGroupsResponseBodyResourceGroupAppRules },
      authCount: 'string',
      createTime: 'string',
      policies: { 'type': 'array', 'itemType': DescribeResourceGroupsResponseBodyResourceGroupPolicies },
      resourceCount: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      timers: { 'type': 'array', 'itemType': DescribeResourceGroupsResponseBodyResourceGroupTimers },
    };
  }

  validate() {
    if(Array.isArray(this.appRules)) {
      $dara.Model.validateArray(this.appRules);
    }
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    if(Array.isArray(this.timers)) {
      $dara.Model.validateArray(this.timers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

