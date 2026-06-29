// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return encoding. The default value is 0, indicating normal execution.
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
   * ""
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
   * The response message of the request.
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
   * Indicates whether the operation succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Job status. Possible values:
   * - INIT: initialization.
   * - PROCESSING: processing.
   * - SUCC: succeeded.
   * - FAIL: failed.
   * - DELETED: deleted.
   * - OFFLINE: unpublished.
   * - FINISHED: finished.
   * 
   * @example
   * SUCC
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

