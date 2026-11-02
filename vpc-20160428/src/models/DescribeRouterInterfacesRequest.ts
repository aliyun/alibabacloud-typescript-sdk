// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouterInterfacesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key. You can specify up to five filter keys. The following filter keys are supported:
   * 
   * - **RouterInterfaceId**: The ID of the router interface.
   * 
   * - **RouterId**: The ID of the router.
   * 
   * - **RouterType**: The type of the router. Valid values: **VRouter** and **VBR**.
   * 
   * - **RouterInterfaceOwnerId**: The ID of the Alibaba Cloud account to which the router interface belongs.
   * 
   * - **OppositeInterfaceId**: The ID of the peer router interface.
   * 
   * - **OppositeRouterType**: The type of the peer router. Valid values: **VRouter** and **VBR**.
   * 
   * - **OppositeRouterId**: The ID of the peer router.
   * 
   * - **OppositeInterfaceOwnerId**: The ID of the Alibaba Cloud account to which the peer router interface belongs.
   * 
   * - **Status**: The status of the router interface.
   * 
   * - **Name**: The name of the router interface.
   * 
   * > Multiple values for a filter key are evaluated by using the OR operator. A resource matches the filter condition if it matches one of the values. Multiple filter keys are evaluated by using the AND operator. A resource is returned in the query result only if it matches all the specified filter conditions.
   * 
   * @example
   * Filter.1.Status
   */
  key?: string;
  /**
   * @remarks
   * The filter value specified for the filter key. You can specify multiple filter values for a filter key. Multiple filter values are evaluated by using the OR operator. A resource matches the filter condition if it matches one of the filter values.
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
   * The tag key of the resource. You must specify at least one tag key and can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * A tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * The filter conditions.
   */
  filter?: DescribeRouterInterfacesRequestFilter[];
  /**
   * @remarks
   * Specifies whether to include renewal data. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false** (default): No.
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
   * The number of entries per page in a paging query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the router interface.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
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

