// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDIJobRequestDestinationDataSourceSettings } from "./CreateDijobRequestDestinationDataSourceSettings";
import { CreateDIJobRequestJobSettings } from "./CreateDijobRequestJobSettings";
import { CreateDIJobRequestResourceSettings } from "./CreateDijobRequestResourceSettings";
import { CreateDIJobRequestSourceDataSourceSettings } from "./CreateDijobRequestSourceDataSourceSettings";
import { CreateDIJobRequestTableMappings } from "./CreateDijobRequestTableMappings";
import { CreateDIJobRequestTransformationRules } from "./CreateDijobRequestTransformationRules";


export class CreateDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the synchronization task.
   * 
   * @example
   * The description of the synchronization task.
   */
  description?: string;
  /**
   * @remarks
   * The settings of the destination. Only a single destination is supported.
   * 
   * This parameter is required.
   */
  destinationDataSourceSettings?: CreateDIJobRequestDestinationDataSourceSettings[];
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
  /**
   * @remarks
   * The settings for the dimension of the synchronization task. The settings include processing policies for DDL messages, policies for data type mappings between source fields and destination fields, and runtime parameters of the synchronization task.
   */
  jobSettings?: CreateDIJobRequestJobSettings;
  /**
   * @remarks
   * The type of the task. This parameter is optional. Valid values:
   * 
   * *   DatabaseRealtimeMigration: A real-time synchronization task used to synchronize only full data, only incremental data, or full and incremental data in multiple tables of multiple databases at the source.
   * *   DatabaseOfflineMigration: A batch synchronization task used to synchronize only full data, only incremental data, or full and incremental data in multiple tables of multiple databases at the source.
   * *   SingleTableRealtimeMigration: A real-time synchronization task used to synchronize only data in single table at the source.
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
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The resource settings.
   * 
   * This parameter is required.
   */
  resourceSettings?: CreateDIJobRequestResourceSettings;
  /**
   * @remarks
   * The settings of the source. Only a single source is supported.
   * 
   * This parameter is required.
   */
  sourceDataSourceSettings?: CreateDIJobRequestSourceDataSourceSettings[];
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
   * The list of mappings between rules used to select synchronization objects in the source and transformation rules applied to the selected synchronization objects. Each entry in the list displays a mapping between a rule used to select synchronization objects and a transformation rule applied to the selected synchronization objects.
   * 
   * >  [ { "SourceObjectSelectionRules":[ { "ObjectType":"Database", "Action":"Include", "ExpressionType":"Exact", "Expression":"biz_db" }, { "ObjectType":"Schema", "Action":"Include", "ExpressionType":"Exact", "Expression":"s1" }, { "ObjectType":"Table", "Action":"Include", "ExpressionType":"Exact", "Expression":"table1" } ], "TransformationRuleNames":[ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema" } ] } ]
   * 
   * This parameter is required.
   */
  tableMappings?: CreateDIJobRequestTableMappings[];
  /**
   * @remarks
   * The list of transformation rules for objects involved in the synchronization task.
   * 
   * >  [ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema", "RuleExpression":"{"expression":"${srcDatasoureName}_${srcDatabaseName}"}" } ]
   */
  transformationRules?: CreateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettings: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettings: 'JobSettings',
      jobType: 'JobType',
      migrationType: 'MigrationType',
      name: 'Name',
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
      description: 'string',
      destinationDataSourceSettings: { 'type': 'array', 'itemType': CreateDIJobRequestDestinationDataSourceSettings },
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobSettings: CreateDIJobRequestJobSettings,
      jobType: 'string',
      migrationType: 'string',
      name: 'string',
      projectId: 'number',
      resourceSettings: CreateDIJobRequestResourceSettings,
      sourceDataSourceSettings: { 'type': 'array', 'itemType': CreateDIJobRequestSourceDataSourceSettings },
      sourceDataSourceType: 'string',
      tableMappings: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappings },
      transformationRules: { 'type': 'array', 'itemType': CreateDIJobRequestTransformationRules },
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

