// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHopsNextHop extends $dara.Model {
  enabled?: number;
  nextHopId?: string;
  nextHopType?: string;
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
  description?: string;
  destinationCidrBlock?: string;
  instanceId?: string;
  nextHopType?: string;
  nextHops?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrysRouteEntryNextHops;
  routeEntryId?: string;
  routeEntryName?: string;
  routeTableId?: string;
  status?: string;
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
  creationTime?: string;
  resourceGroupId?: string;
  routeEntrys?: DescribeRouteTablesResponseBodyRouteTablesRouteTableRouteEntrys;
  routeTableId?: string;
  routeTableType?: string;
  status?: string;
  VRouterId?: string;
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

