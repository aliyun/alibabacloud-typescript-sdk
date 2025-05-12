// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity } from "./QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity";


export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList extends $dara.Model {
  activity?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity[];
  static names(): { [key: string]: string } {
    return {
      activity: 'Activity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activity: { 'type': 'array', 'itemType': QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity },
    };
  }

  validate() {
    if(Array.isArray(this.activity)) {
      $dara.Model.validateArray(this.activity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

