// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaWorkflowListResponseBodyNonExistMediaWorkflowIds extends $dara.Model {
  mediaWorkflowId?: string[];
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowId: 'MediaWorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.mediaWorkflowId)) {
      $dara.Model.validateArray(this.mediaWorkflowId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

