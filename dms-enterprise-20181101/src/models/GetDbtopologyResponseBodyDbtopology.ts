// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDBTopologyResponseBodyDBTopologyDBTopologyInfoList } from "./GetDbtopologyResponseBodyDbtopologyDbtopologyInfoList";


export class GetDBTopologyResponseBodyDBTopology extends $dara.Model {
  /**
   * @remarks
   * The alias of the access point.
   * 
   * @example
   * logic_db_test
   */
  alias?: string;
  /**
   * @remarks
   * The list of database splitting topology information.
   */
  DBTopologyInfoList?: GetDBTopologyResponseBodyDBTopologyDBTopologyInfoList[];
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * polardb
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment in which the database instance is deployed. Valid values:
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
   * The ID of the logical database.
   * 
   * @example
   * 1234
   */
  logicDbId?: number;
  /**
   * @remarks
   * Logical database name.
   * 
   * @example
   * logic_db_test
   */
  logicDbName?: string;
  /**
   * @remarks
   * The name of the saved search.
   * 
   * @example
   * logic_db_test
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      DBTopologyInfoList: 'DBTopologyInfoList',
      dbType: 'DbType',
      envType: 'EnvType',
      logicDbId: 'LogicDbId',
      logicDbName: 'LogicDbName',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      DBTopologyInfoList: { 'type': 'array', 'itemType': GetDBTopologyResponseBodyDBTopologyDBTopologyInfoList },
      dbType: 'string',
      envType: 'string',
      logicDbId: 'number',
      logicDbName: 'string',
      searchName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBTopologyInfoList)) {
      $dara.Model.validateArray(this.DBTopologyInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

