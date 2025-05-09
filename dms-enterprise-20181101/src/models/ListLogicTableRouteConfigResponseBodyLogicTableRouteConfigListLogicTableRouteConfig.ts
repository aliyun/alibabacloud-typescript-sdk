// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigListLogicTableRouteConfig extends $dara.Model {
  /**
   * @remarks
   * The routing algorithm expression.
   * 
   * @example
   * #id#%16\\t
   */
  routeExpr?: string;
  /**
   * @remarks
   * The unique key of the routing algorithm.
   * 
   * @example
   * 1
   */
  routeKey?: string;
  /**
   * @remarks
   * The ID of the logical table.
   * 
   * @example
   * 4****
   */
  tableId?: number;
  static names(): { [key: string]: string } {
    return {
      routeExpr: 'RouteExpr',
      routeKey: 'RouteKey',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeExpr: 'string',
      routeKey: 'string',
      tableId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

