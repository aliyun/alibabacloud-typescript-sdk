// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The destination type. Valid values: Hologres, OSS-HDFS, OSS, MaxCompute, Loghub, STARROCKS, Datahub, ANALYTICDB_FOR_MYSQL, Kafka, and Hive. If you do not configure this parameter, the API operation queries synchronization tasks that use all type of destinations.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * *   FullAndRealtimeIncremental: one-time full synchronization and real-time incremental synchronization
   * *   RealtimeIncremental: real-time incremental synchronization
   * *   Full: full synchronization
   * *   OfflineIncremental: batch incremental synchronization
   * *   FullAndOfflineIncremental: one-time full synchronization and batch incremental synchronization
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The name of the export task.
   * 
   * The name of each export task must be unique. You must make sure that the names of the export tasks in the current workspace are unique.
   * 
   * @example
   * test_export_01
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
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
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1967
   */
  projectId?: number;
  /**
   * @remarks
   * The source type. Valid values: PolarDB, MySQL, Kafka, Loghub, Hologres, Oracle, OceanBase, MongoDB, RedShift, Hive, SqlServer, Doris, and ClickHouse. If you do not configure this parameter, the API operation queries synchronization tasks that use all types of sources.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * The task configuration specification type. Valid values: FILESPEC, CLASSIC, ALL. FILESPEC: New-style task based on structured filespec; CLASSIC: Task using traditional configuration mode.
   * 
   * @example
   * FILESPEC
   */
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataSourceType: 'DestinationDataSourceType',
      migrationType: 'MigrationType',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sourceDataSourceType: 'SourceDataSourceType',
      specType: 'SpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataSourceType: 'string',
      migrationType: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sourceDataSourceType: 'string',
      specType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

