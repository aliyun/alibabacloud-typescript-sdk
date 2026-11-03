// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings extends $dara.Model {
  /**
   * @remarks
   * The name of the destination data source.
   * 
   * @example
   * dw_mysql
   */
  dataSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings extends $dara.Model {
  /**
   * @remarks
   * The destination data type, such as bigint, boolean, string, text, datetime, timestamp, decimal, and binary. Data types vary based on the data source type.
   * 
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @remarks
   * The source data type, such as bigint, boolean, string, text, datetime, timestamp, decimal, and binary. Data types vary based on the data source type.
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

export class GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings extends $dara.Model {
  /**
   * @remarks
   * The synchronization type that requires periodic scheduling. Valid values:
   * - Full: full data synchronization.
   * - OfflineIncremental: batch incremental synchronization.
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

export class GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings extends $dara.Model {
  /**
   * @remarks
   * The handling action. Valid values:
   * - Ignore: ignores the DDL statement.
   * - Critical: reports an error.
   * - Normal: processes the DDL statement normally.
   * 
   * @example
   * Ignore
   */
  action?: string;
  /**
   * @remarks
   * The DDL type. Valid values:
   * - RenameColumn: renames a column.
   * - ModifyColumn: modifies a column.
   * - CreateTable: creates a table.
   * - TruncateTable: truncates a table.
   * - DropTable: drops a table.
   * 
   * @example
   * CreateTable
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

export class GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings extends $dara.Model {
  /**
   * @remarks
   * The setting name. Valid values:
   * - src.offline.datasource.max.connection: the maximum number of connections to the source for batch tasks.
   * - dst.offline.truncate: specifies whether to truncate the destination table.
   * - runtime.offline.speed.limit.enable: specifies whether to enable throttling for batch tasks.
   * - runtime.offline.concurrent: the concurrency of batch synchronization tasks.
   * - runtime.enable.auto.create.schema: specifies whether to automatically create a schema at the destination.
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

export class GetDIJobResponseBodyPagingInfoJobSettings extends $dara.Model {
  /**
   * @remarks
   * The channel-related task settings. You can configure specific channels. Currently, Holo2Holo (synchronization from Hologres to Hologres) and Holo2Kafka (synchronization from Hologres to Kafka) are supported.
   * 1. Holo2Kafka
   * - Example: {"destinationChannelSettings":{"kafkaClientProperties":[{"key":"linger.ms","value":"100"}],"keyColumns":["col3"],"writeMode":"canal"}}
   * - kafkaClientProperties: the Kafka producer parameters used when writing data to Kafka.
   * - keyColumns: the Kafka columns to which data is written.
   * - writeMode: the format in which data is written to Kafka. Valid values: json and canal.
   * 
   * 2. Holo2Holo
   * - Example: {"destinationChannelSettings":{"conflictMode":"replace","dynamicColumnAction":"replay","writeMode":"replay"}}
   * - conflictMode: the conflict handling policy when writing data to Hologres. Valid values: replace (overwrite) and ignore (ignore).
   * - writeMode: the method used to write data to Hologres. Valid values: replay and insert.
   * - dynamicColumnAction: the method used to write dynamic columns to Hologres. Valid values: replay, insert, and ignore.
   * 
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  /**
   * @remarks
   * The column type mappings.
   */
  columnDataTypeSettings?: GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The periodic scheduling settings.
   */
  cycleScheduleSettings?: GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * The array of DDL handling settings, which includes a list of DDL types to be handled and their corresponding rules.
   */
  ddlHandlingSettings?: GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings[];
  /**
   * @remarks
   * The runtime settings.
   */
  runtimeSettings?: GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings[];
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
      columnDataTypeSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoJobSettingsRuntimeSettings },
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

export class GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The number of compute units (CUs) of the scheduling resource group used by the batch synchronization task.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the data integration resource group used for batch synchronization.
   * 
   * @example
   * di_resourcegroup_v1
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

export class GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The number of CUs of the data integration resource group used for real-time synchronization.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the data integration resource group used for real-time tasks.
   * 
   * @example
   * di_resourcegroup_v1
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

export class GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The number of CUs of the data integration resource group used by the batch scheduling task.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the scheduling resource group used by the batch scheduling task.
   * 
   * @example
   * schedual_resourcegroup_v1
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

export class GetDIJobResponseBodyPagingInfoResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The batch synchronization resources.
   */
  offlineResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The real-time synchronization resources.
   */
  realtimeResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings;
  /**
   * @remarks
   * The scheduling resource.
   */
  scheduleResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      scheduleResourceSettings: 'ScheduleResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings,
      scheduleResourceSettings: GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings,
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

