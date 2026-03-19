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
  databaseId?: string;
  description?: string;
  encoding?: string;
  engine?: string;
  numRows?: number;
  ownerIdList?: ListTablesResponseBodyTableListTableOwnerIdList;
  ownerNameList?: ListTablesResponseBodyTableListTableOwnerNameList;
  storeCapacity?: number;
  tableGuid?: string;
  tableId?: string;
  tableName?: string;
  tableSchemaName?: string;
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

