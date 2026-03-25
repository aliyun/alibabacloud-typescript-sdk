// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationChildInstanceTypes extends $dara.Model {
  destinationChildInstanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationChildInstanceType: 'DestinationChildInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationChildInstanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationChildInstanceType)) {
      $dara.Model.validateArray(this.destinationChildInstanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationCidrBlocks extends $dara.Model {
  destinationCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationCidrBlock)) {
      $dara.Model.validateArray(this.destinationCidrBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationInstanceIds extends $dara.Model {
  destinationInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationInstanceId: 'DestinationInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationInstanceId)) {
      $dara.Model.validateArray(this.destinationInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRegionIds extends $dara.Model {
  destinationRegionId?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationRegionId: 'DestinationRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationRegionId)) {
      $dara.Model.validateArray(this.destinationRegionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRouteTableIds extends $dara.Model {
  destinationRouteTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationRouteTableId: 'DestinationRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRouteTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationRouteTableId)) {
      $dara.Model.validateArray(this.destinationRouteTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchAsns extends $dara.Model {
  matchAsn?: string[];
  static names(): { [key: string]: string } {
    return {
      matchAsn: 'MatchAsn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchAsn: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.matchAsn)) {
      $dara.Model.validateArray(this.matchAsn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchCommunitySet extends $dara.Model {
  matchCommunity?: string[];
  static names(): { [key: string]: string } {
    return {
      matchCommunity: 'MatchCommunity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCommunity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.matchCommunity)) {
      $dara.Model.validateArray(this.matchCommunity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapOperateCommunitySet extends $dara.Model {
  operateCommunity?: string[];
  static names(): { [key: string]: string } {
    return {
      operateCommunity: 'OperateCommunity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCommunity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.operateCommunity)) {
      $dara.Model.validateArray(this.operateCommunity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapPrependAsPath extends $dara.Model {
  asPath?: string[];
  static names(): { [key: string]: string } {
    return {
      asPath: 'AsPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.asPath)) {
      $dara.Model.validateArray(this.asPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapRouteTypes extends $dara.Model {
  routeType?: string[];
  static names(): { [key: string]: string } {
    return {
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routeType)) {
      $dara.Model.validateArray(this.routeType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceChildInstanceTypes extends $dara.Model {
  sourceChildInstanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceChildInstanceType: 'SourceChildInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceChildInstanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceChildInstanceType)) {
      $dara.Model.validateArray(this.sourceChildInstanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceInstanceIds extends $dara.Model {
  sourceInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceInstanceId)) {
      $dara.Model.validateArray(this.sourceInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRegionIds extends $dara.Model {
  sourceRegionId?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceRegionId: 'SourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceRegionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceRegionId)) {
      $dara.Model.validateArray(this.sourceRegionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRouteTableIds extends $dara.Model {
  sourceRouteTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceRouteTableId: 'SourceRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceRouteTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceRouteTableId)) {
      $dara.Model.validateArray(this.sourceRouteTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMap extends $dara.Model {
  asPathMatchMode?: string;
  cenId?: string;
  cenRegionId?: string;
  cidrMatchMode?: string;
  communityMatchMode?: string;
  communityOperateMode?: string;
  description?: string;
  destinationChildInstanceTypes?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationChildInstanceTypes;
  destinationCidrBlocks?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationCidrBlocks;
  destinationInstanceIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationInstanceIds;
  destinationInstanceIdsReverseMatch?: boolean;
  destinationRegionIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRegionIds;
  destinationRouteTableIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRouteTableIds;
  mapResult?: string;
  matchAddressType?: string;
  matchAsns?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchAsns;
  matchCommunitySet?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchCommunitySet;
  nextPriority?: number;
  operateCommunitySet?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapOperateCommunitySet;
  preference?: number;
  prependAsPath?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapPrependAsPath;
  priority?: number;
  routeMapId?: string;
  routeTypes?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapRouteTypes;
  sourceChildInstanceTypes?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceChildInstanceTypes;
  sourceInstanceIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceInstanceIds;
  sourceInstanceIdsReverseMatch?: boolean;
  sourceRegionIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRegionIds;
  sourceRouteTableIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRouteTableIds;
  status?: string;
  transitRouterRouteTableId?: string;
  transmitDirection?: string;
  static names(): { [key: string]: string } {
    return {
      asPathMatchMode: 'AsPathMatchMode',
      cenId: 'CenId',
      cenRegionId: 'CenRegionId',
      cidrMatchMode: 'CidrMatchMode',
      communityMatchMode: 'CommunityMatchMode',
      communityOperateMode: 'CommunityOperateMode',
      description: 'Description',
      destinationChildInstanceTypes: 'DestinationChildInstanceTypes',
      destinationCidrBlocks: 'DestinationCidrBlocks',
      destinationInstanceIds: 'DestinationInstanceIds',
      destinationInstanceIdsReverseMatch: 'DestinationInstanceIdsReverseMatch',
      destinationRegionIds: 'DestinationRegionIds',
      destinationRouteTableIds: 'DestinationRouteTableIds',
      mapResult: 'MapResult',
      matchAddressType: 'MatchAddressType',
      matchAsns: 'MatchAsns',
      matchCommunitySet: 'MatchCommunitySet',
      nextPriority: 'NextPriority',
      operateCommunitySet: 'OperateCommunitySet',
      preference: 'Preference',
      prependAsPath: 'PrependAsPath',
      priority: 'Priority',
      routeMapId: 'RouteMapId',
      routeTypes: 'RouteTypes',
      sourceChildInstanceTypes: 'SourceChildInstanceTypes',
      sourceInstanceIds: 'SourceInstanceIds',
      sourceInstanceIdsReverseMatch: 'SourceInstanceIdsReverseMatch',
      sourceRegionIds: 'SourceRegionIds',
      sourceRouteTableIds: 'SourceRouteTableIds',
      status: 'Status',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
      transmitDirection: 'TransmitDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPathMatchMode: 'string',
      cenId: 'string',
      cenRegionId: 'string',
      cidrMatchMode: 'string',
      communityMatchMode: 'string',
      communityOperateMode: 'string',
      description: 'string',
      destinationChildInstanceTypes: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationChildInstanceTypes,
      destinationCidrBlocks: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationCidrBlocks,
      destinationInstanceIds: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationInstanceIds,
      destinationInstanceIdsReverseMatch: 'boolean',
      destinationRegionIds: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRegionIds,
      destinationRouteTableIds: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRouteTableIds,
      mapResult: 'string',
      matchAddressType: 'string',
      matchAsns: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchAsns,
      matchCommunitySet: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchCommunitySet,
      nextPriority: 'number',
      operateCommunitySet: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapOperateCommunitySet,
      preference: 'number',
      prependAsPath: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapPrependAsPath,
      priority: 'number',
      routeMapId: 'string',
      routeTypes: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapRouteTypes,
      sourceChildInstanceTypes: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceChildInstanceTypes,
      sourceInstanceIds: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceInstanceIds,
      sourceInstanceIdsReverseMatch: 'boolean',
      sourceRegionIds: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRegionIds,
      sourceRouteTableIds: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRouteTableIds,
      status: 'string',
      transitRouterRouteTableId: 'string',
      transmitDirection: 'string',
    };
  }

  validate() {
    if(this.destinationChildInstanceTypes && typeof (this.destinationChildInstanceTypes as any).validate === 'function') {
      (this.destinationChildInstanceTypes as any).validate();
    }
    if(this.destinationCidrBlocks && typeof (this.destinationCidrBlocks as any).validate === 'function') {
      (this.destinationCidrBlocks as any).validate();
    }
    if(this.destinationInstanceIds && typeof (this.destinationInstanceIds as any).validate === 'function') {
      (this.destinationInstanceIds as any).validate();
    }
    if(this.destinationRegionIds && typeof (this.destinationRegionIds as any).validate === 'function') {
      (this.destinationRegionIds as any).validate();
    }
    if(this.destinationRouteTableIds && typeof (this.destinationRouteTableIds as any).validate === 'function') {
      (this.destinationRouteTableIds as any).validate();
    }
    if(this.matchAsns && typeof (this.matchAsns as any).validate === 'function') {
      (this.matchAsns as any).validate();
    }
    if(this.matchCommunitySet && typeof (this.matchCommunitySet as any).validate === 'function') {
      (this.matchCommunitySet as any).validate();
    }
    if(this.operateCommunitySet && typeof (this.operateCommunitySet as any).validate === 'function') {
      (this.operateCommunitySet as any).validate();
    }
    if(this.prependAsPath && typeof (this.prependAsPath as any).validate === 'function') {
      (this.prependAsPath as any).validate();
    }
    if(this.routeTypes && typeof (this.routeTypes as any).validate === 'function') {
      (this.routeTypes as any).validate();
    }
    if(this.sourceChildInstanceTypes && typeof (this.sourceChildInstanceTypes as any).validate === 'function') {
      (this.sourceChildInstanceTypes as any).validate();
    }
    if(this.sourceInstanceIds && typeof (this.sourceInstanceIds as any).validate === 'function') {
      (this.sourceInstanceIds as any).validate();
    }
    if(this.sourceRegionIds && typeof (this.sourceRegionIds as any).validate === 'function') {
      (this.sourceRegionIds as any).validate();
    }
    if(this.sourceRouteTableIds && typeof (this.sourceRouteTableIds as any).validate === 'function') {
      (this.sourceRouteTableIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBodyRouteMaps extends $dara.Model {
  routeMap?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMap[];
  static names(): { [key: string]: string } {
    return {
      routeMap: 'RouteMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeMap: { 'type': 'array', 'itemType': DescribeCenRouteMapsResponseBodyRouteMapsRouteMap },
    };
  }

  validate() {
    if(Array.isArray(this.routeMap)) {
      $dara.Model.validateArray(this.routeMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenRouteMapsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 24CE1987-D1D1-5324-9BAD-2750B60E6ABB
   */
  requestId?: string;
  routeMaps?: DescribeCenRouteMapsResponseBodyRouteMaps;
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
      routeMaps: 'RouteMaps',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeMaps: DescribeCenRouteMapsResponseBodyRouteMaps,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.routeMaps && typeof (this.routeMaps as any).validate === 'function') {
      (this.routeMaps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

