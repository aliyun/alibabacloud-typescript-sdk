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

