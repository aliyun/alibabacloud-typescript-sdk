// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogListProxySQLExecAuditLog extends $dara.Model {
  affectRows?: number;
  elapsedTime?: number;
  execState?: string;
  instanceId?: number;
  instanceName?: string;
  opTime?: string;
  remark?: string;
  SQL?: string;
  SQLType?: string;
  schemaName?: string;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      elapsedTime: 'ElapsedTime',
      execState: 'ExecState',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      opTime: 'OpTime',
      remark: 'Remark',
      SQL: 'SQL',
      SQLType: 'SQLType',
      schemaName: 'SchemaName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      elapsedTime: 'number',
      execState: 'string',
      instanceId: 'number',
      instanceName: 'string',
      opTime: 'string',
      remark: 'string',
      SQL: 'string',
      SQLType: 'string',
      schemaName: 'string',
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

export class ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogList extends $dara.Model {
  proxySQLExecAuditLog?: ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogListProxySQLExecAuditLog[];
  static names(): { [key: string]: string } {
    return {
      proxySQLExecAuditLog: 'ProxySQLExecAuditLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxySQLExecAuditLog: { 'type': 'array', 'itemType': ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogListProxySQLExecAuditLog },
    };
  }

  validate() {
    if(Array.isArray(this.proxySQLExecAuditLog)) {
      $dara.Model.validateArray(this.proxySQLExecAuditLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProxySQLExecAuditLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * InvalidStartTime
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Specified parameter StartTime is not valid.
   */
  errorMessage?: string;
  proxySQLExecAuditLogList?: ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50ECB006-2C35-5FCA-91B9-01987A0B****
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
      proxySQLExecAuditLogList: 'ProxySQLExecAuditLogList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      proxySQLExecAuditLogList: ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.proxySQLExecAuditLogList && typeof (this.proxySQLExecAuditLogList as any).validate === 'function') {
      (this.proxySQLExecAuditLogList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

