// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBResourceGroupResponseBodyResourceGroupItemsResourceGroupItemRoleList extends $dara.Model {
  role?: string[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.role)) {
      $dara.Model.validateArray(this.role);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupResponseBodyResourceGroupItemsResourceGroupItem extends $dara.Model {
  resourceGroupConfig?: string;
  resourceGroupName?: string;
  roleList?: DescribeDBResourceGroupResponseBodyResourceGroupItemsResourceGroupItemRoleList;
  static names(): { [key: string]: string } {
    return {
      resourceGroupConfig: 'ResourceGroupConfig',
      resourceGroupName: 'ResourceGroupName',
      roleList: 'RoleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupConfig: 'string',
      resourceGroupName: 'string',
      roleList: DescribeDBResourceGroupResponseBodyResourceGroupItemsResourceGroupItemRoleList,
    };
  }

  validate() {
    if(this.roleList && typeof (this.roleList as any).validate === 'function') {
      (this.roleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupResponseBodyResourceGroupItems extends $dara.Model {
  resourceGroupItem?: DescribeDBResourceGroupResponseBodyResourceGroupItemsResourceGroupItem[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupItem: 'ResourceGroupItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupItem: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyResourceGroupItemsResourceGroupItem },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupItem)) {
      $dara.Model.validateArray(this.resourceGroupItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  resourceGroupItems?: DescribeDBResourceGroupResponseBodyResourceGroupItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupItems: 'ResourceGroupItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupItems: DescribeDBResourceGroupResponseBodyResourceGroupItems,
    };
  }

  validate() {
    if(this.resourceGroupItems && typeof (this.resourceGroupItems as any).validate === 'function') {
      (this.resourceGroupItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

