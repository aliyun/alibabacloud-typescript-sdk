// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAdHocTaskResponseBodyExecuteResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  subTaskCount?: number;
  /**
   * @example
   * MaxCompute_SQL_300000843_1611548758327
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      subTaskCount: 'SubTaskCount',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subTaskCount: 'number',
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

export class ExecuteAdHocTaskResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  executeResult?: ExecuteAdHocTaskResponseBodyExecuteResult;
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
      executeResult: ExecuteAdHocTaskResponseBodyExecuteResult,
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

