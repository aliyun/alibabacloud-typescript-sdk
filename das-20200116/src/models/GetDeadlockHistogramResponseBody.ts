// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeadlockHistogramResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end time of the analysis task range.
   * 
   * @example
   * 1729998000000
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pc-bp1u5mas9exx7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of deadlocks.
   * 
   * @example
   * 2
   */
  lockNumber?: number;
  /**
   * @remarks
   * The node ID. This parameter is used for PolarDB for MySQL clusters.
   * 
   * @example
   * pi-bp16v3824rt73****
   */
  nodeId?: string;
  /**
   * @remarks
   * The start time of the analysis task range.
   * 
   * @example
   * 1729994400000
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **SUCCESS**: The analysis is successful.
   * - **FAILED**: The analysis failed or encountered an exception.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The full deadlock analysis task ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-1321B394****
   */
  taskId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 108************
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      lockNumber: 'LockNumber',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      lockNumber: 'number',
      nodeId: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeadlockHistogramResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetDeadlockHistogramResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A74B755-98B7-59DB-8724-1321B394****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetDeadlockHistogramResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

