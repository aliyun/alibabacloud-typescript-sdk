// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayInfo } from "./GatewayInfo";
import { HttpApiMockContract } from "./HttpApiMockContract";
import { HttpApiPolicyConfigs } from "./HttpApiPolicyConfigs";
import { Backend } from "./Backend";
import { HttpApiBackendMatchConditions } from "./HttpApiBackendMatchConditions";


export class HttpApiDeployConfigCustomDomainInfos extends $dara.Model {
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-cshee6dlhtgk******
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

export class HttpApiDeployConfigEnvDomainInfos extends $dara.Model {
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-env-xxx
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * api.example.com
   */
  name?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * HTTPS
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

export class HttpApiDeployConfigServiceConfigsObservabilityRouteConfig extends $dara.Model {
  /**
   * @remarks
   * The routing mode.
   * 
   * @example
   * LeastBusy
   */
  mode?: string;
  /**
   * @remarks
   * The queue size.
   * 
   * @example
   * 100
   */
  queueSize?: number;
  /**
   * @remarks
   * The maximum traffic ratio for a single service.
   * 
   * @example
   * 0.8
   */
  rateLimit?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      queueSize: 'queueSize',
      rateLimit: 'rateLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      queueSize: 'number',
      rateLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiDeployConfigServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * The gateway service ID.
   * 
   * @example
   * gw-svc-abc123
   */
  gatewayServiceId?: string;
  /**
   * @remarks
   * The intent code.
   * 
   * @example
   * INQUIRY
   */
  intentCode?: string;
  /**
   * @remarks
   * The matching condition.
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
   * The multi-service routing strategy type.
   * 
   * @example
   * ByWeight
   */
  multiServiceRouteStrategy?: string;
  /**
   * @remarks
   * The service display name.
   * 
   * @example
   * Qwen-Max-Service
   */
  name?: string;
  /**
   * @remarks
   * The observability metric routing configuration.
   * 
   * **if can be null:**
   * true
   */
  observabilityRouteConfig?: HttpApiDeployConfigServiceConfigsObservabilityRouteConfig;
  /**
   * @remarks
   * The service port number.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The service protocol (HTTP/HTTPS).
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
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version label.
   * 
   * @example
   * V2
   */
  version?: string;
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
      gatewayServiceId: 'gatewayServiceId',
      intentCode: 'intentCode',
      match: 'match',
      modelName: 'modelName',
      modelNamePattern: 'modelNamePattern',
      multiServiceRouteStrategy: 'multiServiceRouteStrategy',
      name: 'name',
      observabilityRouteConfig: 'observabilityRouteConfig',
      port: 'port',
      protocol: 'protocol',
      serviceId: 'serviceId',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      intentCode: 'string',
      match: HttpApiBackendMatchConditions,
      modelName: 'string',
      modelNamePattern: 'string',
      multiServiceRouteStrategy: 'string',
      name: 'string',
      observabilityRouteConfig: HttpApiDeployConfigServiceConfigsObservabilityRouteConfig,
      port: 'number',
      protocol: 'string',
      serviceId: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.observabilityRouteConfig && typeof (this.observabilityRouteConfig as any).validate === 'function') {
      (this.observabilityRouteConfig as any).validate();
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
   * d-csmn42um******
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
   * Specifies whether to automatically deploy.
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
   * The list of built-in route names.
   */
  builtinRouteNames?: string[];
  /**
   * @remarks
   * The list of custom domain name IDs.
   */
  customDomainIds?: string[];
  /**
   * @remarks
   * The list of custom domain name details.
   */
  customDomainInfos?: HttpApiDeployConfigCustomDomainInfos[];
  /**
   * @remarks
   * The list of environment domain name IDs. If this parameter is not specified, all environment domain names are associated. An empty array indicates that no environment domain names are associated.
   */
  envDomainIds?: string[];
  /**
   * @remarks
   * The list of environment domain name details.
   */
  envDomainInfos?: HttpApiDeployConfigEnvDomainInfos[];
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
   * The gateway instance ID.
   * 
   * @example
   * gw-xx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway information.
   * 
   * **if can be null:**
   * true
   */
  gatewayInfo?: GatewayInfo;
  /**
   * @remarks
   * The gateway type.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The mock configuration.
   * 
   * **if can be null:**
   * true
   */
  mock?: HttpApiMockContract;
  /**
   * @remarks
   * The list of policy configurations.
   */
  policyConfigs?: HttpApiPolicyConfigs[];
  /**
   * @remarks
   * The backend service information.
   * 
   * **if can be null:**
   * true
   */
  routeBackend?: Backend;
  /**
   * @remarks
   * The list of service configurations.
   */
  serviceConfigs?: HttpApiDeployConfigServiceConfigs[];
  /**
   * @remarks
   * The list of subdomain details.
   */
  subDomains?: HttpApiDeployConfigSubDomains[];
  static names(): { [key: string]: string } {
    return {
      autoDeploy: 'autoDeploy',
      backendScene: 'backendScene',
      builtinRouteNames: 'builtinRouteNames',
      customDomainIds: 'customDomainIds',
      customDomainInfos: 'customDomainInfos',
      envDomainIds: 'envDomainIds',
      envDomainInfos: 'envDomainInfos',
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
      builtinRouteNames: { 'type': 'array', 'itemType': 'string' },
      customDomainIds: { 'type': 'array', 'itemType': 'string' },
      customDomainInfos: { 'type': 'array', 'itemType': HttpApiDeployConfigCustomDomainInfos },
      envDomainIds: { 'type': 'array', 'itemType': 'string' },
      envDomainInfos: { 'type': 'array', 'itemType': HttpApiDeployConfigEnvDomainInfos },
      environmentId: 'string',
      gatewayId: 'string',
      gatewayInfo: GatewayInfo,
      gatewayType: 'string',
      mock: HttpApiMockContract,
      policyConfigs: { 'type': 'array', 'itemType': HttpApiPolicyConfigs },
      routeBackend: Backend,
      serviceConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfigServiceConfigs },
      subDomains: { 'type': 'array', 'itemType': HttpApiDeployConfigSubDomains },
    };
  }

  validate() {
    if(Array.isArray(this.builtinRouteNames)) {
      $dara.Model.validateArray(this.builtinRouteNames);
    }
    if(Array.isArray(this.customDomainIds)) {
      $dara.Model.validateArray(this.customDomainIds);
    }
    if(Array.isArray(this.customDomainInfos)) {
      $dara.Model.validateArray(this.customDomainInfos);
    }
    if(Array.isArray(this.envDomainIds)) {
      $dara.Model.validateArray(this.envDomainIds);
    }
    if(Array.isArray(this.envDomainInfos)) {
      $dara.Model.validateArray(this.envDomainInfos);
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

