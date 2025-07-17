// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestDestinationDataSourceSettings extends $dara.Model {
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

export class CreateDIJobRequestJobSettingsColumnDataTypeSettings extends $dara.Model {
  destinationDataType?: string;
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
  cycleMigrationType?: string;
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
  action?: string;
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
  name?: string;
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
  channelSettings?: string;
  columnDataTypeSettings?: CreateDIJobRequestJobSettingsColumnDataTypeSettings[];
  cycleScheduleSettings?: CreateDIJobRequestJobSettingsCycleScheduleSettings;
  ddlHandlingSettings?: CreateDIJobRequestJobSettingsDdlHandlingSettings[];
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
  requestedCu?: number;
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
  requestedCu?: number;
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
  requestedCu?: number;
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
  offlineResourceSettings?: CreateDIJobRequestResourceSettingsOfflineResourceSettings;
  realtimeResourceSettings?: CreateDIJobRequestResourceSettingsRealtimeResourceSettings;
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
  encoding?: string;
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

export class CreateDIJobRequestSourceDataSourceSettings extends $dara.Model {
  dataSourceName?: string;
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
  action?: string;
  expression?: string;
  expressionType?: string;
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
  ruleActionType?: string;
  ruleName?: string;
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
  sourceObjectSelectionRules?: CreateDIJobRequestTableMappingsSourceObjectSelectionRules[];
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
  ruleActionType?: string;
  ruleExpression?: string;
  ruleName?: string;
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
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destinationDataSourceSettings?: CreateDIJobRequestDestinationDataSourceSettings[];
  /**
   * @remarks
   * The destination type. Valid values: Hologres, OSS-HDFS, OSS, MaxCompute, LogHub, StarRocks, DataHub, AnalyticDB for MySQL, Kafka, and Hive.
   * 
   * This parameter is required.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
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
   * This parameter is required.
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
   * This parameter is required.
   */
  resourceSettings?: CreateDIJobRequestResourceSettings;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceDataSourceSettings?: CreateDIJobRequestSourceDataSourceSettings[];
  /**
   * @remarks
   * The source type. Valid values: PolarDB, MySQL, Kafka, LogHub, Hologres, Oracle, OceanBase, MongoDB, Redshift, Hive, SQL Server, Doris, and ClickHouse.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMappings?: CreateDIJobRequestTableMappings[];
  transformationRules?: CreateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettings: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettings: 'JobSettings',
      jobType: 'JobType',
      migrationType: 'MigrationType',
      name: 'Name',
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
      jobName: 'string',
      jobSettings: CreateDIJobRequestJobSettings,
      jobType: 'string',
      migrationType: 'string',
      name: 'string',
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

