// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpdRouteEntryResponseBodyContent extends $dara.Model {
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
   * The time when the agent was last modified.
   * 
   * @example
   * 1678273219000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * er-bmlqiym1
   */
  nextHopId?: string;
  /**
   * @remarks
   * Next Hop Instance Type
   * 
   * @example
   * ER
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
   * rg-acfmv7mcq63uyhq
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
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-ze3na0wf
   */
  vpdId?: string;
  /**
   * @remarks
   * Lingjun CIDR block route entry ID
   * 
   * @example
   * vpd-rte-toekyqel
   */
  vpdRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      gmtModified: 'GmtModified',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeType: 'RouteType',
      status: 'Status',
      tenantId: 'TenantId',
      vpdId: 'VpdId',
      vpdRouteEntryId: 'VpdRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      gmtModified: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeType: 'string',
      status: 'string',
      tenantId: 'string',
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

