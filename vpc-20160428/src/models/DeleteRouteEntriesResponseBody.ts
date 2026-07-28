// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteEntriesResponseBodyFailedRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route entry that failed to be deleted. IPv4 CIDR blocks, IPv6 CIDR blocks, and prefix list CIDR blocks are supported.
   * 
   * @example
   * 47.100.XX.XX/24
   */
  dstCidrBlock?: string;
  /**
   * @remarks
   * The error code returned for the failure.
   * 
   * @example
   * VPC_ROUTER_ENTRY_NOT_EXIST
   */
  failedCode?: string;
  /**
   * @remarks
   * The error message returned for the failure.
   * 
   * @example
   * vRouterEntry not exists
   */
  failedMessage?: string;
  /**
   * @remarks
   * The instance ID of the next hop that failed to be deleted.
   * 
   * @example
   * i-j6c2fp57q8rr4jlu****
   */
  nextHop?: string;
  /**
   * @remarks
   * The ID of the route entry that failed to be deleted.
   * 
   * @example
   * rte-bp1mnnr2al0naomnpv****
   */
  routeEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidrBlock: 'DstCidrBlock',
      failedCode: 'FailedCode',
      failedMessage: 'FailedMessage',
      nextHop: 'NextHop',
      routeEntryId: 'RouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidrBlock: 'string',
      failedCode: 'string',
      failedMessage: 'string',
      nextHop: 'string',
      routeEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of route entries that failed to be deleted.
   * 
   * @example
   * 2
   */
  failedCount?: number;
  /**
   * @remarks
   * The information about the route entries that failed to be deleted.
   */
  failedRouteEntries?: DeleteRouteEntriesResponseBodyFailedRouteEntries[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of route entries that were successfully deleted.
   * 
   * @example
   * 2
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      failedRouteEntries: 'FailedRouteEntries',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      failedRouteEntries: { 'type': 'array', 'itemType': DeleteRouteEntriesResponseBodyFailedRouteEntries },
      requestId: 'string',
      successCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedRouteEntries)) {
      $dara.Model.validateArray(this.failedRouteEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

