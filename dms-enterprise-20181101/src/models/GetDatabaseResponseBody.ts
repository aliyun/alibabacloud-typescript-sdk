// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseResponseBodyDatabaseOwnerIdList extends $dara.Model {
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

export class GetDatabaseResponseBodyDatabaseOwnerNameList extends $dara.Model {
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

export class GetDatabaseResponseBodyDatabase extends $dara.Model {
  /**
   * @remarks
   * The name of the catalog to which the database belongs.
   * 
   * @example
   * def
   */
  catalogName?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 984****
   */
  databaseId?: string;
  /**
   * @remarks
   * The type of the database. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The ID of the database administrator (DBA).
   * 
   * @example
   * 27****
   */
  dbaId?: string;
  /**
   * @remarks
   * The nickname of the DBA.
   * 
   * @example
   * dba_name
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
   * The type of the environment to which the database belongs. Valid values:
   * 
   * *   **product**: production environment
   * *   **dev**: development environment
   * *   **pre**: staging environment
   * *   **test**: test environment
   * *   **sit**: SIT environment
   * *   **uat**: user acceptance testing (UAT) environment
   * *   **pet**: stress testing environment
   * *   **stag**: STAG environment
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
   * 192.168.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The alias of the instance.
   * 
   * @example
   * test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 149****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the owners of the database.
   */
  ownerIdList?: GetDatabaseResponseBodyDatabaseOwnerIdList;
  /**
   * @remarks
   * The names of the owners of the database.
   */
  ownerNameList?: GetDatabaseResponseBodyDatabaseOwnerNameList;
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
   * @example
   * mysql
   */
  schemaName?: string;
  /**
   * @remarks
   * The keyword that is used to search for the database.
   * 
   * @example
   * mysql@192.168.XX.XX:3306
   */
  searchName?: string;
  /**
   * @remarks
   * The SID of the database.
   * 
   * >  The value of the parameter is returned only for Oracle databases.
   * 
   * @example
   * test_sid
   */
  sid?: string;
  /**
   * @remarks
   * The status of the database. Valid values:
   * 
   * *   **NORMAL**: The database is running as expected.
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
      ownerIdList: GetDatabaseResponseBodyDatabaseOwnerIdList,
      ownerNameList: GetDatabaseResponseBodyDatabaseOwnerNameList,
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

export class GetDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the database.
   */
  database?: GetDatabaseResponseBodyDatabase;
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
   * An unknown error occurred.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3CDB8601-AD74-4A47-8114-08E08CD6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
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
      database: GetDatabaseResponseBodyDatabase,
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

