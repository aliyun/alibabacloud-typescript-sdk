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
   * The total number of failed subtasks.
   * 
   * @example
   * 2
   */
  failedChildCount?: number;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2022-10-11T08:53:32Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the cloud phone instance.
   * 
   * @example
   * defaultInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The state of the cloud phone instance.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The ID of the command execution.
   * 
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  invokeId?: string;
  /**
   * @remarks
   * The level of the task.
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
   * The parameters of the task.
   * 
   * @example
   * param
   */
  param?: string;
  /**
   * @remarks
   * The ID of the parent task.
   * 
   * @example
   * t-41oan3tza16vs****
   */
  parentTaskId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * acp-25nt4kk9whhok****
   */
  resourceId?: string;
  /**
   * @remarks
   * The execution result of the task.
   * 
   * @example
   * {\\"Success\\": True}
   */
  result?: string;
  /**
   * @remarks
   * The total number of the subtasks that are running.
   * 
   * @example
   * 0
   */
  runningChildCount?: number;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2022-10-11T08:53:32Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of successfully executed subtasks.
   * 
   * @example
   * 98
   */
  successChildCount?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * t-bp67acfmxazb4p****
   */
  taskId?: string;
  /**
   * @remarks
   * The state of the task.
   * 
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * StartInstance
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of subtasks of the current batch task.
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
   * The objects that are returned.
   */
  data?: DescribeTasksResponseBodyData[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  requestId?: string;
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

