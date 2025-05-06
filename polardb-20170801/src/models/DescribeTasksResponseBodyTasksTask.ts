// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksResponseBodyTasksTask extends $dara.Model {
  /**
   * @remarks
   * The time when the task was started. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-02T02:39:15Z
   */
  beginTime?: string;
  /**
   * @remarks
   * The name of the current step.
   * 
   * @example
   * create_instance
   */
  currentStepName?: string;
  /**
   * @remarks
   * The database name.
   * 
   * >  This parameter is returned for only the tasks that involve database operations.
   * 
   * @example
   * test
   */
  DBName?: string;
  /**
   * @remarks
   * The estimated end time of the task. In most cases, this parameter is empty.
   * 
   * @example
   * null
   */
  expectedFinishTime?: string;
  /**
   * @remarks
   * The time when the task was completed. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-02T02:40:15Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The progress of the task in percentage.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The description of the task progress. If no progress description is provided for the task, this parameter is empty.
   * 
   * @example
   * null
   */
  progressInfo?: string;
  /**
   * @remarks
   * The estimated remaining duration of the task. Unit: seconds.
   * 
   * @example
   * 1767
   */
  remain?: number;
  /**
   * @remarks
   * The progress of the subtasks. For example, the value `1/4` indicates that the task consists of four subtasks and the first subtask is in progress.
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
   * [{\\"remain\\":0,\\"name\\":\\"init_task\\",\\"progress\\":100},{\\"remain\\":1764,\\"name\\":\\"create_instance\\",\\"progress\\":0},{\\"remain\\":1,\\"name\\":\\"init_cluster\\",\\"progress\\":0},{\\"remain\\":2,\\"name\\":\\"create_backup\\",\\"progress\\":0}]
   */
  stepsInfo?: string;
  /**
   * @remarks
   * The API operation that is used by the task. Example: `CreateDBInstance`.
   * 
   * @example
   * CreateDBInstance
   */
  taskAction?: string;
  /**
   * @remarks
   * The error code that is returned when an error occurs.
   * 
   * >  This parameter is returned only when the task is in the **Stop** state.
   * 
   * @example
   * null
   */
  taskErrorCode?: string;
  /**
   * @remarks
   * The error message that is returned when an error occurs.
   * 
   * >  This parameter is returned only when the task is in the **Stop** state.
   * 
   * @example
   * null
   */
  taskErrorMessage?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 111111111
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
      progress: 'number',
      progressInfo: 'string',
      remain: 'number',
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

