// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance extends $dara.Model {
  /**
   * @remarks
   * The command description.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The value of tag N of the command. You can specify up to 20 tag values for the command. The tag value can be an empty string. It can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * The instances on which the command was run.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The total number of the commands.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The custom parameters in the command.
   * 
   * @example
   * 2019-12-20T06:15:56Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * i-bp1i7gg30r52z2em****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * Finished
   */
  instanceInvokeStatus?: string;
  /**
   * @remarks
   * The key of tag N of the command. You can specify up to 20 tag keys for the command. The tag key cannot be an empty string.
   * 
   * If a single tag is specified to query resources, up to 1,000 resources that have this tag added can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all these tags added can be displayed in the response. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  ossOutputErrorCode?: string;
  ossOutputErrorInfo?: string;
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
   * Finished
   */
  ossOutputStatus?: string;
  /**
   * @remarks
   * Command to execute the Output OSS delivery configuration.
   * 
   * @example
   * oss://testBucket/testPrefix/output.txt
   */
  ossOutputUri?: string;
  /**
   * @remarks
   * Indicates whether the command is to be automatically run.
   * 
   * @example
   * OutPutTestmsg
   */
  output?: string;
  /**
   * @remarks
   * The time when the command task was created.
   * 
   * @example
   * 0
   */
  repeats?: number;
  /**
   * @remarks
   * Details about the command executions.
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The execution states of the command.
   * 
   * @example
   * 2020-01-19T09:15:47Z
   */
  stopTime?: string;
  /**
   * @remarks
   * The request ID.
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
      ossOutputErrorCode: 'OssOutputErrorCode',
      ossOutputErrorInfo: 'OssOutputErrorInfo',
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
      ossOutputErrorCode: 'string',
      ossOutputErrorInfo: 'string',
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
   * The command content.
   * 
   * *   If ContentEncoding is set to PlainText in the request, the original command content is returned.
   * *   If ContentEncoding is set to Base64 in the request, the Base64-encoded command content is returned.
   * 
   * @example
   * owner
   */
  tagKey?: string;
  /**
   * @remarks
   * The execution path of the command.
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
   * The size of the Output text that was truncated and discarded because the Output value exceeded 24 KB in size.
   * 
   * @example
   * cnBtIC1xYSB8IGdyZXAgdnNm****
   */
  commandContent?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * testDescription
   */
  commandDescription?: string;
  /**
   * @remarks
   * The time when the command process ended.
   * 
   * @example
   * c-hz0jdfwcsr****
   */
  commandId?: string;
  /**
   * @remarks
   * The command output.
   * 
   * *   If ContentEncoding is set to PlainText in the request, the original command output is returned.
   * *   If ContentEncoding is set to Base64 in the request, the Base64-encoded command output is returned.
   * 
   * @example
   * CommandTestName
   */
  commandName?: string;
  /**
   * @remarks
   * The execution status of the command on a single instance.
   * 
   * >  We recommend that you ignore this parameter and check the value of `InvocationStatus` in the response to obtain the execution status.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
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
   * ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****
   */
  containerId?: string;
  /**
   * @remarks
   * The time when the command started to be run on the instance.
   * 
   * @example
   * test-container
   */
  containerName?: string;
  /**
   * @remarks
   * The number of times that the command was run on the instance.
   * 
   * *   If the command is set to run only once, the value is 0 or 1.
   * *   If the command is set to run on a schedule, the value is the number of times that the command has been run on the instance.
   * 
   * @example
   * 2020-01-19T09:15:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The command execution Output delivers the object URI to OSS. This field is an empty string when the delivery fails or is in progress.
   */
  frequency?: string;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * Running
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The time when the command task was created.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * The tags that are added to the command.
   */
  invokeInstances?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstances;
  /**
   * @remarks
   * Indicates whether the command is to be automatically run.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The output delivery status of the command execution. Valid values:
   * 
   * *   InProgress: The delivery is in progress.
   * *   Finished: The delivery is complete.
   * *   Failed: The delivery failed.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * Specifies whether to return the command outputs in the response.
   * 
   * *   true: The command outputs are returned. When this parameter is set to true, you must specify `InvokeId`, `InstanceId`, or both.
   * *   false: The command outputs are not returned.
   * 
   * Default value: false
   * 
   * @example
   * oss://testBucket/testPrefix
   */
  ossOutputDelivery?: string;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The error code for the failure to send or run the command. Valid values:
   * 
   * *   If this parameter is empty, the command is run normally.
   * *   InstanceNotExists: The specified instance did not exist or was released.
   * *   InstanceReleased: The instance is released during command execution.
   * *   InstanceNotRunning: The instance was not running when the command started to be run.
   * *   CommandNotApplicable: The command was inapplicable to the specified instance.
   * *   AccountNotExists: The username specified to run the command did not exist.
   * *   DirectoryNotExists: The specified directory did not exist.
   * *   BadCronExpression: The specified cron expression for the execution schedule was invalid.
   * *   ClientNotRunning: Cloud Assistant Agent was not running.
   * *   ClientNotResponse: Cloud Assistant Agent does not respond.
   * *   ClientIsUpgrading: Cloud Assistant Agent is being upgraded.
   * *   ClientNeedUpgrade: Cloud Assistant Agent needed to be upgraded.
   * *   DeliveryTimeout: The request to send the command timed out.
   * *   ExecutionTimeout: The execution timed out.
   * *   ExecutionException: An exception occurred while the command was being executed.
   * *   ExecutionInterrupted: The command task was interrupted.
   * *   ExitCodeNonzero: The execution was complete, but the exit code was not 0.
   * *   SecurityGroupRuleDenied: Access to Cloud Assistant was denied by security group rules.
   * *   TaskConcurrencyLimit: The number of concurrent tasks exceeds the maximum limit.
   */
  tags?: DescribeInvocationsResponseBodyInvocationsInvocationTags;
  /**
   * @remarks
   * The time when the execution status was updated.
   * 
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * false
   */
  timed?: boolean;
  /**
   * @remarks
   * The execution mode of the command. If you specify both this parameter and `InstanceId`, this parameter does not take effect. Valid values:
   * 
   * *   Once: The command is immediately run.
   * *   Period: The command is run on a schedule.
   * *   NextRebootOnly: The command is run the next time the instances start.
   * *   EveryReboot: The command is run every time the instances start.
   * 
   * This parameter is empty by default, which indicates that commands run in all modes are queried.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The exit code of the execution. Valid values:
   * 
   * *   For Linux instances, the value is the exit code of the shell process.
   * *   For Windows instances, the value is the exit code of the batch or PowerShell process.
   * 
   * @example
   * test
   */
  username?: string;
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
   * The ID of instance N. When you specify this parameter, the system queries all the execution records of all the commands that run on the instance.
   */
  invocations?: DescribeInvocationsResponseBodyInvocations;
  /**
   * @remarks
   * The overall execution status of the command task. The value of this parameter depends on the execution states of the command task on all involved instances. Valid values:
   * 
   * *   Running:
   * 
   *     *   Scheduled task: Before you stop the scheduled execution of the command, the overall execution state is always Running.
   *     *   One-time task: If the command is being run on instances, the overall execution state is Running.
   * 
   * *   Finished:
   * 
   *     *   Scheduled task: The overall execution state can never be Finished.
   *     *   One-time task: The execution is complete on all instances, or the execution is stopped on some instances and is complete on the other instances.
   * 
   * *   Success: If the execution state on at least one instance is Success and the execution state on the other instances is Stopped or Success, the overall execution state is Success.
   * 
   *     *   One-time task: The execution is complete, and the exit code is 0.
   *     *   Scheduled task: The last execution is complete, the exit code is 0, and the specified period ends.
   * 
   * *   Failed:
   * 
   *     *   Scheduled task: The overall execution state can never be Failed.
   *     *   One-time task: The execution failed on all instances.
   * 
   * *   Stopped: The task is stopped.
   * 
   * *   Stopping: The task is being stopped.
   * 
   * *   PartialFailed: The task fails on some instances. If you specify both this parameter and `InstanceId`, this parameter does not take effect.
   * 
   * *   Pending: The command is being verified or sent. If the execution state on at least one instance is Pending, the overall execution state is Pending.
   * 
   * *   Scheduled: The command that is set to run on a schedule is sent and waiting to be run. If the execution state on at least one instance is Scheduled, the overall execution state is Scheduled.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * *   RunBatScript: batch command, applicable to Windows instances.
   * *   RunPowerShellScript: PowerShell command, applicable to Windows instances.
   * *   RunShellScript: shell command, applicable to Linux instances.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The command ID. You can call the [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) operation to query all available command IDs.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The command name. If you specify both this parameter and `InstanceId`, this parameter does not take effect.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the command is to be automatically run. Valid values:
   * 
   * *   true: The command is run by calling the `RunCommand` or `InvokeCommand` operation with `RepeatMode` set to `Period`, `NextRebootOnly`, or `EveryReboot`.
   * 
   * *   false: The command meets one of the following requirements:
   * 
   *     *   The command is run by calling the `RunCommand` or `InvokeCommand` operation with `RepeatMode` set to `Once`.
   *     *   The command task is canceled, stopped, or completed.
   * 
   * Default value: false.
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

