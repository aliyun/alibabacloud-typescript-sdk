// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayApiRequestCacheRule extends $dara.Model {
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

export class CreateGatewayApiRequestDefaultLimitRule extends $dara.Model {
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

export class CreateGatewayApiRequestHeaderRules extends $dara.Model {
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

export class CreateGatewayApiRequestLimitRule extends $dara.Model {
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

export class CreateGatewayApiRequestMigrateRule extends $dara.Model {
  flowPercent?: number;
  groupId?: number;
  needMigrate?: boolean;
  needSwitchCompletely?: boolean;
  static names(): { [key: string]: string } {
    return {
      flowPercent: 'FlowPercent',
      groupId: 'GroupId',
      needMigrate: 'NeedMigrate',
      needSwitchCompletely: 'NeedSwitchCompletely',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowPercent: 'number',
      groupId: 'number',
      needMigrate: 'boolean',
      needSwitchCompletely: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayApiRequestMockRule extends $dara.Model {
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

export class CreateGatewayApiRequestRequestParams extends $dara.Model {
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

export class CreateGatewayApiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiName?: string;
  apiStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  apiType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  authRuleName?: string;
  cacheRule?: CreateGatewayApiRequestCacheRule;
  charset?: string;
  contentType?: string;
  defaultLimitRule?: CreateGatewayApiRequestDefaultLimitRule;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: number;
  headerRules?: CreateGatewayApiRequestHeaderRules[];
  interfaceType?: string;
  limitRule?: CreateGatewayApiRequestLimitRule;
  method?: string;
  methodName?: string;
  migrateRule?: CreateGatewayApiRequestMigrateRule;
  mockRule?: CreateGatewayApiRequestMockRule;
  needEncrypt?: boolean;
  needJsonp?: boolean;
  needSign?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  operationType?: string;
  path?: string;
  requestBodyModel?: string;
  requestParams?: CreateGatewayApiRequestRequestParams[];
  responseBodyModel?: string;
  rpcParameterTypes?: string[];
  serialization?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  timeout?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
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
      tenantId: 'TenantId',
      timeout: 'Timeout',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      authRuleName: 'string',
      cacheRule: CreateGatewayApiRequestCacheRule,
      charset: 'string',
      contentType: 'string',
      defaultLimitRule: CreateGatewayApiRequestDefaultLimitRule,
      description: 'string',
      groupId: 'number',
      headerRules: { 'type': 'array', 'itemType': CreateGatewayApiRequestHeaderRules },
      interfaceType: 'string',
      limitRule: CreateGatewayApiRequestLimitRule,
      method: 'string',
      methodName: 'string',
      migrateRule: CreateGatewayApiRequestMigrateRule,
      mockRule: CreateGatewayApiRequestMockRule,
      needEncrypt: 'boolean',
      needJsonp: 'boolean',
      needSign: 'boolean',
      operationType: 'string',
      path: 'string',
      requestBodyModel: 'string',
      requestParams: { 'type': 'array', 'itemType': CreateGatewayApiRequestRequestParams },
      responseBodyModel: 'string',
      rpcParameterTypes: { 'type': 'array', 'itemType': 'string' },
      serialization: 'string',
      tenantId: 'string',
      timeout: 'number',
      workspaceId: 'string',
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

