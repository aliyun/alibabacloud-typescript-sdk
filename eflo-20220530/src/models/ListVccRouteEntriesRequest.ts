// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVccRouteEntriesRequest extends $dara.Model {
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
   * Specifies whether to enable pagination query.
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
   * vcc-cn-jaj34d75h01
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
   * The number of entries to return on each page. Default value: 20.
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
   * rg-aek2l4sq6l7unhi
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
   * The ID of the Lingjun connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * Lingjun CIDR block route entry instance ID
   * 
   * @example
   * vpd-rte-toekyqel
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
      vccId: 'VccId',
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
      vccId: 'string',
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

