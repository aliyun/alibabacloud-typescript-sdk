// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key for command execution. Valid values for N are 1 to 20. If this value is specified, it cannot be an empty string.
   * 
   * When you use one tag to filter resources, the number of resources under this tag cannot exceed 1,000. When you use multiple tags to filter resources, the number of resources bound to all specified tags simultaneously cannot exceed 1,000. If the number of resources exceeds 1,000, you must use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) API to query them.
   * 
   * The key can contain up to 64 characters, must not start with `aliyun` or `acs:`, and must not contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value for command execution. Valid values for N are 1 to 20. This value can be an empty string.
   * 
   * The value can contain up to 128 characters and must not contain `http://` or `https://`.
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
   * The command ID. You can call the [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) API to query all available CommandId values.
   * 
   * @example
   * c-hz0jdfwcsr****
   */
  commandId?: string;
  /**
   * @remarks
   * The command name. If the `InstanceId` parameter is also specified, this parameter does not take effect.
   * 
   * @example
   * CommandTestName
   */
  commandName?: string;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * - RunBatScript: The command is a Bat script that runs on a Windows instance.
   * 
   * - RunPowerShellScript: The command is a PowerShell script that runs on a Windows instance.
   * 
   * - RunShellScript: The command is a Shell script that runs on a Linux instance.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The codec for the `CommandContent` and `Output` fields in the returned data. Valid values:
   * 
   * - PlainText: Returns the original command content and output information.
   * 
   * - Base64: Returns Base64-encoded command content and output information.
   * 
   * Default value: Base64.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Indicates whether to return the command execution output in the results.
   * 
   * - true: Returns the output. In this case, you must specify at least one of the `InvokeId` or `InstanceId` parameters.
   * 
   * - false: Does not return the output.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * The instance ID. If you specify this parameter, all command execution records for this instance will be queried.
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
   * The overall execution status of the command. The overall status depends on the combined execution statuses of one or more instances involved in the command execution. Valid values:
   * 
   * - Running:
   * 
   *   - Periodic execution: The status remains Running until the periodic execution is manually stopped.
   * 
   *   - One-time execution: The overall status is Running as long as any instance has a running command process.
   * 
   * - Finished:
   * 
   *   - Periodic execution: The command process cannot reach a Finished state.
   * 
   *   - One-time execution: All instances have completed execution, or some instances were manually stopped while the rest completed execution.
   * 
   * - Success: All instances have a command execution status of either Stopped or Success, and at least one instance has a status of Success. Specifically:
   * 
   *   - For immediate jobs: The command completed successfully with an exit code of 0.
   * 
   *   - For scheduled jobs: The most recent execution succeeded with an exit code of 0, and all scheduled times have been completed.
   * 
   * - Failed:
   * 
   *   - Periodic execution: The command process cannot reach a Failed state.
   * 
   *   - One-time execution: All instances failed execution.
   * 
   * - Stopped: The command was stopped.
   * 
   * - Stopping: The command is being stopped.
   * 
   * - PartialFailed: Partial failure. This value does not take effect if the `InstanceId` parameter is also specified.
   * 
   * - Pending: The system is validating or sending the command. If at least one instance has a Pending execution status, the overall status is Pending.
   * 
   * - Scheduled: The scheduled command has been sent and is waiting to run. If at least one instance has a Scheduled execution status, the overall status is Scheduled.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The maximum number of entries per page for paged queries.
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
   * The query credential (Token). Set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter will be unpublished soon. We recommend that you use NextToken and MaxResults to perform paged queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will be unpublished soon. We recommend that you use NextToken and MaxResults to perform paged query operations.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The Region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest Alibaba Cloud region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The execution mode of the command. This parameter does not take effect if the `InstanceId` parameter is also specified. Valid values:
   * 
   * - Once: Executes the command immediately.
   * 
   * - Period: Executes the command periodically.
   * 
   * - NextRebootOnly: Automatically executes the command the next time the instance starts.
   * 
   * - EveryReboot: Automatically executes the command every time the instance starts.
   * 
   * Default value: empty, which indicates that all modes are queried.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The resource group ID of the command execution. After you specify this parameter, you must also specify ResourceGroupId when executing the command. This enables filtering to retrieve the corresponding command execution results.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag list.
   */
  tag?: DescribeInvocationsRequestTag[];
  /**
   * @remarks
   * Indicates whether the queried command will be automatically executed in the future. Valid values:
   * 
   * - true: The command is queried when the `RepeatMode` parameter is set to `Period`, `NextRebootOnly`, or `EveryReboot` during a call to `RunCommand` or `InvokeCommand`.
   * 
   * - false: The command is queried under either of the following conditions:
   * 
   *   - The `RepeatMode` parameter is set to `Once` during a call to `RunCommand` or `InvokeCommand`.
   * 
   *   - The command has been canceled, stopped, or has finished execution.
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

