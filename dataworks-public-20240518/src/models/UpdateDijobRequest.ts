// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobRequestJobSettingsColumnDataTypeSettings extends $dara.Model {
  /**
   * @remarks
   * The destination data type. Examples: `bigint`, `boolean`, `string`, `text`, `datetime`, `timestamp`, `decimal`, and `binary`. The supported data types depend on the destination data source.
   * 
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @remarks
   * The source data type. Examples: `bigint`, `boolean`, `string`, `text`, `datetime`, `timestamp`, `decimal`, and `binary`. The supported data types depend on the source data source.
   * 
   * @example
   * bigint
   */
  sourceDataType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataType: 'DestinationDataType',
      sourceDataType: 'SourceDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataType: 'string',
      sourceDataType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettingsCycleScheduleSettings extends $dara.Model {
  /**
   * @remarks
   * The scheduling parameters.
   * 
   * @example
   * bizdate=$bizdate
   */
  scheduleParameters?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleParameters: 'ScheduleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettingsDdlHandlingSettings extends $dara.Model {
  /**
   * @remarks
   * The handling action. Valid values:
   * 
   * - `Ignore`: Ignores the DDL message.
   * 
   * - `Critical`: Reports an error and terminates the synchronization job.
   * 
   * - `Normal`: Processes the DDL message normally.
   * 
   * @example
   * Critical
   */
  action?: string;
  /**
   * @remarks
   * The DDL type. Valid values:
   * 
   * - `RenameColumn`
   * 
   * - `ModifyColumn`
   * 
   * - `CreateTable`
   * 
   * - `TruncateTable`
   * 
   * - `DropTable`
   * 
   * - `DropColumn`
   * 
   * - `AddColumn`
   * 
   * @example
   * AddColumn
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettingsRuntimeSettings extends $dara.Model {
  /**
   * @remarks
   * The name of the setting. Valid values:
   * 
   * - `src.offline.datasource.max.connection`: The maximum number of concurrent connections to the source for an offline synchronization job.
   * 
   * - `dst.offline.truncate`: Specifies whether to truncate the destination table before an offline synchronization job.
   * 
   * - `runtime.offline.speed.limit.enable`: Specifies whether to enable speed limiting for an offline synchronization job.
   * 
   * - `runtime.offline.concurrent`: The concurrency level for an offline synchronization job.
   * 
   * - `runtime.enable.auto.create.schema`: Specifies whether to automatically create a schema at the destination.
   * 
   * - `runtime.realtime.concurrent`: The concurrency level for a real-time synchronization job.
   * 
   * - `runtime.realtime.failover.minute.dataxcdc`: The number of minutes to wait before a failover retry.
   * 
   * - `runtime.realtime.failover.times.dataxcdc`: The number of failover retries.
   * 
   * @example
   * src.offline.datasource.max.connection
   */
  name?: string;
  /**
   * @remarks
   * The value of the setting.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestJobSettings extends $dara.Model {
  /**
   * @remarks
   * The job settings for specific data synchronization channels. You can apply special configurations to certain channels. Currently, `Holo2Holo` (synchronization from Hologres to Hologres) and `Holo2Kafka` (synchronization from Hologres to Kafka) are supported.
   * 
   * 1. `Holo2Kafka`
   * 
   * - Example: `{"destinationChannelSettings":{"kafkaClientProperties":[{"key":"linger.ms","value":"100"}],"keyColumns":["col3"],"writeMode":"canal"}}`
   *   `kafkaClientProperties`: The Kafka producer parameters used when writing to Kafka.
   * 
   * - `keyColumns`: The columns whose values are written to the key of a Kafka message.
   * 
   * - `writeMode`: The format for writing data to Kafka. Valid values: `json` and `canal`.
   * 
   * 2. `Holo2Holo`
   * 
   * - Example: `{"destinationChannelSettings":{"conflictMode":"replace","dynamicColumnAction":"replay","writeMode":"replay"}}`
   * 
   * - `conflictMode`: The conflict handling policy for writing data to Hologres. Valid values: `replace` (overwrite) and `ignore` (ignore).
   * 
   * - `writeMode`: The method for writing data to Hologres. Valid values: `replay` and `insert`.
   * 
   * - `dynamicColumnAction`: The action for handling dynamic columns when writing data to Hologres. Valid values: `replay`, `insert`, and `ignore`.
   * 
   * @example
   * {
   *       "structInfo": "MANAGED",
   *       "storageType": "TEXTFILE",
   *       "writeMode": "APPEND",
   *       "partitionColumns": [
   *             {
   *                   "columnName": "pt",
   *                   "columnType": "STRING",
   *                   "comment": ""
   *             }
   *       ],
   *       "fieldDelimiter": ""
   * }
   */
  channelSettings?: string;
  /**
   * @remarks
   * An array of column data type mappings.
   * 
   * > ["ColumnDataTypeSettings":[ { "SourceDataType":"Bigint", "DestinationDataType":"Text" } ]
   */
  columnDataTypeSettings?: UpdateDIJobRequestJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The settings for periodic scheduling.
   */
  cycleScheduleSettings?: UpdateDIJobRequestJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * An array of DDL handling settings.
   * 
   * > ["DDLHandlingSettings":[ { "Type":"Insert", "Action":"Normal" } ]
   */
  ddlHandlingSettings?: UpdateDIJobRequestJobSettingsDdlHandlingSettings[];
  /**
   * @remarks
   * The runtime settings.
   */
  runtimeSettings?: UpdateDIJobRequestJobSettingsRuntimeSettings[];
  static names(): { [key: string]: string } {
    return {
      channelSettings: 'ChannelSettings',
      columnDataTypeSettings: 'ColumnDataTypeSettings',
      cycleScheduleSettings: 'CycleScheduleSettings',
      ddlHandlingSettings: 'DdlHandlingSettings',
      runtimeSettings: 'RuntimeSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSettings: 'string',
      columnDataTypeSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: UpdateDIJobRequestJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': UpdateDIJobRequestJobSettingsRuntimeSettings },
    };
  }

  validate() {
    if(Array.isArray(this.columnDataTypeSettings)) {
      $dara.Model.validateArray(this.columnDataTypeSettings);
    }
    if(this.cycleScheduleSettings && typeof (this.cycleScheduleSettings as any).validate === 'function') {
      (this.cycleScheduleSettings as any).validate();
    }
    if(Array.isArray(this.ddlHandlingSettings)) {
      $dara.Model.validateArray(this.ddlHandlingSettings);
    }
    if(Array.isArray(this.runtimeSettings)) {
      $dara.Model.validateArray(this.runtimeSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettingsOfflineResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The number of CUs for the Data Integration resource group used by the offline synchronization job.
   * 
   * @example
   * 2
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the Data Integration resource group used by the offline synchronization job.
   * 
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettingsRealtimeResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The number of CUs for the Data Integration resource group used by the real-time synchronization job.
   * 
   * @example
   * 2
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the Data Integration resource group used by the real-time synchronization job.
   * 
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettingsScheduleResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The number of CUs for the scheduling resource group used by the offline synchronization job.
   * 
   * @example
   * 2
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the scheduling resource group used by the offline synchronization job.
   * 
   * @example
   * S_res_group_222_333
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The resource settings for the offline synchronization job.
   */
  offlineResourceSettings?: UpdateDIJobRequestResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The resource settings for the real-time synchronization job.
   */
  realtimeResourceSettings?: UpdateDIJobRequestResourceSettingsRealtimeResourceSettings;
  /**
   * @remarks
   * The scheduling resource settings.
   */
  scheduleResourceSettings?: UpdateDIJobRequestResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: UpdateDIJobRequestResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: UpdateDIJobRequestResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: UpdateDIJobRequestResourceSettingsScheduleResourceSettings,
    };
  }

  validate() {
    if(this.offlineResourceSettings && typeof (this.offlineResourceSettings as any).validate === 'function') {
      (this.offlineResourceSettings as any).validate();
    }
    if(this.realtimeResourceSettings && typeof (this.realtimeResourceSettings as any).validate === 'function') {
      (this.realtimeResourceSettings as any).validate();
    }
    if(this.scheduleResourceSettings && typeof (this.scheduleResourceSettings as any).validate === 'function') {
      (this.scheduleResourceSettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestTableMappingsSourceObjectSelectionRules extends $dara.Model {
  /**
   * @remarks
   * The selection action. Valid values: `Include` and `Exclude`.
   * 
   * @example
   * Include
   */
  action?: string;
  /**
   * @remarks
   * The expression.
   * 
   * @example
   * mysql_table_1
   */
  expression?: string;
  /**
   * @remarks
   * The type of the expression. Valid values: `Exact` and `Regex`.
   * 
   * @example
   * Exact
   */
  expressionType?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * - `Table` (table)
   * 
   * - `Schema` (schema)
   * 
   * - `Database` (database)
   * 
   * @example
   * Table
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      expression: 'Expression',
      expressionType: 'ExpressionType',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      expression: 'string',
      expressionType: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestTableMappingsTransformationRules extends $dara.Model {
  /**
   * @remarks
   * The type of the action. Valid values:
   * 
   * - `DefinePrimaryKey`: Defines a primary key.
   * 
   * - `Rename`: Renames an object.
   * 
   * - `AddColumn`: Adds a column.
   * 
   * - `HandleDml`: Handles DML operations.
   * 
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The name of the transformation rule. The name must be unique for a specific combination of `RuleActionType` and `RuleTargetType` and can be up to 50 characters long.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the target object. Valid values:
   * 
   * - `Table` (table)
   * 
   * - `Schema` (schema)
   * 
   * - `Database` (database)
   * 
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequestTableMappings extends $dara.Model {
  /**
   * @remarks
   * The rules for selecting source objects. Each rule can select a different type of source object to synchronize, such as a source database or table.
   */
  sourceObjectSelectionRules?: UpdateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The transformation rules for the source objects.
   */
  transformationRules?: UpdateDIJobRequestTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappingsTransformationRules },
    };
  }

  validate() {
    if(Array.isArray(this.sourceObjectSelectionRules)) {
      $dara.Model.validateArray(this.sourceObjectSelectionRules);
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

export class UpdateDIJobRequestTransformationRules extends $dara.Model {
  /**
   * @remarks
   * The type of the action. Valid values:
   * 
   * - `DefinePrimaryKey`: Defines a primary key.
   * 
   * - `Rename`: Renames an object.
   * 
   * - `AddColumn`: Adds a column.
   * 
   * - `HandleDml`: Handles DML operations.
   * 
   * - `DefineIncrementalCondition`: Defines an incremental condition.
   * 
   * - `DefineCycleScheduleSettings`: Defines periodic scheduling settings.
   * 
   * - `DefinePartitionKey`: Defines a partition key.
   * 
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The rule expression, specified as a JSON string.
   * 
   * 1. Rename rule (`Rename`)
   * 
   * - Example: `{"expression":"${srcDatasourceName}_${srcDatabaseName}_0922"}`
   * 
   * - `expression`: The expression for the rename transformation rule. The expression supports variables, including `${srcDatasourceName}` (source data source name), `${srcDatabaseName}` (source database name), and `${srcTableName}` (source table name).
   * 
   * 2. Add column rule (`AddColumn`)
   * 
   * - Example: `{"columns":[{"columnName":"my_add_column","columnValueType":"Constant","columnValue":"123"}]}`
   * 
   * - If this rule is not specified, no columns are added.
   * 
   * - `columnName`: The name of the column to add.
   * 
   * - `columnValueType`: The value type of the added column. Valid values: `Constant` and `Variable`.
   * 
   * - `columnValue`: The value of the added column. If `columnValueType` is `Constant`, the value is a custom constant of the string type. If `columnValueType` is `Variable`, the value is a built-in variable. Valid built-in variables: `EXECUTE_TIME` (execution time, Long type), `DB_NAME_SRC` (source database name, String type), `DATASOURCE_NAME_SRC` (source data source name, String type), `TABLE_NAME_SRC` (source table name, String type), `DB_NAME_DEST` (destination database name, String type), `DATASOURCE_NAME_DEST` (destination data source name, String type), `TABLE_NAME_DEST` (destination table name, String type), and `DB_NAME_SRC_TRANSED` (transformed database name, String type).
   * 
   * 3. Define primary key rule (`DefinePrimaryKey`)
   * 
   * - Example: `{"columns":["ukcolumn1","ukcolumn2"]}`
   * 
   * - If this rule is not specified, the primary key of the source is used by default.
   * 
   * - Data Integration does not modify the structure of an existing destination table. If a specified primary key column does not exist in the table, the synchronization job fails.
   * 
   * - When a destination table is automatically created, Data Integration includes the defined primary key columns in the structure. If a specified primary key column is not in the destination column set, the synchronization job fails.
   * 
   * 4. DML handling rule (`HandleDml`)
   * 
   * - Example: `{"dmlPolicies":[{"dmlType":"Delete","dmlAction":"Filter","filterCondition":"id > 1"}]}`
   * 
   * - If this rule is not specified, the default action for `Insert`, `Update`, and `Delete` operations is `Normal`.
   * 
   * - `dmlType`: The DML operation type. Valid values: `Insert`, `Update`, and `Delete`.
   * 
   * - `dmlAction`: The DML handling policy. Valid values: `Normal` (process the operation), `Ignore` (ignore the operation), `Filter` (conditionally process the operation, used when `dmlType` is `Update` or `Delete`), and `LogicalDelete` (perform a logical delete).
   * 
   * - `filterCondition`: The DML filter condition, used when `dmlAction` is `Filter`.
   * 
   * 5. Incremental condition rule (`DefineIncrementalCondition`)
   * 
   * - Example: `{"where":"id > 0"}`
   * 
   * - The `WHERE` clause for the incremental condition.
   * 
   * 6. Periodic scheduling rule (`DefineCycleScheduleSettings`)
   * 
   * - Example: `{"cronExpress":" * * * * * *", "cycleType":"1"}`
   * 
   * - Specifies the scheduling parameters for a periodic job.
   * 
   * 7. Define partition key rule (`DefinePartitionKey`)
   * 
   * - Example: `{"columns":["id"]}`
   * 
   * - Specifies the partition key.
   * 
   * @example
   * {"expression":"${srcDatasoureName}_${srcDatabaseName}"}
   */
  ruleExpression?: string;
  /**
   * @remarks
   * The name of the transformation rule. The name must be unique for a specific combination of `RuleActionType` and `RuleTargetType` and can be up to 50 characters long.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the target object. Valid values:
   * 
   * - `Table` (table)
   * 
   * - `Schema` (schema)
   * 
   * - `Database` (database)
   * 
   * @example
   * Table
   */
  ruleTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      ruleActionType: 'RuleActionType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      ruleTargetType: 'RuleTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      ruleTargetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDIJobRequest extends $dara.Model {
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
  jobSettings?: UpdateDIJobRequestJobSettings;
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
  resourceSettings?: UpdateDIJobRequestResourceSettings;
  /**
   * @remarks
   * A list of object transformation mappings. Each mapping specifies a set of selection rules for source objects and a list of transformation rules that apply to the selected objects.
   * 
   * > [ { "SourceObjectSelectionRules":[ { "ObjectType":"Database", "Action":"Include", "ExpressionType":"Exact", "Expression":"biz_db" }, { "ObjectType":"Schema", "Action":"Include", "ExpressionType":"Exact", "Expression":"s1" }, { "ObjectType":"Table", "Action":"Include", "ExpressionType":"Exact", "Expression":"table1" } ], "TransformationRuleNames":[ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema" } ] } ]
   */
  tableMappings?: UpdateDIJobRequestTableMappings[];
  /**
   * @remarks
   * A list of transformation rule definitions.
   * 
   * > [ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema", "RuleExpression":"{"expression":"${srcDatasoureName}_${srcDatabaseName}"}" } ]
   */
  transformationRules?: UpdateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      fileSpec: 'FileSpec',
      id: 'Id',
      jobSettings: 'JobSettings',
      owner: 'Owner',
      projectId: 'ProjectId',
      resourceSettings: 'ResourceSettings',
      tableMappings: 'TableMappings',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      description: 'string',
      fileSpec: 'string',
      id: 'number',
      jobSettings: UpdateDIJobRequestJobSettings,
      owner: 'string',
      projectId: 'number',
      resourceSettings: UpdateDIJobRequestResourceSettings,
      tableMappings: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappings },
      transformationRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTransformationRules },
    };
  }

  validate() {
    if(this.jobSettings && typeof (this.jobSettings as any).validate === 'function') {
      (this.jobSettings as any).validate();
    }
    if(this.resourceSettings && typeof (this.resourceSettings as any).validate === 'function') {
      (this.resourceSettings as any).validate();
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

