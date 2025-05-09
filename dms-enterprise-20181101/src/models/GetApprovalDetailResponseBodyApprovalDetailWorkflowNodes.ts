// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNode } from "./GetApprovalDetailResponseBodyApprovalDetailWorkflowNodesWorkflowNode";


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

