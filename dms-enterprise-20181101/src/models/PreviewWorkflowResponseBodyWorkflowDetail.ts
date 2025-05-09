// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeList } from "./PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeList";


export class PreviewWorkflowResponseBodyWorkflowDetail extends $dara.Model {
  comment?: string;
  wfCateName?: string;
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

