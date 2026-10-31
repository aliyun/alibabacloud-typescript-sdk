// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchTaskRequestCreateCommandDatabricksPythonConnectInfo extends $dara.Model {
  /**
   * @remarks
   * The HTTP path for the development environment.
   * 
   * @example
   * /sql/1.0/warehouses/dev
   */
  devHttpPath?: string;
  /**
   * @remarks
   * Specifies whether to enable Databricks Python connect.
   * 
   * @example
   * true
   */
  enableDatabricksPythonConnect?: boolean;
  /**
   * @remarks
   * The HTTP path for the production environment.
   * 
   * @example
   * /sql/1.0/warehouses/prod
   */
  prodHttpPath?: string;
  static names(): { [key: string]: string } {
    return {
      devHttpPath: 'DevHttpPath',
      enableDatabricksPythonConnect: 'EnableDatabricksPythonConnect',
      prodHttpPath: 'ProdHttpPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devHttpPath: 'string',
      enableDatabricksPythonConnect: 'boolean',
      prodHttpPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskRequestCreateCommandPaiConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the PAI experiment.
   * 
   * @example
   * 789012
   */
  experimentId?: string;
  /**
   * @remarks
   * The PAI region.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The ID of the PAI workspace.
   * 
   * @example
   * 123456
   */
  workSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      region: 'Region',
      workSpaceId: 'WorkSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      region: 'string',
      workSpaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The ID of the offline code template.
   * 
   * @example
   * st_123456
   */
  codeTemplateId?: string;
  /**
   * @remarks
   * The version of the offline code template.
   * 
   * @example
   * 1
   */
  codeTemplateVersion?: number;
  /**
   * @remarks
   * The catalog for database SQL tasks. This parameter takes effect only for data source types that require a catalog, such as Presto.
   * 
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @remarks
   * The ID of the data source for database SQL tasks.
   * 
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The schema for database SQL tasks. This parameter takes effect only for data source types that require a schema, such as Oracle.
   * 
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @remarks
   * The Python connection configuration.
   */
  databricksPythonConnectInfo?: CreateBatchTaskRequestCreateCommandDatabricksPythonConnectInfo;
  /**
   * @remarks
   * The description.
   * 
   * This parameter is required.
   * 
   * @example
   * xx test.
   */
  description?: string;
  /**
   * @remarks
   * The IDs of the development owners.
   */
  developOwnerIdList?: string[];
  /**
   * @remarks
   * The directory in the menu tree to which the task belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * /a/b
   */
  directory?: string;
  /**
   * @remarks
   * The task execution engine, such as Python tasks. Valid values:
   * - PYTHON2_7
   * - PYTHON3_7
   * - PYTHON3_11
   * 
   * @example
   * PYTHON3_7
   */
  engine?: string;
  /**
   * @remarks
   * The name of the offline task.
   * 
   * This parameter is required.
   * 
   * @example
   * test111
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the O&M owners.
   */
  opsOwnerIdList?: string[];
  /**
   * @remarks
   * The PAI configuration.
   */
  paiConfig?: CreateBatchTaskRequestCreateCommandPaiConfig;
  /**
   * @remarks
   * The ID of the project to which the task belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 10121101
   */
  projectId?: number;
  /**
   * @remarks
   * The third-party Python packages that the task depends on.
   */
  pythonModuleList?: string[];
  /**
   * @remarks
   * The scheduling type. Valid values: 1 (periodic task) and 3 (manual task).
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  scheduleType?: number;
  /**
   * @remarks
   * Specifies whether to enable dynamic resource configuration for Spark. This parameter takes effect only for Spark SQL tasks. If you do not specify this parameter, dynamic resource configuration is enabled by default for Spark SQL tasks.
   * 
   * @example
   * true
   */
  sparkDynamicResourceSwitch?: boolean;
  /**
   * @remarks
   * The effective scope of Spark resources. Valid values: ONLY_PROD and PROD_AND_DEV. If you do not specify this parameter, the default value ONLY_PROD is used for Spark SQL tasks.
   * 
   * @example
   * ONLY_PROD
   */
  sparkResourceEffectScope?: string;
  /**
   * @remarks
   * The resource configuration for the Spark task. The value is a JSON string, such as {"spark.executor.memory":"2g"}.
   * 
   * @example
   * {"spark.executor.memory":"2g"}
   */
  sparkSqlResourceConfigMap?: string;
  /**
   * @remarks
   * The MaxCompute Spark version. Valid values: MAX_COMPUTE_23X, MAX_COMPUTE_245X, and MAX_COMPUTE_311X. For Apsara Stack, only MAX_COMPUTE_APSARA is supported. Display names such as Spark 2.3.0, Spark 2.4.5, and Spark 3.1.1 are also accepted.
   * 
   * @example
   * Spark 3.1.1
   */
  sparkVersion?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - 1: Hive_SQL.
   * - 101: Hive_SQL_23X.
   * - 111: HIVE_SQL_FUSION_INSIGHT_80X.
   * - 131: COMMON_HIVE_SQL.
   * - 2: HADOOP_MR.
   * - 5: MaxCompute_SQL.
   * - 6: MaxCompute_MR.
   * - 7: SPARK_SQL_ON_MAX_COMPUTE.
   * - 8: SPARK_JAR_ON_MAX_COMPUTE.
   * - 17: SPARK_SQL_ON_HIVE.
   * - 18: Spark_JAR_ON_HIVE.
   * - 10: Shell.
   * - 71: PAI_DESIGNER.
   * - 15: DataX.
   * - 16: Merge.
   * - 21: Python.
   * - 22: Python37x.
   * - 23: Perl.
   * - 24: Python311x.
   * - 25: OneService_SQL.
   * - 26: ONE_SERVICE_SQL_ADB_FOR_PG.
   * - 27: OneService_SQL_Hive11x.
   * - 29: OneService_SQL_Hive23x.
   * - 75: ONE_SERVICE_SQL_TDH_INCEPTOR.
   * - 91: ONE_SERVICE_SQL_HIVE_CDP.
   * - 92: ONE_SERVICE_SQL_HIVE_ASIA_INFO_DP_53X.
   * - 30: Dlink.
   * - 33: ONE_SERVICE_SQL_ADB_FOR_MYSQL.
   * - 31: Logical.
   * - 41: Flink_Streaming.
   * - 42: Flink_Batch.
   * - 51: ADB_FOR_PG.
   * - 100: DryRun.
   * - 902: CHECK.
   * - 999: VIRTUAL.
   * - 10000: INCEPTOR_SQL.
   * - 28: HOLOGRES_SQL.
   * - 76: ARGODB_SQL.
   * - 78: IMPALA_SQL.
   * - 79: STARROCKS_SQL.
   * - 80: SPARK_SQL.
   * - 81: GAUSS_SQL.
   * - 998: DATABASE_SQL.
   * - 997: EXTERNAL_TRIGGER.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      codeTemplateId: 'CodeTemplateId',
      codeTemplateVersion: 'CodeTemplateVersion',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      databricksPythonConnectInfo: 'DatabricksPythonConnectInfo',
      description: 'Description',
      developOwnerIdList: 'DevelopOwnerIdList',
      directory: 'Directory',
      engine: 'Engine',
      name: 'Name',
      opsOwnerIdList: 'OpsOwnerIdList',
      paiConfig: 'PaiConfig',
      projectId: 'ProjectId',
      pythonModuleList: 'PythonModuleList',
      scheduleType: 'ScheduleType',
      sparkDynamicResourceSwitch: 'SparkDynamicResourceSwitch',
      sparkResourceEffectScope: 'SparkResourceEffectScope',
      sparkSqlResourceConfigMap: 'SparkSqlResourceConfigMap',
      sparkVersion: 'SparkVersion',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeTemplateId: 'string',
      codeTemplateVersion: 'number',
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      databricksPythonConnectInfo: CreateBatchTaskRequestCreateCommandDatabricksPythonConnectInfo,
      description: 'string',
      developOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      directory: 'string',
      engine: 'string',
      name: 'string',
      opsOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      paiConfig: CreateBatchTaskRequestCreateCommandPaiConfig,
      projectId: 'number',
      pythonModuleList: { 'type': 'array', 'itemType': 'string' },
      scheduleType: 'number',
      sparkDynamicResourceSwitch: 'boolean',
      sparkResourceEffectScope: 'string',
      sparkSqlResourceConfigMap: 'string',
      sparkVersion: 'string',
      taskType: 'number',
    };
  }

  validate() {
    if(this.databricksPythonConnectInfo && typeof (this.databricksPythonConnectInfo as any).validate === 'function') {
      (this.databricksPythonConnectInfo as any).validate();
    }
    if(Array.isArray(this.developOwnerIdList)) {
      $dara.Model.validateArray(this.developOwnerIdList);
    }
    if(Array.isArray(this.opsOwnerIdList)) {
      $dara.Model.validateArray(this.opsOwnerIdList);
    }
    if(this.paiConfig && typeof (this.paiConfig as any).validate === 'function') {
      (this.paiConfig as any).validate();
    }
    if(Array.isArray(this.pythonModuleList)) {
      $dara.Model.validateArray(this.pythonModuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The create command.
   * 
   * This parameter is required.
   */
  createCommand?: CreateBatchTaskRequestCreateCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateBatchTaskRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

