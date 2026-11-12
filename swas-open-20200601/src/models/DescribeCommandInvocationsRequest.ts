// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommandInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The command ID. You can call [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) to query all available command IDs.
   * 
   * @example
   * c-sh02yh0932w****
   */
  commandId?: string;
  /**
   * @remarks
   * The command name. If the InstanceId parameter is also specified, this parameter does not take effect.
   * 
   * @example
   * testName
   */
  commandName?: string;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * - RunBatScript: Bat command for Windows instances.
   * - RunPowerShellScript: PowerShell command for Windows instances.
   * - RunShellScript: Shell command for Linux instances.
   * 
   * @example
   * RunPowerShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The instance ID of the simple application server.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The overall execution status of the command. The overall execution status depends on the common execution status across all instances in this invocation. Valid values:
   * -  Pending: The system is validating or sending the command. If the command execution status on at least one instance is Pending, the overall execution status is Pending.
   * -  Running: The command is running on instances. If the command execution status on at least one instance is Running, the overall execution status is Running.
   * -  Success: The command execution status on each instance is Stopped or Success, and the command execution status on at least one instance is Success. In this case, the overall execution status is Success.
   *     -  One-time task: The command execution is complete and the exit code is 0.
   * -  Failed: The command execution status on each instance is Stopped or Failed. In this case, the overall execution status is Failed. The overall execution status is Failed when the command execution status on an instance is one or more of the following values:
   *     - Command validation failed (Invalid).
   *     - Command sending failed (Aborted).
   *     - Command execution is complete but the exit code is not 0 (Failed).
   *     - Command execution timed out (Timeout).
   *     - Command execution encountered an exception (Error).
   * -  Stopping: The task is being stopped. If the command execution status on at least one instance is Stopping, the overall execution status is Stopping.
   * -  Stopped: The task is stopped. If the command execution status on all instances is Stopped, the overall execution status is Stopped. The overall execution status is Stopped when the command execution status on an instance is one of the following values:
   *     - Task canceled (Cancelled).
   *     - Task terminated (Terminated).
   * -  PartialFailed: The command execution succeeded on some instances and failed on others. If the command execution status on each instance is Success, Failed, or Stopped, the overall execution status is PartialFailed.
   * > The `InvokeStatus` response parameter has a similar meaning, but we recommend that you check the value of this parameter.
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
   * t-hz02p9545t6****
   */
  invokeId?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID. You can call [ListRegions](https://help.aliyun.com/document_detail/189315.html) to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      commandName: 'CommandName',
      commandType: 'CommandType',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      commandName: 'string',
      commandType: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

