// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTask } from "./ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTask";


export class ListDownstreamTasksResponseBodyPagingInfoDownstreamTasks extends $dara.Model {
  /**
   * @remarks
   * The scheduling dependency type. Valid values:
   * 
   * *   Normal: same-cycle scheduling dependency
   * *   CrossCycle: cross-cycle scheduling dependency
   * 
   * @example
   * Normal
   */
  dependencyType?: string;
  /**
   * @remarks
   * The information about the task.
   */
  task?: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTask;
  static names(): { [key: string]: string } {
    return {
      dependencyType: 'DependencyType',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencyType: 'string',
      task: ListDownstreamTasksResponseBodyPagingInfoDownstreamTasksTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

