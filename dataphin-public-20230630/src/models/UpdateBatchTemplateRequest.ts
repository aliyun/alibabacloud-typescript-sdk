// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBatchTemplateRequestUpdateCommandDataSourceConfig extends $dara.Model {
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

export class UpdateBatchTemplateRequestUpdateCommandParams extends $dara.Model {
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

export class UpdateBatchTemplateRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The template content.
   * 
   * This parameter is required.
   * 
   * @example
   * echo 123
   */
  content?: string;
  /**
   * @remarks
   * The datasource config for database SQL templates. This parameter takes effect only for database SQL templates.
   */
  dataSourceConfig?: UpdateBatchTemplateRequestUpdateCommandDataSourceConfig;
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
   * The folder of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * /Data development/Templates
   */
  directory?: string;
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
   * The list of template parameters.
   */
  params?: UpdateBatchTemplateRequestUpdateCommandParams[];
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
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dataSourceConfig: 'DataSourceConfig',
      description: 'Description',
      devResourceGroupId: 'DevResourceGroupId',
      directory: 'Directory',
      name: 'Name',
      params: 'Params',
      pythonModuleIds: 'PythonModuleIds',
      resourceGroupId: 'ResourceGroupId',
      shareRuntimeResource: 'ShareRuntimeResource',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSourceConfig: UpdateBatchTemplateRequestUpdateCommandDataSourceConfig,
      description: 'string',
      devResourceGroupId: 'string',
      directory: 'string',
      name: 'string',
      params: { 'type': 'array', 'itemType': UpdateBatchTemplateRequestUpdateCommandParams },
      pythonModuleIds: { 'type': 'array', 'itemType': 'number' },
      resourceGroupId: 'string',
      shareRuntimeResource: 'boolean',
      templateId: 'number',
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

export class UpdateBatchTemplateRequest extends $dara.Model {
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
  /**
   * @remarks
   * The template update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateBatchTemplateRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      projectId: 'number',
      updateCommand: UpdateBatchTemplateRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

