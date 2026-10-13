// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodesInvokeNode extends $dara.Model {
  /**
   * @remarks
   * The start time of the command execution. The time is displayed in ISO 8601 format. Z in the example indicates UTC.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The length of the truncated and discarded text after the text length in the Output field exceeds 24 KB.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * The error code for the file delivery failure. Valid values:
   * 
   * - Empty: The file was delivered normally.
   * - NodeNotExists: The specified instance does not exist or has been released.
   * - NodeReleased: The instance was released during file delivery.
   * - NodeNotRunning: The instance was not running when the file delivery task was created.
   * - AccountNotExists: The specified account does not exist.
   * - ClientNotRunning: The Cloud Assistant Agent is not running.
   * - ClientNotResponse: The Cloud Assistant Agent is not responding.
   * - ClientIsUpgrading: The Cloud Assistant Agent is being upgraded.
   * - ClientNeedUpgrade: The Cloud Assistant Agent needs to be upgraded.
   * - DeliveryTimeout: The file delivery timed out.
   * - FileCreateFail: The file creation failed.
   * - FileAlreadyExists: A file with the same name already exists in the same path.
   * - FileContentInvalid: The file content is invalid.
   * - FileNameInvalid: The file name is invalid.
   * - FilePathInvalid: The file path is invalid.
   * - FileAuthorityInvalid: The file permissions are invalid.
   * - UserGroupNotExists: The user group specified during file delivery does not exist.
   * 
   * @example
   * NodeNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The details of the command delivery failure or execution failure. Valid values:
   * - Empty: The command executed normally.
   * - the specified node does not exists: The specified instance does not exist or has been released.
   * - the node has node when create task: The instance was released during command execution.
   * - the node is not running when create task: The instance was not running when the command was executed.
   * - the command is not applicable: The command is not applicable to the specified instance.
   * - the specified account does not exists: The specified account does not exist.
   * - the specified directory does not exists: The specified directory does not exist.
   * - the cron job expression is invalid: The specified execution schedule expression is invalid.
   * - the aliyun service is not running on the instance: The Cloud Assistant Agent is not running.
   * - the aliyun service in the instance does not response: The Cloud Assistant Agent is not responding.
   * - the aliyun service in the node is upgrading now: The Cloud Assistant Agent is being upgraded.
   * - the aliyun service in the node need upgrade: The Cloud Assistant Agent needs to be upgraded.
   * - the command delivery has been timeout: The command delivery timed out.
   * - the command execution has been timeout: The command execution timed out.
   * - the command execution got an exception: An exception occurred during command execution.
   * - the command execution has been interrupted: The command execution was interrupted.
   * - the command execution exit code is not zero: The command execution completed with a non-zero exit code.
   * - the specified node has been released: The instance was released during file delivery.
   * 
   * @example
   * the specified node does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the command process. Valid values:
   * 
   * - For Linux instances, the value is the exit code of the Shell process.
   * - For Windows instances, the value is the exit code of the Bat or PowerShell process.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The completion time. The time is displayed in ISO 8601 format. Z in the example indicates UTC.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The command execution status on a single instance. Valid values:
   * -  Pending: The system is validating or sending the command.
   * -  Invalid: The specified command type or parameters are invalid.
   * -  Aborted: Failed to send the command to the instance. The instance must be running, and the command must be deliverable within one minute.
   * -  Running: The command is running on the instance.
   * -  Success:
   *     -  One-time command: The command execution is complete and the exit code is 0.
   *     -  Scheduled command: The last execution was successful with an exit code of 0, and the specified schedule has ended.
   * -  Failed:
   *     -  One-time command: The command execution is complete and the exit code is non-zero.
   *     -  Scheduled command: The last execution was successful with a non-zero exit code, and the specified schedule will be aborted.
   * -  Error: An exception occurred during command execution and the command cannot continue.
   * -  Timeout: The command execution timed out.
   * -  Cancelled: The command execution action was canceled and the command was never started.
   * -  Stopping: The task is being stopped.
   * -  Terminated: The command was terminated during execution.
   * -  Scheduled:
   *     -  One-time command: Not applicable. This status does not occur.
   *     -  Scheduled command: Waiting to run.
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
   * The command execution status on a single instance.
   * 
   * @example
   * Finished
   */
  nodeInvokeStatus?: string;
  /**
   * @remarks
   * The command output.
   * 
   * - If ContentEncoding is set to PlainText, the original output is returned.
   * - If ContentEncoding is set to Base64, the Base64-encoded output is returned.
   * 
   * @example
   * OutPutTestmsg
   */
  output?: string;
  /**
   * @remarks
   * The number of times the command was executed on the instance.
   * -  If the execution mode is one-time execution, the value is 0 or 1.
   * -  If the execution mode is scheduled execution, the value is the number of times the command has been executed.
   * 
   * @example
   * 0
   */
  repeats?: number;
  /**
   * @remarks
   * The start time. The time is displayed in ISO 8601 format. Z in the example indicates UTC.
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time when StopInvocation was called to stop the command execution. The time is displayed in ISO 8601 format. Z in the example indicates UTC.
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  stopTime?: string;
  /**
   * @remarks
   * Indicates whether the queried command will be automatically executed in the future. Valid values:
   * 
   * - true: The command was executed by calling RunCommand or InvokeCommand with the RepeatMode parameter set to Period, NextRebootOnly, or EveryReboot.
   * - false (default): The queried command is in one of the following states:
   *     - The command was executed by calling RunCommand or InvokeCommand with the RepeatMode parameter set to Once.
   *     - The command has been canceled, stopped, or has completed execution.
   * 
   * @example
   * false
   */
  timed?: string;
  /**
   * @remarks
   * The update time. The time is displayed in ISO 8601 format. Z in the example indicates UTC.
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
   * The command execution record on a node.
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
   * The command content.
   * 
   * - If ContentEncoding is set to PlainText, the original script content is returned.
   * - If ContentEncoding is set to Base64, the Base64-encoded script content is returned.
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
   * The time when the task was created. The time is displayed in ISO 8601 format. Z in the example indicates UTC.
   * 
   * @example
   * 2020-01-19T09:15:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The execution time of the scheduled command.
   */
  frequency?: string;
  /**
   * @remarks
   * The overall execution status of the command. The overall execution status depends on the common execution status across all instances in this invocation. Valid values:
   * - Pending: The system is validating or sending the command. When the command execution status on at least one instance is Pending, the overall execution status is Pending.
   * - Scheduled: The scheduled command has been sent and is waiting to run. When the command execution status on at least one instance is Scheduled, the overall execution status is Scheduled.
   * - Running: The command is running on the instance. When the command execution status on at least one instance is Running, the overall execution status is Running.
   * - Success: The command execution status on each instance is Stopped or Success, and the command execution status on at least one instance is Success. The overall execution status is Success.
   *     - One-time task: The command execution is complete and the exit code is 0.
   *     - Scheduled task: The last execution was successful with an exit code of 0, and all specified schedules have been completed.
   * - Failed: The command execution status on each instance is Stopped or Failed. The overall execution status is Failed. The return value is Failed when the command execution status on an instance is one or more of the following:
   *     - Command validation failed (Invalid).
   *     - Command delivery failed (Aborted).
   *     - Command execution completed with a non-zero exit code (Failed).
   *     - Command execution timed out (Timeout).
   *     - Command execution encountered an exception (Error).
   * - Stopping: The task is being stopped. When the command execution status on at least one instance is Stopping, the overall execution status is Stopping.
   * - Stopped: The task has been stopped. When the command execution status on all instances is Stopped, the overall execution status is Stopped. The return value is Stopped when the command execution status on an instance is one of the following:
   *     - The task was canceled (Cancelled).
   *     - The task was terminated (Terminated).
   * - PartialFailed: Some instances executed successfully while others failed. When the command execution status on each instance is Success, Failed, or Stopped, the overall execution status is PartialFailed.
   * 
   * > The InvokeStatus parameter in the response has a similar meaning, but we recommend that you check this parameter instead.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The command execution ID.
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
   * The overall execution status of the command. The overall execution status depends on the common execution status of one or more instances in the invocation. Valid values: 
   *          
   * - Running:
   *     - Scheduled execution: The execution status remains Running until you manually stop the scheduled command.
   *     - One-time execution: The overall execution status is Running if the command process is running on any instance.
   * - Finished:
   *     - Scheduled execution: The command process cannot have a status of Finished.
   *     - One-time execution: All instances have completed execution, or the command process was manually stopped on some instances while the remaining instances completed execution.
   * - Failed:
   *     - Scheduled execution: The command process cannot have a status of Failed.
   *     - One-time execution: All instances failed to execute the command.
   * - Stopped: The command was stopped.
   * - Stopping: The command is being stopped.
   * - PartialFailed: Partial failure. This value does not take effect if the InstanceId parameter is also specified.
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
   * - Once: Immediately executes the command.
   * - Period: Executes the command on a schedule.
   * - NextRebootOnly: Automatically executes the command the next time the instance starts.
   * - EveryReboot: Automatically executes the command every time the instance starts.
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
   * The username used to execute the command.
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
   * The file delivery record.
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
   * The script execution records.
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

