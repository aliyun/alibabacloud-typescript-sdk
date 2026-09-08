// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenRouteMapRequest extends $dara.Model {
  /**
   * @remarks
   * The match mode of the AS path list. Valid values:
   * 
   * - **Include**: fuzzy match. A match is successful if the AS path in the match condition overlaps with the AS path of the route being matched. 
   * 
   * - **Complete**: exact match. A match is successful only if the AS path in the match condition is the same as the AS path of the route being matched.
   * 
   * @example
   * Include
   */
  asPathMatchMode?: string;
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN).
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the region to which the routing policy is applied.
   * 
   * You can call [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) to query region IDs.
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
   * - **Include**: fuzzy match. A match is successful if the route prefix in the match condition contains the route prefix of the route being matched.
   * 
   *  For example, a policy that defines 10.10.0.0/16 can fuzzy match the route 10.10.1.0/24.
   * 
   * - **Complete**: exact match. A match is successful only if the route prefix in the match condition is the same as the route prefix of the route being matched. 
   * 
   *  For example, a policy that defines 10.10.0.0/16 can only exact match the route 10.10.0.0/16.
   * 
   * @example
   * Include
   */
  cidrMatchMode?: string;
  /**
   * @remarks
   * The match mode of the Community. Valid values:
   * 
   * - **Include**: fuzzy match. A match is successful if the Community in the match condition overlaps with the Community of the route being matched. 
   * 
   * - **Complete**: exact match. A match is successful only if the Community in the match condition is the same as the Community of the route being matched.
   * 
   * - **Contain**: inclusive match. A match is successful only if the Community of the route being matched contains all the Communities specified in the match condition.
   * 
   * @example
   * Include
   */
  communityMatchMode?: string;
  /**
   * @remarks
   * The action to perform on the Community. Valid values:
   * 
   * - **Additive**: adds a Community to the route.
   * 
   * - **Replace**: replaces the existing Community of the route.
   * 
   * This parameter specifies the action to perform after a route matches the condition.
   * 
   * @example
   * Additive
   */
  communityOperateMode?: string;
  /**
   * @remarks
   * The description of the routing policy.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The list of destination instance types that the route must match. The following instance types are supported:
   * 
   * - **VPC**: VPC instance.
   * 
   * - **VBR**: VBR instance.
   * 
   * - **CCN**: CCN instance.
   * 
   * - **VPN**: IPsec connection.
   * 
   *     > If an IPsec connection or SSL server is bound to a VPN gateway instance and is connected to a transit router instance through the VPC associated with the VPN gateway instance, this parameter does not take effect. This parameter takes effect only when an IPsec connection is directly bound to a transit router instance.
   * 
   * You can specify multiple instance types.
   * 
   * >The destination instance type list takes effect only when the routing policy direction is outbound from the regional gateway and the destination instance types are instance types in the local region.
   * 
   * @example
   * VPC
   */
  destinationChildInstanceTypes?: string[];
  /**
   * @remarks
   * The prefix list that the route must match.
   * 
   * IP address ranges in the prefix list are in CIDR format. You can specify up to 64 IP address ranges.
   * 
   * Both IPv4 and IPv6 formats are supported.
   * 
   * @example
   * 10.10.10.0/24
   */
  destinationCidrBlocks?: string[];
  /**
   * @remarks
   * The list of destination instance IDs that the route must match. The following types of instance IDs are supported:
   * 
   * - Virtual Private Cloud (VPC) instance ID
   * - Virtual Border Router (VBR) instance ID
   * - Cloud Connect Network (CCN) instance ID
   * - Smart Access Gateway instance ID
   * - IPsec connection ID
   * 
   * You can specify up to 64 instance IDs.
   * 
   * >The destination instance ID list takes effect only when the routing policy direction is outbound from the regional gateway and the destination instance IDs are instance IDs in the local region.
   * 
   * @example
   * vpc-afrfs434465fdf****
   */
  destinationInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to use the exclude matching mode for the destination instance ID list. Valid values:
   * 
   * - **false** (default): no. A match is successful if the destination instance ID of the route is in the **DestinationInstanceIds.N** list.
   * 
   * - **true**: yes. A match is successful if the destination instance ID of the route is not in the **DestinationInstanceIds.N** list.
   * 
   * @example
   * false
   */
  destinationInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The list of destination region IDs that the route must match. You can specify up to 64 region IDs.
   */
  destinationRegionIds?: string[];
  /**
   * @remarks
   * The list of destination route table IDs that the route must match. You can specify up to 64 route table IDs.
   * 
   * >The destination route table ID list takes effect only when the routing policy direction is outbound from the regional gateway and the destination route table IDs are route table IDs of network instances in the local region.
   * 
   * @example
   * vtb-adefrgtr144vf****
   */
  destinationRouteTableIds?: string[];
  /**
   * @remarks
   * The action to perform after all conditions are matched. Valid values:
   * 
   * - **Permit**: permits the matched routes.
   * 
   * - **Deny**: denies the matched routes.
   * 
   * This parameter is required.
   * 
   * @example
   * Permit
   */
  mapResult?: string;
  /**
   * @remarks
   * The IP address type that the route must match. Valid values:
   * 
   * - **IPv4**: matches only IPv4 routes.
   * - **IPv6**: matches only IPv6 routes.
   * 
   * This parameter can be left empty, which indicates that all types of routes are matched.
   * 
   * @example
   * IPv4
   */
  matchAddressType?: string;
  /**
   * @remarks
   * The AS path list that the route must match.
   * 
   * You can specify up to 64 AS numbers.
   * 
   * > Only AS SEQUENCE is supported. AS SET, AS CONFED SEQUENCE, and AS CONFED SET are not supported. This means that only AS number lists are supported, not sets or sublists.
   * 
   * @example
   * 65501
   */
  matchAsns?: number[];
  /**
   * @remarks
   * The Community set that the route must match.
   * 
   * Each Community is in the n:m format, where the value ranges of n and m are **1** to **65535**. Communities must comply with RFC 1997. Large Communities (RFC 8092) are not supported.
   * 
   * You can specify up to 64 Communities.
   * 
   * > Incorrect Community configurations may cause routes to fail to be advertised to on-premises data centers.
   * 
   * @example
   * 65501:1
   */
  matchCommunitySet?: string[];
  /**
   * @remarks
   * Policy priority of the next associated routing policy.
   * 
   * - You can set policy priority of the next associated routing policy only when **MapResult** is set to **Permit**. Only routes that are permitted continue to match the next associated routing policy.
   * - The next associated routing policy must have the same region and direction as the current routing policy.
   * - Policy priority of the next associated routing policy must be lower than policy priority of the current routing policy.
   * 
   * @example
   * 20
   */
  nextPriority?: number;
  /**
   * @remarks
   * The Community set to be executed.
   * 
   * Each Community is in the n:m format, where the value ranges of n and m are **1** to **65535**. Communities must comply with RFC 1997. Large Communities (RFC 8092) are not supported.
   * 
   * You can specify up to 32 Communities.
   * 
   * > Incorrect Community configurations may cause routes to fail to be advertised to on-premises data centers.
   * 
   * @example
   * 65501:1
   */
  operateCommunitySet?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The modified priority of the route.
   * 
   * Valid values: **1** to **100**. The default priority of a route is **50**. A smaller value indicates a higher priority.
   * 
   * This parameter specifies the action to perform after a route matches the condition.
   * 
   * @example
   * 50
   */
  preference?: number;
  /**
   * @remarks
   * The AS path that is prepended when the regional gateway receives or publishes route entries.
   * 
   * The requirements for configuring the prepended AS path vary based on the routing policy direction:
   * 
   * - When the direction is inbound to the regional gateway, the match condition must include the source instance ID list and source region, and the source region must be the same as the region to which the routing policy is applied.
   * 
   * - When the direction is outbound from the regional gateway, the match condition must include the destination instance ID list.
   * 
   * 
   * This parameter specifies the action to execute after a route matches the condition. You can specify up to 32 AS numbers.
   * 
   * @example
   * 65501
   */
  prependAsPath?: number[];
  /**
   * @remarks
   * Policy priority of the routing policy. Valid values: **1** to **100**. A smaller value indicates a higher priority.
   * 
   * > Policy priority of routing policies in the same region and with the same direction must be unique. When a routing policy is executed, the system starts matching conditional statements from the routing policy with the smallest priority value. Specify policy priority based on the expected matching order.
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
   * The list of routing types that the route must match. The following routing types are supported:
   * 
   * - **System**: system routes that are automatically generated by the system.
   * 
   * - **Custom**: custom routes that are manually added by users.
   * 
   * - **BGP**: BGP routes that are propagated through the BGP routing protocol.
   * 
   * You can specify multiple routing types.
   * 
   * @example
   * System
   */
  routeTypes?: string[];
  /**
   * @remarks
   * The list of source instance types that the route must match. The following instance types are supported:
   * 
   * - **VPC**: VPC instance.
   * 
   * - **VBR**: virtual border router instance.
   * 
   * - **CCN**: CCN instance.
   * 
   * - **VPN**: VPN gateway instance or IPsec connection.
   * 
   *     - If an IPsec connection or SSL server is attached to a VPN gateway instance, the VPC associated with the VPN gateway instance must be connected to a transit router instance, and the VPN gateway instance must run the BGP dynamic routing protocol for this parameter to take effect.
   *     - If an IPsec connection is directly attached to a transit router instance, this parameter takes effect.
   * 
   * You can specify multiple instance types.
   * 
   * @example
   * VPC
   */
  sourceChildInstanceTypes?: string[];
  /**
   * @remarks
   * The list of source instance IDs that the route must match. The following types of instance IDs are supported:
   * 
   * - Virtual Private Cloud (VPC) instance ID
   * - Virtual Border Router (VBR) instance ID
   * - Cloud Connect Network (CCN) instance ID
   * - Smart Access Gateway instance ID
   * - IPsec connection ID
   * 
   * You can specify up to 64 instance IDs.
   * 
   * @example
   * vpc-adeg3544fdf34vf****
   */
  sourceInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to use the exclude matching mode for the source instance ID list. Valid values:
   * 
   * - **false** (default): no. A match is successful if the source instance ID of the route is in the **SourceInstanceIds.N** list.
   * 
   * - **true**: yes. A match is successful if the source instance ID of the route is not in the **SourceInstanceIds.N** list.
   * 
   * @example
   * false
   */
  sourceInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The list of source region IDs that the route must match. You can specify up to 64 region IDs.
   * 
   * You can call [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) to query region IDs.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionIds?: string[];
  /**
   * @remarks
   * The list of source route table IDs that the route must match. You can specify up to 64 route table IDs.
   * 
   * @example
   * vtb-adfr233vf34rvd4****
   */
  sourceRouteTableIds?: string[];
  /**
   * @remarks
   * The route table ID of the transit router.
   * 
   * If you do not specify a route table ID, the routing policy is automatically associated with the default route table of the transit router.
   * 
   * @example
   * vtb-gw8nx3515m1mbd1z1****
   */
  transitRouterRouteTableId?: string;
  /**
   * @remarks
   * The direction in which the routing policy is applied. Valid values:
   * 
   * - **RegionIn**: the inbound direction of the regional gateway. Routes are transmitted to the CEN regional gateway.
   * 
   *  For example, a route is advertised from a network instance in the local region to the local regional gateway, or a route is advertised from another region to the local regional gateway.
   * 
   * - **RegionOut**: the outbound direction of the regional gateway. Routes are transmitted from the CEN regional gateway.
   * 
   *  For example, a route is advertised from the local regional gateway to a network instance in the local region, or to a regional gateway in another region.
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

