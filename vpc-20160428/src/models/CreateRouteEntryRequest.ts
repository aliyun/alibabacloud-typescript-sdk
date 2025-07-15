// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntryRequestNextHopList extends $dara.Model {
  /**
   * @remarks
   * The ID of the next hop of the ECMP route.
   * 
   * @example
   * ri-2zeo3xzyf3cd8r4****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of next hop of the ECMP route entry. Set the value to **RouterInterface**.
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  /**
   * @remarks
   * The weight of the next hop of the ECMP route entry.
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
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.
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
   * The destination CIDR block of the custom route entry. Both IPv4 and IPv6 CIDR blocks are supported. Make sure that the destination CIDR block meets the following requirements:
   * 
   * *   The destination CIDR block is not 100.64.0.0/10 or a subset of 100.64.0.0/10.
   * *   The destination CIDR block of the custom route entry is different from the destination CIDR blocks of other route entries in the same route table.
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
   * 
   * *   **true**: performs only a dry run. The system checks the required parameters, request syntax, and limits. If the request fails, an error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the next hop for the custom route.
   * 
   * >  [](#-nexthoptype--ecr-describeexpressconnectrouterassociation--associationid--id)If you set the NextHopType parameter to ECR, call the [DescribeExpressConnectRouterAssociation](https://help.aliyun.com/document_detail/2712069.html) operation to access the AssociationId and use it as the next hop ID.
   * 
   * @example
   * i-j6c2fp57q8rr4jlu****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The next hop list.
   */
  nextHopList?: CreateRouteEntryRequestNextHopList[];
  /**
   * @remarks
   * The type of next hop of the custom route entry. Valid values:
   * 
   * *   **Instance**: an Elastic Compute Service (ECS) instance. This is the default value.
   * *   **HaVip**: a high-availability virtual IP address (HaVip).
   * *   **RouterInterface**: a router interface.
   * *   **NetworkInterface**: an elastic network interface (ENI).
   * *   **VpnGateway**: a VPN gateway.
   * *   **IPv6Gateway**: an IPv6 gateway.
   * *   **NatGateway**: a NAT gateway.
   * *   **Attachment**: a transit router.
   * *   **VpcPeer**: a VPC peering connection.
   * *   **Ipv4Gateway**: an IPv4 gateway.
   * *   **GatewayEndpoint**: a gateway endpoint.
   * *   **Ecr**: an Express Connect Router (ECR).
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the custom route entry that you want to add.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
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

