// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobRunDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * This parameter is required.
   * 
   * @example
   * 11265
   */
  DIJobId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1234
   */
  instanceId?: number;
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
   * The name of the source.
   * 
   * @example
   * ds_name
   */
  sourceDataSourceName?: string;
  /**
   * @remarks
   * The name of the database in the source.
   * 
   * @example
   * db_name
   */
  sourceDatabaseName?: string;
  /**
   * @remarks
   * The name of the schema of the source.
   * 
   * @example
   * schema_name
   */
  sourceSchemaName?: string;
  /**
   * @remarks
   * The name of the table in the source.
   * 
   * @example
   * table_name
   */
  sourceTableName?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceDataSourceName: 'SourceDataSourceName',
      sourceDatabaseName: 'SourceDatabaseName',
      sourceSchemaName: 'SourceSchemaName',
      sourceTableName: 'SourceTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      instanceId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      sourceDataSourceName: 'string',
      sourceDatabaseName: 'string',
      sourceSchemaName: 'string',
      sourceTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

