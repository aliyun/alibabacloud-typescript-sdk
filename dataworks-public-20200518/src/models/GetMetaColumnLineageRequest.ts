// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaColumnLineageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-MapReduce (EMR) cluster. Configure this parameter only when you query data in an EMR compute engine instance.
   * 
   * @example
   * abc
   */
  clusterId?: string;
  /**
   * @remarks
   * The unique identifier of the field.
   * 
   * @example
   * odps.engine_name.table_name.column_name
   */
  columnGuid?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * abc
   */
  columnName?: string;
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
   * The name of the database.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * Specifies whether to query the ancestor or descendant lineage of the field. The value up indicates the ancestor lineage. The value down indicates the descendant lineage.
   * 
   * This parameter is required.
   * 
   * @example
   * up
   */
  direction?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the metatable.
   * 
   * @example
   * abc
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      columnGuid: 'ColumnGuid',
      columnName: 'ColumnName',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      direction: 'Direction',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      columnGuid: 'string',
      columnName: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      direction: 'string',
      pageNum: 'number',
      pageSize: 'number',
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

