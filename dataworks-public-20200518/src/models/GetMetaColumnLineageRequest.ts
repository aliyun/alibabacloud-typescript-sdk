// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaColumnLineageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EMR cluster. This parameter is required for EMR scenarios.
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
   * The data source type. Valid values:
   * 
   * - odps
   * - emr
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
   * The direction of the field lineage. Valid values:
   * 
   * - up: upstream.
   * - down: downstream.
   * 
   * This parameter is required.
   * 
   * @example
   * up
   */
  direction?: string;
  /**
   * @remarks
   * The page number. Used for pagination.
   * 
   * @example
   * 1
   */
  pageNum?: number;
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
   * The name of the table.
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

