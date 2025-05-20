// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes } from "./DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes";


export class DescribeInvocationsResponseBodyInvocationsInvocation extends $dara.Model {
  /**
   * @remarks
   * Command content.
   * 
   * - If `ContentEncoding` is set to `PlainText`, the original script content is returned.
   * - If `ContentEncoding` is set to `Base64`, the Base64-encoded script content is returned.
   * 
   * @example
   * cnBtIC1xYSB8IGdyZXAgdnNm****
   */
  commandContent?: string;
  /**
   * @remarks
   * Command description.
   * 
   * @example
   * testDescription
   */
  commandDescription?: string;
  /**
   * @remarks
   * Command name.
   * 
   * @example
   * CommandTestName
   */
  commandName?: string;
  /**
   * @remarks
   * The creation time of the task.
   * 
   * @example
   * 2020-01-19T09:15:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The execution time for scheduled commands.
   */
  frequency?: string;
  /**
   * @remarks
   * The overall execution status of the command, which depends on the common execution status of all instances involved in the call. Possible values:
   * - Pending: The system is validating or sending the command. If at least one instance has a command execution status of Pending, the overall status is Pending.
   * - Scheduled: The scheduled command has been sent and is waiting to run. If at least one instance has a command execution status of Scheduled, the overall status is Scheduled.
   * - Running: The command is running on the instance. If at least one instance has a command execution status of Running, the overall status is Running.
   * - Success: The command execution status of all instances is Stopped or Success, and at least one instance\\"s command execution status is Success. The overall status is Success.
   *     - For immediately executed tasks: The command has completed with an exit code of 0.
   *     - For periodically executed tasks: The most recent execution was successful with an exit code of 0, and the specified times have all been completed.
   * - Failed: The command execution status of all instances is Stopped or Failed. The overall status is Failed if any of the following conditions apply to the instance\\"s command execution status:
   *     - Command validation failed (Invalid).
   *     - Command sending failed (Aborted).
   *     - Command completed but the exit code is not 0 (Failed).
   *     - Command execution timed out (Timeout).
   *     - Command execution encountered an error (Error).
   * - Stopping: The task is being stopped. If at least one instance has a command execution status of Stopping, the overall status is Stopping.
   * - Stopped: The task has been stopped. If all instances\\" command execution statuses are Stopped, the overall status is Stopped. The overall status is Stopped if the instance\\"s command execution status is any of the following:
   *     - The task was canceled (Cancelled).
   *     - The task was terminated (Terminated).
   * - PartialFailed: Some instances succeeded and some failed. If the command execution statuses of all instances are Success, Failed, or Stopped, the overall status is PartialFailed.
   * 
   * > The `InvokeStatus` in the response parameters is similar in meaning to this parameter, but it is recommended that you check this return value.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * Command execution ID.
   * 
   * @example
   * t-ind3k9ytvvduoe8
   */
  invokeId?: string;
  /**
   * @remarks
   * Command execution records.
   */
  invokeNodes?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes;
  /**
   * @remarks
   * The overall execution status of the command. The overall execution status depends on the common execution status of one or more instances in the execution. Possible values: 
   * - Running:
   *     - For scheduled execution: The execution status remains ongoing until the scheduled command is manually stopped.
   *     - For single execution: If there is any command process running, the overall execution status is ongoing.
   * - Finished:
   *     - For scheduled execution: The command process cannot be completed.
   *     - For single execution: All instances have completed execution, or some instances\\" command processes are manually stopped and the rest have completed.
   * - Failed:
   *     - For scheduled execution: The command process cannot fail.
   *     - For single execution: All instances have failed to execute.
   * - Stopped: The command has been stopped.
   * - Stopping: The command is being stopped.
   * - PartialFailed: Partial failure; if the `InstanceId` parameter is set, this does not apply.
   * 
   * @example
   * Running
   */
  invokeStatus?: string;
  /**
   * @remarks
   * Custom parameters in the command.
   * 
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @remarks
   * 命令执行的方式。可能值：
   * 
   * Once：立即执行命令。
   * Period：定时执行命令。
   * NextRebootOnly：当实例下一次启动时，自动执行命令。
   * EveryReboot：实例每一次启动都将自动执行命令。
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * Timeout for executing the command, in seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * Username for executing the command.
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

