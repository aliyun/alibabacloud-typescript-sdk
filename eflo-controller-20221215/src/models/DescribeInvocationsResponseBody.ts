// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode extends $dara.Model {
  /**
   * @remarks
   * The start time of the execution.
   * 
   * @example
   * 2023-02-06T07:12:50Z
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
   * The error code returned when the file failed to be sent to the instance. Valid values:
   * 
   * *   Null: The file is sent to the instance.
   * *   NodeNotExists: The specified instance does not exist or has been released.
   * *   NodeReleased: The instance was released while the file was being sent.
   * *   NodeNotRunning: The instance was not running while the file sending task was being created.
   * *   AccountNotExists: The specified account does not exist.
   * *   ClientNotRunning: Cloud Assistant Agent is not running.
   * *   ClientNotResponse: Cloud Assistant Agent does not respond.
   * *   ClientIsUpgrading: Cloud Assistant Agent is being upgraded.
   * *   ClientNeedUpgrade: Cloud Assistant Agent needs to be upgraded.
   * *   DeliveryTimeout: The file sending task timed out.
   * *   FileCreateFail: The file failed to be created.
   * *   FileAlreadyExists: A file with the same name exists in the specified directory.
   * *   FileContentInvalid: The file content is invalid.
   * *   FileNameInvalid: The file name is invalid.
   * *   FilePathInvalid: The specified directory is invalid.
   * *   FileAuthorityInvalid: The specified permissions on the file are invalid.
   * *   UserGroupNotExists: The specified user group does not exist.
   * 
   * @example
   * NodeNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the command cannot be sent or run.
   * 
   * *   If this parameter is empty, the command was run as expected.
   * *   the specified node does not exists: The specified instance does not exist or is released.
   * *   the node has node when create task: The instance is released when the command is being run.
   * *   the node is not running when create task: The instance is not in the Running state while the command is being run.
   * *   the command is not applicable: The command is not applicable to the specified instance.
   * *   the specified account does not exists: The specified account does not exist.
   * *   the specified directory does not exists: The specified directory does not exist.
   * *   the cron job expression is invalid: The cron expression that specifies the execution time is invalid.
   * *   the aliyun service is not running on the instance: Cloud Assistant Agent is not running.
   * *   the aliyun service in the instance does not response: Cloud Assistant Agent does not respond.
   * *   the aliyun service in the node is upgrading now: Cloud Assistant Agent is being upgraded.
   * *   the aliyun service in the node need upgrade: Cloud Assistant Agent needs to be upgraded.
   * *   the command delivery has been timeout: The request to send the command timed out.
   * *   the command execution has been timeout: The command execution timed out.
   * *   the command execution got an exception: An exception occurred when the command is being run.
   * *   the command execution has been interrupted: The command execution is interrupted.
   * *   the command execution exit code is not zero: The command execution completes, but the exit code is not 0.
   * *   the specified node has been released: The instance is released while the file is being sent.
   * 
   * @example
   * the specified node does not exists
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
   * The end time of the execution.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The execution status of the command on a single instance. Valid values:
   * 
   * *   Pending: The command was being verified or sent.
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
   *     *   Recurring execution: The previous occurrence of the execution is complete, and the exit code is 0. The specified recurring period during which the command is run ends.
   * 
   * *   Failed:
   * 
   *     *   One-time task: The execution was complete, but the exit code was not 0.
   *     *   Recurring execution: The previous occurrence of the execution is complete, but the exit code is not 0. The specified recurring period during which the command is run is about to end.
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
   *     *   Recurring execution: The command is waiting to be run.
   * 
   * @example
   * Pending
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-lbj36wkp70b
   */
  nodeId?: string;
  /**
   * @remarks
   * The execution status of the command on a single instance.
   * 
   * @example
   * Finished
   */
  nodeInvokeStatus?: string;
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
   * The start time.
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time when the command task was stopped. If you call the StopInvocation operation to stop the command task, the value of this parameter is the time when the operation is called.
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  stopTime?: string;
  /**
   * @remarks
   * Indicates whether the command is to be automatically run. Valid values:
   * 
   * *   true: The command is run by calling the `RunCommand` or `InvokeCommand` operation with `RepeatMode` set to `Period`, `NextRebootOnly`, or `EveryReboot`.
   * 
   * *   false (default): The command meets the following requirements.
   * 
   *     *   The command is run by calling the `RunCommand` or `InvokeCommand` operation with `RepeatMode` set to `Once`.
   *     *   The command task is canceled, stopped, or completed.
   * 
   * @example
   * false
   */
  timed?: string;
  /**
   * @remarks
   * The update time of the execution.
   * 
   * @example
   * 2023-02-06T07:12:50Z
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
      invocationStatus: 'InvocationStatus',
      nodeId: 'NodeId',
      nodeInvokeStatus: 'NodeInvokeStatus',
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
      invocationStatus: 'string',
      nodeId: 'string',
      nodeInvokeStatus: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
      timed: 'string',
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

export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes extends $dara.Model {
  /**
   * @remarks
   * The command execution records of the node.
   */
  invokeNode?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode[];
  static names(): { [key: string]: string } {
    return {
      invokeNode: 'InvokeNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeNode: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode },
    };
  }

  validate() {
    if(Array.isArray(this.invokeNode)) {
      $dara.Model.validateArray(this.invokeNode);
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
   * The executed command.
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
   * The command name.
   * 
   * @example
   * CommandTestName
   */
  commandName?: string;
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
   * The schedule on which the command was run.
   */
  frequency?: string;
  /**
   * @remarks
   * The overall execution state of the command task. The value of this parameter depends on the execution states of the command task on all the involved instances. Valid values:
   * 
   * *   Pending: The command was being verified or sent. If the execution state on at least one instance is Pending, the overall execution state is Pending.
   * 
   * *   Scheduled: The command that is set to run on a schedule is sent and waiting to be run. If the execution state on at least one instance is Scheduled, the overall execution state is Scheduled.
   * 
   * *   Running: The command is being run on the instance. When the execution state on at least one instance is Running, the overall execution state is Running.
   * 
   * *   Success: When the execution state on at least one instance is Success and the execution state on the other instances is Stopped or Success, the overall execution state is Success.
   * 
   *     *   One-time task: The execution is complete, and the exit code is 0.
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
   * >  The value of the `InvokeStatus` response parameter is similar to the value of InvocationStatus. We recommend that you ignore InvokeStatus and check the value of InvocationStatus.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The execution ID.
   * 
   * @example
   * t-ind3k9ytvvduoe8
   */
  invokeId?: string;
  /**
   * @remarks
   * The command execution records.
   */
  invokeNodes?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes;
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
   * @example
   * Running
   */
  invokeStatus?: string;
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
   * *   Once: The command is run immediately.
   * *   Period: The command is run on a schedule.
   * *   NextRebootOnly: The command is run the next time the instances start.
   * *   EveryReboot: runs the command every time the instances start.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The timeout period for the command execution. Unit: seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The username that is used to run the command.
   * 
   * @example
   * root
   */
  username?: string;
  /**
   * @remarks
   * The working directory of the command on the instance.
   * 
   * @example
   * /home
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandDescription: 'CommandDescription',
      commandName: 'CommandName',
      creationTime: 'CreationTime',
      frequency: 'Frequency',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeNodes: 'InvokeNodes',
      invokeStatus: 'InvokeStatus',
      parameters: 'Parameters',
      repeatMode: 'RepeatMode',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandDescription: 'string',
      commandName: 'string',
      creationTime: 'string',
      frequency: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeNodes: DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes,
      invokeStatus: 'string',
      parameters: 'string',
      repeatMode: 'string',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(this.invokeNodes && typeof (this.invokeNodes as any).validate === 'function') {
      (this.invokeNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocations extends $dara.Model {
  /**
   * @remarks
   * The file sending records.
   */
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
   * The command execution record.
   */
  invocations?: DescribeInvocationsResponseBodyInvocations;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: DescribeInvocationsResponseBodyInvocations,
      requestId: 'string',
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

