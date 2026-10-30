// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRouteMapRulesResponseBodyRouteMapRulesMatchConditions extends $dara.Model {
  /**
   * @remarks
   * The route prefix list for fuzzy matching.
   * 
   * A match succeeds if the route prefix in the match condition contains the route prefix of the matched route.
   * 
   * For example, a policy defined with 10.0.0.0/8 can fuzzy match a route with 10.10.10.0/24.
   * 
   * IP address ranges use the CIDR format. Both IPv4 and IPv6 are supported.
   * 
   * This parameter and **AddressPrefixesMatch** are mutually exclusive and cannot be specified at the same time.
   */
  addressPrefixesInclude?: string[];
  /**
   * @remarks
   * The route prefix list for exact matching.
   * 
   * A match succeeds only when the route prefix in the match condition is exactly the same as the route prefix of the matched route.
   * 
   * For example, a policy defined with 10.0.0.0/8 can only exactly match a route with 10.0.0.0/8.
   * 
   * IP address ranges use the CIDR format. Both IPv4 and IPv6 are supported.
   * 
   * This parameter and **AddressPrefixesInclude** are mutually exclusive and cannot be specified at the same time.
   */
  addressPrefixesMatch?: string[];
  /**
   * @remarks
   * The list of AS paths for fuzzy matching.
   * 
   * A match succeeds if the AS path in the match condition overlaps with the AS path of the matched route.
   * 
   * This parameter and **AsPathsMatch** are mutually exclusive and cannot be specified at the same time.
   * 
   * > Only AS SEQUENCE is supported. AS SET, AS CONFED SEQUENCE, and AS CONFED SET are not supported. This means only a list of AS numbers is supported, and sets and sub-lists are not supported.
   */
  asPathsInclude?: number[];
  /**
   * @remarks
   * The list of AS paths for exact matching.
   * 
   * A match succeeds only when the AS path in the match condition is exactly the same as the AS path of the matched route.
   * 
   * This parameter and **AsPathsInclude** are mutually exclusive and cannot be specified at the same time.
   * 
   * > Only AS SEQUENCE is supported. AS SET, AS CONFED SEQUENCE, and AS CONFED SET are not supported. This means only a list of AS numbers is supported, and sets and sub-lists are not supported.
   */
  asPathsMatch?: number[];
  /**
   * @remarks
   * The community set for fuzzy matching.
   * 
   * A match succeeds if the community in the match condition overlaps with the community of the matched route.
   * 
   * Each community is in the format of n:m, where n and m range from **1** to **65535**. The community must comply with RFC 1997. Large communities (RFC 8092) are not supported.
   * 
   * This parameter and **CommunitySetMatch** are mutually exclusive and cannot be specified at the same time.
   * 
   * > Incorrect community configurations may prevent routes from being advertised to the on-premises data center.
   */
  communitySetInclude?: string[];
  /**
   * @remarks
   * The community set for exact matching.
   * 
   * A match succeeds only when the community in the match condition is exactly the same as the community of the matched route.
   * 
   * Each community is in the format of n:m, where n and m range from **1** to **65535**. The community must comply with RFC 1997. Large communities (RFC 8092) are not supported.
   * 
   * This parameter and **CommunitySetInclude** are mutually exclusive and cannot be specified at the same time.
   * 
   * > Incorrect community configurations may prevent routes from being advertised to the on-premises data center.
   */
  communitySetMatch?: string[];
  /**
   * @remarks
   * The list of destination instance IDs to match. The following instance types are supported:
   * 
   * - Virtual private cloud (VPC) instance IDs
   * - Virtual border router (VBR) instance IDs
   * 
   * > The list of destination instance IDs takes effect only when the direction of the route map is outbound.
   */
  destinationInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to use the exclude matching mode for the list of destination instance IDs. Valid values:
   * 
   * - **false** (default): no. A match succeeds when the destination instance ID of the route is in **DestinationInstanceIds.N**.
   * - **true**: yes. A match succeeds when the destination instance ID of the route is not in **DestinationInstanceIds.N**.
   * 
   * @example
   * false
   */
  destinationInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The list of destination instance types to match. The following instance types are supported:
   * 
   * - **VPC**: VPC instance.
   * - **VBR**: VBR instance.
   * 
   * > The list of destination instance types takes effect only when the direction of the route map is outbound.
   */
  destinationInstanceTypes?: string[];
  /**
   * @remarks
   * The list of destination region IDs to match.
   */
  destinationRegionIds?: string[];
  /**
   * @remarks
   * The list of destination route table IDs to match.
   * 
   * > The list of destination route table IDs takes effect only when the direction of the route map is outbound.
   */
  destinationRouteTableIds?: string[];
  /**
   * @remarks
   * The IP address type to match. Valid values:
   * 
   * - **IPv4**: matches only IPv4 routes.
   * - **IPv6**: matches only IPv6 routes.
   * 
   * You can leave this parameter empty to match routes of all types.
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
   * - **Custom**: custom route, which is manually added by a user.
   * - **BGP**: BGP route, which is propagated through the BGP routable protocol.
   * 
   * You can specify multiple route types.
   */
  routeTypes?: string[];
  /**
   * @remarks
   * The list of source instance IDs to match. The following instance types are supported:
   * 
   * - Virtual private cloud (VPC) instance IDs
   * - Virtual border router (VBR) instance IDs
   */
  sourceInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to use the exclude matching mode for the list of source instance IDs. Valid values:
   * 
   * - **false** (default): no. A match succeeds when the source instance ID of the route is in **SourceInstanceIds.N**.
   * - **true**: yes. A match succeeds when the source instance ID of the route is not in **SourceInstanceIds.N**.
   * 
   * @example
   * false
   */
  sourceInstanceIdsReverseMatch?: boolean;
  /**
   * @remarks
   * The list of source instance types to match. The following instance types are supported:
   * 
   * - **VPC**: VPC instance.
   * - **VBR**: VBR instance.
   */
  sourceInstanceTypes?: string[];
  /**
   * @remarks
   * The list of source region IDs to match.
   */
  sourceRegionIds?: string[];
  /**
   * @remarks
   * The list of source route table IDs to match.
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

export class ListRouteMapRulesResponseBodyRouteMapRulesSetActions extends $dara.Model {
  /**
   * @remarks
   * The AS path to prepend when the regional gateway receives or advertises routes.
   * 
   * This parameter and **AsPathReplace** are mutually exclusive and cannot be specified at the same time.
   * 
   * This parameter specifies the action to execute after a route meets the match conditions.
   */
  asPathPrepend?: number[];
  /**
   * @remarks
   * The AS path to replace when the regional gateway receives or advertises routes. The original AS path of the route is replaced with the list of AS numbers specified in this parameter.
   * 
   * This parameter and **AsPathPrepend** are mutually exclusive and cannot be specified at the same time.
   * 
   * This parameter specifies the action to execute after a route meets the match conditions.
   */
  asPathReplace?: number[];
  /**
   * @remarks
   * The community set to add to the route.
   * 
   * Each community is in the format of n:m, where n and m range from **1** to **65535**. The community must comply with RFC 1997. Large communities (RFC 8092) are not supported.
   * 
   * This parameter and **CommunityReplace** are mutually exclusive and cannot be specified at the same time.
   * 
   * This parameter specifies the action to execute after a route meets the match conditions.
   * 
   * > Incorrect community configurations may prevent routes from being advertised to the on-premises data center.
   */
  communityAdd?: string[];
  /**
   * @remarks
   * The community set to replace the original community of the route.
   * 
   * Each community is in the format of n:m, where n and m range from **1** to **65535**. The community must comply with RFC 1997. Large communities (RFC 8092) are not supported.
   * 
   * This parameter and **CommunityAdd** are mutually exclusive and cannot be specified at the same time.
   * 
   * This parameter specifies the action to execute after a route meets the match conditions.
   * 
   * > Incorrect community configurations may prevent routes from being advertised to the on-premises data center.
   */
  communityReplace?: string[];
  /**
   * @remarks
   * Policy priority of the associated next route map rule.
   * 
   * - You can set policy priority of the associated route map rule only when **RouteAction** is set to **Permit**. Only the permitted routes continue to match the associated next route map rule.
   * - Policy priority of the associated next route map rule must be lower than policy priority of the current route map rule.
   * 
   * @example
   * 1
   */
  nextPriority?: number;
  /**
   * @remarks
   * The policy action after all conditions are met. Valid values:
   * 
   * - **Permit**: permits the matched routes.
   * - **Deny**: denies the matched routes.
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

export class ListRouteMapRulesResponseBodyRouteMapRules extends $dara.Model {
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Matches production prefixes from on-prem and sets a higher local preference.
   */
  description?: string;
  /**
   * @remarks
   * The match conditions of the route map rule. The system executes the actions defined in **SetActions** only when a route meets all the match conditions defined in this parameter.
   */
  matchConditions?: ListRouteMapRulesResponseBodyRouteMapRulesMatchConditions;
  /**
   * @remarks
   * The name of the rule.
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
   * The ID of the route map.
   * 
   * @example
   * rm-0a1b2c3d4e5f6a7b8
   */
  routeMapId?: string;
  /**
   * @remarks
   * The ID of the route map rule.
   * 
   * @example
   * rmr-3dm13f66wtctcnydup
   */
  routeMapRuleId?: string;
  /**
   * @remarks
   * The actions to execute for the route map rule. After a route meets all the match conditions defined in **MatchConditions**, the system processes the route based on the actions defined in this parameter.
   */
  setActions?: ListRouteMapRulesResponseBodyRouteMapRulesSetActions;
  /**
   * @remarks
   * The status of the route map rule. Valid values:
   * 
   * - **Creating**: The rule is being created.
   * - **Updating**: The rule is being updated.
   * - **Active**: The rule is available.
   * - **Deleting**: The rule is being deleted.
   * - **Deleted**: The rule is deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      matchConditions: 'MatchConditions',
      name: 'Name',
      priority: 'Priority',
      routeMapId: 'RouteMapId',
      routeMapRuleId: 'RouteMapRuleId',
      setActions: 'SetActions',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      matchConditions: ListRouteMapRulesResponseBodyRouteMapRulesMatchConditions,
      name: 'string',
      priority: 'number',
      routeMapId: 'string',
      routeMapRuleId: 'string',
      setActions: ListRouteMapRulesResponseBodyRouteMapRulesSetActions,
      status: 'string',
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

export class ListRouteMapRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page in a paginated query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If **NextToken** is empty, no next query is available.
   * - If **NextToken** has a return value, the value indicates the token for the next query.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF44D7B7-6248-5A60-8A4C-A92388605A57
   */
  requestId?: string;
  /**
   * @remarks
   * The list of route map rules.
   */
  routeMapRules?: ListRouteMapRulesResponseBodyRouteMapRules[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeMapRules: 'RouteMapRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      routeMapRules: { 'type': 'array', 'itemType': ListRouteMapRulesResponseBodyRouteMapRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeMapRules)) {
      $dara.Model.validateArray(this.routeMapRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

