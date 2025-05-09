// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskResponseBodyTaskSubTasksSubTasks } from "./GetTaskResponseBodyTaskSubTasksSubTasks";


export class GetTaskResponseBodyTaskSubTasks extends $dara.Model {
  /**
   * @remarks
   * The subtasks.
   */
  subTasks?: GetTaskResponseBodyTaskSubTasksSubTasks[];
  /**
   * @remarks
   * The type of the subtask. Valid values:
   * 
   * *   DoWhile: do-while node
   * *   Combined: node group
   * *   ForEach: for-each node
   * 
   * @example
   * Combined
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      subTasks: 'SubTasks',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subTasks: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskSubTasksSubTasks },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subTasks)) {
      $dara.Model.validateArray(this.subTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

