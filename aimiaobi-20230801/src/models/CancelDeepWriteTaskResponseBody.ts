// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelDeepWriteTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * User query
   * 
   * @example
   * 北京2025年新能源汽车发展趋势
   */
  input?: string;
  /**
   * @remarks
   * Task status
   * 
   * @example
   * cancelled
   */
  status?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * xbabac91-fdad-44d6-95ce-******
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

export class CancelDeepWriteTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * Task response object
   */
  data?: CancelDeepWriteTaskResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded
   * 
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
      data: CancelDeepWriteTaskResponseBodyData,
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

