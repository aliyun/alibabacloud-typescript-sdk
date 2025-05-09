// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableTopologyRequest extends $dara.Model {
  /**
   * @remarks
   * The GUID of the table in Data Management (DMS).
   * 
   * > 
   * > - You can call the [ListLogicTables](https://help.aliyun.com/document_detail/141875.html) operation with ReturnGuid set to true to query the GUIDs of logical tables in a specific logical database.
   * > - You can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation with ReturnGuid set to true to query the GUIDs of tables in a specific physical database.
   * 
   * This parameter is required.
   * 
   * @example
   * IDB_L_308302.yuyang_test.test_ch
   */
  tableGuid?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the DMS console. For more information, see the "View information about the current tenant" section of the [Tenant information](https://help.aliyun.com/document_detail/181330.html) topic.
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

