// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTasksInTaskFlowResponseBodyTasksTask } from "./ListTasksInTaskFlowResponseBodyTasksTask";


export class ListTasksInTaskFlowResponseBodyTasks extends $dara.Model {
  task?: ListTasksInTaskFlowResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': ListTasksInTaskFlowResponseBodyTasksTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

