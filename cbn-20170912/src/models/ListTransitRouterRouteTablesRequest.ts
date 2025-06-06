// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterRouteTablesRequestRouteTableOptions } from "./ListTransitRouterRouteTablesRequestRouteTableOptions";
import { ListTransitRouterRouteTablesRequestTag } from "./ListTransitRouterRouteTablesRequestTag";


export class ListTransitRouterRouteTablesRequest extends $dara.Model {
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
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If this is your first query or no subsequent query is to be sent, ignore this parameter.
   * *   If a subsequent query is to be sent, set the value to the value of **NextToken** that is returned from the last call.
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
   * The features of the route table.
   */
  routeTableOptions?: ListTransitRouterRouteTablesRequestRouteTableOptions;
  /**
   * @remarks
   * The information about the tags.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: ListTransitRouterRouteTablesRequestTag[];
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router.
   * 
   * @example
   * tr-uf654ttymmljlvh2x****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * You can query multiple route tables in each call. Maximum value of **N**: **20**.
   * 
   * @example
   * vtb-bp1l8awdb4iuo9uwu****
   */
  transitRouterRouteTableIds?: string[];
  /**
   * @remarks
   * The name of the route table.
   * 
   * You can query multiple route tables in each call. Maximum value of **N**: **20**.
   * 
   * > If you set both **TransitRouterRouteTableNames.N** and **TransitRouterRouteTableIds.N**, make sure that the specified name and ID belong to the same route table.
   * 
   * @example
   * testname
   */
  transitRouterRouteTableNames?: string[];
  /**
   * @remarks
   * The status of the route table. Valid values:
   * 
   * *   **Creating**: The route table is being created.
   * *   **Deleting**: The route table is being deleted.
   * *   **Active**: The route table is available.
   * 
   * @example
   * Active
   */
  transitRouterRouteTableStatus?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * *   **Custom**: a custom route table
   * *   **System**: the default route table
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

