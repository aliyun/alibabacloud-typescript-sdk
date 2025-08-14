// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenBandwidthPackagesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. You can use filter conditions to filter the bandwidth plans that you want to query. The following filter conditions are supported:
   * 
   * *   **CenId**: CEN instance ID
   * 
   * *   **Status**: bandwidth plan status. Valid values:
   * 
   *     *   **Idle**: not associated with a CEN instance.
   *     *   **InUse**: associated with a CEN instance.
   * 
   * *   **CenBandwidthPackageId**: bandwidth plan ID
   * 
   * *   **Name**: bandwidth plan name You can specify one or more filter conditions. The maximum value of **N** is **5**.
   * 
   * @example
   * CenId
   */
  key?: string;
  /**
   * @remarks
   * Specify a filter value based on the **Key** parameter. You can specify multiple filter values for each **Key**. The logical operator between filter values is **OR**. If one filter value is matched, the filter condition is matched.
   * 
   * @example
   * Idle
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

export class DescribeCenBandwidthPackagesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag keys.
   * 
   * The tag keys cannot be an empty string. The tag keys can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can specify at most 20 tag keys.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag values.
   * 
   * The tag values can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * The tag value of each tag key must be unique. You can specify at most 20 tag values in each call.
   * 
   * @example
   * TagValue
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

export class DescribeCenBandwidthPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter configurations.
   */
  filter?: DescribeCenBandwidthPackagesRequestFilter[];
  /**
   * @remarks
   * Specifies whether to include renewal data. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  includeReservationData?: boolean;
  /**
   * @remarks
   * The logical operator between the filter conditions. Valid values:
   * 
   * *   **false** (default): **AND** Bandwidth plans that meet all filter conditions are returned.
   * *   **true**: **OR** Bandwidth plans that meet one of the filter conditions are returned.
   * 
   * @example
   * false
   */
  isOrKey?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfnwjeo4tv****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The information about the tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: DescribeCenBandwidthPackagesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      includeReservationData: 'IncludeReservationData',
      isOrKey: 'IsOrKey',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesRequestFilter },
      includeReservationData: 'boolean',
      isOrKey: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeCenBandwidthPackagesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
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

