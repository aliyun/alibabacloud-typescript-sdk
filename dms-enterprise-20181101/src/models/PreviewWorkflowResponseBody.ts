// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserListAuditUser extends $dara.Model {
  /**
   * @remarks
   * The nickname of the approver.
   * 
   * @example
   * Owner
   */
  nickName?: string;
  /**
   * @remarks
   * The name of the approver.
   * 
   * @example
   * db_test
   */
  realName?: string;
  /**
   * @remarks
   * The ID of the approver.
   * 
   * @example
   * 16***
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      realName: 'RealName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      realName: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNode extends $dara.Model {
  /**
   * @remarks
   * The approvers.
   */
  auditUserList?: PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserList;
  /**
   * @remarks
   * The remarks of the approval node.
   */
  comment?: string;
  /**
   * @remarks
   * The name of the approval node.
   * 
   * @example
   * Owner
   */
  nodeName?: string;
  /**
   * @remarks
   * The type of the approval node.
   * 
   * Valid values:
   * 
   * *   USER_LIST: The approval node is created by a user.
   * *   UNKNOWN: The source of the approval node is unknown.
   * *   SYS: The approval node is predefined by the system.
   * 
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

export class PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeList extends $dara.Model {
  workflowNode?: PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNode[];
  static names(): { [key: string]: string } {
    return {
      workflowNode: 'WorkflowNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowNode: { 'type': 'array', 'itemType': PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNode },
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

export class PreviewWorkflowResponseBodyWorkflowDetail extends $dara.Model {
  /**
   * @remarks
   * The remarks of the approval template.
   */
  comment?: string;
  /**
   * @remarks
   * The name of the approval template.
   */
  wfCateName?: string;
  /**
   * @remarks
   * The approval nodes.
   */
  workflowNodeList?: PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeList;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      wfCateName: 'WfCateName',
      workflowNodeList: 'WorkflowNodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      wfCateName: 'string',
      workflowNodeList: PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeList,
    };
  }

  validate() {
    if(this.workflowNodeList && typeof (this.workflowNodeList as any).validate === 'function') {
      (this.workflowNodeList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The details of the workflow.
   */
  workflowDetail?: PreviewWorkflowResponseBodyWorkflowDetail;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      workflowDetail: 'WorkflowDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      workflowDetail: PreviewWorkflowResponseBodyWorkflowDetail,
    };
  }

  validate() {
    if(this.workflowDetail && typeof (this.workflowDetail as any).validate === 'function') {
      (this.workflowDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

