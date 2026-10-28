// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaUserViewMetric extends $dara.Model {
  /**
   * @remarks
   * The number of CPU nodes.
   * 
   * @example
   * 2
   */
  CPUNodeNumber?: number;
  /**
   * @remarks
   * The CPU utilization.
   * 
   * @example
   * 59
   */
  CPUUsageRate?: string;
  /**
   * @remarks
   * The CPU jobs.
   */
  cpuJobNames?: string[];
  /**
   * @remarks
   * The CPU node list.
   */
  cpuNodeNames?: string[];
  /**
   * @remarks
   * The disk read rate.
   * 
   * @example
   * 22
   */
  diskReadRate?: string;
  /**
   * @remarks
   * The disk write rate.
   * 
   * @example
   * 22
   */
  diskWriteRate?: string;
  /**
   * @remarks
   * The number of GPU nodes.
   * 
   * @example
   * 1
   */
  GPUNodeNumber?: number;
  /**
   * @remarks
   * The GPU utilization.
   * 
   * @example
   * 10
   */
  GPUUsageRate?: string;
  /**
   * @remarks
   * The GPU jobs.
   */
  gpuJobNames?: string[];
  /**
   * @remarks
   * The GPU node list.
   */
  gpuNodeNames?: string[];
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * PyTorch
   */
  jobType?: string;
  /**
   * @remarks
   * The memory utilization.
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
   * The network output rate.
   * 
   * @example
   * 1
   */
  networkOutputRate?: string;
  /**
   * @remarks
   * The node list.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The number of requested CPU cores.
   * 
   * @example
   * 100
   */
  requestCPU?: number;
  /**
   * @remarks
   * The number of requested GPU cores.
   * 
   * @example
   * 10
   */
  requestGPU?: number;
  /**
   * @remarks
   * The requested memory in KB.
   * 
   * @example
   * 102400000
   */
  requestMemory?: number;
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 1000
   */
  totalCPU?: number;
  /**
   * @remarks
   * The total number of GPUs.
   * 
   * @example
   * 1
   */
  totalGPU?: number;
  /**
   * @remarks
   * The total memory in KB.
   * 
   * @example
   * 10240
   */
  totalMemory?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123456789
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

