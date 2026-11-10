// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTablesRequestRouteTableOptions extends $dara.Model {
  /**
   * @remarks
   * The multi-region equal-cost multi-path (ECMP) routing feature. Valid values:
   * - **disable**: disables multi-region ECMP routing. After you disable this feature, if routes with the same prefix are learned from different regions and have the same route attributes, the transit router with the smallest region ID (in alphabetical order) is preferred as the next hop. This changes the traffic latency and the bandwidth consumed between regions. Make sure that you fully evaluate the impact before you disable this feature.
   * - **enable**: enables multi-region ECMP routing. After you enable this feature, if routes with the same prefix are learned from different regions and have the same route attributes, ECMP routing is formed. This changes the traffic latency and the bandwidth consumed between regions. Make sure that you fully evaluate the impact before you enable this feature.
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
   * The tag key cannot be an empty string. It can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * The tag value can be an empty string or a string up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to a tag value. You can specify up to 20 tag values at a time.
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
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * - If this is your first query or no next query is to be sent, ignore this parameter.
   * - If a next query is to be sent, set the value to the **NextToken** value returned from the last API call.
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
   * The instance ID of the Enterprise Edition transit router, which is used to forward routing information.
   * 
   * @example
   * tr-uf654ttymmljlvh2x****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The IDs of the route tables.
   * 
   * You can query multiple route tables at a time. Maximum value of **N**: **20**.
   * 
   * @example
   * vtb-bp1l8awdb4iuo9uwu****
   */
  transitRouterRouteTableIds?: string[];
  /**
   * @remarks
   * The names of the route tables.
   * 
   * You can query multiple route tables at a time. Maximum value of **N**: **20**.
   * 
   * > If you specify both **TransitRouterRouteTableNames.N** and **TransitRouterRouteTableIds.N**, the names and IDs of the route tables must match.
   * 
   * @example
   * testname
   */
  transitRouterRouteTableNames?: string[];
  /**
   * @remarks
   * The status of the route table. Valid values:
   * 
   * - **Creating**: The route table is being created.
   * - **Deleting**: The route table is being deleted.
   * - **Active**: The route table is available.
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

