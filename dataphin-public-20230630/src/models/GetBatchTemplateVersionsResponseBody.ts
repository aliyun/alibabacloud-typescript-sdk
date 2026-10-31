// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTemplateVersionsResponseBodyDataTemplateVersionListDataSourceConfig extends $dara.Model {
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
   * The data source type of the database SQL template. Valid values: MYSQL, ORACLE, ADB_FOR_PG, OUSHUDB, PRESTO, POSTGRE_SQL, STARROCKS, CLICKHOUSE, ANALYTICDB, ADB_FOR_MYSQL_V3, GAUSSDB, SELECTDB, DORIS, SQL_SERVER, HOLOGRES, OPENGAUSS, DAMENG, OCEANBASE, TRINO, POLARDB_X2, LINDORM, EMR_SPARK_SERVERLESS, TDSQL_FOR_PG, TDSQL_FOR_MYSQL, GBASE_8A, and TDENGINE.
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

export class GetBatchTemplateVersionsResponseBodyDataTemplateVersionListParams extends $dara.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether encryption is enabled for the parameter.
   */
  encryptEnabled?: boolean;
  /**
   * @remarks
   * The key of the parameter.
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

export class GetBatchTemplateVersionsResponseBodyDataTemplateVersionListPythonModuleList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Python third-party package.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * The installation time.
   * 
   * @example
   * 2026-01-01 10:00:00
   */
  installTime?: string;
  /**
   * @remarks
   * The name of the Python third-party package.
   * 
   * @example
   * numpy
   */
  name?: string;
  /**
   * @remarks
   * The Python version. Valid values: PYTHON_2_7, PYTHON_3_7, and PYTHON_3_11.
   * 
   * @example
   * PYTHON_2_7
   */
  pythonVersion?: string;
  /**
   * @remarks
   * The status of the third-party package. Valid values: INSTALL_SUCCESS (installed), INSTALL_FAILED (installation failed), INSTALLING (installing), UPGRADE_SUCCESS (upgraded), UPGRADE_FAILED (upgrade failed), and UPGRADING (upgrading).
   * 
   * @example
   * INSTALL_SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The version of the third-party package.
   * 
   * @example
   * 1.0.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      installTime: 'InstallTime',
      name: 'Name',
      pythonVersion: 'PythonVersion',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      installTime: 'string',
      name: 'string',
      pythonVersion: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTemplateVersionsResponseBodyDataTemplateVersionList extends $dara.Model {
  /**
   * @remarks
   * The template submission comment.
   * 
   * @example
   * Initial submission
   */
  comment?: string;
  /**
   * @remarks
   * The template content.
   * 
   * @example
   * #!/bin/bash
   * echo \\"hello world\\"
   */
  content?: string;
  /**
   * @remarks
   * The data source configuration of the database SQL template.
   */
  dataSourceConfig?: GetBatchTemplateVersionsResponseBodyDataTemplateVersionListDataSourceConfig;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Shell template for data processing
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource group in the development environment.
   * 
   * @example
   * default
   */
  devResourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource group in the development environment.
   * 
   * @example
   * Default resource group for the project
   */
  devResourceGroupName?: string;
  /**
   * @remarks
   * The version of the compute engine. Valid values: Python 2.7 and Python 3.7.
   * 
   * @example
   * Python 3.7
   */
  engine?: string;
  /**
   * @remarks
   * The time when the template was created. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-01-01 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the template was updated. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-05-28 15:30:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the template, which is the same as the menu tree node ID.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * The last user who updated the template.
   * 
   * @example
   * Li Si
   */
  modifier?: string;
  /**
   * @remarks
   * The ID of the last user who updated the template.
   * 
   * @example
   * 100002
   */
  modifierId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * Data processing template
   */
  name?: string;
  /**
   * @remarks
   * The node type. Valid values: 10 (Shell) and 21 (Python).
   * 
   * @example
   * 10
   */
  operatorType?: number;
  /**
   * @remarks
   * The owner of the template.
   * 
   * @example
   * Zhang San
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the template owner.
   * 
   * @example
   * 100001
   */
  ownerId?: string;
  /**
   * @remarks
   * The list of template parameters.
   */
  params?: GetBatchTemplateVersionsResponseBodyDataTemplateVersionListParams[];
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * The list of dependent Python third-party packages.
   */
  pythonModuleList?: GetBatchTemplateVersionsResponseBodyDataTemplateVersionListPythonModuleList[];
  /**
   * @remarks
   * The ID of the resource group in the production environment.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource group in the production environment.
   * 
   * @example
   * Default resource group for the project
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * Indicates whether runtime resources are shared.
   */
  shareRuntimeResource?: boolean;
  /**
   * @remarks
   * The status of the template. Valid values: 0 (draft), 2 (submitted), and 100 (in development).
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      content: 'Content',
      dataSourceConfig: 'DataSourceConfig',
      description: 'Description',
      devResourceGroupId: 'DevResourceGroupId',
      devResourceGroupName: 'DevResourceGroupName',
      engine: 'Engine',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      modifier: 'Modifier',
      modifierId: 'ModifierId',
      name: 'Name',
      operatorType: 'OperatorType',
      owner: 'Owner',
      ownerId: 'OwnerId',
      params: 'Params',
      projectId: 'ProjectId',
      pythonModuleList: 'PythonModuleList',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      shareRuntimeResource: 'ShareRuntimeResource',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      content: 'string',
      dataSourceConfig: GetBatchTemplateVersionsResponseBodyDataTemplateVersionListDataSourceConfig,
      description: 'string',
      devResourceGroupId: 'string',
      devResourceGroupName: 'string',
      engine: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      modifier: 'string',
      modifierId: 'string',
      name: 'string',
      operatorType: 'number',
      owner: 'string',
      ownerId: 'string',
      params: { 'type': 'array', 'itemType': GetBatchTemplateVersionsResponseBodyDataTemplateVersionListParams },
      projectId: 'number',
      pythonModuleList: { 'type': 'array', 'itemType': GetBatchTemplateVersionsResponseBodyDataTemplateVersionListPythonModuleList },
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      shareRuntimeResource: 'boolean',
      status: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.dataSourceConfig && typeof (this.dataSourceConfig as any).validate === 'function') {
      (this.dataSourceConfig as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
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

export class GetBatchTemplateVersionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The template version list.
   */
  templateVersionList?: GetBatchTemplateVersionsResponseBodyDataTemplateVersionList[];
  static names(): { [key: string]: string } {
    return {
      templateVersionList: 'TemplateVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateVersionList: { 'type': 'array', 'itemType': GetBatchTemplateVersionsResponseBodyDataTemplateVersionList },
    };
  }

  validate() {
    if(Array.isArray(this.templateVersionList)) {
      $dara.Model.validateArray(this.templateVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTemplateVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetBatchTemplateVersionsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBatchTemplateVersionsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

