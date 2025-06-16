// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteEntriesRequestRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route that you want to delete. IPv4 and IPv6 CIDR blocks are supported. You can specify up to 50 destination CIDR blocks.
   * 
   * >  If **RouteEntryId** is not specified, **DstCidrBlock** and **NextHop** are required.
   * 
   * @example
   * 47.100.XX.XX/24
   */
  dstCidrBlock?: string;
  /**
   * @remarks
   * The ID of the next hop that you want to delete. You can specify up to 50 next hop IDs.
   * 
   * >  If **RouteEntryId** is not specified, **DstCidrBlock** and **NextHop** are required.
   * 
   * @example
   * i-j6c2fp57q8rr4jlu****
   */
  nextHop?: string;
  /**
   * @remarks
   * The ID of the route that you want to delete. You can specify up to 50 route IDs.
   * 
   * >  If **RouteEntryId** is not specified, **DstCidrBlock** and **NextHop** are required.
   * 
   * @example
   * rte-bp1mnnr2al0naomnpv****
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The ID of the route table to which the routes to be deleted belongs. You can specify up to 50 route table IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-2ze3jgygk9bmsj23s****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidrBlock: 'DstCidrBlock',
      nextHop: 'NextHop',
      routeEntryId: 'RouteEntryId',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidrBlock: 'string',
      nextHop: 'string',
      routeEntryId: 'string',
      routeTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

