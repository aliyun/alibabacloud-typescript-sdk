// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntryRequestNextHopList extends $dara.Model {
  /**
   * @remarks
   * The ID of the next hop instance of the ECMP route.
   * 
   * @example
   * ri-2zeo3xzyf3cd8r4****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of next hop of the ECMP route. Valid value: **RouterInterface** (router interface).
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  /**
   * @remarks
   * The weight of the next hop of the ECMP route.
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
   * Generate a parameter value from your client. Make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the custom route entry.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the custom route entry. IPv4 CIDR blocks, IPv6 CIDR blocks, destination CIDR blocks of prefix lists, and instance IDs of prefix lists are supported. The following requirements must be met:
   *           
   * - The destination CIDR block cannot point to or be contained by 100.64.0.0/10.  
   *  
   * - The destination CIDR blocks of different route entries in the same route table must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run. The system checks the required parameters, request format, and business restrictions. If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request, passes the dry run, and returns an HTTP 2xx status code. The route is directly created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the next hop instance of the custom route entry.
   * > If you set NextHopType to ECR, you can call the [DescribeExpressConnectRouterAssociation](https://help.aliyun.com/document_detail/2712069.html) operation to obtain the AssociationId as the next hop ID.
   * > -.
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
   * The type of next hop of the custom route entry. Valid values: 
   * 
   * - **Instance** (default): ECS instance.
   * 
   * - **HaVip**: high-availability virtual IP address.  
   * 
   * - **RouterInterface**: vRouter interface.
   * 
   * - **NetworkInterface**: network interface controller (NIC).
   * 
   * - **VpnGateway**: VPN gateway.
   * 
   * - **IPv6Gateway**: IPv6 gateway.
   * 
   * - **NatGateway**: NAT gateway.
   * 
   * - **Attachment**: transit router.
   * 
   * - **VpcPeer**: VPC peering connection.
   * - **Ipv4Gateway**: IPv4 gateway.
   * - **GatewayEndpoint**: gateway endpoint.
   * - **Ecr**: Express Connect Router (ECR).
   * - **GatewayLoadBalancerEndpoint**: Gateway Load Balancer endpoint (GWLBe).
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the route table.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the custom route entry to add.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
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

