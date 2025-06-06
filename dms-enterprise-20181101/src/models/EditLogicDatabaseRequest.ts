// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditLogicDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * - The alias of the logical database. If you want to change the alias, specify a new alias.
   * - If you do not need to change the alias of the logical database, call the [GetLogicDatabase](https://www.alibabacloud.com/help/en/data-management-service/latest/getlogicdatabase) or [GetDBTopology](https://www.alibabacloud.com/help/en/data-management-service/latest/getdbtopology) operation to query the alias of the logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * test_logic_db
   */
  alias?: string;
  /**
   * @remarks
   * - The IDs of the physical databases that compose the logical database. If you want to change the physical databases, you can call the [ListDatabases](https://www.alibabacloud.com/help/en/data-management-service/latest/listdatabases) or [SearchDatabase](https://www.alibabacloud.com/help/en/data-management-service/latest/searchdatabase) operation to query the IDs of the new physical databases that you want to specify.
   * - If you do not want to change the physical databases, you can call the [GetDBTopology](https://www.alibabacloud.com/help/en/data-management-service/latest/getdbtopology) operation to query the IDs of the physical databases that compose the logical database.
   * 
   * This parameter is required.
   */
  databaseIds?: number[];
  /**
   * @remarks
   * The ID of the logical database. You can call the [ListLogicDatabases](https://www.alibabacloud.com/help/en/data-management-service/latest/listlogicdatabases) operation to query the ID of the logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * 1***
   */
  logicDbId?: number;
  /**
   * @remarks
   * The ID of the tenant. 
   * 
   * >  To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://www.alibabacloud.com/help/en/data-management-service/latest/manage-dms-tenants) topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      databaseIds: 'DatabaseIds',
      logicDbId: 'LogicDbId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      databaseIds: { 'type': 'array', 'itemType': 'number' },
      logicDbId: 'number',
      tid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.databaseIds)) {
      $dara.Model.validateArray(this.databaseIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

