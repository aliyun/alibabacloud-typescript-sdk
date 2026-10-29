// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAgentTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the task was canceled, in ISO 8601 format.
   * 
   * @example
   * 2026-04-13T17:42:19Z
   */
  cancelAt?: string;
  /**
   * @remarks
   * The current status of the task. Valid values:
   * - CANCELLING: The task is being canceled.
   * - CANCELED: The task is canceled.
   * 
   * @example
   * COMPLETED
   */
  currentStatus?: string;
  /**
   * @remarks
   * The reason why the task cancellation failed.
   * 
   * @example
   * Task status [COMPLETED] does not support cancellation, only PENDING/RUNNING/CANCELLING tasks can be canceled.
   */
  failedReason?: string;
  /**
   * @remarks
   * The ID of the Mobile node.
   * 
   * @example
   * acp-ek65k51zoxia3x8xz
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the task before cancellation. Valid values:
   * - PENDING: The task is being created.
   * - RUNNING: The task is running.
   * 
   * @example
   * RUNNING
   */
  previousStatus?: string;
  /**
   * @remarks
   * The globally unique task ID.
   * 
   * @example
   * t-imr0fufqd7cle****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelAt: 'CancelAt',
      currentStatus: 'CurrentStatus',
      failedReason: 'FailedReason',
      instanceId: 'InstanceId',
      previousStatus: 'PreviousStatus',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelAt: 'string',
      currentStatus: 'string',
      failedReason: 'string',
      instanceId: 'string',
      previousStatus: 'string',
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

export class CancelAgentTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message returned by the API.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B886792-2051-5DB4-8AE6-C8E45D3B4****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
   */
  tasks?: CancelAgentTaskResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': CancelAgentTaskResponseBodyTasks },
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

