// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceInstanceWorker extends $dara.Model {
  /**
   * @remarks
   * The CPU core limit.
   * 
   * @example
   * 2
   */
  cpuLimit?: number;
  /**
   * @remarks
   * The number of CPU cores requested.
   * 
   * @example
   * 1
   */
  cpuRequest?: number;
  /**
   * @remarks
   * The GPU limit.
   * 
   * @example
   * 0
   */
  gpuLimit?: number;
  /**
   * @remarks
   * The number of GPUs requested.
   * 
   * @example
   * 0
   */
  gpuRequest?: number;
  /**
   * @remarks
   * The memory limit.
   * 
   * @example
   * 400
   */
  memoryLimit?: number;
  /**
   * @remarks
   * The requested memory.
   * 
   * @example
   * 200
   */
  memoryRquest?: number;
  /**
   * @remarks
   * The name of the service instance.
   * 
   * @example
   * test-india-5bbbfdbc98-****
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the instance is ready.
   * 
   * @example
   * true
   */
  ready?: boolean;
  /**
   * @remarks
   * The number of times the instance has been restarted.
   * 
   * @example
   * 3
   */
  restartCount?: number;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * test-in****
   */
  serviceName?: string;
  /**
   * @remarks
   * The start time of the instance, in UTC (ISO 8601 format).
   * 
   * @example
   * 2021-05-09T09:56:19Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cpuLimit: 'CpuLimit',
      cpuRequest: 'CpuRequest',
      gpuLimit: 'GpuLimit',
      gpuRequest: 'GpuRequest',
      memoryLimit: 'MemoryLimit',
      memoryRquest: 'MemoryRquest',
      name: 'Name',
      ready: 'Ready',
      restartCount: 'RestartCount',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuLimit: 'number',
      cpuRequest: 'number',
      gpuLimit: 'number',
      gpuRequest: 'number',
      memoryLimit: 'number',
      memoryRquest: 'number',
      name: 'string',
      ready: 'boolean',
      restartCount: 'number',
      serviceName: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

