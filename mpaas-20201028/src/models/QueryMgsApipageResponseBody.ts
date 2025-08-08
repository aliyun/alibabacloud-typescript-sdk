// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMgsApipageResponseBodyResultContentListApiInvokerHttpInvoker extends $dara.Model {
  charset?: string;
  contentType?: string;
  host?: string;
  method?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      contentType: 'ContentType',
      host: 'Host',
      method: 'Method',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      contentType: 'string',
      host: 'string',
      method: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListApiInvoker extends $dara.Model {
  httpInvoker?: QueryMgsApipageResponseBodyResultContentListApiInvokerHttpInvoker;
  rpcInvoker?: string;
  static names(): { [key: string]: string } {
    return {
      httpInvoker: 'HttpInvoker',
      rpcInvoker: 'RpcInvoker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpInvoker: QueryMgsApipageResponseBodyResultContentListApiInvokerHttpInvoker,
      rpcInvoker: 'string',
    };
  }

  validate() {
    if(this.httpInvoker && typeof (this.httpInvoker as any).validate === 'function') {
      (this.httpInvoker as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListCacheRule extends $dara.Model {
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

export class QueryMgsApipageResponseBodyResultContentListCircuitBreakerRule extends $dara.Model {
  appId?: string;
  defaultResponse?: string;
  errorThreshold?: number;
  id?: number;
  model?: string;
  openTimeoutSeconds?: number;
  slowRatioThreshold?: number;
  switchStatus?: string;
  windowsInSeconds?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      defaultResponse: 'DefaultResponse',
      errorThreshold: 'ErrorThreshold',
      id: 'Id',
      model: 'Model',
      openTimeoutSeconds: 'OpenTimeoutSeconds',
      slowRatioThreshold: 'SlowRatioThreshold',
      switchStatus: 'SwitchStatus',
      windowsInSeconds: 'WindowsInSeconds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      defaultResponse: 'string',
      errorThreshold: 'number',
      id: 'number',
      model: 'string',
      openTimeoutSeconds: 'number',
      slowRatioThreshold: 'number',
      switchStatus: 'string',
      windowsInSeconds: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListHeaderRule extends $dara.Model {
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

export class QueryMgsApipageResponseBodyResultContentListHeaderRules extends $dara.Model {
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

export class QueryMgsApipageResponseBodyResultContentListLimitRule extends $dara.Model {
  defaultResponse?: string;
  i18nResponse?: string;
  interval?: number;
  limit?: number;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResponse: 'DefaultResponse',
      i18nResponse: 'I18nResponse',
      interval: 'Interval',
      limit: 'Limit',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResponse: 'string',
      i18nResponse: 'string',
      interval: 'number',
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

export class QueryMgsApipageResponseBodyResultContentListMigrateRule extends $dara.Model {
  flowPercent?: number;
  needMigrate?: boolean;
  needSwitchCompletely?: boolean;
  sysId?: number;
  sysName?: string;
  upstreamType?: string;
  static names(): { [key: string]: string } {
    return {
      flowPercent: 'FlowPercent',
      needMigrate: 'NeedMigrate',
      needSwitchCompletely: 'NeedSwitchCompletely',
      sysId: 'SysId',
      sysName: 'SysName',
      upstreamType: 'UpstreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowPercent: 'number',
      needMigrate: 'boolean',
      needSwitchCompletely: 'boolean',
      sysId: 'number',
      sysName: 'string',
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

export class QueryMgsApipageResponseBodyResultContentListMockRule extends $dara.Model {
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

export class QueryMgsApipageResponseBodyResultContentListRequestParams extends $dara.Model {
  apiId?: string;
  appId?: string;
  defaultValue?: string;
  description?: string;
  id?: number;
  location?: string;
  name?: string;
  refType?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appId: 'AppId',
      defaultValue: 'DefaultValue',
      description: 'Description',
      id: 'Id',
      location: 'Location',
      name: 'Name',
      refType: 'RefType',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appId: 'string',
      defaultValue: 'string',
      description: 'string',
      id: 'number',
      location: 'string',
      name: 'string',
      refType: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentList extends $dara.Model {
  apiInvoker?: QueryMgsApipageResponseBodyResultContentListApiInvoker;
  apiName?: string;
  apiStatus?: string;
  apiType?: string;
  appId?: string;
  authRuleName?: string;
  cacheRule?: QueryMgsApipageResponseBodyResultContentListCacheRule;
  charset?: string;
  circuitBreakerRule?: QueryMgsApipageResponseBodyResultContentListCircuitBreakerRule;
  contentType?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  headerRule?: QueryMgsApipageResponseBodyResultContentListHeaderRule[];
  headerRules?: QueryMgsApipageResponseBodyResultContentListHeaderRules[];
  host?: string;
  id?: number;
  interfaceType?: string;
  limitRule?: QueryMgsApipageResponseBodyResultContentListLimitRule;
  method?: string;
  methodName?: string;
  migrateRule?: QueryMgsApipageResponseBodyResultContentListMigrateRule;
  mockRule?: QueryMgsApipageResponseBodyResultContentListMockRule;
  needETag?: string;
  needEncrypt?: string;
  needJsonp?: string;
  needSign?: string;
  operationType?: string;
  paramGetMethod?: string;
  path?: string;
  requestBodyModel?: string;
  requestParams?: QueryMgsApipageResponseBodyResultContentListRequestParams[];
  responseBodyModel?: string;
  sysId?: number;
  sysName?: string;
  timeout?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiInvoker: 'ApiInvoker',
      apiName: 'ApiName',
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      authRuleName: 'AuthRuleName',
      cacheRule: 'CacheRule',
      charset: 'Charset',
      circuitBreakerRule: 'CircuitBreakerRule',
      contentType: 'ContentType',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      headerRule: 'HeaderRule',
      headerRules: 'HeaderRules',
      host: 'Host',
      id: 'Id',
      interfaceType: 'InterfaceType',
      limitRule: 'LimitRule',
      method: 'Method',
      methodName: 'MethodName',
      migrateRule: 'MigrateRule',
      mockRule: 'MockRule',
      needETag: 'NeedETag',
      needEncrypt: 'NeedEncrypt',
      needJsonp: 'NeedJsonp',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      paramGetMethod: 'ParamGetMethod',
      path: 'Path',
      requestBodyModel: 'RequestBodyModel',
      requestParams: 'RequestParams',
      responseBodyModel: 'ResponseBodyModel',
      sysId: 'SysId',
      sysName: 'SysName',
      timeout: 'Timeout',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInvoker: QueryMgsApipageResponseBodyResultContentListApiInvoker,
      apiName: 'string',
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      authRuleName: 'string',
      cacheRule: QueryMgsApipageResponseBodyResultContentListCacheRule,
      charset: 'string',
      circuitBreakerRule: QueryMgsApipageResponseBodyResultContentListCircuitBreakerRule,
      contentType: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      headerRule: { 'type': 'array', 'itemType': QueryMgsApipageResponseBodyResultContentListHeaderRule },
      headerRules: { 'type': 'array', 'itemType': QueryMgsApipageResponseBodyResultContentListHeaderRules },
      host: 'string',
      id: 'number',
      interfaceType: 'string',
      limitRule: QueryMgsApipageResponseBodyResultContentListLimitRule,
      method: 'string',
      methodName: 'string',
      migrateRule: QueryMgsApipageResponseBodyResultContentListMigrateRule,
      mockRule: QueryMgsApipageResponseBodyResultContentListMockRule,
      needETag: 'string',
      needEncrypt: 'string',
      needJsonp: 'string',
      needSign: 'string',
      operationType: 'string',
      paramGetMethod: 'string',
      path: 'string',
      requestBodyModel: 'string',
      requestParams: { 'type': 'array', 'itemType': QueryMgsApipageResponseBodyResultContentListRequestParams },
      responseBodyModel: 'string',
      sysId: 'number',
      sysName: 'string',
      timeout: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.apiInvoker && typeof (this.apiInvoker as any).validate === 'function') {
      (this.apiInvoker as any).validate();
    }
    if(this.cacheRule && typeof (this.cacheRule as any).validate === 'function') {
      (this.cacheRule as any).validate();
    }
    if(this.circuitBreakerRule && typeof (this.circuitBreakerRule as any).validate === 'function') {
      (this.circuitBreakerRule as any).validate();
    }
    if(Array.isArray(this.headerRule)) {
      $dara.Model.validateArray(this.headerRule);
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContent extends $dara.Model {
  current?: number;
  list?: QueryMgsApipageResponseBodyResultContentList[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      list: 'List',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      list: { 'type': 'array', 'itemType': QueryMgsApipageResponseBodyResultContentList },
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryMgsApipageResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryMgsApipageResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

