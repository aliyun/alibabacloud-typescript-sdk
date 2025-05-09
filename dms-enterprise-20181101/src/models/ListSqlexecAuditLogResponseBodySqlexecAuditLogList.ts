// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSQLExecAuditLogResponseBodySQLExecAuditLogListSQLExecAuditLog } from "./ListSqlexecAuditLogResponseBodySqlexecAuditLogListSqlexecAuditLog";


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

