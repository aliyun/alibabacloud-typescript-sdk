// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskDetail } from "./TaskDetail";


export class GetTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total amount of data under the conditions of this request. This parameter is optional and does not need to be returned by default.
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
   * 0F01E603-8A9F-18ED-AD43-D52B5030****
   */
  requestId?: string;
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
  /**
   * @remarks
   * Job.
   */
  task?: TaskDetail;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      task: 'Task',
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
      task: TaskDetail,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

