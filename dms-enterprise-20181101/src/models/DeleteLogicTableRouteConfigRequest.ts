// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLogicTableRouteConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The unique key of the routing algorithm. You can call the [ListLogicTableRouteConfig](https://www.alibabacloud.com/help/en/data-management-service/latest/listlogictablerouteconfig) operation to query the unique key.
   * 
   * This parameter is required.
   * 
   * @example
   * id-hash-mod15
   */
  routeKey?: string;
  /**
   * @remarks
   * The ID of the logical table. You can call the [ListLogicTables](https://www.alibabacloud.com/help/en/data-management-service/latest/listlogictables) operation to query the ID of the logical table.
   * 
   * This parameter is required.
   * 
   * @example
   * 1****
   */
  tableId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://www.alibabacloud.com/help/en/data-management-service/latest/getuseractivetenant) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      routeKey: 'RouteKey',
      tableId: 'TableId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

