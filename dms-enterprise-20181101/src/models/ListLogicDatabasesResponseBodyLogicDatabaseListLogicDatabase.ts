// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseDatabaseIds } from "./ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseDatabaseIds";
import { ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList } from "./ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList";
import { ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList } from "./ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList";


export class ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabase extends $dara.Model {
  /**
   * @remarks
   * The alias of the logical database.
   * 
   * @example
   * logic_db_alias
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
   * Logical database sub-ID list.
   */
  databaseIds?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseDatabaseIds;
  /**
   * @remarks
   * The type of the logical database. For more information about the valid values of this parameter, see [DbType parameter](https://www.alibabacloud.com/help/en/data-management-service/latest/dbtype-parameter).
   * 
   * @example
   * polardb
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the logical database belongs. Valid values:
   * 
   * - **product**: production environment
   * - **dev**: development environment
   * - **pre**: staging environment
   * - **test**: test environment
   * - **sit**: system integration testing (SIT) environment
   * - **uat**: user acceptance testing (UAT) environment
   * - **pet**: stress testing environment
   * - **stag**: STAG environment
   * 
   * @example
   * test
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
  ownerIdList?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList;
  /**
   * @remarks
   * The names of the owners of the logical database.
   */
  ownerNameList?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList;
  /**
   * @remarks
   * The name of the logical database.
   * 
   * @example
   * logic_db
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the logical database.
   * 
   * > We recommend that you do not use this parameter for business development. The format of the parameter value may be modified in later versions.
   * 
   * @example
   * logic_db[logic_db_alias]
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
      databaseIds: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseDatabaseIds,
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      ownerIdList: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerIdList,
      ownerNameList: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabaseOwnerNameList,
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

