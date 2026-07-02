// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentForClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 049ea0609515414b9e19c3389d7ba638
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

export class InstallAgentForClusterResponseBody extends $dara.Model {
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
   * - Any other status code indicates authorization failure. Check the `message` field for detailed error information.
   * 
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: InstallAgentForClusterResponseBodyData;
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
      data: InstallAgentForClusterResponseBodyData,
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

