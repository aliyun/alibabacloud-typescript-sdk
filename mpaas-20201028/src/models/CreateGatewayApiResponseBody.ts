// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayApiResponseBodyApiCacheRule extends $dara.Model {
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

export class CreateGatewayApiResponseBodyApiDefaultLimitRule extends $dara.Model {
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

export class CreateGatewayApiResponseBodyApiHeaderRules extends $dara.Model {
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

export class CreateGatewayApiResponseBodyApiLimitRule extends $dara.Model {
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

export class CreateGatewayApiResponseBodyApiMigrateRule extends $dara.Model {
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

export class CreateGatewayApiResponseBodyApiMockRule extends $dara.Model {
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

export class CreateGatewayApiResponseBodyApiRequestParams extends $dara.Model {
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

export class CreateGatewayApiResponseBodyApi extends $dara.Model {
  apiId?: number;
  apiName?: string;
  apiStatus?: string;
  apiType?: string;
  authRuleName?: string;
  cacheRule?: CreateGatewayApiResponseBodyApiCacheRule;
  charset?: string;
  contentType?: string;
  defaultLimitRule?: CreateGatewayApiResponseBodyApiDefaultLimitRule;
  description?: string;
  groupId?: number;
  headerRules?: CreateGatewayApiResponseBodyApiHeaderRules[];
  interfaceType?: string;
  limitRule?: CreateGatewayApiResponseBodyApiLimitRule;
  method?: string;
  methodName?: string;
  migrateRule?: CreateGatewayApiResponseBodyApiMigrateRule;
  mockRule?: CreateGatewayApiResponseBodyApiMockRule;
  needEncrypt?: boolean;
  needJsonp?: boolean;
  needSign?: boolean;
  operationType?: string;
  path?: string;
  requestBodyModel?: string;
  requestParams?: CreateGatewayApiResponseBodyApiRequestParams[];
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
      cacheRule: CreateGatewayApiResponseBodyApiCacheRule,
      charset: 'string',
      contentType: 'string',
      defaultLimitRule: CreateGatewayApiResponseBodyApiDefaultLimitRule,
      description: 'string',
      groupId: 'number',
      headerRules: { 'type': 'array', 'itemType': CreateGatewayApiResponseBodyApiHeaderRules },
      interfaceType: 'string',
      limitRule: CreateGatewayApiResponseBodyApiLimitRule,
      method: 'string',
      methodName: 'string',
      migrateRule: CreateGatewayApiResponseBodyApiMigrateRule,
      mockRule: CreateGatewayApiResponseBodyApiMockRule,
      needEncrypt: 'boolean',
      needJsonp: 'boolean',
      needSign: 'boolean',
      operationType: 'string',
      path: 'string',
      requestBodyModel: 'string',
      requestParams: { 'type': 'array', 'itemType': CreateGatewayApiResponseBodyApiRequestParams },
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

export class CreateGatewayApiResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  api?: CreateGatewayApiResponseBodyApi;
  errorField?: string;
  httpStatusCode?: number;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      api: 'Api',
      errorField: 'ErrorField',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      api: CreateGatewayApiResponseBodyApi,
      errorField: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.api && typeof (this.api as any).validate === 'function') {
      (this.api as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

