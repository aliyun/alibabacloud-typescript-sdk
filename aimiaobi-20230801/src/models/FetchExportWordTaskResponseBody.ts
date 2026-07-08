// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchExportWordTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The file URL.
   * 
   * @example
   * http://xxx/xxx.xls
   */
  fileUrl?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * PENDING-待执行、RUNNING-执行中、SUCCESSED-成功、SUSPENDED-暂停、FAILED-失败、CANCELLED-取消
   */
  taskStats?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      taskStats: 'TaskStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      taskStats: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchExportWordTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: FetchExportWordTaskResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
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
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\`: successful. \\`false\\`: failed.
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
      data: FetchExportWordTaskResponseBodyData,
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

