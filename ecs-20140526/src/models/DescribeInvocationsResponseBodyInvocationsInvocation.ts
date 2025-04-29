// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstances } from "./DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstances";
import { DescribeInvocationsResponseBodyInvocationsInvocationTags } from "./DescribeInvocationsResponseBodyInvocationsInvocationTags";


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

