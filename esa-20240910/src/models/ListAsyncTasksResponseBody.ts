// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksResponseBodyAsyncTasks extends $dara.Model {
  /**
   * @example
   * 2024-09-19 09:36:46
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-09-19 09:37:04
   */
  gmtModified?: string;
  /**
   * @example
   * 4081****752512
   */
  id?: number;
  /**
   * @example
   * 4081****752512
   */
  resourceId?: number;
  /**
   * @example
   * www.example.com
   */
  resourceName?: string;
  /**
   * @example
   * site
   */
  resourceType?: string;
  taskDescription?: { [key: string]: string };
  /**
   * @example
   * linke-quality-sign
   */
  taskKey?: string;
  /**
   * @example
   * success
   */
  taskStatus?: string;
  /**
   * @example
   * free_cert
   */
  taskType?: string;
  /**
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
  asyncTasks?: ListAsyncTasksResponseBodyAsyncTasks[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D2***
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  /**
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

