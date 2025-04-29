// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortRangeListsRequestTag } from "./DescribePortRangeListsRequestTag";


export class DescribePortRangeListsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Valid values: 1 to 100.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * 727d41872117f2816343eeb432fbc5bfd21dc824589d2a4be0b5e8707e68181f
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the port list. Valid values of N: 0 to 100.
   */
  portRangeListId?: string[];
  /**
   * @remarks
   * The name of the port list. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * PortRangeListNameSample
   */
  portRangeListName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2679950.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If you specify this parameter to query resources, up to 1,000 resources that belong to the specified resource group can be returned in the response. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/2716558.html) operation to query the most recent resource group list.
   * 
   * >  A default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that are added to the port list.
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

