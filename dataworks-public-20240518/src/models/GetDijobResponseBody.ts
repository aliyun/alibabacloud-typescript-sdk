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
   * The data type in the destination, such as `bigint`, `boolean`, `string`, `text`, `datetime`, `timestamp`, `decimal`, and `binary`. Data types vary depending on the data source.
   * 
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @remarks
   * The data type in the source, such as `bigint`, `boolean`, `string`, `text`, `datetime`, `timestamp`, `decimal`, and `binary`. Data types vary depending on the data source.
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
   * The synchronization type for periodic scheduling. Valid values:
   * 
   * - `Full`: full
   * 
   * - `OfflineIncremental`: offline incremental
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
   * 
   * - `Ignore`: Ignores the DDL message.
   * 
   * - `Critical`: Reports an error.
   * 
   * - `Normal`: Processes the DDL message.
   * 
   * @example
   * Ignore
   */
  action?: string;
  /**
   * @remarks
   * The DDL message type. Valid values:
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
   * The name of the setting. Valid values:
   * 
   * - `src.offline.datasource.max.connection`: the maximum number of connections to the source for an offline batch job.
   * 
   * - `dst.offline.truncate`: Whether to truncate the destination table before the offline batch job starts.
   * 
   * - `runtime.offline.speed.limit.enable`: Whether to enable throttling for an offline batch job.
   * 
   * - `runtime.offline.concurrent`: the concurrency level for an offline batch synchronization job.
   * 
   * - `runtime.enable.auto.create.schema`: Whether to automatically create a schema at the destination.
   * 
   * - `runtime.realtime.concurrent`: the concurrency level for a real-time job.
   * 
   * - `runtime.realtime.failover.minute.dataxcdc`: The wait duration (in minutes) before restarting a failed instance.
   * 
   * - `runtime.realtime.failover.times.dataxcdc`: The maximum number of retries for a failed instance.
   * 
   * @example
   * runtime.offline.concurrent
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

export class GetDIJobResponseBodyPagingInfoJobSettings extends $dara.Model {
  /**
   * @remarks
   * The settings for channel-related jobs. You can configure special settings for specific channels. The following channels are supported: Holo2Holo (data synchronization from Hologres to Hologres) and Holo2Kafka (data synchronization from Hologres to Kafka).
   * 
   * 1. Holo2Kafka
   * 
   * - Example: `{"destinationChannelSettings":{"kafkaClientProperties":[{"key":"linger.ms","value":"100"}],"keyColumns":["col3"],"writeMode":"canal"}}`
   * 
   * - `kafkaClientProperties`: The parameters for the Kafka producer, used when writing data to Kafka.
   * 
   * - `keyColumns`: The columns whose values are used as the key for Kafka records.
   * 
   * - `writeMode`: The format for writing data to Kafka. Valid values: `json` and `canal`.
   * 
   * 2. Holo2Holo
   * 
   * - Example: `{"destinationChannelSettings":{"conflictMode":"replace","dynamicColumnAction":"replay","writeMode":"replay"}}`
   * 
   * - `conflictMode`: The conflict handling policy for writing data to Hologres. Valid values: `replace` (overwrite) and `ignore` (ignore).
   * 
   * - `writeMode`: The method for writing data to Hologres. Valid values: `replay` and `insert`.
   * 
   * - `dynamicColumnAction`: The method for handling dynamic columns when writing data to Hologres. Valid values: `replay`, `insert`, and `ignore`.
   * 
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  /**
   * @remarks
   * The column data type mappings.
   */
  columnDataTypeSettings?: GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The settings for periodic scheduling.
   */
  cycleScheduleSettings?: GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * An array of settings for handling DDL messages. Each element specifies a DDL message type and the corresponding handling rule.
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
   * The number of CUs from the data integration resource group for the offline synchronization job.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the data integration resource group used by the offline synchronization job.
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
   * The number of CUs from the data integration resource group for the real-time synchronization job.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the data integration resource group used by the real-time job.
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
   * The number of CUs from the scheduling resource group for the offline scheduling job.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the scheduling resource group used by the offline scheduling job.
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
   * The resource settings for the offline synchronization job.
   */
  offlineResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The resource settings for the real-time synchronization job.
   */
  realtimeResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings;
  /**
   * @remarks
   * The scheduling resource settings.
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
   * The encoding of the database.
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
   * The expression type. Valid values: `Exact` and `Regex`.
   * 
   * @example
   * Exact
   */
  expressionType?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * - `Table`
   * 
   * - `Schema`
   * 
   * - `Database`
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
   * 
   * - `DefinePrimaryKey`
   * 
   * - `Rename`
   * 
   * - `AddColumn`
   * 
   * - `HandleDml`
   * 
   * @example
   * AddColumn
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The name of the rule. The rule name must be unique for a specific action type (`RuleActionType`) and target type (`RuleTargetType`).
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The target object type of the action. Valid values:
   * 
   * - `Table`
   * 
   * - `Schema`
   * 
   * - `Database`
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
   * Each rule selects a set of source objects to be synchronized. A combination of multiple rules selects one table.
   */
  sourceObjectSelectionRules?: GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * An array of object transformation rule definitions.
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
   * 
   * - `DefinePrimaryKey`
   * 
   * - `Rename`
   * 
   * - `AddColumn`
   * 
   * - `HandleDml`
   * 
   * - `DefineIncrementalCondition`
   * 
   * - `DefineCycleScheduleSettings`
   * 
   * - `DefinePartitionKey`
   * 
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The rule expression, in JSON string format.
   * 
   * 1. Rename rule (`Rename`)
   * 
   * - Example: `{"expression":"${srcDatasourceName}_${srcDatabaseName}_0922"}`
   * 
   * - `expression`: The expression for the rename transformation rule. The expression supports the following variables: `${srcDatasourceName}` (source data source name), `${srcDatabaseName}` (source database name), and `${srcTableName}` (source table name).
   * 
   * 2. Add column rule (`AddColumn`)
   * 
   * - Example: `{"columns":[{"columnName":"my_add_column","columnValueType":"Constant","columnValue":"123"}]}`
   * 
   * - If you do not specify this parameter, no columns are added or copied by default.
   * 
   * - `columnName`: The name of the column to add.
   * 
   * - `columnValueType`: The value type of the added column. Valid values: `Constant` and `Variable`.
   * 
   * - `columnValue`: The value of the added column. If `columnValueType` is `Constant`, the value is a custom string constant. If `columnValueType` is `Variable`, the value is a built-in variable. Valid built-in variables: `EXECUTE_TIME` (execution time, Long), `DB_NAME_SRC` (source database name, String), `DATASOURCE_NAME_SRC` (source data source name, String), `TABLE_NAME_SRC` (source table name, String), `DB_NAME_DEST` (destination database name, String), `DATASOURCE_NAME_DEST` (destination data source name, String), `TABLE_NAME_DEST` (destination table name, String), and `DB_NAME_SRC_TRANSED` (converted database name, String).
   * 
   * 3. Define primary key rule (`DefinePrimaryKey`)
   * 
   * - Example: `{"columns":["ukcolumn1","ukcolumn2"]}`
   * 
   * - By default, the primary key columns from the source table are used.
   * 
   * - If the destination table already exists, the data integration system does not modify the table schema. If the specified primary key columns are not in the destination table, the job fails to start.
   * 
   * - If the destination table is automatically created, the data integration system automatically creates the table schema that includes the defined primary key columns. If the specified primary key columns are not in the destination table, the job fails to start.
   * 
   * 4. DML handling rule (`HandleDml`)
   * 
   * - Example: `{"dmlPolicies":[{"dmlType":"Delete","dmlAction":"Filter","filterCondition":"id > 1"}]}`
   * 
   * - If you do not specify this parameter, the default value `Normal` is used for Insert, Update, and Delete operations.
   * 
   * - `dmlType`: The DML operation type. Valid values: `Insert`, `Update`, and `Delete`.
   * 
   * - `dmlAction`: The DML handling policy. Valid values: `Normal` (process normally), `Ignore` (ignore), `Filter` (process conditionally, used when `dmlType` is `Update` or `Delete`), and `LogicalDelete` (logically delete).
   * 
   * - `filterCondition`: The DML filter condition. This parameter is used when `dmlAction` is `Filter`.
   * 
   * 5. Define incremental condition rule (`DefineIncrementalCondition`)
   * 
   * - Example: `{"where":"id > 0"}`
   * 
   * - Specifies the filter condition for incremental synchronization.
   * 
   * 6. Define cycle schedule settings rule (`DefineCycleScheduleSettings`)
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
   * The name of the rule. The rule name must be unique for a specific action type (`RuleActionType`) and target type (`RuleTargetType`).
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The target object type of the action. Valid values:
   * 
   * - `Table`
   * 
   * - `Schema`
   * 
   * - `Database`
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
   * This field is deprecated. Use the `Id` field instead.
   * 
   * @example
   * 32601
   * 
   * @deprecated
   */
  DIJobId?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The settings for the destination data source.
   */
  destinationDataSourceSettings?: GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings[];
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
   * The job ID.
   * 
   * @example
   * 32601
   */
  id?: number;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * imp_ods_dms_det_dealer_info_df
   */
  jobName?: string;
  /**
   * @remarks
   * The job settings.
   */
  jobSettings?: GetDIJobResponseBodyPagingInfoJobSettings;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * - `Finished`: The job is complete.
   * 
   * - `Failed`: The job failed.
   * 
   * - `Running`: The job is running.
   * 
   * - `Initialized`: The job is initialized but has not started.
   * 
   * - `Stopping`: The job is being stopped.
   * 
   * - `Stop`: The job is stopped.
   * 
   * @example
   * Running
   */
  jobStatus?: string;
  /**
   * @remarks
   * The job type.
   * 
   * - `DatabaseRealtimeMigration`: real-time synchronization of multiple tables from multiple source databases. This type supports full, incremental, or both full and incremental synchronization.
   * 
   * - `DatabaseOfflineMigration`: batch synchronization of multiple tables from multiple source databases. This type supports full, incremental, or both full and incremental synchronization.
   * 
   * - `SingleTableRealtimeMigration`: real-time synchronization of a single source table.
   * 
   * @example
   * DatabaseRealtimeMigration
   */
  jobType?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * - `FullAndRealtimeIncremental`: one-time full synchronization and real-time incremental synchronization (for an entire database).
   * 
   * - `RealtimeIncremental`: real-time incremental synchronization (for a single table).
   * 
   * - `Full`: one-time full synchronization (for an entire database).
   * 
   * - `OfflineIncremental`: offline incremental synchronization (for an entire database).
   * 
   * - `FullAndOfflineIncremental`: one-time full synchronization and offline incremental synchronization (for an entire database).
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace for the API call. You can obtain the workspace ID from the Workspace Configuration page in the [DataWorks console](https://workbench.data.aliyun.com/console).
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
   * The settings for the source data source.
   */
  sourceDataSourceSettings?: GetDIJobResponseBodyPagingInfoSourceDataSourceSettings[];
  /**
   * @remarks
   * The type of the source data source. Valid values: `PolarDB`, `MySQL`, `Kafka`, `LogHub`, `Hologres`, `Oracle`, `OceanBase`, `MongoDB`, `RedShift`, `Hive`, `SQLServer`, `Doris`, and `ClickHouse`.
   * 
   * @example
   * Mysql
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * A list of mappings for object transformation. Each element in the list describes a set of selection rules for source objects and a set of transformation rules that apply to the selected objects.
   * 
   * > [
   * > {
   * > "SourceObjectSelectionRules":[
   * > {
   * > "ObjectType":"Database",
   * > "Action":"Include",
   * > "ExpressionType":"Exact",
   * > "Expression":"biz_db"
   * > },
   * > {
   * > "ObjectType":"Schema",
   * > "Action":"Include",
   * > "ExpressionType":"Exact",
   * > "Expression":"s1"
   * > },
   * > {
   * > "ObjectType":"Table",
   * > "Action":"Include",
   * > "ExpressionType":"Exact",
   * > "Expression":"table1"
   * > }
   * > ],
   * > "TransformationRuleNames":[
   * > {
   * > "RuleName":"my_database_rename_rule",
   * > "RuleActionType":"Rename",
   * > "RuleTargetType":"Schema"
   * > }
   * > ]
   * > }
   * > ]
   */
  tableMappings?: GetDIJobResponseBodyPagingInfoTableMappings[];
  /**
   * @remarks
   * A list of definitions for object transformation rules.
   * 
   * > [
   * > {
   * > "RuleName":"my_database_rename_rule",
   * > "RuleActionType":"Rename",
   * > "RuleTargetType":"Schema",
   * > "RuleExpression":"{\\\\"expression\\\\":\\\\"${srcDatasoureName}_${srcDatabaseName}\\\\"}"
   * > }
   * > ]
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
   * The details of the data integration job.
   */
  pagingInfo?: GetDIJobResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can use this ID to locate logs and troubleshoot issues.
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

