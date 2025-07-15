// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntriesRequestRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the custom route. You can specify at most 50 descriptions.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the custom route. IPv4 CIDR blocks, IPv6 CIDR blocks, and prefix lists are supported. You can enter up to 50 destination CIDR blocks. Make sure that the following requirements are met:
   * 
   * *   The destination CIDR block cannot point to 100.64.0.0/10 or belong to 100.64.0.0/10.
   * *   The destination CIDR block of each route in the route table is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/24
   */
  dstCidrBlock?: string;
  /**
   * @remarks
   * The IP version. Valid values: You can specify at most 50 IP versions. Valid values:
   * 
   * *   **4**: IPv4
   * *   **6**: IPv6
   * 
   * @example
   * IPv4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The name of the custom route that you want to add. You can specify at most 50 names.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the next hop for the custom route. You can specify at most 50 instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * i-j6c2fp57q8rr4jlu****
   */
  nextHop?: string;
  /**
   * @remarks
   * The type of next hop. You can specify at most 50 next hop types. Valid values:
   * 
   * *   **Instance**: Elastic Compute Service (ECS) instance. This is the default value.
   * *   **HaVip**: high-availability virtual IP address (HaVip).
   * *   **RouterInterface**: router interface.
   * *   **NetworkInterface**: elastic network interface (ENI).
   * *   **VpnGateway**: VPN gateway.
   * *   **IPv6Gateway**: IPv6 gateway.
   * *   **NatGateway**: NAT gateway.
   * *   **Attachment**: transit router.
   * *   **VpcPeer**: VPC peering connection.
   * *   **Ipv4Gateway**: IPv4 gateway.
   * *   **GatewayEndpoint**: gateway endpoint.
   * *   **CenBasic**: CEN does not support transfer routers.
   * *   **Ecr**: Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  /**
   * @remarks
   * The ID of the route table to which you want to add custom route s. You can specify at most 50 route table IDs.
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
   * Specifies whether to only precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request without performing the operation. The system prechecks the required parameters, request syntax, and limits. If the request fails to pass the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. After the request passes the precheck, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the route table.
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
   * The routes.
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

