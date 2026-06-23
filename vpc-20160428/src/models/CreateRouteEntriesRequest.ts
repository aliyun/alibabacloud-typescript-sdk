// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntriesRequestRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the custom route. You can specify up to 50 descriptions.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the custom route. Both IPv4 and IPv6 CIDR blocks are supported. You can specify up to 50 destination CIDR blocks. The destination CIDR blocks must meet the following requirements:
   * 
   * - The destination CIDR block cannot point to 100.64.0.0/10 or be a subset of 100.64.0.0/10.
   * 
   * - The destination CIDR blocks of different routes in the same route table cannot be the same.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/24
   */
  dstCidrBlock?: string;
  /**
   * @remarks
   * The IP protocol version. You can specify up to 50 IP protocol versions. Valid values:
   * 
   * - **4**: IPv4.
   * 
   * - **6**: IPv6.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The name of the custom route that you want to add. You can specify up to 50 names.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the next hop instance for the custom route. You can specify up to 50 instance IDs.
   * 
   * > If you set NextHopType to Ecr, call the [DescribeExpressConnectRouterAssociation](https://help.aliyun.com/document_detail/2712069.html) operation to obtain the AssociationId and use it as the next hop ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-j6c2fp57q8rr4jlu****
   */
  nextHop?: string;
  /**
   * @remarks
   * The type of the next hop for the custom route. You can specify up to 50 next hop types. Valid values:
   * 
   * - **Instance** (default): an ECS instance.
   * 
   * - **HaVip**: a high-availability virtual IP address (HAVIP).
   * 
   * - **RouterInterface**: a router interface.
   * 
   * - **NetworkInterface**: an elastic network interface (ENI).
   * 
   * - **VpnGateway**: a VPN Gateway.
   * 
   * - **IPv6Gateway**: an IPv6 Gateway.
   * 
   * - **NatGateway**: a NAT Gateway.
   * 
   * - **Attachment**: a transit router.
   * 
   * - **VpcPeer**: a VPC peering connection.
   * 
   * - **Ipv4Gateway**: an IPv4 gateway.
   * 
   * - **GatewayEndpoint**: a gateway endpoint.
   * 
   * - **CenBasic**: CEN does not support transit routers.
   * 
   * - **Ecr**: an Express Connect Router (ECR).
   * 
   * - **GatewayLoadBalancerEndpoint**: a Gateway Load Balancer endpoint (GWLBe).
   * 
   * This parameter is required.
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  /**
   * @remarks
   * The ID of the route table to which you want to add custom routes. You can specify up to 50 route table IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp145q7glnuzd****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dstCidrBlock: 'DstCidrBlock',
      ipVersion: 'IpVersion',
      name: 'Name',
      nextHop: 'NextHop',
      nextHopType: 'NextHopType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dstCidrBlock: 'string',
      ipVersion: 'number',
      name: 'string',
      nextHop: 'string',
      nextHopType: 'string',
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

export class CreateRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * **true**: Sends a request to check whether the request is valid. The system checks whether your AccessKey is valid, whether the RAM user is authorized, and whether the required parameters are specified. If the request fails the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * **false** (default): Sends a normal request. After the request passes the check, a 2xx HTTP status code is returned and the routes are created.
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the route table is located.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The list of route information.
   * 
   * This parameter is required.
   */
  routeEntries?: CreateRouteEntriesRequestRouteEntries[];
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeEntries: 'RouteEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeEntries: { 'type': 'array', 'itemType': CreateRouteEntriesRequestRouteEntries },
    };
  }

  validate() {
    if(Array.isArray(this.routeEntries)) {
      $dara.Model.validateArray(this.routeEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

