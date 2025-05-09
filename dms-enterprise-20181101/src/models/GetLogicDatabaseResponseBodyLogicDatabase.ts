// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLogicDatabaseResponseBodyLogicDatabaseDatabaseIds } from "./GetLogicDatabaseResponseBodyLogicDatabaseDatabaseIds";
import { GetLogicDatabaseResponseBodyLogicDatabaseOwnerIdList } from "./GetLogicDatabaseResponseBodyLogicDatabaseOwnerIdList";
import { GetLogicDatabaseResponseBodyLogicDatabaseOwnerNameList } from "./GetLogicDatabaseResponseBodyLogicDatabaseOwnerNameList";


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

