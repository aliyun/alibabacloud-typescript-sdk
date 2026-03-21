// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceImageResponseBodyTasksChildTasks extends $dara.Model {
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

export class UpdateInstanceImageResponseBodyTasks extends $dara.Model {
  childTasks?: UpdateInstanceImageResponseBodyTasksChildTasks[];
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
      childTasks: { 'type': 'array', 'itemType': UpdateInstanceImageResponseBodyTasksChildTasks },
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

export class UpdateInstanceImageResponseBody extends $dara.Model {
  /**
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
  requestId?: string;
  /**
   * @example
   * t-1ljew7on6ay0j****
   */
  taskId?: string;
  tasks?: UpdateInstanceImageResponseBodyTasks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
      tasks: UpdateInstanceImageResponseBodyTasks,
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

