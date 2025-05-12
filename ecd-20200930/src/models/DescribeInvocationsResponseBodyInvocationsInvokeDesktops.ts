// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyInvocationsInvokeDesktops extends $dara.Model {
  /**
   * @remarks
   * The time when the command execution was performed.
   * 
   * @example
   * 2020-12-20T06:15:54Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * demo1234
   */
  desktopName?: string;
  /**
   * @remarks
   * The size of the text that is truncated and discarded when the Output value exceeds 24 KB in size.
   * 
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @remarks
   * The code explaining why the command failed to be sent or executed. Valid values:
   * 
   * *   Null: The command is executed successfully.
   * *   InstanceNotExists: The specified cloud computer does not exist or is released.
   * *   InstanceReleased: The cloud computer is released during the execution.
   * *   InstanceNotRunning: The cloud computer is not running during the execution.
   * *   CommandNotApplicable: The command cannot be executed on the specified cloud computer.
   * *   ClientNotRunning: The Cloud Assistant agent is not running.
   * *   ClientNotResponse: The Cloud Assistant agent does not respond.
   * *   ClientIsUpgrading: The Cloud Assistant agent is being updated.
   * *   ClientNeedUpgrade: The Cloud Assistant agent needs to be updated.
   * *   DeliveryTimeout: The command sending times out.
   * *   ExecutionTimeout: The command execution times out.
   * *   ExecutionException: An exception occurs when the command is being executed.
   * *   ExecutionInterrupted: The command execution is interrupted.
   * *   ExitCodeNonzero: The command execution completes, but the exit code is not 0.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The message explaining why the command failed to be sent or executed. Valid values:
   * 
   * *   Null: The command is executed successfully.
   * *   the specified instance does not exists: The specified cloud computer does not exist or is released.
   * *   the instance has released when create task: The cloud computer is released during the execution.
   * *   the instance is not running when create task: The cloud computer is not running during the execution.
   * *   the command is not applicable: The command cannot be executed on the specified cloud computer.
   * *   the aliyun service is not running on the instance: The Cloud Assistant agent is not running.
   * *   the aliyun service in the instance does not response: The Cloud Assistant agent does not respond.
   * *   the aliyun service in the instance is upgrading now: The Cloud Assistant agent is being updated.
   * *   the aliyun service in the instance need upgrade: The Cloud Assistant agent needs to be updated.
   * *   the command delivery has been timeout: The command sending times out.
   * *   the command execution has been timeout: The command execution times out.
   * *   the command execution got an exception: An exception occurs when the command is being executed.
   * *   the command execution has been interrupted: The command execution is interrupted.
   * *   the command execution exit code is not zero: The command execution completes, but the exit code is not 0.
   * 
   * @example
   * The specified instance does not exist.
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the execution.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the command execution ended.
   * 
   * @example
   * 2020-12-20T06:15:56Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The execution progress of the command on a single cloud computer.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The command output.
   * 
   * *   When the `IncludeOutput` parameter is set to false, the output is not returned.
   * *   When the `ContentEncoding` parameter is set to Base64, the output is returned as a Base64-encoded string.
   * 
   * @example
   * OutPutTestmsg
   */
  output?: string;
  /**
   * @remarks
   * The number of times the command has been executed on the cloud computer.
   * 
   * @example
   * 0
   */
  repeats?: number;
  /**
   * @remarks
   * The start time of the command execution.
   * 
   * @example
   * 2020-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @remarks
   * The stop time of the command execution (StopInvocatio).
   * 
   * @example
   * 2020-12-25T09:15:47Z
   */
  stopTime?: string;
  /**
   * @remarks
   * The time when the execution status was updated.
   * 
   * @example
   * 2020-12-25T06:15:56Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      desktopId: 'string',
      desktopName: 'string',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      invocationStatus: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
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

