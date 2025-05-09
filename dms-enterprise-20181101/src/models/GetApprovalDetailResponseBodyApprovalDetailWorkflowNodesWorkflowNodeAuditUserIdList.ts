// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNodeAuditUserIdList extends $dara.Model {
  auditUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      auditUserIds: 'AuditUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.auditUserIds)) {
      $dara.Model.validateArray(this.auditUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

