// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesResponseBodyTableListTableOwnerIdList extends $dara.Model {
  ownerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerIds: 'OwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyTableListTableOwnerNameList extends $dara.Model {
  ownerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerNames: 'OwnerNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ownerNames)) {
      $dara.Model.validateArray(this.ownerNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListTablesResponseBodyTableList extends $dara.Model {
  table?: ListTablesResponseBodyTableListTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': ListTablesResponseBodyTableListTable },
    };
  }

  validate() {
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B16FB618-5E96-4FFD-BB0D-490C890A4030
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The details of the tables.
   */
  tableList?: ListTablesResponseBodyTableList;
  /**
   * @remarks
   * The total number of tables that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tableList: 'TableList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tableList: ListTablesResponseBodyTableList,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.tableList && typeof (this.tableList as any).validate === 'function') {
      (this.tableList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

