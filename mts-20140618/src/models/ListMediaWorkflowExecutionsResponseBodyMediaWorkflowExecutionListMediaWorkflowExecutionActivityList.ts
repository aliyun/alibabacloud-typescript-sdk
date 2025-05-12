// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity } from "./ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity";


export class ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityList extends $dara.Model {
  activity?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity[];
  static names(): { [key: string]: string } {
    return {
      activity: 'Activity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activity: { 'type': 'array', 'itemType': ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity },
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

