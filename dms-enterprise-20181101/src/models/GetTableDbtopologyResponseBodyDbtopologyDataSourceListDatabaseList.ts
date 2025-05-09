// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseListTableList } from "./GetTableDbtopologyResponseBodyDbtopologyDataSourceListDatabaseListTableList";


export class GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseList extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 489347
   */
  dbId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * db-test
   */
  dbName?: string;
  /**
   * @remarks
   * The type of the database. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs. Valid values:
   * 
   * *   **product**: production environment
   * *   **dev**: development environment
   * *   **pre**: pre-release environment
   * *   **test**: test environment
   * *   **sit**: system integration testing (SIT) environment
   * *   **uat**: user acceptance testing (UAT) environment
   * *   **pet**: stress testing environment
   * *   **stag**: staging environment
   * 
   * > For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * pre
   */
  envType?: string;
  /**
   * @remarks
   * The physical tables.
   */
  tableList?: GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseListTableList[];
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbName: 'DbName',
      dbType: 'DbType',
      envType: 'EnvType',
      tableList: 'TableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      dbName: 'string',
      dbType: 'string',
      envType: 'string',
      tableList: { 'type': 'array', 'itemType': GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseListTableList },
    };
  }

  validate() {
    if(Array.isArray(this.tableList)) {
      $dara.Model.validateArray(this.tableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

