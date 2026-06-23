// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the `Id` parameter instead.
   * 
   * @example
   * 11588
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The description of the synchronization job.
   * 
   * @example
   * DI Job Demo
   */
  description?: string;
  /**
   * @remarks
   * The job configuration in script mode.
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
   * The ID of the synchronization job.
   * 
   * @example
   * 11588
   */
  id?: number;
  /**
   * @remarks
   * The settings for the synchronization job. This includes DDL handling settings, data type mappings for columns between the source and destination, and runtime parameters.
   */
  jobSettingsShrink?: string;
  /**
   * @remarks
   * The owner of the synchronization job.
   * 
   * @example
   * 95279527
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to get the workspace ID.
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
   * A list of object transformation mappings. Each mapping specifies a set of selection rules for source objects and a list of transformation rules that apply to the selected objects.
   * 
   * > [ { "SourceObjectSelectionRules":[ { "ObjectType":"Database", "Action":"Include", "ExpressionType":"Exact", "Expression":"biz_db" }, { "ObjectType":"Schema", "Action":"Include", "ExpressionType":"Exact", "Expression":"s1" }, { "ObjectType":"Table", "Action":"Include", "ExpressionType":"Exact", "Expression":"table1" } ], "TransformationRuleNames":[ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema" } ] } ]
   */
  tableMappingsShrink?: string;
  /**
   * @remarks
   * A list of transformation rule definitions.
   * 
   * > [ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema", "RuleExpression":"{"expression":"${srcDatasoureName}_${srcDatabaseName}"}" } ]
   */
  transformationRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      fileSpec: 'FileSpec',
      id: 'Id',
      jobSettingsShrink: 'JobSettings',
      owner: 'Owner',
      projectId: 'ProjectId',
      resourceSettingsShrink: 'ResourceSettings',
      tableMappingsShrink: 'TableMappings',
      transformationRulesShrink: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      description: 'string',
      fileSpec: 'string',
      id: 'number',
      jobSettingsShrink: 'string',
      owner: 'string',
      projectId: 'number',
      resourceSettingsShrink: 'string',
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

