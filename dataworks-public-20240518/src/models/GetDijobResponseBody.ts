// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobResponseBodyPagingInfoDestinationDataSourceSettings extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
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
   * The data type of the destination field. Valid values: bigint, boolean, string, text, datetime, timestamp, decimal, and binary. Different types of data sources support different data types.
   * 
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @remarks
   * The data type of the source field. Valid values: bigint, boolean, string, text, datetime, timestamp, decimal, and binary. Different types of data sources support different data types.
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
   * 
   * *   Full: full synchronization
   * *   OfflineIncremental: batch incremental synchronization
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
   * The processing policy for a specific type of DDL message. Valid values:
   * 
   * *   Ignore: ignores a DDL message.
   * *   Critical: reports an error for a DDL message.
   * *   Normal: normally processes a DDL message.
   * 
   * @example
   * Ignore
   */
  action?: string;
  /**
   * @remarks
   * The DDL operation type. Valid values:
   * 
   * *   RenameColumn
   * *   ModifyColumn
   * *   CreateTable
   * *   TruncateTable
   * *   DropTable
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
   * The name of the configuration item. Valid values:
   * 
   * *   src.offline.datasource.max.connection: indicates the maximum number of connections that are allowed for reading data from the source of a batch synchronization task.
   * *   dst.offline.truncate: indicates whether to clear the destination table before data writing.
   * *   runtime.offline.speed.limit.enable: indicates whether throttling is enabled for a batch synchronization task.
   * *   runtime.offline.concurrent: indicates the maximum number of parallel threads that are allowed for a batch synchronization task.
   * *   runtime.enable.auto.create.schema: indicates whether schemas are automatically created in the destination of a synchronization task.
   * *   runtime.realtime.concurrent: indicates the maximum number of parallel threads that are allowed for a real-time synchronization task.
   * *   runtime.realtime.failover.minute.dataxcdc: indicates the maximum waiting duration before a synchronization task retries the next restart if the previous restart fails after failover occurs. Unit: minutes.
   * *   runtime.realtime.failover.times.dataxcdc: indicates the maximum number of failures that are allowed for restarting a synchronization task after failovers occur.
   * 
   * @example
   * runtime.offline.concurrent
   */
  name?: string;
  /**
   * @remarks
   * The value of the configuration item.
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
   * The channel control settings for the synchronization task. You can configure special channel control settings for the following synchronization links: data synchronization between Hologres data sources and data synchronization from Hologres to Kafka.
   * 
   * 1.  Holo2Kafka
   * 
   * *   Example: {"destinationChannelSettings":{"kafkaClientProperties":[{"key":"linger.ms","value":"100"}],"keyColumns":["col3"],"writeMode":"canal"}}
   * *   kafkaClientProperties: the parameters related to a Kafka producer, which are used when you write data to a Kafka data source.
   * *   keyColumns: the names of Kafka columns to which data is written.
   * *   writeMode: the writing format. Valid values: json and canal.
   * 
   * 2.  Holo2Holo
   * 
   * *   Example: {"destinationChannelSettings":{"conflictMode":"replace","dynamicColumnAction":"replay","writeMode":"replay"}}
   * *   conflictMode: the policy used to handle a conflict that occurs during data writing to Hologres. Valid values: replace and ignore.
   * *   writeMode: the mode in which data is written to Hologres. Valid values: replay and insert.
   * *   dynamicColumnAction: the mode in which data is written to dynamic columns in a Hologres table. Valid values: replay, insert, and ignore.
   * 
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  /**
   * @remarks
   * The data type mappings between source fields and destination fields.
   */
  columnDataTypeSettings?: GetDIJobResponseBodyPagingInfoJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The settings for periodic scheduling.
   */
  cycleScheduleSettings?: GetDIJobResponseBodyPagingInfoJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * The DDL operation types. Valid values:
   * 
   * *   RenameColumn
   * *   ModifyColumn
   * *   CreateTable
   * *   TruncateTable
   * *   DropTable
   * *   DropColumn
   * *   AddColumn
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
   * The number of compute units (CUs) in the resource group for scheduling that are used for batch synchronization.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The identifier of the resource group for Data Integration used for batch synchronization.
   * 
   * @example
   * S_res_group_7708_1667792816832
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
   * The number of CUs in the resource group for Data Integration that are used for real-time synchronization.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The identifier of the resource group for Data Integration used for real-time synchronization.
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

