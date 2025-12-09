// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotebookAndSubmitTaskResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * Request Invalid
   */
  errMsg?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @example
   * 5zrs5szpiezlb9m3qxi6zp32h
   */
  sessionId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

