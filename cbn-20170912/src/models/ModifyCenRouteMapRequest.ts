// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCenRouteMapRequest extends $dara.Model {
  /**
   * @remarks
   * The match mode of the AS path list. Valid values:
   * 
   * - **Include**: fuzzy match. A match is successful if the AS path in the match condition overlaps with the AS path of the route to be matched. 
   * 
   * - **Complete**: exact match. A match is successful only if the AS path in the match condition is the same as the AS path of the route to be matched.
   * 
   * @example
   * Include
   */
  asPathMatchMode?: string;
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the region where the routing policy is applied.
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
   * - **Include**: fuzzy match. A match is successful if the route prefix in the match condition contains the route prefix of the route to be matched.
   * 
   *  For example, a policy that defines 10.10.0.0/16 can fuzzy match the route 10.10.1.0/24.
   * 
   * - **Complete**: exact match. A match is successful only if the route prefix in the match condition is the same as the route prefix of the route to be matched. 
   * 
   *  For example, a policy that defines 10.10.0.0/16 can exact match only the route 10.10.0.0/16.
   * 
   * @example
   * Include
   */
  cidrMatchMode?: string;
  /**
   * @remarks
   * The match mode of the Community. Valid values:
   * 
   * - **Include**: fuzzy match. A match is successful if the Community in the match condition overlaps with the Community of the route to be matched. 
   * 
   * - **Complete**: exact match. A match is successful only if the Community in the match condition is the same as the Community of the route to be matched.
   * 
   * - **Contain**: contains match. A match is successful only if the Community of the route to be matched contains all the Communities specified in the match condition.
   * 
   * @example
   * Include
   */
  communityMatchMode?: string;
  /**
   * @remarks
   * The action to perform on the Community. Valid values:
   * 
   * - **Additive**: adds the Community to the route.
   * 
   * - **Replace**: replaces the original Community of the route.
   * 
   * This parameter specifies the action to perform on a route after the route matches the match conditions.
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
   *     > If the IPsec connection or SSL server is bound to a VPN gateway instance and is connected to a transit router instance through the VPC associated with the VPN gateway instance, this parameter does not take effect. This parameter takes effect only when the IPsec connection is directly bound to a transit router instance.
   * 
   * The destination instance type list takes effect only when the direction of the routing policy is Export from Regional Gateway and the destination instance types are instance types in the local region.
   * 
   * @example
   * VPC
   */
  destinationChildInstanceTypes?: string[];
  /**
   * @remarks
   * The prefix list that the route must match.
   * 
   * IP address ranges in the prefix list are in CIDR format. A maximum of 64 IP address ranges can be specified.
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
   * A maximum of 64 instance IDs can be specified.
   * 
   * > The destination instance ID list takes effect only when the direction of the routing policy is Export from Regional Gateway and the destination instance IDs are in the local region.
   * 
   * @example
   * vpc-avcdsg34ds****
   */
  destinationInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to use the reverse match mode for the destination instance ID list. Valid values:
   * 
   * - **false** (default): No. A match is successful if the destination instance ID of the route is in **DestinationInstanceIds.N**.
   * 
   * - **true**: Yes. A match is successful if the destination instance ID of the route is not in **DestinationInstanceIds.N**.
   * 
   * @example
   * false
   */
  destinationInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The list of destination region IDs that the route must match. A maximum of 64 region IDs can be specified.
   */
  destinationRegionIds?: string[];
  /**
   * @remarks
   * The list of destination route table IDs that the route must match. A maximum of 64 route table IDs can be specified.
   * 
   * > The destination route table ID list takes effect only when the direction of the routing policy is Export from Regional Gateway and the destination route table IDs are route table IDs of network instances in the local region.
   * 
   * @example
   * vtb-adfg53c322v****
   */
  destinationRouteTableIds?: string[];
  /**
   * @remarks
   * The action to perform on a route that matches all the match conditions. Valid values:
   * 
   * - **Permit**: The route is permitted to pass.
   * 
   * - **Deny**: The route is denied from passing.
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
   * > Only AS SEQUENCE is supported. AS SET, AS CONFED SEQUENCE, and AS CONFED SET are not supported. Specifically, only AS number lists are supported. Sets and sublists are not supported.
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
   * A maximum of 64 Communities can be specified.
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
   * - You can set policy priority of the next associated routing policy only when **MapResult** is set to **Permit**. Only routes that are permitted to pass continue to match the next associated routing policy.
   * - The next associated routing policy must have the same region and direction as the current routing policy.
   * - Policy priority of the next associated routing policy must be lower than (a number greater than) policy priority of the current routing policy.
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
   * A maximum of 32 Communities can be specified.
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
   * The priority of the route to be modified.
   * 
   * Valid values: **1** to **100**. The default priority of a route is **50**. A smaller value indicates a higher priority.
   * 
   * This parameter specifies the action to perform on a route after the route matches the match conditions.
   * 
   * @example
   * 22
   */
  preference?: number;
  /**
   * @remarks
   * The AS path that is prepended when the regional gateway receives or publishes route entries.
   * 
   * The requirements for configuring the prepended AS path vary based on the direction of the routing policy:
   * 
   * - When configuring the prepended AS path for the Import to Regional Gateway direction, you must configure the source instance ID list and source region in the match conditions, and the source region must be the same as the region where the routing policy is applied.
   * 
   * - When configuring the prepended AS path for the Export from Regional Gateway direction, you must configure the destination instance ID list in the match conditions.
   * 
   * 
   * This parameter specifies the action to execute on a route after the route matches the match conditions.
   * 
   * @example
   * 65501
   */
  prependAsPath?: number[];
  /**
   * @remarks
   * Policy priority of the routing policy. Valid values: **1** to **100**. A smaller value indicates a higher priority.
   * 
   * > Policy priority of routing policies in the same region and with the same direction must be unique. When the system executes routing policies, it starts matching conditional statements from the routing policy with the smallest priority number. Specify policy priority based on the expected matching order.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  priority?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cenrmap-abcdedfghij****
   */
  routeMapId?: string;
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
   * - **VBR**: border router instance.
   * 
   * - **CCN**: CCN instance.
   * 
   * - **VPN**: VPN gateway instance or IPsec connection.
   *     
   *     - If the IPsec connection or SSL server is attached to a VPN gateway instance, the VPC associated with the VPN gateway instance must be connected to a transit router instance, and the VPN gateway instance must run the BGP dynamic routing protocol for this parameter to take effect.
   *     - If the IPsec connection is directly attached to a transit router instance, this parameter takes effect.
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
   * A maximum of 64 instance IDs can be specified.
   * 
   * @example
   * vpc-afsfdf5435vcvc****
   */
  sourceInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to use the reverse match mode for the source instance ID list. Valid values:
   * 
   * - **false** (default): No. A match is successful if the source instance ID of the route is in **SourceInstanceIds.N**.
   * 
   * - **true**: Yes. A match is successful if the source instance ID of the route is not in **SourceInstanceIds.N**.
   * 
   * @example
   * false
   */
  sourceInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The list of source region IDs that the route must match. A maximum of 64 region IDs can be specified.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionIds?: string[];
  /**
   * @remarks
   * The list of source route table IDs that the route must match. A maximum of 64 route table IDs can be specified.
   * 
   * @example
   * vtb-acdbvtbr342cd****
   */
  sourceRouteTableIds?: string[];
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
      routeMapId: 'RouteMapId',
      routeTypes: 'RouteTypes',
      sourceChildInstanceTypes: 'SourceChildInstanceTypes',
      sourceInstanceIds: 'SourceInstanceIds',
      sourceInstanceIdsReverseMatch: 'SourceInstanceIdsReverseMatch',
      sourceRegionIds: 'SourceRegionIds',
      sourceRouteTableIds: 'SourceRouteTableIds',
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
      routeMapId: 'string',
      routeTypes: { 'type': 'array', 'itemType': 'string' },
      sourceChildInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIds: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIdsReverseMatch: 'boolean',
      sourceRegionIds: { 'type': 'array', 'itemType': 'string' },
      sourceRouteTableIds: { 'type': 'array', 'itemType': 'string' },
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

