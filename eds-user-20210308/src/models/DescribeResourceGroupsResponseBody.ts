// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceGroupsResponseBodyResourceGroupAppRules extends $dara.Model {
  id?: string;
  name?: string;
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
   * The policy ID.
   * 
   * @example
   * pl-a8jnatl8kjasb***
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether this is the default policy.
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
   * 测试策略123
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
  bindStatus?: string;
  /**
   * @remarks
   * The scheduled task ID.
   * 
   * @example
   * t-asdzx0mbjhg***
   */
  id?: string;
  /**
   * @remarks
   * The scheduled task name.
   * 
   * @example
   * 测试任务123
   */
  name?: string;
  timerStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bindStatus: 'BindStatus',
      id: 'Id',
      name: 'Name',
      timerStatus: 'TimerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStatus: 'string',
      id: 'string',
      name: 'string',
      timerStatus: 'string',
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
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-123456
   */
  aliyunResourceGroupId?: string;
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
   * The time the resource group was created.
   * 
   * @example
   * 2022-11-29T17:25:40.000000000Z
   */
  createTime?: string;
  /**
   * @remarks
   * > The policies associated with the resource group.
   * >
   * > - These policies apply to the cloud computers in the resource group. If multiple policies are associated, they are applied in order of priority.
   * >
   * > - Policies associated with the resource group take precedence over policies assigned to individual cloud computers.
   */
  policies?: DescribeResourceGroupsResponseBodyResourceGroupPolicies[];
  /**
   * @remarks
   * The number of resources in the resource group.
   * 
   * @example
   * 119
   */
  resourceCount?: string;
  /**
   * @remarks
   * The resource group ID.
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
   * 测试资源组
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * > The scheduled tasks associated with the resource group.
   * >
   * > - These scheduled tasks apply to cloud computers in the resource group and take precedence over any tasks associated with individual cloud computers.
   */
  timers?: DescribeResourceGroupsResponseBodyResourceGroupTimers[];
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
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
      aliyunResourceGroupId: 'string',
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

export class DescribeResourceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68BA1DF7-8814-5AED-B844-F8F7F7****
   */
  requestId?: string;
  /**
   * @remarks
   * A list of resource groups.
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

