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
   * The destination CIDR block of the custom route entry. The destination CIDR block must meet the following requirements:
   * - The destination CIDR block cannot point to or be included in 100.64.0.0/10.
   * - The destination CIDR blocks of different route entries in the same route table must be unique.
   * - 0.0.0.0/0 specifies the default route.
   * 
   * This parameter is required.
   * 
   * @example
   * 120.XXX.XXX.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the next hop for the custom route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5vb7leks9z4mxy1ay258
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of the next hop for the custom route entry. Valid values:
   * - Instance: ENS instance. This is the default value.
   * - HaVip: HaVip.
   * - NetworkPeer: network peering connection.
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The name of the custom route entry. The name must be 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The ID of the route table for which you want to create a custom route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp1cifr72dioje82lse2j
   */
  routeTableId?: string;
  /**
   * @remarks
   * The source CIDR block. This parameter is available when you configure a route entry for a gateway route table, but is not supported when you configure a route entry for a vSwitch route table.
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

