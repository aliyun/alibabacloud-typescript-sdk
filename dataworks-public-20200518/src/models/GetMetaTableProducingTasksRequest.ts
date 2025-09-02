// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableProducingTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EMR cluster. This parameter takes effect only if the DataSourceType parameter is set to emr.
   * 
   * @example
   * C-A_SAMPLE_CLUSTER_ID
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the metatable. Valid values: odps and emr. The value odps indicates that the metatable is a MaxCompute metatable. The value emr indicates that the metatable is an E-MapReduce (EMR) metatable.
   * 
   * @example
   * odps
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * myschema
   */
  schemaName?: string;
  /**
   * @remarks
   * The GUID of the MaxCompute metatable.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.sample_project.sample_table
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the metatable.
   * 
   * @example
   * sample_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceType: 'DataSourceType',
      dbName: 'DbName',
      schemaName: 'SchemaName',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceType: 'string',
      dbName: 'string',
      schemaName: 'string',
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

