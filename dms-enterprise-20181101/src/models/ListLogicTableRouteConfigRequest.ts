// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogicTableRouteConfigRequest extends $dara.Model {
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
      tableId: 'TableId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

