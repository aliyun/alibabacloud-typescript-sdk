// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntriesRequestRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the custom route entry. You can specify a maximum of 50 descriptions.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the custom route entry. Both IPv4 and IPv6 destination CIDR blocks are supported. You can specify a maximum of 50 destination CIDR blocks. The following requirements must be met:
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
  dstCidrBlock?: string;
  /**
   * @remarks
   * The version of the IP protocol. You can specify a maximum of 50 IP protocol versions. Valid values:
   * 
   * - **4**: IPv4.
   * - **6**: IPv6.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The name of the custom route entry to add. You can specify a maximum of 50 names.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the next hop instance for the custom route entry. You can specify a maximum of 50 instance IDs.
   * > If NextHopType is set to ECR, you can call [DescribeExpressConnectRouterAssociation](https://help.aliyun.com/document_detail/2712069.html) to obtain the AssociationId as the next hop ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-j6c2fp57q8rr4jlu****
   */
  nextHop?: string;
  /**
   * @remarks
   * The type of the next hop for the custom route entry. You can specify a maximum of 50 next hop types. Valid values: 
   * 
   * - **Instance** (default): ECS instance. Forwards traffic to an ECS instance.
   * 
   * - **HaVip**: high-availability virtual IP address.  
   * 
   * - **RouterInterface**: vRouter interface.
   * 
   * - **NetworkInterface**: elastic network interfaces (ENIs).
   * 
   * - **VpnGateway**: VPN gateway.
   * 
   * - **IPv6Gateway**: IPv6 gateway.
   * 
   * - **NatGateway**: NAT gateway.
   * 
   * - **Attachment**: transit router. Forwards traffic to a transit router.
   * 
   * - **VpcPeer**: VPC peering connection.
   * - **Ipv4Gateway**: IPv4 gateway.
   * - **GatewayEndpoint**: gateway endpoint.
   * - **CenBasic**: CEN that does not support transit routers.
   * - **Ecr**: Express Connect Router (ECR).
   * - **GatewayLoadBalancerEndpoint**: Gateway Load Balancer endpoint (GWLBe).
   * - **RouteTargetGroup**: routing target group.
   * 
   * This parameter is required.
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  /**
   * @remarks
   * The ID of the route table to which you want to add the custom route entry. You can specify a maximum of 50 route table IDs.
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
   * **true**: performs a dry run without creating routes. The system checks the AccessKey pair, the authorization of the Resource Access Management (RAM) user, and the required parameters. If the check fails, the corresponding error is returned. If the check passes, the `DryRunOperation` error code is returned.
   * 
   * **false** (default): sends a Normal request. If the check passes, a 2xx HTTP status code is returned and the routes are created.
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the route table.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the most recent region list.
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
   * The list of route entry information.
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

