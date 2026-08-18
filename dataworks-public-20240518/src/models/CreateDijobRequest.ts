// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestDestinationDataSourceSettingsDataSourceProperties extends $dara.Model {
  /**
   * @remarks
   * Specify either this parameter or DataSourceName. This parameter specifies custom data source connection configuration information, including the instance ID, access identity, and instance region.
   * 
   * This parameter supports only datasource config in instance pattern (ConnectionPropertiesMode). Different data sources have different property specifications. For more information, see [Data source connection information ConnectionProperties](https://help.aliyun.com/document_detail/2852465.html).
   * 
   * @example
   * { "instanceId": "rm-2ze09gn3x6xxx", "password": "xxxx", "database": "agent", "username": "zmtest" "regionId": "cn-beijing" }
   */
  connectionProperties?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestDestinationDataSourceSettings extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * holo_datasource_1
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The properties of the data source.
   */
  dataSourceProperties?: CreateDIJobRequestDestinationDataSourceSettingsDataSourceProperties;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceProperties: 'DataSourceProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceProperties: CreateDIJobRequestDestinationDataSourceSettingsDataSourceProperties,
    };
  }

  validate() {
    if(this.dataSourceProperties && typeof (this.dataSourceProperties as any).validate === 'function') {
      (this.dataSourceProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestJobSettingsColumnDataTypeSettings extends $dara.Model {
  /**
   * @remarks
   * The destination data type, such as bigint, boolean, string, text, datetime, timestamp, decimal, or binary. The available types vary by data source type.
   * 
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @remarks
   * The source data type, such as bigint, boolean, string, text, datetime, timestamp, decimal, or binary. The available types vary by data source type.
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

export class CreateDIJobRequestJobSettingsCycleScheduleSettings extends $dara.Model {
  /**
   * @remarks
   * The synchronization type that requires cycle scheduling. Valid values:
   * 
   * - Full: full synchronization.
   * - OfflineIncremental: offline incremental synchronization.
   * 
   * @example
   * Full
   */
  cycleMigrationType?: string;
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
      cycleMigrationType: 'CycleMigrationType',
      scheduleParameters: 'ScheduleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleMigrationType: 'string',
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

export class CreateDIJobRequestJobSettingsDdlHandlingSettings extends $dara.Model {
  /**
   * @remarks
   * The handling action. Valid values:
   * 
   * - Ignore: ignores the DDL operation.
   * - Critical: reports an error.
   * - Normal: processes the DDL operation normally.
   * 
   * @example
   * Critical
   */
  action?: string;
  /**
   * @remarks
   * The DDL type. Valid values:
   * 
   * - RenameColumn: renames a column.
   * - ModifyColumn: modifies a column.
   * - CreateTable: creates a table.
   * - TruncateTable: truncates a table.
   * - DropTable: drops a table.
   * - DropColumn: drops a column.
   * - AddColumn: adds a column.
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

export class CreateDIJobRequestJobSettingsRuntimeSettings extends $dara.Model {
  /**
   * @remarks
   * The setting name. Valid values:
   * 
   * - src.offline.datasource.max.connection: the maximum number of connections to the source for offline batch tasks.
   * - dst.offline.truncate: specifies whether to truncate the destination table.
   * - runtime.offline.speed.limit.enable: specifies whether to enable throttling for offline batch tasks.
   * - runtime.offline.concurrent: the concurrency of offline batch synchronization tasks.
   * - runtime.enable.auto.create.schema: specifies whether to automatically create a schema on the destination.
   * - runtime.realtime.concurrent: the concurrency of real-time tasks.
   * - runtime.realtime.failover.minute.dataxcdc: the wait time in minutes before restarting after a failover failure.
   * - runtime.realtime.failover.times.dataxcdc: the number of restart attempts after a failover failure.
   * 
   * @example
   * runtime.offline.concurrent
   */
  name?: string;
  /**
   * @remarks
   * The setting value.
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

export class CreateDIJobRequestJobSettings extends $dara.Model {
  /**
   * @remarks
   * The channel-related task settings. You can configure special settings for specific channels. Currently supported channels include Holo2Holo (synchronization from Hologres to Hologres) and Holo2Kafka (synchronization from Hologres to Kafka).
   * 
   * 1. Holo2Kafka
   * - Example: {"destinationChannelSettings":{"kafkaClientProperties":[{"key":"linger.ms","value":"100"}],"keyColumns":["col3"],"writeMode":"canal"}}
   * - kafkaClientProperties: Kafka producer parameters used when writing to Kafka.
   * - keyColumns: the columns whose values are written to Kafka.
   * - writeMode: the Kafka write format. Currently supports json and canal.
   * 2. Holo2Holo
   * - Example: {"destinationChannelSettings":{"conflictMode":"replace","dynamicColumnAction":"replay","writeMode":"replay"}}
   * 
   * - conflictMode: the conflict handling policy when writing to Hologres. Valid values: replace (overwrite) and ignore.
   * 
   * - writeMode: the write mode for Hologres. Valid values: replay and insert.
   * 
   * - dynamicColumnAction: the dynamic column handling mode when writing to Hologres. Valid values: replay, insert, and ignore.
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
   * The column data type mapping array.
   * 
   * > ["ColumnDataTypeSettings":[ { "SourceDataType":"Bigint", "DestinationDataType":"Text" } ]
   */
  columnDataTypeSettings?: CreateDIJobRequestJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The cycle scheduling settings.
   */
  cycleScheduleSettings?: CreateDIJobRequestJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * The DDL handling settings array.
   * 
   * 
   * > ["DDLHandlingSettings":[ { "Type":"Insert", "Action":"Normal" } ]
   */
  ddlHandlingSettings?: CreateDIJobRequestJobSettingsDdlHandlingSettings[];
  /**
   * @remarks
   * The runtime settings.
   */
  runtimeSettings?: CreateDIJobRequestJobSettingsRuntimeSettings[];
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
      columnDataTypeSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: CreateDIJobRequestJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsRuntimeSettings },
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

export class CreateDIJobRequestResourceSettingsOfflineResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The number of compute units (CUs) of the data integration resource group used for offline synchronization.
   * 
   * @example
   * 2
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the data integration resource group used for offline synchronization.
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

export class CreateDIJobRequestResourceSettingsRealtimeResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The number of CUs of the data integration resource group used for real-time synchronization.
   * 
   * @example
   * 2
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the data integration resource group used for real-time synchronization.
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

export class CreateDIJobRequestResourceSettingsScheduleResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The number of CUs of the scheduling resource group used for offline synchronization nodes.
   * 
   * @example
   * 2
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the scheduling resource group used for offline synchronization nodes.
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

export class CreateDIJobRequestResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The offline synchronization resource settings.
   */
  offlineResourceSettings?: CreateDIJobRequestResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The real-time synchronization resource settings.
   */
  realtimeResourceSettings?: CreateDIJobRequestResourceSettingsRealtimeResourceSettings;
  /**
   * @remarks
   * The schedule resource settings.
   */
  scheduleResourceSettings?: CreateDIJobRequestResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: CreateDIJobRequestResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: CreateDIJobRequestResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: CreateDIJobRequestResourceSettingsScheduleResourceSettings,
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

export class CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties extends $dara.Model {
  /**
   * @remarks
   * Specify either this parameter or DataSourceName. This parameter specifies custom data source connection configuration information, including the instance ID, access identity, and instance region.
   * 
   * This parameter supports only datasource config in instance pattern (ConnectionPropertiesMode). Different data sources have different property specifications. For more information, see [Data source connection information ConnectionProperties](https://help.aliyun.com/document_detail/2852465.html).
   * 
   * @example
   * { "instanceId": "rm-2ze09gn3x6xxx", "password": "xxxx", "database": "agent", "username": "zmtest" "regionId": "cn-beijing" }
   */
  connectionProperties?: string;
  /**
   * @remarks
   * The database encoding.
   * 
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      encoding: 'Encoding',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'string',
      encoding: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestSourceDataSourceSettings extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * mysql_datasource_1
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The properties of the data source.
   */
  dataSourceProperties?: CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceProperties: 'DataSourceProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceProperties: CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties,
    };
  }

  validate() {
    if(this.dataSourceProperties && typeof (this.dataSourceProperties as any).validate === 'function') {
      (this.dataSourceProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIJobRequestTableMappingsSourceObjectSelectionRules extends $dara.Model {
  /**
   * @remarks
   * The selection action. Valid values: Include and Exclude.
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
   * The expression type. Valid values: Exact and Regex.
   * 
   * @example
   * Exact
   */
  expressionType?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * - Table
   * - Schema
   * - Database
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

export class CreateDIJobRequestTableMappingsTransformationRules extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * - DefinePrimaryKey: defines a primary key.
   * - Rename: renames an object.
   * - AddColumn: adds a column.
   * - HandleDml: handles DML operations.
   * - DefineIncrementalCondition: defines an incremental condition.
   * - DefineCycleScheduleSettings: defines cycle scheduling settings.
   * - DefinePartitionKey: defines a partition key.
   * 
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The rule name. The name must be unique within the same action type and target type combination. The name cannot exceed 50 characters in length.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The target type on which the action is applied. Valid values:
   * 
   * - Table
   * - Schema
   * - Database
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

export class CreateDIJobRequestTableMappings extends $dara.Model {
  /**
   * @remarks
   * Each rule selects a set of source objects to synchronize. Multiple rules together select a single table.
   */
  sourceObjectSelectionRules?: CreateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The list of synchronization object transformation rule definitions. Each element represents one transformation rule.
   */
  transformationRules?: CreateDIJobRequestTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappingsTransformationRules },
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

export class CreateDIJobRequestTransformationRules extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * - DefinePrimaryKey: defines a primary key.
   * - Rename: renames an object.
   * - AddColumn: adds a column.
   * - HandleDml: handles DML operations.
   * - DefineIncrementalCondition: defines an incremental condition.
   * - DefineCycleScheduleSettings: defines cycle scheduling settings.
   * - DefinePartitionKey: defines a partition key.
   * 
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The rule expression in JSON string format.
   * 
   * 1. Rename rule (Rename)
   * - Example: {"expression":"${srcDatasourceName}_${srcDatabaseName}_0922" }
   * - expression: the rename transformation rule expression. The expression supports the following variables: ${srcDatasourceName} (source data source name), ${srcDatabaseName} (source database name), and ${srcTableName} (source table name).
   * 2. Add column rule (AddColumn)
   * - Example: {"columns":[{"columnName":"my_add_column","columnValueType":"Constant","columnValue":"123"}]}
   * - If not specified, the default rule is to neither add columns nor perform replication.
   * - columnName: the name of the additional column.
   * - columnValueType: the value type of the additional column. Valid values: Constant and Variable.
   * - columnValue: the value of the additional column. When columnValueType is set to Constant, the value is a custom constant of the String type. When columnValueType is set to Variable, the value is a built-in variable. Valid built-in variables: EXECUTE_TIME (execution time, Long type), DB_NAME_SRC (source database name, String type), DATASOURCE_NAME_SRC (source data source name, String type), TABLE_NAME_SRC (source table name, String type), DB_NAME_DEST (destination database name, String type), DATASOURCE_NAME_DEST (destination data source name, String type), TABLE_NAME_DEST (destination table name, String type), and DB_NAME_SRC_TRANSED (transformed database name, String type).
   * 3. Define primary key columns for the destination table (DefinePrimaryKey)
   * - Example: {"columns":["ukcolumn1","ukcolumn2"]}
   * - If not specified, the source primary key columns are used by default.
   * - When the destination table already exists: the data integration system does not modify the destination table schema. If the specified primary key columns are not in the destination column set, the node reports an error upon startup.
   * - When the destination table uses automatic creation: the data integration system automatically creates the destination table schema, which includes the defined primary key columns. If the specified primary key columns are not in the destination column set, the node reports an error upon startup.
   * 4. DML operations handling rule (HandleDml)
   * - Example: {"dmlPolicies":[{"dmlType":"Delete","dmlAction":"Filter","filterCondition":"id > 1"}]}
   * - If not specified, the default rule is Normal for Insert, Update, and Delete.
   * - dmlType: the DML operations type. Valid values: Insert, Update, and Delete.
   * - dmlAction: the DML operations handling policy. Valid values: Normal (process normally), Ignore (ignore), Filter (conditionally process normally, used when dmlType is Update or Delete), and LogicalDelete (logical delete).
   * - filterCondition: the DML filter condition, used when dmlAction is set to Filter.
   * 5. Incremental condition (DefineIncrementalCondition)
   * - Example: {"where":"id > 0"}
   * - Specifies the incremental filter condition.
   * 6. Cycle scheduling parameters (DefineCycleScheduleSettings)
   * - Example: {"cronExpress":" * * * * * *", "cycleType":"1"}
   * - Specifies the cycle node scheduling parameters.
   * 7. Define partition key (DefinePartitionKey)
   * - Example: {"columns":["id"]}
   * - Specifies the partition key.
   * 
   * @example
   * {
   *       "expression": "${srcDatasoureName}_${srcDatabaseName}"
   * }
   */
  ruleExpression?: string;
  /**
   * @remarks
   * The rule name. When the action type and target type are the same, the rule name must be unique. The name cannot exceed 50 characters in length.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The target type on which the action is applied. Valid values:
   * 
   * - Table
   * - Schema
   * - Database
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

export class CreateDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * DI Job Demo
   */
  description?: string;
  /**
   * @remarks
   * The list of destination data source settings.
   */
  destinationDataSourceSettings?: CreateDIJobRequestDestinationDataSourceSettings[];
  /**
   * @remarks
   * The type of the destination data source. Valid values: Hologres, OSS-HDFS, OSS, MaxCompute, LogHub, StarRocks, DataHub, AnalyticDB_For_MySQL, Kafka, Hive.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The code content in script mode.
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
   * **[Deprecated]** Use the Name parameter instead.
   * 
   * @example
   * mysql_to_holo_sync_8772
   * 
   * @deprecated
   */
  jobName?: string;
  /**
   * @remarks
   * The task-level settings, including DDL handling policies, source-to-destination column data type mapping policies, and task runtime parameters.
   */
  jobSettings?: CreateDIJobRequestJobSettings;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   *  - DatabaseRealtimeMigration: real-time migration of entire databases. Performs streaming synchronization of multiple tables from multiple source databases. Supports full-only, incremental-only, or full and incremental synchronization.
   * 
   *  - DatabaseOfflineMigration: offline migration of entire databases. Performs batch synchronization of multiple tables from multiple source databases. Supports full-only, incremental-only, or full and incremental synchronization.
   * 
   *  - SingleTableRealtimeMigration: real-time migration of a single table. Performs streaming synchronization of a single source table.
   * 
   * @example
   * DatabaseRealtimeMigration
   */
  jobType?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * - FullAndRealtimeIncremental: full and real-time incremental synchronization for entire databases in real time.
   * - RealtimeIncremental: real-time incremental synchronization for single tables in real time.
   * - Full: full synchronization for entire databases offline.
   * - OfflineIncremental: offline incremental synchronization for entire databases offline.
   * - FullAndOfflineIncremental: full and offline incremental synchronization for entire databases offline.
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  name?: string;
  /**
   * @remarks
   * The owner of the task.
   * 
   * @example
   * 3726346
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace for this API call.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The resource settings.
   */
  resourceSettings?: CreateDIJobRequestResourceSettings;
  /**
   * @remarks
   * The list of source data source settings.
   */
  sourceDataSourceSettings?: CreateDIJobRequestSourceDataSourceSettings[];
  /**
   * @remarks
   * The type of the source data source. Valid values: PolarDB, MySQL, Kafka, LogHub, Hologres, Oracle, OceanBase, MongoDB, RedShift, Hive, SQLServer, Doris, ClickHouse.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * The list of synchronization object transformation mappings. Each element describes a group of source object selection rules and the transformation rules applied to that group.
   * 
   * > [ { "SourceObjectSelectionRules":[ { "ObjectType":"Database", "Action":"Include", "ExpressionType":"Exact", "Expression":"biz_db" }, { "ObjectType":"Schema", "Action":"Include", "ExpressionType":"Exact", "Expression":"s1" }, { "ObjectType":"Table", "Action":"Include", "ExpressionType":"Exact", "Expression":"table1" } ], "TransformationRuleNames":[ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema" } ] } ]
   */
  tableMappings?: CreateDIJobRequestTableMappings[];
  /**
   * @remarks
   * The list of synchronization object transformation rule definitions.
   * >[ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema", "RuleExpression":"{"expression":"${srcDatasoureName}_${srcDatabaseName}"}" } ]
   */
  transformationRules?: CreateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettings: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      fileSpec: 'FileSpec',
      jobName: 'JobName',
      jobSettings: 'JobSettings',
      jobType: 'JobType',
      migrationType: 'MigrationType',
      name: 'Name',
      owner: 'Owner',
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
      fileSpec: 'string',
      jobName: 'string',
      jobSettings: CreateDIJobRequestJobSettings,
      jobType: 'string',
      migrationType: 'string',
      name: 'string',
      owner: 'string',
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

