// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRouteMapRuleRequestMatchConditions extends $dara.Model {
  /**
   * @remarks
   * The route prefix list for fuzzy matching. You can specify up to 64 CIDR blocks.
   * 
   * A match is successful if the route prefix in the match condition contains the route prefix of the route being matched.
   * 
   * For example, a policy defined with 10.0.0.0/8 can fuzzy match the 10.10.10.0/24 route.
   * 
   * The CIDR blocks use the CIDR format and support both IPv4 and IPv6.
   * 
   * This parameter is mutually exclusive with **AddressPrefixesMatch**. You cannot specify both parameters at the same time.
   */
  addressPrefixesInclude?: string[];
  /**
   * @remarks
   * The route prefix list for exact matching. You can specify up to 64 CIDR blocks.
   * 
   * A match is successful only if the route prefix in the match condition is identical to the route prefix of the route being matched.
   * 
   * For example, a policy defined with 10.0.0.0/8 can exactly match only the 10.0.0.0/8 route.
   * 
   * The CIDR blocks use the CIDR format and support both IPv4 and IPv6.
   * 
   * This parameter is mutually exclusive with **AddressPrefixesInclude**. You cannot specify both parameters at the same time.
   */
  addressPrefixesMatch?: string[];
  /**
   * @remarks
   * The list of AS paths for fuzzy match. You can enter up to 64 AS numbers.
   * 
   * A route is considered a match if the AS path in the match condition overlaps with the AS path of the matched route.
   * 
   * This parameter is mutually exclusive with **AsPathsMatch** and cannot be specified at the same time.
   * 
   * > Only AS SEQUENCE is supported. AS SET, AS CONFED SEQUENCE, and AS CONFED SET are not supported. This means that only a list of AS numbers is supported, and sets and sublists are not supported.
   */
  asPathsInclude?: number[];
  /**
   * @remarks
   * The list of AS paths for exact match. You can enter up to 64 AS numbers.
   * 
   * A route is considered a match only when the AS path in the match condition is exactly the same as the AS path of the matched route.
   * 
   * This parameter is mutually exclusive with **AsPathsInclude** and cannot be specified at the same time.
   * 
   * > Only AS SEQUENCE is supported. AS SET, AS CONFED SEQUENCE, and AS CONFED SET are not supported. This means that only a list of AS numbers is supported, and sets and sublists are not supported.
   */
  asPathsMatch?: number[];
  /**
   * @remarks
   * The community set for fuzzy match. You can enter up to 64 communities.
   * 
   * A route is considered a match if the community in the match condition overlaps with the community of the matched route.
   * 
   * Each community is in the format of n:m, where n and m range from **1** to **65535**. The community must comply with RFC 1997. Large communities (RFC 8092) are not supported.
   * 
   * This parameter is mutually exclusive with **CommunitySetMatch** and cannot be specified at the same time.
   * 
   * > Incorrect community configurations may prevent routes from being advertised to the on-premises data center.
   */
  communitySetInclude?: string[];
  /**
   * @remarks
   * The community set for exact match. You can enter up to 64 communities.
   * 
   * A route is considered a match only when the community in the match condition is exactly the same as the community of the matched route.
   * 
   * Each community is in the format of n:m, where n and m range from **1** to **65535**. The community must comply with RFC 1997. Large communities (RFC 8092) are not supported.
   * 
   * This parameter is mutually exclusive with **CommunitySetInclude** and cannot be specified at the same time.
   * 
   * > Incorrect community configurations may prevent routes from being advertised to the on-premises data center.
   */
  communitySetMatch?: string[];
  /**
   * @remarks
   * The list of destination instance IDs to be matched. You can enter the following types of instance IDs:
   * 
   * - Virtual private cloud (VPC) instance IDs
   * - Virtual border router (VBR) instance IDs
   * 
   * You can enter up to 64 instance IDs.
   * 
   * > The list of destination instance IDs takes effect only when the direction of the route map is outbound.
   */
  destinationInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to use the exclusion match mode for the list of destination instance IDs. Valid values:
   * 
   * - **false** (default): no. A route is considered a match if the destination instance ID of the route is in **DestinationInstanceIds.N**.
   * 
   * - **true**: yes. A route is considered a match if the destination instance ID of the route is not in **DestinationInstanceIds.N**.
   * 
   * @example
   * false
   */
  destinationInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The list of destination instance types to be matched. The following instance types are supported:
   * 
   * - **VPC**: VPC instance.
   * 
   * - **VBR**: VBR instance.
   * 
   * 
   * You can enter multiple instance types.
   * 
   * > The list of destination instance types takes effect only when the direction of the route map is outbound.
   */
  destinationInstanceTypes?: string[];
  /**
   * @remarks
   * The list of destination region IDs to be matched. You can enter up to 64 region IDs.
   */
  destinationRegionIds?: string[];
  /**
   * @remarks
   * The list of destination route table IDs to be matched. You can enter up to 64 route table IDs.
   * 
   * > The list of destination route table IDs takes effect only when the direction of the route map is outbound.
   */
  destinationRouteTableIds?: string[];
  /**
   * @remarks
   * The IP address type of the routes to be matched. Valid values:
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
   * The list of route types to match. The following route types are supported:
   * 
   * - **System**: system route, which is automatically generated by the system.
   * 
   * - **Custom**: custom route, which is manually added by users.
   * 
   * - **BGP**: BGP route, which is propagated through the BGP routable protocol.
   * 
   * You can specify multiple route types.
   */
  routeTypes?: string[];
  /**
   * @remarks
   * The list of source instance IDs to be matched. You can enter the following types of instance IDs:
   * 
   * - Virtual private cloud (VPC) instance IDs
   * - Virtual border router (VBR) instance IDs
   * 
   * 
   * You can enter up to 64 instance IDs.
   */
  sourceInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to use the exclusion match mode for the list of source instance IDs. Valid values:
   * 
   * - **false** (default): no. A route is considered a match if the source instance ID of the route is in **SourceInstanceIds.N**.
   * 
   * - **true**: yes. A route is considered a match if the source instance ID of the route is not in **SourceInstanceIds.N**.
   * 
   * @example
   * false
   */
  sourceInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The list of source instance types to be matched. The following instance types are supported:
   * 
   * - **VPC**: VPC instance.
   * 
   * - **VBR**: VBR instance.
   * 
   * 
   * You can enter multiple instance types.
   */
  sourceInstanceTypes?: string[];
  /**
   * @remarks
   * The list of source region IDs to be matched. You can enter up to 64 region IDs.
   */
  sourceRegionIds?: string[];
  /**
   * @remarks
   * The list of source route table IDs to be matched. You can enter up to 64 route table IDs.
   */
  sourceRouteTableIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addressPrefixesInclude: 'AddressPrefixesInclude',
      addressPrefixesMatch: 'AddressPrefixesMatch',
      asPathsInclude: 'AsPathsInclude',
      asPathsMatch: 'AsPathsMatch',
      communitySetInclude: 'CommunitySetInclude',
      communitySetMatch: 'CommunitySetMatch',
      destinationInstanceIds: 'DestinationInstanceIds',
      destinationInstanceIdsReverseMatch: 'DestinationInstanceIdsReverseMatch',
      destinationInstanceTypes: 'DestinationInstanceTypes',
      destinationRegionIds: 'DestinationRegionIds',
      destinationRouteTableIds: 'DestinationRouteTableIds',
      matchAddressType: 'MatchAddressType',
      routeTypes: 'RouteTypes',
      sourceInstanceIds: 'SourceInstanceIds',
      sourceInstanceIdsReverseMatch: 'SourceInstanceIdsReverseMatch',
      sourceInstanceTypes: 'SourceInstanceTypes',
      sourceRegionIds: 'SourceRegionIds',
      sourceRouteTableIds: 'SourceRouteTableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPrefixesInclude: { 'type': 'array', 'itemType': 'string' },
      addressPrefixesMatch: { 'type': 'array', 'itemType': 'string' },
      asPathsInclude: { 'type': 'array', 'itemType': 'number' },
      asPathsMatch: { 'type': 'array', 'itemType': 'number' },
      communitySetInclude: { 'type': 'array', 'itemType': 'string' },
      communitySetMatch: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIds: { 'type': 'array', 'itemType': 'string' },
      destinationInstanceIdsReverseMatch: 'boolean',
      destinationInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      destinationRegionIds: { 'type': 'array', 'itemType': 'string' },
      destinationRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      matchAddressType: 'string',
      routeTypes: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIds: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceIdsReverseMatch: 'boolean',
      sourceInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      sourceRegionIds: { 'type': 'array', 'itemType': 'string' },
      sourceRouteTableIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addressPrefixesInclude)) {
      $dara.Model.validateArray(this.addressPrefixesInclude);
    }
    if(Array.isArray(this.addressPrefixesMatch)) {
      $dara.Model.validateArray(this.addressPrefixesMatch);
    }
    if(Array.isArray(this.asPathsInclude)) {
      $dara.Model.validateArray(this.asPathsInclude);
    }
    if(Array.isArray(this.asPathsMatch)) {
      $dara.Model.validateArray(this.asPathsMatch);
    }
    if(Array.isArray(this.communitySetInclude)) {
      $dara.Model.validateArray(this.communitySetInclude);
    }
    if(Array.isArray(this.communitySetMatch)) {
      $dara.Model.validateArray(this.communitySetMatch);
    }
    if(Array.isArray(this.destinationInstanceIds)) {
      $dara.Model.validateArray(this.destinationInstanceIds);
    }
    if(Array.isArray(this.destinationInstanceTypes)) {
      $dara.Model.validateArray(this.destinationInstanceTypes);
    }
    if(Array.isArray(this.destinationRegionIds)) {
      $dara.Model.validateArray(this.destinationRegionIds);
    }
    if(Array.isArray(this.destinationRouteTableIds)) {
      $dara.Model.validateArray(this.destinationRouteTableIds);
    }
    if(Array.isArray(this.routeTypes)) {
      $dara.Model.validateArray(this.routeTypes);
    }
    if(Array.isArray(this.sourceInstanceIds)) {
      $dara.Model.validateArray(this.sourceInstanceIds);
    }
    if(Array.isArray(this.sourceInstanceTypes)) {
      $dara.Model.validateArray(this.sourceInstanceTypes);
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

export class UpdateRouteMapRuleRequestSetActions extends $dara.Model {
  /**
   * @remarks
   * The AS path to prepend when the regional gateway accepts or executes a publish route entry.
   * 
   * This parameter is mutually exclusive with **AsPathReplace**. You cannot specify both parameters at the same time.
   * 
   * This parameter specifies the action to execute after a route meets the match conditions.
   */
  asPathPrepend?: number[];
  /**
   * @remarks
   * The AS path to use as a replacement when the regional gateway accepts or executes a publish route entry. The original AS path of the route is replaced with the list of AS numbers specified by this parameter.
   * 
   * This parameter is mutually exclusive with **AsPathPrepend**. You cannot specify both parameters at the same time.
   * 
   * This parameter specifies the action to execute after a route meets the match conditions.
   */
  asPathReplace?: number[];
  /**
   * @remarks
   * The community set to be added to the route.
   * 
   * Each community is in the format of n:m, where n and m range from **1** to **65535**. The community must comply with RFC 1997. Large communities (RFC 8092) are not supported.
   * 
   * This parameter is mutually exclusive with **CommunityReplace** and cannot be specified at the same time.
   * 
   * This parameter specifies the action to be performed after a route meets the match conditions.
   * 
   * > Incorrect community configurations may prevent routes from being advertised to the on-premises data center.
   */
  communityAdd?: string[];
  /**
   * @remarks
   * The community set used to replace the original community of the route.
   * 
   * Each community is in the format of n:m, where n and m range from **1** to **65535**. The community must comply with RFC 1997. Large communities (RFC 8092) are not supported.
   * 
   * This parameter is mutually exclusive with **CommunityAdd** and cannot be specified at the same time.
   * 
   * This parameter specifies the action to be performed after a route meets the match conditions.
   * 
   * > Incorrect community configurations may prevent routes from being advertised to the on-premises data center.
   */
  communityReplace?: string[];
  /**
   * @remarks
   * Policy priority of the associated next route map rule.
   * 
   * - You can set policy priority of the associated route map rule only when **RouteAction** is set to **Permit**. Only the permitted routes continue to match the associated next route map rule.
   * - Policy priority of the associated next route map rule must be lower than that of the current route map rule.
   * 
   * @example
   * 1
   */
  nextPriority?: number;
  /**
   * @remarks
   * The action to be performed after all conditions are met. Valid values:
   * 
   * - **Permit**: permits the matched route.
   * 
   * - **Deny**: denies the matched route.
   * 
   * @example
   * Permit
   */
  routeAction?: string;
  static names(): { [key: string]: string } {
    return {
      asPathPrepend: 'AsPathPrepend',
      asPathReplace: 'AsPathReplace',
      communityAdd: 'CommunityAdd',
      communityReplace: 'CommunityReplace',
      nextPriority: 'NextPriority',
      routeAction: 'RouteAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPathPrepend: { 'type': 'array', 'itemType': 'number' },
      asPathReplace: { 'type': 'array', 'itemType': 'number' },
      communityAdd: { 'type': 'array', 'itemType': 'string' },
      communityReplace: { 'type': 'array', 'itemType': 'string' },
      nextPriority: 'number',
      routeAction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.asPathPrepend)) {
      $dara.Model.validateArray(this.asPathPrepend);
    }
    if(Array.isArray(this.asPathReplace)) {
      $dara.Model.validateArray(this.asPathReplace);
    }
    if(Array.isArray(this.communityAdd)) {
      $dara.Model.validateArray(this.communityAdd);
    }
    if(Array.isArray(this.communityReplace)) {
      $dara.Model.validateArray(this.communityReplace);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRouteMapRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The detailed description of the rule. The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * Matches production prefixes from on-prem and sets a higher local preference.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to precheck only this request. Valid values:
   * 
   * - **true**: prechecks the request without updating the route map rule. The system checks whether required parameters are set, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. If the request passes the precheck, the route map rule is updated.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The match conditions of the route map rule. The system performs the actions defined in **SetActions** only when a route meets all the match conditions defined in this parameter.
   * 
   * **if can be null:**
   * false
   */
  matchConditions?: UpdateRouteMapRuleRequestMatchConditions;
  /**
   * @remarks
   * The name of the rule for easy identification. The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * Permit-Prod-Prefixes-Set-LP
   */
  name?: string;
  /**
   * @remarks
   * The priority of the rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the route map rule to be updated.
   * 
   * @example
   * rmr-0a1b2c3d4e5f6a7b8
   */
  routeMapRuleId?: string;
  /**
   * @remarks
   * The actions to be performed for the route map rule. After a route meets all the match conditions defined in **MatchConditions**, the system processes the route based on the actions defined in this parameter.
   * 
   * **if can be null:**
   * false
   */
  setActions?: UpdateRouteMapRuleRequestSetActions;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      matchConditions: 'MatchConditions',
      name: 'Name',
      priority: 'Priority',
      routeMapRuleId: 'RouteMapRuleId',
      setActions: 'SetActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      matchConditions: UpdateRouteMapRuleRequestMatchConditions,
      name: 'string',
      priority: 'number',
      routeMapRuleId: 'string',
      setActions: UpdateRouteMapRuleRequestSetActions,
    };
  }

  validate() {
    if(this.matchConditions && typeof (this.matchConditions as any).validate === 'function') {
      (this.matchConditions as any).validate();
    }
    if(this.setActions && typeof (this.setActions as any).validate === 'function') {
      (this.setActions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

