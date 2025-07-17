// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * nickName
   */
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      nickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponseBodyApprovalDetailCurrentHandlers extends $dara.Model {
  currentHandler?: GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler[];
  static names(): { [key: string]: string } {
    return {
      currentHandler: 'CurrentHandler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentHandler: { 'type': 'array', 'itemType': GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler },
    };
  }

  validate() {
    if(Array.isArray(this.currentHandler)) {
      $dara.Model.validateArray(this.currentHandler);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApprovalDetailResponseBodyApprovalDetailReasonList extends $dara.Model {
  reasons?: string[];
  static names(): { [key: string]: string } {
    return {
      reasons: 'Reasons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasons: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reasons)) {
      $dara.Model.validateArray(this.reasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetApprovalDetailResponseBodyApprovalDetailWorkflowNodes extends $dara.Model {
  workflowNode?: GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNode[];
  static names(): { [key: string]: string } {
    return {
      workflowNode: 'WorkflowNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowNode: { 'type': 'array', 'itemType': GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNode },
    };
  }

  validate() {
    if(Array.isArray(this.workflowNode)) {
      $dara.Model.validateArray(this.workflowNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetApprovalDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The approval details of the ticket.
   */
  approvalDetail?: GetApprovalDetailResponseBodyApprovalDetail;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * MissingWorkflowInstanceId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * WorkflowInstanceId is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66DE630B-ECA1-52A3-9198-602066F9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      approvalDetail: 'ApprovalDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDetail: GetApprovalDetailResponseBodyApprovalDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.approvalDetail && typeof (this.approvalDetail as any).validate === 'function') {
      (this.approvalDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

