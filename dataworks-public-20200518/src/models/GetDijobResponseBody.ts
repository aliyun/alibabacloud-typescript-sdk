// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobResponseBodyDataDestinationDataSourceSettings extends $dara.Model {
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

export class GetDIJobResponseBodyDataJobSettingsColumnDataTypeSettings extends $dara.Model {
  /**
   * @remarks
   * The data type of a destination field.
   * 
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @remarks
   * The data type of a source field.
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

export class GetDIJobResponseBodyDataJobSettingsCycleScheduleSettings extends $dara.Model {
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

export class GetDIJobResponseBodyDataJobSettingsDdlHandlingSettings extends $dara.Model {
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

export class GetDIJobResponseBodyDataJobSettingsRuntimeSettings extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration item. Valid values:
   * 
   * *   runtime.offline.speed.limit.mb: indicates the maximum transmission rate that is allowed for a batch synchronization task. This configuration item takes effect only when runtime.offline.speed.limit.enable is set to true.
   * *   runtime.offline.speed.limit.enable: indicates whether throttling is enabled for a batch synchronization task.
   * *   dst.offline.connection.max: indicates the maximum number of connections that are allowed for writing data to the destination of a batch synchronization task.
   * *   runtime.offline.concurrent: indicates the maximum number of parallel threads that are allowed for a batch synchronization task.
   * *   dst.realtime.connection.max: indicates the maximum number of connections that are allowed for writing data to the destination of a real-time synchronization task.
   * *   runtime.enable.auto.create.schema: indicates whether schemas are automatically created in the destination of a synchronization task.
   * *   src.offline.datasource.max.connection: indicates the maximum number of connections that are allowed for reading data from the source of a batch synchronization task.
   * *   runtime.realtime.concurrent: indicates the maximum number of parallel threads that are allowed for a real-time synchronization task.
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

export class GetDIJobResponseBodyDataJobSettings extends $dara.Model {
  /**
   * @remarks
   * The channel control settings for the synchronization task. The value of this parameter is a JSON string.
   * 
   * @example
   * {"structInfo":"MANAGED","storageType":"TEXTFILE","writeMode":"APPEND","partitionColumns":[{"columnName":"pt","columnType":"STRING","comment":""}],"fieldDelimiter":""}
   */
  channelSettings?: string;
  /**
   * @remarks
   * The settings for data type mappings between source fields and destination fields. The value of this parameter is an array.
   */
  columnDataTypeSettings?: GetDIJobResponseBodyDataJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The settings for periodic scheduling.
   */
  cycleScheduleSettings?: GetDIJobResponseBodyDataJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * The settings for processing DDL messages. The value of this parameter is an array.
   */
  ddlHandlingSettings?: GetDIJobResponseBodyDataJobSettingsDdlHandlingSettings[];
  /**
   * @remarks
   * The runtime settings. The value of this parameter is an array.
   */
  runtimeSettings?: GetDIJobResponseBodyDataJobSettingsRuntimeSettings[];
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
      columnDataTypeSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyDataJobSettingsColumnDataTypeSettings },
      cycleScheduleSettings: GetDIJobResponseBodyDataJobSettingsCycleScheduleSettings,
      ddlHandlingSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyDataJobSettingsDdlHandlingSettings },
      runtimeSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyDataJobSettingsRuntimeSettings },
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

