// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution } from "./ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution";


export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionList extends $dara.Model {
  mediaWorkflowExecution?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowExecution: 'MediaWorkflowExecution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecution: { 'type': 'array', 'itemType': ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecution },
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

