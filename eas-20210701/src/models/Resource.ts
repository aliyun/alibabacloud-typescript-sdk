// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Resource extends $dara.Model {
  clusterId?: string;
  cpuCount?: number;
  cpuUsed?: number;
  createTime?: string;
  extraData?: { [key: string]: any };
  features?: string[];
  gpuCount?: number;
  gpuUsed?: number;
  instanceCount?: number;
  instanceMaxAllocatableCPU?: number;
  instanceMaxAllocatableGPU?: number;
  instanceMaxAllocatableMemory?: number;
  memory?: number;
  memoryUsed?: number;
  message?: string;
  postPaidInstanceCount?: number;
  prePaidInstanceCount?: number;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  status?: string;
  updateTime?: string;
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

