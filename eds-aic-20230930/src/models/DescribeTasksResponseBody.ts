// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SendFileFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * connect error.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The total number of failed child tasks.
   * 
   * @example
   * 2
   */
  failedChildCount?: number;
  /**
   * @remarks
   * The end time of the task. The time is displayed in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2022-10-11T08:53:32Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * defaultInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The command execution ID.
   * 
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  invokeId?: string;
  /**
   * @remarks
   * The task level.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * test
   */
  operator?: string;
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * param
   */
  param?: string;
  /**
   * @remarks
   * The parent task ID.
   * 
   * @example
   * t-41oan3tza16vs****
   */
  parentTaskId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * acp-25nt4kk9whhok****
   */
  resourceId?: string;
  /**
   * @remarks
   * The task execution result.
   * 
   * @example
   * {\\"Success\\": True}
   */
  result?: string;
  /**
   * @remarks
   * The total number of running child tasks.
   * 
   * @example
   * 0
   */
  runningChildCount?: number;
  /**
   * @remarks
   * The start time of the task. The time is displayed in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2022-10-11T08:53:32Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of successful child tasks.
   * 
   * @example
   * 98
   */
  successChildCount?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-bp67acfmxazb4p****
   */
  taskId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * StartInstance
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of child tasks for the current batch task.
   * 
   * @example
   * 100
   */
  totalChildCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      failedChildCount: 'FailedChildCount',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      invokeId: 'InvokeId',
      level: 'Level',
      operator: 'Operator',
      param: 'Param',
      parentTaskId: 'ParentTaskId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      result: 'Result',
      runningChildCount: 'RunningChildCount',
      startTime: 'StartTime',
      successChildCount: 'SuccessChildCount',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      totalChildCount: 'TotalChildCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      failedChildCount: 'number',
      finishTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      invokeId: 'string',
      level: 'number',
      operator: 'string',
      param: 'string',
      parentTaskId: 'string',
      regionId: 'string',
      resourceId: 'string',
      result: 'string',
      runningChildCount: 'number',
      startTime: 'string',
      successChildCount: 'number',
      taskId: 'string',
      taskStatus: 'string',
      taskType: 'string',
      totalChildCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned result objects.
   */
  data?: DescribeTasksResponseBodyData[];
  /**
   * @remarks
   * The token that specifies the starting position for reading. If this parameter is left empty, the reading starts from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeTasksResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

