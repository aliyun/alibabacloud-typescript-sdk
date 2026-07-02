// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 63fc5acb99e642d793f42912612e8001
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

export class UninstallAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * 13772206-1162-5A0F-81F0-79A10C249A5E
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * - If code is Success, the authorization is successful.
   * - Other status codes indicate that the authorization has failed. Check the message field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: UninstallAgentResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If code is Success, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
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
      data: UninstallAgentResponseBodyData,
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

