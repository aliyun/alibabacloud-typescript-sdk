// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
  dataSourceProperties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceProperties: 'DataSourceProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.dataSourceProperties) {
      $dara.Model.validateMap(this.dataSourceProperties);
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
   * The data type of the destination field.
   * 
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @remarks
   * The data type of the source field.
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

export class CreateDIJobRequestJobSettingsDdlHandlingSettings extends $dara.Model {
  /**
   * @remarks
   * The processing policy. Valid values:
   * 
   * *   Ignore: ignores a DDL message.
   * *   Critical: reports an error for a DDL message.
   * *   Normal: normally processes a DDL message.
   * 
   * @example
   * Critical
   */
  action?: string;
  /**
   * @remarks
   * The type of the DDL operation. Valid values:
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

export class CreateDIJobRequestJobSettingsImportRuleSettings extends $dara.Model {
  /**
   * @remarks
   * The ID of the task to be imported.
   * 
   * @example
   * 10000
   */
  fileId?: string;
  /**
   * @remarks
   * The import source of the task. Set the value to Datastudio, which indicates synchronization tasks created in DataStudio.
   * 
   * @example
   * Datastudio
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      source: 'string',
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
   * The name of the configuration item. Valid values:
   * 
   * *   runtime.offline.speed.limit.mb: specifies the maximum transmission rate that is allowed for a batch synchronization task. This configuration item takes effect only when runtime.offline.speed.limit.enable is set to true.
   * *   runtime.offline.speed.limit.enable: specifies whether throttling is enabled for a batch synchronization task.
   * *   dst.offline.connection.max: specifies the maximum number of connections that are allowed for writing data to the destination of a batch synchronization task.
   * *   runtime.offline.concurrent: specifies the maximum number of parallel threads that are allowed for a batch synchronization task.
   * *   dst.realtime.connection.max: specifies the maximum number of connections that are allowed for writing data to the destination of a real-time synchronization task.
   * *   runtime.enable.auto.create.schema: specifies whether schemas are automatically created in the destination of a synchronization task.
   * *   src.offline.datasource.max.connection: specifies the maximum number of connections that are allowed for reading data from the source of a batch synchronization task.
   * *   runtime.realtime.concurrent: specifies the maximum number of parallel threads that are allowed for a real-time synchronization task.
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

export class CreateDIJobRequestJobSettings extends $dara.Model {
  /**
   * @remarks
   * The channel control settings for the synchronization task. The value of this parameter must be a JSON string.
   * 
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  /**
   * @remarks
   * The settings for data type mappings between source fields and destination fields. The value of this parameter must be an array.
   */
  columnDataTypeSettings?: CreateDIJobRequestJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The settings for periodic scheduling.
   */
  cycleScheduleSettings?: CreateDIJobRequestJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * The processing settings for DDL messages.
   */
  ddlHandlingSettings?: CreateDIJobRequestJobSettingsDdlHandlingSettings[];
  /**
   * @remarks
   * The import settings for the synchronization task.
   */
  importRuleSettings?: CreateDIJobRequestJobSettingsImportRuleSettings;
  /**
   * @remarks
   * The runtime settings. The value of this parameter must be an array.
   */
  runtimeSettings?: CreateDIJobRequestJobSettingsRuntimeSettings[];
  static names(): { [key: string]: string } {
    return {
      channelSettings: 'ChannelSettings',
      columnDataTypeSettings: 'ColumnDataTypeSettings',
      cycleScheduleSettings: 'CycleScheduleSettings',
      ddlHandlingSettings: 'DdlHandlingSettings',
      importRuleSettings: 'ImportRuleSettings',
      runtimeSettings: 'RuntimeSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSettings: 'string',
      columnDataTypeSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: CreateDIJobRequestJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': CreateDIJobRequestJobSettingsDdlHandlingSettings },
      importRuleSettings: CreateDIJobRequestJobSettingsImportRuleSettings,
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
    if(this.importRuleSettings && typeof (this.importRuleSettings as any).validate === 'function') {
      (this.importRuleSettings as any).validate();
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
   * The identifier of the resource group for Data Integration used for batch synchronization.
   * 
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * The identifier of the resource group for Data Integration used for real-time synchronization.
   * 
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * The resource used for batch synchronization.
   */
  offlineResourceSettings?: CreateDIJobRequestResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The resource used for real-time synchronization.
   */
  realtimeResourceSettings?: CreateDIJobRequestResourceSettingsRealtimeResourceSettings;
  /**
   * @remarks
   * The number of compute units (CUs) in the resource group that are used for incremental and full synchronization.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  static names(): { [key: string]: string } {
    return {
      offlineResourceSettings: 'OfflineResourceSettings',
      realtimeResourceSettings: 'RealtimeResourceSettings',
      requestedCu: 'RequestedCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineResourceSettings: CreateDIJobRequestResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: CreateDIJobRequestResourceSettingsRealtimeResourceSettings,
      requestedCu: 'number',
    };
  }

  validate() {
    if(this.offlineResourceSettings && typeof (this.offlineResourceSettings as any).validate === 'function') {
      (this.offlineResourceSettings as any).validate();
    }
    if(this.realtimeResourceSettings && typeof (this.realtimeResourceSettings as any).validate === 'function') {
      (this.realtimeResourceSettings as any).validate();
    }
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
  dataSourceProperties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceProperties: 'DataSourceProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.dataSourceProperties) {
      $dara.Model.validateMap(this.dataSourceProperties);
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
   * The expression.
   * 
   * @example
   * mysql_table_1
   */
  expression?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * *   Table
   * *   Database
   * 
   * @example
   * Table
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
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
   * *   DefineRuntimeSettings
   * *   DefinePartitionKey
   * 
   * @example
   * Rename
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
   * The type of the object on which you want to perform the action. Valid values:
   * 
   * *   Table
   * *   Schema
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
   * The rules used to select synchronization objects in the source.
   */
  sourceObjectSelectionRules?: CreateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The list of transformation rules that you want to apply to the synchronization objects selected from the source.
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
   * *   DefineRuntimeSettings
   * *   DefinePartitionKey
   * 
   * @example
   * Rename
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The expression of the rule. An expression must be a JSON string.
   * 
   * Example of a renaming rule: {"expression":"${srcDatasourceName}_${srcDatabaseName}_0922","variables":[{"variableName":"srcDatabaseName","variableRules":[{"from":"fromdb","to":"todb"}]}]}
   * 
   * *   expression: the expression of the renaming rule. You can use the following variables in an expression: ${srcDatasourceName}, ${srcDatabaseName}, and ${srcTableName}. ${srcDatasourceName} indicates the name of the source. ${srcDatabaseName} indicates the name of a source database. ${srcTableName} indicates the name of a source table.
   * *   variables: the generation rule for a variable used in the expression of the renaming rule. The default value of the specified variable is the original value of the object indicated by the variable. You can define a group of string replacement rules to change the original values based on your business requirements. variableName: the name of the variable. Do not enclose the variable name in ${}. variableRules: the string replacement rules for variables. The system runs the string replacement rules in sequence for string replacement. from specifies the original string. to specifies the new string.
   * 
   * Example of a rule used to add a specific field to the destination and assign a value to the field: {"columns":[{"columnName":"my_add_column","columnValueType":"Constant","columnValue":"123"}]}
   * 
   * *   If you do not configure such a rule, no fields are added to the destination and no values are assigned by default.
   * *   columnName: the name of the field that is added.
   * *   columnValueType: the type of the value of the field. Valid values: Constant and Variable.
   * *   columnValue: the value of the field that you want to add. If you set the valueType parameter to Constant, set the columnValue parameter to a custom constant of the STRING type. If you set the valueType parameter to Variable, set the columnValue to a built-in variable. The following built-in variables are supported: EXECUTE_TIME (LONG data type), DB_NAME_SRC (STRING data type), DATASOURCE_NAME_SRC (STRING data type), TABLE_NAME_SRC (STRING data type), DB_NAME_DEST (STRING data type), DATASOURCE_NAME_DEST (STRING data type), TABLE_NAME_DEST (STRING data type), and DB_NAME_SRC_TRANSED (STRING data type). EXECUTE_TIME specifies the execution time. DB_NAME_SRC specifies the name of a source database. DATASOURCE_NAME_SRC specifies the name of the source. TABLE_NAME_SRC specifies the name of a source table. DB_NAME_DEST specifies the name of a destination database. DATASOURCE_NAME_DEST specifies the name of the destination. TABLE_NAME_DEST specifies the name of a destination table. DB_NAME_SRC_TRANSED specifies the database name obtained after a transformation.
   * 
   * Example of a rule used to specify primary key fields for a destination table: {"columns":["ukcolumn1","ukcolumn2"]}
   * 
   * *   If you do not configure such a rule, the primary key fields in the mapped source table are used for the destination table by default.
   * *   If the destination table is an existing table, Data Integration does not modify the schema of the destination table. If the specified primary key fields do not exist in the destination table, an error is reported when the synchronization task starts to run.
   * *   If the destination table is automatically created by the system, Data Integration automatically creates the schema of the destination table. The schema contains the primary key fields that you specify. If the specified primary key fields do not exist in the destination table, an error is reported when the synchronization task starts to run.
   * 
   * Example of a rule used to process DML messages: {"dmlPolicies":[{"dmlType":"Delete","dmlAction":"Filter","filterCondition":"id > 1"}]}
   * 
   * *   If you do not configure such a rule, the default processing policy for messages generated for insert, update, and delete operations is Normal.
   * *   dmlType: the DML operation. Valid values: Insert, Update, and Delete.
   * *   dmlAction: the processing policy for DML messages. Valid values: Normal, Ignore, Filter, and LogicalDelete. Filter indicates conditional processing. You can set the dmlAction parameter to Filter only when the dmlType parameter is set to Update or Delete.
   * *   filterCondition: the condition used to filter DML messages. This parameter is required only when the dmlAction parameter is set to Filter.
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
   * The type of the object on which you want to perform the action. Valid values:
   * 
   * *   Table
   * *   Schema
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
   * The description of the synchronization task.
   * 
   * @example
   * Synchronize mysql to hologres
   */
  description?: string;
  /**
   * @remarks
   * The settings of the destination. Only a single destination is supported.
   */
  destinationDataSourceSettings?: CreateDIJobRequestDestinationDataSourceSettings[];
  /**
   * @remarks
   * The destination type. Valid values: Hologres and Hive.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The name of the synchronization task.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  jobName?: string;
  /**
   * @remarks
   * The settings for the dimension of the synchronization task. The settings include processing policies for DDL messages, policies for data type mappings between source fields and destination fields, and runtime parameters of the synchronization task.
   */
  jobSettings?: CreateDIJobRequestJobSettings;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * *   FullAndRealtimeIncremental (one-time full synchronization and real-time incremental synchronization)
   * *   RealtimeIncremental (real-time incremental synchronization)
   * *   Full (full synchronization)
   * *   OfflineIncremental (batch incremental synchronization)
   * *   FullAndOfflineIncremental (one-time full synchronization and batch incremental synchronization)
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
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
  resourceSettings?: CreateDIJobRequestResourceSettings;
  /**
   * @remarks
   * The settings of the source. Only a single source is supported.
   */
  sourceDataSourceSettings?: CreateDIJobRequestSourceDataSourceSettings[];
  /**
   * @remarks
   * The source type. Set this parameter to MySQL.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * Specifies whether to perform system debugging. Valid values: true and false. Default value: false.
   * 
   * @example
   * false
   */
  systemDebug?: string;
  /**
   * @remarks
   * The list of mappings between rules used to select synchronization objects in the source and transformation rules applied to the selected synchronization objects. Each entry in the list displays a mapping between a rule used to select synchronization objects and a transformation rule applied to the selected synchronization objects.
   */
  tableMappings?: CreateDIJobRequestTableMappings[];
  /**
   * @remarks
   * The list of transformation rules that you want to apply to the synchronization objects selected from the source. Each entry in the list defines a transformation rule.
   */
  transformationRules?: CreateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettings: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettings: 'JobSettings',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      resourceSettings: 'ResourceSettings',
      sourceDataSourceSettings: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      systemDebug: 'SystemDebug',
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
      migrationType: 'string',
      projectId: 'number',
      resourceSettings: CreateDIJobRequestResourceSettings,
      sourceDataSourceSettings: { 'type': 'array', 'itemType': CreateDIJobRequestSourceDataSourceSettings },
      sourceDataSourceType: 'string',
      systemDebug: 'string',
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

