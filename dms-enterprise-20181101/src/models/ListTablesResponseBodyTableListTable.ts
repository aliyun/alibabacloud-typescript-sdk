// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTablesResponseBodyTableListTableOwnerIdList } from "./ListTablesResponseBodyTableListTableOwnerIdList";
import { ListTablesResponseBodyTableListTableOwnerNameList } from "./ListTablesResponseBodyTableListTableOwnerNameList";


export class ListTablesResponseBodyTableListTable extends $dara.Model {
  /**
   * @remarks
   * The ID of the physical database.
   * 
   * @example
   * 1860****
   */
  databaseId?: string;
  /**
   * @remarks
   * The description of the table.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The encoding format of the table.
   * 
   * @example
   * utf8
   */
  encoding?: string;
  /**
   * @remarks
   * The engine of the table.
   * 
   * @example
   * InnoDB
   */
  engine?: string;
  /**
   * @remarks
   * The number of rows in the table. This is a statistical value and does not indicate the actual number of rows.
   * 
   * @example
   * 10085
   */
  numRows?: number;
  /**
   * @remarks
   * The ID list of the table owners.
   */
  ownerIdList?: ListTablesResponseBodyTableListTableOwnerIdList;
  /**
   * @remarks
   * The nickname list of the table owners.
   */
  ownerNameList?: ListTablesResponseBodyTableListTableOwnerNameList;
  /**
   * @remarks
   * The storage space that is occupied by the table. This is a statistical value and does not indicate the accurate storage space. Unit: MB.
   * 
   * @example
   * 1024
   */
  storeCapacity?: number;
  /**
   * @remarks
   * The GUID of the table in DMS.
   * 
   * @example
   * IDB_44743****.qntest.consumption_records
   */
  tableGuid?: string;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 44743****
   */
  tableId?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * consumption_records
   */
  tableName?: string;
  /**
   * @remarks
   * The database in which the table resides.
   * 
   * @example
   * qntest
   */
  tableSchemaName?: string;
  /**
   * @remarks
   * The type of the table. Default value: NORMAL.
   * 
   * @example
   * NORMAL
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      description: 'Description',
      encoding: 'Encoding',
      engine: 'Engine',
      numRows: 'NumRows',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      storeCapacity: 'StoreCapacity',
      tableGuid: 'TableGuid',
      tableId: 'TableId',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      description: 'string',
      encoding: 'string',
      engine: 'string',
      numRows: 'number',
      ownerIdList: ListTablesResponseBodyTableListTableOwnerIdList,
      ownerNameList: ListTablesResponseBodyTableListTableOwnerNameList,
      storeCapacity: 'number',
      tableGuid: 'string',
      tableId: 'string',
      tableName: 'string',
      tableSchemaName: 'string',
      tableType: 'string',
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

