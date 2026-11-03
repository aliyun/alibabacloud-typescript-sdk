// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the destination data source. If you do not specify this parameter, no limit is applied. Valid values: Hologres, OSS-HDFS, OSS, MaxCompute, LogHub, StarRocks, DataHub, AnalyticDB_For_MySQL, Kafka, and Hive.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * - FullAndRealtimeIncremental: full and real-time incremental synchronization
   * - RealtimeIncremental: real-time incremental synchronization
   * - Full: full synchronization
   * - OfflineIncremental: batch incremental synchronization
   * - FullAndOfflineIncremental: full and batch incremental synchronization
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The name of the export task.
   * 
   * The name must be unique within the current DataWorks workspace. Duplicate names are not allowed.
   * 
   * @example
   * test_export_01
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 1967
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the source data source. If you do not specify this parameter, no limit is applied. Valid values: PolarDB, MySQL, Kafka, LogHub, Hologres, Oracle, OceanBase, MongoDB, RedShift, Hive, SQLServer, Doris, and ClickHouse.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * The task configuration specification type. Valid values: FILESPEC, CLASSIC, and ALL. FILESPEC: new-version tasks based on structured filespec. CLASSIC: tasks in the traditional configuration mode.
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

