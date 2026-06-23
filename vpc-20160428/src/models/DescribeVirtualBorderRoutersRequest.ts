// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. You can specify up to 5 filter conditions. The following filter conditions are supported:
   * 
   * * **PhysicalConnectionId**: instance ID of the Express Connect circuit instance.
   * 
   * * **VbrId**: instance ID of the Virtual Border Router instance.
   * 
   * * **Status**: the status of the Virtual Border Router.
   * 
   * * **Name**: the name of the Virtual Border Router.
   * 
   * * **AccessPointId**: instance ID of the access point.
   * 
   * * **eccId**: instance ID of the Express Cloud Connect instance.
   * 
   * * **type**: the type of the Express Connect circuit.
   * 
   * @example
   * Status
   */
  key?: string;
  /**
   * @remarks
   * The filter value based on the specified Key. You can specify multiple filter values for a Key. The relationship between filter values is OR, which means that a match is found if any of the filter values is met.
   * 
   * @example
   * Active
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You must specify at least 1 tag key and can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
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

export class DescribeVirtualBorderRoutersRequest extends $dara.Model {
  /**
   * @remarks
   * The filter information.
   */
  filter?: DescribeVirtualBorderRoutersRequestFilter[];
  /**
   * @remarks
   * Specifies whether to include cross-account Virtual Border Routers.
   * 
   * - **true**: Included.
   * 
   * - **false** (default): Not included.
   * 
   * @example
   * false
   */
  includeCrossAccountVbr?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the VBR. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/94475.html).
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

