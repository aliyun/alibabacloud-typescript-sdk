// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeAgentTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The current status of the task. Valid values:
   * 
   * `PENDING`: The task is being created.
   * 
   * `RUNNING`: The task is running.
   * 
   * `COMPLETED`: The task has completed.
   * 
   * `FAILED`: The task has failed.
   * 
   * `TIMEOUT`: The task has timed out.
   * 
   * `PAUSING`: The task is pausing.
   * 
   * `PAUSED`: The task is paused.
   * 
   * @example
   * RUNNING
   */
  currentStatus?: string;
  /**
   * @remarks
   * The reason why the task failed to resume.
   * 
   * @example
   * Task status [COMPLETED] does not support resume, only PAUSED tasks can be resumed.
   */
  failedReason?: string;
  /**
   * @remarks
   * The ID of the mobile instance.
   * 
   * @example
   * acp-ek65k51zoxia3x8xz
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the task was resumed, in ISO 8601 format.
   * 
   * @example
   * 2026-04-13T17:42:19Z
   */
  resumingAt?: string;
  /**
   * @remarks
   * The globally unique ID of the task.
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
      resumingAt: 'ResumingAt',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStatus: 'string',
      failedReason: 'string',
      instanceId: 'string',
      resumingAt: 'string',
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

export class ResumeAgentTaskResponseBody extends $dara.Model {
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
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
  requestId?: string;
  /**
   * @remarks
   * A list of tasks.
   */
  tasks?: ResumeAgentTaskResponseBodyTasks[];
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
      tasks: { 'type': 'array', 'itemType': ResumeAgentTaskResponseBodyTasks },
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

