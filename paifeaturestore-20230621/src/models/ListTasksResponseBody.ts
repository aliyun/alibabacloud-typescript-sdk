// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksResponseBodyTasks extends $dara.Model {
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtExecutedTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtFinishedTime?: string;
  /**
   * @example
   * 5
   */
  objectId?: string;
  /**
   * @example
   * ModelFeature
   */
  objectType?: string;
  /**
   * @example
   * 4
   */
  projectId?: string;
  /**
   * @example
   * project_1
   */
  projectName?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 4
   */
  taskId?: string;
  /**
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
   * @example
   * C33E160C-BFCA-5719-B958-942850E949F6
   */
  requestId?: string;
  tasks?: ListTasksResponseBodyTasks[];
  /**
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

