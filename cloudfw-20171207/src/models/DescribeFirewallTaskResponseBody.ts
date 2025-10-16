// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTaskResponseBodyTaskSteps extends $dara.Model {
  /**
   * @example
   * abcd
   */
  stepInfo?: string;
  /**
   * @example
   * Create Firewall
   */
  stepName?: string;
  /**
   * @example
   * 80
   */
  stepProgress?: string;
  /**
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
   * @example
   * false
   */
  isFound?: boolean;
  /**
   * @example
   * 7D5483BF-2262-586D-8706-BDDB8B42****
   */
  requestId?: string;
  /**
   * @example
   * 17151381075
   */
  taskFinishTimestamp?: string;
  /**
   * @example
   * 189997648
   */
  taskId?: number;
  /**
   * @example
   * egressgw
   */
  taskName?: string;
  /**
   * @example
   * 17151361285
   */
  taskStartTimestamp?: string;
  /**
   * @example
   * init
   */
  taskStatus?: string;
  taskSteps?: DescribeFirewallTaskResponseBodyTaskSteps[];
  /**
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

