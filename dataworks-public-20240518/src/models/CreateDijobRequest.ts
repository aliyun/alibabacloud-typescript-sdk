// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestDestinationDataSourceSettingsDataSourceProperties extends $dara.Model {
  /**
   * @remarks
   * Custom connection settings for the data source, such as instance ID, access credentials, and instance region. You must specify this parameter or `DataSourceName`.
   * 
   * This parameter applies only when the data source is configured in instance mode (`ConnectionPropertiesMode`). The property format varies by data source. For more information, see [ConnectionProperties for data sources](https://help.aliyun.com/document_detail/2852465.html).
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
   * The destination data type. For example: `bigint`, `boolean`, `string`, `text`, `datetime`, `timestamp`, `decimal`, or `binary`. Available data types vary by data source.
   * 
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @remarks
   * The source data type. For example: `bigint`, `boolean`, `string`, `text`, `datetime`, `timestamp`, `decimal`, or `binary`. Available data types vary by data source.
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
   * The synchronization type for periodic scheduling. Valid values:
   * 
   * - `Full`: Full synchronization.
   * 
   * - `OfflineIncremental`: Incremental synchronization in batch mode.
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
   * - `Ignore`: Ignores the DDL message.
   * 
   * - `Critical`: Reports an error.
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
   * - `RenameColumn`: Renames a column.
   * 
   * - `ModifyColumn`: Modifies a column.
   * 
   * - `CreateTable`: Creates a table.
   * 
   * - `TruncateTable`: Truncates a table.
   * 
   * - `DropTable`: Drops a table.
   * 
   * - `DropColumn`: Drops a column.
   * 
   * - `AddColumn`: Adds a column.
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
   * The name of the setting. Valid values:
   * 
   * - `src.offline.datasource.max.connection`: The maximum number of connections to the source of a batch synchronization job.
   * 
   * - `dst.offline.truncate`: Specifies whether to truncate the destination table before a batch job starts.
   * 
   * - `runtime.offline.speed.limit.enable`: Specifies whether to enable throttling for a batch synchronization job.
   * 
   * - `runtime.offline.concurrent`: The concurrency level of a batch synchronization job.
   * 
   * - `runtime.enable.auto.create.schema`: Specifies whether to automatically create a destination schema.
   * 
   * - `runtime.realtime.concurrent`: The concurrency level of a real-time synchronization job.
   * 
   * - `runtime.realtime.failover.minute.dataxcdc`: The wait time in minutes for a failover restart.
   * 
   * - `runtime.realtime.failover.times.dataxcdc`: The number of failover restart attempts.
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

export class CreateDIJobRequestJobSettings extends $dara.Model {
  /**
   * @remarks
   * Settings for data synchronization channels. You can configure special settings for specific channels. The following channels are supported: synchronization from Hologres to Hologres (Holo2Holo) and from Hologres to Kafka (Holo2Kafka).
   * 
   * 1. Holo2Kafka
   * 
   * - Example: `{"destinationChannelSettings":{"kafkaClientProperties":[{"key":"linger.ms","value":"100"}],"keyColumns":["col3"],"writeMode":"canal"}}`
   *   `kafkaClientProperties`: Parameters for the Kafka producer.
   * 
   * - `keyColumns`: The columns whose values are used as keys for data written to Kafka.
   * 
   * - `writeMode`: The data format for writing to Kafka. Valid values: `json` and `canal`.
   * 
   * 2. Holo2Holo
   * 
   * - Example: `{"destinationChannelSettings":{"conflictMode":"replace","dynamicColumnAction":"replay","writeMode":"replay"}}`
   * 
   * - `conflictMode`: The conflict handling policy for writing data to Hologres. Valid values: `replace` (overwrite) and `ignore`.
   * 
   * - `writeMode`: The method for writing data to Hologres. Valid values: `replay` and `insert`.
   * 
   * - `dynamicColumnAction`: The method for handling dynamic columns when writing data to Hologres. Valid values: `replay`, `insert`, and `ignore`.
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
   * Column data type mappings.
   * 
   * > "ColumnDataTypeSettings":[ { "SourceDataType":"Bigint", "DestinationDataType":"Text" } ]
   */
  columnDataTypeSettings?: CreateDIJobRequestJobSettingsColumnDataTypeSettings[];
  /**
   * @remarks
   * The periodic scheduling settings.
   */
  cycleScheduleSettings?: CreateDIJobRequestJobSettingsCycleScheduleSettings;
  /**
   * @remarks
   * DDL handling settings.
   * 
   * > "DDLHandlingSettings":[ { "Type":"Insert", "Action":"Normal" } ]
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
   * The number of CUs for the resource group for data integration that is used for batch synchronization.
   * 
   * @example
   * 2
   */
  requestedCu?: number;
  /**
   * @remarks
   * The identifier of the resource group for data integration used for batch synchronization.
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
   * The number of CUs for the resource group for data integration that is used for real-time synchronization.
   * 
   * @example
   * 2
   */
  requestedCu?: number;
  /**
   * @remarks
   * The identifier of the resource group for data integration used for real-time synchronization.
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
   * The number of CUs for the scheduling resource group that is used for batch synchronization jobs.
   * 
   * @example
   * 2
   */
  requestedCu?: number;
  /**
   * @remarks
   * The identifier of the scheduling resource group used for batch synchronization jobs.
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
   * Resource settings for batch synchronization.
   */
  offlineResourceSettings?: CreateDIJobRequestResourceSettingsOfflineResourceSettings;
  /**
   * @remarks
   * The resources for real-time synchronization.
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
   * @remarks
   * Custom connection settings for the data source, such as instance ID, access credentials, and instance region. You must specify this parameter or `DataSourceName`.
   * 
   * This parameter applies only when the data source is configured in instance mode (`ConnectionPropertiesMode`). The property format varies by data source. For more information, see [ConnectionProperties for data sources](https://help.aliyun.com/document_detail/2852465.html).
   * 
   * @example
   * { "instanceId": "rm-2ze09gn3x6xxx", "password": "xxxx", "database": "agent", "username": "zmtest" "regionId": "cn-beijing" }
   */
  connectionProperties?: string;
  /**
   * @remarks
   * The database encoding format.
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

export class CreateDIJobRequestTableMappingsTransformationRules extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
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
   * The name of the transformation rule. The rule name must be unique for a specific action type and target object type. Maximum length: 50 characters.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the object to which the action applies. Valid values:
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

export class CreateDIJobRequestTableMappings extends $dara.Model {
  /**
   * @remarks
   * Each rule can select a set of source objects to synchronize. Multiple rules combine to select one table.
   */
  sourceObjectSelectionRules?: CreateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The names of the transformation rules to apply to the selected objects.
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
   * 1. Renaming rule (`Rename`)
   * 
   * - Example: `{"expression":"${srcDatasourceName}_${srcDatabaseName}_0922" }`
   * 
   * - `expression`: The renaming expression. You can use the following variables: `${srcDatasourceName}` (name of the source data source), `${srcDatabaseName}` (name of the source database), and `${srcTableName}` (name of the source table).
   * 
   * 2. Rule for adding a column (`AddColumn`)
   * 
   * - Example: `{"columns":[{"columnName":"my_add_column","columnValueType":"Constant","columnValue":"123"}]}`
   * 
   * - If you do not specify this rule, no columns are added.
   * 
   * - `columnName`: The name of the column to add.
   * 
   * - `columnValueType`: The value type of the added column. Valid values: `Constant` and `Variable`.
   * 
   * - `columnValue`: The value of the added column. If `columnValueType` is `Constant`, the value is a custom string constant. If `columnValueType` is `Variable`, the value is a built-in variable. Valid built-in variables include: `EXECUTE_TIME` (execution time, Long), `DB_NAME_SRC` (source database name, String), `DATASOURCE_NAME_SRC` (source data source name, String), `TABLE_NAME_SRC` (source table name, String), `DB_NAME_DEST` (destination database name, String), `DATASOURCE_NAME_DEST` (destination data source name, String), `TABLE_NAME_DEST` (destination table name, String), and `DB_NAME_SRC_TRANSED` (transformed database name, String).
   * 
   * 3. Rule for defining the primary key columns of a destination table (`DefinePrimaryKey`)
   * 
   * - Example: `{"columns":["ukcolumn1","ukcolumn2"]}`
   * 
   * - If you do not specify this rule, the primary key columns of the source table are used by default.
   * 
   * - If the destination is an existing table, Data Integration does not modify its schema. If a specified primary key column does not exist in the destination table, the job fails to start and an error is reported.
   * 
   * - If the destination table is automatically created, Data Integration automatically creates its schema with the defined primary key columns. If a specified primary key column does not exist in the source table, the job fails to start and an error is reported.
   * 
   * 4. DML handling rule (`HandleDml`)
   * 
   * - Example: `{"dmlPolicies":[{"dmlType":"Delete","dmlAction":"Filter","filterCondition":"id > 1"}]}`
   * 
   * - If you do not specify this rule, the default `dmlAction` is `Normal` for `Insert`, `Update`, and `Delete` operations.
   * 
   * - `dmlType`: The DML operation type. Valid values: `Insert`, `Update`, and `Delete`.
   * 
   * - `dmlAction`: The DML handling policy. Valid values: `Normal` (normal processing), `Ignore`, `Filter` (conditional processing, used when `dmlType` is `Update` or `Delete`), and `LogicalDelete` (logical deletion).
   * 
   * - `filterCondition`: The DML filter condition, used when `dmlAction` is `Filter`.
   * 
   * 5. Incremental condition (`DefineIncrementalCondition`)
   * 
   * - Example: `{"where":"id > 0"}`
   * 
   * - Specifies the filter condition for incremental synchronization.
   * 
   * 6. Parameters for periodic scheduling (`DefineCycleScheduleSettings`)
   * 
   * - Example: `{"cronExpress":" * * * * * *", "cycleType":"1"}`
   * 
   * - Specifies the parameters for periodically scheduling a job.
   * 
   * 7. Rule to define a partition key (`DefinePartitionKey`)
   * 
   * - Example: `{"columns":["id"]}`
   * 
   * - Specifies a partition key.
   * 
   * @example
   * {
   *       "expression": "${srcDatasoureName}_${srcDatabaseName}"
   * }
   */
  ruleExpression?: string;
  /**
   * @remarks
   * The name of the rule. The rule name must be unique for a specific action type and target object type. Maximum length: 50 characters.
   * 
   * @example
   * rename_rule_1
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the object to which the action applies. Valid values:
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

export class CreateDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * DI Job Demo
   */
  description?: string;
  /**
   * @remarks
   * Settings for the destination data sources.
   */
  destinationDataSourceSettings?: CreateDIJobRequestDestinationDataSourceSettings[];
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
   * The code for a job created in script mode.
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
   * This parameter is deprecated. Use the `Name` parameter instead.
   * 
   * @example
   * mysql_to_holo_sync_8772
   * 
   * @deprecated
   */
  jobName?: string;
  /**
   * @remarks
   * The settings for the synchronization job, including DDL processing policies, data type mappings between source and destination columns, and runtime parameters.
   */
  jobSettings?: CreateDIJobRequestJobSettings;
  /**
   * @remarks
   * The job type. Valid values:
   * 
   * - `DatabaseRealtimeMigration`: Synchronizes multiple tables from multiple source databases in real time (stream synchronization). This type supports full, incremental, or both full and incremental synchronization.
   * 
   * - `DatabaseOfflineMigration`: Synchronizes multiple tables from multiple source databases in batches. This type supports full, incremental, or both full and incremental synchronization.
   * 
   * - `SingleTableRealtimeMigration`: Synchronizes a single source table in real time (stream synchronization).
   * 
   * @example
   * DatabaseRealtimeMigration
   */
  jobType?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * - `FullAndRealtimeIncremental`: Full and real-time incremental synchronization for an entire database.
   * 
   * - `RealtimeIncremental`: Real-time incremental synchronization for a single table.
   * 
   * - `Full`: Full batch synchronization for an entire database.
   * 
   * - `OfflineIncremental`: Incremental synchronization in batch mode.
   * 
   * - `FullAndOfflineIncremental`: Full and incremental batch synchronization for an entire database.
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  name?: string;
  /**
   * @remarks
   * The job owner.
   * 
   * @example
   * 3726346
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace for this API call. To obtain the workspace ID, log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page.
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
   * Settings for the source data sources.
   */
  sourceDataSourceSettings?: CreateDIJobRequestSourceDataSourceSettings[];
  /**
   * @remarks
   * The type of the source data source. Valid values: `PolarDB`, `MySQL`, `Kafka`, `LogHub`, `Hologres`, `Oracle`, `OceanBase`, `MongoDB`, `Redshift`, `Hive`, `SQL Server`, `Doris`, and `ClickHouse`.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * Transformation mappings for the objects to be synchronized. Each mapping defines selection rules for a group of source objects and the transformation rules to apply to them.
   * 
   * > [ { "SourceObjectSelectionRules":[ { "ObjectType":"Database", "Action":"Include", "ExpressionType":"Exact", "Expression":"biz_db" }, { "ObjectType":"Schema", "Action":"Include", "ExpressionType":"Exact", "Expression":"s1" }, { "ObjectType":"Table", "Action":"Include", "ExpressionType":"Exact", "Expression":"table1" } ], "TransformationRuleNames":[ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema" } ] } ]
   */
  tableMappings?: CreateDIJobRequestTableMappings[];
  /**
   * @remarks
   * A list of transformation rules for the objects to be synchronized.
   * 
   * > [ { "RuleName":"my_database_rename_rule", "RuleActionType":"Rename", "RuleTargetType":"Schema", "RuleExpression":"{\\\\"expression\\\\":\\\\"${srcDatasoureName}_${srcDatabaseName}\\\\"}" } ]
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

