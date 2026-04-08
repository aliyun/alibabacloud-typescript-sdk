// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Resource extends $dara.Model {
  /**
   * @remarks
   * The information about the clusters.
   * 
   * @example
   * cn-shanghai
   */
  clusterId?: string;
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 64
   */
  cpuCount?: number;
  cpuUsed?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2019-02-26T17:52:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * {}
   */
  extraData?: { [key: string]: any };
  features?: string[];
  /**
   * @remarks
   * The total number of GPUs.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  gpuUsed?: number;
  /**
   * @remarks
   * The total number of instances. It is equal to the number of subscription instances plus the number of pay-as-you-go instances.
   * 
   * @example
   * 4
   */
  instanceCount?: number;
  instanceMaxAllocatableCPU?: number;
  instanceMaxAllocatableGPU?: number;
  instanceMaxAllocatableMemory?: number;
  memory?: number;
  memoryUsed?: number;
  /**
   * @remarks
   * The latest message about the resource group.
   * 
   * @example
   * Resource is ready
   */
  message?: string;
  /**
   * @remarks
   * The number of pay-as-you-go instances.
   * 
   * @example
   * 2
   */
  postPaidInstanceCount?: number;
  /**
   * @remarks
   * The number of subscription instances.
   * 
   * @example
   * 2
   */
  prePaidInstanceCount?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * eas-r-asdasdasd
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * iot
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   Dedicated: the dedicated resource group.
   * *   SelfManaged: the self-managed resource group.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the resource group.
   * 
   * @example
   * ResouceReady
   */
  status?: string;
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * 2019-02-26T19:52:49Z
   */
  updateTime?: string;
  usageMode?: string;
  /**
   * @remarks
   * The vendor of the resource group instances.
   * 
   * Valid values:
   * 
   * *   ECS
   * *   BareMetal
   * 
   * @example
   * ECS
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cpuCount: 'CpuCount',
      cpuUsed: 'CpuUsed',
      createTime: 'CreateTime',
      extraData: 'ExtraData',
      features: 'Features',
      gpuCount: 'GpuCount',
      gpuUsed: 'GpuUsed',
      instanceCount: 'InstanceCount',
      instanceMaxAllocatableCPU: 'InstanceMaxAllocatableCPU',
      instanceMaxAllocatableGPU: 'InstanceMaxAllocatableGPU',
      instanceMaxAllocatableMemory: 'InstanceMaxAllocatableMemory',
      memory: 'Memory',
      memoryUsed: 'MemoryUsed',
      message: 'Message',
      postPaidInstanceCount: 'PostPaidInstanceCount',
      prePaidInstanceCount: 'PrePaidInstanceCount',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      status: 'Status',
      updateTime: 'UpdateTime',
      usageMode: 'UsageMode',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cpuCount: 'number',
      cpuUsed: 'number',
      createTime: 'string',
      extraData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      features: { 'type': 'array', 'itemType': 'string' },
      gpuCount: 'number',
      gpuUsed: 'number',
      instanceCount: 'number',
      instanceMaxAllocatableCPU: 'number',
      instanceMaxAllocatableGPU: 'number',
      instanceMaxAllocatableMemory: 'number',
      memory: 'number',
      memoryUsed: 'number',
      message: 'string',
      postPaidInstanceCount: 'number',
      prePaidInstanceCount: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      status: 'string',
      updateTime: 'string',
      usageMode: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(this.extraData) {
      $dara.Model.validateMap(this.extraData);
    }
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

