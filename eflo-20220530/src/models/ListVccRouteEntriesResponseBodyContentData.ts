// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVccRouteEntriesResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 10.192.32.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 1642745758000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Type
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
   * The ID of the tenant to which the resource belongs.
   * 
   * @example
   * 1655449505171
   */
  resourceTenantId?: string;
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
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * vcc-rte-maysfadg
   */
  vccRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      gmtModified: 'GmtModified',
      message: 'Message',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceTenantId: 'ResourceTenantId',
      routeType: 'RouteType',
      status: 'Status',
      tenantId: 'TenantId',
      vccId: 'VccId',
      vccRouteEntryId: 'VccRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      gmtModified: 'string',
      message: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceTenantId: 'string',
      routeType: 'string',
      status: 'string',
      tenantId: 'string',
      vccId: 'string',
      vccRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

