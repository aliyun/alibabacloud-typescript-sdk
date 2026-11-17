// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntryRequestNextHopList extends $dara.Model {
  /**
   * @remarks
   * The ID of the next hop instance for the ECMP route.
   * 
   * @example
   * ri-2zeo3xzyf3cd8r4****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of the next hop for the ECMP route. Set the value to **RouterInterface**, which specifies a router interface.
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  /**
   * @remarks
   * The route weight of the next hop for the ECMP route.
   * 
   * @example
   * 10
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      nextHopType: 'string',
      weight: 'number',
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the custom route entry.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the custom route entry. IPv4 CIDR blocks, IPv6 CIDR blocks, destination CIDR blocks of prefix lists, and instance IDs of prefix lists are supported. The destination CIDR block must meet the following requirements:
   *           
   * - The destination CIDR block cannot point to 100.64.0.0/10 or be contained by 100.64.0.0/10.  
   *  
   * - Route entries in the same route table cannot have the same destination CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: prechecks the request without creating the route entry. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the next hop instance for the custom route entry.
   * > If you set NextHopType to ECR, you can call the [DescribeExpressConnectRouterAssociation](https://help.aliyun.com/document_detail/2712069.html) operation to obtain the AssociationId as the next hop ID.
   * > -
   * 
   * @example
   * i-j6c2fp57q8rr4jlu****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The information about the next hops.
   */
  nextHopList?: CreateRouteEntryRequestNextHopList[];
  /**
   * @remarks
   * The type of the next hop for the custom route entry. Valid values: 
   * 
   * - **Instance** (default): an ECS instance.
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
   * - **Attachment**: a forward router.
   * 
   * - **VpcPeer**: a VPC peering connection.
   * - **Ipv4Gateway**: an IPv4 gateway.
   * - **GatewayEndpoint**: a gateway endpoint.
   * - **Ecr**: an Express Connect Router (ECR).
   * - **GatewayLoadBalancerEndpoint**: a gateway load balancing endpoint (GWLBe).
   * - **RouteTargetGroup**: a routing target group.
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the route table belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the custom route entry to be added.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The ID of the route table to which you want to add the custom route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp145q7glnuzd****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      nextHopId: 'NextHopId',
      nextHopList: 'NextHopList',
      nextHopType: 'NextHopType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeEntryName: 'RouteEntryName',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      nextHopId: 'string',
      nextHopList: { 'type': 'array', 'itemType': CreateRouteEntryRequestNextHopList },
      nextHopType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeEntryName: 'string',
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

