// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUpstreamTaskInstancesResponseBodyPagingInfoUpstreamTaskInstancesTaskInstance } from "./ListUpstreamTaskInstancesResponseBodyPagingInfoUpstreamTaskInstancesTaskInstance";


export class ListUpstreamTaskInstancesResponseBodyPagingInfoUpstreamTaskInstances extends $dara.Model {
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
  taskInstance?: ListUpstreamTaskInstancesResponseBodyPagingInfoUpstreamTaskInstancesTaskInstance;
  static names(): { [key: string]: string } {
    return {
      dependencyType: 'DependencyType',
      taskInstance: 'TaskInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencyType: 'string',
      taskInstance: ListUpstreamTaskInstancesResponseBodyPagingInfoUpstreamTaskInstancesTaskInstance,
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

