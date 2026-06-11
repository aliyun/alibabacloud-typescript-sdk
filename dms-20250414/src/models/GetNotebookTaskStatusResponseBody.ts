// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotebookTaskStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL to preview the scheduling result.
   * 
   * @example
   * https://dms.aliyun.com/web-ide?***
   */
  notebookSchedulePreviewUrl?: string;
  /**
   * @remarks
   * The progress of the scheduling task.
   * 
   * @example
   * 5/6
   */
  progress?: string;
  /**
   * @remarks
   * The output of the scheduling task.
   * 
   * @example
   * test
   */
  result?: string;
  /**
   * @remarks
   * The status of the scheduling result.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      notebookSchedulePreviewUrl: 'NotebookSchedulePreviewUrl',
      progress: 'Progress',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notebookSchedulePreviewUrl: 'string',
      progress: 'string',
      result: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNotebookTaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of Success indicates that the request was successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The scheduling result.
   */
  data?: GetNotebookTaskStatusResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The status code.
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
   * Instance not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0D21075-CD3E-4D98-8264-FD8AD04A63B6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
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
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetNotebookTaskStatusResponseBodyData,
      errorCode: 'string',
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

