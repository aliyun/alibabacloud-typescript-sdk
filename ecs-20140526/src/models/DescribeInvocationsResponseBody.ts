// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance extends $dara.Model {
  /**
   * @remarks
   * The time when the command task was created.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The size of the Output text that was truncated and discarded because the Output value exceeded 24 KB in size.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * The error code for the failure to send or run the command. Valid values:
   * 
   * *   If this parameter is empty, the command was run as expected.
   * *   InstanceNotExists: The specified instance did not exist or was released.
   * *   InstanceReleased: The instance was released while the command was being run.
   * *   InstanceNotRunning: The instance was not running when the command started to be run.
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
   * *   ExecutionException: An exception occurred while the command was being executed.
   * *   ExecutionInterrupted: The command task was interrupted.
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
   * The exit code of the execution. Valid values:
   * 
   * *   For Linux instances, the value is the exit code of the shell process.
   * *   For Windows instances, the value is the exit code of the batch or PowerShell process.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the command process ended.
   * 
   * @example
   * 2019-12-20T06:15:56Z
   */
  finishTime?: string;
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
   * The execution status of the command on a single instance.
   * 
   * >  We recommend that you ignore this parameter and check the value of `InvocationStatus` in the response to obtain the execution status.
   * 
   * @example
   * Finished
   */
  instanceInvokeStatus?: string;
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
   *     *   Scheduled task: The last execution was complete, but the exit code was not 0. The specified period is about to end.
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
   * The output delivery status of the command execution. Valid values:
   * 
   * *   InProgress: The delivery is in progress.
   * *   Finished: The delivery is complete.
   * *   Failed: The delivery failed.
   * 
   * @example
   * Finished
   */
  ossOutputStatus?: string;
  /**
   * @remarks
   * The command execution Output delivers the object URI to OSS. This field is an empty string when the delivery fails or is in progress.
   * 
   * @example
   * oss://testBucket/testPrefix/output.txt
   */
  ossOutputUri?: string;
  /**
   * @remarks
   * The command output.
   * 
   * *   If ContentEncoding is set to PlainText in the request, the original command output is returned.
   * *   If ContentEncoding is set to Base64 in the request, the Base64-encoded command output is returned.
   * 
   * @example
   * OutPutTestmsg
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
   * Indicates whether the command is to be automatically run.
   * 
   * @example
   * false
   */
  timed?: boolean;
  /**
   * @remarks
   * The time when the execution status was updated.
   * 
   * @example
   * 2020-01-19T09:15:47Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      instanceInvokeStatus: 'InstanceInvokeStatus',
      invocationStatus: 'InvocationStatus',
      ossOutputStatus: 'OssOutputStatus',
      ossOutputUri: 'OssOutputUri',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      timed: 'Timed',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      instanceId: 'string',
      instanceInvokeStatus: 'string',
      invocationStatus: 'string',
      ossOutputStatus: 'string',
      ossOutputUri: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
      timed: 'boolean',
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

export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstances extends $dara.Model {
  invokeInstance?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance[];
  static names(): { [key: string]: string } {
    return {
      invokeInstance: 'InvokeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeInstance: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance },
    };
  }

  validate() {
    if(Array.isArray(this.invokeInstance)) {
      $dara.Model.validateArray(this.invokeInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvocationTagsTag extends $dara.Model {
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

export class DescribeInvocationsResponseBodyInvocationsInvocationTags extends $dara.Model {
  tag?: DescribeInvocationsResponseBodyInvocationsInvocationTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocationTagsTag },
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

export class DescribeInvocationsResponseBodyInvocationsInvocation extends $dara.Model {
  /**
   * @remarks
   * The command content.
   * 
   * *   If ContentEncoding is set to PlainText in the request, the original command content is returned.
   * *   If ContentEncoding is set to Base64 in the request, the Base64-encoded command content is returned.
   * 
   * @example
   * cnBtIC1xYSB8IGdyZXAgdnNm****
   */
  commandContent?: string;
  /**
   * @remarks
   * The command description.
   * 
   * @example
   * testDescription
   */
  commandDescription?: string;
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
   * The command name.
   * 
   * @example
   * CommandTestName
   */
  commandName?: string;
  /**
   * @remarks
   * The command type.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
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
   * The time when the command task was created.
   * 
   * @example
   * 2020-01-19T09:15:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The schedule on which the command is run.
   */
  frequency?: string;
  /**
   * @remarks
   * The overall execution status of the command task. The value of this parameter depends on the execution status of the command task on all the involved instances. Valid values:
   * 
   * *   Pending: The command is being verified or sent. When the execution state on at least one instance is Pending, the overall execution state is Pending.
   * 
   * *   Scheduled: The command that is set to run on a schedule was sent and waiting to be run. When the execution state on at least one instance is Scheduled, the overall execution state is Scheduled.
   * 
   * *   Running: The command is being run on the instances. When the execution state on at least one instance is Running, the overall execution state is Running.
   * 
   * *   Success: When the execution state on at least one instance is Success and the execution state on the other instances is Stopped or Success, the overall execution state is Success.
   * 
   *     *   One-time task: The execution was complete, and the exit code was 0.
   *     *   Scheduled task: The last execution was complete, the exit code was 0, and the specified period ended.
   * 
   * *   Failed: When the execution state on all instances is Stopped or Failed, the overall execution state is Failed. When the execution state on an instance is one of the following values, Failed is returned as the overall execution state:
   * 
   *     *   Invalid: The command is invalid.
   *     *   Aborted: The command failed to be sent.
   *     *   Failed: The execution was complete, but the exit code was not 0.
   *     *   Timeout: The execution timed out.
   *     *   Error: An error occurred while the command was being run.
   * 
   * *   Stopping: The command task is being stopped. When the execution state on at least one instance is Stopping, the overall execution state is Stopping.
   * 
   * *   Stopped: The task was stopped. When the execution state on all instances is Stopped, the overall execution state is Stopped. When the execution state on an instance is one of the following values, Stopped is returned as the overall execution state:
   * 
   *     *   Cancelled: The task was canceled.
   *     *   Terminated: The task was terminated.
   * 
   * *   PartialFailed: The execution was complete on some instances and failed on other instances. When the execution state is Success on some instances and is Failed or Stopped on the other instances, the overall execution state is PartialFailed.
   * 
   * >  `InvokeStatus` in the response functions similarly to this parameter. We recommend that you check the value of this parameter.
   * 
   * @example
   * Running
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
   * The instances on which the command was run.
   */
  invokeInstances?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstances;
  /**
   * @remarks
   * The overall execution status of the command task.
   * 
   * >  We recommend that you ignore this parameter and check the value of `InvocationStatus` in the response to obtain the execution status.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The launcher for script execution. The value cannot exceed 1 KB in length.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * Command to execute the Output OSS delivery configuration.
   * 
   * @example
   * oss://testBucket/testPrefix
   */
  ossOutputDelivery?: string;
  /**
   * @remarks
   * The custom parameters in the command.
   * 
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @remarks
   * The execution mode of the command. Valid values:
   * 
   * *   Once: The command is immediately run.
   * *   Period: The command is run on a schedule.
   * *   NextRebootOnly: The command is run the next time the instances start.
   * *   EveryReboot: The command is run every time the instances start.
   * *   DryRun: The system performs only a dry run, without running the actual command. The system checks the request parameters, the execution environments on the instances, and the status of Cloud Assistant Agent.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The tags of the command task.
   */
  tags?: DescribeInvocationsResponseBodyInvocationsInvocationTags;
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
   * Indicates whether the command is to be automatically run.
   * 
   * @example
   * false
   */
  timed?: boolean;
  /**
   * @remarks
   * The maximum timeout period for the command execution. Unit: seconds.
   * 
   * When a command cannot be run, the command execution times out. When a command execution times out, Cloud Assistant Agent forcefully terminates the command process by canceling the process ID (PID) of the command.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The username used to run the command on the instances.
   * 
   * @example
   * root
   */
  username?: string;
  /**
   * @remarks
   * The execution path of the command.
   * 
   * @example
   * /home/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandDescription: 'CommandDescription',
      commandId: 'CommandId',
      commandName: 'CommandName',
      commandType: 'CommandType',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      creationTime: 'CreationTime',
      frequency: 'Frequency',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeInstances: 'InvokeInstances',
      invokeStatus: 'InvokeStatus',
      launcher: 'Launcher',
      ossOutputDelivery: 'OssOutputDelivery',
      parameters: 'Parameters',
      repeatMode: 'RepeatMode',
      tags: 'Tags',
      terminationMode: 'TerminationMode',
      timed: 'Timed',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandDescription: 'string',
      commandId: 'string',
      commandName: 'string',
      commandType: 'string',
      containerId: 'string',
      containerName: 'string',
      creationTime: 'string',
      frequency: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeInstances: DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstances,
      invokeStatus: 'string',
      launcher: 'string',
      ossOutputDelivery: 'string',
      parameters: 'string',
      repeatMode: 'string',
      tags: DescribeInvocationsResponseBodyInvocationsInvocationTags,
      terminationMode: 'string',
      timed: 'boolean',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(this.invokeInstances && typeof (this.invokeInstances as any).validate === 'function') {
      (this.invokeInstances as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocations extends $dara.Model {
  invocation?: DescribeInvocationsResponseBodyInvocationsInvocation[];
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocation },
    };
  }

  validate() {
    if(Array.isArray(this.invocation)) {
      $dara.Model.validateArray(this.invocation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the command executions.
   */
  invocations?: DescribeInvocationsResponseBodyInvocations;
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
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
      invocations: 'Invocations',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: DescribeInvocationsResponseBodyInvocations,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.invocations && typeof (this.invocations as any).validate === 'function') {
      (this.invocations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

