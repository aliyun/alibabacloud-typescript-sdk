// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogListSensitiveDataLog } from "./ListSensitiveDataAuditLogResponseBodySensitiveDataAuditLogListSensitiveDataLog";


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

