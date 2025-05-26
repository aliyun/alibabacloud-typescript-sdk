// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApsOptimizationTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The computing resources used by the optimization job.
   * 
   * @example
   * 2
   */
  computeUnit?: string;
  /**
   * @remarks
   * The time when the optimization job was created.
   * 
   * @example
   * 2022-01-23T02:18Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The time when the optimization job was modified.
   * 
   * @example
   * 2022-09-30T00:15Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The type of the lifecycle management policy.
   * 
   * @example
   * StrategyValue
   */
  strategyType?: string;
  /**
   * @remarks
   * The description of the optimization job.
   * 
   * @example
   * test
   */
  taskDesc?: string;
  /**
   * @remarks
   * The execution duration of the optimization job.
   * 
   * @example
   * 1000
   */
  taskDuration?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * sj-hz******
   */
  taskId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * -
   */
  taskMessage?: string;
  /**
   * @remarks
   * The execution status. Valid values:
   * 
   * 1.  NEW
   * 2.  RUNNING
   * 3.  SUCCESS
   * 4.  STOPPED
   * 5.  FAILED
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      computeUnit: 'ComputeUnit',
      createdTime: 'CreatedTime',
      DBClusterId: 'DBClusterId',
      modifiedTime: 'ModifiedTime',
      strategyType: 'StrategyType',
      taskDesc: 'TaskDesc',
      taskDuration: 'TaskDuration',
      taskId: 'TaskId',
      taskMessage: 'TaskMessage',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeUnit: 'string',
      createdTime: 'string',
      DBClusterId: 'string',
      modifiedTime: 'string',
      strategyType: 'string',
      taskDesc: 'string',
      taskDuration: 'number',
      taskId: 'string',
      taskMessage: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

