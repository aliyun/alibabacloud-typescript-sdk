// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRouteEntryListRequest extends $dara.Model {
  /**
   * @remarks
   * The destination Classless Inter-Domain Routing (CIDR) block of the route entry.
   * 
   * @example
   * 11.0.0.0/16
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * @example
   * i-2zecshuv3axtr2gc4noa
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of next hop of the custom route entry. Valid values:
   * 
   * *   Instance (default): an ENS instance.
   * *   HaVip: a high-availability virtual IP address (HAVIP).
   * *   NetworkPeer: VPC peering connection.
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The page number of the returned page. Valid values: integers that are greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the route that you want to query.
   * 
   * @example
   * rte-8vbdw66evgv44u2u7v3hx
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * test0
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   Custom: custom route
   * *   System: system route
   * 
   * @example
   * Custom
   */
  routeEntryType?: string;
  /**
   * @remarks
   * The ID of the route table that you want to query.
   * 
   * @example
   * vtb-hp3wdhynneo7fsclox8hs
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      routeEntryId: 'RouteEntryId',
      routeEntryName: 'RouteEntryName',
      routeEntryType: 'RouteEntryType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      routeEntryId: 'string',
      routeEntryName: 'string',
      routeEntryType: 'string',
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

