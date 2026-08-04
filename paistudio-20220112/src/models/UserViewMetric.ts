// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserViewMetric extends $dara.Model {
  /**
   * @remarks
   * Number of CPU nodes.
   * 
   * @example
   * 2
   */
  CPUNodeNumber?: number;
  /**
   * @remarks
   * CPU usage rate.
   * 
   * @example
   * 59
   */
  CPUUsageRate?: string;
  /**
   * @remarks
   * CPU jobs.
   */
  cpuJobNames?: string[];
  /**
   * @remarks
   * List of CPU nodes.
   */
  cpuNodeNames?: string[];
  /**
   * @remarks
   * Disk read rate.
   * 
   * @example
   * 22
   */
  diskReadRate?: string;
  /**
   * @remarks
   * Disk write rate.
   * 
   * @example
   * 22
   */
  diskWriteRate?: string;
  /**
   * @remarks
   * Number of GPU nodes.
   * 
   * @example
   * 1
   */
  GPUNodeNumber?: number;
  /**
   * @remarks
   * GPU usage rate.
   * 
   * @example
   * 10
   */
  GPUUsageRate?: string;
  /**
   * @remarks
   * GPU jobs.
   */
  gpuJobNames?: string[];
  /**
   * @remarks
   * List of GPU nodes.
   */
  gpuNodeNames?: string[];
  /**
   * @remarks
   * Job type.
   * 
   * @example
   * PyTorch
   */
  jobType?: string;
  /**
   * @remarks
   * Memory usage rate.
   * 
   * @example
   * 20
   */
  memoryUsageRate?: string;
  /**
   * @remarks
   * The network input rate.
   * 
   * @example
   * 1
   */
  networkInputRate?: string;
  /**
   * @remarks
   * Network output rate.
   * 
   * @example
   * 1
   */
  networkOutputRate?: string;
  /**
   * @remarks
   * List of nodes.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * Number of CPU cores allocated.
   * 
   * @example
   * 100
   */
  requestCPU?: number;
  /**
   * @remarks
   * Number of GPU cores allocated.
   * 
   * @example
   * 10
   */
  requestGPU?: number;
  /**
   * @remarks
   * Allocated memory, in KB.
   * 
   * @example
   * 102400000
   */
  requestMemory?: number;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg17tmvwiokh****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Total number of CPU cores.
   * 
   * @example
   * 1000
   */
  totalCPU?: number;
  /**
   * @remarks
   * Total number of GPU cards.
   * 
   * @example
   * 1
   */
  totalGPU?: number;
  /**
   * @remarks
   * Total memory, in KB.
   * 
   * @example
   * 10240
   */
  totalMemory?: number;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 16111111****
   */
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

