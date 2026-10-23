// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVscsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command. Valid values of N: 1 to 20. If you specify this parameter, it cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count returned cannot exceed 1,000. If you use multiple tags to filter resources, the resource count of resources to which you attach multiple tags at the same time cannot exceed 1,000. If the resource count exceeds 1,000, you must call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * Environment
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20. If you specify this parameter, it can be an empty string. The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class DescribeVscsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID to which the cloud disk or local disk is attached.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 10 to 500. Default value: 10. If you do not specify this parameter or specify a value less than 10, the default value is 10. If you specify a value greater than 500, the default value is 500.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token returned for the current request.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The ID of the resource group to which the instance belongs. When you use this parameter to filter resources, the resource count cannot exceed 1,000. Note: Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the VSCs to be queried. If you do not specify this parameter, VSCs in all states are returned. Valid values:
   * 
   * - In_use: In use.
   * - Attaching: Attaching.
   * - Detaching: Detaching.
   * - AttachFailed: Attachment failed.
   * - DetachFailed: Detachment failed.
   * - All (default): All states.
   * 
   * Default value: All.
   * 
   * @example
   * Successful
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeVscsRequestTag[];
  /**
   * @remarks
   * The IDs of the VSCs to be queried.
   * 
   * We recommend that you specify no more than 100 VSC IDs.
   */
  vscIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      vscIds: 'VscIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVscsRequestTag },
      vscIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.vscIds)) {
      $dara.Model.validateArray(this.vscIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

