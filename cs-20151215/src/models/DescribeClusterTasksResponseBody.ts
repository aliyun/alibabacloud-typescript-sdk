// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterTasksResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTasksResponseBodyTasksError extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * BadRequest
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Addon status not match
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-08-03T10:11:33+08:00
   */
  created?: string;
  /**
   * @remarks
   * The error returned for the task.
   */
  error?: DescribeClusterTasksResponseBodyTasksError;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * install-addons-c3xxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The type of task.
   * 
   * @example
   * cluster_addon_install
   */
  taskType?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * @example
   * 2022-08-03T10:12:03.482+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      error: 'error',
      state: 'state',
      taskId: 'task_id',
      taskType: 'task_type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      error: DescribeClusterTasksResponseBodyTasksError,
      state: 'string',
      taskId: 'string',
      taskType: 'string',
      updated: 'string',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeClusterTasksResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0527ac9a-c899-4341-a21a-xxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the tasks.
   */
  tasks?: DescribeClusterTasksResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'page_info',
      requestId: 'requestId',
      tasks: 'tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeClusterTasksResponseBodyPageInfo,
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribeClusterTasksResponseBodyTasks },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

