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
  /**
   * @remarks
   * The match method that is used to match routes based on the AS path.
   * 
   * *   **Include**: fuzzy match. A route is a match if the AS path of the route overlaps with the AS path specified in the match condition.
   * *   **Complete**: exact match. A route is a match only if the AS path of the route is the same as an AS path specified in the match condition.
   * 
   * @example
   * Include
   */
  asPathMatchMode?: string;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-wx12mmlt17ld82****
   */
  cenId?: string;
  /**
   * @remarks
   * The region ID of the routing policy.
   * 
   * @example
   * cn-hangzhou
   */
  cenRegionId?: string;
  /**
   * @remarks
   * The match method that is used to evaluate routes based on the prefix. Valid values:
   * 
   * *   **Include**: fuzzy match. A route is a match if the route prefix is included in the match conditions.
   * 
   * For example, if you set the match condition to 10.10.0.0/16 and fuzzy match is applied, the route whose prefix is 10.10.1.0/24 meets the match condition.
   * 
   * *   **Complete**: exact match. A route is a match only if the route prefix is the same as the prefix specified in the match condition.
   * 
   * For example, if you set the match condition to 10.10.0.0/16 and exact match is enabled, a route is a match only if the prefix is 10.10.0.0/16.
   * 
   * @example
   * Include
   */
  cidrMatchMode?: string;
  /**
   * @remarks
   * The match method that is used to match routes against the community.
   * 
   * *   **Include**: fuzzy match. A route is a match if the community of the route overlaps with the community specified in the match condition.
   * *   **Complete**: exact match. A route meets the match condition only if the community of the route is the same as the community specified in the match condition.
   * 
   * @example
   * Include
   */
  communityMatchMode?: string;
  /**
   * @remarks
   * The action that is performed on the community of the route.
   * 
   * *   **Additive**: adds the community to the route.
   * *   **Replace**: replaces the original community of the route.
   * 
   * This parameter specifies the action to be performed when a route meets the match condition.
   * 
   * @example
   * Additive
   */
  communityOperateMode?: string;
  /**
   * @remarks
   * The description of the routing policy.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The types of destination network instances to which the routes belong.
   * 
   * *   **VPC**
   * *   **VBR**
   * *   **CCN**
   * *   **VPN**
   * 
   * >  The destination route tables take effect only if the routing policy is applied to the egress gateway direction, and the type of the destination route tables is the same as that of the network instance in the current region.
   */
  destinationChildInstanceTypes?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationChildInstanceTypes;
  /**
   * @remarks
   * The prefix list against which routes are matched.
   * 
   * IPv4 and IPv6 addresses are supported.
   */
  destinationCidrBlocks?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationCidrBlocks;
  /**
   * @remarks
   * The IDs of the destination network instances to which the routes point.
   * 
   * >  The destination route tables take effect only if the routing policy is applied to the egress gateway direction, and the ID the destination instance is the same as that of the network instance in the current region.
   */
  destinationInstanceIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationInstanceIds;
  /**
   * @remarks
   * Indicates whether the destination network instance IDs are excluded.
   * 
   * *   **false** (default): A route is a match if its destination network instance ID is in the list specified by **DestinationInstanceIds.N**.
   * *   **true**: A route is a match if its destination network instance ID is not in the list specified by **DestinationInstanceIds.N**.
   * 
   * @example
   * false
   */
  destinationInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The IDs of the destination regions for the routing policy.
   */
  destinationRegionIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRegionIds;
  /**
   * @remarks
   * The IDs of the destination route tables to which the routes belong. You can enter at most 32 route table IDs.
   * 
   * >  The destination route tables take effect only if the routing policy is applied to the egress gateway direction, and the destination route table IDs are in the current region.
   */
  destinationRouteTableIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRouteTableIds;
  /**
   * @remarks
   * The action performed on a route that meets the match conditions.
   * 
   * *   **Permit**: the route is permitted.
   * *   **Deny**: the route is denied.
   * 
   * @example
   * Deny
   */
  mapResult?: string;
  /**
   * @remarks
   * The type of IP address to be matched against the match condition. Valid values:
   * 
   * *   **IPv4**: IPv4 addresses
   * *   **IPv6**: IPv6 addresses
   * *   If no value is returned, both IPv4 and IPv6 addresses are matched against the match condition.
   * 
   * @example
   * IPv4
   */
  matchAddressType?: string;
  /**
   * @remarks
   * The AS paths against which routes are matched.
   */
  matchAsns?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchAsns;
  /**
   * @remarks
   * The community set against which routes are matched.
   */
  matchCommunitySet?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapMatchCommunitySet;
  /**
   * @remarks
   * The priority of the routing policy that you want to associate with the current one.
   * 
   * @example
   * 33
   */
  nextPriority?: number;
  /**
   * @remarks
   * The community set on which actions are performed.
   */
  operateCommunitySet?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapOperateCommunitySet;
  /**
   * @remarks
   * The new priority of the route.
   * 
   * A smaller value indicates a higher priority.
   * 
   * This parameter indicates the action to be performed when a route meets the match condition.
   * 
   * @example
   * 20
   */
  preference?: number;
  /**
   * @remarks
   * The AS paths that are prepended by using an action statement when regional gateways receive or advertise routes.
   * 
   * This parameter indicates the action to be performed when a route meets the match condition.
   */
  prependAsPath?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapPrependAsPath;
  /**
   * @remarks
   * The priority of the routing policy. A smaller value indicates a higher priority.
   * 
   * @example
   * 5000
   */
  priority?: number;
  /**
   * @remarks
   * The routing policy ID.
   * 
   * @example
   * cenrmap-y40mxdvf7joc12****
   */
  routeMapId?: string;
  /**
   * @remarks
   * The type of route that is compared. Valid values:
   * 
   * *   **System**: system routes that are automatically generated by the system.
   * *   **Custom**: custom routes that are manually added.
   * *   **BGP**: routes that are advertised over BGP.
   */
  routeTypes?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapRouteTypes;
  /**
   * @remarks
   * The types of source network instances to which the routes belong.
   * 
   * *   **VPC**
   * *   **VBR**
   * *   **CCN**
   * *   **VPN**
   */
  sourceChildInstanceTypes?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceChildInstanceTypes;
  /**
   * @remarks
   * The IDs of the source network instances to which the routes belong.
   */
  sourceInstanceIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceInstanceIds;
  /**
   * @remarks
   * Indicates whether the source network instance IDs are excluded.
   * 
   * *   **false** (default): A route is a match if its source network instance ID is in the list specified by **SourceInstanceIds.N**.
   * *   **true**: A route is match if its source network instance ID is not in the list specified by **SourceInstanceIds.N**.
   * 
   * @example
   * false
   */
  sourceInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The IDs of the source regions to which the routes belong.
   */
  sourceRegionIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRegionIds;
  /**
   * @remarks
   * The IDs of the source route tables to which the routes belong.
   */
  sourceRouteTableIds?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMapSourceRouteTableIds;
  /**
   * @remarks
   * The status of the routing policy. Valid values:
   * 
   * *   **Creating**
   * *   **Active**
   * *   **Deleting**
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The route table ID of the transit router with which the routing policy is associated.
   * 
   * @example
   * vtb-gw8nx3515m1mbd1z1****
   */
  transitRouterRouteTableId?: string;
  /**
   * @remarks
   * The direction in which the routing policy is applied.
   * 
   * @example
   * RegionOut
   */
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
  /**
   * @remarks
   * The information about the routing policy.
   */
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

