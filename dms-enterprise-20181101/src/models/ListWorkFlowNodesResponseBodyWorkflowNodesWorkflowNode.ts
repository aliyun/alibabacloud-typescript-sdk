// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsers } from "./ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsers";


export class ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNode extends $dara.Model {
  /**
   * @remarks
   * The details about approvers.
   */
  auditUsers?: ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsers;
  /**
   * @remarks
   * The description of the approval template.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the creator. This ID is different from the ID of the Alibaba Cloud account of the creator.
   * 
   * @example
   * 123
   */
  createUserId?: number;
  /**
   * @remarks
   * The name of the user who creates the approval node.
   * 
   * @example
   * test
   */
  createUserNickName?: string;
  /**
   * @remarks
   * The ID of the approval node.
   * 
   * @example
   * 123
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the approval node.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The type of the approval node. Valid values:
   * 
   * *   SYS: The approval node is predefined by the system.
   * *   USER_LIST: The approval node is created by a user.
   * 
   * @example
   * SYS
   */
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

