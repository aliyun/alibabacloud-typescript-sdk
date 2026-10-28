// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaJobViewMetric extends $dara.Model {
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
   * The GPU utilization.
   * 
   * @example
   * 10
   */
  GPUUsageRate?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dsw-12580
   */
  jobId?: string;
  /**
   * @remarks
   * The job type, such as DLC or DSW.
   * 
   * @example
   * TFJob
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
   * The network inbound rate.
   * 
   * @example
   * 1
   */
  networkInputRate?: string;
  /**
   * @remarks
   * The network outbound rate.
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
   * The number of requested GPUs.
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
      CPUUsageRate: 'CPUUsageRate',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUUsageRate: 'GPUUsageRate',
      jobId: 'JobId',
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
      CPUUsageRate: 'string',
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUUsageRate: 'string',
      jobId: 'string',
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
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

