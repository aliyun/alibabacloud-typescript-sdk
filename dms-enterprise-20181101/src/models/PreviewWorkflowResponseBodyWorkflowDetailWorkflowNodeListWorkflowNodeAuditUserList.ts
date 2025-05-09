// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserListAuditUser } from "./PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserListAuditUser";


export class PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserList extends $dara.Model {
  auditUser?: PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserListAuditUser[];
  static names(): { [key: string]: string } {
    return {
      auditUser: 'AuditUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditUser: { 'type': 'array', 'itemType': PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserListAuditUser },
    };
  }

  validate() {
    if(Array.isArray(this.auditUser)) {
      $dara.Model.validateArray(this.auditUser);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

