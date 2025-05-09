// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableDBTopologyResponseBodyDBTopologyDataSourceList } from "./GetTableDbtopologyResponseBodyDbtopologyDataSourceList";


export class GetTableDBTopologyResponseBodyDBTopology extends $dara.Model {
  /**
   * @remarks
   * The data sources.
   */
  dataSourceList?: GetTableDBTopologyResponseBodyDBTopologyDataSourceList[];
  /**
   * @remarks
   * The GUID of the table in DMS.
   * 
   * @example
   * IDB_L_9032.db-test.yuyang_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * > 
   * 
   * *   If a logical table is queried, the name of the logical table is returned.
   * 
   * *   If a physical table is queried, the name of the physical table is returned.
   * 
   * @example
   * yuyang_test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceList: 'DataSourceList',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceList: { 'type': 'array', 'itemType': GetTableDBTopologyResponseBodyDBTopologyDataSourceList },
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceList)) {
      $dara.Model.validateArray(this.dataSourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

