// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiByAppResponseBodyListResultDataPublicParamListTableAndDsList extends $dara.Model {
  /**
   * @example
   * ds54321
   */
  datasourceId?: string;
  /**
   * @example
   * publicDatasource
   */
  datasourceName?: string;
  /**
   * @example
   * 3
   */
  datasourceType?: number;
  /**
   * @example
   * https://example.com/public_datasource
   */
  datasourceUrl?: string;
  /**
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
   * @example
   * yyyy-MM-dd
   */
  dateFormat?: string;
  /**
   * @example
   * default_public_value
   */
  defaultValue?: string;
  /**
   * @example
   * 这是一个示例公共参数
   */
  description?: string;
  /**
   * @example
   * CODE_003
   */
  descriptionCode?: string;
  /**
   * @example
   * 3001
   */
  id?: number;
  /**
   * @example
   * app_key_value
   */
  initialValue?: string;
  /**
   * @example
   * publicColumn1
   */
  mappingColumn?: string;
  /**
   * @example
   * 1
   */
  must?: number;
  /**
   * @example
   * =
   */
  operator?: string;
  /**
   * @example
   * 1
   */
  optional?: number;
  /**
   * @example
   * original_public_column
   */
  originalColumn?: string;
  /**
   * @example
   * publicParam1
   */
  paramName?: string;
  /**
   * @example
   * String
   */
  paramType?: string;
  /**
   * @example
   * /path/to/public_param
   */
  parameterLocation?: string;
  /**
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
   * @example
   * 67890
   */
  apiId?: number;
  /**
   * @example
   * OAuth2
   */
  authenticationMode?: string;
  /**
   * @example
   * ds67890
   */
  datasourceId?: string;
  /**
   * @example
   * registerDatasource
   */
  datasourceName?: string;
  /**
   * @example
   * {"status":"error","message":"Invalid request"}
   */
  failExample?: string;
  /**
   * @example
   * 1
   */
  httpMethod?: number;
  /**
   * @example
   * 0
   */
  modelType?: number;
  /**
   * @example
   * /api/v1/register
   */
  path?: string;
  /**
   * @example
   * HTTPS
   */
  protocol?: string;
  /**
   * @example
   * {"status":"success","data":[]}
   */
  successExample?: string;
  /**
   * @example
   * 30
   */
  timeout?: number;
  /**
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
   * @example
   * ds12345
   */
  datasourceId?: string;
  /**
   * @example
   * exampleDatasource
   */
  datasourceName?: string;
  /**
   * @example
   * 1
   */
  datasourceType?: number;
  /**
   * @example
   * https://example.com/datasource
   */
  datasourceUrl?: string;
  /**
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
   * @example
   * yyyy-MM-dd
   */
  dateFormat?: string;
  /**
   * @example
   * default_value
   */
  defaultValue?: string;
  /**
   * @example
   * 这是一个示例参数
   */
  description?: string;
  /**
   * @example
   * CODE_001
   */
  descriptionCode?: string;
  /**
   * @example
   * 1001
   */
  id?: number;
  /**
   * @example
   * app_key_value
   */
  initialValue?: string;
  /**
   * @example
   * column1
   */
  mappingColumn?: string;
  /**
   * @example
   * 1
   */
  must?: number;
  /**
   * @example
   * =
   */
  operator?: string;
  /**
   * @example
   * 1
   */
  optional?: number;
  /**
   * @example
   * original_column
   */
  originalColumn?: string;
  /**
   * @example
   * param1
   */
  paramName?: string;
  /**
   * @example
   * String
   */
  paramType?: string;
  /**
   * @example
   * /path/to/param
   */
  parameterLocation?: string;
  /**
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
   * @example
   * ds67890
   */
  datasourceId?: string;
  /**
   * @example
   * responseDatasource
   */
  datasourceName?: string;
  /**
   * @example
   * 2
   */
  datasourceType?: number;
  /**
   * @example
   * https://example.com/response_datasource
   */
  datasourceUrl?: string;
  /**
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
   * @example
   * yyyy-MM-dd
   */
  dateFormat?: string;
  /**
   * @example
   * default_response_value
   */
  defaultValue?: string;
  /**
   * @example
   * 这是一个示例响应参数
   */
  description?: string;
  /**
   * @example
   * CODE_002
   */
  descriptionCode?: string;
  /**
   * @example
   * 2001
   */
  id?: number;
  /**
   * @example
   * app_key_value
   */
  initialValue?: string;
  /**
   * @example
   * responseColumn1
   */
  mappingColumn?: string;
  /**
   * @example
   * 1
   */
  must?: number;
  /**
   * @example
   * =
   */
  operator?: string;
  /**
   * @example
   * 1
   */
  optional?: number;
  /**
   * @example
   * original_response_column
   */
  originalColumn?: string;
  /**
   * @example
   * responseParam1
   */
  paramName?: string;
  /**
   * @example
   * String
   */
  paramType?: string;
  /**
   * @example
   * /path/to/response_param
   */
  parameterLocation?: string;
  /**
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
   * @example
   * 987654321
   */
  apiNo?: number;
  /**
   * @example
   * 30
   */
  apiTimeout?: number;
  /**
   * @example
   * exampleApp
   */
  appName?: string;
  /**
   * @example
   * exampleModule
   */
  bizModuleEnName?: string;
  /**
   * @example
   * 1
   */
  cacheSwitch?: string;
  /**
   * @example
   * 60
   */
  cacheTime?: string;
  /**
   * @example
   * 1
   */
  createType?: number;
  /**
   * @example
   * 0
   */
  dbEnv?: number;
  /**
   * @example
   * 这是一个示例API
   */
  description?: string;
  /**
   * @example
   * 54321
   */
  directDatasourceId?: number;
  /**
   * @example
   * directDatasource
   */
  directDatasourceName?: string;
  /**
   * @example
   * 67890
   */
  groupId?: number;
  /**
   * @example
   * exampleGroup
   */
  groupName?: string;
  /**
   * @example
   * 12345
   */
  id?: number;
  isLogicalTable?: boolean;
  /**
   * @example
   * 0
   */
  isPagedQuery?: number;
  /**
   * @example
   * 100
   */
  maxReturnNum?: number;
  /**
   * @example
   * 0
   */
  modelType?: number;
  /**
   * @example
   * exampleApi
   */
  name?: string;
  /**
   * @example
   * 112233
   */
  projId?: number;
  /**
   * @example
   * exampleProject
   */
  projName?: string;
  /**
   * @example
   * 3
   */
  protocol?: number;
  /**
   * @example
   * HTTP和HTTPS
   */
  protocolName?: string;
  /**
   * @remarks
   * -
   */
  publicParamList?: ListApiByAppResponseBodyListResultDataPublicParamList[];
  registerApi?: ListApiByAppResponseBodyListResultDataRegisterApi;
  /**
   * @example
   * 1
   */
  requestMethod?: number;
  /**
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
   * @example
   * {"status":"success","data":[]}
   */
  resultSample?: string;
  /**
   * @example
   * 3
   */
  returnType?: number;
  /**
   * @example
   * JSON
   */
  returnTypeName?: string;
  /**
   * @example
   * grp12345
   */
  rsGrpId?: string;
  /**
   * @example
   * SQL
   */
  scriptType?: string;
  /**
   * @example
   * 0
   */
  specialSql?: number;
  /**
   * @example
   * SELECT * FROM example_table
   */
  sqlStatement?: string;
  /**
   * @example
   * exampleTable
   */
  tableName?: string;
  /**
   * @example
   * 10
   */
  timeout?: string;
  /**
   * @example
   * 2
   */
  updateRate?: number;
  /**
   * @example
   * 每日更新
   */
  updateRateName?: string;
  /**
   * @example
   * v1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiNo: 'ApiNo',
      apiTimeout: 'ApiTimeout',
      appName: 'AppName',
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
  data?: ListApiByAppResponseBodyListResultData[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  listResult?: ListApiByAppResponseBodyListResult;
  /**
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

