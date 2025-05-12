// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListErRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR Block
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
   * Lingjun HUB ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
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
   * Network Instance ID
   * 
   * @example
   * vcc-cn-209300qha01
   */
  instanceId?: string;
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
   * rg-acfmyuzlx2iihcy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * VCC
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
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      enablePage: 'EnablePage',
      erId: 'ErId',
      ignoreDetailedRouteEntry: 'IgnoreDetailedRouteEntry',
      instanceId: 'InstanceId',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeType: 'RouteType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      enablePage: 'boolean',
      erId: 'string',
      ignoreDetailedRouteEntry: 'boolean',
      instanceId: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      routeType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

