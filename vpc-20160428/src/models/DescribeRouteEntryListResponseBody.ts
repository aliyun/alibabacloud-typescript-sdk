// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that is associated with the next hop.
   * 
   * @example
   * vpc-bp1t36rn9l53iwbsf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance associated with the next hop. Valid values:
   * 
   * *   **VPC**: a VPC
   * *   **VBR**: a VBR
   * *   **PCONN**: an Express Connect circuit
   * 
   * @example
   * VPC
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID of the instance associated with the next hop. Valid values:
   * 
   * @example
   * ch-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHop extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the route is available. Valid values:
   * 
   * *   **0**: unavailable
   * *   **1**: available
   * 
   * >  This parameter is returned when the next hop type is set to **RouterInterface**.
   * 
   * @example
   * 1
   */
  enabled?: number;
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
   * The ID of the region where the next hop is deployed.
   * 
   * >  This parameter is returned when the next hop type is set to **RouterInterface**.
   * 
   * @example
   * cn-hangzhou
   */
  nextHopRegionId?: string;
  /**
   * @remarks
   * The information about the next hop.
   */
  nextHopRelatedInfo?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * *   **Instance**: an ECS instance.
   * *   **HaVip**: an HaVip.
   * *   **VpnGateway**: a VPN gateway.
   * *   **NatGateway**: a NAT gateway.
   * *   **NetworkInterface**: a secondary ENI.
   * *   **RouterInterface**: a router interface.
   * *   **IPv6Gateway**: an IPv6 gateway.
   * *   **Attachment**: a transit router.
   * *   **Ipv4Gateway**: an IPv4 gateway.
   * *   **GatewayEndpoint**: a gateway endpoint.
   * *   **CenBasic**: CEN does not support transit routers.
   * *   **Ecr**: ECR.
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The weight of the route.
   * 
   * >  This parameter is returned when the next hop type is set to **RouterInterface**.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      nextHopId: 'NextHopId',
      nextHopRegionId: 'NextHopRegionId',
      nextHopRelatedInfo: 'NextHopRelatedInfo',
      nextHopType: 'NextHopType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'number',
      nextHopId: 'string',
      nextHopRegionId: 'string',
      nextHopRelatedInfo: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo,
      nextHopType: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.nextHopRelatedInfo && typeof (this.nextHopRelatedInfo as any).validate === 'function') {
      (this.nextHopRelatedInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops extends $dara.Model {
  nextHop?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHop[];
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: { 'type': 'array', 'itemType': DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHop },
    };
  }

  validate() {
    if(Array.isArray(this.nextHop)) {
      $dara.Model.validateArray(this.nextHop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the route.
   * 
   * @example
   * RouteEntryDescription
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 192.168.2.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The time when the route was modified. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-05-09T03:00:07Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The IP version. Valid values: Valid values:
   * 
   * *   **ipv4**
   * *   **ipv6**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The information about the next hops.
   */
  nextHops?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops;
  /**
   * @remarks
   * The route origin. Valid values:
   * * **RoutePropagation**: The route is created by a dynamic propagation source.
   * * **SystemCreate**: The route is created by the system.
   * * **CustomCreate**: The route is created by a user.
   * 
   * @example
   * RoutePropagation
   */
  origin?: string;
  /**
   * @remarks
   * The ID of the route.
   * 
   * @example
   * rte-bp1mnnr2al0naomnp****
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * aaa
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-bp15w5q90d2rk3bww****
   */
  routeTableId?: string;
  /**
   * @remarks
   * Indicates whether the route is hosted. If the parameter is empty, the route is not hosted.
   * 
   * If **TR** is returned, the route is hosted by a transit router.
   * 
   * @example
   * TR
   */
  serviceType?: string;
  /**
   * @remarks
   * The status of the route entry. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * *   **Modifying**
   * *   **Deleting**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **Custom**: custom routes.
   * *   **System**: system routes.
   * *   **BGP**: BGP routes.
   * *   **CEN**: CEN routes.
   * *   **ECR**: ECR routes.
   * 
   * @example
   * Custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      gmtModified: 'GmtModified',
      ipVersion: 'IpVersion',
      nextHops: 'NextHops',
      origin: 'Origin',
      routeEntryId: 'RouteEntryId',
      routeEntryName: 'RouteEntryName',
      routeTableId: 'RouteTableId',
      serviceType: 'ServiceType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      gmtModified: 'string',
      ipVersion: 'string',
      nextHops: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops,
      origin: 'string',
      routeEntryId: 'string',
      routeEntryName: 'string',
      routeTableId: 'string',
      serviceType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.nextHops && typeof (this.nextHops as any).validate === 'function') {
      (this.nextHops as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListResponseBodyRouteEntrys extends $dara.Model {
  routeEntry?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      routeEntry: 'RouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntry: { 'type': 'array', 'itemType': DescribeRouteEntryListResponseBodyRouteEntrysRouteEntry },
    };
  }

  validate() {
    if(Array.isArray(this.routeEntry)) {
      $dara.Model.validateArray(this.routeEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteEntryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next queries are sent.
   * *   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the routes.
   */
  routeEntrys?: DescribeRouteEntryListResponseBodyRouteEntrys;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeEntrys: 'RouteEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      routeEntrys: DescribeRouteEntryListResponseBodyRouteEntrys,
    };
  }

  validate() {
    if(this.routeEntrys && typeof (this.routeEntrys as any).validate === 'function') {
      (this.routeEntrys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

