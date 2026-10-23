// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationResultsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command that you execute. Valid values of N: 1 to 20. This parameter cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count under the tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that are attached to all specified tags cannot exceed 1,000. If the resource count exceeds 1,000, you must call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command execution. Valid values of N: 1 to 20. This parameter can be an empty string.
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

export class DescribeInvocationResultsRequest extends $dara.Model {
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
   * The encoding method for the `CommandContent` and `Output` fields in the response. Valid values:
   * - PlainText: Returns the original command content and output information.
   * - Base64: Returns the Base64-encoded command content and output information.
   * Default value: Base64.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Specifies whether to return the history records of commands that execute on a schedule. Valid values:
   * - true: Returns the results of commands that execute on a schedule. If this parameter is set to true, the InvokeId parameter cannot be empty and must be the execution ID of a scheduled command (RepeatMode is Period) or a command that runs after each system startup (RepeatMode is EveryReboot).
   * - false: Does not return the history records.
   * Default value: false.
   * 
   * @example
   * false
   */
  includeHistory?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1i7gg30r52z2em****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution ID of the command. You can call the [DescribeInvocations](https://help.aliyun.com/document_detail/64840.html) operation to query the InvokeId value.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * The execution status of the command. Valid values:
   * - Running: The command is running.
   *     - Scheduled execution: The execution status remains Running until the scheduled command is manually stopped.
   *     - One-time execution: The overall execution status is Running as long as a command process is running.
   * - Finished: The command is completed.
   *     - Scheduled execution: The command process cannot be in the Finished state.
   *     - One-time execution: The command is completed on all instances, or the command process is manually stopped on some instances and completed on the remaining instances.
   * - Success:
   *     - One-time execution: The command is completed and the exit code is 0.
   *     - Scheduled execution: The last execution was successful with an exit code of 0, and the specified execution time has ended.
   * - Failed: The execution failed.
   *     - Scheduled execution: The command process cannot be in the Failed state.
   *     - One-time execution: The command failed on all instances.
   * - PartialFailed: The execution partially failed.
   *     - Scheduled execution: The command process cannot be in the PartialFailed state.
   *     - One-time execution: The command process failed on some instances, so the overall execution status is PartialFailed.
   * - Stopped: The command execution is stopped.
   * - Stopping: The command execution is being stopped.
   * 
   * @example
   * Running
   */
  invokeRecordStatus?: string;
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
   * > This parameter will soon be deprecated. We recommend that you use NextToken and MaxResults for paging.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will soon be deprecated. We recommend that you use NextToken and MaxResults for paging.
   * 
   * @example
   * 1
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
   * The ID of the resource group to which the command execution belongs. If you specify this parameter, you must specify ResourceGroupId when you run the command. This allows you to filter the corresponding command execution results.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeInvocationResultsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      contentEncoding: 'ContentEncoding',
      includeHistory: 'IncludeHistory',
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
      invokeRecordStatus: 'InvokeRecordStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      contentEncoding: 'string',
      includeHistory: 'boolean',
      instanceId: 'string',
      invokeId: 'string',
      invokeRecordStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeInvocationResultsRequestTag },
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

