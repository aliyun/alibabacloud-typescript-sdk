// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTableResponseBodySearchTableListSearchTableOwnerIdList extends $dara.Model {
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

export class SearchTableResponseBodySearchTableListSearchTableOwnerNameList extends $dara.Model {
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

export class SearchTableResponseBodySearchTableListSearchTable extends $dara.Model {
  /**
   * @remarks
   * The name that is used to search for the database to which the table belongs.
   * 
   * @example
   * test
   */
  DBSearchName?: string;
  /**
   * @remarks
   * The ID of the database to which the table belongs.
   * 
   * @example
   * 1
   */
  databaseId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * *   **Oracle**
   * *   **DRDS**
   * *   **OceanBase**
   * *   **Mongo**
   * *   **Redis**
   * 
   * @example
   * mysql
   */
  dbType?: string;
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
   * innodb
   */
  engine?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs.
   * 
   * @example
   * test
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the table is a logical table. Valid values:
   * 
   * *   **true**: The table is a logical table.
   * *   **false**: The table is not a logical table.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The IDs of the table owners.
   */
  ownerIdList?: SearchTableResponseBodySearchTableListSearchTableOwnerIdList;
  /**
   * @remarks
   * The nicknames of the table owners.
   */
  ownerNameList?: SearchTableResponseBodySearchTableListSearchTableOwnerNameList;
  /**
   * @remarks
   * The GUID of the table.
   * 
   * @example
   * IDB_L_9032.db-test.yuyang_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 1
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The name of the database to which the table belongs.
   * 
   * @example
   * test@xxx.xxx.xxx.xxx:3306
   */
  tableSchemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBSearchName: 'DBSearchName',
      databaseId: 'DatabaseId',
      dbName: 'DbName',
      dbType: 'DbType',
      description: 'Description',
      encoding: 'Encoding',
      engine: 'Engine',
      envType: 'EnvType',
      logic: 'Logic',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      tableGuid: 'TableGuid',
      tableId: 'TableId',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBSearchName: 'string',
      databaseId: 'string',
      dbName: 'string',
      dbType: 'string',
      description: 'string',
      encoding: 'string',
      engine: 'string',
      envType: 'string',
      logic: 'boolean',
      ownerIdList: SearchTableResponseBodySearchTableListSearchTableOwnerIdList,
      ownerNameList: SearchTableResponseBodySearchTableListSearchTableOwnerNameList,
      tableGuid: 'string',
      tableId: 'string',
      tableName: 'string',
      tableSchemaName: 'string',
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

export class SearchTableResponseBodySearchTableList extends $dara.Model {
  searchTable?: SearchTableResponseBodySearchTableListSearchTable[];
  static names(): { [key: string]: string } {
    return {
      searchTable: 'SearchTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchTable: { 'type': 'array', 'itemType': SearchTableResponseBodySearchTableListSearchTable },
    };
  }

  validate() {
    if(Array.isArray(this.searchTable)) {
      $dara.Model.validateArray(this.searchTable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
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
   * 1489257F-1B5D-4B5B-89EF-923C12CEEBD1
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the tables.
   */
  searchTableList?: SearchTableResponseBodySearchTableList;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that are returned.
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
      searchTableList: 'SearchTableList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      searchTableList: SearchTableResponseBodySearchTableList,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.searchTableList && typeof (this.searchTableList as any).validate === 'function') {
      (this.searchTableList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

