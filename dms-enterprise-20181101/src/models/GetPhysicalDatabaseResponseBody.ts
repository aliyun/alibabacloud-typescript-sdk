// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalDatabaseResponseBodyDatabaseOwnerIdList extends $dara.Model {
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

export class GetPhysicalDatabaseResponseBodyDatabaseOwnerNameList extends $dara.Model {
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

export class GetPhysicalDatabaseResponseBodyDatabase extends $dara.Model {
  /**
   * @remarks
   * The name of the catalog to which the database belongs.
   * 
   * > : If the database is a PostgreSQL database, the name of the database is displayed.
   * 
   * @example
   * def
   */
  catalogName?: string;
  /**
   * @remarks
   * The ID of the physical database.
   * 
   * @example
   * 43125312
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
   * The user ID of the DBA in the destination database.
   * 
   * @example
   * 43253
   */
  dbaId?: string;
  /**
   * @remarks
   * The nickname of the database administrator (DBA) in the destination database.
   * 
   * @example
   * dmstest
   */
  dbaName?: string;
  /**
   * @remarks
   * The encoding format of the database.
   * 
   * @example
   * utf8mb4
   */
  encoding?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The endpoint that is used to connect to the database.
   * 
   * @example
   * rm-xxxab3r272.mysql.rds.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The alias of the database instance.
   * 
   * @example
   * test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The instance ID of the destination database.
   * 
   * @example
   * 43215325
   */
  instanceId?: string;
  /**
   * @remarks
   * The user IDs of the database owners.
   */
  ownerIdList?: GetPhysicalDatabaseResponseBodyDatabaseOwnerIdList;
  /**
   * @remarks
   * The nicknames of the database owners.
   */
  ownerNameList?: GetPhysicalDatabaseResponseBodyDatabaseOwnerNameList;
  /**
   * @remarks
   * The port that is used to connect to the database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * > : If the database is a PostgreSQL database, the name of the mode is displayed.
   * 
   * @example
   * dmstest
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used for searching the database.
   * 
   * @example
   * dmstest@rm-xxxab3r272.mysql.rds.aliyuncs.com:3306
   */
  searchName?: string;
  /**
   * @remarks
   * The system ID (SID) of the database.
   * 
   * > : The value of the parameter is returned only for Oracle databases.
   * 
   * @example
   * def
   */
  sid?: string;
  /**
   * @remarks
   * The state of the database. Valid values:
   * 
   * *   **NORMAL**: The database is normal.
   * *   **DISABLE**: The database is disabled.
   * *   **OFFLINE**: The database is unpublished.
   * *   **NOT_EXIST**: The database does not exist.
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
      instanceAlias: 'InstanceAlias',
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
      instanceAlias: 'string',
      instanceId: 'string',
      ownerIdList: GetPhysicalDatabaseResponseBodyDatabaseOwnerIdList,
      ownerNameList: GetPhysicalDatabaseResponseBodyDatabaseOwnerNameList,
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

export class GetPhysicalDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the physical database.
   */
  database?: GetPhysicalDatabaseResponseBodyDatabase;
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
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
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
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: GetPhysicalDatabaseResponseBodyDatabase,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.database && typeof (this.database as any).validate === 'function') {
      (this.database as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

