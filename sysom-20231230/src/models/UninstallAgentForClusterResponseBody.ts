// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallAgentForClusterResponseBodyData extends $dara.Model {
  /**
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

export class UninstallAgentForClusterResponseBody extends $dara.Model {
  /**
   * @example
   * 44841312-7227-55C9-AE03-D59729BFAE38
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: UninstallAgentForClusterResponseBodyData;
  /**
   * @example
   * SysomOpenAPIException: SysomOpenAPI.NotAuthorizedInstance Instance 21 is not authorized
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
      data: UninstallAgentForClusterResponseBodyData,
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

