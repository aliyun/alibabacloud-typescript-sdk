// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command to execute. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count returned cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that have all the specified tags attached cannot exceed 1,000. If the resource count exceeds 1,000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command execution. Valid values of N: 1 to 20. The tag value can be an empty string.
   * The tag value can be up to 128 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The command ID. You can call the [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) operation to query all available command IDs.
   * 
   * @example
   * c-hz0jdfwcsr****
   */
  commandId?: string;
  /**
   * @remarks
   * The command name. This parameter does not take effect if the InstanceId parameter is also specified.
   * 
   * @example
   * CommandTestName
   */
  commandName?: string;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * - RunBatScript: The command is a batch script that runs on a Windows instance.
   * - RunPowerShellScript: The command is a PowerShell script that runs on a Windows instance.
   * - RunShellScript: The command is a shell script that runs on a Linux instance.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The encoding method of the CommandContent and Output fields in the response. Valid values:
   * 
   * - PlainText: returns the original command content and output.
   * - Base64: returns the Base64-encoded command content and output.
   * 
   * Default value: Base64.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Specifies whether to return the output of the command execution in the response. Valid values:
   * 
   * - true: The output is returned. In this case, you must specify at least the InvokeId or InstanceId parameter.
   * - false: The output is not returned.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * The instance ID. If you specify this parameter, the system queries all command execution records of the instance.
   * 
   * @example
   * i-bp1i7gg30r52z2em****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution ID of the command.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * The overall execution status of the command. The overall execution status depends on the combined execution status of one or more instances involved in the execution. Valid values: 
   *          
   * - Running:
   *     - Scheduled execution: The execution status remains Running until the scheduled command is manually stopped.
   *     - One-time execution: The overall execution status is Running as long as a command process is running.
   * - Finished:
   *     - Scheduled execution: The command process cannot be finished.
   *     - One-time execution: All instances have completed the execution. Alternatively, the command processes on some instances are manually stopped, and the execution on the remaining instances is completed.
   * - Success: The command execution status on each instance is Stopped or Success, and the command execution status on at least one instance is Success.
   *     - Immediately run tasks: The command execution is completed, and the exit code is 0.
   *     - Scheduled tasks: The most recent execution is successful, the exit code is 0, and the specified schedule has ended.
   * - Failed:
   *     - Scheduled execution: The command process cannot fail.
   *     - One-time execution: The execution fails on all instances.
   * - Stopped: The command is stopped.
   * - Stopping: The command is being stopped.
   * - PartialFailed: The execution partially fails. This value does not take effect if the InstanceId parameter is also specified.
   * - Pending: The system is verifying or sending the command. The overall execution status is Pending if the command execution status on at least one instance is Pending.
   * - Scheduled: The scheduled command has been sent and is waiting to be run. The overall execution status is Scheduled if the command execution status on at least one instance is Scheduled.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The maximum number of entries per page for paging.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter will soon be taken offline. We recommend that you use NextToken and MaxResults for paging and paged query operations.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will soon be taken offline. We recommend that you use NextToken and MaxResults for paging and paged query operations.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The execution mode of the command. This parameter does not take effect if the InstanceId parameter is also specified. Valid values:
   * 
   * - Once: runs the command immediately.
   * - Period: runs the command on a schedule.
   * - NextRebootOnly: automatically runs the command the next time the instance starts.
   * - EveryReboot: automatically runs the command every time the instance starts.
   * 
   * Default value: empty. An empty value indicates that all execution modes are queried.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The ID of the resource group to which the command execution belongs. If you specify this parameter, you must also specify ResourceGroupId when you run the command. This allows you to filter the corresponding command execution results.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeInvocationsRequestTag[];
  /**
   * @remarks
   * Specifies whether the queried command will be automatically run in the future. Valid values:
   * 
   * - true: Queries commands for which the RepeatMode parameter is set to Period, NextRebootOnly, or EveryReboot when you call RunCommand or InvokeCommand to run the commands.
   * - false: Queries commands in the following states:
   *     - Commands for which the RepeatMode parameter is set to Once when you call RunCommand or InvokeCommand to run the commands.
   *     - Commands that have been canceled, stopped, or completed.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  timed?: boolean;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      commandName: 'CommandName',
      commandType: 'CommandType',
      contentEncoding: 'ContentEncoding',
      includeOutput: 'IncludeOutput',
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
      invokeStatus: 'InvokeStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repeatMode: 'RepeatMode',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      timed: 'Timed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      commandName: 'string',
      commandType: 'string',
      contentEncoding: 'string',
      includeOutput: 'boolean',
      instanceId: 'string',
      invokeId: 'string',
      invokeStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      repeatMode: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeInvocationsRequestTag },
      timed: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

