// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogicTablesResponseBodyLogicTableListLogicTableOwnerIdList extends $dara.Model {
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

export class ListLogicTablesResponseBodyLogicTableListLogicTableOwnerNameList extends $dara.Model {
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

export class ListLogicTablesResponseBodyLogicTableList extends $dara.Model {
  logicTable?: ListLogicTablesResponseBodyLogicTableListLogicTable[];
  static names(): { [key: string]: string } {
    return {
      logicTable: 'LogicTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicTable: { 'type': 'array', 'itemType': ListLogicTablesResponseBodyLogicTableListLogicTable },
    };
  }

  validate() {
    if(Array.isArray(this.logicTable)) {
      $dara.Model.validateArray(this.logicTable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of the logical tables.
   */
  logicTableList?: ListLogicTablesResponseBodyLogicTableList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F1E6484F-9DF1-4406-9BDE-0861C4629B69
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of logical tables that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicTableList: 'LogicTableList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicTableList: ListLogicTablesResponseBodyLogicTableList,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.logicTableList && typeof (this.logicTableList as any).validate === 'function') {
      (this.logicTableList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

