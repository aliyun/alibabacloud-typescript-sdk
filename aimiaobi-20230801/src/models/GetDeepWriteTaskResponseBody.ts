// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeepWriteTaskResponseBodyData extends $dara.Model {
  input?: string;
  /**
   * @example
   * queued
   */
  status?: string;
  /**
   * @example
   * a2267372-6042-46a4-aab0-1670dfc38c94
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      status: 'string',
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

export class GetDeepWriteTaskResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: GetDeepWriteTaskResponseBodyData;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeepWriteTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

