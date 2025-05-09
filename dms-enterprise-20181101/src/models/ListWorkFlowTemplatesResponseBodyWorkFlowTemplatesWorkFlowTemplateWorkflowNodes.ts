// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodesWorkflowNode } from "./ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodesWorkflowNode";


export class ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodes extends $dara.Model {
  workflowNode?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodesWorkflowNode[];
  static names(): { [key: string]: string } {
    return {
      workflowNode: 'WorkflowNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowNode: { 'type': 'array', 'itemType': ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodesWorkflowNode },
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

