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
  /**
   * @remarks
   * The configurations of the resource group.
   * 
   * > 
   * 
   * *   CpuRateLimit: the percentage of CPU resources that are available for the resource group. Unit: %.
   * 
   * *   MemoryLimit: the percentage of memory resources that are available for the resource group. Unit: %.
   * 
   * *   MemorySharedQuota: the percentage of memory resources shared among transactions that are submitted to the resource group. Unit: %. Default value: 80.
   * 
   * *   MemorySpillRatio: the memory spill ratio for memory-intensive transactions. When the memory that is used by memory-intensive transactions reaches this value, data is spilled to disks. Unit: %. Default value: 0.
   * 
   * *   Concurrency: the maximum number of concurrent transactions or parallel queries that are allowed for a resource group. Default value: 20.
   * 
   * @example
   * {"CpuRateLimit":"10","MemoryLimit":"12","MemorySharedQuota":"20","MemorySpillRatio":"75","Concurrency":"3"}
   */
  resourceGroupConfig?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * testgroup
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The roles.
   */
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
  /**
   * @remarks
   * The queried resource group information.
   */
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

