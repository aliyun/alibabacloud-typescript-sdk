// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions } from "./ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions";
import { ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags } from "./ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags";


export class ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables extends $dara.Model {
  /**
   * @remarks
   * The time when the route table was created.
   * 
   * The time follows the ISO8601 standard in the YYYY-MM-DDThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-15T09:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The region ID of the Enterprise Edition transit router.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The features of the route table.
   */
  routeTableOptions?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags[];
  /**
   * @remarks
   * The transit router ID.
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
   * The ID of the route table.
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
   * The status of the route table. Valid values:
   * 
   * *   **Creating**
   * *   **Deleting**
   * *   **Active**
   * 
   * @example
   * Active
   */
  transitRouterRouteTableStatus?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * *   **Custom**
   * *   **System**
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

