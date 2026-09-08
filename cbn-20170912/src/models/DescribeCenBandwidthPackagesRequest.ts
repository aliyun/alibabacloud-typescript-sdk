// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenBandwidthPackagesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition.
   * You can use filter conditions to filter the bandwidth package instances to query. The following filter conditions are supported:
   * 
   * - **CenId**: The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * - **Status**: The status of the bandwidth package instance. Valid values:
   * 
   *     - **Idle**: Not associated.
   *     - **InUse**: Associated.
   * 
   * - **CenBandwidthPackageId**: The ID of the bandwidth package.
   * 
   * - **Name**: The name of the bandwidth package.
   * You can specify one or more filter conditions. The maximum value of **N** is **5**.
   * 
   * @example
   * CenId
   */
  key?: string;
  /**
   * @remarks
   * The filter values based on the specified **Key**. You can specify multiple filter values for a single **Key**. The filter values have an **OR** relationship, which means that a bandwidth package matching any of the filter values is considered a match for the filter condition.
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
   * The tag key of the resource.
   * 
   * Once specified, the tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * The tag value can be empty or a string of up to 128 characters. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
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
   * The filter information.
   */
  filter?: DescribeCenBandwidthPackagesRequestFilter[];
  /**
   * @remarks
   * Specifies whether to include renewal data. Valid values:
   * 
   * - **true**: Includes renewal data.
   * 
   * - **false**: Does not include renewal data.
   * 
   * @example
   * true
   */
  includeReservationData?: boolean;
  /**
   * @remarks
   * The logical relationship between filter conditions. Valid values:
   * 
   * - **false** (default): The filter conditions have an **AND** relationship. A bandwidth package must match all filter conditions to be returned.
   * 
   * - **true**: The filter conditions have an **OR** relationship. A bandwidth package that matches any filter condition is returned.
   * 
   * @example
   * false
   */
  isOrKey?: boolean;
  ownerAccount?: string;
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
   * The number of entries per page for a paged query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfnwjeo4tv****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag information list.
   * 
   * You can specify up to 20 tags at a time.
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

