// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayApisResponseBodyApisCacheRule extends $dara.Model {
  cacheKey?: string;
  needCache?: boolean;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      cacheKey: 'CacheKey',
      needCache: 'NeedCache',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKey: 'string',
      needCache: 'boolean',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayApisResponseBodyApisDefaultLimitRule extends $dara.Model {
  defaultLimit?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultLimit: 'DefaultLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultLimit: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayApisResponseBodyApisHeaderRules extends $dara.Model {
  headerKey?: string;
  location?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
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

export class ListGatewayApisResponseBodyApisLimitRule extends $dara.Model {
  defaultResponse?: string;
  limit?: number;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResponse: 'DefaultResponse',
      limit: 'Limit',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResponse: 'string',
      limit: 'number',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayApisResponseBodyApisMigrateRule extends $dara.Model {
  flowPercent?: number;
  groupId?: number;
  groupName?: string;
  needMigrate?: boolean;
  needSwitchCompletely?: boolean;
  upstreamType?: string;
  static names(): { [key: string]: string } {
    return {
      flowPercent: 'FlowPercent',
      groupId: 'GroupId',
      groupName: 'GroupName',
      needMigrate: 'NeedMigrate',
      needSwitchCompletely: 'NeedSwitchCompletely',
      upstreamType: 'UpstreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowPercent: 'number',
      groupId: 'number',
      groupName: 'string',
      needMigrate: 'boolean',
      needSwitchCompletely: 'boolean',
      upstreamType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayApisResponseBodyApisMockRule extends $dara.Model {
  mockData?: string;
  needMock?: boolean;
  percentage?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mockData: 'MockData',
      needMock: 'NeedMock',
      percentage: 'Percentage',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockData: 'string',
      needMock: 'boolean',
      percentage: 'number',
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

export class ListGatewayApisResponseBodyApisRequestParams extends $dara.Model {
  defaultValue?: string;
  description?: string;
  location?: string;
  name?: string;
  refType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      location: 'Location',
      name: 'Name',
      refType: 'RefType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      location: 'string',
      name: 'string',
      refType: 'string',
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

export class ListGatewayApisResponseBodyApis extends $dara.Model {
  apiId?: number;
  apiName?: string;
  apiStatus?: string;
  apiType?: string;
  authRuleName?: string;
  cacheRule?: ListGatewayApisResponseBodyApisCacheRule;
  charset?: string;
  contentType?: string;
  defaultLimitRule?: ListGatewayApisResponseBodyApisDefaultLimitRule;
  description?: string;
  groupId?: number;
  headerRules?: ListGatewayApisResponseBodyApisHeaderRules[];
  interfaceType?: string;
  limitRule?: ListGatewayApisResponseBodyApisLimitRule;
  method?: string;
  methodName?: string;
  migrateRule?: ListGatewayApisResponseBodyApisMigrateRule;
  mockRule?: ListGatewayApisResponseBodyApisMockRule;
  needEncrypt?: boolean;
  needJsonp?: boolean;
  needSign?: boolean;
  operationType?: string;
  path?: string;
  requestBodyModel?: string;
  requestParams?: ListGatewayApisResponseBodyApisRequestParams[];
  responseBodyModel?: string;
  rpcParameterTypes?: string[];
  serialization?: string;
  sysName?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      authRuleName: 'AuthRuleName',
      cacheRule: 'CacheRule',
      charset: 'Charset',
      contentType: 'ContentType',
      defaultLimitRule: 'DefaultLimitRule',
      description: 'Description',
      groupId: 'GroupId',
      headerRules: 'HeaderRules',
      interfaceType: 'InterfaceType',
      limitRule: 'LimitRule',
      method: 'Method',
      methodName: 'MethodName',
      migrateRule: 'MigrateRule',
      mockRule: 'MockRule',
      needEncrypt: 'NeedEncrypt',
      needJsonp: 'NeedJsonp',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      path: 'Path',
      requestBodyModel: 'RequestBodyModel',
      requestParams: 'RequestParams',
      responseBodyModel: 'ResponseBodyModel',
      rpcParameterTypes: 'RpcParameterTypes',
      serialization: 'Serialization',
      sysName: 'SysName',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      apiStatus: 'string',
      apiType: 'string',
      authRuleName: 'string',
      cacheRule: ListGatewayApisResponseBodyApisCacheRule,
      charset: 'string',
      contentType: 'string',
      defaultLimitRule: ListGatewayApisResponseBodyApisDefaultLimitRule,
      description: 'string',
      groupId: 'number',
      headerRules: { 'type': 'array', 'itemType': ListGatewayApisResponseBodyApisHeaderRules },
      interfaceType: 'string',
      limitRule: ListGatewayApisResponseBodyApisLimitRule,
      method: 'string',
      methodName: 'string',
      migrateRule: ListGatewayApisResponseBodyApisMigrateRule,
      mockRule: ListGatewayApisResponseBodyApisMockRule,
      needEncrypt: 'boolean',
      needJsonp: 'boolean',
      needSign: 'boolean',
      operationType: 'string',
      path: 'string',
      requestBodyModel: 'string',
      requestParams: { 'type': 'array', 'itemType': ListGatewayApisResponseBodyApisRequestParams },
      responseBodyModel: 'string',
      rpcParameterTypes: { 'type': 'array', 'itemType': 'string' },
      serialization: 'string',
      sysName: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(this.cacheRule && typeof (this.cacheRule as any).validate === 'function') {
      (this.cacheRule as any).validate();
    }
    if(this.defaultLimitRule && typeof (this.defaultLimitRule as any).validate === 'function') {
      (this.defaultLimitRule as any).validate();
    }
    if(Array.isArray(this.headerRules)) {
      $dara.Model.validateArray(this.headerRules);
    }
    if(this.limitRule && typeof (this.limitRule as any).validate === 'function') {
      (this.limitRule as any).validate();
    }
    if(this.migrateRule && typeof (this.migrateRule as any).validate === 'function') {
      (this.migrateRule as any).validate();
    }
    if(this.mockRule && typeof (this.mockRule as any).validate === 'function') {
      (this.mockRule as any).validate();
    }
    if(Array.isArray(this.requestParams)) {
      $dara.Model.validateArray(this.requestParams);
    }
    if(Array.isArray(this.rpcParameterTypes)) {
      $dara.Model.validateArray(this.rpcParameterTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayApisResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  apis?: ListGatewayApisResponseBodyApis[];
  errorField?: string;
  httpStatusCode?: number;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      apis: 'Apis',
      errorField: 'ErrorField',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      apis: { 'type': 'array', 'itemType': ListGatewayApisResponseBodyApis },
      errorField: 'string',
      httpStatusCode: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apis)) {
      $dara.Model.validateArray(this.apis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

