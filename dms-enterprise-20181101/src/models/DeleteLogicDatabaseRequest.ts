// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLogicDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the logical database. You can call the [ListLogicDatabases](https://www.alibabacloud.com/help/en/data-management-service/latest/listlogicdatabases) or [SearchDatabase](https://www.alibabacloud.com/help/en/data-management-service/latest/searchdatabase) operation to query the ID of the logical database.
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
   * >  To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the DMS console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://www.alibabacloud.com/help/en/data-management-service/latest/manage-dms-tenants) topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      logicDbId: 'LogicDbId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicDbId: 'number',
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

