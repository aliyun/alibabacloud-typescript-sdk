// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLPlanTaskResponseBodyTaskList extends $dara.Model {
  /**
   * @remarks
   * The time elapsed from when the task was created to when the task was complete. Unit: milliseconds.
   * 
   * @example
   * 10
   */
  elapsedTime?: number;
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
   * The amount of input data in the task. Unit: bytes.
   * 
   * @example
   * 3763
   */
  inputSize?: number;
  /**
   * @remarks
   * The total amount of time consumed by all operators in the task on a specific node. This parameter can be used to determine whether long tails occur in computing. Unit: milliseconds.
   * 
   * @example
   * 3
   */
  operatorCost?: number;
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
   * The amount of output data in the task. Unit: bytes.
   * 
   * @example
   * 945
   */
  outputSize?: number;
  /**
   * @remarks
   * The peak memory of the task on a specific node. Unit: bytes.
   * 
   * @example
   * 898576
   */
  peakMemory?: number;
  /**
   * @remarks
   * The amount of time consumed to scan data from a data source in the task. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  scanCost?: number;
  /**
   * @remarks
   * The number of rows scanned from a data source in the task.
   * 
   * @example
   * 0
   */
  scanRows?: number;
  /**
   * @remarks
   * The amount of data scanned from a data source in the task. Unit: bytes.
   * 
   * @example
   * 0
   */
  scanSize?: number;
  /**
   * @remarks
   * The final execution status of the task. Valid values:
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
   * The task ID.
   * 
   * @example
   * 198877623
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      elapsedTime: 'ElapsedTime',
      inputRows: 'InputRows',
      inputSize: 'InputSize',
      operatorCost: 'OperatorCost',
      outputRows: 'OutputRows',
      outputSize: 'OutputSize',
      peakMemory: 'PeakMemory',
      scanCost: 'ScanCost',
      scanRows: 'ScanRows',
      scanSize: 'ScanSize',
      state: 'State',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elapsedTime: 'number',
      inputRows: 'number',
      inputSize: 'number',
      operatorCost: 'number',
      outputRows: 'number',
      outputSize: 'number',
      peakMemory: 'number',
      scanCost: 'number',
      scanRows: 'number',
      scanSize: 'number',
      state: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The queried task.
   */
  taskList?: DescribeSQLPlanTaskResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': DescribeSQLPlanTaskResponseBodyTaskList },
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

