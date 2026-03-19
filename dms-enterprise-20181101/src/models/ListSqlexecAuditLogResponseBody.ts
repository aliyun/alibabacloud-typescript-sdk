// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSQLExecAuditLogResponseBodySQLExecAuditLogListSQLExecAuditLog extends $dara.Model {
  affectRows?: number;
  dbId?: number;
  elapsedTime?: number;
  execState?: string;
  instanceId?: number;
  instanceName?: string;
  logic?: boolean;
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
      dbId: 'DbId',
      elapsedTime: 'ElapsedTime',
      execState: 'ExecState',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      logic: 'Logic',
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
      dbId: 'number',
      elapsedTime: 'number',
      execState: 'string',
      instanceId: 'number',
      instanceName: 'string',
      logic: 'boolean',
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

export class ListSQLExecAuditLogResponseBodySQLExecAuditLogList extends $dara.Model {
  SQLExecAuditLog?: ListSQLExecAuditLogResponseBodySQLExecAuditLogListSQLExecAuditLog[];
  static names(): { [key: string]: string } {
    return {
      SQLExecAuditLog: 'SQLExecAuditLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLExecAuditLog: { 'type': 'array', 'itemType': ListSQLExecAuditLogResponseBodySQLExecAuditLogListSQLExecAuditLog },
    };
  }

  validate() {
    if(Array.isArray(this.SQLExecAuditLog)) {
      $dara.Model.validateArray(this.SQLExecAuditLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSQLExecAuditLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * MissingStartTime
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * StartTime is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 39BC9C86-95AE-58F2-9862-A7C3D896****
   */
  requestId?: string;
  SQLExecAuditLogList?: ListSQLExecAuditLogResponseBodySQLExecAuditLogList;
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
      requestId: 'RequestId',
      SQLExecAuditLogList: 'SQLExecAuditLogList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      SQLExecAuditLogList: ListSQLExecAuditLogResponseBodySQLExecAuditLogList,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.SQLExecAuditLogList && typeof (this.SQLExecAuditLogList as any).validate === 'function') {
      (this.SQLExecAuditLogList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

