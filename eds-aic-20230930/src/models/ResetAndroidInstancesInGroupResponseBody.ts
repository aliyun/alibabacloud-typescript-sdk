// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAndroidInstancesInGroupResponseBodyTasksChildTasks extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-xxxx
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

export class ResetAndroidInstancesInGroupResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The child tasks.
   */
  childTasks?: ResetAndroidInstancesInGroupResponseBodyTasksChildTasks[];
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
   * The order ID for storage reduction. This parameter is returned only when you reduce storage while resetting instances in a cloud phone matrix. It is not returned in other scenarios.
   * 
   * @example
   * 22365781890****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
  tasks?: ResetAndroidInstancesInGroupResponseBodyTasks;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
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

