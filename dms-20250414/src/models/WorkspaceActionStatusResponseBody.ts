// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WorkspaceActionStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error message if the task fails.
   * 
   * @example
   * action failed
   */
  data?: string;
  /**
   * @remarks
   * The time when the task ended.
   * 
   * @example
   * 2026-01-13T14:30:20.582182728+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the task started.
   * 
   * @example
   * 2026-01-13T14:30:20.582182728+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the asynchronous task. Valid values: SUCCESS, ERROR, TIMEOUT, and CANCEL.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"phase\\": \\"Created\\", \\"latestExecError\\": {\\"message\\": \\"\\", \\"code\\": \\"\\", \\"requestId\\": \\"\\", \\"extraInfo\\": \\"\\", \\"title\\": \\"\\"}}
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      endTime: 'EndTime',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      endTime: 'string',
      startTime: 'string',
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

export class WorkspaceActionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: WorkspaceActionStatusResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidTid
   */
  errorCode?: string;
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
   * The error message that is returned if the request fails.
   * 
   * @example
   * This record is being collected, please wait for a moment.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
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
      data: WorkspaceActionStatusResponseBodyData,
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

