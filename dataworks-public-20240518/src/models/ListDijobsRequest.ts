// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the destination data source. If you do not specify this parameter, jobs are not filtered by this criterion. Valid values: `Hologres`, `OSS-HDFS`, `OSS`, `MaxCompute`, `LogHub`, `StarRocks`, `DataHub`, `AnalyticDB_For_MySQL`, `Kafka`, and `Hive`.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * - `FullAndRealtimeIncremental`: full and real-time incremental synchronization
   * 
   * - `RealtimeIncremental`: real-time incremental synchronization
   * 
   * - `Full`: full synchronization
   * 
   * - `OfflineIncremental`: offline incremental synchronization
   * 
   * - `FullAndOfflineIncremental`: full and offline incremental synchronization
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The name of the Data Integration job.
   * 
   * The name must be unique within the DataWorks workspace.
   * 
   * @example
   * test_export_01
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages are numbered starting from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default: 10. Maximum: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 1967
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the source data source. If you do not specify this parameter, jobs are not filtered by this criterion. Valid values: `PolarDB`, `MySQL`, `Kafka`, `LogHub`, `Hologres`, `Oracle`, `OceanBase`, `MongoDB`, `RedShift`, `Hive`, `SQLServer`, `Doris`, and `ClickHouse`.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * The configuration type of the job. Valid values: `FILESPEC`, `CLASSIC`, and `ALL`. `FILESPEC` indicates a new job type configured based on a structured file specification. `CLASSIC` indicates a job configured in the traditional mode. If you set this parameter to `ALL`, jobs of both types are returned.
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

