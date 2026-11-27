// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the route entry.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * EntryDescription
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the route. IPv4 CIDR blocks and IPv6 CIDR blocks are supported.
   * > If the **RouteEntryId** parameter is not specified, the **DestinationCidrBlock** and **RouteTableId** parameters are required.
   * > To change the destination CIDR block of the route to a **prefix list**, you must specify the **RouteEntryId** parameter. The **DestinationCidrBlock** parameter does not support prefix list CIDR blocks or prefix list instance IDs.
   * 
   * @example
   * 192.168.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request. Valid values:
   * 
   * **true**: The system performs a dry run and does not send the request to modify the route. The system checks whether your AccessKey pair is valid, whether the Resource Access Management (RAM) user has the required authorization, and whether the required parameters are specified. If the dry run fails, the corresponding error code is returned. If the dry run succeeds, the `DryRunOperation` error code is returned.
   * 
   * **false** (default): The system sends a normal request. If the request passes the check, a 2xx HTTP status code is returned and the route is directly modified.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the next hop for the new route.
   * 
   * @example
   * eni-bp17y37ytsenqyim****
   */
  newNextHopId?: string;
  /**
   * @remarks
   * The new next hop type of the route. Valid values:
   * 
   * - **Instance**: ECS instance.
   * 
   * - **HaVip**: high-availability virtual IP address.  
   * 
   * - **RouterInterface**: vRouter interface.
   * 
   * - **NetworkInterface**: elastic network interfaces (ENIs) network interface controller (NIC).
   * 
   * - **VpnGateway**: VPN gateway.
   * 
   * - **IPv6Gateway**: IPv6 gateway.
   * 
   * - **NatGateway**: NAT gateway.
   * 
   * - **Attachment**: forward router.
   * 
   * - **VpcPeer**: VPC peering connection.
   * - **Ipv4Gateway**: IPv4 gateway.
   * - **GatewayEndpoint**: gateway endpoint.
   * - **Ecr**: Express Connect Router (ECR).
   * - **GatewayLoadBalancerEndpoint**: Gateway Load Balancer endpoint (GWLBe).
   * - **RouteTargetGroup**: routing target group.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
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
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
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

