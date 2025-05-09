// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseList } from "./GetTableDbtopologyResponseBodyDbtopologyDataSourceListDatabaseList";


export class GetTableDBTopologyResponseBodyDBTopologyDataSourceList extends $dara.Model {
  /**
   * @remarks
   * The physical databases.
   */
  databaseList?: GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseList[];
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
   * The endpoint of the data source.
   * 
   * @example
   * xxx.mysql.polardb.rds.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The port that is used to connect to the data source.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The system ID (SID) of the data source.
   * 
   * @example
   * def
   */
  sid?: string;
  static names(): { [key: string]: string } {
    return {
      databaseList: 'DatabaseList',
      dbType: 'DbType',
      host: 'Host',
      port: 'Port',
      sid: 'Sid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseList: { 'type': 'array', 'itemType': GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseList },
      dbType: 'string',
      host: 'string',
      port: 'number',
      sid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseList)) {
      $dara.Model.validateArray(this.databaseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

