// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckMetaPartitionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * abc
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the data source. Set the value to odps.
   * 
   * @example
   * emr
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The name of the metadatabase.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The name of the partition in the MaxCompute metatable.
   * 
   * This parameter is required.
   * 
   * @example
   * ds=202005
   */
  partition?: string;
  /**
   * @remarks
   * The GUID of the MaxCompute metatable.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
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
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      partition: 'Partition',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      partition: 'string',
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

