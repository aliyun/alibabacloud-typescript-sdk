// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayInfo } from "./GatewayInfo";
import { HttpApiMockContract } from "./HttpApiMockContract";
import { Backend } from "./Backend";


export class HttpApiDeployConfigCustomDomainInfos extends $dara.Model {
  domainId?: string;
  name?: string;
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
  serviceId?: string;
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

export class HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService extends $dara.Model {
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

export class HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel extends $dara.Model {
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

export class HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules extends $dara.Model {
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

export class HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigRiskConfig extends $dara.Model {
  consumerRules?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigRiskConfigConsumerRules;
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
  bufferLimit?: number;
  checkRequest?: boolean;
  checkRequestImage?: boolean;
  checkResponse?: boolean;
  checkResponseImage?: boolean;
  consumerRequestCheckService?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerRequestCheckService[];
  consumerResponseCheckService?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerResponseCheckService[];
  consumerRiskLevel?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigConsumerRiskLevel[];
  requestCheckService?: string;
  requestImageCheckService?: string;
  responseCheckService?: string;
  responseImageCheckService?: string;
  riskAlertLevel?: string;
  riskConfig?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfigRiskConfig[];
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

export class HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfigRules extends $dara.Model {
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

export class HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfig extends $dara.Model {
  enableGlobalRules?: boolean;
  globalRules?: HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfigGlobalRules[];
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
  aiFallbackConfig?: HttpApiDeployConfigPolicyConfigsAiFallbackConfig;
  aiSecurityGuardConfig?: HttpApiDeployConfigPolicyConfigsAiSecurityGuardConfig;
  aiTokenRateLimitConfig?: HttpApiDeployConfigPolicyConfigsAiTokenRateLimitConfig;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
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
  intentCode?: string;
  /**
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @example
   * qwen-*
   */
  modelNamePattern?: string;
  /**
   * @example
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      intentCode: 'intentCode',
      modelName: 'modelName',
      modelNamePattern: 'modelNamePattern',
      serviceId: 'serviceId',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentCode: 'string',
      modelName: 'string',
      modelNamePattern: 'string',
      serviceId: 'string',
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

export class HttpApiDeployConfigSubDomains extends $dara.Model {
  domainId?: string;
  name?: string;
  networkType?: string;
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
   * @example
   * true
   */
  autoDeploy?: boolean;
  /**
   * @example
   * SingleService
   */
  backendScene?: string;
  customDomainIds?: string[];
  customDomainInfos?: HttpApiDeployConfigCustomDomainInfos[];
  /**
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @example
   * gw-xx
   */
  gatewayId?: string;
  gatewayInfo?: GatewayInfo;
  /**
   * @example
   * API
   */
  gatewayType?: string;
  mock?: HttpApiMockContract;
  policyConfigs?: HttpApiDeployConfigPolicyConfigs[];
  routeBackend?: Backend;
  serviceConfigs?: HttpApiDeployConfigServiceConfigs[];
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

