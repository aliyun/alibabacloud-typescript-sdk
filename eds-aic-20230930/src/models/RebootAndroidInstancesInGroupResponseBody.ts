// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootAndroidInstancesInGroupResponseBodyTasksChildTasks extends $dara.Model {
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

export class RebootAndroidInstancesInGroupResponseBodyTasks extends $dara.Model {
  childTasks?: RebootAndroidInstancesInGroupResponseBodyTasksChildTasks[];
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
      childTasks: { 'type': 'array', 'itemType': RebootAndroidInstancesInGroupResponseBodyTasksChildTasks },
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

export class RebootAndroidInstancesInGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 227CBB4C-F5DC-589D-A667-C5CA3D52****
   */
  requestId?: string;
  tasks?: RebootAndroidInstancesInGroupResponseBodyTasks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: RebootAndroidInstancesInGroupResponseBodyTasks,
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

