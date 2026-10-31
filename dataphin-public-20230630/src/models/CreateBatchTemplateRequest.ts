// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchTemplateRequestCreateCommandDataSourceConfig extends $dara.Model {
  /**
   * @remarks
   * The catalog of the data source for the database SQL template.
   * 
   * @example
   * default
   */
  catalog?: string;
  /**
   * @remarks
   * The ID of the data source for the database SQL template.
   * 
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  dsId?: string;
  /**
   * @remarks
   * The schema of the data source for the database SQL template.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The type of the data source for the database SQL template. Valid values: MYSQL, ORACLE, ADB_FOR_PG, OUSHUDB, PRESTO, POSTGRE_SQL, STARROCKS, CLICKHOUSE, ANALYTICDB, ADB_FOR_MYSQL_V3, GAUSSDB, SELECTDB, DORIS, SQL_SERVER, HOLOGRES, OPENGAUSS, DAMENG, OCEANBASE, TRINO, POLARDB_X2, LINDORM, EMR_SPARK_SERVERLESS, TDSQL_FOR_PG, TDSQL_FOR_MYSQL, GBASE_8A, and TDENGINE.
   * 
   * This parameter is required.
   * 
   * @example
   * MYSQL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      dsId: 'DsId',
      schema: 'Schema',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      dsId: 'string',
      schema: 'string',
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

export class CreateBatchTemplateRequestCreateCommandParams extends $dara.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * Input date
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether encryption is enabled for the parameter.
   */
  encryptEnabled?: boolean;
  /**
   * @remarks
   * The key of the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptEnabled: 'EncryptEnabled',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptEnabled: 'boolean',
      key: 'string',
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

export class CreateBatchTemplateRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The content of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * echo 123
   */
  content?: string;
  /**
   * @remarks
   * The datasource config for database SQL templates, which takes effect only for database SQL templates.
   */
  dataSourceConfig?: CreateBatchTemplateRequestCreateCommandDataSourceConfig;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Shell template for data processing
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource group in the development environment. By default, the default resource group of the project is used.
   * 
   * @example
   * default
   */
  devResourceGroupId?: string;
  /**
   * @remarks
   * The directory of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * /Data Development/Templates
   */
  directory?: string;
  /**
   * @remarks
   * The compute engine version. Valid values: PYTHON_2_7, PYTHON_3_7, and PYTHON_3_11.
   * 
   * @example
   * PYTHON_3_7
   */
  engine?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * Data processing template
   */
  name?: string;
  /**
   * @remarks
   * The node type of the template. Valid values: 10: Shell, 21: Python, 998: Database SQL, 5: MaxCompute SQL, 6: MapReduce on MaxCompute, 8: Spark on MaxCompute, 28: Hologres SQL, 1: Hive SQL, 2: MapReduce on Yarn, 18: Spark on Yarn, 78: Impala SQL, 80: Spark SQL, 10000: Inceptor SQL, 51: AnalyticDB for PostgreSQL SQL, 81: GaussDB SQL, 82: Databricks SQL, 76: ArgoDB SQL, 79: StarRocks SQL, 202: SelectDB SQL, 201: Doris SQL, and 203: OushuDB SQL.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  operatorType?: number;
  /**
   * @remarks
   * The list of template parameters.
   */
  params?: CreateBatchTemplateRequestCreateCommandParams[];
  /**
   * @remarks
   * The list of IDs of dependent third-party Python packages.
   */
  pythonModuleIds?: number[];
  /**
   * @remarks
   * The ID of the resource group in the production environment. By default, the default resource group of the project is used.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to share runtime resources.
   */
  shareRuntimeResource?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dataSourceConfig: 'DataSourceConfig',
      description: 'Description',
      devResourceGroupId: 'DevResourceGroupId',
      directory: 'Directory',
      engine: 'Engine',
      name: 'Name',
      operatorType: 'OperatorType',
      params: 'Params',
      pythonModuleIds: 'PythonModuleIds',
      resourceGroupId: 'ResourceGroupId',
      shareRuntimeResource: 'ShareRuntimeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSourceConfig: CreateBatchTemplateRequestCreateCommandDataSourceConfig,
      description: 'string',
      devResourceGroupId: 'string',
      directory: 'string',
      engine: 'string',
      name: 'string',
      operatorType: 'number',
      params: { 'type': 'array', 'itemType': CreateBatchTemplateRequestCreateCommandParams },
      pythonModuleIds: { 'type': 'array', 'itemType': 'number' },
      resourceGroupId: 'string',
      shareRuntimeResource: 'boolean',
    };
  }

  validate() {
    if(this.dataSourceConfig && typeof (this.dataSourceConfig as any).validate === 'function') {
      (this.dataSourceConfig as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    if(Array.isArray(this.pythonModuleIds)) {
      $dara.Model.validateArray(this.pythonModuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The command to create a template.
   * 
   * This parameter is required.
   */
  createCommand?: CreateBatchTemplateRequestCreateCommand;
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
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateBatchTemplateRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
      projectId: 'number',
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

