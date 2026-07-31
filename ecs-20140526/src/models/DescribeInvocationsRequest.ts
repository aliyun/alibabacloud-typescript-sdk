// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command execution. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the number of resources with the specified tag cannot exceed 1,000. If you use multiple tags to filter resources, the number of resources that are attached to all specified tags cannot exceed 1,000. If the resource count exceeds 1,000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to execute the query.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * The command name. This parameter does not take effect if the `InstanceId` parameter is also specified.
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
   * - RunShellScript: shell script that runs on Linux instances.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The encoding mode of the `CommandContent` and `Output` fields in the response. Valid values:
   * 
   * - PlainText: returns the original command content and output.
   * - Base64: returns Base64-encoded command content and output.
   * 
   * Default value: Base64.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Specifies whether to return the command output in the response.
   * 
   * - true: returns the output. You must specify at least the `InvokeId` or `InstanceId` parameter.
   * - false: does not return the output.
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
   * The overall execution status of the command. The overall execution status is determined by the combined execution status across one or more instances. Valid values: 
   *          
   * - Running:
   *     - Scheduled execution: the execution status remains Running until you manually stop the scheduled command.
   *     - One-time execution: the overall status is Running if the command process is running on any instance.
   * - Finished:
   *     - Scheduled execution: the status can never be Finished.
   *     - One-time execution: all instances have completed execution, or the command process on some instances was manually stopped while the remaining instances completed execution.
   * - Success: the execution status on each instance is Stopped or Success, and at least one instance has a status of Success.
   *     - Immediate task: the command execution is complete and the exit code is 0.
   *     - Scheduled task: the most recent execution succeeded with an exit code of 0, and all specified execution times have elapsed.
   * - Failed:
   *     - Scheduled execution: the status can never be Failed.
   *     - One-time execution: all instances failed to run the command.
   * - Stopped: the command was stopped.
   * - Stopping: the command is being stopped.
   * - PartialFailed: the command succeeded on some instances but failed on others. This value does not take effect if the `InstanceId` parameter is also specified.
   * - Pending: the system is verifying or sending the command. The overall status is Pending if at least one instance has a status of Pending.
   * - Scheduled: the scheduled command has been sent and is waiting to run. The overall status is Scheduled if at least one instance has a status of Scheduled.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
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
   * > This parameter is about to be deprecated. Use NextToken and MaxResults to perform paging queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults to perform paging queries.
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
   * The execution mode of the command. This parameter does not take effect if the `InstanceId` parameter is also specified. Valid values:
   * 
   * - Once: runs the command immediately.
   * - Period: runs the command on a schedule.
   * - NextRebootOnly: automatically runs the command the next time the instance starts.
   * - EveryReboot: automatically runs the command every time the instance starts.
   * 
   * Default value: empty, which indicates that all execution modes are queried.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The ID of the resource group to which the command execution belongs. After you specify this parameter, you must also specify ResourceGroupId when you run the command. This way, the corresponding command execution results can be filtered.
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
   * Specifies whether to query commands that will be automatically run in the future. Valid values:
   * 
   * - true: queries commands for which the `RepeatMode` parameter is set to `Period`, `NextRebootOnly`, or `EveryReboot` when `RunCommand` or `InvokeCommand` is called.
   * - false: queries commands that meet one of the following conditions:
   *     - The `RepeatMode` parameter is set to `Once` when `RunCommand` or `InvokeCommand` is called.
   *     - The commands have been canceled, stopped, or completed.
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

