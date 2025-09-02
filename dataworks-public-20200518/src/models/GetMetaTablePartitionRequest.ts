// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTablePartitionRequestSortCriterion extends $dara.Model {
  /**
   * @remarks
   * The order in which partitions in the metatable are sorted. Valid values: asc and desc. Default value: desc.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The field that is used to sort partitions in the metatable. Valid values: name and modify_time. By default, partitions in the metatable are sorted based on their creation time.
   * 
   * @example
   * name
   */
  sortField?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      sortField: 'SortField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      sortField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionRequest extends $dara.Model {
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
  sortCriterion?: GetMetaTablePartitionRequestSortCriterion;
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
      sortCriterion: 'SortCriterion',
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
      sortCriterion: GetMetaTablePartitionRequestSortCriterion,
      tableGuid: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(this.sortCriterion && typeof (this.sortCriterion as any).validate === 'function') {
      (this.sortCriterion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

