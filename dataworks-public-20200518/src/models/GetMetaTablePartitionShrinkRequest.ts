// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTablePartitionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EMR cluster. This parameter is required only if you set the DataSourceType parameter to emr.
   * 
   * You can log on to the [EMR console](https://emr.console.aliyun.com/?spm=a2c4g.11186623.0.0.965cc5c2GeiHet#/cn-hangzhou) to obtain the ID.
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
   * The name of the database. This parameter is required only if you set the DataSourceType parameter to emr.
   * 
   * You can call the [ListMetaDB](https://help.aliyun.com/document_detail/2780105.html) operation to query the name of the metadatabase.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The page number.
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
   * The logic for sorting partitions in the metatable.
   */
  sortCriterionShrink?: string;
  /**
   * @remarks
   * The unique identifier of the metatable.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the metatable in the EMR cluster. This parameter is required only if you set the DataSourceType parameter to emr.
   * 
   * You can call the [GetMetaDBTableList](https://help.aliyun.com/document_detail/2780086.html) operation to query the name of the metatable.
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortCriterionShrink: 'SortCriterion',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortCriterionShrink: 'string',
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

