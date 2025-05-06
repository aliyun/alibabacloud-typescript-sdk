// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTasksResponseBodyTasksTask } from "./DescribeTasksResponseBodyTasksTask";


export class DescribeTasksResponseBodyTasks extends $dara.Model {
  task?: DescribeTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeTasksResponseBodyTasksTask },
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

