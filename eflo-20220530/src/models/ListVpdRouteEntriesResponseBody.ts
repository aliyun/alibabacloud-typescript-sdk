// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpdRouteEntriesResponseBodyContentData extends $dara.Model {
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
   * The time when the cluster was updated.
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
   * rg-acfmxhucx5ewuwy
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
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-eoiy88ju
   */
  vpdId?: string;
  /**
   * @remarks
   * The ID of the route entry.
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
      resourceTenantId: 'ResourceTenantId',
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
      resourceTenantId: 'string',
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

export class ListVpdRouteEntriesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun CIDR block route entry list
   */
  data?: ListVpdRouteEntriesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVpdRouteEntriesResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpdRouteEntriesResponseBody extends $dara.Model {
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
  content?: ListVpdRouteEntriesResponseBodyContent;
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
   * 039C3C3A-3C37-5672-80D5-D8CD48C676D1
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
      content: ListVpdRouteEntriesResponseBodyContent,
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

