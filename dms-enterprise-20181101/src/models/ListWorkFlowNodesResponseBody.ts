// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsersAuditUser extends $dara.Model {
  nickName?: string;
  realName?: string;
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

export class ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsers extends $dara.Model {
  auditUser?: ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsersAuditUser[];
  static names(): { [key: string]: string } {
    return {
      auditUser: 'AuditUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditUser: { 'type': 'array', 'itemType': ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsersAuditUser },
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

export class ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNode extends $dara.Model {
  auditUsers?: ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsers;
  comment?: string;
  createUserId?: number;
  createUserNickName?: string;
  nodeId?: number;
  nodeName?: string;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      auditUsers: 'AuditUsers',
      comment: 'Comment',
      createUserId: 'CreateUserId',
      createUserNickName: 'CreateUserNickName',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditUsers: ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsers,
      comment: 'string',
      createUserId: 'number',
      createUserNickName: 'string',
      nodeId: 'number',
      nodeName: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    if(this.auditUsers && typeof (this.auditUsers as any).validate === 'function') {
      (this.auditUsers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowNodesResponseBodyWorkflowNodes extends $dara.Model {
  workflowNode?: ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNode[];
  static names(): { [key: string]: string } {
    return {
      workflowNode: 'WorkflowNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowNode: { 'type': 'array', 'itemType': ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNode },
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

export class ListWorkFlowNodesResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * CFD8FE00-36D9-4C1B-940D-65A7B73D9066
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  workflowNodes?: ListWorkFlowNodesResponseBodyWorkflowNodes;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      workflowNodes: 'WorkflowNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      workflowNodes: ListWorkFlowNodesResponseBodyWorkflowNodes,
    };
  }

  validate() {
    if(this.workflowNodes && typeof (this.workflowNodes as any).validate === 'function') {
      (this.workflowNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

