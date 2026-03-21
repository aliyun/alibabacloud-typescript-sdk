// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAndroidInstancesInGroupResponseBodyTasksChildTasks extends $dara.Model {
  /**
   * @example
   * acp-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * t-xxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAndroidInstancesInGroupResponseBodyTasks extends $dara.Model {
  childTasks?: ResetAndroidInstancesInGroupResponseBodyTasksChildTasks[];
  /**
   * @example
   * t-xxxx
   */
  parentTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      childTasks: 'ChildTasks',
      parentTaskId: 'ParentTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childTasks: { 'type': 'array', 'itemType': ResetAndroidInstancesInGroupResponseBodyTasksChildTasks },
      parentTaskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childTasks)) {
      $dara.Model.validateArray(this.childTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAndroidInstancesInGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
  requestId?: string;
  tasks?: ResetAndroidInstancesInGroupResponseBodyTasks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: ResetAndroidInstancesInGroupResponseBodyTasks,
    };
  }

  validate() {
    if(this.tasks && typeof (this.tasks as any).validate === 'function') {
      (this.tasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

