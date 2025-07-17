// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesResponseBodyDatabaseListDatabaseOwnerIdList extends $dara.Model {
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

export class ListDatabasesResponseBodyDatabaseListDatabaseOwnerNameList extends $dara.Model {
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

export class ListDatabasesResponseBodyDatabaseListDatabase extends $dara.Model {
  /**
   * @remarks
   * The name of the catalog to which the database belongs.
   * 
   * @example
   * 1
   */
  catalogName?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 1
   */
  databaseId?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The ID of the DBA.
   * 
   * @example
   * 1
   */
  dbaId?: string;
  /**
   * @remarks
   * The nickname of the Database administrator (DBA) to which the database belongs.
   * 
   * @example
   * dba_user
   */
  dbaName?: string;
  /**
   * @remarks
   * The encoding format of the database.
   * 
   * @example
   * utf-8
   */
  encoding?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs.
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * The endpoint of the instance to which the database belongs.
   * 
   * @example
   * xxx.xxx.xxx.xxx
   */
  host?: string;
  /**
   * @remarks
   * The ID of the instance to which the database belongs.
   * 
   * @example
   * 1
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the owners of the database.
   */
  ownerIdList?: ListDatabasesResponseBodyDatabaseListDatabaseOwnerIdList;
  /**
   * @remarks
   * The nicknames of the database owners.
   */
  ownerNameList?: ListDatabasesResponseBodyDatabaseListDatabaseOwnerNameList;
  /**
   * @remarks
   * The connection port of the instance to which the database belongs.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used for searching the database.
   * 
   * @example
   * test@xxx.xxx.xxx.xxx:3306
   */
  searchName?: string;
  /**
   * @remarks
   * The system ID (SID) of the instance to which the database belongs.
   * 
   * @example
   * test
   */
  sid?: string;
  /**
   * @remarks
   * The state of the database. Valid values:
   * 
   * *   NORMAL: The database is normal.
   * *   DISABLE: The database is disabled.
   * *   OFFLINE: The database is unpublished.
   * *   NOT_EXIST: The database does not exist.
   * 
   * @example
   * NORMAL
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      databaseId: 'DatabaseId',
      dbType: 'DbType',
      dbaId: 'DbaId',
      dbaName: 'DbaName',
      encoding: 'Encoding',
      envType: 'EnvType',
      host: 'Host',
      instanceId: 'InstanceId',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      sid: 'Sid',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      databaseId: 'string',
      dbType: 'string',
      dbaId: 'string',
      dbaName: 'string',
      encoding: 'string',
      envType: 'string',
      host: 'string',
      instanceId: 'string',
      ownerIdList: ListDatabasesResponseBodyDatabaseListDatabaseOwnerIdList,
      ownerNameList: ListDatabasesResponseBodyDatabaseListDatabaseOwnerNameList,
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      sid: 'string',
      state: 'string',
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

export class ListDatabasesResponseBodyDatabaseList extends $dara.Model {
  database?: ListDatabasesResponseBodyDatabaseListDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': ListDatabasesResponseBodyDatabaseListDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.database)) {
      $dara.Model.validateArray(this.database);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the databases.
   */
  databaseList?: ListDatabasesResponseBodyDatabaseList;
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
   * 5541CDA6-F674-435C-81BD-40C2FB926CE3
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
   * The number of databases that belong to an instance.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseList: 'DatabaseList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseList: ListDatabasesResponseBodyDatabaseList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.databaseList && typeof (this.databaseList as any).validate === 'function') {
      (this.databaseList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

