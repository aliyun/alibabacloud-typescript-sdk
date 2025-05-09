// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProxySQLExecAuditLogResponseBodyProxySQLExecAuditLogListProxySQLExecAuditLog } from "./ListProxySqlexecAuditLogResponseBodyProxySqlexecAuditLogListProxySqlexecAuditLog";


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

