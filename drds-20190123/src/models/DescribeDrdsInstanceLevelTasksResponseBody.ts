// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsInstanceLevelTasksResponseBodyTasksTask extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task can be canceled.
   * 
   * @example
   * false
   */
  allowCancel?: boolean;
  /**
   * @remarks
   * The error message returned for the task.
   */
  errMsg?: string;
  /**
   * @remarks
   * The timestamp when the task is created.
   * 
   * @example
   * 1568705520000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The progress of the task. Valid values: 0 to 100.
   * 
   * @example
   * 99
   */
  progress?: number;
  /**
   * @remarks
   * The description of the task progress.
   */
  progressDescription?: string;
  /**
   * @remarks
   * Indicates whether the progress of the task is displayed.
   * 
   * @example
   * true
   */
  showProgress?: boolean;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 12312
   */
  targetId?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * upgrade_instance
   */
  taskName?: string;
  /**
   * @remarks
   * The phase of the task.
   * 
   * @example
   * 1
   */
  taskPhase?: string;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   0: The task is being executed.
   * *   1: The task is executed.
   * *   2: The task failed to be executed.
   * *   3: The task is canceled.
   * 
   * @example
   * 0
   */
  taskStatus?: number;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * 11
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      errMsg: 'ErrMsg',
      gmtCreate: 'GmtCreate',
      progress: 'Progress',
      progressDescription: 'ProgressDescription',
      showProgress: 'ShowProgress',
      targetId: 'TargetId',
      taskName: 'TaskName',
      taskPhase: 'TaskPhase',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'boolean',
      errMsg: 'string',
      gmtCreate: 'number',
      progress: 'number',
      progressDescription: 'string',
      showProgress: 'boolean',
      targetId: 'number',
      taskName: 'string',
      taskPhase: 'string',
      taskStatus: 'number',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceLevelTasksResponseBodyTasks extends $dara.Model {
  task?: DescribeDrdsInstanceLevelTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDrdsInstanceLevelTasksResponseBodyTasksTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceLevelTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4305162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of returned unfinished tasks.
   */
  tasks?: DescribeDrdsInstanceLevelTasksResponseBodyTasks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      tasks: DescribeDrdsInstanceLevelTasksResponseBodyTasks,
    };
  }

  validate() {
    if(this.tasks && typeof (this.tasks as any).validate === 'function') {
      (this.tasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

