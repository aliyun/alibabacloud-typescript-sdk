// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgentTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The current status of the task. Valid values:
   * 
   * PENDING: The task is being created.
   * 
   * RUNNING: The task is running.
   * 
   * COMPLETED: The task is completed.
   * 
   * FAILED: The task failed.
   * 
   * TIMEOUT: The task execution timed out.
   * 
   * @example
   * COMPLETED
   */
  currentStatus?: string;
  digestSource?: string;
  /**
   * @remarks
   * The Mobile node ID.
   * 
   * @example
   * acp-anzzuho371azi44xr
   */
  instanceId?: string;
  reason?: string;
  /**
   * @remarks
   * The time when the task was created, in ISO 8601 format.
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
  taskDigest?: string;
  /**
   * @remarks
   * The task duration. This field is returned only when CurrentStatus is FAILED or COMPLETED.
   * 
   * @example
   * 50
   */
  taskDuration?: string;
  /**
   * @remarks
   * The task ID, which is globally unique.
   * 
   * @example
   * t-imr0fufqd7cle****
   */
  taskId?: string;
  /**
   * @remarks
   * The task result in the desired state. This field is returned only when CurrentStatus is COMPLETED or FAILED.
   * 
   * @example
   * Download DingTalk succeeded.
   */
  taskResult?: string;
  /**
   * @remarks
   * The user instruction in natural language. The Agent performs operations based on this instruction.
   * 
   * @example
   * Download DingTalk from App Store
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      currentStatus: 'CurrentStatus',
      digestSource: 'DigestSource',
      instanceId: 'InstanceId',
      reason: 'Reason',
      runningAt: 'RunningAt',
      steps: 'Steps',
      taskDigest: 'TaskDigest',
      taskDuration: 'TaskDuration',
      taskId: 'TaskId',
      taskResult: 'TaskResult',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStatus: 'string',
      digestSource: 'string',
      instanceId: 'string',
      reason: 'string',
      runningAt: 'string',
      steps: 'string',
      taskDigest: 'string',
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
   * The API status code.
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
   * 310A783E-CC46-5452-A8A3-71AE5DB5****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
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

