// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceApiDocumentResponseBodyDataApiRegisterInfo extends $dara.Model {
  /**
   * @remarks
   * The authentication method for the API data source. Valid values:
   * - 1: BearToken
   * - 2: ApiKey
   * - 3: None
   * - 4: AppKeyAuth
   * - 5: BasicAuth.
   * 
   * @example
   * 3
   */
  authType?: string;
  /**
   * @remarks
   * The API data source ID.
   * 
   * @example
   * 102311
   */
  datasourceId?: string;
  /**
   * @remarks
   * The API data source name.
   * 
   * @example
   * test
   */
  datasourceName?: string;
  /**
   * @remarks
   * The HTTP method for the registered API. Valid values:
   * - 1: GET
   * - 2: POST.
   * 
   * @example
   * 2
   */
  httpMethod?: number;
  /**
   * @remarks
   * The mode. Valid values:
   * - 0: basic
   * - 1: dev_prod.
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The service path.
   * 
   * @example
   * /api/test
   */
  path?: string;
  /**
   * @remarks
   * The request protocol for the API data source.
   * 
   * @example
   * https
   */
  protocol?: string;
  /**
   * @remarks
   * The timeout period, in seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The API data source URL.
   * 
   * @example
   * http://192.168.1.1:8080
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      httpMethod: 'HttpMethod',
      mode: 'Mode',
      path: 'Path',
      protocol: 'Protocol',
      timeout: 'Timeout',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      datasourceId: 'string',
      datasourceName: 'string',
      httpMethod: 'number',
      mode: 'number',
      path: 'string',
      protocol: 'string',
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

export class GetDataServiceApiDocumentResponseBodyDataPublicParamList extends $dara.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the request parameter is required. Valid values:
   * - 1: Required.
   * - 0: Optional.
   */
  isRequired?: boolean;
  /**
   * @remarks
   * The frontend parameter name.
   * 
   * @example
   * col1
   */
  name?: string;
  /**
   * @remarks
   * The parameter example.
   * 
   * @example
   * test
   */
  sample?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      isRequired: 'IsRequired',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      isRequired: 'boolean',
      name: 'string',
      sample: 'string',
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

export class GetDataServiceApiDocumentResponseBodyDataRequestParamList extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * 1
   */
  defaultValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the request parameter is required. Valid values:
   * - 1: Required.
   * - 0: Optional.
   */
  isRequired?: boolean;
  /**
   * @remarks
   * The frontend parameter name.
   * 
   * @example
   * col1
   */
  name?: string;
  /**
   * @remarks
   * The parameter example.
   * 
   * @example
   * test
   */
  sample?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      isRequired: 'IsRequired',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      isRequired: 'boolean',
      name: 'string',
      sample: 'string',
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

export class GetDataServiceApiDocumentResponseBodyDataResponseParamList extends $dara.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * The frontend parameter name.
   * 
   * @example
   * col1
   */
  name?: string;
  /**
   * @remarks
   * The parameter example.
   * 
   * @example
   * test
   */
  sample?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sample: 'Sample',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sample: 'string',
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

export class GetDataServiceApiDocumentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * 102101
   */
  apiId?: number;
  /**
   * @remarks
   * The API registration information.
   */
  apiRegisterInfo?: GetDataServiceApiDocumentResponseBodyDataApiRegisterInfo;
  /**
   * @remarks
   * The timeout period of the direct API, in seconds.
   * 
   * @example
   * 60
   */
  apiTimeout?: number;
  /**
   * @remarks
   * The business unit name. This parameter has a value only for logical tables.
   * 
   * @example
   * bizUnit_test
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The cache duration, in seconds.
   * 
   * @example
   * 600
   */
  cacheTime?: string;
  /**
   * @remarks
   * The creation type. Valid values:
   * - 0: custom mode
   * - 1: wizard mode
   * - 2: direct API.
   * 
   * @example
   * 1
   */
  createType?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The data source ID of the direct API.
   * 
   * @example
   * 1
   */
  directDatasourceId?: number;
  /**
   * @remarks
   * The data source name of the direct API.
   * 
   * @example
   * test
   */
  directDatasourceName?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * - 0: dev
   * - 1: prod.
   * 
   * @example
   * 1
   */
  env?: number;
  /**
   * @remarks
   * The API group ID.
   * 
   * @example
   * 1011
   */
  groupId?: number;
  /**
   * @remarks
   * The API group name.
   * 
   * @example
   * 1011
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether the table is a logical table.
   */
  isLogicalTable?: boolean;
  /**
   * @remarks
   * Indicates whether the query is a paged query. Valid values:
   * - 1: Yes.
   * - 0: No.
   */
  isPagedQuery?: boolean;
  /**
   * @remarks
   * Specifies whether the SQL is special. Valid values:
   * - 0: No.
   * - 1: Yes.
   */
  isSpecialSql?: boolean;
  /**
   * @remarks
   * The mode. Valid values:
   * - 0: basic
   * - 1: dev_prod.
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * 测试
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether caching is enabled. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   */
  openCache?: boolean;
  /**
   * @remarks
   * The data service project ID.
   * 
   * @example
   * 10201
   */
  projectId?: number;
  /**
   * @remarks
   * The data service project name.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * - 1: HTTPS
   * - 2: HTTP
   * - 3: both HTTP and HTTPS.
   * 
   * @example
   * 1
   */
  protocol?: number;
  /**
   * @remarks
   * The list of common parameters.
   */
  publicParamList?: GetDataServiceApiDocumentResponseBodyDataPublicParamList[];
  /**
   * @remarks
   * The request method. Valid values:
   * - 1: get
   * - 2: list.
   * 
   * @example
   * 1
   */
  requestMethod?: number;
  /**
   * @remarks
   * The list of request parameters.
   */
  requestParamList?: GetDataServiceApiDocumentResponseBodyDataRequestParamList[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 10021
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The list of response parameters.
   */
  responseParamList?: GetDataServiceApiDocumentResponseBodyDataResponseParamList[];
  /**
   * @remarks
   * The sample invocation result.
   * 
   * @example
   * {"count": 88}
   */
  resultSample?: string;
  /**
   * @remarks
   * The maximum number of records returned by the direct API.
   * 
   * @example
   * 100
   */
  returnLimit?: number;
  /**
   * @remarks
   * The return data type. Valid values:
   * - 1: JSON.
   * 
   * @example
   * 1
   */
  returnType?: number;
  /**
   * @remarks
   * The script type. Valid values:
   * - NORMAL_SQL: basic SQL
   * - MYBATIS_SQL: advanced SQL
   * - AVIATOR: Aviator expression.
   * 
   * @example
   * NORMAL_SQL
   */
  scriptType?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * select col1 from table1;
   */
  sql?: string;
  /**
   * @remarks
   * The logical table name. This parameter has a value only for logical tables.
   * 
   * @example
   * t_logical_test1
   */
  tableName?: string;
  /**
   * @remarks
   * The timeout period, in seconds.
   * 
   * @example
   * 60
   */
  timeout?: string;
  /**
   * @remarks
   * The update frequency. Valid values:
   * - 0: custom
   * - 1: daily
   * - 2: hourly
   * - 3: every minute.
   * 
   * @example
   * 1
   */
  updateRate?: number;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiRegisterInfo: 'ApiRegisterInfo',
      apiTimeout: 'ApiTimeout',
      bizUnitName: 'BizUnitName',
      cacheTime: 'CacheTime',
      createType: 'CreateType',
      description: 'Description',
      directDatasourceId: 'DirectDatasourceId',
      directDatasourceName: 'DirectDatasourceName',
      env: 'Env',
      groupId: 'GroupId',
      groupName: 'GroupName',
      isLogicalTable: 'IsLogicalTable',
      isPagedQuery: 'IsPagedQuery',
      isSpecialSql: 'IsSpecialSql',
      mode: 'Mode',
      name: 'Name',
      openCache: 'OpenCache',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      protocol: 'Protocol',
      publicParamList: 'PublicParamList',
      requestMethod: 'RequestMethod',
      requestParamList: 'RequestParamList',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      responseParamList: 'ResponseParamList',
      resultSample: 'ResultSample',
      returnLimit: 'ReturnLimit',
      returnType: 'ReturnType',
      scriptType: 'ScriptType',
      sql: 'Sql',
      tableName: 'TableName',
      timeout: 'Timeout',
      updateRate: 'UpdateRate',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiRegisterInfo: GetDataServiceApiDocumentResponseBodyDataApiRegisterInfo,
      apiTimeout: 'number',
      bizUnitName: 'string',
      cacheTime: 'string',
      createType: 'number',
      description: 'string',
      directDatasourceId: 'number',
      directDatasourceName: 'string',
      env: 'number',
      groupId: 'number',
      groupName: 'string',
      isLogicalTable: 'boolean',
      isPagedQuery: 'boolean',
      isSpecialSql: 'boolean',
      mode: 'number',
      name: 'string',
      openCache: 'boolean',
      projectId: 'number',
      projectName: 'string',
      protocol: 'number',
      publicParamList: { 'type': 'array', 'itemType': GetDataServiceApiDocumentResponseBodyDataPublicParamList },
      requestMethod: 'number',
      requestParamList: { 'type': 'array', 'itemType': GetDataServiceApiDocumentResponseBodyDataRequestParamList },
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      responseParamList: { 'type': 'array', 'itemType': GetDataServiceApiDocumentResponseBodyDataResponseParamList },
      resultSample: 'string',
      returnLimit: 'number',
      returnType: 'number',
      scriptType: 'string',
      sql: 'string',
      tableName: 'string',
      timeout: 'string',
      updateRate: 'number',
      version: 'string',
    };
  }

  validate() {
    if(this.apiRegisterInfo && typeof (this.apiRegisterInfo as any).validate === 'function') {
      (this.apiRegisterInfo as any).validate();
    }
    if(Array.isArray(this.publicParamList)) {
      $dara.Model.validateArray(this.publicParamList);
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

export class GetDataServiceApiDocumentResponseBody extends $dara.Model {
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
   * The API documentation.
   */
  data?: GetDataServiceApiDocumentResponseBodyData;
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
   * Indicates whether the request was successful.
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
      data: GetDataServiceApiDocumentResponseBodyData,
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

