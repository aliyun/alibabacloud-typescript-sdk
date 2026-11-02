// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteEntryListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of destination CIDR blocks of the route.
   */
  destCidrBlockList?: string[];
  /**
   * @remarks
   * The destination CIDR block of the route. Both IPv4 and IPv6 CIDR blocks are supported.
   * 
   * @example
   * 192.168.2.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **ipv4**: IPv4.
   * 
   * - **ipv6**: IPv6.
   * 
   * @example
   * ipv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResult?: number;
  /**
   * @remarks
   * The instance ID of the next hop.
   * 
   * @example
   * vpn-bp10zyaph5cc8b7c7****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * - **Instance** (default): ECS instance.
   * 
   * - **HaVip**: high-availability virtual IP address.
   * 
   * - **VpnGateway**: VPN gateway.
   * 
   * - **NatGateway**: NAT gateway.
   * 
   * - **NetworkInterface**: secondary elastic network interface controller (NIC).
   * 
   * - **RouterInterface**: vRouter interface.
   * 
   * - **IPv6Gateway**: IPv6 gateway.
   * 
   * - **Attachment**: forwarding router.
   * - **Ipv4Gateway**: IPv4 gateway.
   * - **GatewayEndpoint**: gateway endpoint.
   * - **Ecr**: Express Connect Router (ECR).
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The pagination token that is used to retrieve the next page of results. Valid values:
   * - Leave this parameter empty for the first query or when no subsequent query is required.
   * - If a subsequent query is required, set this parameter to the value of NextToken returned from the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the route table to which the route belongs.
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
   * The ID of the route to query.
   * 
   * @example
   * rte-bp1mnnr2al0naomnp****
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The name of the route.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The type of the route. Valid values:
   * 
   * - **Custom**: custom route.
   * - **System**: system route.
   * - **BGP**: BGP route.
   * - **CEN**: Cloud Enterprise Network (CEN) route.
   * - **ECR**: Express Connect Router (ECR) route.
   * 
   * @example
   * System
   */
  routeEntryType?: string;
  /**
   * @remarks
   * The ID of the route table to query.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp1r9pvl4xen8s9ju****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The type of the managed route. If this parameter is empty, the route is not managed.
   * 
   * Valid value: **TR**, which indicates that the route is managed by a transit router.
   * 
   * @example
   * TR
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      destCidrBlockList: 'DestCidrBlockList',
      destinationCidrBlock: 'DestinationCidrBlock',
      ipVersion: 'IpVersion',
      maxResult: 'MaxResult',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeEntryId: 'RouteEntryId',
      routeEntryName: 'RouteEntryName',
      routeEntryType: 'RouteEntryType',
      routeTableId: 'RouteTableId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destCidrBlockList: { 'type': 'array', 'itemType': 'string' },
      destinationCidrBlock: 'string',
      ipVersion: 'string',
      maxResult: 'number',
      nextHopId: 'string',
      nextHopType: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeEntryId: 'string',
      routeEntryName: 'string',
      routeEntryType: 'string',
      routeTableId: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destCidrBlockList)) {
      $dara.Model.validateArray(this.destCidrBlockList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

