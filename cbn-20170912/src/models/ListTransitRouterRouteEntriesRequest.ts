// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteEntriesRequestRouteFilter extends $dara.Model {
  /**
   * @remarks
   * The match pattern for filtering CIDR blocks. Valid values:
   * 
   * *   **PrefixExactMatchCidrs**: exact matching.
   * *   **LongestPrefixMatchCidrs**: longest prefix matching. You can specify IP addresses and CIDR blocks.
   * *   **SubnetOfMatchCidrs**: subnet matching. The subnets of the specified CIDR blocks, including the CIDR block, are matches against the match conditions.
   * *   **SupernetOfMatchCidrs**: supernet matching. The supernets of the CIDR block, including the CIDR block, are matched against the match conditions.
   * 
   * By default, the logical operator among filter conditions is **AND**. Information about a route entry is returned only if the route entry matches all filter conditions. Filter conditions must be unique.
   * 
   * @example
   * PrefixExactMatchCidrs
   */
  key?: string;
  /**
   * @remarks
   * The filter value.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * fce19****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The prefix list ID.
   * 
   * @example
   * pl-6ehtn5kqxgeyy08fi****
   */
  prefixListId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The filter conditions.
   */
  routeFilter?: ListTransitRouterRouteEntriesRequestRouteFilter[];
  /**
   * @remarks
   * The destination CIDR block of the route. **This parameter is to be deprecated. We recommend that you use the RouteFilter parameter**.
   * 
   * @example
   * 192.168.0.0/24
   * 
   * @deprecated
   */
  transitRouterRouteEntryDestinationCidrBlock?: string;
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * rte-oklkgwmj97z6dn****
   */
  transitRouterRouteEntryIds?: string[];
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * testname
   */
  transitRouterRouteEntryNames?: string[];
  /**
   * @remarks
   * The ID of the network instance connection that you want to specify as the next hop.
   * 
   * @example
   * tr-attach-nls9fzkfat8934****
   */
  transitRouterRouteEntryNextHopId?: string;
  /**
   * @remarks
   * The next hop ID.
   * 
   * @example
   * vpc-m5ent6du8deaq5*****
   */
  transitRouterRouteEntryNextHopResourceId?: string;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * *   **VPC**
   * *   **VBR**
   * *   **TR**
   * *   **VPN**
   * 
   * @example
   * VPC
   */
  transitRouterRouteEntryNextHopResourceType?: string;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * *   **BlackHole**: routes network traffic to a black hole.
   * *   **Attachment**: routes network traffic to a network instance connection.
   * 
   * @example
   * Attachment
   */
  transitRouterRouteEntryNextHopType?: string;
  /**
   * @remarks
   * The source instance ID.
   * 
   * @example
   * vpc-m5ent6du8deaq5*****
   */
  transitRouterRouteEntryOriginResourceId?: string;
  /**
   * @remarks
   * The source instance type. Valid values:
   * 
   * *   **VPC**
   * *   **VBR**
   * *   **TR**
   * *   **VPN**
   * 
   * @example
   * VPC
   */
  transitRouterRouteEntryOriginResourceType?: string;
  /**
   * @remarks
   * The status of the route. Valid values:
   * 
   * *   **All**
   * *   **Active** (default)
   * *   **Rejected**
   * *   **Prohibited**
   * *   **Standby**
   * *   **Candidate**
   * 
   * If you do not specify a value, routes in the active state are queried.
   * 
   * @example
   * Active
   */
  transitRouterRouteEntryStatus?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **Propagated**: automatically learned by the route table.
   * *   **Static**: static routes.
   * 
   * @example
   * Propagated
   */
  transitRouterRouteEntryType?: string;
  /**
   * @remarks
   * The ID of the route table of the Enterprise Edition transit router.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp1dudbh2d5na6b50****
   */
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      prefixListId: 'PrefixListId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeFilter: 'RouteFilter',
      transitRouterRouteEntryDestinationCidrBlock: 'TransitRouterRouteEntryDestinationCidrBlock',
      transitRouterRouteEntryIds: 'TransitRouterRouteEntryIds',
      transitRouterRouteEntryNames: 'TransitRouterRouteEntryNames',
      transitRouterRouteEntryNextHopId: 'TransitRouterRouteEntryNextHopId',
      transitRouterRouteEntryNextHopResourceId: 'TransitRouterRouteEntryNextHopResourceId',
      transitRouterRouteEntryNextHopResourceType: 'TransitRouterRouteEntryNextHopResourceType',
      transitRouterRouteEntryNextHopType: 'TransitRouterRouteEntryNextHopType',
      transitRouterRouteEntryOriginResourceId: 'TransitRouterRouteEntryOriginResourceId',
      transitRouterRouteEntryOriginResourceType: 'TransitRouterRouteEntryOriginResourceType',
      transitRouterRouteEntryStatus: 'TransitRouterRouteEntryStatus',
      transitRouterRouteEntryType: 'TransitRouterRouteEntryType',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      prefixListId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeFilter: { 'type': 'array', 'itemType': ListTransitRouterRouteEntriesRequestRouteFilter },
      transitRouterRouteEntryDestinationCidrBlock: 'string',
      transitRouterRouteEntryIds: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteEntryNames: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteEntryNextHopId: 'string',
      transitRouterRouteEntryNextHopResourceId: 'string',
      transitRouterRouteEntryNextHopResourceType: 'string',
      transitRouterRouteEntryNextHopType: 'string',
      transitRouterRouteEntryOriginResourceId: 'string',
      transitRouterRouteEntryOriginResourceType: 'string',
      transitRouterRouteEntryStatus: 'string',
      transitRouterRouteEntryType: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routeFilter)) {
      $dara.Model.validateArray(this.routeFilter);
    }
    if(Array.isArray(this.transitRouterRouteEntryIds)) {
      $dara.Model.validateArray(this.transitRouterRouteEntryIds);
    }
    if(Array.isArray(this.transitRouterRouteEntryNames)) {
      $dara.Model.validateArray(this.transitRouterRouteEntryNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

