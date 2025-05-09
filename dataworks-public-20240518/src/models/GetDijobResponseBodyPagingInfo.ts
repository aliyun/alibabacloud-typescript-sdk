// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings } from "./GetDijobResponseBodyPagingInfoDestinationDataSourceSettings";
import { GetDIJobResponseBodyPagingInfoJobSettings } from "./GetDijobResponseBodyPagingInfoJobSettings";
import { GetDIJobResponseBodyPagingInfoResourceSettings } from "./GetDijobResponseBodyPagingInfoResourceSettings";
import { GetDIJobResponseBodyPagingInfoSourceDataSourceSettings } from "./GetDijobResponseBodyPagingInfoSourceDataSourceSettings";
import { GetDIJobResponseBodyPagingInfoTableMappings } from "./GetDijobResponseBodyPagingInfoTableMappings";
import { GetDIJobResponseBodyPagingInfoTransformationRules } from "./GetDijobResponseBodyPagingInfoTransformationRules";


export class GetDIJobResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 32601
   * 
   * @deprecated
   */
  DIJobId?: string;
  /**
   * @remarks
   * The description of the synchronization task.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The properties of the destination.
   */
  destinationDataSourceSettings?: GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings[];
  /**
   * @remarks
   * The destination type. Valid values: Hologres, OSS-HDFS, OSS, MaxCompute, LogHub, StarRocks, DataHub, AnalyticDB_For_MySQL, Kafka, Hive.
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
   * 32601
   */
  id?: number;
  /**
   * @remarks
   * The name of the synchronization task.
   * 
   * @example
   * imp_ods_dms_det_dealer_info_df
   */
  jobName?: string;
  /**
   * @remarks
   * The runtime settings.
   */
  jobSettings?: GetDIJobResponseBodyPagingInfoJobSettings;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * Running
   */
  jobStatus?: string;
  /**
   * @remarks
   * 任务类型
   * 
   * - DatabaseRealtimeMigration(整库实时):将源端多个库的多个表进行流同步，支持仅全量，仅增量，或全量+增量。
   * 
   * - DatabaseOfflineMigration(整库离线):将源端多个库的多个表进行批同步，支持仅全量，仅增量，或全量+增量。
   * 
   * - SingleTableRealtimeMigration(单表实时):将源端单个表进行流同步。
   * 
   * @example
   * DatabaseRealtimeMigration
   */
  jobType?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * *   FullAndRealtimeIncremental: full synchronization and real-time incremental synchronization of data in an entire database
   * *   RealtimeIncremental: real-time incremental synchronization of data in a single table
   * *   Full: full batch synchronization of data in an entire database
   * *   OfflineIncremental: batch incremental synchronization of data in an entire database
   * *   FullAndOfflineIncremental: full synchronization and batch incremental synchronization of data in an entire database
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter indicates the DataWorks workspace to which the API operation is applied.
   * 
   * @example
   * 98330
   */
  projectId?: number;
  /**
   * @remarks
   * The resource settings.
   */
  resourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettings;
  /**
   * @remarks
   * The settings of the source. Only a single source is supported.
   */
  sourceDataSourceSettings?: GetDIJobResponseBodyPagingInfoSourceDataSourceSettings[];
  /**
   * @remarks
   * The source type. Valid values: PolarDB, MySQL, Kafka, LogHub, Hologres, Oracle, OceanBase, MongoDB, RedShift, Hive, SQLServer, Doris, ClickHouse.
   * 
   * @example
   * Mysql
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * The list of mappings between rules used to select synchronization objects in the source and transformation rules applied to the selected synchronization objects. Each entry in the list displays a mapping between a rule used to select synchronization objects and a transformation rule applied to the selected synchronization objects.
   * 
   * >  [ { "SourceObjectSelectionRules":[ { "ObjectType":"Database", "Action":"Include", "ExpressionType":"Exact", "Expression":"biz_db" }, { "ObjectType":"Schema", "Action":"Include", "ExpressionType":"Exact", "Expression":"s1" }, { "ObjectType":"Table", "Action":"Include", "ExpressionType":"Exact", "Expression":"table1" } ], "TransformationRuleNames":[ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema" } ] } ]
   */
  tableMappings?: GetDIJobResponseBodyPagingInfoTableMappings[];
  /**
   * @remarks
   * The list of transformation rules that are applied to the synchronization objects selected from the source.
   * 
   * >  [ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema", "RuleExpression":"{"expression":"${srcDatasoureName}_${srcDatabaseName}"}" } ]
   */
  transformationRules?: GetDIJobResponseBodyPagingInfoTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      destinationDataSourceSettings: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      id: 'Id',
      jobName: 'JobName',
      jobSettings: 'JobSettings',
      jobStatus: 'JobStatus',
      jobType: 'JobType',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      resourceSettings: 'ResourceSettings',
      sourceDataSourceSettings: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      tableMappings: 'TableMappings',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'string',
      description: 'string',
      destinationDataSourceSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings },
      destinationDataSourceType: 'string',
      id: 'number',
      jobName: 'string',
      jobSettings: GetDIJobResponseBodyPagingInfoJobSettings,
      jobStatus: 'string',
      jobType: 'string',
      migrationType: 'string',
      projectId: 'number',
      resourceSettings: GetDIJobResponseBodyPagingInfoResourceSettings,
      sourceDataSourceSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoSourceDataSourceSettings },
      sourceDataSourceType: 'string',
      tableMappings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTableMappings },
      transformationRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTransformationRules },
    };
  }

  validate() {
    if(Array.isArray(this.destinationDataSourceSettings)) {
      $dara.Model.validateArray(this.destinationDataSourceSettings);
    }
    if(this.jobSettings && typeof (this.jobSettings as any).validate === 'function') {
      (this.jobSettings as any).validate();
    }
    if(this.resourceSettings && typeof (this.resourceSettings as any).validate === 'function') {
      (this.resourceSettings as any).validate();
    }
    if(Array.isArray(this.sourceDataSourceSettings)) {
      $dara.Model.validateArray(this.sourceDataSourceSettings);
    }
    if(Array.isArray(this.tableMappings)) {
      $dara.Model.validateArray(this.tableMappings);
    }
    if(Array.isArray(this.transformationRules)) {
      $dara.Model.validateArray(this.transformationRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

