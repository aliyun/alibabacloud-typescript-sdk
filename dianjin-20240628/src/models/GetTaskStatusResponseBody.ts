// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Execution time, in milliseconds
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Response data. The current status of the task.
   * 
   * - invalid: Parameters or dependent resources are unavailable.
   * 
   * - success: The task completed successfully.
   * 
   * - evict: The task was canceled.
   * 
   * - error: The task failed.
   * 
   * - running: The task is running.
   * 
   * - pending: The task is queued.
   * 
   * @example
   * running
   */
  data?: string;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 30F6AD44-F078-540D-B5A5-1E519C8E9E6D
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
  /**
   * @remarks
   * Timestamp
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'string',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

