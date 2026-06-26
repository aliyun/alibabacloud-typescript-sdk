// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The current status of the task. Valid values:
   * 
   * - PENDING: The task is being created.
   * - RUNNING: The task is running.
   * - COMPLETED: The task is completed.
   * - FAILED: The task failed.
   * - TIMEOUT: The task execution timed out.
   * 
   * @example
   * COMPLETED
   */
  currentStatus?: string;
  /**
   * @remarks
   * The Mobile node ID.
   * 
   * @example
   * acp-ek65k51zoxia3x8xz
   */
  instanceId?: string;
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
   * The task ID, which is globally unique.
   * 
   * @example
   * t-imr0fufqd7cle****
   */
  taskId?: string;
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
   * The status code of the operation.
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
   * The request ID.
   * 
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
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

