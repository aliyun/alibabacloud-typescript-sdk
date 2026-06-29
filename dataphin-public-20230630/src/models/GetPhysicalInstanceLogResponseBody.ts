// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalInstanceLogResponseBodyTaskrunLogList extends $dara.Model {
  /**
   * @remarks
   * The execution duration of the task. Unit: seconds.
   * 
   * @example
   * 60s
   */
  duration?: string;
  /**
   * @remarks
   * The time when the task finished running.
   * 
   * @example
   * 2024-05-30 16:48:13
   */
  endTime?: string;
  /**
   * @remarks
   * The execution log content. This value is empty if the task has not been run.
   * 
   * @example
   * xx
   */
  logContent?: string;
  /**
   * @remarks
   * The time when the task started running.
   * 
   * @example
   * 2024-05-30 16:47:13
   */
  startTime?: string;
  /**
   * @remarks
   * The execution status.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The task ID for each run.
   * 
   * @example
   * tr_23231
   */
  taskrunId?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      endTime: 'EndTime',
      logContent: 'LogContent',
      startTime: 'StartTime',
      status: 'Status',
      taskrunId: 'TaskrunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      endTime: 'string',
      logContent: 'string',
      startTime: 'string',
      status: 'string',
      taskrunId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
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
   * All execution logs of the instance, including logs from multiple reruns.
   */
  taskrunLogList?: GetPhysicalInstanceLogResponseBodyTaskrunLogList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskrunLogList: 'TaskrunLogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskrunLogList: { 'type': 'array', 'itemType': GetPhysicalInstanceLogResponseBodyTaskrunLogList },
    };
  }

  validate() {
    if(Array.isArray(this.taskrunLogList)) {
      $dara.Model.validateArray(this.taskrunLogList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

