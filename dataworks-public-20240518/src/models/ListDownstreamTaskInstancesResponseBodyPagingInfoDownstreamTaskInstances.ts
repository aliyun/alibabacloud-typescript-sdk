// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstance } from "./ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstance";


export class ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstances extends $dara.Model {
  /**
   * @remarks
   * The scheduling dependency type. Valid values:
   * 
   * *   Normal
   * *   CrossCycle
   * 
   * @example
   * Normal
   */
  dependencyType?: string;
  /**
   * @remarks
   * The information about a task instance.
   */
  taskInstance?: ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstance;
  static names(): { [key: string]: string } {
    return {
      dependencyType: 'DependencyType',
      taskInstance: 'TaskInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencyType: 'string',
      taskInstance: ListDownstreamTaskInstancesResponseBodyPagingInfoDownstreamTaskInstancesTaskInstance,
    };
  }

  validate() {
    if(this.taskInstance && typeof (this.taskInstance as any).validate === 'function') {
      (this.taskInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

