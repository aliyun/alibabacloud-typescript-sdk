// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBenchmarkTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The number of available stress testing instances.
   * 
   * @example
   * 2
   */
  availableAgent?: number;
  /**
   * @remarks
   * The time when the stress testing task was created.
   * 
   * @example
   * 2020-02-04T02:43:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * A summary of the task.
   * 
   * @example
   * Benchmark task [benchmark-larec-test-1076] is Running
   */
  message?: string;
  /**
   * @remarks
   * The region where the stress testing task is located.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The name of the service to be stress tested.
   * 
   * @example
   * test_quota
   */
  serviceName?: string;
  /**
   * @remarks
   * The status of the stress testing task.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the stress testing task.
   * 
   * @example
   * eas-b-gv4y86uvgt****i
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the stress testing task.
   * 
   * @example
   * benchmark-larec-test-1076
   */
  taskName?: string;
  /**
   * @remarks
   * The time when the stress testing task was last updated.
   * 
   * @example
   * 2020-06-24T03:11:30Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      availableAgent: 'AvailableAgent',
      createTime: 'CreateTime',
      message: 'Message',
      region: 'Region',
      serviceName: 'ServiceName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAgent: 'number',
      createTime: 'string',
      message: 'string',
      region: 'string',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBenchmarkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned list of tasks.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tasks to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
   */
  tasks?: ListBenchmarkTaskResponseBodyTasks[];
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListBenchmarkTaskResponseBodyTasks },
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

