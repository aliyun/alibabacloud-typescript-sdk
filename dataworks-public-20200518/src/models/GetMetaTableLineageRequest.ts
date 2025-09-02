// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableLineageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-MapReduce (EMR) cluster. Configure this parameter only if you want to query the lineage of an EMR table.
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
   * The name of the database.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * Specifies the ancestor or descendant lineage that you want to query for a field. Valid values: up and down. The value up indicates the ancestor lineage. The value down indicates the descendant lineage.
   * 
   * This parameter is required.
   * 
   * @example
   * up
   */
  direction?: string;
  /**
   * @remarks
   * The logic of paging. Configure this parameter based on the value of the response parameter NextPrimaryKey when the value of the response parameter HasNext is true in the previous request.
   * 
   * @example
   * odps.engine_name.table_name1
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

