// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * DI Job Demo
   */
  description?: string;
  /**
   * @remarks
   * Settings for the destination data sources.
   */
  destinationDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * The type of the destination data source. Valid values: `Hologres`, `OSS-HDFS`, `OSS`, `MaxCompute`, `LogHub`, `StarRocks`, `DataHub`, `AnalyticDB for MySQL`, `Kafka`, and `Hive`.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The code for a job created in script mode.
   * 
   * @example
   * {
   *     "resourceSettings": {
   *         "realtimeResourceSettings": {
   *             "requestedCu": 2,
   *             "resourceGroupIdentifier": "Serverless_res_group_123_456"
   *         },
   *         "offlineResourceSettings": {
   *             "requestedCu": 2,
   *             "resourceGroupIdentifier": "Serverless_res_group_123_456"
   *         }
   *     },
   *     "tableMappings": [
   *         {
   *             "sourceObjectSelectionRules": [
   *                 {
   *                     "expression": "autotest_hologres",
   *                     "action": "Include",
   *                     "expressionType": "Exact",
   *                     "objectType": "Datasource"
   *                 },
   *                 {
   *                     "expression": "auto_holo_2661647",
   *                     "action": "Include",
   *                     "expressionType": "Exact",
   *                     "objectType": "Table"
   *                 },
   *                 {
   *                     "expression": "public",
   *                     "action": "Include",
   *                     "expressionType": "Exact",
   *                     "objectType": "Schema"
   *                 }
   *             ],
   *             "transformationRules": [
   *                 {
   *                     "ruleTargetType": "Table",
   *                     "ruleActionType": "SourceSchema",
   *                     "ruleName": "SourceSchema_Table_BStf8aXPSCJjOWGe"
   *                 },
   *                 {
   *                     "ruleTargetType": "Schema",
   *                     "ruleActionType": "Rename",
   *                     "ruleName": "Rename_Schema_3qWNOIsljtInvKJy"
   *                 },
   *                 {
   *                     "ruleTargetType": "Table",
   *                     "ruleActionType": "Rename",
   *                     "ruleName": "Rename_Table_o3PVQq1aIKDGoVVW"
   *                 },
   *                 {
   *                     "ruleTargetType": "Table",
   *                     "ruleActionType": "DefineDstTableSettings",
   *                     "ruleName": "DefineDstTableSettings_Table_BhJltOmOCIc81fzi"
   *                 },
   *                 {
   *                     "ruleTargetType": "Table",
   *                     "ruleActionType": "ColumnMapping",
   *                     "ruleName": "ColumnMapping_Table_nP4hJPX1wh2W3fpo"
   *                 }
   *             ]
   *         }
   *     ],
   *     "sourceDataSourceSettings": [
   *         {
   *             "dataSourceProperties": {
   *                 "timeZone": "Asia/Shanghai"
   *             },
   *             "dataSourceName": "autotest_hologres"
   *         }
   *     ],
   *     "jobSettings": {
   *         "runtimeSettings": [
   * 
   *         ],
   *         "ddlHandlingSettings": [
   * 
   *         ],
   *         "columnDataTypeSettings": [
   * 
   *         ],
   *         "cycleScheduleSettings": {
   * 
   *         },
   *         "channelSettings": {
   *             "destinationChannelSettings": {
   *                 "conflictMode": "replace",
   *                 "dynamicColumnAction": "replay",
   *                 "writeMode": "replay"
   *             },
   *             "sourceChannelSettings": {
   * 
   *             }
   *         }
   *     },
   *     "destinationDataSourceType": "Hologres",
   *     "transformationRules": [
   *         {
   *             "ruleTargetType": "Table",
   *             "ruleName": "SourceSchema_Table_BStf8aXPSCJjOWGe",
   *             "ruleActionType": "SourceSchema",
   *             "ruleExpression": {
   *                 "columns": [
   *                     {
   *                         "name": "id",
   *                         "category": "normal",
   *                         "type": "BIGINT"
   *                     },
   *                     {
   *                         "name": "decimal",
   *                         "category": "normal",
   *                         "type": "DECIMAL"
   *                     }
   *                 ]
   *             }
   *         },
   *         {
   *             "ruleTargetType": "Schema",
   *             "ruleName": "Rename_Schema_3qWNOIsljtInvKJy",
   *             "ruleActionType": "Rename",
   *             "ruleExpression": {
   *                 "expression": "public"
   *             }
   *         },
   *         {
   *             "ruleTargetType": "Table",
   *             "ruleName": "Rename_Table_o3PVQq1aIKDGoVVW",
   *             "ruleActionType": "Rename",
   *             "ruleExpression": {
   *                 "expression": "auto_holo_2661647_dst"
   *             }
   *         },
   *         {
   *             "ruleTargetType": "Table",
   *             "ruleName": "DefineDstTableSettings_Table_BhJltOmOCIc81fzi",
   *             "ruleActionType": "DefineDstTableSettings",
   *             "ruleExpression": {
   *                 "ddlString": "BEGIN;
   * CREATE TABLE IF NOT EXISTS public.auto_holo_2661647_dst (
   *    id          BIGINT PRIMARY KEY,
   *    "decimal"   DECIMAL(38,18)
   * );
   * CALL SET_TABLE_PROPERTY(\\"public.auto_holo_2661647_dst\\", \\"time_to_live_in_seconds\\", \\"3153600000\\");
   * CALL SET_TABLE_PROPERTY(\\"public.auto_holo_2661647_dst\\", \\"orientation\\", \\"column\\");
   * CALL SET_TABLE_PROPERTY(\\"public.auto_holo_2661647_dst\\", \\"binlog.level\\", \\"replica\\");
   * CALL SET_TABLE_PROPERTY(\\"public.auto_holo_2661647_dst\\", \\"binlog.ttl\\", \\"2592000\\");
   * CALL SET_TABLE_PROPERTY(\\"public.auto_holo_2661647_dst\\", \\"bitmap_columns\\", \\""text","char","varchar"\\");
   * CALL SET_TABLE_PROPERTY(\\"public.auto_holo_2661647_dst\\", \\"dictionary_encoding_columns\\", \\""text":auto,"bytea":auto,"char":auto,"varchar":auto\\");
   * CALL SET_TABLE_PROPERTY(\\"public.auto_holo_2661647_dst\\", \\"distribution_key\\", \\""id"\\");
   * COMMIT;
   * ",
   *                 "ddlType": "STRUCT"
   *             }
   *         },
   *         {
   *             "ruleTargetType": "Table",
   *             "ruleName": "ColumnMapping_Table_nP4hJPX1wh2W3fpo",
   *             "ruleActionType": "ColumnMapping",
   *             "ruleExpression": {
   *                 "columnMapping": [
   *                     {
   *                         "sourceColName": "id",
   *                         "dstColName": "id"
   *                     },
   *                     {
   *                         "sourceColName": "decimal",
   *                         "dstColName": "decimal"
   *                     }
   *                 ]
   *             }
   *         }
   *     ],
   *     "migrationType": "FullAndRealtimeIncremental",
   *     "destinationDataSourceSettings": [
   *         {
   *             "dataSourceProperties": {
   * 
   *             },
   *             "dataSourceName": "autotest_hologres"
   *         }
   *     ],
   *     "sourceDataSourceType": "Hologres"
   * }
   */
  fileSpec?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use the `Name` parameter instead.
   * 
   * @example
   * mysql_to_holo_sync_8772
   * 
   * @deprecated
   */
  jobName?: string;
  /**
   * @remarks
   * The settings for the synchronization job, including DDL processing policies, data type mappings between source and destination columns, and runtime parameters.
   */
  jobSettingsShrink?: string;
  /**
   * @remarks
   * The job type. Valid values:
   * 
   * - `DatabaseRealtimeMigration`: Synchronizes multiple tables from multiple source databases in real time (stream synchronization). This type supports full, incremental, or both full and incremental synchronization.
   * 
   * - `DatabaseOfflineMigration`: Synchronizes multiple tables from multiple source databases in batches. This type supports full, incremental, or both full and incremental synchronization.
   * 
   * - `SingleTableRealtimeMigration`: Synchronizes a single source table in real time (stream synchronization).
   * 
   * @example
   * DatabaseRealtimeMigration
   */
  jobType?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * - `FullAndRealtimeIncremental`: Full and real-time incremental synchronization for an entire database.
   * 
   * - `RealtimeIncremental`: Real-time incremental synchronization for a single table.
   * 
   * - `Full`: Full batch synchronization for an entire database.
   * 
   * - `OfflineIncremental`: Incremental synchronization in batch mode.
   * 
   * - `FullAndOfflineIncremental`: Full and incremental batch synchronization for an entire database.
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  name?: string;
  /**
   * @remarks
   * The job owner.
   * 
   * @example
   * 3726346
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace for this API call. To obtain the workspace ID, log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The resource settings.
   */
  resourceSettingsShrink?: string;
  /**
   * @remarks
   * Settings for the source data sources.
   */
  sourceDataSourceSettingsShrink?: string;
  /**
   * @remarks
   * The type of the source data source. Valid values: `PolarDB`, `MySQL`, `Kafka`, `LogHub`, `Hologres`, `Oracle`, `OceanBase`, `MongoDB`, `Redshift`, `Hive`, `SQL Server`, `Doris`, and `ClickHouse`.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * Transformation mappings for the objects to be synchronized. Each mapping defines selection rules for a group of source objects and the transformation rules to apply to them.
   * 
   * > [ { "SourceObjectSelectionRules":[ { "ObjectType":"Database", "Action":"Include", "ExpressionType":"Exact", "Expression":"biz_db" }, { "ObjectType":"Schema", "Action":"Include", "ExpressionType":"Exact", "Expression":"s1" }, { "ObjectType":"Table", "Action":"Include", "ExpressionType":"Exact", "Expression":"table1" } ], "TransformationRuleNames":[ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema" } ] } ]
   */
  tableMappingsShrink?: string;
  /**
   * @remarks
   * A list of transformation rules for the objects to be synchronized.
   * 
   * > [ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema", "RuleExpression":"{\\\\"expression\\\\":\\\\"${srcDatasoureName}_${srcDatabaseName}\\\\"}" } ]
   */
  transformationRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettingsShrink: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      fileSpec: 'FileSpec',
      jobName: 'JobName',
      jobSettingsShrink: 'JobSettings',
      jobType: 'JobType',
      migrationType: 'MigrationType',
      name: 'Name',
      owner: 'Owner',
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
      fileSpec: 'string',
      jobName: 'string',
      jobSettingsShrink: 'string',
      jobType: 'string',
      migrationType: 'string',
      name: 'string',
      owner: 'string',
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

