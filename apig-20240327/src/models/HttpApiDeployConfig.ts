// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayInfo } from "./GatewayInfo";
import { HttpApiMockContract } from "./HttpApiMockContract";
import { Backend } from "./Backend";
import { HttpApiBackendMatchConditions } from "./HttpApiBackendMatchConditions";


export class HttpApiDeployConfigCustomDomainInfos extends $dara.Model {
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-cshee6dlhtgkf4muio3g
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * hello-server.com
   */
  name?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
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

export class HttpApiDeployConfigPolicyConfigsAiFallbackConfigServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * Service ID for fallback
   * 
   * @example
   * svc-******
   */
  serviceId?: string;
  /**
   * @remarks
   * targetModelName
   * 
   * @example
   * gpt-4/llama3-70b
   */
  targetModelName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'serviceId',
      targetModelName: 'targetModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class HttpApiDeployConfigPolicyConfigsAiFallbackConfig extends $dara.Model {
  /**
   * @remarks
   * List of fallback service configurations
   */
  serviceConfigs?: HttpApiDeployConfigPolicyConfigsAiFallbackConfigServiceConfigs[];
  static names(): { [key: string]: string } {
    return {
      serviceConfigs: 'serviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfigPolicyConfigsAiFallbackConfigServiceConfigs },
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

export class HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerRequestCheckService extends $dara.Model {
  /**
   * @remarks
   * Match type
   * 
   * @example
   * exact/prefix
   */
  matchType?: string;
  /**
   * @remarks
   * Modality type
   * 
   * @example
   * text/image
   */
  modalityType?: string;
  /**
   * @remarks
   * Consumer name for matching
   * 
   * @example
   * API
   */
  name?: string;
  /**
   * @remarks
   * Request check service name
   * 
   * @example
   * https://checker.example.com/validate
   */
  requestCheckService?: string;
  /**
   * @remarks
   * requestImageCheckService
   * 
   * @example
   * https://image-check.example.com/scan
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

export class HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService extends $dara.Model {
  /**
   * @remarks
   * Match type
   * 
   * @example
   * term
   */
  matchType?: string;
  /**
   * @remarks
   * Modality type
   * 
   * @example
   * text/image
   */
  modalityType?: string;
  /**
   * @remarks
   * Consumer name for matching
   * 
   * @example
   * AI_API
   */
  name?: string;
  /**
   * @remarks
   * Response check service name
   * 
   * @example
   * https://checker.example.com/validate-response
   */
  responseCheckService?: string;
  /**
   * @remarks
   * responseImageCheckService
   * 
   * @example
   * https://image-check.example.com/scan-response
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

export class HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel extends $dara.Model {
  /**
   * @remarks
   * Risk alert level
   * 
   * @example
   * Critical
   */
  level?: string;
  /**
   * @remarks
   * Match type
   * 
   * @example
   * term
   */
  matchType?: string;
  /**
   * @remarks
   * Consumer name for matching
   * 
   * @example
   * APIG-UI
   */
  name?: string;
  /**
   * @remarks
   * Risk type
   * 
   * @example
   * K8S
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

export class HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules extends $dara.Model {
  /**
   * @remarks
   * Match type
   * 
   * @example
   * term
   */
  matchType?: string;
  /**
   * @remarks
   * Pattern for matching
   * 
   * @example
   * first
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

export class HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigRiskConfig extends $dara.Model {
  /**
   * @remarks
   * Consumer-specific rules
   */
  consumerRules?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules;
  /**
   * @remarks
   * Risk alert level
   * 
   * @example
   * Critical
   */
  level?: string;
  /**
   * @remarks
   * Risk type identifier
   * 
   * @example
   * K8S
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
      consumerRules: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules,
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

export class HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfig extends $dara.Model {
  /**
   * @remarks
   * bufferLimit
   * 
   * @example
   * 50
   */
  bufferLimit?: number;
  /**
   * @remarks
   * Whether to check request content
   * 
   * @example
   * true
   */
  checkRequest?: boolean;
  /**
   * @remarks
   * Whether to check request content
   * 
   * @example
   * true
   */
  checkRequestImage?: boolean;
  /**
   * @remarks
   * Whether to check response content
   * 
   * @example
   * true
   */
  checkResponse?: boolean;
  /**
   * @remarks
   * Whether to check response content
   * 
   * @example
   * true
   */
  checkResponseImage?: boolean;
  /**
   * @remarks
   * Consumer-specific request check configs
   */
  consumerRequestCheckService?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerRequestCheckService[];
  /**
   * @remarks
   * Consumer-specific Response check configs
   */
  consumerResponseCheckService?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService[];
  /**
   * @remarks
   * Consumer-specific risk level configs
   */
  consumerRiskLevel?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel[];
  /**
   * @remarks
   * Request check service name
   * 
   * @example
   * https://checker.example.com/validate-request
   */
  requestCheckService?: string;
  /**
   * @remarks
   * Request check service name
   * 
   * @example
   * https://image-checker.example.com/scan
   */
  requestImageCheckService?: string;
  /**
   * @remarks
   * Response check service name
   * 
   * @example
   * https://checker.example.com/validate-response
   */
  responseCheckService?: string;
  /**
   * @remarks
   * Response check service name
   * 
   * @example
   * https://image-checker.example.com/scan-response
   */
  responseImageCheckService?: string;
  /**
   * @remarks
   * Risk alert level for content moderation
   * 
   * @example
   * low/medium/high
   */
  riskAlertLevel?: string;
  /**
   * @remarks
   * riskConfig
   */
  riskConfig?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigRiskConfig[];
  /**
   * @remarks
   * Security guard service address
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
      consumerRequestCheckService: { 'type': 'array', 'itemType': HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerRequestCheckService },
      consumerResponseCheckService: { 'type': 'array', 'itemType': HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService },
      consumerRiskLevel: { 'type': 'array', 'itemType': HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel },
      requestCheckService: 'string',
      requestImageCheckService: 'string',
      responseCheckService: 'string',
      responseImageCheckService: 'string',
      riskAlertLevel: 'string',
      riskConfig: { 'type': 'array', 'itemType': HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigRiskConfig },
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
    if(Array.isArray(this.riskConfig)) {
      $dara.Model.validateArray(this.riskConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfigGlobalRules extends $dara.Model {
  /**
   * @remarks
   * Limit mode for global rules
   * 
   * @example
   * local
   */
  limitMode?: string;
  /**
   * @remarks
   * Limit type for global rules
   * 
   * @example
   * request
   */
  limitType?: string;
  /**
   * @remarks
   * Limit value for global rules
   * 
   * @example
   * 100
   */
  limitValue?: number;
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
   * term
   */
  matchType?: string;
  /**
   * @remarks
   * Match value
   * 
   * @example
   * user123
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

export class HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfigRules extends $dara.Model {
  /**
   * @remarks
   * Limit mode
   * 
   * @example
   * local
   */
  limitMode?: string;
  /**
   * @remarks
   * Limit type
   * 
   * @example
   * request/token
   */
  limitType?: string;
  /**
   * @remarks
   * Limit value
   * 
   * @example
   * 100
   */
  limitValue?: number;
  /**
   * @remarks
   * Match key
   * 
   * @example
   * user_id/api_path
   */
  matchKey?: string;
  /**
   * @remarks
   * Match type
   * 
   * @example
   * term
   */
  matchType?: string;
  /**
   * @remarks
   * Match value
   * 
   * @example
   * user123
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

export class HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfig extends $dara.Model {
  /**
   * @remarks
   * Whether to enable global rate limit rules
   * 
   * @example
   * true
   */
  enableGlobalRules?: boolean;
  /**
   * @remarks
   * List of global rate limit rules
   */
  globalRules?: HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfigGlobalRules[];
  /**
   * @remarks
   * List of rate limit rules
   */
  rules?: HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfigRules[];
  static names(): { [key: string]: string } {
    return {
      enableGlobalRules: 'enableGlobalRules',
      globalRules: 'globalRules',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableGlobalRules: 'boolean',
      globalRules: { 'type': 'array', 'itemType': HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfigGlobalRules },
      rules: { 'type': 'array', 'itemType': HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfigRules },
    };
  }

  validate() {
    if(Array.isArray(this.globalRules)) {
      $dara.Model.validateArray(this.globalRules);
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

export class HttpApiDeployConfigPolicyConfigs extends $dara.Model {
  /**
   * @remarks
   * The fallback configurations
   */
  aiFallbackConfig?: HttpApiDeployConfigPolicyConfigsAiFallbackConfig;
  /**
   * @remarks
   * AI Security Guard configuration
   */
  aiSecurityGuardConfig?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfig;
  /**
   * @remarks
   * AI Token Rate Limit configuration
   */
  aiTokenRateLimitConfig?: HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfig;
  /**
   * @remarks
   * Specifies whether to enable the policy.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * @example
   * AiFallback
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aiFallbackConfig: 'aiFallbackConfig',
      aiSecurityGuardConfig: 'aiSecurityGuardConfig',
      aiTokenRateLimitConfig: 'aiTokenRateLimitConfig',
      enable: 'enable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiFallbackConfig: HttpApiDeployConfigPolicyConfigsAiFallbackConfig,
      aiSecurityGuardConfig: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfig,
      aiTokenRateLimitConfig: HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfig,
      enable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.aiFallbackConfig && typeof (this.aiFallbackConfig as any).validate === 'function') {
      (this.aiFallbackConfig as any).validate();
    }
    if(this.aiSecurityGuardConfig && typeof (this.aiSecurityGuardConfig as any).validate === 'function') {
      (this.aiSecurityGuardConfig as any).validate();
    }
    if(this.aiTokenRateLimitConfig && typeof (this.aiTokenRateLimitConfig as any).validate === 'function') {
      (this.aiTokenRateLimitConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiDeployConfigServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * Intent classification code
   * 
   * @example
   * INQUIRY
   */
  intentCode?: string;
  /**
   * @remarks
   * Match conditions
   */
  match?: HttpApiBackendMatchConditions;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model name matching rule.
   * 
   * @example
   * qwen-*
   */
  modelNamePattern?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service weight.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      intentCode: 'intentCode',
      match: 'match',
      modelName: 'modelName',
      modelNamePattern: 'modelNamePattern',
      serviceId: 'serviceId',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentCode: 'string',
      match: HttpApiBackendMatchConditions,
      modelName: 'string',
      modelNamePattern: 'string',
      serviceId: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiDeployConfigSubDomains extends $dara.Model {
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-csmn42um1hksudfk9eng
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * Intranet
   */
  networkType?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      networkType: 'networkType',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
      networkType: 'string',
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

export class HttpApiDeployConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic deployment.
   * 
   * @example
   * true
   */
  autoDeploy?: boolean;
  /**
   * @remarks
   * The publishing scenario.
   * 
   * @example
   * SingleService
   */
  backendScene?: string;
  /**
   * @remarks
   * The IDs of the custom domain names.
   */
  customDomainIds?: string[];
  /**
   * @remarks
   * The information about the custom domain names.
   */
  customDomainInfos?: HttpApiDeployConfigCustomDomainInfos[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gw-xx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The instance information.
   */
  gatewayInfo?: GatewayInfo;
  /**
   * @remarks
   * 网关类型
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The Mock settings.
   */
  mock?: HttpApiMockContract;
  /**
   * @remarks
   * The policy configurations.
   */
  policyConfigs?: HttpApiDeployConfigPolicyConfigs[];
  /**
   * @remarks
   * routeBackend
   */
  routeBackend?: Backend;
  /**
   * @remarks
   * The service configurations.
   */
  serviceConfigs?: HttpApiDeployConfigServiceConfigs[];
  /**
   * @remarks
   * The information about the sub-domain names.
   */
  subDomains?: HttpApiDeployConfigSubDomains[];
  static names(): { [key: string]: string } {
    return {
      autoDeploy: 'autoDeploy',
      backendScene: 'backendScene',
      customDomainIds: 'customDomainIds',
      customDomainInfos: 'customDomainInfos',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      gatewayInfo: 'gatewayInfo',
      gatewayType: 'gatewayType',
      mock: 'mock',
      policyConfigs: 'policyConfigs',
      routeBackend: 'routeBackend',
      serviceConfigs: 'serviceConfigs',
      subDomains: 'subDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeploy: 'boolean',
      backendScene: 'string',
      customDomainIds: { 'type': 'array', 'itemType': 'string' },
      customDomainInfos: { 'type': 'array', 'itemType': HttpApiDeployConfigCustomDomainInfos },
      environmentId: 'string',
      gatewayId: 'string',
      gatewayInfo: GatewayInfo,
      gatewayType: 'string',
      mock: HttpApiMockContract,
      policyConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfigPolicyConfigs },
      routeBackend: Backend,
      serviceConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfigServiceConfigs },
      subDomains: { 'type': 'array', 'itemType': HttpApiDeployConfigSubDomains },
    };
  }

  validate() {
    if(Array.isArray(this.customDomainIds)) {
      $dara.Model.validateArray(this.customDomainIds);
    }
    if(Array.isArray(this.customDomainInfos)) {
      $dara.Model.validateArray(this.customDomainInfos);
    }
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(this.mock && typeof (this.mock as any).validate === 'function') {
      (this.mock as any).validate();
    }
    if(Array.isArray(this.policyConfigs)) {
      $dara.Model.validateArray(this.policyConfigs);
    }
    if(this.routeBackend && typeof (this.routeBackend as any).validate === 'function') {
      (this.routeBackend as any).validate();
    }
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    if(Array.isArray(this.subDomains)) {
      $dara.Model.validateArray(this.subDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

