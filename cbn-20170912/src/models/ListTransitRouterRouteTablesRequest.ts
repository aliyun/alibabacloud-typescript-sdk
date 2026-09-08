// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTablesRequestRouteTableOptions extends $dara.Model {
  /**
   * @remarks
   * Multi-region equal-cost multi-path (ECMP) routing. Valid values:
   * - **disable**: Disables multi-region ECMP routing. After multi-region ECMP routing is disabled, routes with the same prefix learned from different regions select the transit router (TR) with the smallest Region ID (sorted alphabetically) as the next hop when other route attributes are the same. This changes the traffic latency and bandwidth consumed between different regions. Make sure that you fully evaluate the impact before disabling this feature.
   * - **enable**: Enables multi-region ECMP routing. After multi-region ECMP routing is enabled, routes with the same prefix learned from different regions form ECMP routes when other route attributes are the same. This changes the traffic latency and bandwidth consumed between different regions. Make sure that you fully evaluate the impact before enabling this feature.
   * 
   * @example
   * disable
   */
  multiRegionECMP?: string;
  static names(): { [key: string]: string } {
    return {
      multiRegionECMP: 'MultiRegionECMP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiRegionECMP: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * Once specified, the tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * The tag value can be an empty string or up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page when entries are returned by page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - You do not need to specify this parameter for the first request or if no subsequent query exists.
   * - If a next query exists, set this parameter to the value of **NextToken** returned in the previous API call.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The route table feature options.
   */
  routeTableOptions?: ListTransitRouterRouteTablesRequestRouteTableOptions;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags at a time.
   */
  tag?: ListTransitRouterRouteTablesRequestTag[];
  /**
   * @remarks
   * The instance ID of the Enterprise Edition transit router.
   * 
   * @example
   * tr-uf654ttymmljlvh2x****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * You can query multiple route tables at a time. Maximum value of **N**: **20**.
   * 
   * @example
   * vtb-bp1l8awdb4iuo9uwu****
   */
  transitRouterRouteTableIds?: string[];
  /**
   * @remarks
   * The name of the route table.
   * 
   * You can query multiple route tables at a time. Maximum value of **N**: **20**.
   * 
   * > If you specify both **TransitRouterRouteTableNames.N** and **TransitRouterRouteTableIds.N**, the route table names and route table IDs must correspond to each other.
   * 
   * @example
   * testname
   */
  transitRouterRouteTableNames?: string[];
  /**
   * @remarks
   * The status of the route table. Valid values:
   * 
   * - **Creating**: being created.
   * - **Deleting**: being deleted.
   * - **Active**: active.
   * 
   * @example
   * Active
   */
  transitRouterRouteTableStatus?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * - **Custom**: custom route table.
   * - **System**: system default route table.
   * 
   * @example
   * Custom
   */
  transitRouterRouteTableType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableOptions: 'RouteTableOptions',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterRouteTableIds: 'TransitRouterRouteTableIds',
      transitRouterRouteTableNames: 'TransitRouterRouteTableNames',
      transitRouterRouteTableStatus: 'TransitRouterRouteTableStatus',
      transitRouterRouteTableType: 'TransitRouterRouteTableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableOptions: ListTransitRouterRouteTablesRequestRouteTableOptions,
      tag: { 'type': 'array', 'itemType': ListTransitRouterRouteTablesRequestTag },
      transitRouterId: 'string',
      transitRouterRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteTableNames: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteTableStatus: 'string',
      transitRouterRouteTableType: 'string',
    };
  }

  validate() {
    if(this.routeTableOptions && typeof (this.routeTableOptions as any).validate === 'function') {
      (this.routeTableOptions as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.transitRouterRouteTableIds)) {
      $dara.Model.validateArray(this.transitRouterRouteTableIds);
    }
    if(Array.isArray(this.transitRouterRouteTableNames)) {
      $dara.Model.validateArray(this.transitRouterRouteTableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

