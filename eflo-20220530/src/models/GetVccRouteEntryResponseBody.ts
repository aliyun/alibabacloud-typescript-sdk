// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVccRouteEntryResponseBodyContent extends $dara.Model {
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
   * The time when the agent was last modified.
   * 
   * @example
   * 1648085472000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Next Hop Instance
   * 
   * @example
   * local
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
   * rg-aek2l4sq6l7u***
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
   * vcc-rte-31ocvdhq
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

export class GetVccRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response parameters.
   */
  content?: GetVccRouteEntryResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * BDBCC783-84CA-5733-8EEA-645C88B9009C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetVccRouteEntryResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

