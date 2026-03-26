// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobRequestJobSettingsColumnDataTypeSettings extends $dara.Model {
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

export class UpdateDIJobRequestJobSettingsRuntimeSettings extends $dara.Model {
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

export class UpdateDIJobRequestJobSettings extends $dara.Model {
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
  columnDataTypeSettings?: UpdateDIJobRequestJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The scheduled task settings.
   */
  cycleScheduleSettings?: UpdateDIJobRequestJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * The array of DDL handling settings.
   * 
   * >  ["DDLHandlingSettings":[ { "Type":"Insert", "Action":"Normal" } ]
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
   * The CUs of the resource group for Data Integration used for batch synchronization.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the resource group for Data Integration that are used for batch synchronization.
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
   * The CUs of the resource group for Data Integration that are used for real-time synchronization.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the resource group for Data Integration that are used for real-time synchronization.
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
   * The CUs of the scheduling resource group for batch synchronization tasks.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the scheduling resource group used for batch synchronization tasks.
   * 
   * @example
   * S_res_group_235454102432001_1721021993437
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
   * The batch synchronization resources.
   */
  offlineResourceSettings?: UpdateDIJobRequestResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The real-time synchronization resources.
   */
  realtimeResourceSettings?: UpdateDIJobRequestResourceSettingsRealtimeResourceSettings;
  /**
   * @remarks
   * The resource used for scheduling.
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
   * Valid values: Include and Exclude.
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

export class UpdateDIJobRequestTableMappingsTransformationRules extends $dara.Model {
  /**
   * @remarks
   * Valid values:
   * 
   * *   DefinePrimaryKey
   * *   Rename
   * *   AddColumn
   * *   HandleDml
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
   * Valid values:
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

export class UpdateDIJobRequestTableMappings extends $dara.Model {
  /**
   * @remarks
   * Each rule can select different object types from the source, such as source databases and source tables.
   */
  sourceObjectSelectionRules?: UpdateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The transformation rules applied to source objects.
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
   * Valid values:
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
   * *   dmlType: The DML operation type. Valid values: Insert, Update, Delete.
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

export class UpdateDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 11588
   * 
   * @deprecated
   */
  DIJobId?: number;
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
   * The ID of the synchronization task.
   * 
   * @example
   * 11588
   */
  id?: number;
  /**
   * @remarks
   * The task-level settings, including DDL handling policies, column data type mapping between source and destination, and runtime parameters.
   */
  jobSettings?: UpdateDIJobRequestJobSettings;
  /**
   * @remarks
   * The task owner.
   * 
   * @example
   * 95279527
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can call the [ListProjects](https://help.aliyun.com/document_detail/178393.html) operation to obtain the ID.
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
   * The list of synchronization object transformation mappings. Each element describes a set of source object selection rules and the transformation rules applied to those objects.
   * 
   * >  [ { "SourceObjectSelectionRules":[ { "ObjectType":"Database", "Action":"Include", "ExpressionType":"Exact", "Expression":"biz_db" }, { "ObjectType":"Schema", "Action":"Include", "ExpressionType":"Exact", "Expression":"s1" }, { "ObjectType":"Table", "Action":"Include", "ExpressionType":"Exact", "Expression":"table1" } ], "TransformationRuleNames":[ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema" } ] } ]
   */
  tableMappings?: UpdateDIJobRequestTableMappings[];
  /**
   * @remarks
   * The list of synchronization object transformation rule definitions.
   * 
   * >  [ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema", "RuleExpression":"{"expression":"${srcDatasoureName}_${srcDatabaseName}"}" } ]
   */
  transformationRules?: UpdateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
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

