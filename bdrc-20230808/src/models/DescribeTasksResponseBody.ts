// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The task\\"s completion time, represented as a Unix timestamp in seconds.
   * 
   * @example
   * 1724983927
   */
  completeTime?: number;
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * device not online
   */
  errorMessage?: string;
  /**
   * @remarks
   * The execution ID. This parameter is currently unused and returns an empty string.
   * 
   * @example
   * empty
   */
  executionId?: string;
  /**
   * @remarks
   * The task\\"s expiration time, represented as a Unix timestamp in seconds.
   * 
   * @example
   * 1724983927
   */
  expireTime?: number;
  /**
   * @remarks
   * The progress of the task, ranging from 0 to 10,000.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE43C4CB-8074-5EBD-9806-8CA6D12800B1
   */
  requestId?: string;
  /**
   * @remarks
   * The task\\"s start time, represented as a Unix timestamp in seconds.
   * 
   * @example
   * 1724983927
   */
  startTime?: number;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * empty
   */
  taskDescription?: string;
  /**
   * @remarks
   * The task details.
   * 
   * @example
   * {"resourceTypes":["ACS::ECS::Instance","ACS::OSS::Bucket","ACS::OTS::Instance","ACS::NAS::FileSystem"]}
   */
  taskDetail?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-0000e4w0u1v592zdf6s7
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * empty
   */
  taskName?: string;
  /**
   * @remarks
   * The task priority. Valid values: `HIGH` (high-priority, for user-initiated tasks) and `LOW` (low-priority, for background tasks).
   * 
   * @example
   * HIGH
   */
  taskPriority?: string;
  /**
   * @remarks
   * The result of the task.
   * 
   * @example
   * {"resourceCounts":[{"resourceType":"ACS::OSS::Bucket","count":2},{"resourceType":"ACS::NAS::FileSystem","count":3}]}
   */
  taskResult?: string;
  /**
   * @remarks
   * The task status. Valid values: `CREATED`, `RUNNING`, `COMPLETE`, `FAILED`, `EXPIRED`, and `CANCELED`.
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task type. Valid values: `TEST`, `UPDATE_RESOURCES`, and `CHECK_RULES`.
   * 
   * @example
   * UPDATE_RESOURCES
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      errorMessage: 'ErrorMessage',
      executionId: 'ExecutionId',
      expireTime: 'ExpireTime',
      progress: 'Progress',
      requestId: 'RequestId',
      startTime: 'StartTime',
      taskDescription: 'TaskDescription',
      taskDetail: 'TaskDetail',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskPriority: 'TaskPriority',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'number',
      errorMessage: 'string',
      executionId: 'string',
      expireTime: 'number',
      progress: 'number',
      requestId: 'string',
      startTime: 'number',
      taskDescription: 'string',
      taskDetail: 'string',
      taskId: 'string',
      taskName: 'string',
      taskPriority: 'string',
      taskResult: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of tasks.
   */
  content?: DescribeTasksResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results. If this parameter is empty, no more results are available.
   * 
   * @example
   * f4b8c2504545a3b41af5e75147d17d12e3818a0b9b2ff9a2
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries matching the request criteria. This parameter is optional and is not returned by default.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeTasksResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeTasksResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * AE43C4CB-8074-5EBD-9806-8CA6D12800B1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeTasksResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