export class GetDIJobResponseBodyDataResourceSettingsOfflineResourceSettings extends $dara.Model {
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

export class GetDIJobResponseBodyDataResourceSettingsRealtimeResourceSettings extends $dara.Model {
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

export class GetDIJobResponseBodyDataResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The resource used for batch synchronization.
   */
  offlineResourceSettings?: GetDIJobResponseBodyDataResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The resource used for real-time synchronization.
   */
  realtimeResourceSettings?: GetDIJobResponseBodyDataResourceSettingsRealtimeResourceSettings;
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
      offlineResourceSettings: GetDIJobResponseBodyDataResourceSettingsOfflineResourceSettings,
      realtimeResourceSettings: GetDIJobResponseBodyDataResourceSettingsRealtimeResourceSettings,
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

export class GetDIJobResponseBodyDataSourceDataSourceSettings extends $dara.Model {
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

export class GetDIJobResponseBodyDataTableMappingsSourceObjectSelectionRules extends $dara.Model {
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

export class GetDIJobResponseBodyDataTableMappingsTransformationRules extends $dara.Model {
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
   * The type of the object on which the action is performed. Valid values:
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

export class GetDIJobResponseBodyDataTableMappings extends $dara.Model {
  /**
   * @remarks
   * The list of rules used to select synchronization objects in the source.
   */
  sourceObjectSelectionRules?: GetDIJobResponseBodyDataTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The list of transformation rules that are applied to the synchronization objects selected from the source.
   */
  transformationRules?: GetDIJobResponseBodyDataTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyDataTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyDataTableMappingsTransformationRules },
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

export class GetDIJobResponseBodyDataTransformationRules extends $dara.Model {
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
   * The expression of the rule. The expression is a JSON string.
   * 
   * *   Example of a renaming rule: `{"expression":"${srcDatasourceName}_${srcDatabaseName}_0922","variables":[{"variableName":"srcDatabaseName","variableRules":[{"from":"fromdb","to":"todb"}\\]}\\]}`.
   * 
   *     *   expression: the expression of the renaming rule. The expression may contain the following variables:
   * 
   *         *   ${srcDatasourceName}
   *         *   ${srcDatabaseName}
   *         *   ${srcTableName}
   * 
   *     *   variables: the generation rule for a variable used in the expression of the renaming rule. The default value of the specified variable is the original value of the object indicated by the variable. A group of string replacement rules used to change the original values may be returned.
   * 
   *         *   variableName: the name of the variable. The variable name is not enclosed in ${}.
   *         *   variableRules: the string replacement rules for variables. The system runs the string replacement rules in sequence. from indicates the original string. to indicates the new string.
   * 
   * *   Example of a rule used to add a specific field to the destination and assign a value to the field: `{"columns":[{"columnName":"my_add_column","columnValueType":"Constant","columnValue":"123"}\\]}`.
   * 
   *     If no rule of this type is configured, no fields are added to the destination and no values are assigned by default.
   * 
   *     *   columnName: the name of the field that is added.
   * 
   *     *   columnValueType: the value type of the field. Valid values: Constant and Variable.
   * 
   *     *   columnValue: the value of the field.
   * 
   *         *   If the value of the columnValueType parameter is Constant, the value of the columnValue parameter is a constant of the STRING data type.
   *         *   If the value of the columnValueType parameter is Variable, the value of the columnValue parameter is a built-in variable. The following built-in variables are supported: EXECUTE_TIME (LONG data type), DB_NAME_SRC (STRING data type), DATASOURCE_NAME_SRC (STRING data type), TABLE_NAME_SRC (STRING data type), DB_NAME_DEST (STRING data type), DATASOURCE_NAME_DEST (STRING data type), TABLE_NAME_DEST (STRING data type), and DB_NAME_SRC_TRANSED (STRING data type). EXECUTE_TIME indicates the execution time. DB_NAME_SRC indicates the name of a source database. DATASOURCE_NAME_SRC indicates the name of the source. TABLE_NAME_SRC indicates the name of a source table. DB_NAME_DEST indicates the name of a destination database. DATASOURCE_NAME_DEST indicates the name of the destination. TABLE_NAME_DEST indicates the name of a destination table. DB_NAME_SRC_TRANSED indicates the database name obtained after a transformation.
   * 
   * *   Example of a rule used to specify primary key fields for a destination table: `{"columns":["ukcolumn1","ukcolumn2"\\]}`.
   * 
   *     If no rule of this type is configured, the primary key fields in the mapped source table are used for the destination table by default.
   * 
   *     *   If the destination table is an existing table, Data Integration does not modify the schema of the destination table. If the specified primary key fields do not exist in the destination table, an error is reported when the synchronization task starts to run.
   *     *   If the destination table is automatically created by the system, Data Integration automatically creates the schema of the destination table. The schema contains the primary key fields that you specify. If the specified primary key fields do not exist in the destination table, an error is reported when the synchronization task starts to run.
   * 
   * *   Example of a rule used to process DML messages: `{"dmlPolicies":[{"dmlType":"Delete","dmlAction":"Filter","filterCondition":"id > 1"}\\]}`.
   * 
   *     If no rule of this type is configured, the default processing policy for messages generated for insert, update, and delete operations is Normal.
   * 
   *     *   dmlType: the DML operation. Valid values: Insert, Update, and Delete.
   *     *   dmlAction: the processing policy for DML messages. Valid values: Normal, Ignore, Filter, and LogicalDelete. Filter indicates conditional processing. The value Filter is returned for the dmlAction parameter only when the value of the dmlType parameter is Update or Delete.
   *     *   filterCondition: the condition used to filter DML messages. This parameter is returned only when the value of the dmlAction parameter is Filter.
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

export class GetDIJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the synchronization task was created. The timestamp is accurate to the second.
   * 
   * @example
   * 1671516776
   */
  createdTime?: number;
  /**
   * @remarks
   * The ID of the user who creates the synchronization task.
   * 
   * @example
   * 100000001
   */
  createdUid?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 11588
   */
  DIJobId?: number;
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
  destinationDataSourceSettings?: GetDIJobResponseBodyDataDestinationDataSourceSettings[];
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
   * The error message returned if the value of the JobStatus parameter is Failed.
   * 
   * @example
   * error details xxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the synchronization task.
   * 
   * @example
   * mysql_to_holo_sync_445
   */
  jobName?: string;
  /**
   * @remarks
   * The settings for the dimension of the synchronization task. The settings include processing policies for DDL messages, policies for data type mappings between source fields and destination fields, and runtime parameters of the synchronization task.
   */
  jobSettings?: GetDIJobResponseBodyDataJobSettings;
  /**
   * @remarks
   * The status of the synchronization task. Valid values:
   * 
   * *   Finished
   * *   Initialized
   * *   Stopped
   * *   Failed
   * *   Running
   * *   Stopping
   * 
   * @example
   * Finished
   */
  jobStatus?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * *   FullAndRealtimeIncremental: one-time full synchronization and real-time incremental synchronization
   * *   RealtimeIncremental: real-time incremental synchronization
   * *   Full: full synchronization
   * *   OfflineIncremental: batch incremental synchronization
   * *   FullAndOfflineIncremental: one-time full synchronization and batch incremental synchronization
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 22
   */
  projectId?: number;
  /**
   * @remarks
   * The resource settings.
   */
  resourceSettings?: GetDIJobResponseBodyDataResourceSettings;
  /**
   * @remarks
   * The information about the running of the synchronization task.
   */
  runStats?: { [key: string]: string };
  /**
   * @remarks
   * The settings of the source. Only a single source is supported.
   */
  sourceDataSourceSettings?: GetDIJobResponseBodyDataSourceDataSourceSettings[];
  /**
   * @remarks
   * The source type. The value MySQL is returned.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * The timestamp when the synchronization task was last started. The timestamp is accurate to the second.
   * 
   * @example
   * 1673859999
   */
  startedTime?: number;
  /**
   * @remarks
   * The ID of the user who last starts the synchronization task.
   * 
   * @example
   * 100000001
   */
  startedUid?: string;
  /**
   * @remarks
   * The list of mappings between rules used to select synchronization objects in the source and transformation rules applied to the selected synchronization objects. Each entry in the list displays a mapping between a rule used to select synchronization objects and a transformation rule applied to the selected synchronization objects.
   */
  tableMappings?: GetDIJobResponseBodyDataTableMappings[];
  /**
   * @remarks
   * The list of transformation rules that are applied to the synchronization objects selected from the source. Each entry in the list defines a transformation rule.
   */
  transformationRules?: GetDIJobResponseBodyDataTransformationRules[];
  /**
   * @remarks
   * The timestamp when the synchronization task was last modified. The timestamp is accurate to the second.
   * 
   * @example
   * 1673859985
   */
  updatedTime?: number;
  /**
   * @remarks
   * The ID of the user who last modifies the synchronization task.
   * 
   * @example
   * 100000001
   */
  updatedUid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      createdUid: 'CreatedUid',
      DIJobId: 'DIJobId',
      description: 'Description',
      destinationDataSourceSettings: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      errorMessage: 'ErrorMessage',
      jobName: 'JobName',
      jobSettings: 'JobSettings',
      jobStatus: 'JobStatus',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      resourceSettings: 'ResourceSettings',
      runStats: 'RunStats',
      sourceDataSourceSettings: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      startedTime: 'StartedTime',
      startedUid: 'StartedUid',
      tableMappings: 'TableMappings',
      transformationRules: 'TransformationRules',
      updatedTime: 'UpdatedTime',
      updatedUid: 'UpdatedUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      createdUid: 'string',
      DIJobId: 'number',
      description: 'string',
      destinationDataSourceSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyDataDestinationDataSourceSettings },
      destinationDataSourceType: 'string',
      errorMessage: 'string',
      jobName: 'string',
      jobSettings: GetDIJobResponseBodyDataJobSettings,
      jobStatus: 'string',
      migrationType: 'string',
      projectId: 'number',
      resourceSettings: GetDIJobResponseBodyDataResourceSettings,
      runStats: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sourceDataSourceSettings: { 'type': 'array', 'itemType': GetDIJobResponseBodyDataSourceDataSourceSettings },
      sourceDataSourceType: 'string',
      startedTime: 'number',
      startedUid: 'string',
      tableMappings: { 'type': 'array', 'itemType': GetDIJobResponseBodyDataTableMappings },
      transformationRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyDataTransformationRules },
      updatedTime: 'number',
      updatedUid: 'string',
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
    if(this.runStats) {
      $dara.Model.validateMap(this.runStats);
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
   * The information about the synchronization task.
   */
  data?: GetDIJobResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDIJobResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

