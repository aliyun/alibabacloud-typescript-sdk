// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdHocTaskResultResponseBodyExecuteResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  result?: string;
  /**
   * @example
   * t_2242892326444990464_20210125_2242892326444990465
   */
  scheduleTaskId?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  executeResult?: GetAdHocTaskResultResponseBodyExecuteResult;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

