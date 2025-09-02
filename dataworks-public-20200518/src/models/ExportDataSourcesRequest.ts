// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportDataSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   odps
   * *   mysql
   * *   rds
   * *   oss
   * *   sqlserver
   * *   polardb
   * *   oracle
   * *   mongodb
   * *   emr
   * *   postgresql
   * *   analyticdb_for_mysql
   * *   hybriddb_for_postgresql
   * *   holo
   * 
   * @example
   * rds
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The environment in which the data source resides. Valid values:
   * 
   * *   0: development environment
   * *   1: production environment
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The keyword contained in the names of the data sources that you want to export. You can specify only one keyword. For example, if you set this parameter to test, you can call the ExportDataSources operation to export all data sources whose names contain test in the workspace.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the data sources belong. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to query the ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The subtype of the data source. This parameter takes effect only when the DataSourceType parameter is set to rds.
   * 
   * If the value of the DataSourceType parameter is rds, the value of this parameter can be mysql, sqlserver, or postgresql.
   * 
   * @example
   * mysql
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      envType: 'EnvType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      envType: 'number',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      subType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

