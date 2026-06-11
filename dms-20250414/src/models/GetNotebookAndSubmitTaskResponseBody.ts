// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotebookAndSubmitTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. `Success` indicates that the request was successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Request Invalid
   */
  errMsg?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 5zrs5szpiezlb9m3qxi6zp32h
   */
  sessionId?: string;
  /**
   * @remarks
   * Indicates whether the request succedded. Valid values:
   * 
   * - **true**: The request succedded.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * @example
   * IcICC2nbMpYp9KygS43n010100
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errMsg: 'ErrMsg',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errMsg: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      sessionId: 'string',
      success: 'boolean',
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

