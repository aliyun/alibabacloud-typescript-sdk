// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAITaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * Forbidden
   */
  code?: string;
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
   * Error message.
   * 
   * @example
   * You are not authorized to complete this action.
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Values:
   * - true: Call succeeded.
   * - false: Call failed.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * AI task ID.
   * 
   * @example
   * t-asas*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

