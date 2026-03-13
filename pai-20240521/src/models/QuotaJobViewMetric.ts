// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Task } from "./Task";


export class QuotaJobViewMetric extends $dara.Model {
  CPUUsageRate?: string;
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUUsageRate?: string;
  /**
   * @deprecated
   */
  jobId?: string;
  /**
   * @deprecated
   */
  jobType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeNames?: string[];
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  /**
   * @deprecated
   */
  userId?: string;
  task?: Task;
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
      task: 'task',
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
      task: Task,
    };
  }

  validate() {
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

