// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceGroupsResponseBodyResourceGroupAppRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the application rule.
   * 
   * @example
   * ruleId1
   */
  id?: string;
  /**
   * @remarks
   * The name of the application rule.
   * 
   * @example
   * ruleName1
   */
  name?: string;
  /**
   * @remarks
   * The type of the application rule.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceGroupsResponseBodyResourceGroupPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pl-a8jnatl8kjasb***
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether the policy is the default policy.
   * 
   * @example
   * False
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Test policy 123
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isDefault: 'boolean',
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

export class DescribeResourceGroupsResponseBodyResourceGroupTimers extends $dara.Model {
  /**
   * @remarks
   * The association status between the scheduled task and the resource group.
   * 
   * @example
   * BIND
   */
  bindStatus?: string;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * @example
   * t-asdzx0mbjhg***
   */
  id?: string;
  /**
   * @remarks
   * The name of the scheduled task.
   * 
   * @example
   * Test task 123
   */
  name?: string;
  /**
   * @remarks
   * The running status of the scheduled task.
   * 
   * @example
   * AVAILABLE
   */
  timerStatus?: string;
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * @example
   * TIMER
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindStatus: 'BindStatus',
      id: 'Id',
      name: 'Name',
      timerStatus: 'TimerStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStatus: 'string',
      id: 'string',
      name: 'string',
      timerStatus: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceGroupsResponseBodyResourceGroup extends $dara.Model {
  /**
   * @remarks
   * The agent subtype of the DesktopAgent resource group. Valid values: JVSClaw and HermesAgent.
   * 
   * @example
   * JVSClaw
   */
  agentType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-123456
   */
  aliyunResourceGroupId?: string;
  /**
   * @remarks
   * The list of application rules associated with the resource group.
   */
  appRules?: DescribeResourceGroupsResponseBodyResourceGroupAppRules[];
  /**
   * @remarks
   * The number of administrators authorized for the resource group.
   * 
   * @example
   * 3
   */
  authCount?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 UTC format.
   * 
   * @example
   * 2022-11-29T17:25:40.000000000Z
   */
  createTime?: string;
  /**
   * @remarks
   * > The policies associated with the resource group.
   * > - The associated policies take effect on the cloud computers in the resource group. If multiple policies exist, they take effect based on their priorities.
   * > - If a cloud computer in the resource group is already assigned another policy, the policy associated with the resource group takes precedence.
   */
  policies?: DescribeResourceGroupsResponseBodyResourceGroupPolicies[];
  /**
   * @remarks
   * The resource count in the resource group.
   * 
   * @example
   * 119
   */
  resourceCount?: string;
  /**
   * @remarks
   * The description of the resource group. If not set, an empty string is returned.
   * 
   * @example
   * Department A resource group
   */
  resourceGroupDescription?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-cyo0il2pzge1***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * Test resource group
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * > The scheduled tasks associated with the resource group.
   * > - The associated scheduled tasks take effect on the cloud computers in the resource group. If a cloud computer in the resource group is already associated with another scheduled task, the task associated with the resource group takes precedence.
   */
  timers?: DescribeResourceGroupsResponseBodyResourceGroupTimers[];
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      appRules: 'AppRules',
      authCount: 'AuthCount',
      createTime: 'CreateTime',
      policies: 'Policies',
      resourceCount: 'ResourceCount',
      resourceGroupDescription: 'ResourceGroupDescription',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      timers: 'Timers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      aliyunResourceGroupId: 'string',
      appRules: { 'type': 'array', 'itemType': DescribeResourceGroupsResponseBodyResourceGroupAppRules },
      authCount: 'string',
      createTime: 'string',
      policies: { 'type': 'array', 'itemType': DescribeResourceGroupsResponseBodyResourceGroupPolicies },
      resourceCount: 'string',
      resourceGroupDescription: 'string',
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

export class DescribeResourceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 68BA1DF7-8814-5AED-B844-F8F7F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resource group information.
   */
  resourceGroup?: DescribeResourceGroupsResponseBodyResourceGroup[];
  /**
   * @remarks
   * The total number of resource groups.
   * 
   * @example
   * 7
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: { 'type': 'array', 'itemType': DescribeResourceGroupsResponseBodyResourceGroup },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroup)) {
      $dara.Model.validateArray(this.resourceGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

