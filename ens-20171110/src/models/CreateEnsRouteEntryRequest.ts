// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnsRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the custom route entry.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the custom route entry. Make sure that the following requirements are met:
   * 
   * *   The destination CIDR block cannot point or belong to 100.64.0.0/10.
   * *   The destination CIDR blocks of the custom route entries in the same route table cannot overlap.
   * *   0.0.0.0/0 indicates the default CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the next hop of the custom route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5vb7leks9z4mxy1ay258
   */
  nextHopId?: string;
  /**
   * @remarks
   * The next hop type of the custom route. Valid values:
   * 
   * *   Instance: an ENS instance.
   * *   HaVip: a high-availability virtual IP address (HAVIP).
   * *   NetworkPeer: VPC peering connection.
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The name of the custom route entry that you want to add. The name must be 1 to 128 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The ID of the route table to which you want to add a custom route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp1cifr72dioje82lse2j
   */
  routeTableId?: string;
  /**
   * @remarks
   * The source CIDR block is available when you configure a route entry in the gateway route table, but is not unavailable when you configure a route entry in the vSwitch route table.
   * 
   * @example
   * 172.XXX.XXX.0/24
   */
  sourceCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      routeEntryName: 'RouteEntryName',
      routeTableId: 'RouteTableId',
      sourceCidrBlock: 'SourceCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      routeEntryName: 'string',
      routeTableId: 'string',
      sourceCidrBlock: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

