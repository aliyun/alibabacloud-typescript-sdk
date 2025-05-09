// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList } from "./SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList";
import { SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList } from "./SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList";


export class SearchDatabaseResponseBodySearchDatabaseListSearchDatabase extends $dara.Model {
  /**
   * @remarks
   * The alias of the database.
   * 
   * @example
   * test_rds
   */
  alias?: string;
  /**
   * @remarks
   * The name of the catalog to which the database belongs.
   * 
   * > If the type of the database engine is PostgreSQL, the name of the database is displayed.
   * 
   * @example
   * dmstest
   */
  catalogName?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 2528****
   */
  databaseId?: string;
  /**
   * @remarks
   * The name of the data link for cross-database queries.
   * 
   * @example
   * datalink_name
   */
  datalinkName?: string;
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
   * The ID of the user who assumes the database administrator (DBA) role.
   * 
   * @example
   * 10****
   */
  dbaId?: string;
  /**
   * @remarks
   * The encoding method of the database.
   * 
   * @example
   * utf8
   */
  encoding?: string;
  /**
   * @remarks
   * The environment type of the database. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * test
   */
  envType?: string;
  /**
   * @remarks
   * The endpoint of the instance in which the database resides.
   * 
   * @example
   * rm-xxxx.mysql.rds.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is not a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The IDs of the owners of the databases.
   */
  ownerIdList?: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList;
  /**
   * @remarks
   * The nicknames of the database owners.
   */
  ownerNameList?: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList;
  /**
   * @remarks
   * The port of the instance in which the database resides.
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
   * The name that is used to search for the database.
   * 
   * @example
   * test@xxx.xxx.xxx.xxx:3306
   */
  searchName?: string;
  /**
   * @remarks
   * The system ID (SID) of the instance in which the database resides.
   * 
   * @example
   * testSid
   */
  sid?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      catalogName: 'CatalogName',
      databaseId: 'DatabaseId',
      datalinkName: 'DatalinkName',
      dbType: 'DbType',
      dbaId: 'DbaId',
      encoding: 'Encoding',
      envType: 'EnvType',
      host: 'Host',
      logic: 'Logic',
      ownerIdList: 'OwnerIdList',
      ownerNameList: 'OwnerNameList',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      sid: 'Sid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      catalogName: 'string',
      databaseId: 'string',
      datalinkName: 'string',
      dbType: 'string',
      dbaId: 'string',
      encoding: 'string',
      envType: 'string',
      host: 'string',
      logic: 'boolean',
      ownerIdList: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerIdList,
      ownerNameList: SearchDatabaseResponseBodySearchDatabaseListSearchDatabaseOwnerNameList,
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      sid: 'string',
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

