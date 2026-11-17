// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntriesRequestRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the custom route entry. You can specify at most 50 descriptions.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the custom route entry. Both IPv4 and IPv6 CIDR blocks are supported. You can specify at most 50 destination CIDR blocks. The destination CIDR block must meet the following requirements:
   *           
   * - The destination CIDR block cannot point to 100.64.0.0/10 or be contained by 100.64.0.0/10.  
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
   * The IP version. You can specify at most 50 IP versions. Valid values:
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
   * The name of the custom route entry to be added. You can specify at most 50 names.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the next hop instance for the custom route entry. You can specify at most 50 instance IDs.
   * > If you set NextHopType to ECR, you can call the [DescribeExpressConnectRouterAssociation](https://help.aliyun.com/document_detail/2712069.html) operation to obtain the AssociationId as the next hop ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-j6c2fp57q8rr4jlu****
   */
  nextHop?: string;
  /**
   * @remarks
   * The type of the next hop for the custom route entry. You can specify at most 50 next hop types. Valid values: 
   * 
   * - **Instance** (default): an ECS instance.
   * 
   * - **HaVip**: a high-availability (active) virtual IP address.  
   * 
   * - **RouterInterface**: a vRouter interface.
   * 
   * - **NetworkInterface**: elastic network interface controller (NIC).
   * 
   * - **VpnGateway**: a VPN gateway.
   * 
   * - **IPv6Gateway**: an IPv6 gateway.
   * 
   * - **NatGateway**: a NAT gateway.
   * 
   * - **Attachment**: a forward transit router (TR).
   * 
   * - **VpcPeer**: a VPC peering connection.
   * - **Ipv4Gateway**: an IPv4 gateway.
   * - **GatewayEndpoint**: a gateway endpoint.
   * - **CenBasic**: a CEN instance that does not support forward transit routers.
   * - **Ecr**: an Express Connect Router (ECR).
   * - **GatewayLoadBalancerEndpoint**: a Gateway Load Balancer (load balancing) endpoint (GWLBe).
   * - **RouteTargetGroup**: a routing target group.
   * 
   * This parameter is required.
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  /**
   * @remarks
   * The ID of the route table to which you want to add the custom route entry. You can specify at most 50 route table IDs.
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
   * Specifies whether to perform only a dry run for this request. Valid values:
   * 
   * **true**: The system performs a dry run without creating the custom route entry (routing). The system checks whether your AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified. If the request fails the dry run, the system returns an error. If the request passes the dry run, the system returns the `DryRunOperation` error code.
   * 
   * **false** (default): The system sends a normal request. If the request passes the dry run, the system returns a 2xx HTTP status code and creates the custom route entry (routing).
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the route table belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * The list of route entries.
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

