// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgentTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The task\\"s current status. Valid values:
   * 
   * `PENDING`: The task is being created.
   * 
   * `RUNNING`: The task is running.
   * 
   * `COMPLETED`: The task has completed.
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
   * acp-anzzuho371azi44xr
   */
  instanceId?: string;
  /**
   * @remarks
   * The task\\"s creation time, in ISO 8601 format.
   * 
   * @example
   * 2026-04-13T17:42:19Z
   */
  runningAt?: string;
  /**
   * @remarks
   * The number of steps executed.
   * 
   * @example
   * 30
   */
  steps?: string;
  /**
   * @remarks
   * The task duration. This field is returned only when `CurrentStatus` is `FAILED` or `COMPLETED`.
   * 
   * @example
   * 50
   */
  taskDuration?: string;
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
   * The task result. This field is returned only when `CurrentStatus` is `COMPLETED` or `FAILED`.
   * 
   * @example
   * Download DingTalk succeeded.
   */
  taskResult?: string;
  /**
   * @remarks
   * The user prompt that the Agent uses to perform the task.
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
      steps: 'Steps',
      taskDuration: 'TaskDuration',
      taskId: 'TaskId',
      taskResult: 'TaskResult',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStatus: 'string',
      instanceId: 'string',
      runningAt: 'string',
      steps: 'string',
      taskDuration: 'string',
      taskId: 'string',
      taskResult: 'string',
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

export class DescribeAgentTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * For example, "200" indicates success.
   */
  code?: string;
  /**
   * @remarks
   * The task count.
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
   * The request ID.
   * 
   * @example
   * 310A783E-CC46-5452-A8A3-71AE5DB5****
   */
  requestId?: string;
  /**
   * @remarks
   * A list of tasks.
   */
  tasks?: DescribeAgentTaskResponseBodyTasks[];
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
      tasks: { 'type': 'array', 'itemType': DescribeAgentTaskResponseBodyTasks },
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

