// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouterInterfacesRequestFilter } from "./DescribeRouterInterfacesRequestFilter";
import { DescribeRouterInterfacesRequestTags } from "./DescribeRouterInterfacesRequestTags";


export class DescribeRouterInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter information.
   */
  filter?: DescribeRouterInterfacesRequestFilter[];
  /**
   * @remarks
   * Specifies whether renewal data is included. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the router interface.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource Group ID.
   * 
   * For more information about resource groups, please refer to [What is a Resource Group?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: DescribeRouterInterfacesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      includeReservationData: 'IncludeReservationData',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeRouterInterfacesRequestFilter },
      includeReservationData: 'boolean',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': DescribeRouterInterfacesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

