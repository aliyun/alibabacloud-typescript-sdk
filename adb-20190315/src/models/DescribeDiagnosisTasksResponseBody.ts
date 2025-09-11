// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisTasksResponseBodyTaskList extends $dara.Model {
  /**
   * @remarks
   * The compute time ratio, which can be used to determine whether the task is really time-consuming. This parameter can be calculated by using the following formula: OperatorCost/Drivers/ElapsedTime. A greater value indicates that the task was executed for computing for most of the task time. A less value indicates that the task was waiting for scheduling or blocked due to other reasons for most of the task time.
   * 
   * @example
   * 0.89
   */
  computeTimeRatio?: string;
  /**
   * @remarks
   * The number of tasks that can be executed concurrently.
   * 
   * @example
   * 16
   */
  drivers?: string;
  /**
   * @remarks
   * The amount of time that elapsed from when the task was created to when the task was completed. Unit: milliseconds.
   * 
   * @example
   * 456
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The amount of input data in the task. Unit: bytes.
   * 
   * @example
   * 123
   */
  inputDataSize?: number;
  /**
   * @remarks
   * The number of input rows in the task.
   * 
   * @example
   * 105
   */
  inputRows?: number;
  /**
   * @remarks
   * The total amount of time that is consumed by all operators in the task on a node. This parameter can be used to determine whether long tails occur in computing. Unit: milliseconds.
   * 
   * @example
   * 3
   */
  operatorCost?: number;
  /**
   * @remarks
   * The amount of output data in the task. Unit: bytes.
   * 
   * @example
   * 123
   */
  outputDataSize?: number;
  /**
   * @remarks
   * The number of output rows in the task.
   * 
   * @example
   * 105
   */
  outputRows?: number;
  /**
   * @remarks
   * The peak memory of the task. Unit: bytes.
   * 
   * @example
   * 234
   */
  peakMemory?: number;
  /**
   * @remarks
   * The queuing duration of the task. Unit: milliseconds.
   * 
   * @example
   * 12
   */
  queuedTime?: string;
  /**
   * @remarks
   * The amount of time that is consumed to scan data from a data source in the task. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  scanCost?: number;
  /**
   * @remarks
   * The amount of scanned data in the task. Unit: bytes.
   * 
   * @example
   * 123
   */
  scanDataSize?: number;
  /**
   * @remarks
   * The number of rows that are scanned from a data source in the task.
   * 
   * @example
   * 0
   */
  scanRows?: number;
  /**
   * @remarks
   * The final execution state of the task. Valid values:
   * 
   * *   FINISHED
   * *   CANCELED
   * *   ABORTED
   * *   FAILED
   * 
   * @example
   * FINISHED
   */
  state?: string;
  /**
   * @remarks
   * The timestamp when the task was created.
   * 
   * @example
   * 2022-12-12 00:00:12
   */
  taskCreateTime?: number;
  /**
   * @remarks
   * The timestamp when the task ends.
   * 
   * @example
   * 2022-12-22 00:00:00
   */
  taskEndTime?: number;
  /**
   * @remarks
   * The IP address of the host where the task was executed.
   * 
   * @example
   * 192.168.XX.XX
   */
  taskHost?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 22568****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      computeTimeRatio: 'ComputeTimeRatio',
      drivers: 'Drivers',
      elapsedTime: 'ElapsedTime',
      inputDataSize: 'InputDataSize',
      inputRows: 'InputRows',
      operatorCost: 'OperatorCost',
      outputDataSize: 'OutputDataSize',
      outputRows: 'OutputRows',
      peakMemory: 'PeakMemory',
      queuedTime: 'QueuedTime',
      scanCost: 'ScanCost',
      scanDataSize: 'ScanDataSize',
      scanRows: 'ScanRows',
      state: 'State',
      taskCreateTime: 'TaskCreateTime',
      taskEndTime: 'TaskEndTime',
      taskHost: 'TaskHost',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeTimeRatio: 'string',
      drivers: 'string',
      elapsedTime: 'number',
      inputDataSize: 'number',
      inputRows: 'number',
      operatorCost: 'number',
      outputDataSize: 'number',
      outputRows: 'number',
      peakMemory: 'number',
      queuedTime: 'string',
      scanCost: 'number',
      scanDataSize: 'number',
      scanRows: 'number',
      state: 'string',
      taskCreateTime: 'number',
      taskEndTime: 'number',
      taskHost: 'string',
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

export class DescribeDiagnosisTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0983B43-B2EC-536A-8791-142B5CF1E9B6
   */
  requestId?: string;
  /**
   * @remarks
   * The queried tasks.
   */
  taskList?: DescribeDiagnosisTasksResponseBodyTaskList[];
  /**
   * @remarks
   * The total number of tasks in the stage.
   * 
   * @example
   * 33
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskList: 'TaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': DescribeDiagnosisTasksResponseBodyTaskList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

