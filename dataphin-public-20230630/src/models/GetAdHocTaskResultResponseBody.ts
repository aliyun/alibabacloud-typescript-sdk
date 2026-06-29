// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdHocTaskResultResponseBodyExecuteResult extends $dara.Model {
  /**
   * @remarks
   * The task execution result.
   * 
   * @example
   * 1
   */
  result?: string;
  /**
   * @remarks
   * The ID of the corresponding scheduling task.
   * 
   * @example
   * t_2242892326444990464_20210125_2242892326444990465
   */
  scheduleTaskId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * MaxCompute_SQL_300000843_1611548758327
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      scheduleTaskId: 'ScheduleTaskId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      scheduleTaskId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocTaskResultResponseBody extends $dara.Model {
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
   * The execution result.
   */
  executeResult?: GetAdHocTaskResultResponseBodyExecuteResult;
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
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      executeResult: 'ExecuteResult',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      executeResult: GetAdHocTaskResultResponseBodyExecuteResult,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.executeResult && typeof (this.executeResult as any).validate === 'function') {
      (this.executeResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

