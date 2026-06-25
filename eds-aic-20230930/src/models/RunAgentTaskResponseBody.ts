// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The current status of the task. Valid values:
   * 
   * `PENDING`: The task is being created.
   * 
   * `RUNNING`: The task is running.
   * 
   * `COMPLETED`: The task completed successfully.
   * 
   * `FAILED`: The task failed.
   * 
   * `TIMEOUT`: The task timed out.
   * 
   * @example
   * COMPLETED
   */
  currentStatus?: string;
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
   * The time when the task started running, in ISO 8601 format.
   * 
   * @example
   * 2026-04-13T17:42:19Z
   */
  runningAt?: string;
  /**
   * @remarks
   * The globally unique task ID.
   * 
   * @example
   * t-imr0fufqd7cle****
   */
  taskId?: string;
  /**
   * @remarks
   * The user prompt that the Agent used to perform the task.
   * 
   * @example
   * Download DingTalk from App Store
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      currentStatus: 'CurrentStatus',
      instanceId: 'InstanceId',
      runningAt: 'RunningAt',
      taskId: 'TaskId',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStatus: 'string',
      instanceId: 'string',
      runningAt: 'string',
      taskId: 'string',
      userPrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. A value of `200` indicates that the request was successful.
   * 
   * @example
   * For example, "200" indicates success.
   */
  code?: string;
  /**
   * @remarks
   * The number of tasks.
   * 
   * @example
   * 1
   */
  count?: number;
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
   * The unique request ID.
   * 
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  requestId?: string;
  /**
   * @remarks
   * A list of tasks.
   */
  tasks?: RunAgentTaskResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      message: 'Message',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      message: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': RunAgentTaskResponseBodyTasks },
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

