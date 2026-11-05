// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSendFileResultsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the file sending task. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count of resources under the tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources that you attach multiple tags to cannot exceed 1,000. If the resource count exceeds 1,000, you must use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the file sending task. Valid values of N: 1 to 20. The tag value can be an empty string.
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

export class DescribeSendFileResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. If you specify this parameter, all file sending records of the instance are queried.
   * 
   * @example
   * i-hz0jdfwd9f****
   */
  instanceId?: string;
  /**
   * @remarks
   * The overall sending status of the file. The overall status depends on the execution status on all instances involved in the sending task. Valid values:
   * 
   * - Pending: The system is verifying or sending the file. If the file sending status on at least one instance is Pending, the overall execution status is Pending.
   * - Running: The file is being sent to the instances. If the file sending status on at least one instance is Running, the overall execution status is Running.
   * - Success: The file is sent. If the file sending status on all instances is Success, the overall execution status is Success.
   * - Failed: The file fails to be sent. If the file sending status on all instances is Failed, the overall execution status is Failed.
   * - PartialFailed: The file is sent to some instances but fails to be sent to others. If the file sending status on all instances is either Success or Failed, the overall execution status is PartialFailed.
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
   * f-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page during paging in a paged query.
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
   * The name of the file. If you specify this parameter, all sending records of the file with the specified name are queried.
   * 
   * @example
   * test.txt
   */
  name?: string;
  /**
   * @remarks
   * The query token. The value is the NextToken value returned from the previous API call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter will be offline soon. We recommend that you use NextToken and MaxResults for paging in a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will be offline soon. We recommend that you use NextToken and MaxResults for paging in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the ECS instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the file sending task belongs. If you specify this parameter, you must also specify ResourceGroupId when you send the file. This allows you to filter the file sending results.
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
  tag?: DescribeSendFileResultsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      maxResults: 'MaxResults',
      name: 'Name',
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
      instanceId: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeSendFileResultsRequestTag },
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

