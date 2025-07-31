// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceApiDocumentResponseBodyDataApiRegisterInfo extends $dara.Model {
  /**
   * @example
   * 3
   */
  authType?: string;
  /**
   * @example
   * 102311
   */
  datasourceId?: string;
  /**
   * @example
   * test
   */
  datasourceName?: string;
  /**
   * @example
   * 2
   */
  httpMethod?: number;
  /**
   * @example
   * 1
   */
  mode?: number;
  /**
   * @example
   * /api/test
   */
  path?: string;
  /**
   * @example
   * https
   */
  protocol?: string;
  /**
   * @example
   * 60
   */
  timeout?: number;
  /**
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
   * @example
   * 测试
   */
  description?: string;
  isRequired?: boolean;
  /**
   * @example
   * col1
   */
  name?: string;
  /**
   * @example
   * test
   */
  sample?: string;
  /**
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
   * @example
   * 1
   */
  defaultValue?: string;
  /**
   * @example
   * 测试
   */
  description?: string;
  isRequired?: boolean;
  /**
   * @example
   * col1
   */
  name?: string;
  /**
   * @example
   * test
   */
  sample?: string;
  /**
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
   * @example
   * 测试
   */
  description?: string;
  /**
   * @example
   * col1
   */
  name?: string;
  /**
   * @example
   * test
   */
  sample?: string;
  /**
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
   * @example
   * 102101
   */
  apiId?: number;
  apiRegisterInfo?: GetDataServiceApiDocumentResponseBodyDataApiRegisterInfo;
  /**
   * @example
   * 60
   */
  apiTimeout?: number;
  /**
   * @example
   * bizUnit_test
   */
  bizUnitName?: string;
  /**
   * @example
   * 600
   */
  cacheTime?: string;
  /**
   * @example
   * 1
   */
  createType?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1
   */
  directDatasourceId?: number;
  /**
   * @example
   * test
   */
  directDatasourceName?: string;
  /**
   * @example
   * 1
   */
  env?: number;
  /**
   * @example
   * 1011
   */
  groupId?: number;
  /**
   * @example
   * 1011
   */
  groupName?: string;
  isLogicalTable?: boolean;
  isPagedQuery?: boolean;
  isSpecialSql?: boolean;
  /**
   * @example
   * 1
   */
  mode?: number;
  /**
   * @example
   * 测试
   */
  name?: string;
  openCache?: boolean;
  /**
   * @example
   * 10201
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
  /**
   * @example
   * 1
   */
  protocol?: number;
  publicParamList?: GetDataServiceApiDocumentResponseBodyDataPublicParamList[];
  /**
   * @example
   * 1
   */
  requestMethod?: number;
  requestParamList?: GetDataServiceApiDocumentResponseBodyDataRequestParamList[];
  /**
   * @example
   * 10021
   */
  resourceGroupId?: string;
  /**
   * @example
   * test
   */
  resourceGroupName?: string;
  responseParamList?: GetDataServiceApiDocumentResponseBodyDataResponseParamList[];
  /**
   * @example
   * {"count": 88}
   */
  resultSample?: string;
  /**
   * @example
   * 100
   */
  returnLimit?: number;
  /**
   * @example
   * 1
   */
  returnType?: number;
  /**
   * @example
   * NORMAL_SQL
   */
  scriptType?: string;
  /**
   * @example
   * select col1 from table1;
   */
  sql?: string;
  /**
   * @example
   * t_logical_test1
   */
  tableName?: string;
  /**
   * @example
   * 60
   */
  timeout?: string;
  /**
   * @example
   * 1
   */
  updateRate?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetDataServiceApiDocumentResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
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

