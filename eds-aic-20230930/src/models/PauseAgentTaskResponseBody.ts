// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PauseAgentTaskResponseBodyTasks extends $dara.Model {
  /**
   * @example
   * PAUSING
   */
  currentStatus?: string;
  /**
   * @example
   * Task status [COMPLETED] does not support pause, only RUNNING tasks can be paused.
   */
  failedReason?: string;
  /**
   * @example
   * acp-anzzuho371azi44xr
   */
  instanceId?: string;
  /**
   * @example
   * 2026-04-13T17:42:19Z
   */
  pausingAt?: string;
  /**
   * @example
   * RUNNING
   */
  previousStatus?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Success.
   */
  message?: string;
  /**
   * @example
   * E38B41A8-8E00-5AE4-A957-6636ACB8****
   */
  requestId?: string;
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

