// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableLineageRequest extends $dara.Model {
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
   * The data source type. Valid values: odps and emr.
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
   * The direction of the lineage. Valid values:
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
   * The pagination logic.
   * 
   * If HasNext is set to true and NextPrimaryKey is not empty in the last response, set this parameter to the value of NextPrimaryKey in the next request.
   * 
   * @example
   * next_primary_key
   */
  nextPrimaryKey?: string;
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
   * The unique identifier of the table.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
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
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      direction: 'Direction',
      nextPrimaryKey: 'NextPrimaryKey',
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
      direction: 'string',
      nextPrimaryKey: 'string',
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

