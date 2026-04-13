// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgentTaskResponseBodyTasks extends $dara.Model {
  currentStatus?: string;
  /**
   * @example
   * acp-anzzuho371azi44xr
   */
  instanceId?: string;
  runningAt?: string;
  /**
   * @example
   * 30
   */
  steps?: string;
  taskDuration?: string;
  /**
   * @example
   * t-imr0fufqd7cle****
   */
  taskId?: string;
  taskResult?: string;
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
   * 310A783E-CC46-5452-A8A3-71AE5DB5****
   */
  requestId?: string;
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

