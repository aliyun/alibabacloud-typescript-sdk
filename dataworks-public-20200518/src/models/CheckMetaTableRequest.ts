// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckMetaTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EMR cluster.
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
   * The name of the EMR database.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The globally unique identifier of the table.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the EMR table.
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
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
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

