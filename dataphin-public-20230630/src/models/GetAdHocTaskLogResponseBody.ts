// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdHocTaskLogResponseBodyLogInfo extends $dara.Model {
  /**
   * @remarks
   * The runtime log content.
   * 
   * @example
   * test
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the next log entry exists.
   */
  hasNext?: boolean;
  /**
   * @remarks
   * Indicates whether the current query produces a result.
   */
  hasResult?: boolean;
  /**
   * @remarks
   * The start position of the next log entry.
   * 
   * @example
   * 2021
   */
  nextOffset?: number;
  /**
   * @remarks
   * The subtask ID.
   * 
   * @example
   * 0
   */
  subTaskId?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * MaxCompute_SQL_300000843_1611548758327
   */
  taskId?: string;
  /**
   * @remarks
   * The task running status. Example: WAIT_RESOURCE indicates that the task is waiting for resources.
   * 
   * @example
   * WAIT_RESOURCE
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      hasNext: 'HasNext',
      hasResult: 'HasResult',
      nextOffset: 'NextOffset',
      subTaskId: 'SubTaskId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      hasNext: 'boolean',
      hasResult: 'boolean',
      nextOffset: 'number',
      subTaskId: 'number',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocTaskLogResponseBody extends $dara.Model {
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
   * The log details.
   */
  logInfo?: GetAdHocTaskLogResponseBodyLogInfo;
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
      httpStatusCode: 'HttpStatusCode',
      logInfo: 'LogInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      logInfo: GetAdHocTaskLogResponseBodyLogInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.logInfo && typeof (this.logInfo as any).validate === 'function') {
      (this.logInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

