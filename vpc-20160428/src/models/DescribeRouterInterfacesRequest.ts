// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouterInterfacesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. You can specify up to 5 filter conditions. The following filter conditions are supported:
   * 
   * - **RouterInterfaceId**: the router interface ID.
   * 
   * - **RouterId**: the router ID.
   * 
   * - **RouterType**: the router type. Valid values: **VRouter** and **VBR**.
   * 
   * - **RouterInterfaceOwnerId**: the ID of the account that owns the router interface.
   * 
   * - **OppositeInterfaceId**: the peer router interface ID.
   * 
   * - **OppositeRouterType**: the peer router interface type. Valid values: **VRouter** and **VBR**.
   * 
   * - **OppositeRouterId**: the peer router interface ID.
   * 
   * - **OppositeInterfaceOwnerId**: the ID of the account that owns the peer router interface.
   * 
   * - **Status**: the router interface status.
   * 
   * - **Name**: the router interface name.
   * 
   * > Multiple values for a filter condition are evaluated by using the OR operator. A result is returned if any of the values match. Filter conditions are evaluated by using the AND operator. A result is returned only if all filter conditions are matched.
   * 
   * @example
   * Filter.1.Status
   */
  key?: string;
  /**
   * @remarks
   * The filter value based on the specified Key. You can specify multiple filter values for a Key. Multiple filter values are evaluated by using the OR operator. A result is returned if any of the filter values match.
   * 
   * @example
   * Filter.1.Active 1
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

export class DescribeRouterInterfacesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You must specify at least 1 tag key and can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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

export class DescribeRouterInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter information.
   */
  filter?: DescribeRouterInterfacesRequestFilter[];
  /**
   * @remarks
   * Specifies whether to include renewal data. Valid values:
   * 
   * - **true**
   * 
   * - **false** (default)
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
   * The number of entries per page for paging queries. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the router interface.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/2381067.html).
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

