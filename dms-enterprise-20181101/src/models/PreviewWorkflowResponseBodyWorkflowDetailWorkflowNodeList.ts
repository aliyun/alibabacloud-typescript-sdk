// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNode } from "./PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNode";


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

