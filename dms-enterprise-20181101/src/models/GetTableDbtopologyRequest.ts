// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableDBTopologyRequest extends $dara.Model {
  /**
   * @remarks
   * The GUID of the table in DMS.
   * 
   * > 
   * 
   * *   If the database to which the table belongs is a logical database, you can call the [ListLogicTables](https://help.aliyun.com/document_detail/141875.html) operation to obtain the GUID. The value of the ReturnGuid parameter must be set to true.
   * 
   * *   If the database to which the table belongs is a physical database, you can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to obtain the GUID. The value of the ReturnGuid parameter must be set to true.
   * 
   * This parameter is required.
   * 
   * @example
   * IDB_L_9032.db-test.yuyang_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      tableGuid: 'TableGuid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableGuid: 'string',
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

