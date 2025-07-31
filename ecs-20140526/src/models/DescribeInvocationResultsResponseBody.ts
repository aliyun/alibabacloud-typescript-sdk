// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command task.
   * 
   * @example
   * owner
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the command task.
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
   * The command ID.
   * 
   * @example
   * c-hz0jdfwcsr****
   */
  commandId?: string;
  /**
   * @remarks
   * The container ID.
   * 
   * @example
   * ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****
   */
  containerId?: string;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * test-container
   */
  containerName?: string;
  /**
   * @remarks
   * The size of the Output text that was truncated and discarded because the `Output` value exceeded 24 KB in size.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * The error code returned when the command failed to be sent or run. Valid values:
   * 
   * *   If this parameter is empty, the command was run as expected.
   * *   InstanceNotExists: The specified instance did not exist or was released.
   * *   InstanceReleased: The instance was released while the command was being run.
   * *   InstanceNotRunning: The instance was not running while the command was being run.
   * *   CommandNotApplicable: The command was inapplicable to the specified instance.
   * *   AccountNotExists: The username specified to run the command did not exist.
   * *   DirectoryNotExists: The specified directory did not exist.
   * *   BadCronExpression: The specified cron expression for the execution schedule was invalid.
   * *   ClientNotRunning: Cloud Assistant Agent was not running.
   * *   ClientNotResponse: Cloud Assistant Agent did not respond.
   * *   ClientIsUpgrading: Cloud Assistant Agent was being upgraded.
   * *   ClientNeedUpgrade: Cloud Assistant Agent needed to be upgraded.
   * *   DeliveryTimeout: The request to send the command timed out.
   * *   ExecutionTimeout: The execution timed out.
   * *   ExecutionException: An exception occurred while the command was being run.
   * *   ExecutionInterrupted: The execution was interrupted.
   * *   ExitCodeNonzero: The execution was complete, but the exit code was not 0.
   * *   SecurityGroupRuleDenied: Access to Cloud Assistant was denied by security group rules.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
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
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the command task.
   * 
   * *   For Linux instances, the value is the exit code of the shell command.
   * *   For Windows instances, the value is the exit code of the batch or PowerShell command.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the command task was completed. If the command task times out, the end time is equal to the start time of the command task specified by `StartTime` plus the timeout period specified by `Timeout`.
   * 
   * @example
   * 2019-12-20T06:15:56Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1i7gg30r52z2em****
   */
  instanceId?: string;
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
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The command task ID.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
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
   * Running
   */
  invokeRecordStatus?: string;
  /**
   * @remarks
   * The launcher for script execution. The value cannot exceed 1 KB in length.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  ossOutputDelivery?: string;
  ossOutputStatus?: string;
  ossOutputUri?: string;
  /**
   * @remarks
   * The command output.
   * 
   * *   If ContentEncoding is set to PlainText in the request, the original command output is returned.
   * *   If ContentEncoding is set to Base64 in the request, the Base64-encoded command output is returned.
   * 
   * @example
   * MTU6MzA6MDEK
   */
  output?: string;
  /**
   * @remarks
   * The number of times that the command was run on the instance.
   * 
   * *   If the command is set to run only once, the value is 0 or 1.
   * *   If the command is set to run on a schedule, the value is the number of times that the command has been run on the instance.
   * 
   * @example
   * 0
   */
  repeats?: number;
  /**
   * @remarks
   * The time when the command started to be run on the instance.
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time when the command task was stopped. If you call the `StopInvocation` operation to stop the command task, the value of this parameter is the time when the operation is called.
   * 
   * @example
   * 2020-01-19T09:15:47Z
   */
  stopTime?: string;
  /**
   * @remarks
   * The tags of the command task.
   */
  tags?: DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTags;
  /**
   * @remarks
   * Indicates how the command task is stopped when a command execution is manually stopped or times out. Valid values:
   * 
   * *   Process: The process of the command is stopped.
   * *   ProcessTree: The process tree of the command is stopped. In this case, the process of the command and all subprocesses are stopped.
   * 
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  /**
   * @remarks
   * The username used to run the command on the instance.
   * 
   * @example
   * root
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
   * The execution results.
   */
  invocationResults?: DescribeInvocationResultsResponseBodyInvocationInvocationResults;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of the commands.
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
   * Details about the execution results.
   */
  invocation?: DescribeInvocationResultsResponseBodyInvocation;
  /**
   * @remarks
   * The ID of the request.
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

