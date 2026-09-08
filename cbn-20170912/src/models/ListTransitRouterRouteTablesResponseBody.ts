// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions extends $dara.Model {
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

export class ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables extends $dara.Model {
  /**
   * @remarks
   * The time when the route table was created.
   * 
   * The time is displayed in UTC in the YYYY-MM-DDThh:mmZ format.
   * 
   * @example
   * 2021-03-15T09:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The region ID of the Enterprise Edition transit router instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The route table feature options.
   */
  routeTableOptions?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags[];
  /**
   * @remarks
   * The transit router instance ID.
   * 
   * @example
   * tr-8vb8bie2koduo5awz****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The description of the route table.
   * 
   * @example
   * testdesc
   */
  transitRouterRouteTableDescription?: string;
  /**
   * @remarks
   * The route table ID.
   * 
   * @example
   * vtb-bp1dudbh2d5na6b50****
   */
  transitRouterRouteTableId?: string;
  /**
   * @remarks
   * The name of the route table.
   * 
   * @example
   * testname
   */
  transitRouterRouteTableName?: string;
  /**
   * @remarks
   * The status of the route table.
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
   * The type of the route table.
   * 
   * - **Custom**: custom route table.
   * - **System**: system default route table.
   * 
   * @example
   * System
   */
  transitRouterRouteTableType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      regionId: 'RegionId',
      routeTableOptions: 'RouteTableOptions',
      tags: 'Tags',
      transitRouterId: 'TransitRouterId',
      transitRouterRouteTableDescription: 'TransitRouterRouteTableDescription',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
      transitRouterRouteTableName: 'TransitRouterRouteTableName',
      transitRouterRouteTableStatus: 'TransitRouterRouteTableStatus',
      transitRouterRouteTableType: 'TransitRouterRouteTableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      regionId: 'string',
      routeTableOptions: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions,
      tags: { 'type': 'array', 'itemType': ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags },
      transitRouterId: 'string',
      transitRouterRouteTableDescription: 'string',
      transitRouterRouteTableId: 'string',
      transitRouterRouteTableName: 'string',
      transitRouterRouteTableStatus: 'string',
      transitRouterRouteTableType: 'string',
    };
  }

  validate() {
    if(this.routeTableOptions && typeof (this.routeTableOptions as any).validate === 'function') {
      (this.routeTableOptions as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page when entries are returned by page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
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
   * 82678F4A-C9F7-4CC1-8BF0-D619A63BFC57
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of route tables.
   */
  transitRouterRouteTables?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterRouteTables: 'TransitRouterRouteTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterRouteTables: { 'type': 'array', 'itemType': ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterRouteTables)) {
      $dara.Model.validateArray(this.transitRouterRouteTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

