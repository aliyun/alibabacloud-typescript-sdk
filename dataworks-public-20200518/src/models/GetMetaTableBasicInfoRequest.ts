// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableBasicInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EMR cluster. This parameter is required only if you set the DataSourceType parameter to emr.
   * 
   * You can log on to the [EMR console](https://emr.console.aliyun.com/?spm=a2c4g.11186623.0.0.965cc5c2GeiHet#/cn-hangzhou) to query the ID.
   * 
   * @example
   * abc
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values: odps and emr.
   * 
   * @example
   * emr
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The name of the metadatabase. This parameter is required only if you set the DataSourceType parameter to emr.
   * 
   * You can call the [ListMetaDB](https://help.aliyun.com/document_detail/2780105.html) operation to query the name.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * Specifies whether to include extended fields in query results. The extended fields include ReadCount, FavoriteCount, and ViewCount. This parameter takes effect only if you set the DataSourceType parameter to odps.
   * 
   * @example
   * false
   */
  extension?: boolean;
  /**
   * @remarks
   * The GUID of the MaxCompute table. Specify the GUID in the odps.projectName.tableName format.
   * 
   * > This parameter is optional for E-MapReduce (EMR) tables.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the metatable in the EMR cluster. This parameter is required only if you set the DataSourceType parameter to emr.
   * 
   * You can call the [GetMetaDBTableList](https://help.aliyun.com/document_detail/2780086.html) operation to query the name.
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
      extension: 'Extension',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      extension: 'boolean',
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

