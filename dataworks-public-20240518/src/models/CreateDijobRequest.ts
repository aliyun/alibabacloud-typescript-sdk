// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestDestinationDataSourceSettingsDataSourceProperties extends $dara.Model {
  /**
   * @example
   * {     "instanceType": "serverless",     "username": "zmtest",     "password": "xxxxxxx",     "regionId": "cn-beijing",     "appName": "es-servexxxx" }
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
   * The data source name.
   * 
   * @example
   * holo_datasource_1
   */
  dataSourceName?: string;
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
   * The destination type, such as bigint, boolean, string, text, datetime, timestamp, decimal, or binary. Different data sources may have different types.
   * 
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @remarks
   * The source type, such as bigint, boolean, string, text, datetime, timestamp, decimal, or binary. Different data sources may have different types.
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
   * The synchronization type that requires scheduling. Valid values:
   * 
   * *   Full: Full synchronization
   * *   OfflineIncremental: Batch incremental synchronization
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
   * Valid values:
   * 
   * *   Ignore
   * *   Critical: Fail the task
   * *   Normal
   * 
   * @example
   * Critical
   */
  action?: string;
  /**
   * @remarks
   * The DDL type. Valid values:
   * 
   * *   RenameColumn
   * *   ModifyColumn
   * *   CreateTable
   * *   TruncateTable
   * *   DropTable
   * *   DropColumn
   * *   AddColumn
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
   * *   src.offline.datasource.max.connection: Specifies the maximum number of connections that are allowed for reading data from the source of a batch synchronization task.
   * *   dst.offline.truncate: Specifies whether to clear the destination table before data writing.
   * *   runtime.offline.speed.limit.enable: Specifies whether throttling is enabled for a batch synchronization task.
   * *   runtime.offline.concurrent: Specifies the maximum number of parallel threads that are allowed for a batch synchronization task.
   * *   runtime.enable.auto.create.schema: Specifies whether schemas are automatically created in the destination of a synchronization task.
   * *   runtime.realtime.concurrent: Specifies the maximum number of parallel threads that are allowed for a real-time synchronization task.
   * *   runtime.realtime.failover.minute.dataxcdc: Specifies the maximum waiting duration before a synchronization task retries the next restart if the previous restart fails after failover occurs. Unit: minutes.
   * *   runtime.realtime.failover.times.dataxcdc: Specifies the maximum number of failures that are allowed for restarting a synchronization task after failovers occur.
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
   * The channel-specific settings. You can configure special settings for specific channels. Currently supported: Holo2Holo (Hologres to Hologres) and Holo2Kafka (Hologres to Kafka).
   * 
   * 1.  Holo2Kafka
   * 
   * *   Example: {"destinationChannelSettings":{"kafkaClientProperties":[{"key":"linger.ms","value":"100"}],"keyColumns":["col3"],"writeMode":"canal"}} kafkaClientProperties: Kafka producer parameters used when writing to Kafka.
   * *   keyColumns: The columns to write to Kafka.
   * *   writeMode: The Kafka write format. Valid values: json and canal.
   * 
   * 2.  Holo2Holo
   * 
   * *   Example: {"destinationChannelSettings":{"conflictMode":"replace","dynamicColumnAction":"replay","writeMode":"replay"}}
   * *   conflictMode: The conflict handling policy when writing to Hologres. Valid values: replace (overwrite) and ignore.
   * *   writeMode: The write mode for Hologres. Valid values: replay and insert.
   * *   dynamicColumnAction: The dynamic column handling mode when writing to Hologres. Valid values: replay, insert, and ignore.
   * 
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  /**
   * @remarks
   * The array of column type mappings.
   * 
   * >  ["ColumnDataTypeSettings":[ { "SourceDataType":"Bigint", "DestinationDataType":"Text" } ]
   */
  columnDataTypeSettings?: CreateDIJobRequestJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The scheduled task settings.
   */
  cycleScheduleSettings?: CreateDIJobRequestJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * The array of DDL handling settings.
   * 
   * >  ["DDLHandlingSettings":[ { "Type":"Insert", "Action":"Normal" } ]
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
   * The CU of the Data Integration resource group used for batch synchronization.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the Data Integration resource group used for batch synchronization.
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
   * The CU of the Data Integration resource group used for real-time synchronization.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the Data Integration resource group used for real-time synchronization.
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
   * The CU of the scheduling resource group for batch synchronization tasks.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the scheduling resource group for batch synchronization tasks.
   * 
   * @example
   * S_res_group_235454102432001_1579085295030
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
   * The batch synchronization resources.
   */
  offlineResourceSettings?: CreateDIJobRequestResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The real-time synchronization resources.
   */
  realtimeResourceSettings?: CreateDIJobRequestResourceSettingsRealtimeResourceSettings;
  /**
   * @remarks
   * The scheduling resources.
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
   * @example
   * {     "instanceId": "rm-2ze09gn3x6xxx",     "password": "xxxx",     "database": "agent",     "username": "zmtest"     "regionId": "cn-beijing" }
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
   * GMT+8
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
   * The data source name.
   * 
   * @example
   * mysql_datasource_1
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The data source properties.
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
   * *   Table
   * *   Schema
   * *   Database
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
   * *   DefinePrimaryKey
   * *   Rename
   * *   AddColumn
   * *   HandleDml
   * *   DefineIncrementalCondition
   * *   DefineCycleScheduleSettings
   * *   DefinePartitionKey
   * 
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The rule name. The rule name must be unique for a given combination of action type and target type. The name cannot exceed 50 characters.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The target type for the action. Valid values:
   * 
   * *   Table
   * *   Schema
   * *   Database
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
   * Each rule can select a set of source objects to synchronize. Multiple rules together select a table.
   */
  sourceObjectSelectionRules?: CreateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The list of synchronization object transformation rule definitions. Each element represents a single transformation rule definition.
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
   * *   DefinePrimaryKey
   * *   Rename
   * *   AddColumn
   * *   HandleDml
   * *   DefineIncrementalCondition
   * *   DefineCycleScheduleSettings
   * *   DefinePartitionKey
   * 
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The rule expression in JSON string format.
   * 
   * 1.  Rename rule
   * 
   * *   Example: {"expression":"${srcDatasourceName}_${srcDatabaseName}_0922" }
   * *   expression: The rename transformation expression. Supported variables include: ${srcDatasourceName} (source data source name), ${srcDatabaseName} (source database name), and ${srcTableName} (source table name).
   * 
   * 2.  AddColumn rule
   * 
   * *   Example: {"columns":[{"columnName":"my_add_column","columnValueType":"Constant","columnValue":"123"}]}
   * *   If not specified, the default behavior is to not add columns.
   * *   columnName: The name of the column to add.
   * *   columnValueType: The value type of the column to add. Valid values: Constant and Variable.
   * *   columnValue: The value of the column to add. When columnValueType is set to Constant, the value is a custom constant of the string type. When columnValueType is set to Variable, the value is a built-in variable. Built-in variables include: EXECUTE_TIME (execution time, long type), DB_NAME_SRC (source database name, string type), DATASOURCE_NAME_SRC (source data source name, string type), TABLE_NAME_SRC (source table name, string type), DB_NAME_DEST (destination database name, string type), DATASOURCE_NAME_DEST (destination data source name, string type), TABLE_NAME_DEST (destination table name, string type), and DB_NAME_SRC_TRANSED (transformed source database name, string type).
   * 
   * 3.  DefinePrimaryKey
   * 
   * *   Example: {"columns":["ukcolumn1","ukcolumn2"]}
   * *   If not specified, the source primary key columns are used by default.
   * *   When the destination table already exists: Data Integration does not modify the destination table structure. If the specified primary key columns are not in the destination table, the task fails to start.
   * *   When the destination table is auto-created: Data Integration automatically creates the destination table structure with the defined primary key columns. If the specified primary key columns are not in the destination table, the task fails to start.
   * 
   * 4.  HandleDml rule
   * 
   * *   Example of a rule used to process DML messages: {"dmlPolicies":[{"dmlType":"Delete","dmlAction":"Filter","filterCondition":"id > 1"}]}.
   * *   If not specified, the default rule is Normal for Insert, Update, and Delete.
   * *   dmlType: The DML operation type. Valid values: Insert, Update, and Delete.
   * *   dmlAction: The DML handling policy. Valid values: Normal, Ignore, Filter (conditional processing, used when dmlType is Update or Delete), and LogicalDelete.
   * *   filterCondition: The DML filter condition. This parameter is used when dmlAction is set to Filter.
   * 
   * 5.  DefineIncrementalCondition
   * 
   * *   Example: {"where":"id > 0"}
   * *   Specifies the incremental filter condition.
   * 
   * 6.  DefineCycleScheduleSettings
   * 
   * *   Example: {"cronExpress":" \\* \\* \\* \\* \\* \\*", "cycleType":"1"}
   * *   Specifies the scheduled task parameters.
   * 
   * 7.  DefinePartitionKey
   * 
   * *   Example: {"columns":["id"]}
   * *   Specifies the partition key.
   * 
   * @example
   * {"expression":"${srcDatasoureName}_${srcDatabaseName}"}
   */
  ruleExpression?: string;
  /**
   * @remarks
   * The rule name. When the action type and target type are the same, the rule name must be unique. The name cannot exceed 50 characters.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The target type for the action. Valid values:
   * 
   * *   Table
   * *   Schema
   * *   Database
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
   * The task description.
   * 
   * @example
   * The description of the synchronization task.
   */
  description?: string;
  /**
   * @remarks
   * The list of destination data source settings.
   */
  destinationDataSourceSettings?: CreateDIJobRequestDestinationDataSourceSettings[];
  /**
   * @remarks
   * The destination type. Valid values: Hologres, OSS-HDFS, OSS, MaxCompute, LogHub, StarRocks, DataHub, AnalyticDB for MySQL, Kafka, and Hive.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  fileSpec?: string;
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
   * The task-level settings, including DDL handling policies, column data type mapping between source and destination, and runtime parameters.
   */
  jobSettings?: CreateDIJobRequestJobSettings;
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
   * The task owner.
   * 
   * @example
   * 3726346
   */
  owner?: string;
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
   * The source type. Valid values: PolarDB, MySQL, Kafka, LogHub, Hologres, Oracle, OceanBase, MongoDB, Redshift, Hive, SQL Server, Doris, and ClickHouse.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * The list of synchronization object transformation mappings. Each element describes a set of source object selection rules and the transformation rules applied to those objects.
   * 
   * >  [ { "SourceObjectSelectionRules":[ { "ObjectType":"Database", "Action":"Include", "ExpressionType":"Exact", "Expression":"biz_db" }, { "ObjectType":"Schema", "Action":"Include", "ExpressionType":"Exact", "Expression":"s1" }, { "ObjectType":"Table", "Action":"Include", "ExpressionType":"Exact", "Expression":"table1" } ], "TransformationRuleNames":[ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema" } ] } ]
   */
  tableMappings?: CreateDIJobRequestTableMappings[];
  /**
   * @remarks
   * The list of synchronization object transformation rule definitions.
   * 
   * >  [ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema", "RuleExpression":"{"expression":"${srcDatasoureName}_${srcDatabaseName}"}" } ]
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

