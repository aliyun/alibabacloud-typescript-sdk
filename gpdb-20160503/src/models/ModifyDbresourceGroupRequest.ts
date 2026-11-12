// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBResourceGroupRequestResourceGroupItems extends $dara.Model {
  /**
   * @remarks
   * The configurations of the resource group to which you want to modify.
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
   * This parameter is required.
   * 
   * @example
   * {"CpuRateLimit":"10","MemoryLimit":"12","MemorySharedQuota":"20","MemorySpillRatio":"75","Concurrency":"3"}
   */
  resourceGroupConfig?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * testgroup
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupConfig: 'ResourceGroupConfig',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupConfig: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The information about the resource group.
   * 
   * This parameter is required.
   */
  resourceGroupItems?: ModifyDBResourceGroupRequestResourceGroupItems[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      resourceGroupItems: 'ResourceGroupItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      resourceGroupItems: { 'type': 'array', 'itemType': ModifyDBResourceGroupRequestResourceGroupItems },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupItems)) {
      $dara.Model.validateArray(this.resourceGroupItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

