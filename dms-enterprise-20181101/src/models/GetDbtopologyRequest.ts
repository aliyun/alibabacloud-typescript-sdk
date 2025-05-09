// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBTopologyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the logical database. You can call the [ListLogicDatabases](https://www.alibabacloud.com/help/en/data-management-service/latest/listlogicdatabases) or [SearchDatabase](https://www.alibabacloud.com/help/en/data-management-service/latest/searchdatabase) operation to query the ID of the logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * 134***
   */
  logicDbId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 43***
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

