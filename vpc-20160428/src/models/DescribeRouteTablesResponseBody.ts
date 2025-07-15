// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the route is available. Valid values:
   * 
   * *   **0**: unavailable
   * *   **1**: available
   * 
   * @example
   * 0
   */
  enabled?: number;
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * @example
   * ri-2zeo3xzyf38r4urzdpvqw
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of the next hop. Valid values:
   * 
   * *   **Instance**: an ECS instance
   * *   **HaVip**: an HaVip
   * *   **VpnGateway**: a VPN gateway
   * *   **NatGateway**: a NAT gateway
   * *   **NetworkInterface**: a secondary ENI
   * *   **RouterInterface**: a router interface
   * *   **IPv6Gateway**: an IPv6 gateway
   * *   **Attachment**: a transit router
   * 
   * @example
   * HaVip
   */
  nextHopType?: string;
  /**
   * @remarks
   * The weight of the route.
   * 
   * @example
   * 80
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'number',
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

export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops extends $dara.Model {
  nextHop?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop[];
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: { 'type': 'array', 'itemType': DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop },
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

export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the route. The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * RouteEntryDescription
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the route. The destination CIDR block supports IPv4 and IPv6. Make sure that the destination CIDR block meets the following requirements:
   * 
   * *   The destination CIDR block is not 100.64.0.0/10 or a subset of 100.64.0.0/10.
   * *   The destination CIDR block of each route in the route table is unique.
   * 
   * @example
   * 192.168.0.1/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the instance associated with the next hop.
   * 
   * @example
   * ri-2zeo3xzyf38r4urzd****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the next hop. Valid values:
   * 
   * *   **Instance** (default): an Elastic Compute Service (ECS) instance
   * *   **HaVip**: a high-availability virtual IP address (HaVip).
   * *   **VpnGateway**: a VPN gateway
   * *   **NatGateway**: a NAT gateway
   * *   **NetworkInterface**: a secondary elastic network interface (ENI)
   * *   **RouterInterface**: a router interface
   * *   **IPv6Gateway**: an IPv6 gateway
   * *   **Attachment**: a transit router
   * 
   * @example
   * local
   */
  nextHopType?: string;
  /**
   * @remarks
   * The information about the next hop.
   */
  nextHops?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops;
  /**
   * @remarks
   * The ID of the route.
   * 
   * @example
   * rte-bp1mnnr2al0naomnpxxx
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The route name.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The route table ID.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The route status. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * *   **Modifying**
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **Custom**
   * *   **System**
   * *   **BGP**
   * *   **CEN**
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      instanceId: 'InstanceId',
      nextHopType: 'NextHopType',
      nextHops: 'NextHops',
      routeEntryId: 'RouteEntryId',
      routeEntryName: 'RouteEntryName',
      routeTableId: 'RouteTableId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      instanceId: 'string',
      nextHopType: 'string',
      nextHops: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops,
      routeEntryId: 'string',
      routeEntryName: 'string',
      routeTableId: 'string',
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

export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys extends $dara.Model {
  routeEntry?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      routeEntry: 'RouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntry: { 'type': 'array', 'itemType': DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntry },
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

export class DescribeRouteTablesResponseBodyRouteTablesRouteTableVSwitchIds extends $dara.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchId)) {
      $dara.Model.validateArray(this.vSwitchId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseBodyRouteTablesRouteTable extends $dara.Model {
  /**
   * @remarks
   * The time when the route table was created.
   * 
   * The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format in UTC.
   * 
   * @example
   * 2017-08-22T10:40:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the resource group to which the route table belongs.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the route.
   */
  routeEntrys?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * *   **Custom**
   * *   **System**
   * 
   * @example
   * System
   */
  routeTableType?: string;
  /**
   * @remarks
   * The status of the route table. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The vRouter ID.
   * 
   * @example
   * vrt-bp1lhl0taikrteen8****
   */
  VRouterId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchIds?: DescribeRouteTablesResponseBodyRouteTablesRouteTableVSwitchIds;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      resourceGroupId: 'ResourceGroupId',
      routeEntrys: 'RouteEntrys',
      routeTableId: 'RouteTableId',
      routeTableType: 'RouteTableType',
      status: 'Status',
      VRouterId: 'VRouterId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      resourceGroupId: 'string',
      routeEntrys: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys,
      routeTableId: 'string',
      routeTableType: 'string',
      status: 'string',
      VRouterId: 'string',
      vSwitchIds: DescribeRouteTablesResponseBodyRouteTablesRouteTableVSwitchIds,
    };
  }

  validate() {
    if(this.routeEntrys && typeof (this.routeEntrys as any).validate === 'function') {
      (this.routeEntrys as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseBodyRouteTables extends $dara.Model {
  routeTable?: DescribeRouteTablesResponseBodyRouteTablesRouteTable[];
  static names(): { [key: string]: string } {
    return {
      routeTable: 'RouteTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTable: { 'type': 'array', 'itemType': DescribeRouteTablesResponseBodyRouteTablesRouteTable },
    };
  }

  validate() {
    if(Array.isArray(this.routeTable)) {
      $dara.Model.validateArray(this.routeTable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC668356-BCB4-42FD-9BC3-FA2B2E04B634
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about the route tables.
   */
  routeTables?: DescribeRouteTablesResponseBodyRouteTables;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routeTables: 'RouteTables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeTables: DescribeRouteTablesResponseBodyRouteTables,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.routeTables && typeof (this.routeTables as any).validate === 'function') {
      (this.routeTables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

