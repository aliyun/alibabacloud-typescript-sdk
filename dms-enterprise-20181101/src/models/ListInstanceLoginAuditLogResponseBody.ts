// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogListInstanceLoginAuditLog extends $dara.Model {
  /**
   * @remarks
   * The database account that is used to log on to the instance.
   * 
   * @example
   * test_User
   */
  dbUser?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 177****
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * rm-bp144d5ky4l4rli0417****.mysql.rds.aliyuncs.com:3306[rm-bp144d5ky4l4r****]
   */
  instanceName?: string;
  /**
   * @remarks
   * The time when the user performed an operation on the instance.
   * 
   * @example
   * 2021-11-18 11:13:26
   */
  opTime?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 117.36.XX.XX,100.104.XX.XX
   */
  requestIp?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 12****
   */
  userId?: number;
  /**
   * @remarks
   * The alias of the user.
   * 
   * @example
   * test_UserName
   */
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
  /**
   * @remarks
   * The logon records of the instance.
   */
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

