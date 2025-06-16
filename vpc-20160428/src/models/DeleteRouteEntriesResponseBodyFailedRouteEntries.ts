// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteEntriesResponseBodyFailedRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route entry that failed to be deleted. IPv4 and IPv6 CIDR blocks are supported.
   * 
   * @example
   * 47.100.XX.XX/24
   */
  dstCidrBlock?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * VPC_ROUTER_ENTRY_NOT_EXIST
   */
  failedCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * vRouterEntry not exists
   */
  failedMessage?: string;
  /**
   * @remarks
   * The ID of the next hop that failed to be deleted.
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

