// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudPhoneNodeSystemImageResponseBodyTasksChildTasks extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * cpn-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The child task ID.
   * 
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

export class UpdateCloudPhoneNodeSystemImageResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The child tasks.
   */
  childTasks?: UpdateCloudPhoneNodeSystemImageResponseBodyTasksChildTasks[];
  /**
   * @remarks
   * The parent task ID.
   * 
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
      childTasks: { 'type': 'array', 'itemType': UpdateCloudPhoneNodeSystemImageResponseBodyTasksChildTasks },
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

export class UpdateCloudPhoneNodeSystemImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC******
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-ehs0yoedj0xe9****
   */
  taskId?: string;
  /**
   * @remarks
   * The task information.
   */
  tasks?: UpdateCloudPhoneNodeSystemImageResponseBodyTasks;
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
      tasks: UpdateCloudPhoneNodeSystemImageResponseBodyTasks,
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

