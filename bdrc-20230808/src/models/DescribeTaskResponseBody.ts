// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The completion time, formatted as a Unix timestamp in seconds.
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
   * too many requests.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The execution ID. This parameter is deprecated and always returns an empty string.
   * 
   * @example
   * empty
   */
  executionId?: string;
  /**
   * @remarks
   * The expiration time, formatted as a Unix timestamp in seconds.
   * 
   * @example
   * 1719026680
   */
  expireTime?: number;
  /**
   * @remarks
   * The task\\"s progress, measured on a scale of 0 to 10,000.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 784076D6-BD6D-5564-9CEA-834EB11F0C62
   */
  requestId?: string;
  /**
   * @remarks
   * The start time, formatted as a Unix timestamp in seconds.
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
   * The details of the task execution.
   * 
   * @example
   * {"resourceTypes":["ACS::ECS::Instance","ACS::OSS::Bucket","ACS::OTS::Instance","ACS::NAS::FileSystem"]}
   */
  taskDetail?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * t-xxxxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * test5566
   */
  taskName?: string;
  /**
   * @remarks
   * The task priority. Valid values: `HIGH` (typically for user-initiated tasks) and `LOW` (typically for background tasks).
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
   * The status of the task. Valid values: `CREATED` (Created), `RUNNING` (Running), `COMPLETE` (Completed), `FAILED` (Failed), `EXPIRED` (Expired), and `CANCELED` (Canceled).
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task type. Valid values: `UPDATE_RESOURCES` (updates resources and their statuses) and `CHECK_RULES`.
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

export class DescribeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeTaskResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14DFF801-A4E3-5136-AAB8-7D246012CD7A
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
      data: DescribeTaskResponseBodyData,
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

