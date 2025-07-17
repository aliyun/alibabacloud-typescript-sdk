// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobShrinkRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destinationDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * The destination type. Valid values: Hologres, OSS-HDFS, OSS, MaxCompute, LogHub, StarRocks, DataHub, AnalyticDB for MySQL, Kafka, and Hive.
   * 
   * This parameter is required.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * This parameter is deprecated and is replaced by the Name parameter.
   * 
   * @example
   * mysql_to_holo_sync_8772
   * 
   * @deprecated
   */
  jobName?: string;
  jobSettingsShrink?: string;
  /**
   * @remarks
   * The type of the synchronization task. Valid values:
   * 
   * *   DatabaseRealtimeMigration: A real-time synchronization task used to synchronize only full data, only incremental data, or full and incremental data in multiple tables of multiple databases in the source.
   * *   DatabaseOfflineMigration: A batch synchronization task used to synchronize only full data, only incremental data, or full and incremental data in multiple tables of multiple databases in the source.
   * *   SingleTableRealtimeMigration: A real-time synchronization task used to synchronize data only in a single table in the source.
   * 
   * @example
   * DatabaseRealtimeMigration
   */
  jobType?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * *   FullAndRealtimeIncremental
   * *   RealtimeIncremental
   * *   Full
   * *   OfflineIncremental
   * *   FullAndOfflineIncremental
   * 
   * This parameter is required.
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The name of the synchronization task.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSettingsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * The source type. Valid values: PolarDB, MySQL, Kafka, LogHub, Hologres, Oracle, OceanBase, MongoDB, Redshift, Hive, SQL Server, Doris, and ClickHouse.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMappingsShrink?: string;
  transformationRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettingsShrink: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettingsShrink: 'JobSettings',
      jobType: 'JobType',
      migrationType: 'MigrationType',
      name: 'Name',
      projectId: 'ProjectId',
      resourceSettingsShrink: 'ResourceSettings',
      sourceDataSourceSettingsShrink: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      tableMappingsShrink: 'TableMappings',
      transformationRulesShrink: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationDataSourceSettingsShrink: 'string',
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobSettingsShrink: 'string',
      jobType: 'string',
      migrationType: 'string',
      name: 'string',
      projectId: 'number',
      resourceSettingsShrink: 'string',
      sourceDataSourceSettingsShrink: 'string',
      sourceDataSourceType: 'string',
      tableMappingsShrink: 'string',
      transformationRulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

