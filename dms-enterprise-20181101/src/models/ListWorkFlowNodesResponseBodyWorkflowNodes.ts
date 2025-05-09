// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNode } from "./ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNode";


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

