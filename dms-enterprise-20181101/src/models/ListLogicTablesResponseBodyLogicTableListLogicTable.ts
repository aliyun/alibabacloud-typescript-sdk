// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogicTablesResponseBodyLogicTableListLogicTableOwnerIdList } from "./ListLogicTablesResponseBodyLogicTableListLogicTableOwnerIdList";
import { ListLogicTablesResponseBodyLogicTableListLogicTableOwnerNameList } from "./ListLogicTablesResponseBodyLogicTableListLogicTableOwnerNameList";


export class ListLogicTablesResponseBodyLogicTableListLogicTable extends $dara.Model {
  /**
   * @remarks
   * The ID of the logical database.
   * 
   * @example
   * 1
   */
  databaseId?: string;
  /**
   * @remarks
   * Indicates whether the table is a logical table. The value is fixed to true.
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The IDs of the owners of the logical tables.
   */
  ownerIdList?: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerIdList;
  /**
   * @remarks
   * The nicknames of the owners of the logical tables.
   */
  ownerNameList?: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerNameList;
  /**
   * @remarks
   * The logical database to which the logical table belongs.
   * 
   * @example
   * yuyang_test
   */
  schemaName?: string;
  /**
   * @remarks
   * The number of logical tables.
   * 
   * @example
   * 4
   */
  tableCount?: string;
  /**
   * @remarks
   * The expression of the logical table.
   * 
   * @example
   * test[1-4]
   */
  tableExpr?: string;
  /**
   * @remarks
   * The GUID of the logical table.
   * 
   * @example
   * IDB_L_308302.yuyang_test.test_ch
   */
  tableGuid?: string;
  /**
   * @remarks
   * The ID of the logical table.
   * 
   * @example
   * 1
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the logical table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      logic: 'Logic',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      schemaName: 'SchemaName',
      tableCount: 'TableCount',
      tableExpr: 'TableExpr',
      tableGuid: 'TableGuid',
      tableId: 'TableId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      logic: 'boolean',
      ownerIdList: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerIdList,
      ownerNameList: ListLogicTablesResponseBodyLogicTableListLogicTableOwnerNameList,
      schemaName: 'string',
      tableCount: 'string',
      tableExpr: 'string',
      tableGuid: 'string',
      tableId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(this.ownerIdList && typeof (this.ownerIdList as any).validate === 'function') {
      (this.ownerIdList as any).validate();
    }
    if(this.ownerNameList && typeof (this.ownerNameList as any).validate === 'function') {
      (this.ownerNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

