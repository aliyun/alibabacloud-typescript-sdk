// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAsyncTasksResponseBodyAsyncTasks extends $dara.Model {
  endTime?: number;
  startTime?: number;
  taskId?: number;
  taskParams?: string;
  taskResult?: string;
  taskStatus?: number;
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      taskId: 'TaskId',
      taskParams: 'TaskParams',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      taskId: 'number',
      taskParams: 'string',
      taskResult: 'string',
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

export class DescribeAsyncTasksResponseBody extends $dara.Model {
  asyncTasks?: DescribeAsyncTasksResponseBodyAsyncTasks[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTasks: 'AsyncTasks',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTasks: { 'type': 'array', 'itemType': DescribeAsyncTasksResponseBodyAsyncTasks },
      requestId: 'string',
      totalCount: 'number',
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

