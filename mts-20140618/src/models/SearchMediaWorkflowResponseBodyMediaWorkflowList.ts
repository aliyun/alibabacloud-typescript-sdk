// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaWorkflowResponseBodyMediaWorkflowListMediaWorkflow } from "./SearchMediaWorkflowResponseBodyMediaWorkflowListMediaWorkflow";


export class SearchMediaWorkflowResponseBodyMediaWorkflowList extends $dara.Model {
  mediaWorkflow?: SearchMediaWorkflowResponseBodyMediaWorkflowListMediaWorkflow[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: { 'type': 'array', 'itemType': SearchMediaWorkflowResponseBodyMediaWorkflowListMediaWorkflow },
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

