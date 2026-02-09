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
   * @remarks
   * The instance ID.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The instance name.
   * 
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
   * @remarks
   * The service ID.
   * 
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  /**
   * @remarks
   * The matching conditions.
   */
  match?: HttpApiBackendMatchConditions;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * demo-service
   */
  name?: string;
  /**
   * @remarks
   * The service port.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The protocol.
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
   * The version of the microservice.
   * 
   * @example
   * v1
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
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-xxx
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  name?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * Internet
   */
  networkType?: string;
  /**
   * @remarks
   * The communication protocol.
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

export class HttpApiApiInfoEnvironments extends $dara.Model {
  /**
   * @remarks
   * The environment alias.
   * 
   * @example
   * test
   */
  alias?: string;
  /**
   * @remarks
   * The publishing scenario.
   * 
   * Valid values:
   * 
   * *   SingleService
   * *   MultiServiceByRatio
   * *   MultiServiceByContent
   * *   MultiServiceByTag
   * *   Mock
   * 
   * @example
   * SingleService
   */
  backendScene?: string;
  /**
   * @remarks
   * The type of the backend service.
   * 
   * Valid values:
   * 
   * *   DNS: a DNS domain name
   * *   Service: an existing service
   * *   VIP: a fixed IP address
   * *   CloudProduct: a cloud service
   * 
   * @example
   * Service
   */
  backendType?: string;
  /**
   * @remarks
   * The custom domain names.
   */
  customDomains?: HttpApiDomainInfo[];
  /**
   * @remarks
   * The publishing status of the API in the current environment.
   * 
   * @example
   * Deployed
   */
  deployStatus?: string;
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
   * The information about the gateway instance to which the environment belongs.
   */
  gatewayInfo?: HttpApiApiInfoEnvironmentsGatewayInfo;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The configurations of an existing service.
   */
  serviceConfigs?: HttpApiApiInfoEnvironmentsServiceConfigs[];
  /**
   * @remarks
   * The default domain names of the environment.
   */
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
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-xxx
   */
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ca435c77cba1547cca9311957bcxxxxxx
   */
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
  /**
   * @remarks
   * The environment information.
   */
  environmentInfo?: HttpApiApiInfoIngressInfoEnvironmentInfo;
  /**
   * @remarks
   * The Ingress Class for listening.
   * 
   * @example
   * mse
   */
  ingressClass?: string;
  /**
   * @remarks
   * The information about the Kubernetes cluster.
   */
  k8sClusterInfo?: HttpApiApiInfoIngressInfoK8sClusterInfo;
  /**
   * @remarks
   * Specifies whether to update the address in Ingress Status.
   * 
   * @example
   * true
   */
  overrideIngressIp?: boolean;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * src-xxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The namespace for listening.
   * 
   * @example
   * default
   */
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
  /**
   * @remarks
   * Agent protocol list
   */
  agentProtocols?: string[];
  /**
   * @remarks
   * The AI protocols.
   */
  aiProtocols?: string[];
  /**
   * @remarks
   * The authentication configurations.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The base path of the API.
   * 
   * @example
   * /v1
   */
  basePath?: string;
  /**
   * @remarks
   * The API publishing status.
   */
  deployCntMap?: { [key: string]: HttpApiApiInfoDeployCntMapValue };
  /**
   * @remarks
   * The API deployment configurations.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * for test only
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication.
   */
  enabelAuth?: boolean;
  /**
   * @remarks
   * The API environment information.
   */
  environments?: HttpApiApiInfoEnvironments[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gw-cpv4sqdl****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The HTTP API ID.
   * 
   * @example
   * api-xxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * The information about the HTTP Ingress API.
   */
  ingressInfo?: HttpApiApiInfoIngressInfo;
  /**
   * @remarks
   * Model category
   * 
   * @example
   * Text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The protocols.
   */
  protocols?: string[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The API type.
   * 
   * Valid values:
   * 
   * *   HttpIngress
   * *   Rest
   * *   Websocket
   * *   AI
   * *   Http
   * 
   * @example
   * Rest
   */
  type?: string;
  /**
   * @remarks
   * The API versioning information.
   */
  versionInfo?: HttpApiVersionInfo;
  static names(): { [key: string]: string } {
    return {
      agentProtocols: 'agentProtocols',
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
      modelCategory: 'modelCategory',
      name: 'name',
      protocols: 'protocols',
      resourceGroupId: 'resourceGroupId',
      type: 'type',
      versionInfo: 'versionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProtocols: { 'type': 'array', 'itemType': 'string' },
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
      modelCategory: 'string',
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      type: 'string',
      versionInfo: HttpApiVersionInfo,
    };
  }

  validate() {
    if(Array.isArray(this.agentProtocols)) {
      $dara.Model.validateArray(this.agentProtocols);
    }
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

