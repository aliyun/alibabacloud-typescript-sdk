// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the task was executed.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtExecutedTime?: string;
  /**
   * @remarks
   * The time when the task was completed.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtFinishedTime?: string;
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * 5
   */
  objectId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * ● ModelFeature: a model feature.
   * 
   * ● FeatureView: a feature view.
   * 
   * @example
   * ModelFeature
   */
  objectType?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 4
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * ● Initializing: The task is being initialized.
   * 
   * ● Running: The task is in progress.
   * 
   * ● Success: The task is successful.
   * 
   * ● Failure: The task failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 4
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * ● OfflineToOnline: The task synchronizes data from offline to online.
   * 
   * ● ExportTrainingSet: The task exports a training set.
   * 
   * @example
   * OfflineToOnline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtExecutedTime: 'GmtExecutedTime',
      gmtFinishedTime: 'GmtFinishedTime',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtExecutedTime: 'string',
      gmtFinishedTime: 'string',
      objectId: 'string',
      objectType: 'string',
      projectId: 'string',
      projectName: 'string',
      status: 'string',
      taskId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C33E160C-BFCA-5719-B958-942850E949F6
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
   */
  tasks?: ListTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListTasksResponseBodyTasks },
      totalCount: 'number',
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

