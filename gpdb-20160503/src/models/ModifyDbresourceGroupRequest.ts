// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBResourceGroupRequestResourceGroupItems extends $dara.Model {
  /**
   * @remarks
   * The configuration of the resource group.
   * > 1. CpuRateLimit: the percentage of CPU resources available to the resource group. Unit: %.
   * > 2. MemoryLimit: the percentage of memory resources available to the resource group. Unit: %.
   * > 3. MemorySharedQuota: the percentage of memory resources shared among transactions submitted to the resource group. Unit: %. Default value: 80.
   * > 4. MemorySpillRatio: the memory usage threshold for memory-intensive transactions. When a transaction reaches this threshold, it spills to disk. Unit: %. Default value: 0.
   * > 5. Concurrency: the maximum concurrency allowed for the resource group. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * {"CpuRateLimit":10,"MemoryLimit":12,"MemorySharedQuota":20,"MemorySpillRatio":75,"Concurrency":3}
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
   * The ID of the instance.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specified region, including instance IDs.
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
   * The details of the resource groups.
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

