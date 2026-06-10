// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Job ID.
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
   * Request ID, which can be used for end-to-end diagnosis
   * 
   * @example
   * 13772206-1162-5A0F-81F0-79A10C249A5E
   */
  requestId?: string;
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates that authorization succeeded.  
   * - Other status codes indicate that authorization failed. When authorization fails, view the `message` field to obtain detailed error message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   */
  data?: UninstallAgentResponseBodyData;
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
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

