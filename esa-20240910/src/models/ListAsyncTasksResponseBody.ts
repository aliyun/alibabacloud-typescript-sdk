// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksResponseBodyAsyncTasks extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-09-19 09:36:46
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2024-09-19 09:37:04
   */
  gmtModified?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 4081****752512
   */
  id?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 4081****752512
   */
  resourceId?: number;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * www.example.com
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * site
   */
  resourceType?: string;
  /**
   * @remarks
   * The task description.
   */
  taskDescription?: { [key: string]: string };
  /**
   * @remarks
   * The custom identifier that is set to associate with this task.
   * 
   * @example
   * linke-quality-sign
   */
  taskKey?: string;
  /**
   * @remarks
   * The current status of the task. Valid values:
   * 
   * - in_progress: in progress.
   * - success: completed.
   * - fail: failed.
   * 
   * @example
   * success
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * free_cert
   */
  taskType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1077***12880
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      taskDescription: 'TaskDescription',
      taskKey: 'TaskKey',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      resourceId: 'number',
      resourceName: 'string',
      resourceType: 'string',
      taskDescription: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskKey: 'string',
      taskStatus: 'string',
      taskType: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.taskDescription) {
      $dara.Model.validateMap(this.taskDescription);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task list.
   */
  asyncTasks?: ListAsyncTasksResponseBodyAsyncTasks[];
  /**
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 500**. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D2***
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTasks: 'AsyncTasks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTasks: { 'type': 'array', 'itemType': ListAsyncTasksResponseBodyAsyncTasks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.asyncTasks)) {
      $dara.Model.validateArray(this.asyncTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

