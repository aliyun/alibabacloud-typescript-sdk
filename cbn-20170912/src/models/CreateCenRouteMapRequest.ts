// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenRouteMapRequest extends $dara.Model {
  /**
   * @remarks
   * The match mode of the AS path list. Valid values:
   * 
   * - **Include**: fuzzy match. A route meets the match condition if the AS path in the match condition overlaps with the AS path of the route. 
   * 
   * - **Complete**: exact match. A route meets the match condition only if the AS path in the match condition is exactly the same as the AS path of the route.
   * 
   * @example
   * Include
   */
  asPathMatchMode?: string;
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the region where the route map is applied.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  cenRegionId?: string;
  /**
   * @remarks
   * The match mode of the prefix list. Valid values:
   * 
   * - **Include**: fuzzy match. A route meets the match condition if the route prefix in the match condition contains the prefix of the route.
   * 
   *  For example, if the match condition is 10.10.0.0/16, a route with the prefix 10.10.1.0/24 meets the condition.
   * 
   * - **Complete**: exact match. A route meets the match condition only if the route prefix in the match condition is exactly the same as the prefix of the route. 
   * 
   *  For example, if the match condition is 10.10.0.0/16, only a route with the prefix 10.10.0.0/16 meets the condition.
   * 
   * @example
   * Include
   */
  cidrMatchMode?: string;
  /**
   * @remarks
   * The match mode of the community. Valid values:
   * 
   * - **Include**: fuzzy match. A route meets the match condition if the community in the match condition overlaps with the community of the route. 
   * 
   * - **Complete**: exact match. A route meets the match condition only if the community in the match condition is exactly the same as the community of the route.
   * 
   * - **Contain**: contain match. A route meets the match condition only if the community of the route contains all communities specified in the match condition.
   * 
   * @example
   * Include
   */
  communityMatchMode?: string;
  /**
   * @remarks
   * The action mode of the community. Valid values:
   * 
   * - **Additive**: adds a community to the route.
   * 
   * - **Replace**: replaces the existing community of the route.
   * 
   * This parameter specifies the action to be performed after a route meets the match conditions.
   * 
   * @example
   * Additive
   */
  communityOperateMode?: string;
  /**
   * @remarks
   * The description of the route map. The description must be 1 to 256 characters in length, and cannot start with http:// or https://. The description can be left empty.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The list of destination instance types to be matched. The following instance types are supported:
   * 
   * - **VPC**: VPC instance.
   * 
   * - **VBR**: VBR instance.
   * 
   * - **CCN**: CCN instance.
   * 
   * - **VPN**: IPsec connection.
   * 
   *     > If an IPsec connection or SSL server is associated with a VPN gateway instance and connected to a transit router instance through the VPC associated with the VPN gateway instance, this parameter does not take effect. This parameter takes effect only when an IPsec connection is directly associated with a transit router instance.
   * 
   * You can enter multiple instance types.
   * 
   * > The destination instance type list takes effect only when the application direction of the route map is set to RegionOut and the destination instance types are the types of instances in the local region.
   * 
   * @example
   * VPC
   */
  destinationChildInstanceTypes?: string[];
  /**
   * @remarks
   * The prefix list to be matched.
   * 
   * The CIDR blocks in the prefix list must be in CIDR format. You can enter up to 64 CIDR blocks.
   * 
   * Both IPv4 and IPv6 formats are supported.
   * 
   * @example
   * 10.10.10.0/24
   */
  destinationCidrBlocks?: string[];
  /**
   * @remarks
   * The list of destination instance IDs to be matched. You can enter the IDs of the following types of instances:
   * 
   * - Virtual Private Cloud (VPC) instance IDs
   * - Virtual Border Router (VBR) instance IDs
   * - Cloud Connect Network (CCN) instance IDs
   * - Smart Access Gateway (SAG) instance IDs
   * - IPsec connection IDs
   * 
   * You can enter up to 64 instance IDs.
   * 
   * > The destination instance ID list takes effect only when the application direction of the route map is set to RegionOut and the destination instance IDs are the IDs of instances in the local region.
   * 
   * @example
   * vpc-afrfs434465fdf****
   */
  destinationInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to use the exclude match mode for the destination instance ID list. Valid values:
   * 
   * - **false** (default): no. A route meets the match condition if the destination instance ID of the route is in **DestinationInstanceIds.N**.
   * 
   * - **true**: yes. A route meets the match condition if the destination instance ID of the route is not in **DestinationInstanceIds.N**.
   * 
   * @example
   * false
   */
  destinationInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The list of destination region IDs to be matched. You can enter up to 64 region IDs.
   */
  destinationRegionIds?: string[];
  /**
   * @remarks
   * The list of destination route table IDs to be matched. You can enter up to 64 route table IDs.
   * 
   * > The destination route table ID list takes effect only when the application direction of the route map is set to RegionOut and the destination route table IDs are the IDs of route tables of network instances in the local region.
   * 
   * @example
   * vtb-adefrgtr144vf****
   */
  destinationRouteTableIds?: string[];
  /**
   * @remarks
   * The action to be performed when a route meets all match conditions. Valid values:
   * 
   * - **Permit**: permits the matched route.
   * 
   * - **Deny**: denies the matched route.
   * 
   * This parameter is required.
   * 
   * @example
   * Permit
   */
  mapResult?: string;
  /**
   * @remarks
   * The IP address type of the routes to be matched. Valid values:
   * 
   * - **IPv4**: matches only IPv4 routes.
   * - **IPv6**: matches only IPv6 routes.
   * 
   * If this parameter is left empty, all types of routes are matched.
   * 
   * @example
   * IPv4
   */
  matchAddressType?: string;
  /**
   * @remarks
   * The AS path list to be matched.
   * 
   * You can enter up to 64 AS numbers.
   * 
   * > Only AS SEQUENCE is supported. AS SET, AS CONFED SEQUENCE, and AS CONFED SET are not supported. This means only AS number lists are supported, and sets and sub-lists are not supported.
   * 
   * @example
   * 65501
   */
  matchAsns?: number[];
  /**
   * @remarks
   * The community set to be matched.
   * 
   * Each community must be in the format of n:m, where n and m are integers from **1** to **65535**. Communities must comply with RFC 1997. Large communities (RFC 8092) are not supported.
   * 
   * You can enter up to 64 communities.
   * 
   * > Incorrect community configurations may prevent routes from being advertised to the on-premises data center.
   * 
   * @example
   * 65501:1
   */
  matchCommunitySet?: string[];
  /**
   * @remarks
   * Policy priority of the next route map to be associated.
   * 
   * - You can set this parameter only when **MapResult** is set to **Permit**. Only permitted routes are matched against the next associated route map.
   * - The next route map to be associated must be applied to the same region and in the same direction as the current route map.
   * - Policy priority of the next route map to be associated must be lower than that of the current route map.
   * 
   * @example
   * 20
   */
  nextPriority?: number;
  /**
   * @remarks
   * The community set to be operated.
   * 
   * Each community must be in the format of n:m, where n and m are integers from **1** to **65535**. Communities must comply with RFC 1997. Large communities (RFC 8092) are not supported.
   * 
   * You can enter up to 32 communities.
   * 
   * > Incorrect community configurations may prevent routes from being advertised to the on-premises data center.
   * 
   * @example
   * 65501:1
   */
  operateCommunitySet?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority of the route to be modified.
   * 
   * Valid values: **1** to **100**. The default priority of a route is **50**. A smaller value indicates a higher priority.
   * 
   * This parameter specifies the action to be performed after a route meets the match conditions.
   * 
   * @example
   * 50
   */
  preference?: number;
  /**
   * @remarks
   * The AS path to be prepended when the regional gateway receives or performs publish route entry.
   * 
   * The requirements for configuring the prepended AS path vary based on the application direction of the policy:
   * 
   * - If the application direction is RegionIn, you must configure the source instance ID list and source region in the match conditions, and the source region must be the same as the region where the policy is applied.
   * 
   * - If the application direction is RegionOut, you must configure the destination instance ID list in the match conditions.
   * 
   * 
   * This parameter specifies the action to be executed after routing meets the match conditions. You can enter up to 32 AS numbers.
   * 
   * @example
   * 65501
   */
  prependAsPath?: number[];
  /**
   * @remarks
   * The policy priority of the route map. Valid values: **1** to **100**. A smaller value indicates a higher priority.
   * 
   * > The policy priority of each route map applied to the same region in the same direction must be unique. When the policy is executed, the system matches routing against the conditional statements of the policy with the smallest priority value first. Therefore, specify the policy priority based on the expected match order.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  priority?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of route types to be matched. The following route types are supported:
   * 
   * - **System**: system routing, which is automatically generated by the system.
   * 
   * - **Custom**: custom routing, which is manually added by a user.
   * 
   * - **BGP**: BGP routing, which is propagated through the BGP routable protocol.
   * 
   * You can enter multiple route types.
   * 
   * @example
   * System
   */
  routeTypes?: string[];
  /**
   * @remarks
   * The list of source instance types to be matched. The following instance types are supported:
   * 
   * - **VPC**: VPC instance.
   * 
   * - **VBR**: border router instance.
   * 
   * - **CCN**: CCN instance.
   * 
   * - **VPN**: VPN gateway instance or IPsec connection.
   * 
   *     - If an IPsec connection or SSL server is attached to a VPN gateway instance, the VPC associated with the VPN gateway instance must be connected to a forward router instance, and the VPN gateway instance must run the BGP dynamic routing routable protocol for this parameter to take effect.
   *     - If an IPsec connection is directly attached to a forward router instance, this parameter takes effect.
   * 
   * You can enter multiple instance types.
   * 
   * @example
   * VPC
   */
  sourceChildInstanceTypes?: string[];
  /**
   * @remarks
   * The list of source instance IDs to be matched. You can enter the IDs of the following types of instances:
   * 
   * - Virtual Private Cloud (VPC) instance IDs
   * - Virtual Border Router (VBR) instance IDs
   * - Cloud Connect Network (CCN) instance IDs
   * - Smart Access Gateway (SAG) instance IDs
   * - IPsec connection IDs
   * 
   * You can enter up to 64 instance IDs.
   * 
   * @example
   * vpc-adeg3544fdf34vf****
   */
  sourceInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to use the exclude match mode for the source instance ID list. Valid values:
   * 
   * - **false** (default): no. A route meets the match condition if the source instance ID of the route is in **SourceInstanceIds.N**.
   * 
   * - **true**: yes. A route meets the match condition if the source instance ID of the route is not in **SourceInstanceIds.N**.
   * 
   * @example
   * false
   */
  sourceInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The list of source region IDs to be matched. You can enter up to 64 region IDs.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionIds?: string[];
  /**
   * @remarks
   * The list of source route table IDs to be matched. You can enter up to 64 route table IDs.
   * 
   * @example
   * vtb-adfr233vf34rvd4****
   */
  sourceRouteTableIds?: string[];
  /**
   * @remarks
   * The ID of the route table of the transit router.
   * 
   * If you do not specify a route table ID, the route map is automatically associated with the default route table of the transit router.
   * 
   * @example
   * vtb-gw8nx3515m1mbd1z1****
   */
  transitRouterRouteTableId?: string;
  /**
   * @remarks
   * The application direction of the route map. Valid values:
   * 
   * - **RegionIn**: the direction in which routes are transmitted to the regional gateway of the CEN instance. For example, routes are advertised from a network instance in a region to the regional gateway in the same region, or routes are advertised from another region to the regional gateway.
   * 
   * - **RegionOut**: the direction in which routes are transmitted from the regional gateway of the CEN instance. For example, routes are advertised from the regional gateway to a network instance in the same region, or to a regional gateway in another region.
   * 
   * This parameter is required.
   * 
   * @example
   * RegionIn
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preference: 'Preference',
      prependAsPath: 'PrependAsPath',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTypes: 'RouteTypes',
      sourceChildInstanceTypes: 'SourceChildInstanceTypes',
      sourceInstanceIds: 'SourceInstanceIds',
      sourceInstanceIdsReverseMatch: 'SourceInstanceIdsReverseMatch',
      sourceRegionIds: 'SourceRegionIds',
      sourceRouteTableIds: 'SourceRouteTableIds',
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
      destinationChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      destinationCidrBlocks: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIds: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIdsReverseMatch: 'boolean',
      destinationRegionIds: { 'type': 'array', 'itemType': 'string' },
      destinationRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      mapResult: 'string',
      matchAddressType: 'string',
      matchAsns: { 'type': 'array', 'itemType': 'number' },
      matchCommunitySet: { 'type': 'array', 'itemType': 'string' },
      nextPriority: 'number',
      operateCommunitySet: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      preference: 'number',
      prependAsPath: { 'type': 'array', 'itemType': 'number' },
      priority: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTypes: { 'type': 'array', 'itemType': 'string' },
      sourceChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIds: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIdsReverseMatch: 'boolean',
      sourceRegionIds: { 'type': 'array', 'itemType': 'string' },
      sourceRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteTableId: 'string',
      transmitDirection: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationChildInstanceTypes)) {
      $dara.Model.validateArray(this.destinationChildInstanceTypes);
    }
    if(Array.isArray(this.destinationCidrBlocks)) {
      $dara.Model.validateArray(this.destinationCidrBlocks);
    }
    if(Array.isArray(this.destinationInstanceIds)) {
      $dara.Model.validateArray(this.destinationInstanceIds);
    }
    if(Array.isArray(this.destinationRegionIds)) {
      $dara.Model.validateArray(this.destinationRegionIds);
    }
    if(Array.isArray(this.destinationRouteTableIds)) {
      $dara.Model.validateArray(this.destinationRouteTableIds);
    }
    if(Array.isArray(this.matchAsns)) {
      $dara.Model.validateArray(this.matchAsns);
    }
    if(Array.isArray(this.matchCommunitySet)) {
      $dara.Model.validateArray(this.matchCommunitySet);
    }
    if(Array.isArray(this.operateCommunitySet)) {
      $dara.Model.validateArray(this.operateCommunitySet);
    }
    if(Array.isArray(this.prependAsPath)) {
      $dara.Model.validateArray(this.prependAsPath);
    }
    if(Array.isArray(this.routeTypes)) {
      $dara.Model.validateArray(this.routeTypes);
    }
    if(Array.isArray(this.sourceChildInstanceTypes)) {
      $dara.Model.validateArray(this.sourceChildInstanceTypes);
    }
    if(Array.isArray(this.sourceInstanceIds)) {
      $dara.Model.validateArray(this.sourceInstanceIds);
    }
    if(Array.isArray(this.sourceRegionIds)) {
      $dara.Model.validateArray(this.sourceRegionIds);
    }
    if(Array.isArray(this.sourceRouteTableIds)) {
      $dara.Model.validateArray(this.sourceRouteTableIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

