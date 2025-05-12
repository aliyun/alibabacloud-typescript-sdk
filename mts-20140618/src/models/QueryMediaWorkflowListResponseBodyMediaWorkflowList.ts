// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaWorkflowListResponseBodyMediaWorkflowListMediaWorkflow } from "./QueryMediaWorkflowListResponseBodyMediaWorkflowListMediaWorkflow";


export class QueryMediaWorkflowListResponseBodyMediaWorkflowList extends $dara.Model {
  mediaWorkflow?: QueryMediaWorkflowListResponseBodyMediaWorkflowListMediaWorkflow[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: { 'type': 'array', 'itemType': QueryMediaWorkflowListResponseBodyMediaWorkflowListMediaWorkflow },
    };
  }

  validate() {
    if(Array.isArray(this.mediaWorkflow)) {
      $dara.Model.validateArray(this.mediaWorkflow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

