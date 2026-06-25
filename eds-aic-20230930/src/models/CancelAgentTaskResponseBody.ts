// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAgentTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The task\\"s cancellation time, in ISO 8601 format.
   * 
   * @example
   * 2026-04-13T17:42:19Z
   */
  cancelAt?: string;
  /**
   * @remarks
   * The task status after the cancellation request. Possible values include:
   * 
   * `CANCELLING` or `CANCELED`: The task is being or has been canceled.
   * 
   * `COMPLETED`: The task was already complete and could not be canceled.
   * 
   * @example
   * COMPLETED
   */
  currentStatus?: string;
  /**
   * @remarks
   * The failure reason.
   * 
   * @example
   * Task status [COMPLETED] does not support cancellation, only PENDING/RUNNING/CANCELLING tasks can be canceled.
   */
  failedReason?: string;
  /**
   * @remarks
   * The mobile node ID.
   * 
   * @example
   * acp-ek65k51zoxia3x8xz
   */
  instanceId?: string;
  /**
   * @remarks
   * The task status before cancellation. Valid values include:
   * 
   * PENDING: The task is being created.
   * 
   * RUNNING: The task is running.
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
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
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
   * A list of task objects.
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

