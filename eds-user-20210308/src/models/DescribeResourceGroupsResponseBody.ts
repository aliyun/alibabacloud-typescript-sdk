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
   * @example
   * pl-a8jnatl8kjasb***
   */
  id?: string;
  /**
   * @example
   * False
   */
  isDefault?: boolean;
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
   * @example
   * t-asdzx0mbjhg***
   */
  id?: string;
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

export class DescribeResourceGroupsResponseBody extends $dara.Model {
  /**
   * @example
   * 68BA1DF7-8814-5AED-B844-F8F7F7****
   */
  requestId?: string;
  resourceGroup?: DescribeResourceGroupsResponseBodyResourceGroup[];
  /**
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

