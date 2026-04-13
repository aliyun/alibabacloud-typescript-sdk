// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentTaskResponseBodyTasks extends $dara.Model {
  currentStatus?: string;
  /**
   * @example
   * acp-ek65k51zoxia3x8xz
   */
  instanceId?: string;
  runningAt?: string;
  /**
   * @example
   * t-imr0fufqd7cle****
   */
  taskId?: string;
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
  code?: string;
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * Success.
   */
  message?: string;
  /**
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  requestId?: string;
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

