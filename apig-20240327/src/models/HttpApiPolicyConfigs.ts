// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiPolicyConfigsAiCacheConfigEmbeddingConfig extends $dara.Model {
  /**
   * @remarks
   * Embedding model name
   * 
   * @example
   * model-1
   */
  modelName?: string;
  /**
   * @remarks
   * Embedding service ID
   * 
   * @example
   * svc-1
   */
  serviceId?: string;
  /**
   * @remarks
   * Embedding service request timeout in milliseconds
   * 
   * @example
   * 2000
   */
  timeout?: number;
  /**
   * @remarks
   * Embedding service provider type
   * 
   * @example
   * dashscope
   */
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
  /**
   * @remarks
   * errorLogs
   */
  errorLogs?: { [key: string]: string };
  /**
   * @remarks
   * pluginId
   * 
   * @example
   * pl-123456
   */
  pluginId?: string;
  /**
   * @remarks
   * serviceHealthy
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * Redis database number
   * 
   * @example
   * 1
   */
  databaseNumber?: number;
  /**
   * @remarks
   * Redis host
   * 
   * @example
   * redis.example.com
   */
  host?: string;
  /**
   * @remarks
   * Redis password
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * Redis port
   * 
   * @example
   * 6379
   */
  port?: number;
  /**
   * @remarks
   * Redis timeout
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * Redis username
   * 
   * @example
   * username
   */
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
  /**
   * @remarks
   * Vector database API key for authentication
   * 
   * @example
   * vec-api-key-123
   */
  apiKey?: string;
  /**
   * @remarks
   * Vector database collection ID for storing vector embeddings
   * 
   * @example
   * col-1
   */
  collectionId?: string;
  /**
   * @remarks
   * Vector database service host address
   * 
   * @example
   * vec.example.com
   */
  serviceHost?: string;
  /**
   * @remarks
   * Similarity threshold for semantic matching
   * 
   * @example
   * 0.8
   */
  threshold?: number;
  /**
   * @remarks
   * Vector database request timeout in milliseconds
   * 
   * @example
   * 1000
   */
  timeout?: number;
  /**
   * @remarks
   * Vector database service type
   * 
   * @example
   * dashvector
   */
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
  /**
   * @remarks
   * Strategy for generating cache keys
   * 
   * @example
   * default
   */
  cacheKeyStrategy?: string;
  /**
   * @remarks
   * Cache mode type
   * 
   * @example
   * exact
   */
  cacheMode?: string;
  /**
   * @remarks
   * Cache time-to-live in seconds
   * 
   * @example
   * 3600
   */
  cacheTTL?: number;
  /**
   * @remarks
   * Embedding Config
   */
  embeddingConfig?: HttpApiPolicyConfigsAiCacheConfigEmbeddingConfig;
  /**
   * @remarks
   * pluginStatus
   */
  pluginStatus?: HttpApiPolicyConfigsAiCacheConfigPluginStatus;
  /**
   * @remarks
   * Redis configuration for cache storage
   */
  redisConfig?: HttpApiPolicyConfigsAiCacheConfigRedisConfig;
  /**
   * @remarks
   * vectorConfig
   */
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
  /**
   * @remarks
   * Service name for frontend display
   * 
   * @example
   * azure.ai
   */
  name?: string;
  /**
   * @remarks
   * Whether to pass through the original model name
   * 
   * @example
   * true
   */
  passThroughModelName?: boolean;
  /**
   * @remarks
   * Fallback service ID
   * 
   * @example
   * svc-123456
   */
  serviceId?: string;
  /**
   * @remarks
   * Target model name for fallback
   * 
   * @example
   * kimi-fallback-test
   */
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
  /**
   * @remarks
   * Only trigger fallback when backend returns 4xx/5xx status codes
   * 
   * @example
   * true
   */
  onlyRedirectUpstreamCode?: boolean;
  /**
   * @remarks
   * Whether the policy is generated from route embedded configuration
   * 
   * @example
   * true
   */
  routeEmbedded?: boolean;
  /**
   * @remarks
   * List of fallback service configurations
   */
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
  /**
   * @remarks
   * errorLogs
   */
  errorLogs?: { [key: string]: string };
  /**
   * @remarks
   * pluginId
   * 
   * @example
   * pl-123456
   */
  pluginId?: string;
  /**
   * @remarks
   * serviceHealthy
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * Search engine API key
   * 
   * @example
   * xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * Content mode
   * 
   * @example
   * summary
   */
  contentMode?: string;
  /**
   * @remarks
   * Result count
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * Search engine endpoint
   * 
   * @example
   * ******-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * Industry
   * 
   * @example
   * tech
   */
  industry?: string;
  /**
   * @remarks
   * Additional parameters
   */
  optionArgs?: { [key: string]: string };
  /**
   * @remarks
   * Result offset
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * Time range
   * 
   * @example
   * 7d
   */
  timeRange?: string;
  /**
   * @remarks
   * API call timeout in milliseconds
   * 
   * @example
   * 5000
   */
  timeoutMillisecond?: number;
  /**
   * @remarks
   * Search engine type: Bing/aliyunQuark
   * 
   * @example
   * Bing
   */
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
  /**
   * @remarks
   * Search engine API key
   * 
   * @example
   * xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * Content mode
   * 
   * @example
   * summary
   */
  contentMode?: string;
  /**
   * @remarks
   * Result count
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * Search engine endpoint
   * 
   * @example
   * ******-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * Industry
   * 
   * @example
   * tech
   */
  industry?: string;
  /**
   * @remarks
   * Additional parameters
   */
  optionArgs?: { [key: string]: string };
  /**
   * @remarks
   * Result offset
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * Time range
   * 
   * @example
   * 7d
   */
  timeRange?: string;
  /**
   * @remarks
   * API call timeout in milliseconds
   * 
   * @example
   * 5000
   */
  timeoutMillisecond?: number;
  /**
   * @remarks
   * Search engine type
   * 
   * @example
   * Bing
   */
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
  /**
   * @remarks
   * Enable search rewrite
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Max rewrite count (1-5)
   * 
   * @example
   * 3
   */
  maxCount?: number;
  /**
   * @remarks
   * Model name
   * 
   * @example
   * qwen-turbo
   */
  modelName?: string;
  /**
   * @remarks
   * Service ID
   * 
   * @example
   * svc-123456
   */
  serviceId?: string;
  /**
   * @remarks
   * Timeout in milliseconds
   * 
   * @example
   * 5000
   */
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
  /**
   * @remarks
   * Default enable
   * 
   * @example
   * true
   */
  defaultEnable?: boolean;
  /**
   * @remarks
   * Default search language code
   * 
   * @example
   * zh-CN
   */
  defaultLang?: string;
  /**
   * @remarks
   * Add reference sources in answer
   * 
   * @example
   * true
   */
  needReference?: boolean;
  /**
   * @remarks
   * pluginStatus
   */
  pluginStatus?: HttpApiPolicyConfigsAiNetworkSearchConfigPluginStatus;
  /**
   * @remarks
   * Reference format
   * 
   * @example
   * Reference: %s
   */
  referenceFormat?: string;
  /**
   * @remarks
   * Reference location
   * 
   * @example
   * head
   */
  referenceLocation?: string;
  /**
   * @remarks
   * Search engine configuration
   */
  searchEngineConfig?: HttpApiPolicyConfigsAiNetworkSearchConfigSearchEngineConfig;
  /**
   * @remarks
   * Search engine list
   */
  searchFrom?: HttpApiPolicyConfigsAiNetworkSearchConfigSearchFrom[];
  /**
   * @remarks
   * Search rewrite configuration
   */
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
  /**
   * @remarks
   * Match type
   * 
   * @example
   * Exact
   */
  matchType?: string;
  /**
   * @remarks
   * Modality type
   * 
   * @example
   * Text
   */
  modalityType?: string;
  /**
   * @remarks
   * Consumer name
   * 
   * @example
   * consumer-1
   */
  name?: string;
  /**
   * @remarks
   * requestCheckService
   * 
   * @example
   * query_security_check
   */
  requestCheckService?: string;
  /**
   * @remarks
   * requestImageCheckService
   * 
   * @example
   * nsfw-image-detector
   */
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
  /**
   * @remarks
   * Match type
   * 
   * @example
   * Exact
   */
  matchType?: string;
  /**
   * @remarks
   * Modality type
   * 
   * @example
   * Text
   */
  modalityType?: string;
  /**
   * @remarks
   * Consumer name
   * 
   * @example
   * consumer-1
   */
  name?: string;
  /**
   * @remarks
   * responseCheckService
   * 
   * @example
   * response_security_check
   */
  responseCheckService?: string;
  /**
   * @remarks
   * responseImageCheckService
   * 
   * @example
   * watermark-detector
   */
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
  /**
   * @remarks
   * Risk level
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * Match type
   * 
   * @example
   * Exact
   */
  matchType?: string;
  /**
   * @remarks
   * Consumer name
   * 
   * @example
   * consumer-1
   */
  name?: string;
  /**
   * @remarks
   * Risk type
   * 
   * @example
   * ContentModeration
   */
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
  /**
   * @remarks
   * errorLogs
   */
  errorLogs?: { [key: string]: string };
  /**
   * @remarks
   * pluginId
   * 
   * @example
   * pl-123456
   */
  pluginId?: string;
  /**
   * @remarks
   * serviceHealthy
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * matchType
   * 
   * @example
   * Exact
   */
  matchType?: string;
  /**
   * @remarks
   * pattern
   * 
   * @example
   * /v1/chat/*
   */
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
  /**
   * @remarks
   * consumerRules
   */
  consumerRules?: HttpApiPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules;
  /**
   * @remarks
   * Risk level
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * Risk type
   * 
   * @example
   * ContentModeration
   */
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
  /**
   * @remarks
   * Buffer limit for content checking
   * 
   * @example
   * 1000
   */
  bufferLimit?: number;
  /**
   * @remarks
   * Enable request content checking
   * 
   * @example
   * true
   */
  checkRequest?: boolean;
  /**
   * @remarks
   * Enable request image checking
   * 
   * @example
   * true
   */
  checkRequestImage?: boolean;
  /**
   * @remarks
   * Enable response content checking
   * 
   * @example
   * true
   */
  checkResponse?: boolean;
  /**
   * @remarks
   * Enable response image checking
   * 
   * @example
   * true
   */
  checkResponseImage?: boolean;
  /**
   * @remarks
   * consumerRequestCheckService
   */
  consumerRequestCheckService?: HttpApiPolicyConfigsAiSecurityGuardConfigConsumerRequestCheckService[];
  /**
   * @remarks
   * consumerResponseCheckService
   */
  consumerResponseCheckService?: HttpApiPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService[];
  /**
   * @remarks
   * consumerRiskLevel
   */
  consumerRiskLevel?: HttpApiPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel[];
  /**
   * @remarks
   * pluginStatus
   */
  pluginStatus?: HttpApiPolicyConfigsAiSecurityGuardConfigPluginStatus;
  /**
   * @remarks
   * Request text check service type
   * 
   * @example
   * content-moderation-service
   */
  requestCheckService?: string;
  /**
   * @remarks
   * Request image check service type
   * 
   * @example
   * image-moderation-service
   */
  requestImageCheckService?: string;
  /**
   * @remarks
   * Response text check service type
   * 
   * @example
   * output-moderation-service
   */
  responseCheckService?: string;
  /**
   * @remarks
   * Response image check service type
   * 
   * @example
   * generated-image-scanner
   */
  responseImageCheckService?: string;
  /**
   * @remarks
   * Global risk alert level
   * 
   * @example
   * high
   */
  riskAlertLevel?: string;
  /**
   * @remarks
   * RiskConfig
   */
  riskConfig?: HttpApiPolicyConfigsAiSecurityGuardConfigRiskConfig[];
  /**
   * @remarks
   * Security guard service endpoint URL
   * 
   * @example
   * https://api.example.com/v1
   */
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
  /**
   * @remarks
   * Log request content
   * 
   * @example
   * true
   */
  logRequestContent?: boolean;
  /**
   * @remarks
   * Log response content
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * Limit mode
   * 
   * @example
   * TokenPerSecond
   */
  limitMode?: string;
  /**
   * @remarks
   * Limit type
   * 
   * @example
   * Global
   */
  limitType?: string;
  /**
   * @remarks
   * Limit value
   * 
   * @example
   * 100
   */
  limitValue?: string;
  /**
   * @remarks
   * Match key
   * 
   * @example
   * user_id
   */
  matchKey?: string;
  /**
   * @remarks
   * Match type
   * 
   * @example
   * Exact
   */
  matchType?: string;
  /**
   * @remarks
   * Match value
   * 
   * @example
   * 12345
   */
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
  /**
   * @remarks
   * Array of plugin execution error logs
   */
  errorLogs?: { [key: string]: string };
  /**
   * @remarks
   * Plugin instance unique identifier
   * 
   * @example
   * pl-123456
   */
  pluginId?: string;
  /**
   * @remarks
   * Health status of the cache service
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * Redis database number
   * 
   * @example
   * 1
   */
  databaseNumber?: number;
  /**
   * @remarks
   * Redis host
   * 
   * @example
   * redis.example.com
   */
  host?: string;
  /**
   * @remarks
   * Redis password
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * Redis port
   * 
   * @example
   * 6379
   */
  port?: number;
  /**
   * @remarks
   * Redis timeout
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * Redis username
   * 
   * @example
   * username
   */
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
  /**
   * @remarks
   * Limit mode
   * 
   * @example
   * TokenPerSecond
   */
  limitMode?: string;
  /**
   * @remarks
   * Limit type
   * 
   * @example
   * Header
   */
  limitType?: string;
  /**
   * @remarks
   * Limit value
   * 
   * @example
   * 100
   */
  limitValue?: string;
  /**
   * @remarks
   * Match key
   * 
   * @example
   * x-api-key
   */
  matchKey?: string;
  /**
   * @remarks
   * Match type
   * 
   * @example
   * Exact
   */
  matchType?: string;
  /**
   * @remarks
   * Match value
   * 
   * @example
   * test-value
   */
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
  /**
   * @remarks
   * Enable global rate limit rules
   * 
   * @example
   * true
   */
  enableGlobalRules?: boolean;
  /**
   * @remarks
   * List of global rate limit rules
   */
  globalRules?: HttpApiPolicyConfigsAiTokenRateLimitConfigGlobalRules[];
  /**
   * @remarks
   * pluginStatus
   */
  pluginStatus?: HttpApiPolicyConfigsAiTokenRateLimitConfigPluginStatus;
  /**
   * @remarks
   * Redis Config
   */
  redisConfig?: HttpApiPolicyConfigsAiTokenRateLimitConfigRedisConfig;
  /**
   * @remarks
   * List of rate limit rules
   */
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
  /**
   * @remarks
   * Tool count threshold
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * errorLogs
   */
  errorLogs?: { [key: string]: string };
  /**
   * @remarks
   * pluginId
   * 
   * @example
   * pl-123456
   */
  pluginId?: string;
  /**
   * @remarks
   * serviceHealthy
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * Context type
   * 
   * @example
   * recentMessages
   */
  type?: string;
  /**
   * @remarks
   * Value
   * 
   * @example
   * 5
   */
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
  /**
   * @remarks
   * Model name
   * 
   * @example
   * qwen-turbo
   */
  modelName?: string;
  /**
   * @remarks
   * Service ID
   * 
   * @example
   * svc-123456
   */
  serviceId?: string;
  /**
   * @remarks
   * Timeout in milliseconds
   * 
   * @example
   * 5000
   */
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
  /**
   * @remarks
   * Custom prompt (required when type=custom)
   * 
   * @example
   * Custom prompt
   */
  customPrompt?: string;
  /**
   * @remarks
   * Prompt type: builtIn/custom
   * 
   * @example
   * builtIn
   */
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
  /**
   * @remarks
   * Message count threshold (≥0)
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * Context selection
   */
  contextSelection?: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingContextSelection;
  /**
   * @remarks
   * Enable query rewriting
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Fallback strategy
   * 
   * @example
   * skip
   */
  fallbackStrategy?: string;
  /**
   * @remarks
   * Max output tokens
   * 
   * @example
   * 50
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * Model service configuration
   */
  modelService?: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingModelService;
  /**
   * @remarks
   * Prompt configuration
   */
  promptConfig?: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewritingPromptConfig;
  /**
   * @remarks
   * Trigger conditions
   */
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
  /**
   * @remarks
   * Model name
   * 
   * @example
   * gte-rerank-v2
   */
  modelName?: string;
  /**
   * @remarks
   * Service ID
   * 
   * @example
   * svc-123456
   */
  serviceId?: string;
  /**
   * @remarks
   * Timeout in milliseconds
   * 
   * @example
   * 5000
   */
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
  /**
   * @remarks
   * Fallback strategy: skip/error
   * 
   * @example
   * skip
   */
  fallbackStrategy?: string;
  /**
   * @remarks
   * Filtering method: topK/topN/combined
   * 
   * @example
   * topK
   */
  filteringMethod?: string;
  /**
   * @remarks
   * Model service configuration
   */
  modelService?: HttpApiPolicyConfigsAiToolSelectionConfigToolRerankingModelService;
  /**
   * @remarks
   * Score threshold (0.0-1.0, 0 means disabled)
   * 
   * @example
   * 0.5
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * TopK percentage (1-100)
   * 
   * @example
   * 50
   */
  topKPercent?: number;
  /**
   * @remarks
   * TopN count
   * 
   * @example
   * 5
   */
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
  /**
   * @remarks
   * Enable conditions configuration
   */
  enableConditions?: HttpApiPolicyConfigsAiToolSelectionConfigEnableConditions;
  /**
   * @remarks
   * Plugin status
   */
  pluginStatus?: HttpApiPolicyConfigsAiToolSelectionConfigPluginStatus;
  /**
   * @remarks
   * Query rewriting configuration
   */
  queryRewriting?: HttpApiPolicyConfigsAiToolSelectionConfigQueryRewriting;
  /**
   * @remarks
   * Tool reranking configuration
   */
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
  /**
   * @remarks
   * Timeout in milliseconds
   * 
   * @example
   * 2000
   */
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
  /**
   * @remarks
   * AiCacheConfig
   */
  aiCacheConfig?: HttpApiPolicyConfigsAiCacheConfig;
  /**
   * @remarks
   * AiFallbackConfig
   */
  aiFallbackConfig?: HttpApiPolicyConfigsAiFallbackConfig;
  /**
   * @remarks
   * AiNetworkSearchConfig
   */
  aiNetworkSearchConfig?: HttpApiPolicyConfigsAiNetworkSearchConfig;
  /**
   * @remarks
   * AiSecurityGuardConfig
   */
  aiSecurityGuardConfig?: HttpApiPolicyConfigsAiSecurityGuardConfig;
  /**
   * @remarks
   * AiStatisticsConfig
   */
  aiStatisticsConfig?: HttpApiPolicyConfigsAiStatisticsConfig;
  /**
   * @remarks
   * AiTokenRateLimitConfig
   */
  aiTokenRateLimitConfig?: HttpApiPolicyConfigsAiTokenRateLimitConfig;
  /**
   * @remarks
   * AiToolSelectionConfig
   */
  aiToolSelectionConfig?: HttpApiPolicyConfigsAiToolSelectionConfig;
  /**
   * @remarks
   * Policy Enable
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * SemanticRouterConfig
   */
  semanticRouterConfig?: HttpApiPolicyConfigsSemanticRouterConfig;
  /**
   * @remarks
   * Policy Type
   * 
   * @example
   * AiCache
   */
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

