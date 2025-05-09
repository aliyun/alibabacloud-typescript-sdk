// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNodeAuditUserIdList } from "./GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNodeAuditUserIdList";


export class GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNode extends $dara.Model {
  /**
   * @remarks
   * The IDs of the approvers.
   */
  auditUserIdList?: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNodeAuditUserIdList;
  /**
   * @remarks
   * The name of the approval node.
   * 
   * @example
   * DBA
   */
  nodeName?: string;
  /**
   * @remarks
   * The remarks of the approval.
   * 
   * @example
   * Reason: Approved
   */
  operateComment?: string;
  /**
   * @remarks
   * The time when the ticket was submitted.
   * 
   * @example
   * 2019-10-15 13:47:54
   */
  operateTime?: string;
  /**
   * @remarks
   * The ID of the user who submitted the ticket.
   * 
   * @example
   * 1****
   */
  operatorId?: number;
  /**
   * @remarks
   * The approval status of the ticket. Valid values:
   * 
   * *   **START**: The ticket was submitted.
   * *   **ERROR**: An error occurred.
   * *   **AUDITING**: The ticket is being reviewed.
   * *   **REJECT**: The ticket was rejected.
   * *   **CANCEL**: The ticket was revoked.
   * *   **APPROVED**: The ticket was approved.
   * 
   * @example
   * APPROVED
   */
  workflowInsCode?: string;
  static names(): { [key: string]: string } {
    return {
      auditUserIdList: 'AuditUserIdList',
      nodeName: 'NodeName',
      operateComment: 'OperateComment',
      operateTime: 'OperateTime',
      operatorId: 'OperatorId',
      workflowInsCode: 'WorkflowInsCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditUserIdList: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNodeAuditUserIdList,
      nodeName: 'string',
      operateComment: 'string',
      operateTime: 'string',
      operatorId: 'number',
      workflowInsCode: 'string',
    };
  }

  validate() {
    if(this.auditUserIdList && typeof (this.auditUserIdList as any).validate === 'function') {
      (this.auditUserIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

