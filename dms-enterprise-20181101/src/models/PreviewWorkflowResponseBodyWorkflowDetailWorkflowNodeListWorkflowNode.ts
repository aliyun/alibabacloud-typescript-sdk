// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserList } from "./PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserList";


export class PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNode extends $dara.Model {
  auditUserList?: PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserList;
  comment?: string;
  /**
   * @example
   * Owner
   */
  nodeName?: string;
  /**
   * @example
   * SYS
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      auditUserList: 'AuditUserList',
      comment: 'Comment',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditUserList: PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserList,
      comment: 'string',
      nodeName: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    if(this.auditUserList && typeof (this.auditUserList as any).validate === 'function') {
      (this.auditUserList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

