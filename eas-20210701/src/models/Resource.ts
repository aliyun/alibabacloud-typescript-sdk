// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Resource extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster where the resource group is located.
   * 
   * @example
   * cn-shanghai
   */
  clusterId?: string;
  /**
   * @remarks
   * The total number of CPU cores in the resource group.
   * 
   * @example
   * 64
   */
  cpuCount?: number;
  /**
   * @remarks
   * The number of used CPU cores in the resource group.
   * 
   * @example
   * 8
   */
  cpuUsed?: number;
  /**
   * @remarks
   * The time the resource group was created, in ISO 8601 format.
   * 
   * @example
   * 2019-02-26T17:52:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * {}
   */
  extraData?: { [key: string]: any };
  /**
   * @remarks
   * The features supported by the resource group.
   */
  features?: string[];
  /**
   * @remarks
   * The total number of GPUs in the resource group.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The number of used GPUs in the resource group.
   * 
   * @example
   * 1
   */
  gpuUsed?: number;
  /**
   * @remarks
   * The total number of instances (prepaid and postpaid) in the resource group.
   * 
   * @example
   * 4
   */
  instanceCount?: number;
  /**
   * @remarks
   * The maximum number of allocatable CPU cores per node.
   * 
   * @example
   * 16
   */
  instanceMaxAllocatableCPU?: number;
  /**
   * @remarks
   * The maximum number of allocatable GPUs per node.
   * 
   * @example
   * 2
   */
  instanceMaxAllocatableGPU?: number;
  /**
   * @remarks
   * The maximum allocatable memory per node in the resource group.
   * 
   * @example
   * 2048
   */
  instanceMaxAllocatableMemory?: number;
  /**
   * @remarks
   * The total memory of the resource group, in MB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The amount of used memory in the resource group, in MB.
   * 
   * @example
   * 2048
   */
  memoryUsed?: number;
  /**
   * @remarks
   * The latest status message for the resource group.
   * 
   * @example
   * Resource is ready
   */
  message?: string;
  /**
   * @remarks
   * The number of postpaid instances.
   * 
   * @example
   * 2
   */
  postPaidInstanceCount?: number;
  /**
   * @remarks
   * The number of prepaid instances.
   * 
   * @example
   * 2
   */
  prePaidInstanceCount?: number;
  /**
   * @remarks
   * The unique identifier of the resource group.
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
   * - `Dedicated`: A dedicated resource group.
   * 
   * - `SelfManaged`: A self-managed resource group.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of services deployed in the resource group.
   * 
   * @example
   * 1
   */
  serviceCount?: number;
  /**
   * @remarks
   * The status of the resource group.
   * 
   * @example
   * ResourceReady
   */
  status?: string;
  /**
   * @remarks
   * The time the resource group was last updated, in ISO 8601 format.
   * 
   * @example
   * 2019-02-26T19:52:49Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The usage mode of the resource group.
   * 
   * @example
   * inference
   */
  usageMode?: string;
  /**
   * @remarks
   * The provider of the compute instances in the resource group, such as ECS.
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
      serviceCount: 'ServiceCount',
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
      serviceCount: 'number',
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

