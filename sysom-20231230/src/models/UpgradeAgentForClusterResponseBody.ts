// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeAgentForClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * You can use this task ID to call the GetAgentTask operation to query the task execution status.
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
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate authorization failure. In this case, check the `message` field for detailed error information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: UpgradeAgentForClusterResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
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

