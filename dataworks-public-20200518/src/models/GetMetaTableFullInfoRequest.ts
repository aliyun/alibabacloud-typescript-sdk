// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableFullInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EMR cluster. This parameter is required only if you set the DataSourceType parameter to emr.
   * 
   * You can log on to the [EMR console](https://emr.console.aliyun.com/?spm=a2c4g.11186623.0.0.965cc5c2GeiHet#/cn-hangzhou) to query the ID.
   * 
   * @example
   * C-010A704DA760****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the data source. Set the value to emr.
   * 
   * @example
   * emr
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The name of the database. This parameter is required only if you set the DataSourceType parameter to emr.
   * 
   * You can call the [ListMetaDB](https://help.aliyun.com/document_detail/185662.html) operation to query the database name.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The page number requested for pagination.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of items per page, with a default of 10 and a maximum of 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the table. You can call the [GetMetaDBTableList](https://help.aliyun.com/document_detail/173916.html) operation to query the unique identifier of the table.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the table in the EMR cluster. This parameter is required only if you set the DataSourceType parameter to emr.
   * 
   * You can call the [GetMetaDBTableList](https://help.aliyun.com/document_detail/173916.html) operation to query the table name.
   * 
   * @example
   * abc
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

