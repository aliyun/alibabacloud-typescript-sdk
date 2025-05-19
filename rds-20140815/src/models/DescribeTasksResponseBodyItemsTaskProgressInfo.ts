// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksResponseBodyItemsTaskProgressInfo extends $dara.Model {
  /**
   * @remarks
   * The start time of the task. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-11-20T01:00Z
   */
  beginTime?: string;
  /**
   * @remarks
   * The name of the subtask.
   * 
   * @example
   * create_instance
   */
  currentStepName?: string;
  /**
   * @remarks
   * The name of the database. If the task involves a database, the database name is returned.
   * 
   * @example
   * DBtest
   */
  DBName?: string;
  /**
   * @remarks
   * The estimated end time of the task.
   * 
   * >  In most cases, this parameter is empty.
   * 
   * @example
   * null
   */
  expectedFinishTime?: string;
  /**
   * @remarks
   * The end time of the task. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-11-20T02:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The task progress in percentage.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The description of the task progress.
   * 
   * >  If no progress description is provided for the task, this parameter is empty.
   * 
   * @example
   * null
   */
  progressInfo?: string;
  /**
   * @remarks
   * The estimated remaining time of the task. Unit: seconds.
   * 
   * >  If the task is not running, this parameter is not returned or the returned value is **0**.
   * 
   * @example
   * 60
   */
  remain?: number;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The progress of the subtask. For example, a value of `1/4` indicates that the task consists of four subtasks and the first subtask is in progress.
   * 
   * @example
   * 1/4
   */
  stepProgressInfo?: string;
  /**
   * @remarks
   * The details of the subtasks.
   * 
   * @example
   * null
   */
  stepsInfo?: string;
  /**
   * @remarks
   * The operation that is used by the task, such as **CreateDBInstance**.
   * 
   * @example
   * CreateDBInstance
   */
  taskAction?: string;
  /**
   * @remarks
   * The error code that is returned when an error occurs.
   * 
   * >  This parameter is returned only when an error occurs.
   * 
   * @example
   * null
   */
  taskErrorCode?: string;
  /**
   * @remarks
   * The error message that is returned when an error occurs.
   * 
   * >  This parameter is returned only when an error occurs.
   * 
   * @example
   * null
   */
  taskErrorMessage?: string;
  /**
   * @remarks
   * The task ID. You can use one of the following methods to obtain the task ID:
   * 
   * @example
   * 3472xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentStepName: 'CurrentStepName',
      DBName: 'DBName',
      expectedFinishTime: 'ExpectedFinishTime',
      finishTime: 'FinishTime',
      progress: 'Progress',
      progressInfo: 'ProgressInfo',
      remain: 'Remain',
      status: 'Status',
      stepProgressInfo: 'StepProgressInfo',
      stepsInfo: 'StepsInfo',
      taskAction: 'TaskAction',
      taskErrorCode: 'TaskErrorCode',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      currentStepName: 'string',
      DBName: 'string',
      expectedFinishTime: 'string',
      finishTime: 'string',
      progress: 'string',
      progressInfo: 'string',
      remain: 'number',
      status: 'string',
      stepProgressInfo: 'string',
      stepsInfo: 'string',
      taskAction: 'string',
      taskErrorCode: 'string',
      taskErrorMessage: 'string',
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

