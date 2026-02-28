// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo extends $dara.Model {
  instanceId?: string;
  instanceType?: string;
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
  enabled?: number;
  nextHopId?: string;
  nextHopRegionId?: string;
  nextHopRelatedInfo?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo;
  nextHopType?: string;
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
  description?: string;
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   */
  gmtModified?: string;
  ipVersion?: string;
  nextHops?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops;
  origin?: string;
  routeEntryId?: string;
  routeEntryName?: string;
  routeTableId?: string;
  serviceType?: string;
  status?: string;
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

