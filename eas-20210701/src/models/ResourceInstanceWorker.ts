// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceInstanceWorker extends $dara.Model {
  /**
   * @remarks
   * The maximum number of CPU cores.
   * 
   * @example
   * 2
   */
  cpuLimit?: number;
  /**
   * @remarks
   * The number of CPU cores that you applied for.
   * 
   * @example
   * 1
   */
  cpuRequest?: number;
  /**
   * @remarks
   * The maximum number of GPUs.
   * 
   * @example
   * 0
   */
  gpuLimit?: number;
  /**
   * @remarks
   * The number of GPUs that you applied for.
   * 
   * @example
   * 0
   */
  gpuRequest?: number;
  /**
   * @remarks
   * The maximum memory size.
   * 
   * @example
   * 400
   */
  memoryLimit?: number;
  /**
   * @remarks
   * The memory size that you applied for.
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
   * Indicates whether the instance worker is ready.
   * 
   * @example
   * true
   */
  ready?: boolean;
  /**
   * @remarks
   * The number of times the instance worker restarted.
   * 
   * @example
   * 3
   */
  restartCount?: number;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * test-in****
   */
  serviceName?: string;
  /**
   * @remarks
   * The time when the instance worker started.
   * 
   * @example
   * 2021-05-09T09:56:19Z
   */
  startTime?: string;
  /**
   * @remarks
   * The instance state.
   * 
   * Valid values:
   * 
   * *   Terminating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Succeeded
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Unknown
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Failed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Pending
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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

