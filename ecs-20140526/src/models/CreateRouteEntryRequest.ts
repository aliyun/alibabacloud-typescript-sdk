// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntryRequestNextHopList extends $dara.Model {
  /**
   * @remarks
   * The ID of the next hop in the ECMP route.
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of the next hop in the ECMP route. Valid values:
   * 
   * - **Instance**: an ECS instance.
   * 
   * - **HaVip**: a high-availability virtual IP address.
   * 
   * - **RouterInterface**: a router interface.
   * 
   * - **NetworkInterface**: an elastic network interface.
   * 
   * - **VpnGateway**: a VPN gateway.
   * 
   * - **Ipv6Gateway**: an IPv6 gateway.
   * 
   * - **NatGateway**: a NAT gateway.
   */
  nextHopType?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      nextHopType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * A unique, case-sensitive identifier to ensure request idempotency. The token must be 1 to 64 ASCII characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The destination CIDR block. The value must be a valid CIDR block. Set the value to `0.0.0.0/0` to create a default route.
   * 
   * This parameter is required.
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * **Note** Specify either `NextHopId` or `NextHopList`, but not both.
   */
  nextHopId?: string;
  /**
   * @remarks
   * The list of next hops for an ECMP route.
   * 
   * **Note** Specify either `NextHopId` or `NextHopList`, but not both.
   */
  nextHopList?: CreateRouteEntryRequestNextHopList[];
  /**
   * @remarks
   * The type of the next hop. Valid values:
   * 
   * - **Instance**: an ECS instance.
   * 
   * - **HaVip**: a high-availability virtual IP address.
   * 
   * - **RouterInterface**: a router interface.
   * 
   * - **NetworkInterface**: an elastic network interface.
   * 
   * - **VpnGateway**: a VPN gateway.
   * 
   * - **Ipv6Gateway**: an IPv6 gateway.
   * 
   * - **NatGateway**: a NAT gateway.
   * 
   * **Note** This parameter is required if you specify `NextHopId`.
   */
  nextHopType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](~~docid:36063~~) operation to get the latest list of regions.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * This parameter is required.
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      nextHopList: 'NextHopList',
      nextHopType: 'NextHopType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      nextHopList: { 'type': 'array', 'itemType': CreateRouteEntryRequestNextHopList },
      nextHopType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nextHopList)) {
      $dara.Model.validateArray(this.nextHopList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

