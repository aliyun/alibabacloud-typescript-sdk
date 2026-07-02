// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * You can use this task ID to call the GetAgentTask operation to retrieve the task execution status.
   * 
   * @example
   * 26b3cd97389c43dcad6bc4901c36fcec
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

export class InstallAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * 1D8887FC-4BDB-5A1C-AB19-135C29A9E481
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: InstallAgentResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * ""
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
      data: InstallAgentResponseBodyData,
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

