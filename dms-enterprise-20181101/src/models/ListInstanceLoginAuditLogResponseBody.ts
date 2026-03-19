// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogListInstanceLoginAuditLog extends $dara.Model {
  dbUser?: string;
  instanceId?: number;
  instanceName?: string;
  opTime?: string;
  requestIp?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbUser: 'DbUser',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      opTime: 'OpTime',
      requestIp: 'RequestIp',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbUser: 'string',
      instanceId: 'number',
      instanceName: 'string',
      opTime: 'string',
      requestIp: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogList extends $dara.Model {
  instanceLoginAuditLog?: ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogListInstanceLoginAuditLog[];
  static names(): { [key: string]: string } {
    return {
      instanceLoginAuditLog: 'InstanceLoginAuditLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceLoginAuditLog: { 'type': 'array', 'itemType': ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogListInstanceLoginAuditLog },
    };
  }

  validate() {
    if(Array.isArray(this.instanceLoginAuditLog)) {
      $dara.Model.validateArray(this.instanceLoginAuditLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceLoginAuditLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * InvalidPageSize
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Specified parameter PageSize is not valid.
   */
  errorMessage?: string;
  instanceLoginAuditLogList?: ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 074CE7C9-4F9C-5B62-89BC-7B4914A3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceLoginAuditLogList: 'InstanceLoginAuditLogList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instanceLoginAuditLogList: ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceLoginAuditLogList && typeof (this.instanceLoginAuditLogList as any).validate === 'function') {
      (this.instanceLoginAuditLogList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

