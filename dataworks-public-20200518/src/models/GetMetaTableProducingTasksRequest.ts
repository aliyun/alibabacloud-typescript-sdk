// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableProducingTasksRequest extends $dara.Model {
  clusterId?: string;
  dataSourceType?: string;
  dbName?: string;
  schemaName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableGuid?: string;
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

