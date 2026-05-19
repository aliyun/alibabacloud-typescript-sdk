// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeAgentTaskResponseBodyTasks extends $dara.Model {
  /**
   * @example
   * RUNNING
   */
  currentStatus?: string;
  /**
   * @example
   * Task status [COMPLETED] does not support resume, only PAUSED tasks can be resumed.
   */
  failedReason?: string;
  /**
   * @example
   * acp-ek65k51zoxia3x8xz
   */
  instanceId?: string;
  /**
   * @example
   * 2026-04-13T17:42:19Z
   */
  resumingAt?: string;
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
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
  requestId?: string;
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

