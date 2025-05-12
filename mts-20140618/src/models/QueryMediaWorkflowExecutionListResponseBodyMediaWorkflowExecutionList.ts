// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution } from "./QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution";


export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionList extends $dara.Model {
  mediaWorkflowExecution?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowExecution: 'MediaWorkflowExecution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecution: { 'type': 'array', 'itemType': QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution },
    };
  }

  validate() {
    if(Array.isArray(this.mediaWorkflowExecution)) {
      $dara.Model.validateArray(this.mediaWorkflowExecution);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

