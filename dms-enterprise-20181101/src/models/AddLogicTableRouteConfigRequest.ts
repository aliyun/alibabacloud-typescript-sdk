// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLogicTableRouteConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The routing algorithm expression. For more information about how to configure a routing algorithm expression, see [Configure a routing algorithm](https://www.alibabacloud.com/help/en/data-management-service/latest/configure-a-routing-algorithm).
   * 
   * This parameter is required.
   * 
   * @example
   * #id#%16
   */
  routeExpr?: string;
  /**
   * @remarks
   * The unique key of the routing algorithm. 
   * 
   * > - You can create a custom unique key for the routing algorithm. No requirements are imposed on custom unique keys.
   * > - The unique key of the routing algorithm in the same logical table must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * id-hash-mod16
   */
  routeKey?: string;
  /**
   * @remarks
   * The ID of the logical table. You can call the [ListLogicTables](https://www.alibabacloud.com/help/en/data-management-service/latest/listlogictables) operation to query the ID of the logical table.
   * 
   * This parameter is required.
   * 
   * @example
   * 4****
   */
  tableId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://www.alibabacloud.com/help/en/data-management-service/latest/getuseractivetenant) operation to query the tenant ID.
   * 
   * @example
   * 4***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      routeExpr: 'RouteExpr',
      routeKey: 'RouteKey',
      tableId: 'TableId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeExpr: 'string',
      routeKey: 'string',
      tableId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

