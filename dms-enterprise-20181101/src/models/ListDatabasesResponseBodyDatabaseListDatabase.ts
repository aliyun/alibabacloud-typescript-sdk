// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatabasesResponseBodyDatabaseListDatabaseOwnerIdList } from "./ListDatabasesResponseBodyDatabaseListDatabaseOwnerIdList";
import { ListDatabasesResponseBodyDatabaseListDatabaseOwnerNameList } from "./ListDatabasesResponseBodyDatabaseListDatabaseOwnerNameList";


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

