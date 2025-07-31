// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdHocTaskLogResponseBodyLogInfo extends $dara.Model {
  /**
   * @example
   * test
   */
  content?: string;
  hasNext?: boolean;
  hasResult?: boolean;
  /**
   * @example
   * 2021
   */
  nextOffset?: number;
  /**
   * @example
   * 0
   */
  subTaskId?: number;
  /**
   * @example
   * MaxCompute_SQL_300000843_1611548758327
   */
  taskId?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  logInfo?: GetAdHocTaskLogResponseBodyLogInfo;
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