export class GetDIJobResponseBodyPagingInfoResourceSettingsScheduleResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The number of CUs in the resource group for Data Integration that are used for scheduling.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The identifier of the resource group for scheduling used by the synchronization task.
   * 
   * @example
   * S_res_group_235454102432001_1718359176885
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
   * The resource used for batch synchronization.
   */
  offlineResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The resource used for real-time synchronization.
   */
  realtimeResourceSettings?: GetDIJobResponseBodyPagingInfoResourceSettingsRealtimeResourceSettings;
  /**
   * @remarks
   * The resource used for scheduling.
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
   * The encoding format of the database.
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
   * The operation that is performed to select objects. Valid values: Include and Exclude.
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

export class GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * *   DefinePrimaryKey
   * *   Rename
   * *   AddColumn
   * *   HandleDml
   * 
   * @example
   * AddColumn
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The name of the rule. If the values of the RuleActionType parameter and the RuleTargetType parameter are the same for multiple transformation rules, you must make sure that the transformation rule names are unique.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the object on which the action is performed. Valid values:
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

export class GetDIJobResponseBodyPagingInfoTableMappings extends $dara.Model {
  /**
   * @remarks
   * The list of rules used to select synchronization objects in the source.
   */
  sourceObjectSelectionRules?: GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The list of transformation rules that are applied to the synchronization objects selected from the source. Each entry in the list defines a transformation rule.
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
   * The expression of the rule. The expression is a JSON string.
   * 
   * 1.  Example of a renaming rule
   * 
   * *   Example: {"expression":"${srcDatasourceName}_${srcDatabaseName}_0922" }
   * *   expression: the expression of the renaming rule. You can use the following variables in an expression: ${srcDatasourceName}, ${srcDatabaseName}, and ${srcTableName}. ${srcDatasourceName} indicates the name of the source. ${srcDatabaseName} indicates the name of a source database. ${srcTableName} indicates the name of a source table.
   * 
   * 2.  Example of a column addition rule
   * 
   * *   Example: {"columns":[{"columnName":"my_add_column","columnValueType":"Constant","columnValue":"123"}]}
   * *   If no rule of this type is configured, no fields are added to the destination and no values are assigned by default.
   * *   columnName: the name of the field that is added.
   * *   columnValueType: the value type of the field. Valid values: Constant and Variable.
   * *   columnValue: the value of the field. If the columnValueType parameter is set to Constant, the value of the columnValue parameter is a constant of the STRING data type. If the columnValueType parameter is set to Variable, the value of the columnValue parameter is a built-in variable. The following built-in variables are supported: EXECUTE_TIME (LONG data type), DB_NAME_SRC (STRING data type), DATASOURCE_NAME_SRC (STRING data type), TABLE_NAME_SRC (STRING data type), DB_NAME_DEST (STRING data type), DATASOURCE_NAME_DEST (STRING data type), TABLE_NAME_DEST (STRING data type), and DB_NAME_SRC_TRANSED (STRING data type). EXECUTE_TIME indicates the execution time. DB_NAME_SRC indicates the name of a source database. DATASOURCE_NAME_SRC indicates the name of the source. TABLE_NAME_SRC indicates the name of a source table. DB_NAME_DEST indicates the name of a destination database. DATASOURCE_NAME_DEST indicates the name of the destination. TABLE_NAME_DEST indicates the name of a destination table. DB_NAME_SRC_TRANSED indicates the database name obtained after a transformation.
   * 
   * 3.  Example of a rule used to specify primary key fields for a destination table
   * 
   * *   Example: {"columns":["ukcolumn1","ukcolumn2"]}
   * *   If no rule of this type is configured, the primary key fields in the mapped source table are used for the destination table by default.
   * *   If the destination table is an existing table, Data Integration does not modify the schema of the destination table. If the specified primary key fields do not exist in the destination table, an error is reported when the synchronization task starts to run.
   * *   If the destination table is automatically created by the system, Data Integration automatically creates the schema of the destination table. The schema contains the primary key fields that you specify. If the specified primary key fields do not exist in the destination table, an error is reported when the synchronization task starts to run.
   * 
   * 4.  Example of a rule used to process DML messages
   * 
   * *   Example: {"dmlPolicies":[{"dmlType":"Delete","dmlAction":"Filter","filterCondition":"id > 1"}]}
   * *   If no rule of this type is configured, the default processing policy for messages generated for insert, update, and delete operations is Normal.
   * *   dmlType: the DML operation. Valid values: Insert, Update, and Delete.
   * *   dmlAction: the processing policy for DML messages. Valid values: Normal, Ignore, Filter, and LogicalDelete. Filter indicates conditional processing. The value Filter is returned for the dmlAction parameter only when the value of the dmlType parameter is Update or Delete.
   * *   filterCondition: the condition used to filter DML messages. This parameter is returned only when the value of the dmlAction parameter is Filter.
   * 
   * 5.  Example of a rule used to perform incremental synchronization
   * 
   * *   Example: {"where":"id > 0"}
   * *   The rule used to perform incremental synchronization is returned.
   * 
   * 6.  Example of a rule used to configure scheduling parameters for an auto triggered task
   * 
   * *   Example: {"cronExpress":" \\* \\* \\* \\* \\* \\*", "cycleType":"1"}
   * *   The rule used to configure scheduling parameters for an auto triggered task is returned.
   * 
   * 7.  Example of a rule used to specify a partition key
   * 
   * *   Example: {"columns":["id"]}
   * *   The rule used to specify a partition key is returned.
   * 
   * @example
   * {"expression":"${srcDatasoureName}_${srcDatabaseName}"}
   */
  ruleExpression?: string;
  /**
   * @remarks
   * The name of the rule. If the values of the RuleActionType parameter and the RuleTargetType parameter are the same for multiple transformation rules, you must make sure that the transformation rule names are unique.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the object on which the action is performed. Valid values:
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

export class GetDIJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: GetDIJobResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
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

