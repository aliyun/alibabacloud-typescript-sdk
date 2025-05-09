// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchUpdateTasksRequestTasks } from "./BatchUpdateTasksRequestTasks";


export class BatchUpdateTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The tasks.
   */
  tasks?: BatchUpdateTasksRequestTasks[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      tasks: { 'type': 'array', 'itemType': BatchUpdateTasksRequestTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

