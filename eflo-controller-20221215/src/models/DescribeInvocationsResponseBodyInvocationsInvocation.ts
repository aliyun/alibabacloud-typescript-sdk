// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes } from "./DescribeInvocationsResponseBodyInvocationsInvocationInvokeNodes";


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

