// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteEntryListRequest extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR blocks of the routes.
   */
  destCidrBlockList?: string[];
  /**
   * @remarks
   * The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.
   * 
   * @example
   * 192.168.2.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   **IPv4**
   * *   **IPv6**
   * 
   * @example
   * IPv4
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
   * The ID of the next hop.
   * 
   * @example
   * vpn-bp10zyaph5cc8b7c7****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * *   **Instance**: an Elastic Compute Service (ECS) instance. This is the default value.
   * *   **HaVip**: a high-availability virtual IP address (HaVip).
   * *   **VpnGateway**: a VPN gateway.
   * *   **NatGateway**: a NAT gateway.
   * *   **NetworkInterface**: a secondary elastic network interface (ENI).
   * *   **RouterInterface**: a router interface.
   * *   **IPv6Gateway**: an IPv6 gateway.
   * *   **Attachment**: a transit router.
   * *   **Ipv4Gateway**: an IPv4 gateway.
   * *   **GatewayEndpoint**: a gateway endpoint.
   * *   **CenBasic**: CEN does not support transit routers.
   * *   **Ecr**: Express Connect Router (ECR).
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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
   * The ID of the route that you want to query.
   * 
   * @example
   * rte-bp1mnnr2al0naomnp****
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The name of the route entry.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **Custom**: custom routes.
   * *   **System**: system routes.
   * *   **BGP**: BGP routes.
   * *   **CEN**: Cloud Enterprise Network (CEN) routes.
   * *   **ECR**: Express Connect Router (ECR) routes.
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
   * Specifies whether to host the route. If the parameter is empty, the route is not hosted.
   * 
   * Set the value to **TR**, which specifies that the route is hosted by a transit router.
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

