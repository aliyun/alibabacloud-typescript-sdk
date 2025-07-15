// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntriesResponseBodyFailedRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the custom route entry that failed to be added.
   * 
   * @example
   * 192.168.0.0/24
   */
  dstCidrBlock?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * VPC_ROUTE_ENTRY_CIDR_BLOCK_DUPLICATE
   */
  failedCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Specified CIDR block is already exists, entry.cidrBlock=xxxx
   */
  failedMessage?: string;
  /**
   * @remarks
   * The ID of the next hop of the custom route entry that failed to be added.
   * 
   * @example
   * i-j6c2fp57q8rr4jlu****
   */
  nextHop?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidrBlock: 'DstCidrBlock',
      failedCode: 'FailedCode',
      failedMessage: 'FailedMessage',
      nextHop: 'NextHop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidrBlock: 'string',
      failedCode: 'string',
      failedMessage: 'string',
      nextHop: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of custom route entries that failed to be added.
   * 
   * @example
   * 2
   */
  failedCount?: number;
  /**
   * @remarks
   * The details about the custom route entry that failed to be added.
   */
  failedRouteEntries?: CreateRouteEntriesResponseBodyFailedRouteEntries[];
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
   * The information about the ID of the custom route entry that was successfully added.
   */
  routeEntryIds?: string[];
  /**
   * @remarks
   * The number of custom route entries that were successfully added.
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
      routeEntryIds: 'RouteEntryIds',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      failedRouteEntries: { 'type': 'array', 'itemType': CreateRouteEntriesResponseBodyFailedRouteEntries },
      requestId: 'string',
      routeEntryIds: { 'type': 'array', 'itemType': 'string' },
      successCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedRouteEntries)) {
      $dara.Model.validateArray(this.failedRouteEntries);
    }
    if(Array.isArray(this.routeEntryIds)) {
      $dara.Model.validateArray(this.routeEntryIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

