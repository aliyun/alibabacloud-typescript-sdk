// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpdRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to enable paged query. Optional values:
   * 
   * *   **true**: Enable pagination query
   * *   **false**: Pagination query is disabled
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Filter 32 detailed CIDR blocks. Default value: true
   * 
   * @example
   * true
   */
  ignoreDetailedRouteEntry?: boolean;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * vcc-cn-209300qha01
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Instance Type
   * 
   * @example
   * VCC
   */
  nextHopType?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfm4mlwqjalz7a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * BGP
   */
  routeType?: string;
  /**
   * @remarks
   * The status of the enterprise-level snapshot policy.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-fuliephf
   */
  vpdId?: string;
  /**
   * @remarks
   * Lingjun CIDR block route entry instance ID
   * 
   * @example
   * vpd-rte-4r1zbhoh
   */
  vpdRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      enablePage: 'EnablePage',
      ignoreDetailedRouteEntry: 'IgnoreDetailedRouteEntry',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeType: 'RouteType',
      status: 'Status',
      vpdId: 'VpdId',
      vpdRouteEntryId: 'VpdRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      enablePage: 'boolean',
      ignoreDetailedRouteEntry: 'boolean',
      nextHopId: 'string',
      nextHopType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      routeType: 'string',
      status: 'string',
      vpdId: 'string',
      vpdRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

