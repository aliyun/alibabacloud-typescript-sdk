// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErRouteEntryResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 11.0.0.0/16
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB Instance ID
   * 
   * @example
   * er-aueyxxsy
   */
  erId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * er-rte-4q0jbylz
   */
  erRouteEntryId?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1666677783000
   */
  gmtModified?: string;
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzb3n5lgk2ieq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Route type
   * 
   * @example
   * System
   */
  routeType?: string;
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      erRouteEntryId: 'ErRouteEntryId',
      gmtModified: 'GmtModified',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeType: 'RouteType',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      erId: 'string',
      erRouteEntryId: 'string',
      gmtModified: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeType: 'string',
      status: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

