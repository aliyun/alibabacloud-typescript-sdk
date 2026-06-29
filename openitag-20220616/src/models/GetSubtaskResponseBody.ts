// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleSubtask } from "./SimpleSubtask";


export class GetSubtaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code. The default value is 0, indicating normal execution.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details.
   * 
   * @example
   * null
   */
  details?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * Return message of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1****
   */
  requestId?: string;
  /**
   * @remarks
   * Subtask.
   */
  subtask?: SimpleSubtask;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * - true: The request succeeded.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      subtask: 'Subtask',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      subtask: SimpleSubtask,
      success: 'boolean',
    };
  }

  validate() {
    if(this.subtask && typeof (this.subtask as any).validate === 'function') {
      (this.subtask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

