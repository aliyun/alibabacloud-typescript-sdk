// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualBorderRoutersRequestFilter } from "./DescribeVirtualBorderRoutersRequestFilter";
import { DescribeVirtualBorderRoutersRequestTags } from "./DescribeVirtualBorderRoutersRequestTags";


export class DescribeVirtualBorderRoutersRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the filter.
   */
  filter?: DescribeVirtualBorderRoutersRequestFilter[];
  /**
   * @remarks
   * Specifies whether cross-account VBRs are included.
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  includeCrossAccountVbr?: boolean;
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
   * The ID of the region in which the VBR is deployed. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeVirtualBorderRoutersRequestTags[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      includeCrossAccountVbr: 'IncludeCrossAccountVbr',
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
      filter: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersRequestFilter },
      includeCrossAccountVbr: 'boolean',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersRequestTags },
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

