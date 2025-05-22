// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterUsedUtilizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned by the backend service. The number is incremented.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The CPU utilization of the cluster. Unit: percentage.
   * 
   * @example
   * 50
   */
  cpuTotal?: number;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * dtscluster_h3fl1cs217sx952
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The total disk size of the cluster. Unit: GB.
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
   * The total number of DTS units (DUs).
   * 
   * @example
   * 30
   */
  duTotal?: number;
  /**
   * @remarks
   * The usage of DUs.
   * 
   * @example
   * 2
   */
  duUsed?: number;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace %s in the ErrMessage parameter.
   * 
   * @example
   * Type
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The total amount of memory. A value of 0 is temporarily returned.
   * 
   * @example
   * 0
   */
  memoryTotal?: number;
  /**
   * @remarks
   * The memory usage. A value of 0 is temporarily returned.
   * 
   * @example
   * 0
   */
  memoryUsed?: number;
  /**
   * @remarks
   * The memory usage.
   * 
   * @example
   * 1.0
   */
  memoryUsedPercentage?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of tasks that are in progress.
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

