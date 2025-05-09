// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApprovalDetailResponseBodyApprovalDetailCurrentHandlers } from "./GetApprovalDetailResponseBodyApprovalDetailCurrentHandlers";
import { GetApprovalDetailResponseBodyApprovalDetailReasonList } from "./GetApprovalDetailResponseBodyApprovalDetailReasonList";
import { GetApprovalDetailResponseBodyApprovalDetailWorkflowNodes } from "./GetApprovalDetailResponseBodyApprovalDetailWorkflowNodes";


export class GetApprovalDetailResponseBodyApprovalDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * @example
   * 184****
   */
  auditId?: number;
  /**
   * @remarks
   * The time when the approval process was created.
   * 
   * @example
   * 2021-10-29 14:17:25
   */
  createTime?: string;
  /**
   * @remarks
   * The information about the approver.
   */
  currentHandlers?: GetApprovalDetailResponseBodyApprovalDetailCurrentHandlers;
  /**
   * @remarks
   * The description of the approval process.
   * 
   * @example
   * [Instance permissions] Application\\<br/>Permission type: ⌈Logon⌋\\<br/>Application period: 30.0 days\\<br/>Background description: [Instance permissions] logon test\\<br/>\\<br/>[Application list]\\<br/>\\<span style=\\"color:red\\">product\\</span> rm-bp144d5ky4l4rli0417\\*\\*\\*\\*.mysql.rds.aliyuncs.com:3306 - PRODUCT\\<br/>
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * @example
   * 384****
   */
  orderId?: number;
  /**
   * @remarks
   * The type of the ticket. Valid values:
   * 
   * *   **NDDL**: a schema design ticket
   * *   **DATA_TRACK**: a data tracking ticket
   * *   **TABLE_SYNC**: a table synchronization ticket
   * *   **PERM_APPLY**: a permission application ticket
   * *   **DATA_EXPORT**: a data export ticket
   * *   **DATA_CORRECT**: a data change ticket
   * *   **OWNER_APPLY**: an owner role application ticket
   * *   **SENSITIVITY**: a column sensitivity level change ticket
   * 
   * @example
   * PERM_APPLY
   */
  orderType?: string;
  /**
   * @remarks
   * The reasons for the approval.
   */
  reasonList?: GetApprovalDetailResponseBodyApprovalDetailReasonList;
  /**
   * @remarks
   * The ID of the workflow template.
   * 
   * @example
   * 1234
   */
  templateId?: number;
  /**
   * @remarks
   * Third-party approval flow remarks.
   * 
   * @example
   * test
   */
  thirdpartyWorkflowComment?: string;
  /**
   * @remarks
   * The third-party approval flow link.
   * 
   * @example
   * https://xxx
   */
  thirdpartyWorkflowUrl?: string;
  /**
   * @remarks
   * The title of the approval process.
   * 
   * @example
   * Permission application ticket - 384\\*\\*\\*\\*
   */
  title?: string;
  /**
   * @remarks
   * The approval status of the ticket. Valid values:
   * 
   * *   **AUDITING**: The ticket is being reviewed.
   * *   **REJECT**: The ticket was rejected.
   * *   **CANCEL**: The ticket was revoked.
   * *   **APPROVED**: The ticket was approved.
   * 
   * > An approval process contains multiple approval nodes, and this parameter is returned for each approval node.
   * 
   * @example
   * APPROVED
   */
  workflowInsCode?: string;
  /**
   * @remarks
   * The details of approval nodes.
   */
  workflowNodes?: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodes;
  static names(): { [key: string]: string } {
    return {
      auditId: 'AuditId',
      createTime: 'CreateTime',
      currentHandlers: 'CurrentHandlers',
      description: 'Description',
      orderId: 'OrderId',
      orderType: 'OrderType',
      reasonList: 'ReasonList',
      templateId: 'TemplateId',
      thirdpartyWorkflowComment: 'ThirdpartyWorkflowComment',
      thirdpartyWorkflowUrl: 'ThirdpartyWorkflowUrl',
      title: 'Title',
      workflowInsCode: 'WorkflowInsCode',
      workflowNodes: 'WorkflowNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditId: 'number',
      createTime: 'string',
      currentHandlers: GetApprovalDetailResponseBodyApprovalDetailCurrentHandlers,
      description: 'string',
      orderId: 'number',
      orderType: 'string',
      reasonList: GetApprovalDetailResponseBodyApprovalDetailReasonList,
      templateId: 'number',
      thirdpartyWorkflowComment: 'string',
      thirdpartyWorkflowUrl: 'string',
      title: 'string',
      workflowInsCode: 'string',
      workflowNodes: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodes,
    };
  }

  validate() {
    if(this.currentHandlers && typeof (this.currentHandlers as any).validate === 'function') {
      (this.currentHandlers as any).validate();
    }
    if(this.reasonList && typeof (this.reasonList as any).validate === 'function') {
      (this.reasonList as any).validate();
    }
    if(this.workflowNodes && typeof (this.workflowNodes as any).validate === 'function') {
      (this.workflowNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

