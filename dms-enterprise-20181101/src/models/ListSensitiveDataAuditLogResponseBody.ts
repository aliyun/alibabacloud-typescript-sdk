// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogListSensitiveDataLog extends $dara.Model {
  /**
   * @remarks
   * The name of the column that contains sensitive data.
   * 
   * @example
   * ExampleColumnName
   */
  columnName?: string;
  /**
   * @remarks
   * The permission that the user has on the column. Valid values:
   * 
   * *   **No permission**
   * *   **Partial redaction**
   * *   **Plaintext**
   * *   **Change**
   * *   **Enable data masking**
   * *   **Disable data masking**
   * 
   * @example
   * Change
   */
  columnPermissionType?: string;
  /**
   * @remarks
   * The algorithm used for data masking.
   * 
   * @example
   * Default - Full redaction
   */
  desensitizationRule?: string;
  /**
   * @remarks
   * The sensitivity level of the data. Valid values:
   * 
   * *   **Low**
   * *   **Medium**
   * *   **High**
   * 
   * @example
   * Low
   */
  securityLevel?: string;
  /**
   * @remarks
   * The name of the table that stores the sensitive data.
   * 
   * @example
   * ExampleTableName
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnPermissionType: 'ColumnPermissionType',
      desensitizationRule: 'DesensitizationRule',
      securityLevel: 'SecurityLevel',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnPermissionType: 'string',
      desensitizationRule: 'string',
      securityLevel: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogList extends $dara.Model {
  /**
   * @remarks
   * The name of the database that stores the sensitive data.
   * 
   * @example
   * ExampleDbName@xxx.xxx.xxx.xxx:3306
   */
  dbDisplayName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 12****
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the function module whose audit logs were queried.
   * 
   * @example
   * SQL_CONSOLE
   */
  moduleName?: string;
  /**
   * @remarks
   * The time when the operation was performed. The time is in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-11-18 10:01:00
   */
  opTime?: string;
  /**
   * @remarks
   * The logs for sensitive data.
   */
  sensitiveDataLog?: ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogListSensitiveDataLog[];
  /**
   * @remarks
   * The details of the object on which the operation was performed. The value of this parameter is in one of the following formats:
   * 
   * *   Object name - object ID
   * *   Object name (object ID)
   * 
   * @example
   * Ticket - 1\\*\\*\\*\\*
   */
  targetName?: string;
  /**
   * @remarks
   * The user ID of the requester.
   * 
   * @example
   * 1**
   */
  userId?: number;
  /**
   * @remarks
   * The username of the requester.
   * 
   * @example
   * ExampleUserName
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbDisplayName: 'DbDisplayName',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      opTime: 'OpTime',
      sensitiveDataLog: 'SensitiveDataLog',
      targetName: 'TargetName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbDisplayName: 'string',
      instanceId: 'number',
      moduleName: 'string',
      opTime: 'string',
      sensitiveDataLog: { 'type': 'array', 'itemType': ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogListSensitiveDataLog },
      targetName: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveDataLog)) {
      $dara.Model.validateArray(this.sensitiveDataLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSensitiveDataAuditLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E0D21075-CD3E-4D98-8264-FD8AD04A63B6
   */
  requestId?: string;
  /**
   * @remarks
   * The audit logs for sensitive data.
   */
  sensitiveDataAuditLogList?: ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogList[];
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
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      sensitiveDataAuditLogList: 'SensitiveDataAuditLogList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sensitiveDataAuditLogList: { 'type': 'array', 'itemType': ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogList },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveDataAuditLogList)) {
      $dara.Model.validateArray(this.sensitiveDataAuditLogList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

