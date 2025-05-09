// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobRunDetailsResponseBodyPagingInfoJobRunInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the database in the destination.
   * 
   * @example
   * dst_db
   */
  destinationDatabaseName?: string;
  /**
   * @remarks
   * The name of the destination.
   * 
   * @example
   * dst_name
   */
  destinationDatasourceName?: string;
  /**
   * @remarks
   * The name of the schema of the destination.
   * 
   * @example
   * dst_schema
   */
  destinationSchemaName?: string;
  /**
   * @remarks
   * The name of the table in the destination.
   * 
   * @example
   * dst_name
   */
  destinationTableName?: string;
  /**
   * @remarks
   * The error message that is returned if an error occurs during full batch synchronization. If no error occurs, no value is returned for this parameter.
   * 
   * @example
   * sync table t1 fail.
   */
  fullMigrationErrorMessage?: string;
  /**
   * @remarks
   * The status of full batch synchronization.
   * 
   * @example
   * Finished
   */
  fullMigrationStatus?: string;
  /**
   * @remarks
   * The total number of errors that occur during full synchronization.
   * 
   * @example
   * 0
   */
  offlineErrorRecords?: number;
  /**
   * @remarks
   * The total number of bytes that are synchronized during full synchronization.
   * 
   * @example
   * 100
   */
  offlineTotalBytes?: number;
  /**
   * @remarks
   * The total number of data records that are synchronized during full synchronization.
   * 
   * @example
   * 10
   */
  offlineTotalRecords?: number;
  /**
   * @remarks
   * The error message that is returned if an error occurs during real-time synchronization. If no error occurs, no value is returned for this parameter.
   * 
   * @example
   * sync table t1 fail.
   */
  realtimeMigrationErrorMessage?: string;
  /**
   * @remarks
   * The status of real-time synchronization.
   * 
   * @example
   * Running
   */
  realtimeMigrationStatus?: string;
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
   * The name of the source.
   * 
   * @example
   * ds_name
   */
  sourceDatasourceName?: string;
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
  /**
   * @remarks
   * The error message that is returned if an error occurs during schema synchronization. If no error occurs, no value is returned for this parameter.
   * 
   * @example
   * create table t1 fail.
   */
  structureMigrationErrorMessage?: string;
  /**
   * @remarks
   * The synchronization status of the schema.
   * 
   * @example
   * Finished
   */
  structureMigrationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDatabaseName: 'DestinationDatabaseName',
      destinationDatasourceName: 'DestinationDatasourceName',
      destinationSchemaName: 'DestinationSchemaName',
      destinationTableName: 'DestinationTableName',
      fullMigrationErrorMessage: 'FullMigrationErrorMessage',
      fullMigrationStatus: 'FullMigrationStatus',
      offlineErrorRecords: 'OfflineErrorRecords',
      offlineTotalBytes: 'OfflineTotalBytes',
      offlineTotalRecords: 'OfflineTotalRecords',
      realtimeMigrationErrorMessage: 'RealtimeMigrationErrorMessage',
      realtimeMigrationStatus: 'RealtimeMigrationStatus',
      sourceDatabaseName: 'SourceDatabaseName',
      sourceDatasourceName: 'SourceDatasourceName',
      sourceSchemaName: 'SourceSchemaName',
      sourceTableName: 'SourceTableName',
      structureMigrationErrorMessage: 'StructureMigrationErrorMessage',
      structureMigrationStatus: 'StructureMigrationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDatabaseName: 'string',
      destinationDatasourceName: 'string',
      destinationSchemaName: 'string',
      destinationTableName: 'string',
      fullMigrationErrorMessage: 'string',
      fullMigrationStatus: 'string',
      offlineErrorRecords: 'number',
      offlineTotalBytes: 'number',
      offlineTotalRecords: 'number',
      realtimeMigrationErrorMessage: 'string',
      realtimeMigrationStatus: 'string',
      sourceDatabaseName: 'string',
      sourceDatasourceName: 'string',
      sourceSchemaName: 'string',
      sourceTableName: 'string',
      structureMigrationErrorMessage: 'string',
      structureMigrationStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

