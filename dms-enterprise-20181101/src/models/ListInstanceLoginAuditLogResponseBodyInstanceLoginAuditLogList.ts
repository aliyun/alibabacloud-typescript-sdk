// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogListInstanceLoginAuditLog } from "./ListInstanceLoginAuditLogResponseBodyInstanceLoginAuditLogListInstanceLoginAuditLog";


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

