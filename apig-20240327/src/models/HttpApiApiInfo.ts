// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiApiInfoDeployCntMapValue } from "./HttpApiApiInfoDeployCntMapValue";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiVersionInfo } from "./HttpApiVersionInfo";
import { HttpApiDomainInfo } from "./HttpApiDomainInfo";
import { HttpApiBackendMatchConditions } from "./HttpApiBackendMatchConditions";


export class HttpApiApiInfoEnvironmentsGatewayInfo extends $dara.Model {
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoEnvironmentsServiceConfigs extends $dara.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * demo-service
   */
  name?: string;
  /**
   * @example
   * 8080
   */
  port?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      name: 'name',
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
      match: HttpApiBackendMatchConditions,
      name: 'string',
      port: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoEnvironmentsSubDomains extends $dara.Model {
  /**
   * @example
   * d-xxx
   */
  domainId?: string;
  /**
   * @example
   * www.example.com
   */
  name?: string;
  /**
   * @example
   * Internet
   */
  networkType?: string;
  /**
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

export class HttpApiApiInfoEnvironments extends $dara.Model {
  /**
   * @example
   * test
   */
  alias?: string;
  /**
   * @example
   * SingleService
   */
  backendScene?: string;
  /**
   * @example
   * Service
   */
  backendType?: string;
  customDomains?: HttpApiDomainInfo[];
  /**
   * @example
   * Deployed
   */
  deployStatus?: string;
  /**
   * @example
   * env-xxx
   */
  environmentId?: string;
  gatewayInfo?: HttpApiApiInfoEnvironmentsGatewayInfo;
  /**
   * @example
   * test
   */
  name?: string;
  serviceConfigs?: HttpApiApiInfoEnvironmentsServiceConfigs[];
  subDomains?: HttpApiApiInfoEnvironmentsSubDomains[];
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      backendScene: 'backendScene',
      backendType: 'backendType',
      customDomains: 'customDomains',
      deployStatus: 'deployStatus',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      serviceConfigs: 'serviceConfigs',
      subDomains: 'subDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      backendScene: 'string',
      backendType: 'string',
      customDomains: { 'type': 'array', 'itemType': HttpApiDomainInfo },
      deployStatus: 'string',
      environmentId: 'string',
      gatewayInfo: HttpApiApiInfoEnvironmentsGatewayInfo,
      name: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironmentsServiceConfigs },
      subDomains: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironmentsSubDomains },
    };
  }

  validate() {
    if(Array.isArray(this.customDomains)) {
      $dara.Model.validateArray(this.customDomains);
    }
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
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

export class HttpApiApiInfoIngressInfoEnvironmentInfo extends $dara.Model {
  environmentId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoIngressInfoK8sClusterInfo extends $dara.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfoIngressInfo extends $dara.Model {
  environmentInfo?: HttpApiApiInfoIngressInfoEnvironmentInfo;
  ingressClass?: string;
  k8sClusterInfo?: HttpApiApiInfoIngressInfoK8sClusterInfo;
  overrideIngressIp?: boolean;
  sourceId?: string;
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      environmentInfo: 'environmentInfo',
      ingressClass: 'ingressClass',
      k8sClusterInfo: 'k8sClusterInfo',
      overrideIngressIp: 'overrideIngressIp',
      sourceId: 'sourceId',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentInfo: HttpApiApiInfoIngressInfoEnvironmentInfo,
      ingressClass: 'string',
      k8sClusterInfo: HttpApiApiInfoIngressInfoK8sClusterInfo,
      overrideIngressIp: 'boolean',
      sourceId: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.k8sClusterInfo && typeof (this.k8sClusterInfo as any).validate === 'function') {
      (this.k8sClusterInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiApiInfo extends $dara.Model {
  aiProtocols?: string[];
  authConfig?: AuthConfig;
  /**
   * @example
   * /v1
   */
  basePath?: string;
  deployCntMap?: { [key: string]: HttpApiApiInfoDeployCntMapValue };
  deployConfigs?: HttpApiDeployConfig[];
  description?: string;
  enabelAuth?: boolean;
  environments?: HttpApiApiInfoEnvironments[];
  gatewayId?: string;
  /**
   * @example
   * api-xxx
   */
  httpApiId?: string;
  ingressInfo?: HttpApiApiInfoIngressInfo;
  /**
   * @example
   * test
   */
  name?: string;
  protocols?: string[];
  /**
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * Rest
   */
  type?: string;
  versionInfo?: HttpApiVersionInfo;
  static names(): { [key: string]: string } {
    return {
      aiProtocols: 'aiProtocols',
      authConfig: 'authConfig',
      basePath: 'basePath',
      deployCntMap: 'deployCntMap',
      deployConfigs: 'deployConfigs',
      description: 'description',
      enabelAuth: 'enabelAuth',
      environments: 'environments',
      gatewayId: 'gatewayId',
      httpApiId: 'httpApiId',
      ingressInfo: 'ingressInfo',
      name: 'name',
      protocols: 'protocols',
      resourceGroupId: 'resourceGroupId',
      type: 'type',
      versionInfo: 'versionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiProtocols: { 'type': 'array', 'itemType': 'string' },
      authConfig: AuthConfig,
      basePath: 'string',
      deployCntMap: { 'type': 'map', 'keyType': 'string', 'valueType': HttpApiApiInfoDeployCntMapValue },
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      enabelAuth: 'boolean',
      environments: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironments },
      gatewayId: 'string',
      httpApiId: 'string',
      ingressInfo: HttpApiApiInfoIngressInfo,
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      type: 'string',
      versionInfo: HttpApiVersionInfo,
    };
  }

  validate() {
    if(Array.isArray(this.aiProtocols)) {
      $dara.Model.validateArray(this.aiProtocols);
    }
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.deployCntMap) {
      $dara.Model.validateMap(this.deployCntMap);
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    if(this.ingressInfo && typeof (this.ingressInfo as any).validate === 'function') {
      (this.ingressInfo as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    if(this.versionInfo && typeof (this.versionInfo as any).validate === 'function') {
      (this.versionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

