// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortRangeListsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the resource count with this tag cannot exceed 1000. If you use multiple tags to filter resources, the resource count of resources that have all specified tags attached cannot exceed 1000. If the resource count exceeds 1000, call [ListTagResources](https://help.aliyun.com/document_detail/110425.html) to query resources.
   * 
   * @example
   * key for PortRangeList
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value for PortRangeList
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

export class DescribePortRangeListsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * - Maximum value: 100.
   * 
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * 727d41872117f2816343eeb432fbc5bfd21dc824589d2a4be0b5e8707e68181f
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the port range list. Valid values of N: 0 to 100.
   */
  portRangeListId?: string[];
  /**
   * @remarks
   * The name of the port range list. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. The name cannot start with http://, https://, com.aliyun, or com.alibabacloud. The name can contain letters, Chinese characters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * PortRangeListNameSample
   */
  portRangeListName?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/2679950.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. When you use this parameter to filter resources, the resource count cannot exceed 1000. You can invoke [ListResourceGroups](https://help.aliyun.com/document_detail/2716558.html) to query the list of resource groups.
   * 
   * >Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags bound to the port range list.
   */
  tag?: DescribePortRangeListsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portRangeListId: 'PortRangeListId',
      portRangeListName: 'PortRangeListName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      portRangeListId: { 'type': 'array', 'itemType': 'string' },
      portRangeListName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribePortRangeListsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.portRangeListId)) {
      $dara.Model.validateArray(this.portRangeListId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

