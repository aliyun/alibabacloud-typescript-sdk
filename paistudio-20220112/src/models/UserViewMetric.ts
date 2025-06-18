// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserViewMetric extends $dara.Model {
  CPUNodeNumber?: number;
  CPUUsageRate?: string;
  cpuJobNames?: string[];
  cpuNodeNames?: string[];
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUNodeNumber?: number;
  GPUUsageRate?: string;
  gpuJobNames?: string[];
  gpuNodeNames?: string[];
  jobType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeNames?: string[];
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  /**
   * @example
   * rg17tmvwiokhzaxg
   */
  resourceGroupId?: string;
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      CPUNodeNumber: 'CPUNodeNumber',
      CPUUsageRate: 'CPUUsageRate',
      cpuJobNames: 'CpuJobNames',
      cpuNodeNames: 'CpuNodeNames',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUNodeNumber: 'GPUNodeNumber',
      GPUUsageRate: 'GPUUsageRate',
      gpuJobNames: 'GpuJobNames',
      gpuNodeNames: 'GpuNodeNames',
      jobType: 'JobType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeNames: 'NodeNames',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      resourceGroupId: 'ResourceGroupId',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUNodeNumber: 'number',
      CPUUsageRate: 'string',
      cpuJobNames: { 'type': 'array', 'itemType': 'string' },
      cpuNodeNames: { 'type': 'array', 'itemType': 'string' },
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUNodeNumber: 'number',
      GPUUsageRate: 'string',
      gpuJobNames: { 'type': 'array', 'itemType': 'string' },
      gpuNodeNames: { 'type': 'array', 'itemType': 'string' },
      jobType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      resourceGroupId: 'string',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cpuJobNames)) {
      $dara.Model.validateArray(this.cpuJobNames);
    }
    if(Array.isArray(this.cpuNodeNames)) {
      $dara.Model.validateArray(this.cpuNodeNames);
    }
    if(Array.isArray(this.gpuJobNames)) {
      $dara.Model.validateArray(this.gpuJobNames);
    }
    if(Array.isArray(this.gpuNodeNames)) {
      $dara.Model.validateArray(this.gpuNodeNames);
    }
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

