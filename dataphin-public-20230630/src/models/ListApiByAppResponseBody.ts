// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiByAppResponseBodyListResultDataPublicParamListTableAndDsList extends $dara.Model {
  /**
   * @remarks
   * The datasource ID.
   * 
   * @example
   * ds54321
   */
  datasourceId?: string;
  /**
   * @remarks
   * The datasource name.
   * 
   * @example
   * publicDatasource
   */
  datasourceName?: string;
  /**
   * @remarks
   * The datasource type.
   * 
   * @example
   * 3
   */
  datasourceType?: number;
  /**
   * @remarks
   * The datasource URL.
   * 
   * @example
   * https://example.com/public_datasource
   */
  datasourceUrl?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * public_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      datasourceType: 'DatasourceType',
      datasourceUrl: 'DatasourceUrl',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      datasourceName: 'string',
      datasourceType: 'number',
      datasourceUrl: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiByAppResponseBodyListResultDataPublicParamList extends $dara.Model {
  /**
   * @remarks
   * The date format.
   * 
   * @example
   * yyyy-MM-dd
   */
  dateFormat?: string;
  /**
   * @remarks
   * The default value for registered APIs.
   * 
   * @example
   * default_public_value
   */
  defaultValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * 这是一个示例公共参数
   */
  description?: string;
  /**
   * @remarks
   * The parameter description code.
   * 
   * @example
   * CODE_003
   */
  descriptionCode?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 3001
   */
  id?: number;
  /**
   * @remarks
   * The initial value.
   * 
   * @example
   * app_key_value
   */
  initialValue?: string;
  /**
   * @remarks
   * The frontend binding field.
   * 
   * @example
   * publicColumn1
   */
  mappingColumn?: string;
  /**
   * @remarks
   * Indicates whether the request parameter is required.
   * 
   * @example
   * 1
   */
  must?: number;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * Indicates whether the parameter is editable.
   * 
   * @example
   * 1
   */
  optional?: number;
  /**
   * @remarks
   * The original field name.
   * 
   * @example
   * original_public_column
   */
  originalColumn?: string;
  /**
   * @remarks
   * The frontend parameter name.
   * 
   * @example
   * publicParam1
   */
  paramName?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * String
   */
  paramType?: string;
  /**
   * @remarks
   * The request parameter location for registered APIs or the value path for response parameters.
   * 
   * @example
   * /path/to/public_param
   */
  parameterLocation?: string;
  /**
   * @remarks
   * The parameter example.
   * 
   * @example
   * publicValue1
   */
  sample?: string;
  /**
   * @remarks
   * -
   */
  tableAndDsList?: ListApiByAppResponseBodyListResultDataPublicParamListTableAndDsList[];
  static names(): { [key: string]: string } {
    return {
      dateFormat: 'DateFormat',
      defaultValue: 'DefaultValue',
      description: 'Description',
      descriptionCode: 'DescriptionCode',
      id: 'Id',
      initialValue: 'InitialValue',
      mappingColumn: 'MappingColumn',
      must: 'Must',
      operator: 'Operator',
      optional: 'Optional',
      originalColumn: 'OriginalColumn',
      paramName: 'ParamName',
      paramType: 'ParamType',
      parameterLocation: 'ParameterLocation',
      sample: 'Sample',
      tableAndDsList: 'TableAndDsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateFormat: 'string',
      defaultValue: 'string',
      description: 'string',
      descriptionCode: 'string',
      id: 'number',
      initialValue: 'string',
      mappingColumn: 'string',
      must: 'number',
      operator: 'string',
      optional: 'number',
      originalColumn: 'string',
      paramName: 'string',
      paramType: 'string',
      parameterLocation: 'string',
      sample: 'string',
      tableAndDsList: { 'type': 'array', 'itemType': ListApiByAppResponseBodyListResultDataPublicParamListTableAndDsList },
    };
  }

  validate() {
    if(Array.isArray(this.tableAndDsList)) {
      $dara.Model.validateArray(this.tableAndDsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiByAppResponseBodyListResultDataRegisterApi extends $dara.Model {
  /**
   * @remarks
   * The primary key of data_api.
   * 
   * @example
   * 67890
   */
  apiId?: number;
  /**
   * @remarks
   * The API datasource authentication mode.
   * 
   * @example
   * OAuth2
   */
  authenticationMode?: string;
  /**
   * @remarks
   * The API datasource ID.
   * 
   * @example
   * ds67890
   */
  datasourceId?: string;
  /**
   * @remarks
   * The API datasource name.
   * 
   * @example
   * registerDatasource
   */
  datasourceName?: string;
  /**
   * @remarks
   * The failure example.
   * 
   * @example
   * {"status":"error","message":"Invalid request"}
   */
  failExample?: string;
  /**
   * @remarks
   * The HTTP method of the registered API.
   * 
   * @example
   * 1
   */
  httpMethod?: number;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * 0
   */
  modelType?: number;
  /**
   * @remarks
   * The service path.
   * 
   * @example
   * /api/v1/register
   */
  path?: string;
  /**
   * @remarks
   * The API datasource request protocol.
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  /**
   * @remarks
   * The success example.
   * 
   * @example
   * {"status":"success","data":[]}
   */
  successExample?: string;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 30
   */
  timeout?: number;
  /**
   * @remarks
   * The API datasource URL.
   * 
   * @example
   * https://example.com/register_api
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      authenticationMode: 'AuthenticationMode',
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      failExample: 'FailExample',
      httpMethod: 'HttpMethod',
      modelType: 'ModelType',
      path: 'Path',
      protocol: 'Protocol',
      successExample: 'SuccessExample',
      timeout: 'Timeout',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      authenticationMode: 'string',
      datasourceId: 'string',
      datasourceName: 'string',
      failExample: 'string',
      httpMethod: 'number',
      modelType: 'number',
      path: 'string',
      protocol: 'string',
      successExample: 'string',
      timeout: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiByAppResponseBodyListResultDataRequestParamListTableAndDsList extends $dara.Model {
  /**
   * @remarks
   * The datasource ID.
   * 
   * @example
   * ds12345
   */
  datasourceId?: string;
  /**
   * @remarks
   * The datasource name.
   * 
   * @example
   * exampleDatasource
   */
  datasourceName?: string;
  /**
   * @remarks
   * The datasource type.
   * 
   * @example
   * 1
   */
  datasourceType?: number;
  /**
   * @remarks
   * The datasource URL.
   * 
   * @example
   * https://example.com/datasource
   */
  datasourceUrl?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * example_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      datasourceType: 'DatasourceType',
      datasourceUrl: 'DatasourceUrl',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      datasourceName: 'string',
      datasourceType: 'number',
      datasourceUrl: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiByAppResponseBodyListResultDataRequestParamList extends $dara.Model {
  /**
   * @remarks
   * The date format.
   * 
   * @example
   * yyyy-MM-dd
   */
  dateFormat?: string;
  /**
   * @remarks
   * The default value for registered APIs.
   * 
   * @example
   * default_value
   */
  defaultValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * 这是一个示例参数
   */
  description?: string;
  /**
   * @remarks
   * The parameter description code.
   * 
   * @example
   * CODE_001
   */
  descriptionCode?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * The initial value.
   * 
   * @example
   * app_key_value
   */
  initialValue?: string;
  /**
   * @remarks
   * The frontend binding field.
   * 
   * @example
   * column1
   */
  mappingColumn?: string;
  /**
   * @remarks
   * Indicates whether the request parameter is required.
   * 
   * @example
   * 1
   */
  must?: number;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * Indicates whether the parameter is editable.
   * 
   * @example
   * 1
   */
  optional?: number;
  /**
   * @remarks
   * The original field name.
   * 
   * @example
   * original_column
   */
  originalColumn?: string;
  /**
   * @remarks
   * The frontend parameter name.
   * 
   * @example
   * param1
   */
  paramName?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * String
   */
  paramType?: string;
  /**
   * @remarks
   * The request parameter location for registered APIs or the value path for response parameters.
   * 
   * @example
   * /path/to/param
   */
  parameterLocation?: string;
  /**
   * @remarks
   * The parameter example.
   * 
   * @example
   * value1
   */
  sample?: string;
  /**
   * @remarks
   * -
   */
  tableAndDsList?: ListApiByAppResponseBodyListResultDataRequestParamListTableAndDsList[];
  static names(): { [key: string]: string } {
    return {
      dateFormat: 'DateFormat',
      defaultValue: 'DefaultValue',
      description: 'Description',
      descriptionCode: 'DescriptionCode',
      id: 'Id',
      initialValue: 'InitialValue',
      mappingColumn: 'MappingColumn',
      must: 'Must',
      operator: 'Operator',
      optional: 'Optional',
      originalColumn: 'OriginalColumn',
      paramName: 'ParamName',
      paramType: 'ParamType',
      parameterLocation: 'ParameterLocation',
      sample: 'Sample',
      tableAndDsList: 'TableAndDsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateFormat: 'string',
      defaultValue: 'string',
      description: 'string',
      descriptionCode: 'string',
      id: 'number',
      initialValue: 'string',
      mappingColumn: 'string',
      must: 'number',
      operator: 'string',
      optional: 'number',
      originalColumn: 'string',
      paramName: 'string',
      paramType: 'string',
      parameterLocation: 'string',
      sample: 'string',
      tableAndDsList: { 'type': 'array', 'itemType': ListApiByAppResponseBodyListResultDataRequestParamListTableAndDsList },
    };
  }

  validate() {
    if(Array.isArray(this.tableAndDsList)) {
      $dara.Model.validateArray(this.tableAndDsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiByAppResponseBodyListResultDataResponseParamListTableAndDsList extends $dara.Model {
  /**
   * @remarks
   * The datasource ID.
   * 
   * @example
   * ds67890
   */
  datasourceId?: string;
  /**
   * @remarks
   * The datasource name.
   * 
   * @example
   * responseDatasource
   */
  datasourceName?: string;
  /**
   * @remarks
   * The datasource type.
   * 
   * @example
   * 2
   */
  datasourceType?: number;
  /**
   * @remarks
   * The datasource URL.
   * 
   * @example
   * https://example.com/response_datasource
   */
  datasourceUrl?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * response_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      datasourceType: 'DatasourceType',
      datasourceUrl: 'DatasourceUrl',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: 'string',
      datasourceName: 'string',
      datasourceType: 'number',
      datasourceUrl: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiByAppResponseBodyListResultDataResponseParamList extends $dara.Model {
  /**
   * @remarks
   * The date format.
   * 
   * @example
   * yyyy-MM-dd
   */
  dateFormat?: string;
  /**
   * @remarks
   * The default value for registered APIs.
   * 
   * @example
   * default_response_value
   */
  defaultValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * 这是一个示例响应参数
   */
  description?: string;
  /**
   * @remarks
   * The parameter description code.
   * 
   * @example
   * CODE_002
   */
  descriptionCode?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 2001
   */
  id?: number;
  /**
   * @remarks
   * The initial value.
   * 
   * @example
   * app_key_value
   */
  initialValue?: string;
  /**
   * @remarks
   * The frontend binding field.
   * 
   * @example
   * responseColumn1
   */
  mappingColumn?: string;
  /**
   * @remarks
   * Indicates whether the request parameter is required.
   * 
   * @example
   * 1
   */
  must?: number;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * Indicates whether the parameter is editable.
   * 
   * @example
   * 1
   */
  optional?: number;
  /**
   * @remarks
   * The original field name.
   * 
   * @example
   * original_response_column
   */
  originalColumn?: string;
  /**
   * @remarks
   * The frontend parameter name.
   * 
   * @example
   * responseParam1
   */
  paramName?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * String
   */
  paramType?: string;
  /**
   * @remarks
   * The request parameter location for registered APIs or the value path for response parameters.
   * 
   * @example
   * /path/to/response_param
   */
  parameterLocation?: string;
  /**
   * @remarks
   * The parameter example.
   * 
   * @example
   * responseValue1
   */
  sample?: string;
  /**
   * @remarks
   * -
   */
  tableAndDsList?: ListApiByAppResponseBodyListResultDataResponseParamListTableAndDsList[];
  static names(): { [key: string]: string } {
    return {
      dateFormat: 'DateFormat',
      defaultValue: 'DefaultValue',
      description: 'Description',
      descriptionCode: 'DescriptionCode',
      id: 'Id',
      initialValue: 'InitialValue',
      mappingColumn: 'MappingColumn',
      must: 'Must',
      operator: 'Operator',
      optional: 'Optional',
      originalColumn: 'OriginalColumn',
      paramName: 'ParamName',
      paramType: 'ParamType',
      parameterLocation: 'ParameterLocation',
      sample: 'Sample',
      tableAndDsList: 'TableAndDsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateFormat: 'string',
      defaultValue: 'string',
      description: 'string',
      descriptionCode: 'string',
      id: 'number',
      initialValue: 'string',
      mappingColumn: 'string',
      must: 'number',
      operator: 'string',
      optional: 'number',
      originalColumn: 'string',
      paramName: 'string',
      paramType: 'string',
      parameterLocation: 'string',
      sample: 'string',
      tableAndDsList: { 'type': 'array', 'itemType': ListApiByAppResponseBodyListResultDataResponseParamListTableAndDsList },
    };
  }

  validate() {
    if(Array.isArray(this.tableAndDsList)) {
      $dara.Model.validateArray(this.tableAndDsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiByAppResponseBodyListResultData extends $dara.Model {
  /**
   * @remarks
   * The API number.
   * 
   * @example
   * 987654321
   */
  apiNo?: number;
  /**
   * @remarks
   * The API timeout.
   * 
   * @example
   * 30
   */
  apiTimeout?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * exampleApp
   */
  appName?: string;
  /**
   * @remarks
   * The list of permission types.
   */
  authTypes?: string[];
  /**
   * @remarks
   * The business module name.
   * 
   * @example
   * exampleModule
   */
  bizModuleEnName?: string;
  /**
   * @remarks
   * The API cache switch.
   * 
   * @example
   * 1
   */
  cacheSwitch?: string;
  /**
   * @remarks
   * The cache duration, in seconds.
   * 
   * @example
   * 60
   */
  cacheTime?: string;
  /**
   * @remarks
   * The creation type. Valid values:
   * SQL_MODE(0, "Logical table API - SQL mode"),
   * WIZARD_MODE(1, "Logical table API - wizard mode"),
   * DIRECT_API_MODE(2, "Direct datasource - SQL mode"),
   * REGISTER_API_MODE(3, "Registered API mode"),
   * COMPOSITE_API_MODE(4, "Composite API mode").
   * 
   * @example
   * 1
   */
  createType?: number;
  /**
   * @remarks
   * The data environment.
   * 
   * @example
   * 0
   */
  dbEnv?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 这是一个示例API
   */
  description?: string;
  /**
   * @remarks
   * The datasource ID of the direct API.
   * 
   * @example
   * 54321
   */
  directDatasourceId?: number;
  /**
   * @remarks
   * The datasource name of the direct API.
   * 
   * @example
   * directDatasource
   */
  directDatasourceName?: string;
  /**
   * @remarks
   * The API group ID.
   * 
   * @example
   * 67890
   */
  groupId?: number;
  /**
   * @remarks
   * The API group name.
   * 
   * @example
   * exampleGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the table is a logical table.
   */
  isLogicalTable?: boolean;
  /**
   * @remarks
   * Indicates whether the query is a paged query.
   * 
   * @example
   * 0
   */
  isPagedQuery?: number;
  /**
   * @remarks
   * The maximum number of returned records.
   * 
   * @example
   * 100
   */
  maxReturnNum?: number;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * 0
   */
  modelType?: number;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * exampleApi
   */
  name?: string;
  /**
   * @remarks
   * The service project ID.
   * 
   * @example
   * 112233
   */
  projId?: number;
  /**
   * @remarks
   * The service project name.
   * 
   * @example
   * exampleProject
   */
  projName?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * 3
   */
  protocol?: number;
  /**
   * @remarks
   * The protocol name.
   * 
   * @example
   * HTTP和HTTPS
   */
  protocolName?: string;
  /**
   * @remarks
   * -
   */
  publicParamList?: ListApiByAppResponseBodyListResultDataPublicParamList[];
  /**
   * @remarks
   * The registered API information.
   */
  registerApi?: ListApiByAppResponseBodyListResultDataRegisterApi;
  /**
   * @remarks
   * The request method.
   * 
   * @example
   * 1
   */
  requestMethod?: number;
  /**
   * @remarks
   * The request method name.
   * 
   * @example
   * GET
   */
  requestMethodName?: string;
  /**
   * @remarks
   * -
   */
  requestParamList?: ListApiByAppResponseBodyListResultDataRequestParamList[];
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * exampleResourceGroup
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * -
   */
  responseParamList?: ListApiByAppResponseBodyListResultDataResponseParamList[];
  /**
   * @remarks
   * The sample call result.
   * 
   * @example
   * {"status":"success","data":[]}
   */
  resultSample?: string;
  /**
   * @remarks
   * The return type.
   * 
   * @example
   * 3
   */
  returnType?: number;
  /**
   * @remarks
   * The return type name.
   * 
   * @example
   * JSON
   */
  returnTypeName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * grp12345
   */
  rsGrpId?: string;
  /**
   * @remarks
   * The script type.
   * 
   * @example
   * SQL
   */
  scriptType?: string;
  /**
   * @remarks
   * The special SQL flag.
   * 
   * @example
   * 0
   */
  specialSql?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * SELECT * FROM example_table
   */
  sqlStatement?: string;
  /**
   * @remarks
   * The logical table name.
   * 
   * @example
   * exampleTable
   */
  tableName?: string;
  /**
   * @remarks
   * The timeout duration, in seconds.
   * 
   * @example
   * 10
   */
  timeout?: string;
  /**
   * @remarks
   * The update frequency.
   * 
   * @example
   * 2
   */
  updateRate?: number;
  /**
   * @remarks
   * The update frequency name.
   * 
   * @example
   * 每日更新
   */
  updateRateName?: string;
  /**
   * @remarks
   * The API version.
   * 
   * @example
   * v1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiNo: 'ApiNo',
      apiTimeout: 'ApiTimeout',
      appName: 'AppName',
      authTypes: 'AuthTypes',
      bizModuleEnName: 'BizModuleEnName',
      cacheSwitch: 'CacheSwitch',
      cacheTime: 'CacheTime',
      createType: 'CreateType',
      dbEnv: 'DbEnv',
      description: 'Description',
      directDatasourceId: 'DirectDatasourceId',
      directDatasourceName: 'DirectDatasourceName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      id: 'Id',
      isLogicalTable: 'IsLogicalTable',
      isPagedQuery: 'IsPagedQuery',
      maxReturnNum: 'MaxReturnNum',
      modelType: 'ModelType',
      name: 'Name',
      projId: 'ProjId',
      projName: 'ProjName',
      protocol: 'Protocol',
      protocolName: 'ProtocolName',
      publicParamList: 'PublicParamList',
      registerApi: 'RegisterApi',
      requestMethod: 'RequestMethod',
      requestMethodName: 'RequestMethodName',
      requestParamList: 'RequestParamList',
      resourceGroupName: 'ResourceGroupName',
      responseParamList: 'ResponseParamList',
      resultSample: 'ResultSample',
      returnType: 'ReturnType',
      returnTypeName: 'ReturnTypeName',
      rsGrpId: 'RsGrpId',
      scriptType: 'ScriptType',
      specialSql: 'SpecialSql',
      sqlStatement: 'SqlStatement',
      tableName: 'TableName',
      timeout: 'Timeout',
      updateRate: 'UpdateRate',
      updateRateName: 'UpdateRateName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiNo: 'number',
      apiTimeout: 'number',
      appName: 'string',
      authTypes: { 'type': 'array', 'itemType': 'string' },
      bizModuleEnName: 'string',
      cacheSwitch: 'string',
      cacheTime: 'string',
      createType: 'number',
      dbEnv: 'number',
      description: 'string',
      directDatasourceId: 'number',
      directDatasourceName: 'string',
      groupId: 'number',
      groupName: 'string',
      id: 'number',
      isLogicalTable: 'boolean',
      isPagedQuery: 'number',
      maxReturnNum: 'number',
      modelType: 'number',
      name: 'string',
      projId: 'number',
      projName: 'string',
      protocol: 'number',
      protocolName: 'string',
      publicParamList: { 'type': 'array', 'itemType': ListApiByAppResponseBodyListResultDataPublicParamList },
      registerApi: ListApiByAppResponseBodyListResultDataRegisterApi,
      requestMethod: 'number',
      requestMethodName: 'string',
      requestParamList: { 'type': 'array', 'itemType': ListApiByAppResponseBodyListResultDataRequestParamList },
      resourceGroupName: 'string',
      responseParamList: { 'type': 'array', 'itemType': ListApiByAppResponseBodyListResultDataResponseParamList },
      resultSample: 'string',
      returnType: 'number',
      returnTypeName: 'string',
      rsGrpId: 'string',
      scriptType: 'string',
      specialSql: 'number',
      sqlStatement: 'string',
      tableName: 'string',
      timeout: 'string',
      updateRate: 'number',
      updateRateName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authTypes)) {
      $dara.Model.validateArray(this.authTypes);
    }
    if(Array.isArray(this.publicParamList)) {
      $dara.Model.validateArray(this.publicParamList);
    }
    if(this.registerApi && typeof (this.registerApi as any).validate === 'function') {
      (this.registerApi as any).validate();
    }
    if(Array.isArray(this.requestParamList)) {
      $dara.Model.validateArray(this.requestParamList);
    }
    if(Array.isArray(this.responseParamList)) {
      $dara.Model.validateArray(this.responseParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiByAppResponseBodyListResult extends $dara.Model {
  /**
   * @remarks
   * The API list.
   */
  data?: ListApiByAppResponseBodyListResultData[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListApiByAppResponseBodyListResultData },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiByAppResponseBody extends $dara.Model {
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The query result.
   */
  listResult?: ListApiByAppResponseBodyListResult;
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
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      listResult: 'ListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      listResult: ListApiByAppResponseBodyListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.listResult && typeof (this.listResult as any).validate === 'function') {
      (this.listResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

