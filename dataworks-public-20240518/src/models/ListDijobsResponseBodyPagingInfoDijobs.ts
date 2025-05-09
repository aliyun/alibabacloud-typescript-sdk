// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobsResponseBodyPagingInfoDIJobs extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 32599
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The destination type. Valid values: Hologres, OSS-HDFS, OSS, MaxCompute, Loghub, STARROCKS, DataHub, ANALYTICDB_FOR_MYSQL, Kafka, and Hive.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 32599
   */
  id?: number;
  /**
   * @remarks
   * The name of the synchronization task.
   * 
   * @example
   * mysql_to_holo_sync_35197
   */
  jobName?: string;
  /**
   * @remarks
   * The status of the synchronization task. Valid values:
   * 
   * *   Finished
   * *   Initialized
   * *   Stopped
   * *   Failed
   * *   Running
   * *   Stopping
   * 
   * @example
   * Running
   */
  jobStatus?: string;
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
   * The ID of the DataWorks workspace to which the synchronization task belongs.
   * 
   * @example
   * 26442
   */
  projectId?: number;
  /**
   * @remarks
   * The source type. Valid values: PolarDB, MySQL, Kafka, Loghub, Hologres, Oracle, OceanBase, MongoDB, RedShift, Hive, SqlServer, Doris, and ClickHouse. If you do not configure this parameter, the API operation returns synchronization tasks that use all types of sources.
   * 
   * @example
   * Mysql
   */
  sourceDataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      destinationDataSourceType: 'DestinationDataSourceType',
      id: 'Id',
      jobName: 'JobName',
      jobStatus: 'JobStatus',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      sourceDataSourceType: 'SourceDataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      destinationDataSourceType: 'string',
      id: 'number',
      jobName: 'string',
      jobStatus: 'string',
      migrationType: 'string',
      projectId: 'number',
      sourceDataSourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