export class GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties extends $dara.Model {
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
      encoding: 'Encoding',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetDIJobResponseBodyPagingInfoSourceDataSourceSettings extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * dw_mysql
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The properties of the data source.
   */
  dataSourceProperties?: GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceProperties: 'DataSourceProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceProperties: GetDIJobResponseBodyPagingInfoSourceDataSourceSettingsDataSourceProperties,
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

export class GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules extends $dara.Model {
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
   * - Table: table.
   * - Schema: schema.
   * - Database: database.
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

export class GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * - DefinePrimaryKey: defines the primary key.
   * - Rename: renames the object.
   * - AddColumn: adds a column.
   * - HandleDml: handles DML operations.
   * 
   * @example
   * AddColumn
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The rule name. The rule name must be unique when the action type and the target type of the action are the same.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The target type of the action. Valid values:
   * - Table: table.
   * - Schema: schema.
   * - Database: database.
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

export class GetDIJobResponseBodyPagingInfoTableMappings extends $dara.Model {
  /**
   * @remarks
   * Each rule selects a set of source objects to be synchronized. Multiple rules combine to select a single table.
   */
  sourceObjectSelectionRules?: GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The list of transformation rule definitions for synchronization objects. Each element in the list is a transformation rule definition.
   */
  transformationRules?: GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules },
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

export class GetDIJobResponseBodyPagingInfoTransformationRules extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * - DefinePrimaryKey: defines the primary key.
   * - Rename: renames the object.
   * - AddColumn: adds a column.
   * - HandleDml: handles DML operations.
   * - DefineIncrementalCondition: defines the incremental condition.
   * - DefineCycleScheduleSettings: defines the periodic scheduling settings.
   * - DefinePartitionKey: defines the partition key.
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
   * - Example: {"expression":"${srcDatasourceName}_${srcDatabaseName}_0922"}
   * - expression: the expression for the rename transformation rule. Supported variables in the expression include: ${srcDatasourceName} (source data source name), ${srcDatabaseName} (source database name), and ${srcTableName} (source table name).
   * 
   * 2. Add column rule (AddColumn)
   * - Example: {"columns":[{"columnName":"my_add_column","columnValueType":"Constant","columnValue":"123"}]}
   * - If not specified, the default rule is to add no columns and perform no replication.
   * - columnName: the name of the appended column.
   * - columnValueType: the value type of the appended column. Valid values: Constant and Variable.
   * - columnValue: the value of the appended column. When columnValueType is Constant, the value is a custom constant of the String type. When columnValueType is Variable, the value is a built-in variable. Valid built-in variables include: EXECUTE_TIME (execution time, Long type), DB_NAME_SRC (source database name, String type), DATASOURCE_NAME_SRC (source data source name, String type), TABLE_NAME_SRC (source table name, String type), DB_NAME_DEST (destination database name, String type), DATASOURCE_NAME_DEST (destination data source name, String type), TABLE_NAME_DEST (destination table name, String type), and DB_NAME_SRC_TRANSED (transformed database name, String type).
   * 
   * 3. Specify the primary key column names for the destination table (DefinePrimaryKey)
   * - Example: {"columns":["ukcolumn1","ukcolumn2"]}
   * - If not specified, the source primary key columns are used by default.
   * - When the destination is an existing table: the data integration system does not modify the destination table schema. If the specified primary key columns are not in the destination column set, an error is reported when the task starts.
   * - When the destination is a table to be created automatically: the data integration system automatically creates the destination table schema, which includes the defined primary key columns. If the specified primary key columns are not in the destination column set, an error is reported when the task starts.
   * 
   * 4. DML handling rule (HandleDml)
   * - Example:
   * {"dmlPolicies":[{"dmlType":"Delete","dmlAction":"Filter","filterCondition":"id > 1"}]}
   * - If not specified, the default rule is Normal for Insert, Update, and Delete.
   * - dmlType: the DML operations type. Valid values: Insert, Update, and Delete.
   * - dmlAction: the DML handling policy. Valid values: Normal (normal processing), Ignore (ignore), Filter (conditional normal processing, used when dmlType is Update or Delete), and LogicalDelete (logical deletion).
   * - filterCondition: the DML filter condition, used when dmlAction is Filter.
   * 
   * 5. Incremental condition (DefineIncrementalCondition)
   * - Example:
   * {"where":"id > 0"}
   * - Specifies the incremental filter condition.
   * 
   * 6. Periodic scheduling parameters (DefineCycleScheduleSettings)
   * - Example:
   * {"cronExpress":" * * * * * *", "cycleType":"1"}
   * - Specifies the scheduling parameters for the scheduled task.
   * 
   * 7. Specify the partition key (DefinePartitionKey)
   * - Example:
   * {"columns":["id"]}
   * - Specifies the partition key.
   * 
   * @example
   * {"expression":"${srcDatasoureName}_${srcDatabaseName}"}
   */
  ruleExpression?: string;
  /**
   * @remarks
   * The rule name. The rule name must be unique under a specific combination of action type and target type.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The target type of the action. Valid values:
   * - Table: table.
   * - Schema: schema.
   * - Database: database.
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

export class GetDIJobResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated. Use the Id field instead.
   * 
   * @example
   * 32601
   * 
   * @deprecated
   */
  DIJobId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The list of destination data source properties.
   */
  destinationDataSourceSettings?: GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings[];
  /**
   * @remarks
   * The type of the destination data source. Valid values: Hologres, OSS-HDFS, OSS, MaxCompute, LogHub, StarRocks, DataHub, AnalyticDB_For_MySQL, Kafka, and Hive.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 32601
   */
  id?: number;
  /**
   * @remarks
   * The task name.
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
   * The task status. Valid values:
   * - Finished: the task ran successfully and has finished.
   * - Failed: the task failed to run.
   * - Running: the task is running.
   * - Initialized: the task is initialized but not started.
   * - Stopping: the task is being stopped.
   * - Stop: the task is stopped.
   * 
   * @example
   * Running
   */
  jobStatus?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - DatabaseRealtimeMigration: performs stream synchronization for multiple tables across multiple source databases. Supports full data only, incremental data only, or both full and incremental data.
   * - DatabaseOfflineMigration: performs batch synchronization for multiple tables across multiple source databases. Supports full data only, incremental data only, or both full and incremental data.
   * - SingleTableRealtimeMigration: performs stream synchronization for a single source table.
   * 
   * @example
   * DatabaseRealtimeMigration
   */
  jobType?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * - FullAndRealtimeIncremental: full and real-time incremental synchronization (real-time synchronization for the entire database).
   * - RealtimeIncremental: real-time incremental synchronization (real-time synchronization for a single table).
   * - Full: full data synchronization (batch synchronization for the entire database).
   * - OfflineIncremental: batch incremental synchronization (batch synchronization for the entire database).
   * - FullAndOfflineIncremental: full and batch incremental synchronization (batch synchronization for the entire database).
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
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
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page to obtain the workspace ID.
   * 
   * This parameter specifies the DataWorks workspace used for this API call.
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
   * The array of source data source settings.
   */
  sourceDataSourceSettings?: GetDIJobResponseBodyPagingInfoSourceDataSourceSettings[];
  /**
   * @remarks
   * The type of the source data source. Valid values: PolarDB, MySQL, Kafka, LogHub, Hologres, Oracle, OceanBase, MongoDB, RedShift, Hive, SQLServer, Doris, and ClickHouse.
   * 
   * @example
   * Mysql
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * The list of synchronization object transformation mappings. Each element in the list describes a set of source object selection rules and a list of transformation rules applied to the selected synchronization objects.
   * 
   * > [
   *   {
   *     "SourceObjectSelectionRules":[
   *       {
   *         "ObjectType":"Database",
   *         "Action":"Include",
   *         "ExpressionType":"Exact",
   *         "Expression":"biz_db"
   *       },
   *     {
   *         "ObjectType":"Schema",
   *         "Action":"Include",
   *         "ExpressionType":"Exact",
   *         "Expression":"s1"
   *       }, 
   *     {
   *         "ObjectType":"Table",
   *         "Action":"Include",
   *         "ExpressionType":"Exact",
   *         "Expression":"table1"
   *       }
   *     ],
   *     "TransformationRuleNames":[
   *       {
   *         "RuleName":"my_database_rename_rule",
   *         "RuleActionType":"Rename",
   *         "RuleTargetType":"Schema"
   *   		}
   *     ]
   *   }
   * ]
   */
  tableMappings?: GetDIJobResponseBodyPagingInfoTableMappings[];
  /**
   * @remarks
   * The list of transformation rule definitions for synchronization objects.
   * 
   * > [
   *   {
   *     "RuleName":"my_database_rename_rule",
   *     "RuleActionType":"Rename",
   *     "RuleTargetType":"Schema",
   *     "RuleExpression":"{\\"expression\\":\\"${srcDatasoureName}_${srcDatabaseName}\\"}"
   *   }
   * ]
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
      owner: 'string',
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

export class GetDIJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: GetDIJobResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADE490
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: GetDIJobResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

