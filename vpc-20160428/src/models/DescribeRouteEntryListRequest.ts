// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteEntryListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of destination CIDR blocks of routes.
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
   * The version of the IP protocol. Valid values:
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
   * The number of entries per page. Valid values: **1** to **100**. Default value: **10**.
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
   * - **RouterInterface**: routing interface.
   * 
   * - **IPv6Gateway**: IPv6 gateway.
   * 
   * - **Attachment**: transit router.
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
   * The pagination token. Valid values:
   * - If this is the first request or no subsequent query exists, leave this parameter empty.
   * - If a subsequent query exists, set the value to the NextToken value returned by the previous API call.
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
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the region ID.
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
   * The ID of the route that you want to query.
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
   * The ID of the route table that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp1r9pvl4xen8s9ju****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The type of route hosting. If this field is empty, the route is not hosted.
   * 
   * Valid values: **TR**, which indicates that the hosting type is transit router.
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

