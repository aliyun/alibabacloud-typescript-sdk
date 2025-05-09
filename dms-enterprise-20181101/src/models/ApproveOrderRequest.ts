// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveOrderRequest extends $dara.Model {
  /**
   * @remarks
   * If ApprovalType is set to ADD_APPROVAL_NODE, you need to specify this parameter. The ID of the user that is added as the new approval node. This node must be a user-defined approval node. You can call the ListUserDefineWorkFlowNodes operation to obtain the value of this parameter.
   * 
   * @example
   * 1
   */
  approvalNodeId?: number;
  /**
   * @remarks
   * The position of the new approval node. You must specify this parameter if ApprovalType is set to ADD_APPROVAL_NODE. Valid values:
   * 
   * *   **PRE_ADD_APPROVAL_NODE**: before the current approval node.
   * *   **POST_ADD_APPROVAL_NODE**: after the current approval node.
   * 
   * @example
   * POST_ADD_APPROVAL_NODE
   */
  approvalNodePos?: string;
  /**
   * @remarks
   * The action that you want to perform on the ticket. Valid values:
   * 
   * *   **AGREE**
   * *   **CANCEL**
   * *   **REJECT**
   * *   **TRANSFER**
   * *   **ADD_APPROVAL_NODE**
   * 
   * This parameter is required.
   * 
   * @example
   * agree
   */
  approvalType?: string;
  /**
   * @remarks
   * The description of the ticket.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the user to which the ticket is transferred. If ApprovalType is set to TRANSFER, you need to specify this parameter.
   * 
   * @example
   * 12***
   */
  newApprover?: number;
  /**
   * @remarks
   * >  You can specify this parameter if ApprovalType is set to TRANSFER. You need to only specify one of NewApproverList and NewApprover.
   * 
   * The IDs of the users to whom the ticket is transferred. Separate multiple IDs with commas (,).
   * 
   * @example
   * 154***,155***,156***
   */
  newApproverList?: string;
  /**
   * @remarks
   * The ID of the user that transfers the ticket to another user. The default value is the ID of the current user. If the current user is an administrator or a database administrator (DBA), the user can change the value of this parameter to the ID of another user.
   * 
   * @example
   * 23***
   */
  oldApprover?: number;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that actually calls the API.
   * 
   * @example
   * 21400447956867****
   */
  realLoginUserUid?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to obtain the tenant ID.
   * 
   * @example
   * -1
   */
  tid?: number;
  /**
   * @remarks
   * The ID of the approval process. You can call the [GetOrderBaseInfo](https://help.aliyun.com/document_detail/144642.html) operation to obtain the ID of the approval process.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  workflowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      approvalNodeId: 'ApprovalNodeId',
      approvalNodePos: 'ApprovalNodePos',
      approvalType: 'ApprovalType',
      comment: 'Comment',
      newApprover: 'NewApprover',
      newApproverList: 'NewApproverList',
      oldApprover: 'OldApprover',
      realLoginUserUid: 'RealLoginUserUid',
      tid: 'Tid',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalNodeId: 'number',
      approvalNodePos: 'string',
      approvalType: 'string',
      comment: 'string',
      newApprover: 'number',
      newApproverList: 'string',
      oldApprover: 'number',
      realLoginUserUid: 'string',
      tid: 'number',
      workflowInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

