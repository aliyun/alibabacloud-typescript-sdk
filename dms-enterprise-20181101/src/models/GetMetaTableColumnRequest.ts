// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableColumnRequest extends $dara.Model {
  /**
   * @remarks
   * The globally unique identifier (GUID) of the table in Data Management (DMS).
   * 
   * *   If the database to which the table belongs is a logical database, you can call the [ListLogicTables](https://help.aliyun.com/document_detail/141875.html) operation to obtain the value of this parameter.
   * *   If the database to which the table belongs is a physical database, you can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * IDB_40753****.qntest2.activity_setting
   */
  tableGuid?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to obtain the tenant ID.
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

