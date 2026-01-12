// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpRouteMatch } from "./HttpRouteMatch";


export class UpdateHttpApiRouteRequestBackendConfigServices extends $dara.Model {
  /**
   * @remarks
   * The service port. If you want to use a dynamic port, do not pass this parameter.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * svc-cr6pk4tlhtgm58e***
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The percentage value of traffic.
   * 
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
      serviceId: 'serviceId',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
      serviceId: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiRouteRequestBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The backend service scenario.
   * 
   * Valid values:
   * 
   * *   SingleService
   * *   MultiServiceByRatio
   * *   Redirect
   * *   Mock
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * The backend services.
   */
  services?: UpdateHttpApiRouteRequestBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestBackendConfigServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiRouteRequestMcpRouteConfig extends $dara.Model {
  exposedUriPath?: string;
  mcpStatisticsEnable?: boolean;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      exposedUriPath: 'exposedUriPath',
      mcpStatisticsEnable: 'mcpStatisticsEnable',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedUriPath: 'string',
      mcpStatisticsEnable: 'boolean',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigEmbeddingConfig extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigPluginStatus extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigRedisConfig extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigVectorConfig extends $dara.Model {
  apiKey?: string;
  collectionId?: string;
  serviceHost?: string;
  threshold?: number;
  /**
   * @example
   * 6000
   */
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfig extends $dara.Model {
  cacheKeyStrategy?: string;
  cacheMode?: string;
  cacheTTL?: number;
  embeddingConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigEmbeddingConfig;
  pluginStatus?: UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigPluginStatus;
  redisConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigRedisConfig;
  vectorConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigVectorConfig;
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
      embeddingConfig: UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigEmbeddingConfig,
      pluginStatus: UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigPluginStatus,
      redisConfig: UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigRedisConfig,
      vectorConfig: UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfigVectorConfig,
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiFallbackConfigServiceConfigs extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiFallbackConfig extends $dara.Model {
  onlyRedirectUpstreamCode?: boolean;
  routeEmbedded?: boolean;
  serviceConfigs?: UpdateHttpApiRouteRequestPolicyConfigsAiFallbackConfigServiceConfigs[];
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
      serviceConfigs: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestPolicyConfigsAiFallbackConfigServiceConfigs },
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigPluginStatus extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigSearchEngineConfig extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigSearchFrom extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigSearchRewrite extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfig extends $dara.Model {
  defaultEnable?: boolean;
  defaultLang?: string;
  needReference?: boolean;
  pluginStatus?: UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigPluginStatus;
  referenceFormat?: string;
  referenceLocation?: string;
  searchEngineConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigSearchEngineConfig;
  searchFrom?: UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigSearchFrom[];
  searchRewrite?: UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigSearchRewrite;
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
      pluginStatus: UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigPluginStatus,
      referenceFormat: 'string',
      referenceLocation: 'string',
      searchEngineConfig: UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigSearchEngineConfig,
      searchFrom: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigSearchFrom },
      searchRewrite: UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfigSearchRewrite,
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigConsumerRequestCheckService extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigPluginStatus extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigRiskConfig extends $dara.Model {
  consumerRules?: UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules;
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
      consumerRules: UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules,
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfig extends $dara.Model {
  bufferLimit?: number;
  checkRequest?: boolean;
  checkRequestImage?: boolean;
  checkResponse?: boolean;
  checkResponseImage?: boolean;
  consumerRequestCheckService?: UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigConsumerRequestCheckService[];
  consumerResponseCheckService?: UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService[];
  consumerRiskLevel?: UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel[];
  pluginStatus?: UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigPluginStatus;
  requestCheckService?: string;
  requestImageCheckService?: string;
  responseCheckService?: string;
  responseImageCheckService?: string;
  riskAlertLevel?: string;
  riskConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigRiskConfig[];
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
      consumerRequestCheckService: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigConsumerRequestCheckService },
      consumerResponseCheckService: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService },
      consumerRiskLevel: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel },
      pluginStatus: UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigPluginStatus,
      requestCheckService: 'string',
      requestImageCheckService: 'string',
      responseCheckService: 'string',
      responseImageCheckService: 'string',
      riskAlertLevel: 'string',
      riskConfig: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfigRiskConfig },
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiStatisticsConfig extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigGlobalRules extends $dara.Model {
  limitMode?: string;
  limitType?: string;
  limitValue?: number;
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
      limitValue: 'number',
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigPluginStatus extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigRedisConfig extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigRules extends $dara.Model {
  limitMode?: string;
  limitType?: string;
  limitValue?: number;
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
      limitValue: 'number',
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfig extends $dara.Model {
  enableGlobalRules?: boolean;
  globalRules?: UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigGlobalRules[];
  pluginStatus?: UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigPluginStatus;
  redisConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigRedisConfig;
  rules?: UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigRules[];
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
      globalRules: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigGlobalRules },
      pluginStatus: UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigPluginStatus,
      redisConfig: UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigRedisConfig,
      rules: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfigRules },
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigEnableConditions extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigPluginStatus extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingContextSelection extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingModelService extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingPromptConfig extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingTriggerConditions extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewriting extends $dara.Model {
  contextSelection?: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingContextSelection;
  enabled?: boolean;
  fallbackStrategy?: string;
  maxOutputTokens?: number;
  modelService?: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingModelService;
  promptConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingPromptConfig;
  triggerConditions?: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingTriggerConditions;
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
      contextSelection: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingContextSelection,
      enabled: 'boolean',
      fallbackStrategy: 'string',
      maxOutputTokens: 'number',
      modelService: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingModelService,
      promptConfig: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingPromptConfig,
      triggerConditions: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewritingTriggerConditions,
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigToolRerankingModelService extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigToolReranking extends $dara.Model {
  fallbackStrategy?: string;
  filteringMethod?: string;
  modelService?: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigToolRerankingModelService;
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
      modelService: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigToolRerankingModelService,
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

export class UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfig extends $dara.Model {
  enableConditions?: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigEnableConditions;
  pluginStatus?: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigPluginStatus;
  queryRewriting?: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewriting;
  toolReranking?: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigToolReranking;
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
      enableConditions: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigEnableConditions,
      pluginStatus: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigPluginStatus,
      queryRewriting: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigQueryRewriting,
      toolReranking: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfigToolReranking,
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

export class UpdateHttpApiRouteRequestPolicyConfigsSemanticRouterConfig extends $dara.Model {
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

export class UpdateHttpApiRouteRequestPolicyConfigs extends $dara.Model {
  aiCacheConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfig;
  aiFallbackConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiFallbackConfig;
  aiNetworkSearchConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfig;
  aiSecurityGuardConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfig;
  aiStatisticsConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiStatisticsConfig;
  aiTokenRateLimitConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfig;
  aiToolSelectionConfig?: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfig;
  enable?: boolean;
  semanticRouterConfig?: UpdateHttpApiRouteRequestPolicyConfigsSemanticRouterConfig;
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
      aiCacheConfig: UpdateHttpApiRouteRequestPolicyConfigsAiCacheConfig,
      aiFallbackConfig: UpdateHttpApiRouteRequestPolicyConfigsAiFallbackConfig,
      aiNetworkSearchConfig: UpdateHttpApiRouteRequestPolicyConfigsAiNetworkSearchConfig,
      aiSecurityGuardConfig: UpdateHttpApiRouteRequestPolicyConfigsAiSecurityGuardConfig,
      aiStatisticsConfig: UpdateHttpApiRouteRequestPolicyConfigsAiStatisticsConfig,
      aiTokenRateLimitConfig: UpdateHttpApiRouteRequestPolicyConfigsAiTokenRateLimitConfig,
      aiToolSelectionConfig: UpdateHttpApiRouteRequestPolicyConfigsAiToolSelectionConfig,
      enable: 'boolean',
      semanticRouterConfig: UpdateHttpApiRouteRequestPolicyConfigsSemanticRouterConfig,
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

export class UpdateHttpApiRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The backend service configurations of the route.
   */
  backendConfig?: UpdateHttpApiRouteRequestBackendConfig;
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The route description.
   * 
   * @example
   * test route
   */
  description?: string;
  /**
   * @remarks
   * The domain IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cquqsollhtgid***
   */
  environmentId?: string;
  /**
   * @remarks
   * The rules for matching the route.
   */
  match?: HttpRouteMatch;
  mcpRouteConfig?: UpdateHttpApiRouteRequestMcpRouteConfig;
  name?: string;
  policyConfigs?: UpdateHttpApiRouteRequestPolicyConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      deployConfigs: 'deployConfigs',
      description: 'description',
      domainIds: 'domainIds',
      environmentId: 'environmentId',
      match: 'match',
      mcpRouteConfig: 'mcpRouteConfig',
      name: 'name',
      policyConfigs: 'policyConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: UpdateHttpApiRouteRequestBackendConfig,
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      match: HttpRouteMatch,
      mcpRouteConfig: UpdateHttpApiRouteRequestMcpRouteConfig,
      name: 'string',
      policyConfigs: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestPolicyConfigs },
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.mcpRouteConfig && typeof (this.mcpRouteConfig as any).validate === 'function') {
      (this.mcpRouteConfig as any).validate();
    }
    if(Array.isArray(this.policyConfigs)) {
      $dara.Model.validateArray(this.policyConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

