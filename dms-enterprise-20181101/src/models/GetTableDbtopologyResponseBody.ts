// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableDBTopologyResponseBodyDBTopologyDataSourceListDatabaseListTableList extends $dara.Model {
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * NORMAL
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the physical table.
   * 
   * @example
   * 151977812
   */
  tableName?: string;
  /**
   * @remarks
   * The type of the table. This is a reserved parameter.
   * 
   * @example
   * yuyang_test_0000
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      tableId: 'TableId',
      tableName: 'TableName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableId: 'string',
      tableName: 'string',
      tableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetTableDBTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The topology of the data table.
   */
  DBTopology?: GetTableDBTopologyResponseBodyDBTopology;
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
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 853F7FD4-D922-4EFB-931C-D253EF159E06
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
      DBTopology: 'DBTopology',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTopology: GetTableDBTopologyResponseBodyDBTopology,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.DBTopology && typeof (this.DBTopology as any).validate === 'function') {
      (this.DBTopology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

