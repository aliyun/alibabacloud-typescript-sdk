// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationResultsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command execution. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the number of resources with this tag cannot exceed 1,000. If you use multiple tags to filter resources, the number of resources with all specified tags attached cannot exceed 1,000. If the number of resources exceeds 1,000, call [ListTagResources](https://help.aliyun.com/document_detail/110425.html) to execute the query.
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
   * 
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
   * The encoding method of the `CommandContent` and `Output` fields in the response. Valid values:
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
   * Specifies whether to return the execution history of scheduled commands. Valid values:
   * 
   *  - true: Returns the execution results of scheduled commands. When this parameter is set to true, the InvokeId parameter is required and must be the execution ID of a scheduled command (RepeatMode is Period) or a command that runs at each system startup (RepeatMode is EveryReboot).
   *  - false: Does not return the execution history.
   * 
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
   * The command execution ID. You can call [DescribeInvocations](https://help.aliyun.com/document_detail/64840.html) to query the InvokeId.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * The execution status of the command. Valid values:
   * 
   * - Running: The command is running.
   *     - Scheduled execution: The execution status remains running until you manually stop the scheduled command.
   *     - One-time execution: The overall execution status is running as long as any command process is running.
   * - Finished: The command execution is complete.
   *     - Scheduled execution: The command process cannot have a status of finished.
   *     - One-time execution: All instances have completed execution, or you manually stopped the command process on some instances and the remaining instances have completed execution.
   * - Success:
   *     - One-time execution: The command execution is complete and the exit code is 0.
   *     - Scheduled execution: The last execution succeeded with an exit code of 0, and the specified execution time has ended.
   * - Failed: The command execution failed.
   *     - Scheduled execution: The command process cannot have a status of failed.
   *     - One-time execution: The command execution failed on all instances.
   * - PartialFailed: The command execution partially failed.
   *     - Scheduled execution: The command process cannot have a status of partially failed.
   *     - One-time execution: The command execution failed on some instances, so the overall execution status is partially failed.
   * - Stopped: The command execution has been stopped.
   * - Stopping: The command execution is being stopped.
   * 
   * @example
   * Running
   */
  invokeRecordStatus?: string;
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
   * > This parameter is about to go offline. Use NextToken and MaxResults to complete paging query operations.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to go offline. Use NextToken and MaxResults to complete paging query operations.
   * 
   * @example
   * 1
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
   * The resource group ID of the command execution. After you specify this parameter, the resource group ID must also be specified when you run the command. This parameter filters the corresponding command execution results.
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

