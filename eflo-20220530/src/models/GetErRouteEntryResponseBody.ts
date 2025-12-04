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

export class GetErRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
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
   * The returned data.
   */
  content?: GetErRouteEntryResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is prompted.)
   * 
   * @example
   * code: 400, Request was denied due to request throttling. request id: 7D177459-C1CF-5690-BB23-321D208B37D5
   */
  message?: string;
  /**
   * @remarks
   * Request ID of the current request
   * 
   * @example
   * 1F38A2E6-CB47-5369-95D2-96D0C287B4A5
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
      content: GetErRouteEntryResponseBodyContent,
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

