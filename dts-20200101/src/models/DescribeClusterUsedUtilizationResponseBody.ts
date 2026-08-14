// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterUsedUtilizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code. The value is incremented.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The CPU utilization of the cluster. Unit: %.
   * 
   * @example
   * 50
   */
  cpuTotal?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * dtscluster_h3fl1cs217sx952
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The total disk space of the cluster. Unit: GB.
   * 
   * @example
   * 1024
   */
  diskTotal?: number;
  /**
   * @remarks
   * The disk usage of the cluster. Unit: GB.
   * 
   * @example
   * 96
   */
  diskUsed?: number;
  /**
   * @remarks
   * The total number of DUs.
   * 
   * @example
   * 30
   */
  duTotal?: number;
  /**
   * @remarks
   * The number of used DUs.
   * 
   * @example
   * 2
   */
  duUsed?: number;
  /**
   * @remarks
   * The dynamic error message. This parameter is used to replace the %s placeholder in the ErrMessage response parameter.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The total memory. The value 0 is returned.
   * 
   * @example
   * 0
   */
  memoryTotal?: number;
  /**
   * @remarks
   * The memory usage. The value 0 is returned.
   * 
   * @example
   * 0
   */
  memoryUsed?: number;
  /**
   * @remarks
   * The memory usage percentage.
   * 
   * @example
   * 1.0
   */
  memoryUsedPercentage?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of running tasks.
   * 
   * @example
   * 3
   */
  taskRunning?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cpuTotal: 'CpuTotal',
      dedicatedClusterId: 'DedicatedClusterId',
      diskTotal: 'DiskTotal',
      diskUsed: 'DiskUsed',
      duTotal: 'DuTotal',
      duUsed: 'DuUsed',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      memoryTotal: 'MemoryTotal',
      memoryUsed: 'MemoryUsed',
      memoryUsedPercentage: 'MemoryUsedPercentage',
      requestId: 'RequestId',
      success: 'Success',
      taskRunning: 'TaskRunning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cpuTotal: 'number',
      dedicatedClusterId: 'string',
      diskTotal: 'number',
      diskUsed: 'number',
      duTotal: 'number',
      duUsed: 'number',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      memoryTotal: 'number',
      memoryUsed: 'number',
      memoryUsedPercentage: 'number',
      requestId: 'string',
      success: 'boolean',
      taskRunning: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

