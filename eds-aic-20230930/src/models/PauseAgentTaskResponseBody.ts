// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PauseAgentTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The current status of the task. The following are possible values:
   * 
   * PENDING: The task is being created.
   * 
   * RUNNING: The task is running.
   * 
   * COMPLETED: The task is completed.
   * 
   * FAILED: The task failed.
   * 
   * TIMEOUT: The task timed out.
   * 
   * PAUSING: The task is being paused.
   * 
   * PAUSED: The task is paused.
   * 
   * @example
   * PAUSING
   */
  currentStatus?: string;
  /**
   * @remarks
   * The reason the task failed to pause.
   * 
   * @example
   * Task status [COMPLETED] does not support pause, only RUNNING tasks can be paused.
   */
  failedReason?: string;
  /**
   * @remarks
   * The ID of the Mobile node.
   * 
   * @example
   * acp-anzzuho371azi44xr
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the pause request was initiated, in ISO 8601 format.
   * 
   * @example
   * 2026-04-13T17:42:19Z
   */
  pausingAt?: string;
  /**
   * @remarks
   * The status of the task before the pause request. The only valid value is:
   * 
   * RUNNING: The task is running.
   * 
   * @example
   * RUNNING
   */
  previousStatus?: string;
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * @example
   * t-imr0fufqd7cle****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentStatus: 'CurrentStatus',
      failedReason: 'FailedReason',
      instanceId: 'InstanceId',
      pausingAt: 'PausingAt',
      previousStatus: 'PreviousStatus',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStatus: 'string',
      failedReason: 'string',
      instanceId: 'string',
      pausingAt: 'string',
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

export class PauseAgentTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
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
   * E38B41A8-8E00-5AE4-A957-6636ACB8****
   */
  requestId?: string;
  /**
   * @remarks
   * A list of tasks.
   */
  tasks?: PauseAgentTaskResponseBodyTasks[];
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
      tasks: { 'type': 'array', 'itemType': PauseAgentTaskResponseBodyTasks },
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

