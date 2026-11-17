// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the route entry.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * EntryDescription
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry. Both IPv4 CIDR blocks and IPv6 CIDR blocks are supported.
   * > If the **RouteEntryId** parameter is not specified, the **DestinationCidrBlock** and **RouteTableId** parameters are required.
   * > To change the destination CIDR block of the routing entry to a **prefix list**, you must specify the **RouteEntryId** parameter. The **DestinationCidrBlock** parameter does not support prefix list CIDR blocks or prefix list instance IDs.
   * 
   * @example
   * 192.168.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * **true**: performs a dry run and does not modify the routing entry. The system checks whether your AccessKey pair is valid, whether the Resource Access Management (RAM) user is authorized, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * **false** (default): sends a normal request. If the request passes the dry run, a 2xx HTTP status code is returned and the routing entry is modified.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the next hop for the new routing entry.
   * 
   * @example
   * eni-bp17y37ytsenqyim****
   */
  newNextHopId?: string;
  /**
   * @remarks
   * The new next hop type of the routing entry. Valid values:
   * 
   * - **Instance**: an ECS instance.
   * 
   * - **HaVip**: a high-availability virtual IP address.  
   * 
   * - **RouterInterface**: a vRouter interface.
   * 
   * - **NetworkInterface**: an elastic network interface controller (NIC).
   * 
   * - **VpnGateway**: a VPN gateway.
   * 
   * - **IPv6Gateway**: an IPv6 gateway.
   * 
   * - **NatGateway**: a NAT gateway.
   * 
   * - **Attachment**: a transit router (TR).
   * 
   * - **VpcPeer**: a VPC peering connection.
   * - **Ipv4Gateway**: an IPv4 gateway.
   * - **GatewayEndpoint**: a gateway endpoint.
   * - **Ecr**: an Express Connect Router (ECR).
   * - **GatewayLoadBalancerEndpoint**: a Gateway Load Balancer endpoint (GWLBe).
   * - **RouteTargetGroup**: a routing target group.
   * 
   * @example
   * NetworkInterface
   */
  newNextHopType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the route entry.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the custom route entry.
   * 
   * @example
   * rte-acfvgfsghfdd****
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The name of the route entry.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * EntryName
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-bp1nk7zk65du3pni8z9td
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      newNextHopId: 'NewNextHopId',
      newNextHopType: 'NewNextHopType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeEntryId: 'RouteEntryId',
      routeEntryName: 'RouteEntryName',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      newNextHopId: 'string',
      newNextHopType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeEntryId: 'string',
      routeEntryName: 'string',
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

