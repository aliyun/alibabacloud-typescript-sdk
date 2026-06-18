// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode extends $dara.Model {
  /**
   * @remarks
   * The start time of the command execution.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The number of characters that are truncated and discarded because the \\`Output\\` value exceeds 24 KB in size.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * The error code for a file sending failure. Valid values:
   * 
   * - Empty: The file was sent as expected.
   * 
   * - NodeNotExists: The specified instance does not exist or has been released.
   * 
   * - NodeReleased: The instance was released while the file was being sent.
   * 
   * - NodeNotRunning: The instance was not in the Running state when the file sending task was created.
   * 
   * - AccountNotExists: The specified account does not exist.
   * 
   * - ClientNotRunning: Cloud Assistant Agent is not running.
   * 
   * - ClientNotResponse: Cloud Assistant Agent is not responding.
   * 
   * - ClientIsUpgrading: Cloud Assistant Agent is being upgraded.
   * 
   * - ClientNeedUpgrade: Cloud Assistant Agent needs to be upgraded.
   * 
   * - DeliveryTimeout: The file failed to be sent due to a timeout.
   * 
   * - FileCreateFail: The file failed to be created.
   * 
   * - FileAlreadyExists: A file with the same name exists in the same path.
   * 
   * - FileContentInvalid: The file content is invalid.
   * 
   * - FileNameInvalid: The file name is invalid.
   * 
   * - FilePathInvalid: The file path is invalid.
   * 
   * - FileAuthorityInvalid: The file permissions are invalid.
   * 
   * - UserGroupNotExists: The user group specified for sending the file does not exist.
   * 
   * @example
   * NodeNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The details about the cause of a command sending or execution failure. Valid values:
   * 
   * - Empty: The command was executed as expected.
   * 
   * - the specified node does not exist: The specified instance does not exist or has been released.
   * 
   * - the instance was released during the command execution: The instance was released during the command execution.
   * 
   * - the instance is not running when create task: The instance was not in the Running state during the command execution.
   * 
   * - the command is not applicable: The command is not applicable to the specified instance.
   * 
   * - the specified account does not exist: The specified account does not exist.
   * 
   * - the specified directory does not exist: The specified directory does not exist.
   * 
   * - the cron job expression is invalid: The specified cron expression is invalid.
   * 
   * - Cloud Assistant Agent is not running: Cloud Assistant Agent is not running.
   * 
   * - Cloud Assistant Agent is not responding: Cloud Assistant Agent is not responding.
   * 
   * - Cloud Assistant Agent is being upgraded: Cloud Assistant Agent is being upgraded.
   * 
   * - Cloud Assistant Agent needs to be upgraded: Cloud Assistant Agent needs to be upgraded.
   * 
   * - The command failed to be sent due to a timeout: The command failed to be sent due to a timeout.
   * 
   * - The command execution timed out: The command execution timed out.
   * 
   * - An exception occurred during the command execution: An exception occurred during the command execution.
   * 
   * - The command execution was interrupted: The command execution was interrupted.
   * 
   * - The command execution is complete, but the exit code is not 0: The command execution is complete, but the exit code is not 0.
   * 
   * - The instance was released while the file was being sent: The instance was released while the file was being sent.
   * 
   * @example
   * the specified node does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the command process. Valid values:
   * 
   * - On a Linux instance, this is the exit code of the Shell process.
   * 
   * - On a Windows instance, this is the exit code of the Batch or PowerShell process.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the execution was complete.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The execution status of the command on a single instance. Valid values:
   * 
   * - Pending: The system is verifying or sending the command.
   * 
   * - Invalid: The specified command type or parameter is incorrect.
   * 
   * - Aborted: Failed to send the command to the instance. The instance must be in the Running state and the command must be sent within 1 minute.
   * 
   * - Running: The command is running on the instance.
   * 
   * - Success:
   * 
   *   - For a one-time command: The execution is complete and the exit code is 0.
   * 
   *   - For a scheduled command: The last execution was successful with an exit code of 0, and the specified period is over.
   * 
   * - Failed:
   * 
   *   - For a one-time command: The execution is complete, but the exit code is not 0.
   * 
   *   - For a scheduled command: The last execution was successful, but the exit code was not 0. The scheduled execution will be aborted.
   * 
   * - Error: An exception occurred during the command execution and the execution cannot continue.
   * 
   * - Timeout: The command execution timed out.
   * 
   * - Cancelled: The command execution was canceled. The command was not started.
   * 
   * - Stopping: The task is being stopped.
   * 
   * - Terminated: The command was terminated during execution.
   * 
   * - Scheduled:
   * 
   *   - For a one-time command: This status is not applicable and will not occur.
   * 
   *   - For a scheduled command: The command is waiting to run.
   * 
   * @example
   * Pending
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The ID of the node.
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
   * The output of the command.
   * 
   * - If \\`ContentEncoding\\` is set to \\`PlainText\\`, the original output is returned.
   * 
   * - If \\`ContentEncoding\\` is set to \\`Base64\\`, the Base64-encoded output is returned.
   * 
   * @example
   * OutPutTestmsg
   */
  output?: string;
  /**
   * @remarks
   * The number of times the command has been executed on the instance.
   * 
   * - If the command is a one-time execution, the value is 0 or 1.
   * 
   * - If the command is a scheduled execution, the value is the number of times the command has been executed.
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
   * The time when \\`StopInvocation\\` was called to stop the command execution.
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  stopTime?: string;
  /**
   * @remarks
   * Indicates whether the command will be automatically run in the future. Valid values:
   * 
   * - true: The command is a scheduled command. The `RepeatMode` parameter was set to `Period`, `NextRebootOnly`, or `EveryReboot` when `RunCommand` or `InvokeCommand` was called.
   * 
   * - false (default): The command is a one-time command or has finished.
   * 
   *   - The `RepeatMode` parameter was set to `Once` when `RunCommand` or `InvokeCommand` was called.
   * 
   *   - The command was canceled, stopped, or has finished running.
   * 
   * @example
   * false
   */
  timed?: string;
  /**
   * @remarks
   * The time when the record was updated.
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
   * The command execution records on the nodes.
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
   * The content of the command.
   * 
   * - If \\`ContentEncoding\\` is set to \\`PlainText\\`, the original script content is returned.
   * 
   * - If \\`ContentEncoding\\` is set to \\`Base64\\`, the Base64-encoded script content is returned.
   * 
   * @example
   * cnBtIC1xYSB8IGdyZXAgdnNm****
   */
  commandContent?: string;
  /**
   * @remarks
   * The description of the command.
   * 
   * @example
   * testDescription
   */
  commandDescription?: string;
  /**
   * @remarks
   * The name of the command.
   * 
   * @example
   * CommandTestName
   */
  commandName?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2020-01-19T09:15:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The cron expression for the scheduled command.
   */
  frequency?: string;
  /**
   * @remarks
   * The overall execution status of the command. This status is determined by the execution status on all involved instances. Valid values:
   * 
   * - Pending: The system is verifying or sending the command. If the command is in the Pending state on at least one instance, the overall status is Pending.
   * 
   * - Scheduled: The scheduled command is sent and is waiting to run. If the command is in the Scheduled state on at least one instance, the overall status is Scheduled.
   * 
   * - Running: The command is running on the instances. If the command is in the Running state on at least one instance, the overall status is Running.
   * 
   * - Success: The command was successfully executed. The command status on each instance is Stopped or Success, and the status on at least one instance is Success.
   * 
   *   - For one-time tasks: The command execution is complete and the exit code is 0.
   * 
   *   - For scheduled tasks: The last execution was successful with an exit code of 0, and all scheduled executions are complete.
   * 
   * - Failed: The command execution failed. The command status on each instance is Stopped or Failed. The overall status is Failed if the command status on one or more instances is one of the following:
   * 
   *   - The command failed to be verified (Invalid).
   * 
   *   - The command failed to be sent (Aborted).
   * 
   *   - The command execution is complete, but the exit code is not 0 (Failed).
   * 
   *   - The command timed out (Timeout).
   * 
   *   - An error occurred during the command execution (Error).
   * 
   * - Stopping: The task is being stopped. If the command is in the Stopping state on at least one instance, the overall status is Stopping.
   * 
   * - Stopped: The task was stopped. The overall status is Stopped if the command is in the Stopped state on all instances. The overall status is Stopped if the command status on the instances is one of the following:
   * 
   *   - The task was canceled (Cancelled).
   * 
   *   - The task was terminated (Terminated).
   * 
   * - PartialFailed: The command was successfully executed on some instances but failed on others. The overall status is PartialFailed if the command status on the instances is Success, Failed, or Stopped.
   * 
   * > The `InvokeStatus` parameter has a similar meaning. However, check the value of this parameter.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The ID of the command execution.
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
   * The overall execution status of the command. This status is determined by the execution status on one or more instances. Valid values:
   * 
   * - Running:
   * 
   *   - Scheduled execution: The status is always Running before you manually stop the scheduled command.
   * 
   *   - One-time execution: The overall status is Running if a command process is in progress.
   * 
   * - Finished:
   * 
   *   - Scheduled execution: A command process cannot be in the Finished state.
   * 
   *   - One-time execution: The execution is complete on all instances. Alternatively, the command process is manually stopped on some instances and the execution is complete on the other instances.
   * 
   * - Failed:
   * 
   *   - Scheduled execution: A command process cannot be in the Failed state.
   * 
   *   - One-time execution: The execution failed on all instances.
   * 
   * - Stopped: The command is stopped.
   * 
   * - Stopping: The command is being stopped.
   * 
   * - PartialFailed: The execution failed on some instances. This value is not returned if you specify the `NodeId` parameter.
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
   * - Once: The command is immediately executed.
   * 
   * - Period: The command is executed on a schedule.
   * 
   * - NextRebootOnly: The command is automatically executed the next time the instance starts.
   * 
   * - EveryReboot: The command is automatically executed every time the instance starts.
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
   * The name of the user who runs the command.
   * 
   * @example
   * root
   */
  username?: string;
  /**
   * @remarks
   * The directory where the command is run on the instance.
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
   * The command execution records.
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
   * The object that contains the script execution records.
   */
  invocations?: DescribeInvocationsResponseBodyInvocations;
  /**
   * @remarks
   * The ID of the request.
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

