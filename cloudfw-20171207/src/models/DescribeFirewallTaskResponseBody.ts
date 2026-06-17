// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTaskResponseBodyTaskSteps extends $dara.Model {
  /**
   * @remarks
   * The information about the task step.
   * 
   * @example
   * abcd
   */
  stepInfo?: string;
  /**
   * @remarks
   * Creating the Cloud Firewall.
   * 
   * @example
   * Create Firewall
   */
  stepName?: string;
  /**
   * @remarks
   * The progress of the task step.
   * 
   * @example
   * 80
   */
  stepProgress?: string;
  /**
   * @remarks
   * The status of the task step. Valid values:
   * 
   * - **init**
   * 
   * - **running**
   * 
   * - **finished**
   * 
   * - **failed**
   * 
   * @example
   * init
   */
  stepStatus?: string;
  static names(): { [key: string]: string } {
    return {
      stepInfo: 'StepInfo',
      stepName: 'StepName',
      stepProgress: 'StepProgress',
      stepStatus: 'StepStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepInfo: 'string',
      stepName: 'string',
      stepProgress: 'string',
      stepStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task exists.
   * 
   * @example
   * false
   */
  isFound?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7D5483BF-2262-586D-8706-BDDB8B42****
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp when the task was completed.
   * 
   * @example
   * 17151381075
   */
  taskFinishTimestamp?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 189997648
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * egressgw
   */
  taskName?: string;
  /**
   * @remarks
   * The timestamp when the task started.
   * 
   * @example
   * 17151361285
   */
  taskStartTimestamp?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - **init**
   * 
   * - **running**
   * 
   * - **finished**
   * 
   * - **rollback**
   * 
   * - **rollbackDone**
   * 
   * @example
   * init
   */
  taskStatus?: string;
  /**
   * @remarks
   * The steps of the task.
   */
  taskSteps?: DescribeFirewallTaskResponseBodyTaskSteps[];
  /**
   * @remarks
   * The waiting time in minutes.
   * 
   * @example
   * 30
   */
  taskWaitingTime?: string;
  static names(): { [key: string]: string } {
    return {
      isFound: 'IsFound',
      requestId: 'RequestId',
      taskFinishTimestamp: 'TaskFinishTimestamp',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStartTimestamp: 'TaskStartTimestamp',
      taskStatus: 'TaskStatus',
      taskSteps: 'TaskSteps',
      taskWaitingTime: 'TaskWaitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFound: 'boolean',
      requestId: 'string',
      taskFinishTimestamp: 'string',
      taskId: 'number',
      taskName: 'string',
      taskStartTimestamp: 'string',
      taskStatus: 'string',
      taskSteps: { 'type': 'array', 'itemType': DescribeFirewallTaskResponseBodyTaskSteps },
      taskWaitingTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskSteps)) {
      $dara.Model.validateArray(this.taskSteps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

