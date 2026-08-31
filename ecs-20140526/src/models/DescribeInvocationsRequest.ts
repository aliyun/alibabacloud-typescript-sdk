// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command execution. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count that are attached to all specified tags cannot exceed 1,000. If the resource count exceeds 1,000, execute the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command execution. Valid values of N: 1 to 20. The tag value can be an empty string.
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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
   * The command ID. You can call [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) to query all available command IDs.
   * 
   * @example
   * c-hz0jdfwcsr****
   */
  commandId?: string;
  /**
   * @remarks
   * The command name. If you also specify the `InstanceId` parameter, this parameter does not take effect.
   * 
   * @example
   * CommandTestName
   */
  commandName?: string;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * - RunBatScript: Bat script that runs on Windows instances.
   * - RunPowerShellScript: PowerShell script that runs on Windows instances.
   * - RunShellScript: Shell script that runs on Linux instances.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The encoding mode of the `CommandContent` and `Output` fields in the response. Valid values:
   * 
   * - PlainText: Returns the original command content and output.
   * - Base64: Returns the Base64-encoded command content and output.
   * 
   * Default value: Base64.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Specifies whether to return the command output in the results.
   * 
   * - true: The output is returned. You must specify at least the `InvokeId` or `InstanceId` parameter.
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
   * The instance ID. If you specify this parameter, all command execution records for the instance are queried.
   * 
   * @example
   * i-bp1i7gg30r52z2em****
   */
  instanceId?: string;
  /**
   * @remarks
   * The command execution ID.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * The overall execution status of the command. The overall execution status depends on the common execution status across one or more instances in the execution. Valid values: 
   *          
   * - Running:
   *     - Scheduled execution: The execution status remains Running until you manually stop the scheduled command.
   *     - One-time execution: The overall execution status is Running as long as the command process is running on any instance.
   * - Finished:
   *     - Scheduled execution: The command process cannot have a status of Finished.
   *     - One-time execution: The command process has finished running on all instances, or the command process was manually stopped on some instances and finished running on the remaining instances.
   * - Success: The command execution status on each instance is Stopped or Success, and the command execution status on at least one instance is Success. The overall execution status is Success.
   *     - Immediate task: The command execution is complete and the exit code is 0.
   *     - Scheduled task: The last execution was successful with an exit code of 0, and all specified execution times have elapsed.
   * - Failed:
   *     - Scheduled execution: The command process cannot have a status of Failed.
   *     - One-time execution: The command process failed on all instances.
   * - Stopped: The command has been stopped.
   * - Stopping: The command is being stopped.
   * - PartialFailed: The command succeeded on some instances but failed on others. This value does not take effect if you also specify the `InstanceId` parameter.
   * - Pending: The system is verifying or sending the command. The overall execution status is Pending if the command execution status on at least one instance is Pending.
   * - Scheduled: The scheduled command has been sent and is waiting to run. The overall execution status is Scheduled if the command execution status on at least one instance is Scheduled.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paging query.
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
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults to complete paging query operations.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults to complete paging query operations.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The execution mode of the command. This parameter does not take effect if you also specify the `InstanceId` parameter. Valid values:
   * 
   * - Once: The command is immediately run.
   * - Period: The command is run on a schedule.
   * - NextRebootOnly: The command is automatically run the next time the instance starts.
   * - EveryReboot: The command is automatically run every time the instance starts.
   * 
   * Default value: empty, which indicates that all execution modes are queried.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The resource group ID of the command execution. After you specify this parameter, you must also specify ResourceGroupId when running the command to filter the corresponding command execution results.
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
   * Specifies whether the command will be automatically run in the future. Valid values:
   * 
   * - true: The command is run with the `RepeatMode` parameter set to `Period`, `NextRebootOnly`, or `EveryReboot` when `RunCommand` or `InvokeCommand` is called.
   * - false: Queries commands in the following two states:
   *     - The command is run with the `RepeatMode` parameter set to `Once` when `RunCommand` or `InvokeCommand` is called.
   *     - The command has been canceled, stopped, or completed.
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

