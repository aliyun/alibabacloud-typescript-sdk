// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiPolicyConfigsAiCacheConfigEmbeddingConfig extends $dara.Model {
  modelName?: string;
  serviceId?: string;
  timeout?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      serviceId: 'serviceId',
      timeout: 'timeout',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      serviceId: 'string',
      timeout: 'number',
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

export class HttpApiPolicyConfigsAiCacheConfigPluginStatus extends $dara.Model {
  errorLogs?: { [key: string]: string };
  pluginId?: string;
  serviceHealthy?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorLogs: 'errorLogs',
      pluginId: 'pluginId',
      serviceHealthy: 'serviceHealthy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLogs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pluginId: 'string',
      serviceHealthy: 'boolean',
    };
  }

  validate() {
    if(this.errorLogs) {
      $dara.Model.validateMap(this.errorLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiCacheConfigRedisConfig extends $dara.Model {
  databaseNumber?: number;
  host?: string;
  password?: string;
  port?: number;
  timeout?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      databaseNumber: 'databaseNumber',
      host: 'host',
      password: 'password',
      port: 'port',
      timeout: 'timeout',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseNumber: 'number',
      host: 'string',
      password: 'string',
      port: 'number',
      timeout: 'number',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiCacheConfigVectorConfig extends $dara.Model {
  apiKey?: string;
  collectionId?: string;
  serviceHost?: string;
  threshold?: number;
  timeout?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      collectionId: 'collectionId',
      serviceHost: 'serviceHost',
      threshold: 'threshold',
      timeout: 'timeout',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      collectionId: 'string',
      serviceHost: 'string',
      threshold: 'number',
      timeout: 'number',
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

export class HttpApiPolicyConfigsAiCacheConfig extends $dara.Model {
  cacheKeyStrategy?: string;
  cacheMode?: string;
  cacheTTL?: number;
  embeddingConfig?: HttpApiPolicyConfigsAiCacheConfigEmbeddingConfig;
  pluginStatus?: HttpApiPolicyConfigsAiCacheConfigPluginStatus;
  redisConfig?: HttpApiPolicyConfigsAiCacheConfigRedisConfig;
  vectorConfig?: HttpApiPolicyConfigsAiCacheConfigVectorConfig;
  static names(): { [key: string]: string } {
    return {
      cacheKeyStrategy: 'cacheKeyStrategy',
      cacheMode: 'cacheMode',
      cacheTTL: 'cacheTTL',
      embeddingConfig: 'embeddingConfig',
      pluginStatus: 'pluginStatus',
      redisConfig: 'redisConfig',
      vectorConfig: 'vectorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKeyStrategy: 'string',
      cacheMode: 'string',
      cacheTTL: 'number',
      embeddingConfig: HttpApiPolicyConfigsAiCacheConfigEmbeddingConfig,
      pluginStatus: HttpApiPolicyConfigsAiCacheConfigPluginStatus,
      redisConfig: HttpApiPolicyConfigsAiCacheConfigRedisConfig,
      vectorConfig: HttpApiPolicyConfigsAiCacheConfigVectorConfig,
    };
  }

  validate() {
    if(this.embeddingConfig && typeof (this.embeddingConfig as any).validate === 'function') {
      (this.embeddingConfig as any).validate();
    }
    if(this.pluginStatus && typeof (this.pluginStatus as any).validate === 'function') {
      (this.pluginStatus as any).validate();
    }
    if(this.redisConfig && typeof (this.redisConfig as any).validate === 'function') {
      (this.redisConfig as any).validate();
    }
    if(this.vectorConfig && typeof (this.vectorConfig as any).validate === 'function') {
      (this.vectorConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiFallbackConfigServiceConfigs extends $dara.Model {
  name?: string;
  passThroughModelName?: boolean;
  serviceId?: string;
  targetModelName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      passThroughModelName: 'passThroughModelName',
      serviceId: 'serviceId',
      targetModelName: 'targetModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      passThroughModelName: 'boolean',
      serviceId: 'string',
      targetModelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiFallbackConfig extends $dara.Model {
  onlyRedirectUpstreamCode?: boolean;
  routeEmbedded?: boolean;
  serviceConfigs?: HttpApiPolicyConfigsAiFallbackConfigServiceConfigs[];
  static names(): { [key: string]: string } {
    return {
      onlyRedirectUpstreamCode: 'onlyRedirectUpstreamCode',
      routeEmbedded: 'routeEmbedded',
      serviceConfigs: 'serviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlyRedirectUpstreamCode: 'boolean',
      routeEmbedded: 'boolean',
      serviceConfigs: { 'type': 'array', 'itemType': HttpApiPolicyConfigsAiFallbackConfigServiceConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiNetworkSearchConfigPluginStatus extends $dara.Model {
  errorLogs?: { [key: string]: string };
  pluginId?: string;
  serviceHealthy?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorLogs: 'errorLogs',
      pluginId: 'pluginId',
      serviceHealthy: 'serviceHealthy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLogs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pluginId: 'string',
      serviceHealthy: 'boolean',
    };
  }

  validate() {
    if(this.errorLogs) {
      $dara.Model.validateMap(this.errorLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiNetworkSearchConfigSearchEngineConfig extends $dara.Model {
  apiKey?: string;
  contentMode?: string;
  count?: number;
  endpoint?: string;
  industry?: string;
  optionArgs?: { [key: string]: string };
  start?: number;
  timeRange?: string;
  timeoutMillisecond?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      contentMode: 'contentMode',
      count: 'count',
      endpoint: 'endpoint',
      industry: 'industry',
      optionArgs: 'optionArgs',
      start: 'start',
      timeRange: 'timeRange',
      timeoutMillisecond: 'timeoutMillisecond',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      contentMode: 'string',
      count: 'number',
      endpoint: 'string',
      industry: 'string',
      optionArgs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      start: 'number',
      timeRange: 'string',
      timeoutMillisecond: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.optionArgs) {
      $dara.Model.validateMap(this.optionArgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiNetworkSearchConfigSearchFrom extends $dara.Model {
  apiKey?: string;
  contentMode?: string;
  count?: number;
  endpoint?: string;
  industry?: string;
  optionArgs?: { [key: string]: string };
  start?: number;
  timeRange?: string;
  timeoutMillisecond?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      contentMode: 'contentMode',
      count: 'count',
      endpoint: 'endpoint',
      industry: 'industry',
      optionArgs: 'optionArgs',
      start: 'start',
      timeRange: 'timeRange',
      timeoutMillisecond: 'timeoutMillisecond',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      contentMode: 'string',
      count: 'number',
      endpoint: 'string',
      industry: 'string',
      optionArgs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      start: 'number',
      timeRange: 'string',
      timeoutMillisecond: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.optionArgs) {
      $dara.Model.validateMap(this.optionArgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiNetworkSearchConfigSearchRewrite extends $dara.Model {
  enable?: boolean;
  maxCount?: number;
  modelName?: string;
  serviceId?: string;
  timeoutMillisecond?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      maxCount: 'maxCount',
      modelName: 'modelName',
      serviceId: 'serviceId',
      timeoutMillisecond: 'timeoutMillisecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      maxCount: 'number',
      modelName: 'string',
      serviceId: 'string',
      timeoutMillisecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiNetworkSearchConfig extends $dara.Model {
  defaultEnable?: boolean;
  defaultLang?: string;
  needReference?: boolean;
  pluginStatus?: HttpApiPolicyConfigsAiNetworkSearchConfigPluginStatus;
  referenceFormat?: string;
  referenceLocation?: string;
  searchEngineConfig?: HttpApiPolicyConfigsAiNetworkSearchConfigSearchEngineConfig;
  searchFrom?: HttpApiPolicyConfigsAiNetworkSearchConfigSearchFrom[];
  searchRewrite?: HttpApiPolicyConfigsAiNetworkSearchConfigSearchRewrite;
  static names(): { [key: string]: string } {
    return {
      defaultEnable: 'defaultEnable',
      defaultLang: 'defaultLang',
      needReference: 'needReference',
      pluginStatus: 'pluginStatus',
      referenceFormat: 'referenceFormat',
      referenceLocation: 'referenceLocation',
      searchEngineConfig: 'searchEngineConfig',
      searchFrom: 'searchFrom',
      searchRewrite: 'searchRewrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultEnable: 'boolean',
      defaultLang: 'string',
      needReference: 'boolean',
      pluginStatus: HttpApiPolicyConfigsAiNetworkSearchConfigPluginStatus,
      referenceFormat: 'string',
      referenceLocation: 'string',
      searchEngineConfig: HttpApiPolicyConfigsAiNetworkSearchConfigSearchEngineConfig,
      searchFrom: { 'type': 'array', 'itemType': HttpApiPolicyConfigsAiNetworkSearchConfigSearchFrom },
      searchRewrite: HttpApiPolicyConfigsAiNetworkSearchConfigSearchRewrite,
    };
  }

  validate() {
    if(this.pluginStatus && typeof (this.pluginStatus as any).validate === 'function') {
      (this.pluginStatus as any).validate();
    }
    if(this.searchEngineConfig && typeof (this.searchEngineConfig as any).validate === 'function') {
      (this.searchEngineConfig as any).validate();
    }
    if(Array.isArray(this.searchFrom)) {
      $dara.Model.validateArray(this.searchFrom);
    }
    if(this.searchRewrite && typeof (this.searchRewrite as any).validate === 'function') {
      (this.searchRewrite as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiSecurityGuardConfigConsumerRequestCheckService extends $dara.Model {
  matchType?: string;
  modalityType?: string;
  name?: string;
  requestCheckService?: string;
  requestImageCheckService?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      modalityType: 'modalityType',
      name: 'name',
      requestCheckService: 'requestCheckService',
      requestImageCheckService: 'requestImageCheckService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      modalityType: 'string',
      name: 'string',
      requestCheckService: 'string',
      requestImageCheckService: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService extends $dara.Model {
  matchType?: string;
  modalityType?: string;
  name?: string;
  responseCheckService?: string;
  responseImageCheckService?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      modalityType: 'modalityType',
      name: 'name',
      responseCheckService: 'responseCheckService',
      responseImageCheckService: 'responseImageCheckService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      modalityType: 'string',
      name: 'string',
      responseCheckService: 'string',
      responseImageCheckService: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel extends $dara.Model {
  level?: string;
  matchType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      matchType: 'matchType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      matchType: 'string',
      name: 'string',
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

export class HttpApiPolicyConfigsAiSecurityGuardConfigPluginStatus extends $dara.Model {
  errorLogs?: { [key: string]: string };
  pluginId?: string;
  serviceHealthy?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorLogs: 'errorLogs',
      pluginId: 'pluginId',
      serviceHealthy: 'serviceHealthy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLogs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pluginId: 'string',
      serviceHealthy: 'boolean',
    };
  }

  validate() {
    if(this.errorLogs) {
      $dara.Model.validateMap(this.errorLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules extends $dara.Model {
  matchType?: string;
  pattern?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      pattern: 'pattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      pattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiSecurityGuardConfigRiskConfig extends $dara.Model {
  consumerRules?: HttpApiPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules;
  level?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      consumerRules: 'consumerRules',
      level: 'level',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerRules: HttpApiPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules,
      level: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.consumerRules && typeof (this.consumerRules as any).validate === 'function') {
      (this.consumerRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiSecurityGuardConfig extends $dara.Model {
  bufferLimit?: number;
  checkRequest?: boolean;
  checkRequestImage?: boolean;
  checkResponse?: boolean;
  checkResponseImage?: boolean;
  consumerRequestCheckService?: HttpApiPolicyConfigsAiSecurityGuardConfigConsumerRequestCheckService[];
  consumerResponseCheckService?: HttpApiPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService[];
  consumerRiskLevel?: HttpApiPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel[];
  pluginStatus?: HttpApiPolicyConfigsAiSecurityGuardConfigPluginStatus;
  requestCheckService?: string;
  requestImageCheckService?: string;
  responseCheckService?: string;
  responseImageCheckService?: string;
  riskAlertLevel?: string;
  riskConfig?: HttpApiPolicyConfigsAiSecurityGuardConfigRiskConfig[];
  serviceAddress?: string;
  static names(): { [key: string]: string } {
    return {
      bufferLimit: 'bufferLimit',
      checkRequest: 'checkRequest',
      checkRequestImage: 'checkRequestImage',
      checkResponse: 'checkResponse',
      checkResponseImage: 'checkResponseImage',
      consumerRequestCheckService: 'consumerRequestCheckService',
      consumerResponseCheckService: 'consumerResponseCheckService',
      consumerRiskLevel: 'consumerRiskLevel',
      pluginStatus: 'pluginStatus',
      requestCheckService: 'requestCheckService',
      requestImageCheckService: 'requestImageCheckService',
      responseCheckService: 'responseCheckService',
      responseImageCheckService: 'responseImageCheckService',
      riskAlertLevel: 'riskAlertLevel',
      riskConfig: 'riskConfig',
      serviceAddress: 'serviceAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bufferLimit: 'number',
      checkRequest: 'boolean',
      checkRequestImage: 'boolean',
      checkResponse: 'boolean',
      checkResponseImage: 'boolean',
      consumerRequestCheckService: { 'type': 'array', 'itemType': HttpApiPolicyConfigsAiSecurityGuardConfigConsumerRequestCheckService },
      consumerResponseCheckService: { 'type': 'array', 'itemType': HttpApiPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService },
      consumerRiskLevel: { 'type': 'array', 'itemType': HttpApiPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel },
      pluginStatus: HttpApiPolicyConfigsAiSecurityGuardConfigPluginStatus,
      requestCheckService: 'string',
      requestImageCheckService: 'string',
      responseCheckService: 'string',
      responseImageCheckService: 'string',
      riskAlertLevel: 'string',
      riskConfig: { 'type': 'array', 'itemType': HttpApiPolicyConfigsAiSecurityGuardConfigRiskConfig },
      serviceAddress: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumerRequestCheckService)) {
      $dara.Model.validateArray(this.consumerRequestCheckService);
    }
    if(Array.isArray(this.consumerResponseCheckService)) {
      $dara.Model.validateArray(this.consumerResponseCheckService);
    }
    if(Array.isArray(this.consumerRiskLevel)) {
      $dara.Model.validateArray(this.consumerRiskLevel);
    }
    if(this.pluginStatus && typeof (this.pluginStatus as any).validate === 'function') {
      (this.pluginStatus as any).validate();
    }
    if(Array.isArray(this.riskConfig)) {
      $dara.Model.validateArray(this.riskConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiStatisticsConfig extends $dara.Model {
  logRequestContent?: boolean;
  logResponseContent?: boolean;
  static names(): { [key: string]: string } {
    return {
      logRequestContent: 'logRequestContent',
      logResponseContent: 'logResponseContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRequestContent: 'boolean',
      logResponseContent: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiTokenRateLimitConfigGlobalRules extends $dara.Model {
  limitMode?: string;
  limitType?: string;
  limitValue?: string;
  matchKey?: string;
  matchType?: string;
  matchValue?: string;
  static names(): { [key: string]: string } {
    return {
      limitMode: 'limitMode',
      limitType: 'limitType',
      limitValue: 'limitValue',
      matchKey: 'matchKey',
      matchType: 'matchType',
      matchValue: 'matchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitMode: 'string',
      limitType: 'string',
      limitValue: 'string',
      matchKey: 'string',
      matchType: 'string',
      matchValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiTokenRateLimitConfigPluginStatus extends $dara.Model {
  errorLogs?: { [key: string]: string };
  pluginId?: string;
  serviceHealthy?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorLogs: 'errorLogs',
      pluginId: 'pluginId',
      serviceHealthy: 'serviceHealthy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLogs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pluginId: 'string',
      serviceHealthy: 'boolean',
    };
  }

  validate() {
    if(this.errorLogs) {
      $dara.Model.validateMap(this.errorLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiTokenRateLimitConfigRedisConfig extends $dara.Model {
  databaseNumber?: number;
  host?: string;
  password?: string;
  port?: number;
  timeout?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      databaseNumber: 'databaseNumber',
      host: 'host',
      password: 'password',
      port: 'port',
      timeout: 'timeout',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseNumber: 'number',
      host: 'string',
      password: 'string',
      port: 'number',
      timeout: 'number',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiTokenRateLimitConfigRules extends $dara.Model {
  limitMode?: string;
  limitType?: string;
  limitValue?: string;
  matchKey?: string;
  matchType?: string;
  matchValue?: string;
  static names(): { [key: string]: string } {
    return {
      limitMode: 'limitMode',
      limitType: 'limitType',
      limitValue: 'limitValue',
      matchKey: 'matchKey',
      matchType: 'matchType',
      matchValue: 'matchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitMode: 'string',
      limitType: 'string',
      limitValue: 'string',
      matchKey: 'string',
      matchType: 'string',
      matchValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiTokenRateLimitConfig extends $dara.Model {
  enableGlobalRules?: boolean;
  globalRules?: HttpApiPolicyConfigsAiTokenRateLimitConfigGlobalRules[];
  pluginStatus?: HttpApiPolicyConfigsAiTokenRateLimitConfigPluginStatus;
  redisConfig?: HttpApiPolicyConfigsAiTokenRateLimitConfigRedisConfig;
  rules?: HttpApiPolicyConfigsAiTokenRateLimitConfigRules[];
  static names(): { [key: string]: string } {
    return {
      enableGlobalRules: 'enableGlobalRules',
      globalRules: 'globalRules',
      pluginStatus: 'pluginStatus',
      redisConfig: 'redisConfig',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableGlobalRules: 'boolean',
      globalRules: { 'type': 'array', 'itemType': HttpApiPolicyConfigsAiTokenRateLimitConfigGlobalRules },
      pluginStatus: HttpApiPolicyConfigsAiTokenRateLimitConfigPluginStatus,
      redisConfig: HttpApiPolicyConfigsAiTokenRateLimitConfigRedisConfig,
      rules: { 'type': 'array', 'itemType': HttpApiPolicyConfigsAiTokenRateLimitConfigRules },
    };
  }

  validate() {
    if(Array.isArray(this.globalRules)) {
      $dara.Model.validateArray(this.globalRules);
    }
    if(this.pluginStatus && typeof (this.pluginStatus as any).validate === 'function') {
      (this.pluginStatus as any).validate();
    }
    if(this.redisConfig && typeof (this.redisConfig as any).validate === 'function') {
      (this.redisConfig as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiToolSelectionConfigEnableConditions extends $dara.Model {
  toolCountThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      toolCountThreshold: 'toolCountThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      toolCountThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiToolSelectionConfigPluginStatus extends $dara.Model {
  errorLogs?: { [key: string]: string };
  pluginId?: string;
  serviceHealthy?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorLogs: 'errorLogs',
      pluginId: 'pluginId',
      serviceHealthy: 'serviceHealthy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLogs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pluginId: 'string',
      serviceHealthy: 'boolean',
    };
  }

  validate() {
    if(this.errorLogs) {
      $dara.Model.validateMap(this.errorLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingContextSelection extends $dara.Model {
  type?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingModelService extends $dara.Model {
  modelName?: string;
  serviceId?: string;
  timeoutMillisecond?: number;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      serviceId: 'serviceId',
      timeoutMillisecond: 'timeoutMillisecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      serviceId: 'string',
      timeoutMillisecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingPromptConfig extends $dara.Model {
  customPrompt?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'customPrompt',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
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

export class HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingTriggerConditions extends $dara.Model {
  messageCountThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      messageCountThreshold: 'messageCountThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageCountThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiToolSelectionConfigQueryRewriting extends $dara.Model {
  contextSelection?: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingContextSelection;
  enabled?: boolean;
  fallbackStrategy?: string;
  maxOutputTokens?: number;
  modelService?: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingModelService;
  promptConfig?: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingPromptConfig;
  triggerConditions?: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingTriggerConditions;
  static names(): { [key: string]: string } {
    return {
      contextSelection: 'contextSelection',
      enabled: 'enabled',
      fallbackStrategy: 'fallbackStrategy',
      maxOutputTokens: 'maxOutputTokens',
      modelService: 'modelService',
      promptConfig: 'promptConfig',
      triggerConditions: 'triggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextSelection: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingContextSelection,
      enabled: 'boolean',
      fallbackStrategy: 'string',
      maxOutputTokens: 'number',
      modelService: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingModelService,
      promptConfig: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingPromptConfig,
      triggerConditions: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingTriggerConditions,
    };
  }

  validate() {
    if(this.contextSelection && typeof (this.contextSelection as any).validate === 'function') {
      (this.contextSelection as any).validate();
    }
    if(this.modelService && typeof (this.modelService as any).validate === 'function') {
      (this.modelService as any).validate();
    }
    if(this.promptConfig && typeof (this.promptConfig as any).validate === 'function') {
      (this.promptConfig as any).validate();
    }
    if(this.triggerConditions && typeof (this.triggerConditions as any).validate === 'function') {
      (this.triggerConditions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiToolSelectionConfigToolRerankingModelService extends $dara.Model {
  modelName?: string;
  serviceId?: string;
  timeoutMillisecond?: number;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      serviceId: 'serviceId',
      timeoutMillisecond: 'timeoutMillisecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      serviceId: 'string',
      timeoutMillisecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiToolSelectionConfigToolReranking extends $dara.Model {
  fallbackStrategy?: string;
  filteringMethod?: string;
  modelService?: HttpApiPolicyConfigsAiToolSelectionConfigToolRerankingModelService;
  scoreThreshold?: number;
  topKPercent?: number;
  topNCount?: number;
  static names(): { [key: string]: string } {
    return {
      fallbackStrategy: 'fallbackStrategy',
      filteringMethod: 'filteringMethod',
      modelService: 'modelService',
      scoreThreshold: 'scoreThreshold',
      topKPercent: 'topKPercent',
      topNCount: 'topNCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fallbackStrategy: 'string',
      filteringMethod: 'string',
      modelService: HttpApiPolicyConfigsAiToolSelectionConfigToolRerankingModelService,
      scoreThreshold: 'number',
      topKPercent: 'number',
      topNCount: 'number',
    };
  }

  validate() {
    if(this.modelService && typeof (this.modelService as any).validate === 'function') {
      (this.modelService as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsAiToolSelectionConfig extends $dara.Model {
  enableConditions?: HttpApiPolicyConfigsAiToolSelectionConfigEnableConditions;
  pluginStatus?: HttpApiPolicyConfigsAiToolSelectionConfigPluginStatus;
  queryRewriting?: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewriting;
  toolReranking?: HttpApiPolicyConfigsAiToolSelectionConfigToolReranking;
  static names(): { [key: string]: string } {
    return {
      enableConditions: 'enableConditions',
      pluginStatus: 'pluginStatus',
      queryRewriting: 'queryRewriting',
      toolReranking: 'toolReranking',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableConditions: HttpApiPolicyConfigsAiToolSelectionConfigEnableConditions,
      pluginStatus: HttpApiPolicyConfigsAiToolSelectionConfigPluginStatus,
      queryRewriting: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewriting,
      toolReranking: HttpApiPolicyConfigsAiToolSelectionConfigToolReranking,
    };
  }

  validate() {
    if(this.enableConditions && typeof (this.enableConditions as any).validate === 'function') {
      (this.enableConditions as any).validate();
    }
    if(this.pluginStatus && typeof (this.pluginStatus as any).validate === 'function') {
      (this.pluginStatus as any).validate();
    }
    if(this.queryRewriting && typeof (this.queryRewriting as any).validate === 'function') {
      (this.queryRewriting as any).validate();
    }
    if(this.toolReranking && typeof (this.toolReranking as any).validate === 'function') {
      (this.toolReranking as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigsSemanticRouterConfig extends $dara.Model {
  timeoutMillisecond?: number;
  static names(): { [key: string]: string } {
    return {
      timeoutMillisecond: 'timeoutMillisecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeoutMillisecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigs extends $dara.Model {
  aiCacheConfig?: HttpApiPolicyConfigsAiCacheConfig;
  aiFallbackConfig?: HttpApiPolicyConfigsAiFallbackConfig;
  aiNetworkSearchConfig?: HttpApiPolicyConfigsAiNetworkSearchConfig;
  aiSecurityGuardConfig?: HttpApiPolicyConfigsAiSecurityGuardConfig;
  aiStatisticsConfig?: HttpApiPolicyConfigsAiStatisticsConfig;
  aiTokenRateLimitConfig?: HttpApiPolicyConfigsAiTokenRateLimitConfig;
  aiToolSelectionConfig?: HttpApiPolicyConfigsAiToolSelectionConfig;
  enable?: boolean;
  semanticRouterConfig?: HttpApiPolicyConfigsSemanticRouterConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aiCacheConfig: 'aiCacheConfig',
      aiFallbackConfig: 'aiFallbackConfig',
      aiNetworkSearchConfig: 'aiNetworkSearchConfig',
      aiSecurityGuardConfig: 'aiSecurityGuardConfig',
      aiStatisticsConfig: 'aiStatisticsConfig',
      aiTokenRateLimitConfig: 'aiTokenRateLimitConfig',
      aiToolSelectionConfig: 'aiToolSelectionConfig',
      enable: 'enable',
      semanticRouterConfig: 'semanticRouterConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiCacheConfig: HttpApiPolicyConfigsAiCacheConfig,
      aiFallbackConfig: HttpApiPolicyConfigsAiFallbackConfig,
      aiNetworkSearchConfig: HttpApiPolicyConfigsAiNetworkSearchConfig,
      aiSecurityGuardConfig: HttpApiPolicyConfigsAiSecurityGuardConfig,
      aiStatisticsConfig: HttpApiPolicyConfigsAiStatisticsConfig,
      aiTokenRateLimitConfig: HttpApiPolicyConfigsAiTokenRateLimitConfig,
      aiToolSelectionConfig: HttpApiPolicyConfigsAiToolSelectionConfig,
      enable: 'boolean',
      semanticRouterConfig: HttpApiPolicyConfigsSemanticRouterConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.aiCacheConfig && typeof (this.aiCacheConfig as any).validate === 'function') {
      (this.aiCacheConfig as any).validate();
    }
    if(this.aiFallbackConfig && typeof (this.aiFallbackConfig as any).validate === 'function') {
      (this.aiFallbackConfig as any).validate();
    }
    if(this.aiNetworkSearchConfig && typeof (this.aiNetworkSearchConfig as any).validate === 'function') {
      (this.aiNetworkSearchConfig as any).validate();
    }
    if(this.aiSecurityGuardConfig && typeof (this.aiSecurityGuardConfig as any).validate === 'function') {
      (this.aiSecurityGuardConfig as any).validate();
    }
    if(this.aiStatisticsConfig && typeof (this.aiStatisticsConfig as any).validate === 'function') {
      (this.aiStatisticsConfig as any).validate();
    }
    if(this.aiTokenRateLimitConfig && typeof (this.aiTokenRateLimitConfig as any).validate === 'function') {
      (this.aiTokenRateLimitConfig as any).validate();
    }
    if(this.aiToolSelectionConfig && typeof (this.aiToolSelectionConfig as any).validate === 'function') {
      (this.aiToolSelectionConfig as any).validate();
    }
    if(this.semanticRouterConfig && typeof (this.semanticRouterConfig as any).validate === 'function') {
      (this.semanticRouterConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

