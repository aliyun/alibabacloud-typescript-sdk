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
   * The length of the text that is truncated and discarded when the length of the `Output` field exceeds 24 KB.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * Reason code for file delivery failure. Possible values:
   * - Empty: File delivery is normal. 
   * - NodeNotExists: The specified instance does not exist or has been released. 
   * - NodeReleased: The instance was released during the file delivery process. 
   * - NodeNotRunning: The instance was not running when the file delivery task was created. 
   * - AccountNotExists: The specified account does not exist. 
   * - ClientNotRunning: The Cloud Assistant Agent is not running. 
   * - ClientNotResponse: The Cloud Assistant Agent is not responding. 
   * - ClientIsUpgrading: The Cloud Assistant Agent is currently upgrading. 
   * - ClientNeedUpgrade: The Cloud Assistant Agent needs to be upgraded. 
   * - DeliveryTimeout: File sending timed out. 
   * - FileCreateFail: File creation failed. 
   * - FileAlreadyExists: A file with the same name already exists at the specified path. 
   * - FileContentInvalid: The file content is invalid. - FileNameInvalid: The file name is invalid. 
   * - FilePathInvalid: The file path is invalid. 
   * - FileAuthorityInvalid: The file permissions are invalid. 
   * - UserGroupNotExists: The user group specified for file sending does not exist.
   * 
   * @example
   * NodeNotExists：
   */
  errorCode?: string;
  /**
   * @remarks
   * Details of the reason for command delivery failure or execution failure, possible values: 
   * - Empty: The command executed normally. 
   * - the specified node does not exist: The specified instance does not exist or has been released. 
   * - the node was released when creating the task: The instance was released during command execution. 
   * - the node is not running when creating the task: The instance was not in a running state when the command was executed. 
   * - the command is not applicable: The command is not applicable to the specified instance. 
   * - the specified account does not exist: The specified account does not exist. 
   * - the specified directory does not exist: The specified directory does not exist. 
   * - the cron job expression is invalid: The specified execution time expression is invalid. 
   * - the aliyun service is not running on the instance: The Cloud Assistant Agent is not running. 
   * - the aliyun service in the instance does not respond: The Cloud Assistant Agent is not responding. 
   * - the aliyun service in the node is upgrading now: The Cloud Assistant Agent is currently being upgraded. 
   * - the aliyun service in the node needs upgrade: The Cloud Assistant Agent needs an upgrade. 
   * - the command delivery has timed out: Command delivery has timed out. 
   * - the command execution has timed out: Command execution has timed out. 
   * - the command execution got an exception: An exception occurred during command execution. 
   * - the command execution was interrupted: Command execution was interrupted. 
   *  - the command execution exit code is not zero: Command execution completed with a non-zero exit code. 
   * - the specified node has been released: The instance was released during file delivery.
   * 
   * @example
   * the specified node does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the command process. Possible values:
   * - For Linux instances, it is the exit code of the Shell process. - For Windows instances, it is the exit code of the Bat or PowerShell process.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * Completion time.
   * 
   * @example
   * 2023-02-06T07:12:50Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The command progress status for a single instance. Possible values:
   * -  Pending: The system is validating or sending the command.
   * -  Invalid: The specified command type or parameters are incorrect.
   * -  Aborted: Failed to send the command to the instance. The instance must be running, and the command should be sent within 1 minute.
   * -  Running: The command is running on the instance.
   * -  Success:
   *     -  For a one-time execution command: The command has completed with an exit code of 0.
   *     -  For a periodic execution command: The last run was successful with an exit code of 0, and the specified period has ended.
   * -  Failed:
   *     -  For a one-time execution command: The command has completed with a non-zero exit code.
   *     -  For a periodic execution command: The last run was successful with a non-zero exit code, and the specified period will be terminated.
   * -  Error: An exception occurred during command execution, and it cannot continue.
   * -  Timeout: The command execution timed out.
   * -  Cancelled: The command execution action has been canceled, and the command was never started.
   * -  Stopping: The task is being stopped.
   * -  Terminated: The command was terminated while running.
   * -  Scheduled:
   *     -  For a one-time execution command: Not applicable, will not appear.
   *     -  For a periodic execution command: Waiting to run.
   * 
   * @example
   * Pending
   */
  invocationStatus?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-cn-lbj36wkp70b
   */
  nodeId?: string;
  /**
   * @remarks
   * The command progress status of a single instance.
   * 
   * @example
   * Finished
   */
  nodeInvokeStatus?: string;
  /**
   * @remarks
   * The output information of the command.
   * 
   * - If `ContentEncoding` is set to `PlainText`, the original output information is returned.
   * - If `ContentEncoding` is set to `Base64`, the Base64-encoded output information is returned.
   * 
   * @example
   * OutPutTestmsg
   */
  output?: string;
  /**
   * @remarks
   * The number of times the command has been executed on this instance.
   * -  If the execution mode is one-time, the value is 0 or 1.
   * -  If the execution mode is periodic, the value is the number of times it has been executed.
   * 
   * @example
   * 0
   */
  repeats?: number;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time when `StopInvocation` was called to stop the command execution.
   * 
   * @example
   * 2019-12-20T06:15:55Z
   */
  stopTime?: string;
  /**
   * @remarks
   * Whether the queried command will be automatically executed in the future. The value range is as follows:
   * - true: The command, when executed by calling `RunCommand` or `InvokeCommand`, has the `RepeatMode` parameter set to `Period`, `NextRebootOnly`, or `EveryReboot`. 
   * - false: Queries commands in the following two states. 
   * - When executing a command via `RunCommand` or `InvokeCommand`, the `RepeatMode` parameter is set to `Once`. 
   * - Commands that have been canceled, stopped, or completed.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  timed?: string;
  /**
   * @remarks
   * Update Time
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

