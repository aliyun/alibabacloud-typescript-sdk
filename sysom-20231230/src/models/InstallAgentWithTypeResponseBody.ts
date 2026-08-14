// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentWithTypeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * You can use this task ID to call the GetAgentTask operation to check the task execution status.
   * 
   * @example
   * 26b3cd97389c43dcad6bc4901c36fcec
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
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

export class InstallAgentWithTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: InstallAgentWithTypeResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * 1D8887FC-4BDB-5A1C-AB19-135C29A9E481
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InstallAgentWithTypeResponseBodyData,
      message: 'string',
      requestId: 'string',
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

