// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTagsTag extends $dara.Model {
  /**
   * @remarks
   * The output delivery status of the command execution. Valid values:
   * 
   * *   InProgress: The delivery is in progress.
   * *   Finished: The delivery is complete.
   * *   Failed: The delivery failed.
   * 
   * @example
   * owner
   */
  tagKey?: string;
  /**
   * @remarks
   * The username used to run the command on the instance.
   * 
   * @example
   * zhangsan
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTags extends $dara.Model {
  tag?: DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResult extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the command failed to be sent or run. Valid values:
   * 
   * *   If this parameter is empty, the command was run as expected.
   * *   The security group rules denied access to the aliyun service.
   * *   The specified instance does not exist.
   * *   The specified instance was released during task execution.
   * *   The specified instance was not running during task execution.
   * *   The OS type of the instance does not support the specified command type.
   * *   The specified account does not exist.
   * *   The specified directory does not exist.
   * *   The cron expression is invalid.
   * *   The aliyun service is not running on the instance.
   * *   The aliyun service in the instance does not response.
   * *   The aliyun service in the instance is upgrading during task execution.
   * *   The aliyun service in the instance need to be upgraded to at least version to support the feature. indicates the earliest version that supports the feature. indicates the name of the feature.
   * *   The command delivery has been timeout.
   * *   The command execution has been timeout.
   * *   The command execution got an exception.
   * *   The command execution exit code is not zero.
   * *   The specified instance was released during task execution.
   * 
   * @example
   * c-hz0jdfwcsr****
   */
  commandId?: string;
  /**
   * @remarks
   * Command to execute the Output OSS delivery configuration.
   * 
   * @example
   * ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****
   */
  containerId?: string;
  /**
   * @remarks
   * The execution status on a single instance. Valid values:
   * 
   * *   Pending: The command is being verified or sent.
   * 
   * *   Invalid: The specified command type or parameter is invalid.
   * 
   * *   Aborted: The command failed to be sent to the instance. To send a command to an instance, make sure that the instance is in the Running state and the command can be sent to the instance within 1 minute.
   * 
   * *   Running: The command is being run on the instance.
   * 
   * *   Success:
   * 
   *     *   One-time task: The execution was complete, and the exit code was 0.
   *     *   Scheduled task: The last execution was complete, the exit code was 0, and the specified period ended.
   * 
   * *   Failed:
   * 
   *     *   One-time task: The execution was complete, but the exit code was not 0.
   *     *   Scheduled task: The last execution was complete, but the exit code was not 0. The specified period was about to end.
   * 
   * *   Error: The execution cannot proceed due to an exception.
   * 
   * *   Timeout: The execution timed out.
   * 
   * *   Cancelled: The execution was canceled before it started.
   * 
   * *   Stopping: The command task is being stopped.
   * 
   * *   Terminated: The execution was terminated before completion.
   * 
   * *   Scheduled:
   * 
   *     *   One-time task: The execution state can never be Scheduled.
   *     *   Scheduled task: The command is waiting to be run.
   * 
   * @example
   * test-container
   */
  containerName?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * The time when the command started to be run on the instance.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The key of tag N of the command task. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If a single tag is specified to query resources, up to 1,000 resources that have this tag added can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added can be displayed in the response. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The total number of the commands.
   * 
   * @example
   * 2019-12-20T06:15:56Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The value of tag N of the command task. Valid values of N: 1 to 20. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * i-bp1i7gg30r52z2em****
   */
  instanceId?: string;
  /**
   * @remarks
   * The tag of the command task.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The number of times that the command was run on the instance.
   * 
   * *   If the command is set to run only once, the value is 0 or 1.
   * *   If the command is set to run on a schedule, the value is the number of times that the command has been run on the instance.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * Running
   */
  invokeRecordStatus?: string;
  /**
   * @remarks
   * The exit code of the command task.
   * 
   * *   For Linux instances, the value is the exit code of the shell command.
   * *   For Windows instances, the value is the exit code of the batch or PowerShell command.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * The tags of the command task.
   * 
   * @example
   * oss://testBucket/testPrefix
   */
  ossOutputDelivery?: string;
  /**
   * @remarks
   * The execution results.
   * 
   * @example
   * Finished
   */
  ossOutputStatus?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * oss://testBucket/testPrefix/output.txt
   */
  ossOutputUri?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * MTU6MzA6MDEK
   */
  output?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 0
   */
  repeats?: number;
  /**
   * @remarks
   * Details about the execution results.
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * root
   * 
   * @example
   * 2020-01-19T09:15:47Z
   */
  stopTime?: string;
  /**
   * @remarks
   * The time when the command task was completed. If the command task times out, the end time is equal to the start time of the command task specified by `StartTime` plus the timeout period specified by `Timeout`.
   */
  tags?: DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTags;
  /**
   * @remarks
   * The execution status of the command. Valid values:
   * 
   * *   Running:
   * 
   *     *   Scheduled task: Before you stop the scheduled execution of the command, the execution state is always Running.
   *     *   One-time task: If the command is being run on instances, the execution state is Running.
   * 
   * *   Finished:
   * 
   *     *   Scheduled task: The execution state can never be Finished.
   *     *   One-time task: The execution was complete on all instances, or the execution was stopped on some instances and was complete on the other instances.
   * 
   * *   Failed:
   * 
   *     *   Scheduled task: The execution state can never be Failed.
   *     *   One-time task: The execution failed on all instances.
   * 
   * *   PartialFailed:
   * 
   *     *   Scheduled task: The execution state can never be PartialFailed.
   *     *   One-time task: The execution failed on some instances.
   * 
   * *   Stopped: The task was stopped.
   * 
   * *   Stopping: The task is being stopped.
   * 
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  /**
   * @remarks
   * The size of the Output text that was truncated and discarded because the `Output` value exceeded 24 KB in size.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishedTime: 'FinishedTime',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeRecordStatus: 'InvokeRecordStatus',
      launcher: 'Launcher',
      ossOutputDelivery: 'OssOutputDelivery',
      ossOutputStatus: 'OssOutputStatus',
      ossOutputUri: 'OssOutputUri',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      tags: 'Tags',
      terminationMode: 'TerminationMode',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      containerId: 'string',
      containerName: 'string',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishedTime: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeRecordStatus: 'string',
      launcher: 'string',
      ossOutputDelivery: 'string',
      ossOutputStatus: 'string',
      ossOutputUri: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
      tags: DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTags,
      terminationMode: 'string',
      username: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseBodyInvocationInvocationResults extends $dara.Model {
  invocationResult?: DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResult[];
  static names(): { [key: string]: string } {
    return {
      invocationResult: 'InvocationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResult: { 'type': 'array', 'itemType': DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResult },
    };
  }

  validate() {
    if(Array.isArray(this.invocationResult)) {
      $dara.Model.validateArray(this.invocationResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseBodyInvocation extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 50.
   * 
   * Default value: 10.
   */
  invocationResults?: DescribeInvocationResultsResponseBodyInvocationInvocationResults;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The encoding mode of the `CommandContent` and `Output` values in the response. Valid values:
   * 
   * *   PlainText: returns the original command content and command output.
   * *   Base64: returns the Base64-encoded command content and command output.
   * 
   * Default value: Base64.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Specifies whether to return the results of historical scheduled executions. Valid values:
   * 
   * *   true: returns the results of historical scheduled executions. If you set this parameter to true, you must set InvokeId to the ID of a task that is run on a schedule (RepeatMode set to Period) or on each system startup (RepeatMode set to EveryReboot).
   * *   false: does not return the results of historical scheduled executions.
   * 
   * Default value: false.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invocationResults: 'InvocationResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResults: DescribeInvocationResultsResponseBodyInvocationInvocationResults,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.invocationResults && typeof (this.invocationResults as any).validate === 'function') {
      (this.invocationResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution status of the command task. Valid values:
   * 
   * *   Running:
   * 
   *     *   Scheduled task: Before you stop the scheduled execution of the command, the execution state is always Running.
   *     *   One-time task: If the command is being run on instances, the execution state is Running.
   * 
   * *   Finished:
   * 
   *     *   Scheduled task: The execution state can never be Finished.
   *     *   One-time task: The execution is complete on all instances, or the execution is stopped on some instances and is complete on the other instances.
   * 
   * *   Success:
   * 
   *     *   One-time task: The execution is complete, and the exit code is 0.
   *     *   Scheduled task: The last execution is complete, the exit code is 0, and the specified period ends.
   * 
   * *   Failed:
   * 
   *     *   Scheduled task: The execution state can never be Failed.
   *     *   One-time task: The execution fails on all instances.
   * 
   * *   PartialFailed:
   * 
   *     *   Scheduled task: The execution state can never be PartialFailed.
   *     *   One-time task: The execution fails on some instances.
   * 
   * *   Stopped: The task is stopped.
   * 
   * *   Stopping: The task is being stopped.
   */
  invocation?: DescribeInvocationResultsResponseBodyInvocation;
  /**
   * @remarks
   * The ID of the command.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: DescribeInvocationResultsResponseBodyInvocation,
      requestId: 'string',
    };
  }

  validate() {
    if(this.invocation && typeof (this.invocation as any).validate === 'function') {
      (this.invocation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

