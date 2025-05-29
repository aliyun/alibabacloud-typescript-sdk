// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenBandwidthPackagesRequestFilter } from "./DescribeCenBandwidthPackagesRequestFilter";
import { DescribeCenBandwidthPackagesRequestTag } from "./DescribeCenBandwidthPackagesRequestTag";


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

