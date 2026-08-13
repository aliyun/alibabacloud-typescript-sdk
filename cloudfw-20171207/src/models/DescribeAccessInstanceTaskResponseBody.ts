// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessInstanceTaskResponseBodyTaskSteps extends $dara.Model {
  /**
   * @remarks
   * The step name.
   * 
   * @example
   * Obtain ACK cluster information
   */
  stepName?: string;
  /**
   * @remarks
   * The step progress.
   * 
   * @example
   * 100%
   */
  stepProgress?: string;
  /**
   * @remarks
   * The step status.
   * 
   * @example
   * finished
   */
  stepStatus?: string;
  static names(): { [key: string]: string } {
    return {
      stepName: 'StepName',
      stepProgress: 'StepProgress',
      stepStatus: 'StepStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeAccessInstanceTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task exists.
   * 
   * @example
   * true
   */
  isFound?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15FCCC52-1E23-57AE-B5EF-3E00A3******
   */
  requestId?: string;
  /**
   * @remarks
   * The task completion time.
   * 
   * @example
   * 17151381075
   */
  taskFinishTimestamp?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 3c9d576f-fce0-4caa-9116-15033509bdb6
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Create an ACK cluster connector
   */
  taskName?: string;
  /**
   * @remarks
   * The task creation time.
   * 
   * @example
   * 17151361285
   */
  taskStartTimestamp?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * running
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task steps.
   */
  taskSteps?: DescribeAccessInstanceTaskResponseBodyTaskSteps[];
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFound: 'boolean',
      requestId: 'string',
      taskFinishTimestamp: 'number',
      taskId: 'string',
      taskName: 'string',
      taskStartTimestamp: 'number',
      taskStatus: 'string',
      taskSteps: { 'type': 'array', 'itemType': DescribeAccessInstanceTaskResponseBodyTaskSteps },
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

