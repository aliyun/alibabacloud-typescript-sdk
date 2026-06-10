// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeAgentForClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Job ID.  
   * 
   * You can use this job ID to invoke the GetAgentTask API to view the execution status of the job.
   * 
   * @example
   * 7523e9e0ddc74d99a5236f4f4d5056e6
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpgradeAgentForClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID, which can be used for end-to-end Diagnosis
   * 
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates successful authorization;  
   * - Other status codes indicate authorization failure. When authorization fails, view the `message` field to obtain detailed error message;
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned Data.
   */
  data?: UpgradeAgentForClusterResponseBodyData;
  /**
   * @remarks
   * error message  
   * - If `code == Success`, this field is empty;  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: UpgradeAgentForClusterResponseBodyData,
      message: 'string',
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

