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

export class HttpApiDeployConfigPolicyConfigsAiFallbackConfig extends $dara.Model {
  serviceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      serviceIds: 'serviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiDeployConfigPolicyConfigs extends $dara.Model {
  aiFallbackConfig?: HttpApiDeployConfigPolicyConfigsAiFallbackConfig;
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
      enable: 'enable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiFallbackConfig: HttpApiDeployConfigPolicyConfigsAiFallbackConfig,
      enable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.aiFallbackConfig && typeof (this.aiFallbackConfig as any).validate === 'function') {
      (this.aiFallbackConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiDeployConfigServiceConfigs extends $dara.Model {
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
      modelName: 'modelName',
      modelNamePattern: 'modelNamePattern',
      serviceId: 'serviceId',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

