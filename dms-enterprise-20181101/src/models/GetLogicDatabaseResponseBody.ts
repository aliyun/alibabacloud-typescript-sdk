// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogicDatabaseResponseBodyLogicDatabaseDatabaseIds extends $dara.Model {
  databaseIds?: number[];
  static names(): { [key: string]: string } {
    return {
      databaseIds: 'DatabaseIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.databaseIds)) {
      $dara.Model.validateArray(this.databaseIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicDatabaseResponseBodyLogicDatabaseOwnerIdList extends $dara.Model {
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

export class GetLogicDatabaseResponseBodyLogicDatabaseOwnerNameList extends $dara.Model {
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

export class GetLogicDatabaseResponseBodyLogicDatabase extends $dara.Model {
  /**
   * @remarks
   * The alias of the logical database.
   * 
   * @example
   * test_logic_alias
   */
  alias?: string;
  /**
   * @remarks
   * The ID of the logical database.
   * 
   * @example
   * 1***
   */
  databaseId?: string;
  /**
   * @remarks
   * The IDs of database shards of the logical database.
   */
  databaseIds?: GetLogicDatabaseResponseBodyLogicDatabaseDatabaseIds;
  /**
   * @remarks
   * The database engine. For more information about the valid values of the DbType parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * POLARDB
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs. Valid values:
   * 
   * *   product: production environment
   * *   dev: development environment
   * *   pre: pre-release environment
   * *   test: test environment
   * *   sit: system integration testing (SIT) environment
   * *   uat: user acceptance testing (UAT) environment
   * *   pet: stress testing environment
   * *   stag: staging environment
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. The return value is true.
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The IDs of the owners of the logical database.
   */
  ownerIdList?: GetLogicDatabaseResponseBodyLogicDatabaseOwnerIdList;
  /**
   * @remarks
   * The names of the owners of the logical database.
   */
  ownerNameList?: GetLogicDatabaseResponseBodyLogicDatabaseOwnerNameList;
  /**
   * @remarks
   * The name of the logical database.
   * 
   * @example
   * test_logic_db
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the logical database.
   * 
   * @example
   * test_logic_db[test_logic_alias]
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      databaseId: 'DatabaseId',
      databaseIds: 'DatabaseIds',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      databaseId: 'string',
      databaseIds: GetLogicDatabaseResponseBodyLogicDatabaseDatabaseIds,
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      ownerIdList: GetLogicDatabaseResponseBodyLogicDatabaseOwnerIdList,
      ownerNameList: GetLogicDatabaseResponseBodyLogicDatabaseOwnerNameList,
      schemaName: 'string',
      searchName: 'string',
    };
  }

  validate() {
    if(this.databaseIds && typeof (this.databaseIds as any).validate === 'function') {
      (this.databaseIds as any).validate();
    }
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

export class GetLogicDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
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
   * The details of the logical database.
   */
  logicDatabase?: GetLogicDatabaseResponseBodyLogicDatabase;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90260530-565C-42B9-A6E8-893481FE6AB6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logicDatabase: 'LogicDatabase',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      logicDatabase: GetLogicDatabaseResponseBodyLogicDatabase,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.logicDatabase && typeof (this.logicDatabase as any).validate === 'function') {
      (this.logicDatabase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

