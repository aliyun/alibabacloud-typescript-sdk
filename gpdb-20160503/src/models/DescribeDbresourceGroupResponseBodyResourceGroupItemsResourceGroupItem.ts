// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBResourceGroupResponseBodyResourceGroupItemsResourceGroupItemRoleList } from "./DescribeDbresourceGroupResponseBodyResourceGroupItemsResourceGroupItemRoleList";


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

