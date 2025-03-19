// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class ApiKeyIdentityConfigApikeySource extends $dara.Model {
  source?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
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

export class ApiKeyIdentityConfigCredentials extends $dara.Model {
  apikey?: string;
  generateMode?: string;
  static names(): { [key: string]: string } {
    return {
      apikey: 'apikey',
      generateMode: 'generateMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikey: 'string',
      generateMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsDetailsConflictingMatchOperationInfo extends $dara.Model {
  name?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      operationId: 'operationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsDetailsConflictingMatch extends $dara.Model {
  match?: HttpRouteMatch;
  operationInfo?: ApiRouteConflictInfoConflictsDetailsConflictingMatchOperationInfo;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      operationInfo: 'operationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: HttpRouteMatch,
      operationInfo: ApiRouteConflictInfoConflictsDetailsConflictingMatchOperationInfo,
    };
  }

  validate() {
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.operationInfo && typeof (this.operationInfo as any).validate === 'function') {
      (this.operationInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsDetailsDetectedMatchOperationInfo extends $dara.Model {
  name?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      operationId: 'operationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsDetailsDetectedMatch extends $dara.Model {
  match?: HttpRouteMatch;
  operationInfo?: ApiRouteConflictInfoConflictsDetailsDetectedMatchOperationInfo;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      operationInfo: 'operationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: HttpRouteMatch,
      operationInfo: ApiRouteConflictInfoConflictsDetailsDetectedMatchOperationInfo,
    };
  }

  validate() {
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.operationInfo && typeof (this.operationInfo as any).validate === 'function') {
      (this.operationInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsDetails extends $dara.Model {
  conflictingMatch?: ApiRouteConflictInfoConflictsDetailsConflictingMatch;
  detectedMatch?: ApiRouteConflictInfoConflictsDetailsDetectedMatch;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      conflictingMatch: 'conflictingMatch',
      detectedMatch: 'detectedMatch',
      level: 'level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictingMatch: ApiRouteConflictInfoConflictsDetailsConflictingMatch,
      detectedMatch: ApiRouteConflictInfoConflictsDetailsDetectedMatch,
      level: 'string',
    };
  }

  validate() {
    if(this.conflictingMatch && typeof (this.conflictingMatch as any).validate === 'function') {
      (this.conflictingMatch as any).validate();
    }
    if(this.detectedMatch && typeof (this.detectedMatch as any).validate === 'function') {
      (this.detectedMatch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflictsEnvironmentInfo extends $dara.Model {
  environmentId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
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

export class ApiRouteConflictInfoConflictsRouteInfo extends $dara.Model {
  name?: string;
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      routeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoConflicts extends $dara.Model {
  details?: ApiRouteConflictInfoConflictsDetails[];
  environmentInfo?: ApiRouteConflictInfoConflictsEnvironmentInfo;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  routeInfo?: ApiRouteConflictInfoConflictsRouteInfo;
  static names(): { [key: string]: string } {
    return {
      details: 'details',
      environmentInfo: 'environmentInfo',
      resourceId: 'resourceId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      routeInfo: 'routeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ApiRouteConflictInfoConflictsDetails },
      environmentInfo: ApiRouteConflictInfoConflictsEnvironmentInfo,
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      routeInfo: ApiRouteConflictInfoConflictsRouteInfo,
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.routeInfo && typeof (this.routeInfo as any).validate === 'function') {
      (this.routeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfoDomainInfo extends $dara.Model {
  domainId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
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

export class BackendServices extends $dara.Model {
  /**
   * @example
   * item-service
   */
  name?: string;
  /**
   * @example
   * port
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * service-cq2bmmdlhtgj***
   */
  serviceId?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  /**
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
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
      name: 'string',
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

export class GatewayInfoVpcInfo extends $dara.Model {
  name?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayLogConfigSlsConfig extends $dara.Model {
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs extends $dara.Model {
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
   * default
   */
  namespace?: string;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * 100
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      name: 'name',
      namespace: 'namespace',
      port: 'port',
      protocol: 'protocol',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      namespace: 'string',
      port: 'number',
      protocol: 'string',
      weight: 'string',
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

export class HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs extends $dara.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * demo-function
   */
  name?: string;
  /**
   * @example
   * LATEST
   */
  qualifier?: string;
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
      qualifier: 'qualifier',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      qualifier: 'string',
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

export class HttpApiPublishRevisionInfoCloudProductConfigMseNacosConfigs extends $dara.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  /**
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * spring-demo
   */
  name?: string;
  /**
   * @example
   * public
   */
  namespace?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      groupName: 'groupName',
      match: 'match',
      name: 'name',
      namespace: 'namespace',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      groupName: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      namespace: 'string',
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

export class HttpApiPublishRevisionInfoCloudProductConfig extends $dara.Model {
  /**
   * @example
   * FC
   */
  cloudProductType?: string;
  containerServiceConfigs?: HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs[];
  functionConfigs?: HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs[];
  mseNacosConfigs?: HttpApiPublishRevisionInfoCloudProductConfigMseNacosConfigs[];
  static names(): { [key: string]: string } {
    return {
      cloudProductType: 'cloudProductType',
      containerServiceConfigs: 'containerServiceConfigs',
      functionConfigs: 'functionConfigs',
      mseNacosConfigs: 'mseNacosConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudProductType: 'string',
      containerServiceConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs },
      functionConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs },
      mseNacosConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoCloudProductConfigMseNacosConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.containerServiceConfigs)) {
      $dara.Model.validateArray(this.containerServiceConfigs);
    }
    if(Array.isArray(this.functionConfigs)) {
      $dara.Model.validateArray(this.functionConfigs);
    }
    if(Array.isArray(this.mseNacosConfigs)) {
      $dara.Model.validateArray(this.mseNacosConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoDnsConfigs extends $dara.Model {
  dnsList?: string[];
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'dnsList',
      match: 'match',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: { 'type': 'array', 'itemType': 'string' },
      match: HttpApiBackendMatchConditions,
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dnsList)) {
      $dara.Model.validateArray(this.dnsList);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoEnvironmentInfoGatewayInfo extends $dara.Model {
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @example
   * 实例1
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

export class HttpApiPublishRevisionInfoEnvironmentInfo extends $dara.Model {
  /**
   * @example
   * 测试
   */
  alias?: string;
  /**
   * @example
   * env-xxx
   */
  environmentId?: string;
  gatewayInfo?: HttpApiPublishRevisionInfoEnvironmentInfoGatewayInfo;
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      environmentId: 'string',
      gatewayInfo: HttpApiPublishRevisionInfoEnvironmentInfoGatewayInfo,
      name: 'string',
    };
  }

  validate() {
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPublishRevisionInfoServiceConfigs extends $dara.Model {
  /**
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
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
      port: 'port',
      protocol: 'protocol',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      port: 'number',
      protocol: 'string',
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

export class HttpApiPublishRevisionInfoVipConfigs extends $dara.Model {
  endpoints?: string[];
  match?: HttpApiBackendMatchConditions;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      match: 'match',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': 'string' },
      match: HttpApiBackendMatchConditions,
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRequestContractBody extends $dara.Model {
  /**
   * @example
   * application/json
   */
  contentType?: string;
  description?: string;
  /**
   * @example
   * {"key":"value"}
   */
  example?: string;
  jsonSchema?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      description: 'description',
      example: 'example',
      jsonSchema: 'jsonSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      description: 'string',
      example: 'string',
      jsonSchema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiResponseContractItems extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 正常接口响应
   */
  description?: string;
  /**
   * @example
   * {"result": "ok"}
   */
  example?: string;
  jsonSchema?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      example: 'example',
      jsonSchema: 'jsonSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      example: 'string',
      jsonSchema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpDubboTranscoderMothedMapListParamMapsList extends $dara.Model {
  /**
   * @example
   * name
   */
  extractKey?: string;
  /**
   * @example
   * ALL_QUERY_PARAMETER
   */
  extractKeySpec?: string;
  /**
   * @example
   * java.lang.String
   */
  mappingType?: string;
  static names(): { [key: string]: string } {
    return {
      extractKey: 'extractKey',
      extractKeySpec: 'extractKeySpec',
      mappingType: 'mappingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractKey: 'string',
      extractKeySpec: 'string',
      mappingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpDubboTranscoderMothedMapList extends $dara.Model {
  dubboMothedName?: string;
  /**
   * @example
   * ALL_GET
   */
  httpMothed?: string;
  /**
   * @example
   * /mytestzbk/sayhello
   */
  mothedpath?: string;
  paramMapsList?: HttpDubboTranscoderMothedMapListParamMapsList[];
  /**
   * @example
   * PASS_NOT
   */
  passThroughAllHeaders?: string;
  passThroughList?: string[];
  static names(): { [key: string]: string } {
    return {
      dubboMothedName: 'dubboMothedName',
      httpMothed: 'httpMothed',
      mothedpath: 'mothedpath',
      paramMapsList: 'paramMapsList',
      passThroughAllHeaders: 'passThroughAllHeaders',
      passThroughList: 'passThroughList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboMothedName: 'string',
      httpMothed: 'string',
      mothedpath: 'string',
      paramMapsList: { 'type': 'array', 'itemType': HttpDubboTranscoderMothedMapListParamMapsList },
      passThroughAllHeaders: 'string',
      passThroughList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.paramMapsList)) {
      $dara.Model.validateArray(this.paramMapsList);
    }
    if(Array.isArray(this.passThroughList)) {
      $dara.Model.validateArray(this.passThroughList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteDomainInfos extends $dara.Model {
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

export class HttpRouteEnvironmentInfoGatewayInfo extends $dara.Model {
  gatewayId?: string;
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

export class HttpRouteEnvironmentInfoSubDomains extends $dara.Model {
  domainId?: string;
  name?: string;
  /**
   * @example
   * Internet
   */
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

export class HttpRouteEnvironmentInfo extends $dara.Model {
  alias?: string;
  environmentId?: string;
  gatewayInfo?: HttpRouteEnvironmentInfoGatewayInfo;
  name?: string;
  subDomains?: HttpRouteEnvironmentInfoSubDomains[];
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      subDomains: 'subDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      environmentId: 'string',
      gatewayInfo: HttpRouteEnvironmentInfoGatewayInfo,
      name: 'string',
      subDomains: { 'type': 'array', 'itemType': HttpRouteEnvironmentInfoSubDomains },
    };
  }

  validate() {
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
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

export class HttpRouteMatchHeaders extends $dara.Model {
  /**
   * @example
   * dev
   */
  name?: string;
  /**
   * @example
   * Exact
   */
  type?: string;
  /**
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class HttpRouteMatchPath extends $dara.Model {
  /**
   * @example
   * Prefix
   */
  type?: string;
  /**
   * @example
   * /user
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class HttpRouteMatchQueryParams extends $dara.Model {
  /**
   * @example
   * age
   */
  name?: string;
  /**
   * @example
   * Exact
   */
  type?: string;
  /**
   * @example
   * 17
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class JwtIdentityConfigJwtPayloadConfig extends $dara.Model {
  payloadKeyName?: string;
  payloadKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      payloadKeyName: 'payloadKeyName',
      payloadKeyValue: 'payloadKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payloadKeyName: 'string',
      payloadKeyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JwtIdentityConfigJwtTokenConfig extends $dara.Model {
  key?: string;
  pass?: boolean;
  position?: string;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      pass: 'pass',
      position: 'position',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      pass: 'boolean',
      position: 'string',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServicePorts extends $dara.Model {
  name?: string;
  port?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      port: 'number',
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

export class TlsCipherSuitesConfigTlsCipherSuite extends $dara.Model {
  name?: string;
  supportVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      supportVersions: 'supportVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      supportVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportVersions)) {
      $dara.Model.validateArray(this.supportVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Domain ID.
   * 
   * @example
   * d-cpu1aullhtgkidg7sa4g
   */
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
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

export class CreateHttpApiRequestIngressConfig extends $dara.Model {
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * env-cq146allhtgk***
   */
  environmentId?: string;
  /**
   * @remarks
   * Ingress Class being listened to.
   * 
   * @example
   * mse
   */
  ingressClass?: string;
  /**
   * @remarks
   * Whether to update the address in the Ingress Status.
   * 
   * @example
   * false
   */
  overrideIngressIp?: boolean;
  /**
   * @remarks
   * Source ID.
   * 
   * @example
   * src-crdddallhtgtr***
   */
  sourceId?: string;
  /**
   * @remarks
   * Namespace being watched.
   * 
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      ingressClass: 'ingressClass',
      overrideIngressIp: 'overrideIngressIp',
      sourceId: 'sourceId',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      ingressClass: 'string',
      overrideIngressIp: 'boolean',
      sourceId: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * HTTP API ID.
   * 
   * @example
   * api-xxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * Name of the API.
   * 
   * @example
   * test-api
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      httpApiId: 'httpApiId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpApiId: 'string',
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

export class CreateHttpApiOperationResponseBodyDataOperations extends $dara.Model {
  /**
   * @remarks
   * Operation ID.
   * 
   * @example
   * op-xxx
   */
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'operationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiOperationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Operation information.
   */
  operations?: CreateHttpApiOperationResponseBodyDataOperations[];
  static names(): { [key: string]: string } {
    return {
      operations: 'operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operations: { 'type': 'array', 'itemType': CreateHttpApiOperationResponseBodyDataOperations },
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteRequestBackendConfigServices extends $dara.Model {
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
   * svc-crbgq0dlhtgr***
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version. Pass this parameter for tag-based routing.
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

export class CreateHttpApiRouteRequestBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The scenario of the backend service.
   * 
   * *   SingleService
   * *   MultiServiceByRatio
   * *   Mock
   * *   Redirect
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * The backend services.
   */
  services?: CreateHttpApiRouteRequestBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': CreateHttpApiRouteRequestBackendConfigServices },
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

export class CreateHttpApiRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * hr-cr82undlhtgrlej***
   */
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * p-cq7l5s5lhtgi6qasr***
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyAttachmentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Policy Mount ID
   * 
   * @example
   * pr-cqooju5lhtgquuj6***
   */
  policyAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      policyAttachmentId: 'policyAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyAttachmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * List of domain names or fixed addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * AI service configuration.
   */
  aiServiceConfig?: AiServiceConfig;
  /**
   * @remarks
   * List of DNS server addresses.
   */
  dnsServers?: string[];
  /**
   * @remarks
   * Service group name.
   * Needs to be specified when `sourceType` is MSE_NACOS.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * user-service
   */
  name?: string;
  /**
   * @remarks
   * Namespace of the service:
   * 
   * - When `sourceType` is K8S, it represents the namespace where the K8S service is located.
   * - When `sourceType` is MSE_NACOS, it represents the namespace in Nacos.
   * 
   * It needs to be specified when `sourceType` is K8S or MSE_NACOS.
   * 
   * @example
   * PUBLIC
   */
  namespace?: string;
  /**
   * @remarks
   * Function version or alias.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      aiServiceConfig: 'aiServiceConfig',
      dnsServers: 'dnsServers',
      groupName: 'groupName',
      name: 'name',
      namespace: 'namespace',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      aiServiceConfig: AiServiceConfig,
      dnsServers: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      qualifier: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.aiServiceConfig && typeof (this.aiServiceConfig as any).validate === 'function') {
      (this.aiServiceConfig as any).validate();
    }
    if(Array.isArray(this.dnsServers)) {
      $dara.Model.validateArray(this.dnsServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of service IDs.
   */
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

export class DeployHttpApiRequestRestApiConfigEnvironmentServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * Configuration of matching conditions related to API deployment.
   */
  match?: HttpApiBackendMatchConditions;
  /**
   * @remarks
   * Service port, do not provide for dynamic ports.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * Service protocol:
   * - HTTP.
   * - HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * Service ID.
   * 
   * @example
   * svc-cr6pk4tlhtgm58e***
   */
  serviceId?: string;
  /**
   * @remarks
   * Service version.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * Weight, range [1,100], valid only in the by-ratio scenario.
   * 
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      port: 'port',
      protocol: 'protocol',
      serviceId: 'serviceId',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: HttpApiBackendMatchConditions,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHttpApiRequestRestApiConfigEnvironment extends $dara.Model {
  /**
   * @remarks
   * API publication scenario.
   * 
   * @example
   * SingleService
   */
  backendScene?: string;
  /**
   * @remarks
   * List of user domains.
   */
  customDomainIds?: string[];
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * env-cpqnr6tlhtgubc***
   */
  environmentId?: string;
  /**
   * @remarks
   * Existing service configurations. Only one entry is allowed in a single-service scenario, while multiple entries are allowed in scenarios such as by ratio or by content.
   */
  serviceConfigs?: DeployHttpApiRequestRestApiConfigEnvironmentServiceConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendScene: 'backendScene',
      customDomainIds: 'customDomainIds',
      environmentId: 'environmentId',
      serviceConfigs: 'serviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendScene: 'string',
      customDomainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': DeployHttpApiRequestRestApiConfigEnvironmentServiceConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.customDomainIds)) {
      $dara.Model.validateArray(this.customDomainIds);
    }
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHttpApiRequestRestApiConfig extends $dara.Model {
  /**
   * @remarks
   * Publication description.
   * 
   * @example
   * 用户服务API发布。
   */
  description?: string;
  /**
   * @remarks
   * Publication environment configuration.
   */
  environment?: DeployHttpApiRequestRestApiConfigEnvironment;
  /**
   * @remarks
   * Historical version number. If this field is specified, the publication information will be based on the historical version information.
   * 
   * @example
   * apr-xxx
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      environment: 'environment',
      revisionId: 'revisionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      environment: DeployHttpApiRequestRestApiConfigEnvironment,
      revisionId: 'string',
    };
  }

  validate() {
    if(this.environment && typeof (this.environment as any).validate === 'function') {
      (this.environment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportHttpApiResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Base64编码的API定义。
   * 
   * @example
   * b3BlbmFwaTogMy4wLjAKaW5mbzoKICAgIHRpdGxlOiBkZW1vCiAgICBkZXNjcmlwdGlvbjogdGhpc2lzZGVtbwogICAgdmVyc2lvbjogIiIKcGF0aHM6CiAgICAvdXNlci97dXNlcklkfToKICAgICAgICBnZXQ6CiAgICAgICAgICAgIHN1bW1hcnk6IOiOt+WPlueUqOaIt+S/oeaBrwogICAgICAgICAgICBkZXNjcmlwdGlvbjog6I635Y+W55So5oi35L+h5oGvCiAgICAgICAgICAgIG9wZXJhdGlvbklkOiBHZXRVc2VySW5mbwogICAgICAgICAgICByZXNwb25zZXM6CiAgICAgICAgICAgICAgICAiMjAwIjoKICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjog5oiQ5YqfCiAgICAgICAgICAgICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBudWxsCnNlcnZlcnM6CiAgICAtIHVybDogaHR0cDovL2FwaS5leGFtcGxlLmNvbS92MQo=
   */
  specContentBase64?: string;
  static names(): { [key: string]: string } {
    return {
      specContentBase64: 'specContentBase64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specContentBase64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardRequestFilter extends $dara.Model {
  /**
   * @remarks
   * Route name
   * 
   * @example
   * test-route
   */
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      routeName: 'routeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Gateway unique identifier
   * 
   * @example
   * gw-co370icmjeu****
   */
  gatewayId?: string;
  /**
   * @remarks
   * Dashboard name
   * 
   * @example
   * PLUGIN
   */
  name?: string;
  /**
   * @remarks
   * Dashboard title
   * 
   * @example
   * APIG Plugin
   */
  title?: string;
  /**
   * @remarks
   * Dashboard URL link
   * 
   * @example
   * https://sls.console.aliyun.com/lognext/project/xxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      name: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBodyDataStatisticsInfo extends $dara.Model {
  /**
   * @remarks
   * The array of related resource infomations.
   */
  resourceStatistics?: ResourceStatistic[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      resourceStatistics: 'resourceStatistics',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceStatistics: { 'type': 'array', 'itemType': ResourceStatistic },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceStatistics)) {
      $dara.Model.validateArray(this.resourceStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Encryption algorithm name
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * CA certificate identifier
   * 
   * @example
   * 876****-cn-hangzhou
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * Certificate Identifier
   * 
   * @example
   * 645****-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * Certificate name
   * 
   * @example
   * test-cert
   */
  certName?: string;
  /**
   * @remarks
   * Client CA Cert
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/mpTQwDQYJKoZIhvcNAQEL
   * BxSbrGeJ8i0576Gn7Qezyho9abZOUhGaPeoB
   * AIHWWl428uUSG/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   * yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy+ZMJ8r4swA4swHwYDVR0jBBgwFoAU
   * qroVyYKk7ylhcSn+ZMJ8r4swA4swDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0B
   * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=
   * -----END CERTIFICATE-----
   */
  clientCACert?: string;
  /**
   * @remarks
   * Where it was created from.
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * Creation timestamp.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Whether it is the default domain.
   * 
   * @example
   * false
   */
  default?: boolean;
  /**
   * @remarks
   * Domain ID.
   * 
   * @example
   * d-cq1m3utlhtgvgkv7sitg
   */
  domainId?: string;
  /**
   * @remarks
   * Setting for HTTPS protocol type, whether to enable forced HTTPS redirection.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @remarks
   * HTTP/2 setting.
   * 
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @remarks
   * Certificate issuer.
   * 
   * @example
   * Alibaba
   */
  issuer?: string;
  /**
   * @remarks
   * true
   * 
   * @example
   * false
   */
  mTLSEnabled?: boolean;
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * abc.com
   */
  name?: string;
  /**
   * @remarks
   * Certificate expiration time.
   * 
   * @example
   * 1719386834548
   */
  notAfterTimstamp?: number;
  /**
   * @remarks
   * Certificate effective time.
   * 
   * @example
   * 1719386834548
   */
  notBeforeTimestamp?: number;
  /**
   * @remarks
   * The protocol types supported by the domain.
   * 
   * - HTTP: Supports only HTTP protocol.
   * - HTTPS: Supports only HTTPS protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzvlxzgo5b4si
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * All domain names bound to the certificate.
   * 
   * @example
   * aliyun.com
   */
  sans?: string;
  /**
   * @remarks
   * The array of domain related resource information
   */
  statisticsInfo?: GetDomainResponseBodyDataStatisticsInfo;
  /**
   * @remarks
   * The TLS cipher suites config.
   */
  tlsCipherSuitesConfig?: TlsCipherSuitesConfig;
  /**
   * @remarks
   * Maximum TLS protocol version, supports up to TLS 1.3.
   * 
   * @example
   * TLS 1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * Minimum TLS protocol version, supports down to TLS 1.0.
   * 
   * @example
   * TLS 1.0
   */
  tlsMin?: string;
  /**
   * @remarks
   * Update timestamp.
   * 
   * @example
   * 1719386834548
   */
  updatetimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      caCertIdentifier: 'caCertIdentifier',
      certIdentifier: 'certIdentifier',
      certName: 'certName',
      clientCACert: 'clientCACert',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      default: 'default',
      domainId: 'domainId',
      forceHttps: 'forceHttps',
      http2Option: 'http2Option',
      issuer: 'issuer',
      mTLSEnabled: 'mTLSEnabled',
      name: 'name',
      notAfterTimstamp: 'notAfterTimstamp',
      notBeforeTimestamp: 'notBeforeTimestamp',
      protocol: 'protocol',
      resourceGroupId: 'resourceGroupId',
      sans: 'sans',
      statisticsInfo: 'statisticsInfo',
      tlsCipherSuitesConfig: 'tlsCipherSuitesConfig',
      tlsMax: 'tlsMax',
      tlsMin: 'tlsMin',
      updatetimestamp: 'updatetimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      caCertIdentifier: 'string',
      certIdentifier: 'string',
      certName: 'string',
      clientCACert: 'string',
      createFrom: 'string',
      createTimestamp: 'number',
      default: 'boolean',
      domainId: 'string',
      forceHttps: 'boolean',
      http2Option: 'string',
      issuer: 'string',
      mTLSEnabled: 'boolean',
      name: 'string',
      notAfterTimstamp: 'number',
      notBeforeTimestamp: 'number',
      protocol: 'string',
      resourceGroupId: 'string',
      sans: 'string',
      statisticsInfo: GetDomainResponseBodyDataStatisticsInfo,
      tlsCipherSuitesConfig: TlsCipherSuitesConfig,
      tlsMax: 'string',
      tlsMin: 'string',
      updatetimestamp: 'number',
    };
  }

  validate() {
    if(this.statisticsInfo && typeof (this.statisticsInfo as any).validate === 'function') {
      (this.statisticsInfo as any).validate();
    }
    if(this.tlsCipherSuitesConfig && typeof (this.tlsCipherSuitesConfig as any).validate === 'function') {
      (this.tlsCipherSuitesConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBodyDataStatisticsInfo extends $dara.Model {
  /**
   * @remarks
   * The array of related resource information.
   */
  resourceStatistics?: ResourceStatistic[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      resourceStatistics: 'resourceStatistics',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceStatistics: { 'type': 'array', 'itemType': ResourceStatistic },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceStatistics)) {
      $dara.Model.validateArray(this.resourceStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Environment alias.
   * 
   * @example
   * 测试环境
   */
  alias?: string;
  /**
   * @remarks
   * Creation timestamp.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Whether it is the default environment.
   * 
   * @example
   * true
   */
  default?: boolean;
  /**
   * @remarks
   * Environment description.
   * 
   * @example
   * 这是xxx的xx项目测试环境
   */
  description?: string;
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * Gateway information
   */
  gatewayInfo?: GatewayInfo;
  /**
   * @remarks
   * Environment name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzzzntl5njbpi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Related resource information.
   */
  statisticsInfo?: GetEnvironmentResponseBodyDataStatisticsInfo;
  /**
   * @remarks
   * List of subdomains.
   */
  subDomainInfos?: SubDomainInfo[];
  /**
   * @remarks
   * Update timestamp.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      createTimestamp: 'createTimestamp',
      default: 'default',
      description: 'description',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      statisticsInfo: 'statisticsInfo',
      subDomainInfos: 'subDomainInfos',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createTimestamp: 'number',
      default: 'boolean',
      description: 'string',
      environmentId: 'string',
      gatewayInfo: GatewayInfo,
      name: 'string',
      resourceGroupId: 'string',
      statisticsInfo: GetEnvironmentResponseBodyDataStatisticsInfo,
      subDomainInfos: { 'type': 'array', 'itemType': SubDomainInfo },
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(this.statisticsInfo && typeof (this.statisticsInfo as any).validate === 'function') {
      (this.statisticsInfo as any).validate();
    }
    if(Array.isArray(this.subDomainInfos)) {
      $dara.Model.validateArray(this.subDomainInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataEnvironments extends $dara.Model {
  /**
   * @remarks
   * The environment alias.
   * 
   * @example
   * 默认环境
   */
  alias?: string;
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * env-cp9uhudlht***
   */
  environmentId?: string;
  /**
   * @remarks
   * The environment name。
   * 
   * @example
   * default-gw-cp9ugg5***
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      environmentId: 'environmentId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      environmentId: 'string',
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

export class GetGatewayResponseBodyDataLoadBalancersPorts extends $dara.Model {
  /**
   * @remarks
   * Port number.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * Protocol:
   * - TCP
   * - UDP
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
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

export class GetGatewayResponseBodyDataLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * The address of the load balancer.
   * 
   * @example
   * nlb-xoh3pghr***.cn-hangzhou.nlb.aliyuncs.com
   */
  address?: string;
  /**
   * @remarks
   * The IP version of the protocol:
   * - ipv4: IPv4 type.
   * - ipv6: IPv6 type.
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Load balancer address type:
   * - Internet: Public.
   * - Intranet: Private.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * Whether it is the default entry address for the gateway.
   * 
   * @example
   * true
   */
  gatewayDefault?: boolean;
  /**
   * @remarks
   * Load balancer ID.
   * 
   * @example
   * nlb-xoh3pghru7c***
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The provision mode of the load balancer for the gateway:
   * - Managed: Managed by the Cloud Native API Gateway.
   * 
   * @example
   * Managed
   */
  mode?: string;
  /**
   * @remarks
   * List of listening ports.
   */
  ports?: GetGatewayResponseBodyDataLoadBalancersPorts[];
  /**
   * @remarks
   * The status of the load balancer:
   * - Ready: Available.
   * - NotCreate: Not associated with an instance.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The type of load balancer:
   * - NLB: Network Load Balancer.
   * - CLB: Classic Load Balancer.
   * 
   * @example
   * NLB
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      addressIpVersion: 'addressIpVersion',
      addressType: 'addressType',
      gatewayDefault: 'gatewayDefault',
      loadBalancerId: 'loadBalancerId',
      mode: 'mode',
      ports: 'ports',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      gatewayDefault: 'boolean',
      loadBalancerId: 'string',
      mode: 'string',
      ports: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataLoadBalancersPorts },
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataSecurityGroup extends $dara.Model {
  /**
   * @remarks
   * Security group name.
   * 
   * @example
   * APIG-sg-gw-cq7ke5ll***
   */
  name?: string;
  /**
   * @remarks
   * Security group ID.
   * 
   * @example
   * sg-bp16tafq9***
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      securityGroupId: 'securityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * zhangsan
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetGatewayResponseBodyDataVSwitch extends $dara.Model {
  /**
   * @remarks
   * Virtual switch name.
   * 
   * @example
   * 杭州VPC虚拟交换机
   */
  name?: string;
  /**
   * @remarks
   * Virtual switch ID.
   * 
   * @example
   * vsw-bp1c7ggkj***
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataVpc extends $dara.Model {
  /**
   * @remarks
   * VPC gateway name.
   * 
   * @example
   * 杭州VPC
   */
  name?: string;
  /**
   * @remarks
   * VPC network ID.
   * 
   * @example
   * vpc-bp1llj52lvj6xc***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataZonesVSwitch extends $dara.Model {
  /**
   * @remarks
   * Virtual switch name.
   * 
   * @example
   * 杭州VPC虚拟交换机
   */
  name?: string;
  /**
   * @remarks
   * Virtual switch ID.
   * 
   * @example
   * vsw-bp1c7ggkj***
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataZones extends $dara.Model {
  /**
   * @remarks
   * Availability zone name.
   * 
   * @example
   * 杭州可用区E
   */
  name?: string;
  /**
   * @remarks
   * Virtual switch.
   */
  vSwitch?: GetGatewayResponseBodyDataZonesVSwitch;
  /**
   * @remarks
   * Availability zone ID.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vSwitch: 'vSwitch',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vSwitch: GetGatewayResponseBodyDataZonesVSwitch,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.vSwitch && typeof (this.vSwitch as any).validate === 'function') {
      (this.vSwitch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Charge type
   * - POSTPAY: Postpaid (pay-as-you-go)
   * - PREPAY: Prepaid (subscription)
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * Source of gateway creation:
   * - Console: Console.
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * Creation timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * List of environments associated with the gateway.
   */
  environments?: GetGatewayResponseBodyDataEnvironments[];
  /**
   * @remarks
   * Expiration timestamp for subscription. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * Gateway ID.
   * 
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * List of entry addresses for the gateway.
   */
  loadBalancers?: GetGatewayResponseBodyDataLoadBalancers[];
  /**
   * @remarks
   * Gateway name.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * Number of gateway instance nodes.
   * 
   * @example
   * 2
   */
  replicas?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2s3cvc4jzfxi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group of the gateway.
   */
  securityGroup?: GetGatewayResponseBodyDataSecurityGroup;
  /**
   * @remarks
   * Gateway specification:
   * - apigw.small.x1: Small specification.
   * 
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
   * @remarks
   * Gateway status:
   * - Running: Running.
   * - Creating: Creating.
   * - CreateFailed: Creation failed.
   * - Upgrading: Upgrading.
   * - UpgradeFailed: Upgrade failed.
   * - Restarting: Restarting.
   * - RestartFailed: Restart failed.
   * - Deleting: Deleting.
   * - DeleteFailed: Deletion failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tags?: GetGatewayResponseBodyDataTags[];
  /**
   * @remarks
   * Target version of the gateway. When it is inconsistent with the current version, an upgrade can be performed.
   * 
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @remarks
   * Update timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The virtual switch associated with the gateway.
   */
  vSwitch?: GetGatewayResponseBodyDataVSwitch;
  /**
   * @remarks
   * Gateway version.
   * 
   * @example
   * 2.0.2
   */
  version?: string;
  /**
   * @remarks
   * The VPC (Virtual Private Cloud) associated with the gateway.
   */
  vpc?: GetGatewayResponseBodyDataVpc;
  /**
   * @remarks
   * List of availability zones associated with the gateway.
   */
  zones?: GetGatewayResponseBodyDataZones[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      environments: 'environments',
      expireTimestamp: 'expireTimestamp',
      gatewayId: 'gatewayId',
      loadBalancers: 'loadBalancers',
      name: 'name',
      replicas: 'replicas',
      resourceGroupId: 'resourceGroupId',
      securityGroup: 'securityGroup',
      spec: 'spec',
      status: 'status',
      tags: 'tags',
      targetVersion: 'targetVersion',
      updateTimestamp: 'updateTimestamp',
      vSwitch: 'vSwitch',
      version: 'version',
      vpc: 'vpc',
      zones: 'zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createFrom: 'string',
      createTimestamp: 'number',
      environments: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataEnvironments },
      expireTimestamp: 'number',
      gatewayId: 'string',
      loadBalancers: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataLoadBalancers },
      name: 'string',
      replicas: 'string',
      resourceGroupId: 'string',
      securityGroup: GetGatewayResponseBodyDataSecurityGroup,
      spec: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataTags },
      targetVersion: 'string',
      updateTimestamp: 'number',
      vSwitch: GetGatewayResponseBodyDataVSwitch,
      version: 'string',
      vpc: GetGatewayResponseBodyDataVpc,
      zones: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataZones },
    };
  }

  validate() {
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    if(Array.isArray(this.loadBalancers)) {
      $dara.Model.validateArray(this.loadBalancers);
    }
    if(this.securityGroup && typeof (this.securityGroup as any).validate === 'function') {
      (this.securityGroup as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.vSwitch && typeof (this.vSwitch as any).validate === 'function') {
      (this.vSwitch as any).validate();
    }
    if(this.vpc && typeof (this.vpc as any).validate === 'function') {
      (this.vpc as any).validate();
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAttachmentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Attached Resource ID
   * 
   * @example
   * op-csbkd9llhtgqhqua***
   */
  attachResourceId?: string;
  /**
   * @remarks
   * Attached resource type, HttpApi, GatewayRoute, Operation, GatewayService, GatewayServicePort, Gateway, Domain
   * 
   * @example
   * Operation
   */
  attachResourceType?: string;
  /**
   * @remarks
   * Policy attachment configuration
   * 
   * @example
   * {"unitNum":1,"timeUnit":"s","enable":true}
   */
  config?: string;
  /**
   * @remarks
   * Environment ID
   * 
   * @example
   * env-cq7l5s5lhtgi6qa***
   */
  environmentId?: string;
  /**
   * @remarks
   * Gateway Instance ID
   * 
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * Policy Attachment ID
   * 
   * @example
   * pr-cqoojualhtgquuj***
   */
  policyAttachmentId?: string;
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * p-cq7l5s5bblhtgi6qas***
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceId: 'attachResourceId',
      attachResourceType: 'attachResourceType',
      config: 'config',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      policyAttachmentId: 'policyAttachmentId',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceId: 'string',
      attachResourceType: 'string',
      config: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      policyAttachmentId: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceOverviewResponseBodyDataApi extends $dara.Model {
  /**
   * @remarks
   * Number of published APIs.
   * 
   * @example
   * 1
   */
  publishedCount?: number;
  /**
   * @remarks
   * Number of APIs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      publishedCount: 'publishedCount',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishedCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceOverviewResponseBodyDataGateway extends $dara.Model {
  /**
   * @remarks
   * Number of running gateways.
   * 
   * @example
   * 1
   */
  runningCount?: number;
  /**
   * @remarks
   * Number of gateway instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      runningCount: 'runningCount',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runningCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceOverviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * API information.
   */
  api?: GetResourceOverviewResponseBodyDataApi;
  /**
   * @remarks
   * Gateway information.
   */
  gateway?: GetResourceOverviewResponseBodyDataGateway;
  static names(): { [key: string]: string } {
    return {
      api: 'api',
      gateway: 'gateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: GetResourceOverviewResponseBodyDataApi,
      gateway: GetResourceOverviewResponseBodyDataGateway,
    };
  }

  validate() {
    if(this.api && typeof (this.api as any).validate === 'function') {
      (this.api as any).validate();
    }
    if(this.gateway && typeof (this.gateway as any).validate === 'function') {
      (this.gateway as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Whether to Enable Tracing:
   * true: Enabled
   * false: Disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Sampling Rate
   * 
   * @example
   * 50
   */
  sampleRatio?: number;
  /**
   * @remarks
   * Service ID, present when the tracing type is SKYWALKING
   * 
   * @example
   * ss-co370icmjeu****
   */
  serviceId?: string;
  /**
   * @remarks
   * 服务端口，链路追踪类型为SKYWALKING时存在该参数
   * 
   * @example
   * 8090
   */
  servicePort?: string;
  /**
   * @remarks
   * Tracing Type:
   * - XTRACE
   * - SKYWALKING
   * - OPENTELEMETRY
   * - OTSKYWALKING
   * 
   * @example
   * SKYWALKING
   */
  traceType?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      sampleRatio: 'sampleRatio',
      serviceId: 'serviceId',
      servicePort: 'servicePort',
      traceType: 'traceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      sampleRatio: 'number',
      serviceId: 'string',
      servicePort: 'string',
      traceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiRequestSpecOssConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket that stores the dictionary file.
   * 
   * @example
   * api-1
   */
  bucketName?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /test/swagger.json
   */
  objectKey?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      objectKey: 'objectKey',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      objectKey: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiResponseBodyDataDryRunInfoFailureComponents extends $dara.Model {
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * 数据结构定义有误。
   */
  errorMessage?: string;
  /**
   * @remarks
   * 数据结构名称。
   * 
   * @example
   * orderDTO
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
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

export class ImportHttpApiResponseBodyDataDryRunInfoFailureOperations extends $dara.Model {
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 缺少响应定义。
   */
  errorMessage?: string;
  /**
   * @remarks
   * API method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * API path.
   * 
   * @example
   * /v1/orders
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      method: 'method',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      method: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents extends $dara.Model {
  /**
   * @remarks
   * Action to be executed after the precheck.
   * - Create: Create
   * - Update: Update
   * 
   * @example
   * Create
   */
  action?: string;
  /**
   * @remarks
   * Data structure name.
   * 
   * @example
   * userDTO
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
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

export class ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations extends $dara.Model {
  /**
   * @remarks
   * Action to be executed after the precheck.
   * - Create: Create
   * - Update: Update
   * 
   * @example
   * Create
   */
  action?: string;
  /**
   * @remarks
   * API method.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * API name.
   * 
   * @example
   * CreateUser
   */
  name?: string;
  /**
   * @remarks
   * API path.
   * 
   * @example
   * /v1/users
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      method: 'method',
      name: 'name',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      method: 'string',
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiResponseBodyDataDryRunInfo extends $dara.Model {
  /**
   * @remarks
   * Error messages. If there are any error messages, the API cannot be imported successfully.
   */
  errorMessages?: string[];
  /**
   * @remarks
   * 已存在的API信息。若该字段非空，则导入动作将更新该API。
   */
  existHttpApiInfo?: HttpApiApiInfo;
  /**
   * @remarks
   * List of data structures that failed the precheck.
   */
  failureComponents?: ImportHttpApiResponseBodyDataDryRunInfoFailureComponents[];
  /**
   * @remarks
   * List of APIs that failed the precheck.
   */
  failureOperations?: ImportHttpApiResponseBodyDataDryRunInfoFailureOperations[];
  /**
   * @remarks
   * List of data structures that passed the precheck.
   */
  successComponents?: ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents[];
  /**
   * @remarks
   * List of successfully pre-checked interfaces.
   */
  successOperations?: ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations[];
  /**
   * @remarks
   * Warning messages. If there are any warning messages, some interfaces or data interfaces may not be imported successfully.
   */
  warningMessages?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMessages: 'errorMessages',
      existHttpApiInfo: 'existHttpApiInfo',
      failureComponents: 'failureComponents',
      failureOperations: 'failureOperations',
      successComponents: 'successComponents',
      successOperations: 'successOperations',
      warningMessages: 'warningMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessages: { 'type': 'array', 'itemType': 'string' },
      existHttpApiInfo: HttpApiApiInfo,
      failureComponents: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoFailureComponents },
      failureOperations: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoFailureOperations },
      successComponents: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents },
      successOperations: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations },
      warningMessages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.errorMessages)) {
      $dara.Model.validateArray(this.errorMessages);
    }
    if(this.existHttpApiInfo && typeof (this.existHttpApiInfo as any).validate === 'function') {
      (this.existHttpApiInfo as any).validate();
    }
    if(Array.isArray(this.failureComponents)) {
      $dara.Model.validateArray(this.failureComponents);
    }
    if(Array.isArray(this.failureOperations)) {
      $dara.Model.validateArray(this.failureOperations);
    }
    if(Array.isArray(this.successComponents)) {
      $dara.Model.validateArray(this.successComponents);
    }
    if(Array.isArray(this.successOperations)) {
      $dara.Model.validateArray(this.successOperations);
    }
    if(Array.isArray(this.warningMessages)) {
      $dara.Model.validateArray(this.warningMessages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Pre-import check result.
   */
  dryRunInfo?: ImportHttpApiResponseBodyDataDryRunInfo;
  /**
   * @remarks
   * HTTP API ID.
   * 
   * @example
   * api-xxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * API name.
   * 
   * @example
   * import-test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunInfo: 'dryRunInfo',
      httpApiId: 'httpApiId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunInfo: ImportHttpApiResponseBodyDataDryRunInfo,
      httpApiId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.dryRunInfo && typeof (this.dryRunInfo as any).validate === 'function') {
      (this.dryRunInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of domain information.
   */
  items?: DomainInfo[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 9
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DomainInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of environment information.
   */
  items?: EnvironmentInfo[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 25
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': EnvironmentInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * zhangsan
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListGatewaysResponseBodyDataItemsLoadBalancersPorts extends $dara.Model {
  /**
   * @remarks
   * Port number.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * Protocol:
   * - TCP
   * - UDP
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
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

export class ListGatewaysResponseBodyDataItemsLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * Load balancer address.
   * 
   * @example
   * nlb-xoh3pghr***.cn-hangzhou.nlb.aliyuncs.com
   */
  address?: string;
  /**
   * @remarks
   * IP version:
   * - ipv4: IPv4.
   * - ipv6: IPv6.
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Load balancer address type:
   * - Internet: Public network.
   * - Intranet: Private network.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * Indicates whether this is the default entry address for the gateway.
   * 
   * @example
   * true
   */
  gatewayDefault?: boolean;
  /**
   * @remarks
   * Load balancer ID.
   * 
   * @example
   * nlb-xqwioje1c91r***
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * Load balancer provision mode for the gateway:
   * - Managed: Managed by the Cloud Native API Gateway.
   * 
   * @example
   * Managed
   */
  mode?: string;
  /**
   * @remarks
   * List of listening ports.
   */
  ports?: ListGatewaysResponseBodyDataItemsLoadBalancersPorts[];
  /**
   * @remarks
   * Status of the load balancer:
   * - Ready: Available.
   * - NotCreate: No associated instance.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * Type of load balancer for the gateway:
   * - NLB: Network Load Balancer.
   * - CLB: Classic Load Balancer.
   * 
   * @example
   * NLB
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      addressIpVersion: 'addressIpVersion',
      addressType: 'addressType',
      gatewayDefault: 'gatewayDefault',
      loadBalancerId: 'loadBalancerId',
      mode: 'mode',
      ports: 'ports',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      gatewayDefault: 'boolean',
      loadBalancerId: 'string',
      mode: 'string',
      ports: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsLoadBalancersPorts },
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsSecurityGroup extends $dara.Model {
  /**
   * @remarks
   * The Security Group ID.
   * 
   * @example
   * sg-xxxx
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'securityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * zhangsan
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListGatewaysResponseBodyDataItemsVSwitch extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxxxx
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsVpc extends $dara.Model {
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-xxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsZonesVSwitch extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxxxx
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsZones extends $dara.Model {
  /**
   * @remarks
   * The vSwitch.
   */
  vSwitch?: ListGatewaysResponseBodyDataItemsZonesVSwitch;
  /**
   * @remarks
   * The ID of the current zone.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'vSwitch',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: ListGatewaysResponseBodyDataItemsZonesVSwitch,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.vSwitch && typeof (this.vSwitch as any).validate === 'function') {
      (this.vSwitch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * Charge type
   * 
   * - POSTPAY: Postpaid (pay-as-you-go)
   * - PREPAY: Prepaid (subscription)
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * Source of gateway creation:
   * - Console: Console.
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * Creation timestamp, in milliseconds.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Expiration timestamp for prepaid (annual or monthly) subscriptions. Unit: milliseconds.
   * 
   * @example
   * 172086834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * Gateway ID.
   * 
   * @example
   * gw-cpv54p5***
   */
  gatewayId?: string;
  /**
   * @remarks
   * List of gateway entry addresses.
   */
  loadBalancers?: ListGatewaysResponseBodyDataItemsLoadBalancers[];
  /**
   * @remarks
   * Gateway name.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * Number of gateway instance nodes.
   * 
   * @example
   * 2
   */
  replicas?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Security Group.
   */
  securityGroup?: ListGatewaysResponseBodyDataItemsSecurityGroup;
  /**
   * @remarks
   * Gateway specification:
   * - apigw.small.x1: Small specification.
   * 
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
   * @remarks
   * Gateway status:
   * - Running: Running.
   * - Creating: Creating.
   * - CreateFailed: Creation failed.
   * - Upgrading: Upgrading.
   * - UpgradeFailed: Upgrade failed.
   * - Restarting: Restarting.
   * - RestartFailed: Restart failed.
   * - Deleting: Deleting.
   * - DeleteFailed: Deletion failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * List of sub domain information
   */
  subDomainInfos?: SubDomainInfo[];
  /**
   * @remarks
   * Array of tags.
   */
  tags?: ListGatewaysResponseBodyDataItemsTags[];
  /**
   * @remarks
   * Target version of the gateway. When it is inconsistent with the current `version`, an upgrade can be performed.
   * 
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @remarks
   * Update timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The vSwtich.
   */
  vSwitch?: ListGatewaysResponseBodyDataItemsVSwitch;
  /**
   * @remarks
   * Gateway version.
   * 
   * @example
   * 2.0.2
   */
  version?: string;
  /**
   * @remarks
   * The VPC.
   */
  vpc?: ListGatewaysResponseBodyDataItemsVpc;
  /**
   * @remarks
   * The Zones.
   */
  zones?: ListGatewaysResponseBodyDataItemsZones[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      expireTimestamp: 'expireTimestamp',
      gatewayId: 'gatewayId',
      loadBalancers: 'loadBalancers',
      name: 'name',
      replicas: 'replicas',
      resourceGroupId: 'resourceGroupId',
      securityGroup: 'securityGroup',
      spec: 'spec',
      status: 'status',
      subDomainInfos: 'subDomainInfos',
      tags: 'tags',
      targetVersion: 'targetVersion',
      updateTimestamp: 'updateTimestamp',
      vSwitch: 'vSwitch',
      version: 'version',
      vpc: 'vpc',
      zones: 'zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createFrom: 'string',
      createTimestamp: 'number',
      expireTimestamp: 'number',
      gatewayId: 'string',
      loadBalancers: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsLoadBalancers },
      name: 'string',
      replicas: 'string',
      resourceGroupId: 'string',
      securityGroup: ListGatewaysResponseBodyDataItemsSecurityGroup,
      spec: 'string',
      status: 'string',
      subDomainInfos: { 'type': 'array', 'itemType': SubDomainInfo },
      tags: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsTags },
      targetVersion: 'string',
      updateTimestamp: 'number',
      vSwitch: ListGatewaysResponseBodyDataItemsVSwitch,
      version: 'string',
      vpc: ListGatewaysResponseBodyDataItemsVpc,
      zones: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsZones },
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancers)) {
      $dara.Model.validateArray(this.loadBalancers);
    }
    if(this.securityGroup && typeof (this.securityGroup as any).validate === 'function') {
      (this.securityGroup as any).validate();
    }
    if(Array.isArray(this.subDomainInfos)) {
      $dara.Model.validateArray(this.subDomainInfos);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.vSwitch && typeof (this.vSwitch as any).validate === 'function') {
      (this.vSwitch as any).validate();
    }
    if(this.vpc && typeof (this.vpc as any).validate === 'function') {
      (this.vpc as any).validate();
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Gateway list
   */
  items?: ListGatewaysResponseBodyDataItems[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 6
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiOperationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of operations.
   */
  items?: HttpApiOperationInfo[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': HttpApiOperationInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiRoutesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of routes.
   */
  items?: HttpRoute[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 9
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': HttpRoute },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApisResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * API information.
   */
  items?: HttpApiInfoByName[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': HttpApiInfoByName },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyClassesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of policy templates
   */
  items?: PolicyClassInfo[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': PolicyClassInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Service list.
   */
  items?: Service[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 18
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Service },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSslCertsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of certificate information.
   */
  items?: SslCertMetaInfo[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': SslCertMetaInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * 可用区ID。
   * 
   * @example
   * cn-shenzhen-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of availability zones.
   */
  items?: ListZonesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListZonesResponseBodyDataItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Deploy revision id.
   * 
   * @example
   * apr-xxx
   */
  deployRevisionId?: string;
  static names(): { [key: string]: string } {
    return {
      deployRevisionId: 'deployRevisionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployRevisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiRequestIngressConfig extends $dara.Model {
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cr6ql0tlhtgmc****
   */
  environmentId?: string;
  /**
   * @remarks
   * The Ingress class for listening.
   * 
   * @example
   * mse
   */
  ingressClass?: string;
  /**
   * @remarks
   * Specifies whether to update the address in Ingress Status.
   * 
   * @example
   * false
   */
  overrideIngressIp?: boolean;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * src-crdddallhtgtr****
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
      environmentId: 'environmentId',
      ingressClass: 'ingressClass',
      overrideIngressIp: 'overrideIngressIp',
      sourceId: 'sourceId',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      ingressClass: 'string',
      overrideIngressIp: 'boolean',
      sourceId: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiRouteRequestBackendConfigServices extends $dara.Model {
  /**
   * @remarks
   * Service port, do not pass in for dynamic ports.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * Service protocol:
   * - HTTP.
   * - HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * Service ID.
   * 
   * @example
   * svc-cr6pk4tlhtgm58e***
   */
  serviceId?: string;
  /**
   * @remarks
   * Service version.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * Percentage value of traffic ratio.
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
   * Backend service scenario.
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * List of backend services.
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

export class AiServiceConfig extends $dara.Model {
  /**
   * @example
   * https://dashscope.aliyun.com
   */
  address?: string;
  apiKeys?: string[];
  enableHealthCheck?: boolean;
  protocols?: string[];
  /**
   * @example
   * qwen
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      apiKeys: 'apiKeys',
      enableHealthCheck: 'enableHealthCheck',
      protocols: 'protocols',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      enableHealthCheck: 'boolean',
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkSkIdentityConfig extends $dara.Model {
  ak?: string;
  generateMode?: string;
  sk?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'ak',
      generateMode: 'generateMode',
      sk: 'sk',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      generateMode: 'string',
      sk: 'string',
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

export class ApiKeyIdentityConfig extends $dara.Model {
  apikeySource?: ApiKeyIdentityConfigApikeySource;
  credentials?: ApiKeyIdentityConfigCredentials[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apikeySource: 'apikeySource',
      credentials: 'credentials',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikeySource: ApiKeyIdentityConfigApikeySource,
      credentials: { 'type': 'array', 'itemType': ApiKeyIdentityConfigCredentials },
      type: 'string',
    };
  }

  validate() {
    if(this.apikeySource && typeof (this.apikeySource as any).validate === 'function') {
      (this.apikeySource as any).validate();
    }
    if(Array.isArray(this.credentials)) {
      $dara.Model.validateArray(this.credentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApiRouteConflictInfo extends $dara.Model {
  conflicts?: ApiRouteConflictInfoConflicts[];
  domainInfo?: ApiRouteConflictInfoDomainInfo;
  static names(): { [key: string]: string } {
    return {
      conflicts: 'conflicts',
      domainInfo: 'domainInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflicts: { 'type': 'array', 'itemType': ApiRouteConflictInfoConflicts },
      domainInfo: ApiRouteConflictInfoDomainInfo,
    };
  }

  validate() {
    if(Array.isArray(this.conflicts)) {
      $dara.Model.validateArray(this.conflicts);
    }
    if(this.domainInfo && typeof (this.domainInfo as any).validate === 'function') {
      (this.domainInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Attachment extends $dara.Model {
  attachResourceIds?: string[];
  attachResourceType?: string;
  environmentId?: string;
  gatewayId?: string;
  policyAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceIds: 'attachResourceIds',
      attachResourceType: 'attachResourceType',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      policyAttachmentId: 'policyAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceIds: { 'type': 'array', 'itemType': 'string' },
      attachResourceType: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      policyAttachmentId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachResourceIds)) {
      $dara.Model.validateArray(this.attachResourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthConfig extends $dara.Model {
  authMode?: string;
  authType?: string;
  static names(): { [key: string]: string } {
    return {
      authMode: 'authMode',
      authType: 'authType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMode: 'string',
      authType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizationResourceInfo extends $dara.Model {
  environmentId?: string;
  parentResourceId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      parentResourceId: 'parentResourceId',
      resourceId: 'resourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      parentResourceId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Backend extends $dara.Model {
  /**
   * @example
   * Single
   */
  scene?: string;
  services?: BackendServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': BackendServices },
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

export class CheckServiceLinkedRoleResult extends $dara.Model {
  existed?: boolean;
  static names(): { [key: string]: string } {
    return {
      existed: 'existed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConsumerInfo extends $dara.Model {
  consumerId?: string;
  enable?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      enable: 'enable',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      enable: 'boolean',
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

export class DashboardFilter extends $dara.Model {
  /**
   * @example
   * test
   */
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      routeName: 'routeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DomainInfo extends $dara.Model {
  certIdentifier?: string;
  clientCACert?: string;
  createFrom?: string;
  createTimestamp?: number;
  domainId?: string;
  forceHttps?: boolean;
  mTLSEnabled?: boolean;
  name?: string;
  protocol?: string;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  status?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'certIdentifier',
      clientCACert: 'clientCACert',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      domainId: 'domainId',
      forceHttps: 'forceHttps',
      mTLSEnabled: 'mTLSEnabled',
      name: 'name',
      protocol: 'protocol',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      clientCACert: 'string',
      createFrom: 'string',
      createTimestamp: 'number',
      domainId: 'string',
      forceHttps: 'boolean',
      mTLSEnabled: 'boolean',
      name: 'string',
      protocol: 'string',
      resourceGroupId: 'string',
      status: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentInfo extends $dara.Model {
  alias?: string;
  createTimestamp?: number;
  default?: boolean;
  description?: string;
  environmentId?: string;
  gatewayInfo?: GatewayInfo;
  name?: string;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  subDomainInfos?: SubDomainInfo[];
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      createTimestamp: 'createTimestamp',
      default: 'default',
      description: 'description',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      subDomainInfos: 'subDomainInfos',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createTimestamp: 'number',
      default: 'boolean',
      description: 'string',
      environmentId: 'string',
      gatewayInfo: GatewayInfo,
      name: 'string',
      resourceGroupId: 'string',
      subDomainInfos: { 'type': 'array', 'itemType': SubDomainInfo },
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(Array.isArray(this.subDomainInfos)) {
      $dara.Model.validateArray(this.subDomainInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayInfo extends $dara.Model {
  engineVersion?: string;
  gatewayId?: string;
  name?: string;
  vpcInfo?: GatewayInfoVpcInfo;
  static names(): { [key: string]: string } {
    return {
      engineVersion: 'engineVersion',
      gatewayId: 'gatewayId',
      name: 'name',
      vpcInfo: 'vpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersion: 'string',
      gatewayId: 'string',
      name: 'string',
      vpcInfo: GatewayInfoVpcInfo,
    };
  }

  validate() {
    if(this.vpcInfo && typeof (this.vpcInfo as any).validate === 'function') {
      (this.vpcInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayLogConfig extends $dara.Model {
  slsConfig?: GatewayLogConfigSlsConfig;
  static names(): { [key: string]: string } {
    return {
      slsConfig: 'slsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsConfig: GatewayLogConfigSlsConfig,
    };
  }

  validate() {
    if(this.slsConfig && typeof (this.slsConfig as any).validate === 'function') {
      (this.slsConfig as any).validate();
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
  deployConfigs?: HttpApiDeployConfig[];
  description?: string;
  enabelAuth?: boolean;
  environments?: HttpApiApiInfoEnvironments[];
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
      deployConfigs: 'deployConfigs',
      description: 'description',
      enabelAuth: 'enabelAuth',
      environments: 'environments',
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
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      enabelAuth: 'boolean',
      environments: { 'type': 'array', 'itemType': HttpApiApiInfoEnvironments },
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

export class HttpApiBackendMatchCondition extends $dara.Model {
  /**
   * @example
   * color
   */
  key?: string;
  /**
   * @example
   * equal
   */
  operator?: string;
  /**
   * @example
   * Query
   */
  type?: string;
  /**
   * @example
   * gray
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
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

export class HttpApiBackendMatchConditions extends $dara.Model {
  conditions?: HttpApiBackendMatchCondition[];
  /**
   * @example
   * true
   */
  default?: boolean;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      default: 'default',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': HttpApiBackendMatchCondition },
      default: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
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
  /**
   * @example
   * env-xxx
   */
  environmentId?: string;
  policyConfigs?: HttpApiDeployConfigPolicyConfigs[];
  serviceConfigs?: HttpApiDeployConfigServiceConfigs[];
  static names(): { [key: string]: string } {
    return {
      autoDeploy: 'autoDeploy',
      backendScene: 'backendScene',
      customDomainIds: 'customDomainIds',
      environmentId: 'environmentId',
      policyConfigs: 'policyConfigs',
      serviceConfigs: 'serviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeploy: 'boolean',
      backendScene: 'string',
      customDomainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      policyConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfigPolicyConfigs },
      serviceConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfigServiceConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.customDomainIds)) {
      $dara.Model.validateArray(this.customDomainIds);
    }
    if(Array.isArray(this.policyConfigs)) {
      $dara.Model.validateArray(this.policyConfigs);
    }
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiDomainInfo extends $dara.Model {
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

export class HttpApiInfoByName extends $dara.Model {
  /**
   * @example
   * test-api
   */
  name?: string;
  /**
   * @example
   * Http
   */
  type?: string;
  /**
   * @example
   * true
   */
  versionEnabled?: boolean;
  versionedHttpApis?: HttpApiApiInfo[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      versionEnabled: 'versionEnabled',
      versionedHttpApis: 'versionedHttpApis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      versionEnabled: 'boolean',
      versionedHttpApis: { 'type': 'array', 'itemType': HttpApiApiInfo },
    };
  }

  validate() {
    if(Array.isArray(this.versionedHttpApis)) {
      $dara.Model.validateArray(this.versionedHttpApis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiMockContract extends $dara.Model {
  /**
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @example
   * 200
   */
  responseCode?: number;
  responseContent?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      responseCode: 'responseCode',
      responseContent: 'responseContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      responseCode: 'number',
      responseContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiOperation extends $dara.Model {
  authConfig?: AuthConfig;
  /**
   * @example
   * 获取用户信息
   */
  description?: string;
  enableAuth?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GET
   */
  method?: string;
  mock?: HttpApiMockContract;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GetUserInfo
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /user
   */
  path?: string;
  request?: HttpApiRequestContract;
  response?: HttpApiResponseContract;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      description: 'description',
      enableAuth: 'enableAuth',
      method: 'method',
      mock: 'mock',
      name: 'name',
      path: 'path',
      request: 'request',
      response: 'response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: AuthConfig,
      description: 'string',
      enableAuth: 'boolean',
      method: 'string',
      mock: HttpApiMockContract,
      name: 'string',
      path: 'string',
      request: HttpApiRequestContract,
      response: HttpApiResponseContract,
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.mock && typeof (this.mock as any).validate === 'function') {
      (this.mock as any).validate();
    }
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiOperationInfo extends $dara.Model {
  authConfig?: AuthConfig;
  /**
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @example
   * 获取用户信息
   */
  description?: string;
  enableAuth?: boolean;
  /**
   * @example
   * GET
   */
  method?: string;
  mock?: HttpApiMockContract;
  /**
   * @example
   * GetUserInfo
   */
  name?: string;
  /**
   * @example
   * op-xxx
   */
  operationId?: string;
  /**
   * @example
   * /user/123
   */
  path?: string;
  request?: HttpApiRequestContract;
  response?: HttpApiResponseContract;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      createTimestamp: 'createTimestamp',
      description: 'description',
      enableAuth: 'enableAuth',
      method: 'method',
      mock: 'mock',
      name: 'name',
      operationId: 'operationId',
      path: 'path',
      request: 'request',
      response: 'response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: AuthConfig,
      createTimestamp: 'number',
      description: 'string',
      enableAuth: 'boolean',
      method: 'string',
      mock: HttpApiMockContract,
      name: 'string',
      operationId: 'string',
      path: 'string',
      request: HttpApiRequestContract,
      response: HttpApiResponseContract,
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.mock && typeof (this.mock as any).validate === 'function') {
      (this.mock as any).validate();
    }
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiParameter extends $dara.Model {
  defaultValue?: string;
  description?: string;
  exampleValue?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      description: 'description',
      exampleValue: 'exampleValue',
      name: 'name',
      required: 'required',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      exampleValue: 'string',
      name: 'string',
      required: 'boolean',
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

export class HttpApiPublishRevisionInfo extends $dara.Model {
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
  cloudProductConfig?: HttpApiPublishRevisionInfoCloudProductConfig;
  /**
   * @example
   * 1718807057927
   */
  createTimestamp?: number;
  customDomains?: HttpApiDomainInfo[];
  dnsConfigs?: HttpApiPublishRevisionInfoDnsConfigs[];
  /**
   * @example
   * env-xxx
   */
  environmentInfo?: HttpApiPublishRevisionInfoEnvironmentInfo;
  /**
   * @example
   * true
   */
  isCurrentVersion?: boolean;
  operations?: HttpApiOperationInfo[];
  /**
   * @example
   * apr-xxx
   */
  revisionId?: string;
  serviceConfigs?: HttpApiPublishRevisionInfoServiceConfigs[];
  /**
   * @example
   * env-xxx.com
   */
  subDomains?: HttpApiDomainInfo[];
  vipConfigs?: HttpApiPublishRevisionInfoVipConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendScene: 'backendScene',
      backendType: 'backendType',
      cloudProductConfig: 'cloudProductConfig',
      createTimestamp: 'createTimestamp',
      customDomains: 'customDomains',
      dnsConfigs: 'dnsConfigs',
      environmentInfo: 'environmentInfo',
      isCurrentVersion: 'isCurrentVersion',
      operations: 'operations',
      revisionId: 'revisionId',
      serviceConfigs: 'serviceConfigs',
      subDomains: 'subDomains',
      vipConfigs: 'vipConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendScene: 'string',
      backendType: 'string',
      cloudProductConfig: HttpApiPublishRevisionInfoCloudProductConfig,
      createTimestamp: 'number',
      customDomains: { 'type': 'array', 'itemType': HttpApiDomainInfo },
      dnsConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoDnsConfigs },
      environmentInfo: HttpApiPublishRevisionInfoEnvironmentInfo,
      isCurrentVersion: 'boolean',
      operations: { 'type': 'array', 'itemType': HttpApiOperationInfo },
      revisionId: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoServiceConfigs },
      subDomains: { 'type': 'array', 'itemType': HttpApiDomainInfo },
      vipConfigs: { 'type': 'array', 'itemType': HttpApiPublishRevisionInfoVipConfigs },
    };
  }

  validate() {
    if(this.cloudProductConfig && typeof (this.cloudProductConfig as any).validate === 'function') {
      (this.cloudProductConfig as any).validate();
    }
    if(Array.isArray(this.customDomains)) {
      $dara.Model.validateArray(this.customDomains);
    }
    if(Array.isArray(this.dnsConfigs)) {
      $dara.Model.validateArray(this.dnsConfigs);
    }
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    if(Array.isArray(this.subDomains)) {
      $dara.Model.validateArray(this.subDomains);
    }
    if(Array.isArray(this.vipConfigs)) {
      $dara.Model.validateArray(this.vipConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiRequestContract extends $dara.Model {
  body?: HttpApiRequestContractBody;
  headerParameters?: HttpApiParameter[];
  pathParameters?: HttpApiParameter[];
  queryParameters?: HttpApiParameter[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      headerParameters: 'headerParameters',
      pathParameters: 'pathParameters',
      queryParameters: 'queryParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: HttpApiRequestContractBody,
      headerParameters: { 'type': 'array', 'itemType': HttpApiParameter },
      pathParameters: { 'type': 'array', 'itemType': HttpApiParameter },
      queryParameters: { 'type': 'array', 'itemType': HttpApiParameter },
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(Array.isArray(this.headerParameters)) {
      $dara.Model.validateArray(this.headerParameters);
    }
    if(Array.isArray(this.pathParameters)) {
      $dara.Model.validateArray(this.pathParameters);
    }
    if(Array.isArray(this.queryParameters)) {
      $dara.Model.validateArray(this.queryParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiResponseContract extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  items?: HttpApiResponseContractItems[];
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      items: { 'type': 'array', 'itemType': HttpApiResponseContractItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiVersionConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * my-version
   */
  headerName?: string;
  /**
   * @example
   * myVersion
   */
  queryName?: string;
  /**
   * @example
   * Query
   */
  scheme?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      headerName: 'headerName',
      queryName: 'queryName',
      scheme: 'scheme',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      headerName: 'string',
      queryName: 'string',
      scheme: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiVersionInfo extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * my-version
   */
  headerName?: string;
  /**
   * @example
   * myVersion
   */
  queryName?: string;
  /**
   * @example
   * Query
   */
  scheme?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      headerName: 'headerName',
      queryName: 'queryName',
      scheme: 'scheme',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      headerName: 'string',
      queryName: 'string',
      scheme: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpDubboTranscoder extends $dara.Model {
  dubboServiceGroup?: string;
  dubboServiceName?: string;
  dubboServiceVersion?: string;
  mothedMapList?: HttpDubboTranscoderMothedMapList[];
  static names(): { [key: string]: string } {
    return {
      dubboServiceGroup: 'dubboServiceGroup',
      dubboServiceName: 'dubboServiceName',
      dubboServiceVersion: 'dubboServiceVersion',
      mothedMapList: 'mothedMapList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboServiceGroup: 'string',
      dubboServiceName: 'string',
      dubboServiceVersion: 'string',
      mothedMapList: { 'type': 'array', 'itemType': HttpDubboTranscoderMothedMapList },
    };
  }

  validate() {
    if(Array.isArray(this.mothedMapList)) {
      $dara.Model.validateArray(this.mothedMapList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRoute extends $dara.Model {
  backend?: Backend;
  createTimestamp?: number;
  deployStatus?: string;
  description?: string;
  domainInfos?: HttpRouteDomainInfos[];
  environmentInfo?: HttpRouteEnvironmentInfo;
  match?: HttpRouteMatch;
  name?: string;
  routeId?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backend: 'backend',
      createTimestamp: 'createTimestamp',
      deployStatus: 'deployStatus',
      description: 'description',
      domainInfos: 'domainInfos',
      environmentInfo: 'environmentInfo',
      match: 'match',
      name: 'name',
      routeId: 'routeId',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: Backend,
      createTimestamp: 'number',
      deployStatus: 'string',
      description: 'string',
      domainInfos: { 'type': 'array', 'itemType': HttpRouteDomainInfos },
      environmentInfo: HttpRouteEnvironmentInfo,
      match: HttpRouteMatch,
      name: 'string',
      routeId: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.backend && typeof (this.backend as any).validate === 'function') {
      (this.backend as any).validate();
    }
    if(Array.isArray(this.domainInfos)) {
      $dara.Model.validateArray(this.domainInfos);
    }
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteMatch extends $dara.Model {
  headers?: HttpRouteMatchHeaders[];
  /**
   * @example
   * true
   */
  ignoreUriCase?: boolean;
  methods?: string[];
  path?: HttpRouteMatchPath;
  queryParams?: HttpRouteMatchQueryParams[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      ignoreUriCase: 'ignoreUriCase',
      methods: 'methods',
      path: 'path',
      queryParams: 'queryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': HttpRouteMatchHeaders },
      ignoreUriCase: 'boolean',
      methods: { 'type': 'array', 'itemType': 'string' },
      path: HttpRouteMatchPath,
      queryParams: { 'type': 'array', 'itemType': HttpRouteMatchQueryParams },
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    if(this.path && typeof (this.path as any).validate === 'function') {
      (this.path as any).validate();
    }
    if(Array.isArray(this.queryParams)) {
      $dara.Model.validateArray(this.queryParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JwtIdentityConfig extends $dara.Model {
  jwks?: string;
  jwtPayloadConfig?: JwtIdentityConfigJwtPayloadConfig;
  jwtTokenConfig?: JwtIdentityConfigJwtTokenConfig;
  secretType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jwks: 'jwks',
      jwtPayloadConfig: 'jwtPayloadConfig',
      jwtTokenConfig: 'jwtTokenConfig',
      secretType: 'secretType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwks: 'string',
      jwtPayloadConfig: JwtIdentityConfigJwtPayloadConfig,
      jwtTokenConfig: JwtIdentityConfigJwtTokenConfig,
      secretType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.jwtPayloadConfig && typeof (this.jwtPayloadConfig as any).validate === 'function') {
      (this.jwtPayloadConfig as any).validate();
    }
    if(this.jwtTokenConfig && typeof (this.jwtTokenConfig as any).validate === 'function') {
      (this.jwtTokenConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParentResourceInfo extends $dara.Model {
  apiInfo?: HttpApiApiInfo;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'apiInfo',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: HttpApiApiInfo,
      resourceType: 'string',
    };
  }

  validate() {
    if(this.apiInfo && typeof (this.apiInfo as any).validate === 'function') {
      (this.apiInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PluginClassInfo extends $dara.Model {
  alias?: string;
  configExample?: string;
  description?: string;
  executePriority?: number;
  executeStage?: string;
  imageName?: string;
  innerPlugin?: boolean;
  mode?: string;
  name?: string;
  pluginClassId?: string;
  source?: string;
  supportedMinGatewayVersion?: string;
  type?: string;
  version?: string;
  versionDescription?: string;
  wasmLanguage?: string;
  wasmUrl?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      configExample: 'configExample',
      description: 'description',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      imageName: 'imageName',
      innerPlugin: 'innerPlugin',
      mode: 'mode',
      name: 'name',
      pluginClassId: 'pluginClassId',
      source: 'source',
      supportedMinGatewayVersion: 'supportedMinGatewayVersion',
      type: 'type',
      version: 'version',
      versionDescription: 'versionDescription',
      wasmLanguage: 'wasmLanguage',
      wasmUrl: 'wasmUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      configExample: 'string',
      description: 'string',
      executePriority: 'number',
      executeStage: 'string',
      imageName: 'string',
      innerPlugin: 'boolean',
      mode: 'string',
      name: 'string',
      pluginClassId: 'string',
      source: 'string',
      supportedMinGatewayVersion: 'string',
      type: 'string',
      version: 'string',
      versionDescription: 'string',
      wasmLanguage: 'string',
      wasmUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PolicyClassInfo extends $dara.Model {
  alias?: string;
  attachableResourceTypes?: string[];
  classId?: string;
  configExample?: string;
  deprecated?: boolean;
  description?: string;
  direction?: string;
  enableLog?: boolean;
  executePriority?: string;
  executeStage?: string;
  name?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      attachableResourceTypes: 'attachableResourceTypes',
      classId: 'classId',
      configExample: 'configExample',
      deprecated: 'deprecated',
      description: 'description',
      direction: 'direction',
      enableLog: 'enableLog',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      name: 'name',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      attachableResourceTypes: { 'type': 'array', 'itemType': 'string' },
      classId: 'string',
      configExample: 'string',
      deprecated: 'boolean',
      description: 'string',
      direction: 'string',
      enableLog: 'boolean',
      executePriority: 'string',
      executeStage: 'string',
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachableResourceTypes)) {
      $dara.Model.validateArray(this.attachableResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PolicyDetailInfo extends $dara.Model {
  classId?: string;
  className?: string;
  config?: string;
  description?: string;
  name?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'classId',
      className: 'className',
      config: 'config',
      description: 'description',
      name: 'name',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      className: 'string',
      config: 'string',
      description: 'string',
      name: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PolicyInfo extends $dara.Model {
  attachments?: Attachment[];
  classAlias?: string;
  className?: string;
  config?: string;
  direction?: string;
  executePriority?: string;
  executeStage?: string;
  name?: string;
  policyId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
      classAlias: 'classAlias',
      className: 'className',
      config: 'config',
      direction: 'direction',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      name: 'name',
      policyId: 'policyId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': Attachment },
      classAlias: 'string',
      className: 'string',
      config: 'string',
      direction: 'string',
      executePriority: 'string',
      executeStage: 'string',
      name: 'string',
      policyId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceInfo extends $dara.Model {
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  resourceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      resourceVersion: 'resourceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      resourceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceStatistic extends $dara.Model {
  resourceCount?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'resourceCount',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Service extends $dara.Model {
  addresses?: string[];
  aiServiceConfig?: AiServiceConfig;
  createTimestamp?: number;
  /**
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @example
   * publich
   */
  groupName?: string;
  healthCheck?: ServiceHealthCheck;
  healthStatus?: string;
  name?: string;
  namespace?: string;
  ports?: ServicePorts[];
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  serviceId?: string;
  sourceType?: string;
  unhealthyEndpoints?: string[];
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      aiServiceConfig: 'aiServiceConfig',
      createTimestamp: 'createTimestamp',
      gatewayId: 'gatewayId',
      groupName: 'groupName',
      healthCheck: 'healthCheck',
      healthStatus: 'healthStatus',
      name: 'name',
      namespace: 'namespace',
      ports: 'ports',
      protocol: 'protocol',
      qualifier: 'qualifier',
      resourceGroupId: 'resourceGroupId',
      serviceId: 'serviceId',
      sourceType: 'sourceType',
      unhealthyEndpoints: 'unhealthyEndpoints',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      aiServiceConfig: AiServiceConfig,
      createTimestamp: 'number',
      gatewayId: 'string',
      groupName: 'string',
      healthCheck: ServiceHealthCheck,
      healthStatus: 'string',
      name: 'string',
      namespace: 'string',
      ports: { 'type': 'array', 'itemType': ServicePorts },
      protocol: 'string',
      qualifier: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      sourceType: 'string',
      unhealthyEndpoints: { 'type': 'array', 'itemType': 'string' },
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.aiServiceConfig && typeof (this.aiServiceConfig as any).validate === 'function') {
      (this.aiServiceConfig as any).validate();
    }
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(Array.isArray(this.unhealthyEndpoints)) {
      $dara.Model.validateArray(this.unhealthyEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceHealthCheck extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  healthyThreshold?: number;
  httpHost?: string;
  httpPath?: string;
  interval?: number;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  timeout?: number;
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      healthyThreshold: 'healthyThreshold',
      httpHost: 'httpHost',
      httpPath: 'httpPath',
      interval: 'interval',
      protocol: 'protocol',
      timeout: 'timeout',
      unhealthyThreshold: 'unhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      healthyThreshold: 'number',
      httpHost: 'string',
      httpPath: 'string',
      interval: 'number',
      protocol: 'string',
      timeout: 'number',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceLinkedRole extends $dara.Model {
  arn?: string;
  assumeRolePolicyDocument?: string;
  createDate?: string;
  description?: string;
  isServiceLinkedRole?: boolean;
  roleId?: string;
  roleName?: string;
  rolePrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'arn',
      assumeRolePolicyDocument: 'assumeRolePolicyDocument',
      createDate: 'createDate',
      description: 'description',
      isServiceLinkedRole: 'isServiceLinkedRole',
      roleId: 'roleId',
      roleName: 'roleName',
      rolePrincipalName: 'rolePrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SslCertMetaInfo extends $dara.Model {
  algorithm?: string;
  certId?: number;
  certIdentifier?: string;
  certName?: string;
  commonName?: string;
  domain?: string;
  domainMatchCert?: boolean;
  fingerprint?: string;
  instanceId?: string;
  isChainCompleted?: boolean;
  issuer?: string;
  keySize?: string;
  md5?: string;
  notAfterTimestamp?: number;
  notBeforeTimestamp?: number;
  sans?: string;
  serialNo?: string;
  sha2?: string;
  signAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      certId: 'certId',
      certIdentifier: 'certIdentifier',
      certName: 'certName',
      commonName: 'commonName',
      domain: 'domain',
      domainMatchCert: 'domainMatchCert',
      fingerprint: 'fingerprint',
      instanceId: 'instanceId',
      isChainCompleted: 'isChainCompleted',
      issuer: 'issuer',
      keySize: 'keySize',
      md5: 'md5',
      notAfterTimestamp: 'notAfterTimestamp',
      notBeforeTimestamp: 'notBeforeTimestamp',
      sans: 'sans',
      serialNo: 'serialNo',
      sha2: 'sha2',
      signAlgorithm: 'signAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certId: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      domainMatchCert: 'boolean',
      fingerprint: 'string',
      instanceId: 'string',
      isChainCompleted: 'boolean',
      issuer: 'string',
      keySize: 'string',
      md5: 'string',
      notAfterTimestamp: 'number',
      notBeforeTimestamp: 'number',
      sans: 'string',
      serialNo: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubDomainInfo extends $dara.Model {
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

export class TlsCipherSuitesConfig extends $dara.Model {
  configType?: string;
  tlsCipherSuite?: TlsCipherSuitesConfigTlsCipherSuite[];
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      tlsCipherSuite: 'tlsCipherSuite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      tlsCipherSuite: { 'type': 'array', 'itemType': TlsCipherSuitesConfigTlsCipherSuite },
    };
  }

  validate() {
    if(Array.isArray(this.tlsCipherSuite)) {
      $dara.Model.validateArray(this.tlsCipherSuite);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewaySecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the security group rule.
   * 
   * @example
   * 商品中心访问安全组
   */
  description?: string;
  /**
   * @remarks
   * Port ranges.
   */
  portRanges?: string[];
  /**
   * @remarks
   * Security group ID.
   * 
   * @example
   * sg-wz929kxhcdp****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      portRanges: 'portRanges',
      securityGroupId: 'securityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portRanges: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewaySecurityGroupRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 2A6E90D5-A711-54F4-A489-E33C2021EDDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewaySecurityGroupRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddGatewaySecurityGroupRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddGatewaySecurityGroupRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Target resource group ID.
   * 
   * @example
   * rg-aekzdrfx2xdnaja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * gw-ct4i14um1hkn0tpqfae0
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource type
   * 
   * @example
   * gateway
   */
  resourceType?: string;
  /**
   * @remarks
   * Service name, fixed value apig
   * 
   * @example
   * apig
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 59F86F37-787A-52DB-9475-DB5A255517F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * CA Certificate Identifier.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * Certificate Unique Identifier.
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * Client CA Certificate
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIFBTCCAu2gAwIBAgIUORLpYPGSFD1YOP6PMbE7Wd/mpTQwDQYJKoZIhvcNAQEL
   * BQAwE************************************************2VwVOJ2gqX3
   * YuGaxvIbDy0iQJ1GMerPRyzJTeVEtdIKT29u0PdFRr4KZWom35qX7G4=
   * -----END CERTIFICATE-----
   */
  clientCACert?: string;
  /**
   * @remarks
   * Set the HTTPS protocol type, whether to enable forced HTTPS redirection.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @remarks
   * HTTP/2 settings.
   * 
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @remarks
   * Whether to enable mTLS mutual authentication
   */
  mTLSEnabled?: boolean;
  /**
   * @remarks
   * Domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * abc.com
   */
  name?: string;
  /**
   * @remarks
   * The protocol type supported by the domain.
   * 
   * - HTTP: Supports only HTTP protocol.
   * - HTTPS: Supports only HTTPS protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzoiafjtr7zyq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The TLS cipher suites config.
   */
  tlsCipherSuitesConfig?: TlsCipherSuitesConfig;
  /**
   * @remarks
   * Maximum TLS protocol version, supports up to TLS 1.3.
   * 
   * @example
   * TLS1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * Minimum TLS protocol version, supports down to TLS 1.0.
   * 
   * @example
   * TLS1.0
   */
  tlsMin?: string;
  static names(): { [key: string]: string } {
    return {
      caCertIdentifier: 'caCertIdentifier',
      certIdentifier: 'certIdentifier',
      clientCACert: 'clientCACert',
      forceHttps: 'forceHttps',
      http2Option: 'http2Option',
      mTLSEnabled: 'mTLSEnabled',
      name: 'name',
      protocol: 'protocol',
      resourceGroupId: 'resourceGroupId',
      tlsCipherSuitesConfig: 'tlsCipherSuitesConfig',
      tlsMax: 'tlsMax',
      tlsMin: 'tlsMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertIdentifier: 'string',
      certIdentifier: 'string',
      clientCACert: 'string',
      forceHttps: 'boolean',
      http2Option: 'string',
      mTLSEnabled: 'boolean',
      name: 'string',
      protocol: 'string',
      resourceGroupId: 'string',
      tlsCipherSuitesConfig: TlsCipherSuitesConfig,
      tlsMax: 'string',
      tlsMin: 'string',
    };
  }

  validate() {
    if(this.tlsCipherSuitesConfig && typeof (this.tlsCipherSuitesConfig as any).validate === 'function') {
      (this.tlsCipherSuitesConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: CreateDomainResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used for tracing the API call chain.
   * 
   * @example
   * 0C2D1C68-0D93-5561-8EE6-FDB7BF067A30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDomainResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDomainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * Environment alias.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试环境
   */
  alias?: string;
  /**
   * @remarks
   * Description of the environment, which can include information such as the purpose of the environment and its owner.
   * 
   * @example
   * 这是xxx的xx项目测试环境
   */
  description?: string;
  /**
   * @remarks
   * Gateway ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qasrdc0
   */
  gatewayId?: string;
  /**
   * @remarks
   * Environment name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmycs5expl7oq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
      gatewayId: 'gatewayId',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
      gatewayId: 'string',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: CreateEnvironmentResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used for tracing the API call chain.
   * 
   * @example
   * 3C3B9A12-3868-5EB9-8BEA-F99E03DD125C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateEnvironmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEnvironmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * The AI protocols list.
   */
  aiProtocols?: string[];
  authConfig?: AuthConfig;
  /**
   * @remarks
   * Base path of the API, which must start with a \\"/\\".
   * 
   * @example
   * /v1
   */
  basePath?: string;
  /**
   * @remarks
   * The deploy configs.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * Description of the API.
   * 
   * @example
   * 测试专用API。
   */
  description?: string;
  enableAuth?: boolean;
  /**
   * @remarks
   * Configuration information for the HTTP Ingress API.
   */
  ingressConfig?: CreateHttpApiRequestIngressConfig;
  /**
   * @remarks
   * Name of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * test-api
   */
  name?: string;
  /**
   * @remarks
   * List of API access protocols.
   */
  protocols?: string[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzgvmlotionbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Type of the HTTP API.
   * - Http
   * - Rest
   * - WebSocket
   * - HttpIngress
   * 
   * @example
   * Http
   */
  type?: string;
  /**
   * @remarks
   * Versioning configuration for the API.
   */
  versionConfig?: HttpApiVersionConfig;
  static names(): { [key: string]: string } {
    return {
      aiProtocols: 'aiProtocols',
      authConfig: 'authConfig',
      basePath: 'basePath',
      deployConfigs: 'deployConfigs',
      description: 'description',
      enableAuth: 'enableAuth',
      ingressConfig: 'ingressConfig',
      name: 'name',
      protocols: 'protocols',
      resourceGroupId: 'resourceGroupId',
      type: 'type',
      versionConfig: 'versionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiProtocols: { 'type': 'array', 'itemType': 'string' },
      authConfig: AuthConfig,
      basePath: 'string',
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      enableAuth: 'boolean',
      ingressConfig: CreateHttpApiRequestIngressConfig,
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      type: 'string',
      versionConfig: HttpApiVersionConfig,
    };
  }

  validate() {
    if(Array.isArray(this.aiProtocols)) {
      $dara.Model.validateArray(this.aiProtocols);
    }
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(this.ingressConfig && typeof (this.ingressConfig as any).validate === 'function') {
      (this.ingressConfig as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    if(this.versionConfig && typeof (this.versionConfig as any).validate === 'function') {
      (this.versionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * API information.
   */
  data?: CreateHttpApiResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A1994B10-C6A8-58FA-8347-6A08B0D4EFDE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateHttpApiResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHttpApiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiOperationRequest extends $dara.Model {
  /**
   * @remarks
   * List of operation definitions.
   */
  operations?: HttpApiOperation[];
  static names(): { [key: string]: string } {
    return {
      operations: 'operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operations: { 'type': 'array', 'itemType': HttpApiOperation },
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Operation information.
   */
  data?: CreateHttpApiOperationResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateHttpApiOperationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiOperationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHttpApiOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHttpApiOperationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The backend service configurations of the route.
   */
  backendConfig?: CreateHttpApiRouteRequestBackendConfig;
  /**
   * @remarks
   * The route description.
   * 
   * @example
   * User logon route
   */
  description?: string;
  /**
   * @remarks
   * The domain name IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cpqnr6tlhtgubcv***
   */
  environmentId?: string;
  /**
   * @remarks
   * The rule for matching the route.
   */
  match?: HttpRouteMatch;
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * login
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      description: 'description',
      domainIds: 'domainIds',
      environmentId: 'environmentId',
      match: 'match',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: CreateHttpApiRouteRequestBackendConfig,
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      match: HttpRouteMatch,
      name: 'string',
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: CreateHttpApiRouteResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3ACFC7A7-45A9-58CF-B2D5-765B60254695
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateHttpApiRouteResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHttpApiRouteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHttpApiRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateHttpApiRouteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Policy type, including RateLimit, ConcurrencyLimit, CircuitBreaker, HttpRewrite, HeaderModify, Cors, Authentication, FlowCopy, Timeout, Retry, IpAccessControl, DirectResponse, Redirect, Fallback, ServiceTls, ServiceLb, ServicePortTls, Waf, JWTAuth, OIDCAuth, ExternalZAuth, AiProxy, ModelRouter, AiStatistics, AiSecurityGuard, AiFallback, ModelMapper, AiTokenRateLimit, AiCache, DynamicRoute
   * 
   * This parameter is required.
   * 
   * @example
   * Timeout
   */
  className?: string;
  /**
   * @remarks
   * Policy configuration
   * 
   * This parameter is required.
   * 
   * @example
   * {"unitNum":1,"timeUnit":"s","enable":true}
   */
  config?: string;
  /**
   * @remarks
   * Policy description
   * 
   * @example
   * timeout policy
   */
  description?: string;
  /**
   * @remarks
   * Policy name
   * 
   * This parameter is required.
   * 
   * @example
   * test-policy
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      config: 'config',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      config: 'string',
      description: 'string',
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

export class CreatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: CreatePolicyResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E7406754***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreatePolicyResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * Attached resource ID
   * 
   * This parameter is required.
   * 
   * @example
   * api-cu07jj6m1hkokaus***
   */
  attachResourceId?: string;
  /**
   * @remarks
   * Attached resource type, such as HttpApi, GatewayRoute, Operation, GatewayService, GatewayServicePort, Gateway, Domain
   * 
   * This parameter is required.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * Environment ID
   * 
   * This parameter is required.
   * 
   * @example
   * env-cquqsollhtgid***
   */
  environmentId?: string;
  /**
   * @remarks
   * Gateway instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qas***
   */
  gatewayId?: string;
  /**
   * @remarks
   * Policy ID
   * 
   * This parameter is required.
   * 
   * @example
   * p-cq787etlhtghrptjg***
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceId: 'attachResourceId',
      attachResourceType: 'attachResourceType',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceId: 'string',
      attachResourceType: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: CreatePolicyAttachmentResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C64***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreatePolicyAttachmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyAttachmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyAttachmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyAttachmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Gateway ID.
   * 
   * @example
   * gw-cq7l5s5lhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * List of service configuration information.
   */
  serviceConfigs?: CreateServiceRequestServiceConfigs[];
  /**
   * @remarks
   * Service source:
   * - MSE_NACOS: Services in MSE Nacos.
   * - K8S: Services in the K8S cluster of container service.
   * - VIP: Fixed address service.
   * - DNS: DNS domain name service.
   * - FC3: Function Compute service.
   * - SAE_K8S_SERVICE: SAE K8S service.
   * 
   * @example
   * MSE_NACOS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      resourceGroupId: 'resourceGroupId',
      serviceConfigs: 'serviceConfigs',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      resourceGroupId: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': CreateServiceRequestServiceConfigs },
      sourceType: 'string',
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

export class CreateServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: CreateServiceResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * C67DED2B-F19B-5BEC-88C1-D6EB854CD0D4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateServiceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used for tracing the API call chain.
   * 
   * @example
   * A60EE5CA-1294-532A-9775-8D2FD1C6EFBF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDomainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used for tracing the request chain.
   * 
   * @example
   * C61E30D3-579A-5B43-994E-31E02EDC9129
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEnvironmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * DE97DFDB-7DF0-5AB9-941C-10D27D769E4B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewaySecurityGroupRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to cascade delete the security group rules.
   * 
   * @example
   * true
   */
  cascadingDelete?: boolean;
  static names(): { [key: string]: string } {
    return {
      cascadingDelete: 'cascadingDelete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadingDelete: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewaySecurityGroupRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 8F94B3CC-F4BA-511E-8367-ECBBE486E595
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewaySecurityGroupRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewaySecurityGroupRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewaySecurityGroupRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHttpApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B626361-070A-56A7-B127-ADAC8F3655DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHttpApiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHttpApiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHttpApiOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message,
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHttpApiOperationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHttpApiOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHttpApiOperationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHttpApiRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0F138FFC-6E2B-56C1-9BAB-A67462E339D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHttpApiRouteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHttpApiRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteHttpApiRouteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E7406754***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * CE857A85-251D-5018-8103-A38957D71***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyAttachmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyAttachmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyAttachmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * Rest API deployment configuration. Required when deploying an HTTP API as a Rest API.
   */
  restApiConfig?: DeployHttpApiRequestRestApiConfig;
  /**
   * @remarks
   * Route ID. This must be provided when publishing the route of an HTTP API.
   * 
   * @example
   * hr-cr82undlhtgrl***
   */
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      restApiConfig: 'restApiConfig',
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restApiConfig: DeployHttpApiRequestRestApiConfig,
      routeId: 'string',
    };
  }

  validate() {
    if(this.restApiConfig && typeof (this.restApiConfig as any).validate === 'function') {
      (this.restApiConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHttpApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * 响应消息。
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0C2D1C68-0D93-5561-8EE6-FDB7BF067A30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHttpApiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployHttpApiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportHttpApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * API definition information.
   */
  data?: ExportHttpApiResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4BACB05C-3FE2-588F-9148-700C5C026B74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExportHttpApiResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportHttpApiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportHttpApiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardRequest extends $dara.Model {
  /**
   * @remarks
   * zh: Chinese
   * en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * API ID
   * 
   * @example
   * api-c9uuekzmia8q2****
   */
  apiId?: string;
  /**
   * @remarks
   * Filter configuration
   */
  filter?: GetDashboardRequestFilter;
  /**
   * @remarks
   * Dashboard name:
   * - LOG: Access log
   * - PLUGIN: Plugin log
   * 
   * @example
   * PLUGIN
   */
  name?: string;
  /**
   * @remarks
   * Plugin ID.
   * 
   * @example
   * pls-dn82a9djd8z****
   */
  pluginClassId?: string;
  /**
   * @remarks
   * Dashboard source:
   * - SLS: Log dashboard
   * 
   * @example
   * SLS
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
      apiId: 'apiId',
      filter: 'filter',
      name: 'name',
      pluginClassId: 'pluginClassId',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      apiId: 'string',
      filter: GetDashboardRequestFilter,
      name: 'string',
      pluginClassId: 'string',
      source: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * zh: Chinese
   * en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * API ID
   * 
   * @example
   * api-c9uuekzmia8q2****
   */
  apiId?: string;
  /**
   * @remarks
   * Filter configuration
   */
  filterShrink?: string;
  /**
   * @remarks
   * Dashboard name:
   * - LOG: Access log
   * - PLUGIN: Plugin log
   * 
   * @example
   * PLUGIN
   */
  name?: string;
  /**
   * @remarks
   * Plugin ID.
   * 
   * @example
   * pls-dn82a9djd8z****
   */
  pluginClassId?: string;
  /**
   * @remarks
   * Dashboard source:
   * - SLS: Log dashboard
   * 
   * @example
   * SLS
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
      apiId: 'apiId',
      filterShrink: 'filter',
      name: 'name',
      pluginClassId: 'pluginClassId',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      apiId: 'string',
      filterShrink: 'string',
      name: 'string',
      pluginClassId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response data
   */
  data?: GetDashboardResponseBodyData;
  /**
   * @remarks
   * Backend error code
   * 
   * @example
   * Ok
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 2F46B9E7-67EF-5C8A-BA52-D38D5B32AF2C
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorCode: 'errorCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetDashboardResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDashboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDashboardResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether include domain related resource information.
   * 
   * @example
   * true
   */
  withStatistics?: boolean;
  static names(): { [key: string]: string } {
    return {
      withStatistics: 'withStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withStatistics: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: GetDomainResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used for tracing the API call chain.
   * 
   * @example
   * 3ACFC7A7-45A9-58CF-B2D5-765B60254695
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDomainResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDomainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to return online resource info.
   * 
   * @example
   * true
   */
  withStatistics?: boolean;
  /**
   * @remarks
   * Option for vpc info.
   * 
   * @example
   * true
   */
  withVpcInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      withStatistics: 'withStatistics',
      withVpcInfo: 'withVpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withStatistics: 'boolean',
      withVpcInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: GetEnvironmentResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used for tracing the API call chain.
   * 
   * @example
   * 3F8EE674-BB08-5E92-BE6F-E4756A748B0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEnvironmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnvironmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: GetGatewayResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0F138FFC-6E2B-56C1-9BAB-A67462E339D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGatewayResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGatewayResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * API information.
   */
  data?: HttpApiApiInfo;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 8FA9BB94-915B-5299-A694-49FCC7F5DD00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HttpApiApiInfo,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpApiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHttpApiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpApiOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Operation information.
   */
  data?: HttpApiOperationInfo;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B725275B-50C6-5A49-A9FD-F0332FCB3351
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HttpApiOperationInfo,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpApiOperationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHttpApiOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHttpApiOperationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpApiRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Route detail data.
   */
  data?: HttpRoute;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 3ACFC7A7-45A9-58CF-B2D5-765B60254695
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HttpRoute,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHttpApiRouteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHttpApiRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHttpApiRouteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: PolicyDetailInfo;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2F46B9E7-67EF-5C8A-BA52-D38D5B32A***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PolicyDetailInfo,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: GetPolicyAttachmentResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 2C3B9A12-3868-5EB9-fBEA-F99E03DD1***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPolicyAttachmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAttachmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPolicyAttachmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPolicyAttachmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Resource information.
   */
  data?: GetResourceOverviewResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * DD19A442-93C5-5C97-AFA0-B9C57EBD781B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetResourceOverviewResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceOverviewResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceOverviewResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Service details data.
   */
  data?: Service;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 8FA9BB94-915B-5299-A694-49FCC7F5DD00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: Service,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Language Type:
   * zh: Chinese
   * en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response Code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response Data
   */
  data?: GetTraceConfigResponseBodyData;
  /**
   * @remarks
   * Error Message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 2F46B9E7-67EF-5C8A-BA52-D38D5B32AF2C
   */
  requestId?: string;
  /**
   * @remarks
   * Boolean	Request Result, with the following values:
   * true: Request succeeded.
   * false: Request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTraceConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTraceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTraceConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the imported API. If not provided, it will be extracted from the API definition. The length is limited to 255 bytes.
   * 
   * @example
   * 测试专用API
   */
  description?: string;
  /**
   * @remarks
   * Pre-import check. If enabled, only the check will be performed without importing the API.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the imported API. If not provided, it will be extracted from the API definition file. If the API name and version configuration already exist, this import will update the existing API definition based on the `strategy` field.
   * 
   * @example
   * import-test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm3q4zjh7fkki
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Base64 encoded API definition, supporting OAS2.0 and OAS3.0 specifications, in YAML or JSON format. It has a higher priority than the `specFileUrl` parameter. If the file size exceeds 10MB, please use the `specFileUrl` parameter to transfer.
   * 
   * @example
   * b3BlbmFwaTogMy4wLjAKaW5mbzoKICAgIHRpdGxlOiBkZW1vCiAgICBkZXNjcmlwdGlvbjogdGhpc2lzZGVtbwogICAgdmVyc2lvbjogIiIKcGF0aHM6CiAgICAvdXNlci97dXNlcklkfToKICAgICAgICBnZXQ6CiAgICAgICAgICAgIHN1bW1hcnk6IOiOt+WPlueUqOaIt+S/oeaBrwogICAgICAgICAgICBkZXNjcmlwdGlvbjog6I635Y+W55So5oi35L+h5oGvCiAgICAgICAgICAgIG9wZXJhdGlvbklkOiBHZXRVc2VySW5mbwogICAgICAgICAgICByZXNwb25zZXM6CiAgICAgICAgICAgICAgICAiMjAwIjoKICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjog5oiQ5YqfCiAgICAgICAgICAgICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04OgogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBudWxsCnNlcnZlcnM6CiAgICAtIHVybDogaHR0cDovL2FwaS5leGFtcGxlLmNvbS92MQo=
   */
  specContentBase64?: string;
  /**
   * @remarks
   * Download URL for the API definition file, which must be accessible from the public network or via an internal OSS download address within the same region. The file URL must have download permissions. For non-publicly readable OSS file links, refer to the documentation at https://help.aliyun.com/zh/oss/user-guide/how-to-obtain-the-url-of-a-single-object-or-the-urls-of-multiple-objects, and provide a URL with download permissions. Currently, only API definition files stored on OSS are supported.
   * 
   * @example
   * https://my-bucket.oss-cn-hangzhou.aliyuncs.com/my-api/api.yaml
   */
  specFileUrl?: string;
  /**
   * @remarks
   * The oss config info.
   */
  specOssConfig?: ImportHttpApiRequestSpecOssConfig;
  /**
   * @remarks
   * When the imported API name and version management match an existing API, you need to specify an update strategy.
   * - SpecOnly: Completely based on the imported file.
   * - SpecFirst: Prioritize the imported file, add new interfaces and update existing ones, while keeping interfaces not mentioned in the file unchanged.
   * - ExistFirst: Prioritize the existing API, only add new interfaces without updating existing ones.
   * If not specified, the default strategy is ExistFirst.
   * 
   * @example
   * ExistFirst
   */
  strategy?: string;
  /**
   * @remarks
   * If this field is specified, this import will update the specified API instead of importing or searching for an existing API based on the API name and version management configuration. The target API must be of REST type.
   * 
   * @example
   * api-xxxx
   */
  targetHttpApiId?: string;
  /**
   * @remarks
   * API versioning configuration. If versioning is enabled, and the version number and API name match an existing API, this import will be treated as an update. If versioning is not enabled, and the API name matches an existing API, this import will also be treated as an update.
   */
  versionConfig?: HttpApiVersionConfig;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      dryRun: 'dryRun',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      specContentBase64: 'specContentBase64',
      specFileUrl: 'specFileUrl',
      specOssConfig: 'specOssConfig',
      strategy: 'strategy',
      targetHttpApiId: 'targetHttpApiId',
      versionConfig: 'versionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      resourceGroupId: 'string',
      specContentBase64: 'string',
      specFileUrl: 'string',
      specOssConfig: ImportHttpApiRequestSpecOssConfig,
      strategy: 'string',
      targetHttpApiId: 'string',
      versionConfig: HttpApiVersionConfig,
    };
  }

  validate() {
    if(this.specOssConfig && typeof (this.specOssConfig as any).validate === 'function') {
      (this.specOssConfig as any).validate();
    }
    if(this.versionConfig && typeof (this.versionConfig as any).validate === 'function') {
      (this.versionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * API information.
   */
  data?: ImportHttpApiResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CE857A85-251D-5018-8103-A38957D71E20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ImportHttpApiResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHttpApiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportHttpApiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * Gateway Id.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * Domain name, fuzzy search.
   * 
   * @example
   * test
   */
  nameLike?: string;
  /**
   * @remarks
   * Page number, default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page, default is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-ahr5uil8raz0rq3b
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: ListDomainsResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used for tracing the API call chain.
   * 
   * @example
   * C61E30D3-579A-5B43-994E-31E02EDC9129
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDomainsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDomainsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsRequest extends $dara.Model {
  /**
   * @remarks
   * Environment alias, fuzzy search.
   * 
   * @example
   * 测试
   */
  aliasLike?: string;
  /**
   * @remarks
   * Gateway ID, exact search.
   * 
   * @example
   * gw-cptv6ktlhtgnqr73h8d1
   */
  gatewayId?: string;
  /**
   * @remarks
   * Gateway name, fuzzy search.
   * 
   * @example
   * test-gw
   */
  gatewayNameLike?: string;
  /**
   * @remarks
   * Environment name, fuzzy search.
   * 
   * @example
   * test
   */
  nameLike?: string;
  /**
   * @remarks
   * Page number, default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, default is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aek2sy66mftleiq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasLike: 'aliasLike',
      gatewayId: 'gatewayId',
      gatewayNameLike: 'gatewayNameLike',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasLike: 'string',
      gatewayId: 'string',
      gatewayNameLike: 'string',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Paged query environment list response.
   */
  data?: ListEnvironmentsResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used for tracing the call chain.
   * 
   * @example
   * CE857A85-251D-5018-8103-A38957D71E20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListEnvironmentsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnvironmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEnvironmentsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysRequest extends $dara.Model {
  /**
   * @remarks
   * Query exactly by Gateway ID.
   * 
   * @example
   * gw-cpv4sqdl****
   */
  gatewayId?: string;
  /**
   * @remarks
   * Keyword, search with full match, case-insensitive.
   * 
   * @example
   * dev
   */
  keyword?: string;
  /**
   * @remarks
   * Query exactly by Gateway name.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aekz3wes3hnre5a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Filter list by tags
   */
  tag?: ListGatewaysRequestTag[];
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      keyword: 'keyword',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      keyword: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListGatewaysRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Query exactly by Gateway ID.
   * 
   * @example
   * gw-cpv4sqdl****
   */
  gatewayId?: string;
  /**
   * @remarks
   * Keyword, search with full match, case-insensitive.
   * 
   * @example
   * dev
   */
  keyword?: string;
  /**
   * @remarks
   * Query exactly by Gateway name.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aekz3wes3hnre5a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Filter list by tags
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      keyword: 'keyword',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      keyword: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Result of gateway list query.
   */
  data?: ListGatewaysResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 5B626361-070A-56A7-B127-ADAC8F3655DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGatewaysResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGatewaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewaysResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiOperationsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter the operation list based on a specific consumer authorization rule ID, and the interface list in the response only contains authorized operations.
   * 
   * @example
   * cas-xxx
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @remarks
   * List interfaces by Method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * Search operations by exact name.
   * 
   * @example
   * getUserInfo
   */
  name?: string;
  /**
   * @remarks
   * Search operations by name prefix.
   * 
   * @example
   * GetUser
   */
  nameLike?: string;
  /**
   * @remarks
   * Page number, starting from 1, default is 1 if not specified.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, valid range [1, 100], default is 10 if not specified.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Search operations by path prefix.
   * 
   * @example
   * /v1
   */
  pathLike?: string;
  /**
   * @remarks
   * Each operation information in the response carries a list of authorization rules for the specified consumer under the specified environment ID. The withConsumerInEnvironmentId field needs to be additionally specified.
   * 
   * @example
   * env-xxx
   */
  withConsumerInEnvironmentId?: string;
  /**
   * @remarks
   * Each operation information in the response carries a list of authorization rules for the specified consumer under the specified environment ID. The withConsumerInEnvironmentId field needs to be additionally specified.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * Plugin ID, use this plugin ID to retrieve the plugin release information.
   * 
   * @example
   * pl-xxx
   */
  withPluginAttachmentByPluginId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerAuthorizationRuleId: 'consumerAuthorizationRuleId',
      method: 'method',
      name: 'name',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pathLike: 'pathLike',
      withConsumerInEnvironmentId: 'withConsumerInEnvironmentId',
      withConsumerInfoById: 'withConsumerInfoById',
      withPluginAttachmentByPluginId: 'withPluginAttachmentByPluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerAuthorizationRuleId: 'string',
      method: 'string',
      name: 'string',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pathLike: 'string',
      withConsumerInEnvironmentId: 'string',
      withConsumerInfoById: 'string',
      withPluginAttachmentByPluginId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiOperationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * List of operations.
   */
  data?: ListHttpApiOperationsResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHttpApiOperationsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiOperationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHttpApiOperationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHttpApiOperationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiRoutesRequest extends $dara.Model {
  /**
   * @remarks
   * Filter the interface list based on a specific consumer authorization rule ID. The interface list in the response will only include authorized interfaces.
   * 
   * @example
   * cas-xxx
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @remarks
   * Deployment status of the route.
   * 
   * @example
   * NotDeployed
   */
  deployStatuses?: string;
  /**
   * @remarks
   * Filter route information by domain ID.
   * 
   * @example
   * d-xxx
   */
  domainId?: string;
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * env-cpqnr6tlhtgubc***
   */
  environmentId?: string;
  /**
   * @remarks
   * Cloud-native API Gateway ID.
   * 
   * @example
   * gw-cpv4sqdl****
   */
  gatewayId?: string;
  /**
   * @remarks
   * Route name.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * Fuzzy search by route name.
   * 
   * @example
   * item
   */
  nameLike?: string;
  /**
   * @remarks
   * Page number, starting from 1. Default is 1 if not specified.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, valid range [1, 100]. Default is 10 if not specified.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Fuzzy search by route path.
   * 
   * @example
   * /v1
   */
  pathLike?: string;
  /**
   * @remarks
   * The response includes consumer authorization information.
   * 
   * @example
   * true
   */
  withAuthPolicyInfo?: boolean;
  /**
   * @remarks
   * Each route information in the response carries the list of authorization rules for the specified consumer ID.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * Each route information in the response carries the attachment information for the specified plugin ID.
   * 
   * @example
   * pl-xxx
   */
  withPluginAttachmentByPluginId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerAuthorizationRuleId: 'consumerAuthorizationRuleId',
      deployStatuses: 'deployStatuses',
      domainId: 'domainId',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      name: 'name',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pathLike: 'pathLike',
      withAuthPolicyInfo: 'withAuthPolicyInfo',
      withConsumerInfoById: 'withConsumerInfoById',
      withPluginAttachmentByPluginId: 'withPluginAttachmentByPluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerAuthorizationRuleId: 'string',
      deployStatuses: 'string',
      domainId: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      name: 'string',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pathLike: 'string',
      withAuthPolicyInfo: 'boolean',
      withConsumerInfoById: 'string',
      withPluginAttachmentByPluginId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: ListHttpApiRoutesResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CBEEB8C1-108E-50F0-9BEA-DED79553C309
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHttpApiRoutesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApiRoutesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHttpApiRoutesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHttpApiRoutesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApisRequest extends $dara.Model {
  /**
   * @remarks
   * Cloud-native API Gateway ID.
   * 
   * @example
   * gw-cq2avtllh****
   */
  gatewayId?: string;
  /**
   * @remarks
   * Search keyword, supports fuzzy search by API name or exact search by API ID.
   * 
   * @example
   * test-
   */
  keyword?: string;
  /**
   * @remarks
   * Exact search by name.
   * 
   * @example
   * login
   */
  name?: string;
  /**
   * @remarks
   * Page number, starting from 1, default is 1 if not specified.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, valid range [1, 100], default is 10 if not specified.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-ahr5uil8raz0rq3b
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Type of HTTP API. Multiple types can be passed, separated by ",".
   * - Http
   * - Rest
   * - WebSocket
   * - HttpIngress
   * 
   * @example
   * Http,Rest
   */
  types?: string;
  /**
   * @remarks
   * Each API information in the response carries consumer authentication policy information for the specified environment ID.
   * 
   * @example
   * env-xxx
   */
  withAuthPolicyInEnvironmentId?: string;
  /**
   * @remarks
   * Whether the authentication policy is enabled.
   * 
   * @example
   * true
   */
  withAuthPolicyList?: boolean;
  /**
   * @remarks
   * Each API information in the response carries a list of authorization rules for the specified consumer ID.
   * 
   * @example
   * cs-xxx
   */
  withConsumerInfoById?: string;
  /**
   * @remarks
   * Environment information
   * 
   * @example
   * true
   */
  withEnvironmentInfo?: boolean;
  /**
   * @remarks
   * Environment ID
   * 
   * @example
   * env-ctovu5mm1hksb4q8ln40
   */
  withEnvironmentInfoById?: string;
  /**
   * @remarks
   * Ingress information
   * 
   * @example
   * false
   */
  withIngressInfo?: boolean;
  /**
   * @remarks
   * Plugin ID, used to get plugin release information based on this ID.
   * 
   * @example
   * pl-ct9qn3um1hktue8dqol0
   */
  withPluginAttachmentByPluginId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      keyword: 'keyword',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      types: 'types',
      withAuthPolicyInEnvironmentId: 'withAuthPolicyInEnvironmentId',
      withAuthPolicyList: 'withAuthPolicyList',
      withConsumerInfoById: 'withConsumerInfoById',
      withEnvironmentInfo: 'withEnvironmentInfo',
      withEnvironmentInfoById: 'withEnvironmentInfoById',
      withIngressInfo: 'withIngressInfo',
      withPluginAttachmentByPluginId: 'withPluginAttachmentByPluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      keyword: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      types: 'string',
      withAuthPolicyInEnvironmentId: 'string',
      withAuthPolicyList: 'boolean',
      withConsumerInfoById: 'string',
      withEnvironmentInfo: 'boolean',
      withEnvironmentInfoById: 'string',
      withIngressInfo: 'boolean',
      withPluginAttachmentByPluginId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * API list.
   */
  data?: ListHttpApisResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHttpApisResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpApisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHttpApisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHttpApisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyClassesRequest extends $dara.Model {
  /**
   * @remarks
   * Types of attachment points supported by the policy.
   * 
   * - HttpApi: HttpApi.
   * - Operation: Operation of HttpApi.
   * - GatewayRoute: Gateway route.
   * - GatewayService: Gateway service.
   * - GatewayServicePort: Gateway service port.
   * - Domain: Gateway domain.
   * - Gateway: Gateway.
   * 
   * @example
   * Operation
   */
  attachResourceType?: string;
  /**
   * @remarks
   * Direction of the policy.
   * - Outbound: OutBound.
   * - Inbound: InBound.
   * - Both directions: Both.
   * 
   * @example
   * InBound
   */
  direction?: string;
  /**
   * @remarks
   * Page number, default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Type of the policy template.
   * 
   * @example
   * FlowControl
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceType: 'attachResourceType',
      direction: 'direction',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceType: 'string',
      direction: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

export class ListPolicyClassesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Policy template information.
   */
  data?: ListPolicyClassesResponseBodyData;
  /**
   * @remarks
   * ResponseMessage
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 23B45FA9-7208-5E55-B5CE-B6B2567DD822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListPolicyClassesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyClassesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicyClassesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicyClassesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $dara.Model {
  /**
   * @remarks
   * Cloud-native API Gateway ID.
   * 
   * @example
   * gw-cpv4sqdl*****
   */
  gatewayId?: string;
  /**
   * @remarks
   * Exact query by service name.
   * 
   * @example
   * user-service
   */
  name?: string;
  /**
   * @remarks
   * Page number, starting from 1. Default is 1 if not specified.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, valid range [1, 100]. Default is 10 if not specified.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmxxe5rc6cvla
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Query by service source type. Service sources:
   * - MSE_NACOS: Services from MSE Nacos.
   * - K8S: Services from K8S clusters in container services.
   * - FC3: Services from function computing.
   * - VIP: Services from a fixed address.
   * - DNS: Services from a domain name.
   * 
   * @example
   * MSE_NACOS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: ListServicesResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListServicesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSslCertsRequest extends $dara.Model {
  /**
   * @remarks
   * Name matching keyword.
   * 
   * @example
   * ali
   */
  certNameLike?: string;
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * fun.iot.evideocloud.com.cn
   */
  domainName?: string;
  /**
   * @remarks
   * Page number, default is 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, default is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      certNameLike: 'certNameLike',
      domainName: 'domainName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNameLike: 'string',
      domainName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSslCertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   */
  data?: ListSslCertsResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AADF7197-3384-52AF-A2DE-A66696734129
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSslCertsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSslCertsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSslCertsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSslCertsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: ListZonesResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * E8079207-B651-592A-A565-23E9EE5673B0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListZonesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListZonesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListZonesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartGatewayResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UndeployHttpApiRequest extends $dara.Model {
  /**
   * @example
   * env-cqsmtellhtgvo***
   */
  environmentId?: string;
  /**
   * @example
   * hr-cr82undlhtgrle***
   */
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      routeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UndeployHttpApiResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3ACFC7A7-45A9-58CF-B2D5-765B60254695
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UndeployHttpApiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UndeployHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UndeployHttpApiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * CA certificate identifier
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  caCertIdentifier?: string;
  /**
   * @remarks
   * Certificate identifier
   * 
   * @example
   * 1ef1da5f-38ed-69b3-****-037781890265
   */
  certIdentifier?: string;
  /**
   * @remarks
   * Client CA Certificate
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIFBTCCAu2gAwIBAgIUORLpYPGSFD1YOP6PMbE7Wd/mpTQwDQYJKoZIhvcNAQEL
   * BQAwE************************************************2VwVOJ2gqX3
   * YuGaxvIbDy0iQJ1GMerPRyzJTeVEtdIKT29u0PdFRr4KZWom35qX7G4=
   * -----END CERTIFICATE-----
   */
  clientCACert?: string;
  /**
   * @remarks
   * Set the HTTPS protocol type, whether to enable forced HTTPS redirection.
   * 
   * @example
   * false
   */
  forceHttps?: boolean;
  /**
   * @remarks
   * HTTP/2 settings.
   * 
   * @example
   * Open
   */
  http2Option?: string;
  /**
   * @remarks
   * Whether to enable mTLS mutual authentication
   */
  mTLSEnabled?: boolean;
  /**
   * @remarks
   * The protocol type supported by the domain.
   * 
   * - HTTP: Supports only HTTP protocol.
   * - HTTPS: Supports only HTTPS protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * TLS Cipher Suite Configuration.
   */
  tlsCipherSuitesConfig?: TlsCipherSuitesConfig;
  /**
   * @remarks
   * Maximum TLS protocol version, supports up to TLS 1.3.
   * 
   * @example
   * TLS 1.3
   */
  tlsMax?: string;
  /**
   * @remarks
   * Minimum TLS protocol version, supports down to TLS 1.0.
   * 
   * @example
   * TLS 1.0
   */
  tlsMin?: string;
  static names(): { [key: string]: string } {
    return {
      caCertIdentifier: 'caCertIdentifier',
      certIdentifier: 'certIdentifier',
      clientCACert: 'clientCACert',
      forceHttps: 'forceHttps',
      http2Option: 'http2Option',
      mTLSEnabled: 'mTLSEnabled',
      protocol: 'protocol',
      tlsCipherSuitesConfig: 'tlsCipherSuitesConfig',
      tlsMax: 'tlsMax',
      tlsMin: 'tlsMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertIdentifier: 'string',
      certIdentifier: 'string',
      clientCACert: 'string',
      forceHttps: 'boolean',
      http2Option: 'string',
      mTLSEnabled: 'boolean',
      protocol: 'string',
      tlsCipherSuitesConfig: TlsCipherSuitesConfig,
      tlsMax: 'string',
      tlsMin: 'string',
    };
  }

  validate() {
    if(this.tlsCipherSuitesConfig && typeof (this.tlsCipherSuitesConfig as any).validate === 'function') {
      (this.tlsCipherSuitesConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateDomainResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used for tracing the API call chain.
   * 
   * @example
   * 4BACB05C-3FE2-588F-9148-700C5C026B74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateDomainResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDomainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * Environment alias.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试环境
   */
  alias?: string;
  /**
   * @remarks
   * Description of the environment, which can include information such as the purpose of the environment and its users.
   * 
   * @example
   * 这是xx的xx项目测试环境
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used for tracing the API call chain.
   * 
   * @example
   * 52FB803B-3CD8-5FF8-AAE9-C2B841F6A483
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEnvironmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayFeatureRequest extends $dara.Model {
  /**
   * @remarks
   * Parameter value.
   * 
   * @example
   * "true"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateGatewayFeatureResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 043360DA-ED3B-5386-9B7A-D94DECF99A30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayFeatureResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGatewayFeatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayFeatureResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayNameRequest extends $dara.Model {
  /**
   * @remarks
   * Gateway name.
   * 
   * @example
   * dev-itemcenter-router
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateGatewayNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGatewayNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayNameResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * The AI protocols.
   */
  aiProtocols?: string[];
  /**
   * @remarks
   * The authentication configuration.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The API base path, which must start with a forward slash (/).
   * 
   * This parameter is required.
   * 
   * @example
   * /v1
   */
  basePath?: string;
  /**
   * @remarks
   * The deployment configurations.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * API for testing
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication.
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The HTTP Ingress API configurations.
   */
  ingressConfig?: UpdateHttpApiRequestIngressConfig;
  /**
   * @remarks
   * The protocols that are used to access the API.
   */
  protocols?: string[];
  /**
   * @remarks
   * The versioning configurations.
   */
  versionConfig?: HttpApiVersionConfig;
  static names(): { [key: string]: string } {
    return {
      aiProtocols: 'aiProtocols',
      authConfig: 'authConfig',
      basePath: 'basePath',
      deployConfigs: 'deployConfigs',
      description: 'description',
      enableAuth: 'enableAuth',
      ingressConfig: 'ingressConfig',
      protocols: 'protocols',
      versionConfig: 'versionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiProtocols: { 'type': 'array', 'itemType': 'string' },
      authConfig: AuthConfig,
      basePath: 'string',
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      enableAuth: 'boolean',
      ingressConfig: UpdateHttpApiRequestIngressConfig,
      protocols: { 'type': 'array', 'itemType': 'string' },
      versionConfig: HttpApiVersionConfig,
    };
  }

  validate() {
    if(Array.isArray(this.aiProtocols)) {
      $dara.Model.validateArray(this.aiProtocols);
    }
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(this.ingressConfig && typeof (this.ingressConfig as any).validate === 'function') {
      (this.ingressConfig as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    if(this.versionConfig && typeof (this.versionConfig as any).validate === 'function') {
      (this.versionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHttpApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHttpApiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiOperationRequest extends $dara.Model {
  /**
   * @remarks
   * operation definition.
   */
  operation?: HttpApiOperation;
  static names(): { [key: string]: string } {
    return {
      operation: 'operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: HttpApiOperation,
    };
  }

  validate() {
    if(this.operation && typeof (this.operation as any).validate === 'function') {
      (this.operation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 043360DA-ED3B-5386-9B7A-D94DECF99A30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiOperationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHttpApiOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHttpApiOperationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
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
   * Backend service configuration for the route.
   */
  backendConfig?: UpdateHttpApiRouteRequestBackendConfig;
  /**
   * @remarks
   * Route description.
   * 
   * @example
   * test route
   */
  description?: string;
  /**
   * @remarks
   * List of domain IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * env-cquqsollhtgid***
   */
  environmentId?: string;
  /**
   * @remarks
   * Route match rule.
   */
  match?: HttpRouteMatch;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      description: 'description',
      domainIds: 'domainIds',
      environmentId: 'environmentId',
      match: 'match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: UpdateHttpApiRouteRequestBackendConfig,
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      match: HttpRouteMatch,
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CBEEB8C1-108E-50F0-9BEA-DED79553C309
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpApiRouteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHttpApiRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateHttpApiRouteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Policy configuration
   * 
   * This parameter is required.
   * 
   * @example
   * {"unitNum":1,"timeUnit":"s","enable":true}
   */
  config?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * this is a timeout policy description
   */
  description?: string;
  /**
   * @remarks
   * Policy name
   * 
   * This parameter is required.
   * 
   * @example
   * celue-timeout-test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
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

export class UpdatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * C67DED2B-F19B-5BEC-88C1-D6EB854C***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Gateway version.
   * 
   * @example
   * 2.0.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 043360DA-ED3B-5386-9B7A-D94DECF99A30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeGatewayResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("apig", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Authorize the security group for gateway to access services
   * 
   * @param request - AddGatewaySecurityGroupRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewaySecurityGroupRuleResponse
   */
  async addGatewaySecurityGroupRuleWithOptions(gatewayId: string, request: AddGatewaySecurityGroupRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AddGatewaySecurityGroupRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.portRanges)) {
      body["portRanges"] = request.portRanges;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["securityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGatewaySecurityGroupRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/security-group-rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddGatewaySecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new AddGatewaySecurityGroupRuleResponse({}));
    } else {
      return $dara.cast<AddGatewaySecurityGroupRuleResponse>(await this.execute(params, req, runtime), new AddGatewaySecurityGroupRuleResponse({}));
    }

  }

  /**
   * Authorize the security group for gateway to access services
   * 
   * @param request - AddGatewaySecurityGroupRuleRequest
   * @returns AddGatewaySecurityGroupRuleResponse
   */
  async addGatewaySecurityGroupRule(gatewayId: string, request: AddGatewaySecurityGroupRuleRequest): Promise<AddGatewaySecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGatewaySecurityGroupRuleWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Resource Group Transfer
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/move-resource-group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
    } else {
      return $dara.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
    }

  }

  /**
   * Resource Group Transfer
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Create Domain
   * 
   * @remarks
   * Create Domain.
   * 
   * @param request - CreateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(request: CreateDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.caCertIdentifier)) {
      body["caCertIdentifier"] = request.caCertIdentifier;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      body["certIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.clientCACert)) {
      body["clientCACert"] = request.clientCACert;
    }

    if (!$dara.isNull(request.forceHttps)) {
      body["forceHttps"] = request.forceHttps;
    }

    if (!$dara.isNull(request.http2Option)) {
      body["http2Option"] = request.http2Option;
    }

    if (!$dara.isNull(request.mTLSEnabled)) {
      body["mTLSEnabled"] = request.mTLSEnabled;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tlsCipherSuitesConfig)) {
      body["tlsCipherSuitesConfig"] = request.tlsCipherSuitesConfig;
    }

    if (!$dara.isNull(request.tlsMax)) {
      body["tlsMax"] = request.tlsMax;
    }

    if (!$dara.isNull(request.tlsMin)) {
      body["tlsMin"] = request.tlsMin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDomainResponse>(await this.callApi(params, req, runtime), new CreateDomainResponse({}));
    } else {
      return $dara.cast<CreateDomainResponse>(await this.execute(params, req, runtime), new CreateDomainResponse({}));
    }

  }

  /**
   * Create Domain
   * 
   * @remarks
   * Create Domain.
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDomainWithOptions(request, headers, runtime);
  }

  /**
   * CreateEnvironment
   * 
   * @remarks
   * Create environment.
   * 
   * @deprecated OpenAPI CreateEnvironment is deprecated
   * 
   * @param request - CreateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnvironmentResponse
   */
  // Deprecated
  async createEnvironmentWithOptions(request: CreateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateEnvironmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateEnvironmentResponse>(await this.callApi(params, req, runtime), new CreateEnvironmentResponse({}));
    } else {
      return $dara.cast<CreateEnvironmentResponse>(await this.execute(params, req, runtime), new CreateEnvironmentResponse({}));
    }

  }

  /**
   * CreateEnvironment
   * 
   * @remarks
   * Create environment.
   * 
   * @deprecated OpenAPI CreateEnvironment is deprecated
   * 
   * @param request - CreateEnvironmentRequest
   * @returns CreateEnvironmentResponse
   */
  // Deprecated
  async createEnvironment(request: CreateEnvironmentRequest): Promise<CreateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEnvironmentWithOptions(request, headers, runtime);
  }

  /**
   * Create an API of HTTP type
   * 
   * @param request - CreateHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpApiResponse
   */
  async createHttpApiWithOptions(request: CreateHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aiProtocols)) {
      body["aiProtocols"] = request.aiProtocols;
    }

    if (!$dara.isNull(request.authConfig)) {
      body["authConfig"] = request.authConfig;
    }

    if (!$dara.isNull(request.basePath)) {
      body["basePath"] = request.basePath;
    }

    if (!$dara.isNull(request.deployConfigs)) {
      body["deployConfigs"] = request.deployConfigs;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enableAuth)) {
      body["enableAuth"] = request.enableAuth;
    }

    if (!$dara.isNull(request.ingressConfig)) {
      body["ingressConfig"] = request.ingressConfig;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.protocols)) {
      body["protocols"] = request.protocols;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.versionConfig)) {
      body["versionConfig"] = request.versionConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateHttpApiResponse>(await this.callApi(params, req, runtime), new CreateHttpApiResponse({}));
    } else {
      return $dara.cast<CreateHttpApiResponse>(await this.execute(params, req, runtime), new CreateHttpApiResponse({}));
    }

  }

  /**
   * Create an API of HTTP type
   * 
   * @param request - CreateHttpApiRequest
   * @returns CreateHttpApiResponse
   */
  async createHttpApi(request: CreateHttpApiRequest): Promise<CreateHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHttpApiWithOptions(request, headers, runtime);
  }

  /**
   * Create an Operation for HTTP API
   * 
   * @param request - CreateHttpApiOperationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpApiOperationResponse
   */
  async createHttpApiOperationWithOptions(httpApiId: string, request: CreateHttpApiOperationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateHttpApiOperationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operations)) {
      body["operations"] = request.operations;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateHttpApiOperationResponse>(await this.callApi(params, req, runtime), new CreateHttpApiOperationResponse({}));
    } else {
      return $dara.cast<CreateHttpApiOperationResponse>(await this.execute(params, req, runtime), new CreateHttpApiOperationResponse({}));
    }

  }

  /**
   * Create an Operation for HTTP API
   * 
   * @param request - CreateHttpApiOperationRequest
   * @returns CreateHttpApiOperationResponse
   */
  async createHttpApiOperation(httpApiId: string, request: CreateHttpApiOperationRequest): Promise<CreateHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHttpApiOperationWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Creates a route for an HTTP API.
   * 
   * @param request - CreateHttpApiRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpApiRouteResponse
   */
  async createHttpApiRouteWithOptions(httpApiId: string, request: CreateHttpApiRouteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateHttpApiRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backendConfig)) {
      body["backendConfig"] = request.backendConfig;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainIds)) {
      body["domainIds"] = request.domainIds;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.match)) {
      body["match"] = request.match;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateHttpApiRouteResponse>(await this.callApi(params, req, runtime), new CreateHttpApiRouteResponse({}));
    } else {
      return $dara.cast<CreateHttpApiRouteResponse>(await this.execute(params, req, runtime), new CreateHttpApiRouteResponse({}));
    }

  }

  /**
   * Creates a route for an HTTP API.
   * 
   * @param request - CreateHttpApiRouteRequest
   * @returns CreateHttpApiRouteResponse
   */
  async createHttpApiRoute(httpApiId: string, request: CreateHttpApiRouteRequest): Promise<CreateHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHttpApiRouteWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Create Policy
   * 
   * @param request - CreatePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(request: CreatePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreatePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.className)) {
      body["className"] = request.className;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePolicyResponse>(await this.callApi(params, req, runtime), new CreatePolicyResponse({}));
    } else {
      return $dara.cast<CreatePolicyResponse>(await this.execute(params, req, runtime), new CreatePolicyResponse({}));
    }

  }

  /**
   * Create Policy
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPolicyWithOptions(request, headers, runtime);
  }

  /**
   * Create policy resource mount
   * 
   * @param request - CreatePolicyAttachmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyAttachmentResponse
   */
  async createPolicyAttachmentWithOptions(request: CreatePolicyAttachmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreatePolicyAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceId)) {
      body["attachResourceId"] = request.attachResourceId;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      body["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.policyId)) {
      body["policyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-attachments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePolicyAttachmentResponse>(await this.callApi(params, req, runtime), new CreatePolicyAttachmentResponse({}));
    } else {
      return $dara.cast<CreatePolicyAttachmentResponse>(await this.execute(params, req, runtime), new CreatePolicyAttachmentResponse({}));
    }

  }

  /**
   * Create policy resource mount
   * 
   * @param request - CreatePolicyAttachmentRequest
   * @returns CreatePolicyAttachmentResponse
   */
  async createPolicyAttachment(request: CreatePolicyAttachmentRequest): Promise<CreatePolicyAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPolicyAttachmentWithOptions(request, headers, runtime);
  }

  /**
   * Create Service
   * 
   * @remarks
   * The interface supports creating multiple services.
   * 
   * @param request - CreateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
  async createServiceWithOptions(request: CreateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceConfigs)) {
      body["serviceConfigs"] = request.serviceConfigs;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["sourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
    } else {
      return $dara.cast<CreateServiceResponse>(await this.execute(params, req, runtime), new CreateServiceResponse({}));
    }

  }

  /**
   * Create Service
   * 
   * @remarks
   * The interface supports creating multiple services.
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  /**
   * DeleteDomain
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(domainId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDomainResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${$dara.URL.percentEncode(domainId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
    } else {
      return $dara.cast<DeleteDomainResponse>(await this.execute(params, req, runtime), new DeleteDomainResponse({}));
    }

  }

  /**
   * DeleteDomain
   * @returns DeleteDomainResponse
   */
  async deleteDomain(domainId: string): Promise<DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDomainWithOptions(domainId, headers, runtime);
  }

  /**
   * DeleteEnvironment
   * 
   * @deprecated OpenAPI DeleteEnvironment is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnvironmentResponse
   */
  // Deprecated
  async deleteEnvironmentWithOptions(environmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteEnvironmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${$dara.URL.percentEncode(environmentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteEnvironmentResponse>(await this.callApi(params, req, runtime), new DeleteEnvironmentResponse({}));
    } else {
      return $dara.cast<DeleteEnvironmentResponse>(await this.execute(params, req, runtime), new DeleteEnvironmentResponse({}));
    }

  }

  /**
   * DeleteEnvironment
   * 
   * @deprecated OpenAPI DeleteEnvironment is deprecated
   * @returns DeleteEnvironmentResponse
   */
  // Deprecated
  async deleteEnvironment(environmentId: string): Promise<DeleteEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentWithOptions(environmentId, headers, runtime);
  }

  /**
   * Delete Gateway
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayResponse
   */
  async deleteGatewayWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteGatewayResponse>(await this.callApi(params, req, runtime), new DeleteGatewayResponse({}));
    } else {
      return $dara.cast<DeleteGatewayResponse>(await this.execute(params, req, runtime), new DeleteGatewayResponse({}));
    }

  }

  /**
   * Delete Gateway
   * @returns DeleteGatewayResponse
   */
  async deleteGateway(gatewayId: string): Promise<DeleteGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayWithOptions(gatewayId, headers, runtime);
  }

  /**
   * Delete the security group rule of a gateway
   * 
   * @param request - DeleteGatewaySecurityGroupRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewaySecurityGroupRuleResponse
   */
  async deleteGatewaySecurityGroupRuleWithOptions(gatewayId: string, securityGroupRuleId: string, request: DeleteGatewaySecurityGroupRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteGatewaySecurityGroupRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cascadingDelete)) {
      query["cascadingDelete"] = request.cascadingDelete;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewaySecurityGroupRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/security-group-rules/${$dara.URL.percentEncode(securityGroupRuleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteGatewaySecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new DeleteGatewaySecurityGroupRuleResponse({}));
    } else {
      return $dara.cast<DeleteGatewaySecurityGroupRuleResponse>(await this.execute(params, req, runtime), new DeleteGatewaySecurityGroupRuleResponse({}));
    }

  }

  /**
   * Delete the security group rule of a gateway
   * 
   * @param request - DeleteGatewaySecurityGroupRuleRequest
   * @returns DeleteGatewaySecurityGroupRuleResponse
   */
  async deleteGatewaySecurityGroupRule(gatewayId: string, securityGroupRuleId: string, request: DeleteGatewaySecurityGroupRuleRequest): Promise<DeleteGatewaySecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewaySecurityGroupRuleWithOptions(gatewayId, securityGroupRuleId, request, headers, runtime);
  }

  /**
   * Deletes an HTTP API.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpApiResponse
   */
  async deleteHttpApiWithOptions(httpApiId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteHttpApiResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteHttpApiResponse>(await this.callApi(params, req, runtime), new DeleteHttpApiResponse({}));
    } else {
      return $dara.cast<DeleteHttpApiResponse>(await this.execute(params, req, runtime), new DeleteHttpApiResponse({}));
    }

  }

  /**
   * Deletes an HTTP API.
   * @returns DeleteHttpApiResponse
   */
  async deleteHttpApi(httpApiId: string): Promise<DeleteHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHttpApiWithOptions(httpApiId, headers, runtime);
  }

  /**
   * Delete Operation
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpApiOperationResponse
   */
  async deleteHttpApiOperationWithOptions(httpApiId: string, operationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteHttpApiOperationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations/${$dara.URL.percentEncode(operationId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteHttpApiOperationResponse>(await this.callApi(params, req, runtime), new DeleteHttpApiOperationResponse({}));
    } else {
      return $dara.cast<DeleteHttpApiOperationResponse>(await this.execute(params, req, runtime), new DeleteHttpApiOperationResponse({}));
    }

  }

  /**
   * Delete Operation
   * @returns DeleteHttpApiOperationResponse
   */
  async deleteHttpApiOperation(httpApiId: string, operationId: string): Promise<DeleteHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHttpApiOperationWithOptions(httpApiId, operationId, headers, runtime);
  }

  /**
   * Delete the route of an HttpApi
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpApiRouteResponse
   */
  async deleteHttpApiRouteWithOptions(httpApiId: string, routeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteHttpApiRouteResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes/${$dara.URL.percentEncode(routeId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteHttpApiRouteResponse>(await this.callApi(params, req, runtime), new DeleteHttpApiRouteResponse({}));
    } else {
      return $dara.cast<DeleteHttpApiRouteResponse>(await this.execute(params, req, runtime), new DeleteHttpApiRouteResponse({}));
    }

  }

  /**
   * Delete the route of an HttpApi
   * @returns DeleteHttpApiRouteResponse
   */
  async deleteHttpApiRoute(httpApiId: string, routeId: string): Promise<DeleteHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHttpApiRouteWithOptions(httpApiId, routeId, headers, runtime);
  }

  /**
   * Delete Policy
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeletePolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies/${$dara.URL.percentEncode(policyId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePolicyResponse>(await this.callApi(params, req, runtime), new DeletePolicyResponse({}));
    } else {
      return $dara.cast<DeletePolicyResponse>(await this.execute(params, req, runtime), new DeletePolicyResponse({}));
    }

  }

  /**
   * Delete Policy
   * @returns DeletePolicyResponse
   */
  async deletePolicy(policyId: string): Promise<DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePolicyWithOptions(policyId, headers, runtime);
  }

  /**
   * Delete policy resource attachment
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyAttachmentResponse
   */
  async deletePolicyAttachmentWithOptions(policyAttachmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeletePolicyAttachmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-attachments/${$dara.URL.percentEncode(policyAttachmentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePolicyAttachmentResponse>(await this.callApi(params, req, runtime), new DeletePolicyAttachmentResponse({}));
    } else {
      return $dara.cast<DeletePolicyAttachmentResponse>(await this.execute(params, req, runtime), new DeletePolicyAttachmentResponse({}));
    }

  }

  /**
   * Delete policy resource attachment
   * @returns DeletePolicyAttachmentResponse
   */
  async deletePolicyAttachment(policyAttachmentId: string): Promise<DeletePolicyAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePolicyAttachmentWithOptions(policyAttachmentId, headers, runtime);
  }

  /**
   * Deploy HttpApi
   * 
   * @param request - DeployHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployHttpApiResponse
   */
  async deployHttpApiWithOptions(httpApiId: string, request: DeployHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeployHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.restApiConfig)) {
      body["restApiConfig"] = request.restApiConfig;
    }

    if (!$dara.isNull(request.routeId)) {
      body["routeId"] = request.routeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/deploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeployHttpApiResponse>(await this.callApi(params, req, runtime), new DeployHttpApiResponse({}));
    } else {
      return $dara.cast<DeployHttpApiResponse>(await this.execute(params, req, runtime), new DeployHttpApiResponse({}));
    }

  }

  /**
   * Deploy HttpApi
   * 
   * @param request - DeployHttpApiRequest
   * @returns DeployHttpApiResponse
   */
  async deployHttpApi(httpApiId: string, request: DeployHttpApiRequest): Promise<DeployHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Export HTTP API
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportHttpApiResponse
   */
  async exportHttpApiWithOptions(httpApiId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ExportHttpApiResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/export`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ExportHttpApiResponse>(await this.callApi(params, req, runtime), new ExportHttpApiResponse({}));
    } else {
      return $dara.cast<ExportHttpApiResponse>(await this.execute(params, req, runtime), new ExportHttpApiResponse({}));
    }

  }

  /**
   * Export HTTP API
   * @returns ExportHttpApiResponse
   */
  async exportHttpApi(httpApiId: string): Promise<ExportHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportHttpApiWithOptions(httpApiId, headers, runtime);
  }

  /**
   * Get Monitoring/Logging Dashboard Interface
   * 
   * @param tmpReq - GetDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDashboardResponse
   */
  async getDashboardWithOptions(gatewayId: string, tmpReq: GetDashboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDashboardResponse> {
    tmpReq.validate();
    let request = new GetDashboardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "filter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.apiId)) {
      query["apiId"] = request.apiId;
    }

    if (!$dara.isNull(request.filterShrink)) {
      query["filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pluginClassId)) {
      query["pluginClassId"] = request.pluginClassId;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDashboard",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/dashboards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDashboardResponse>(await this.callApi(params, req, runtime), new GetDashboardResponse({}));
    } else {
      return $dara.cast<GetDashboardResponse>(await this.execute(params, req, runtime), new GetDashboardResponse({}));
    }

  }

  /**
   * Get Monitoring/Logging Dashboard Interface
   * 
   * @param request - GetDashboardRequest
   * @returns GetDashboardResponse
   */
  async getDashboard(gatewayId: string, request: GetDashboardRequest): Promise<GetDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDashboardWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Query domain details
   * 
   * @param request - GetDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
   */
  async getDomainWithOptions(domainId: string, request: GetDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDomainResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.withStatistics)) {
      query["withStatistics"] = request.withStatistics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${$dara.URL.percentEncode(domainId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDomainResponse>(await this.callApi(params, req, runtime), new GetDomainResponse({}));
    } else {
      return $dara.cast<GetDomainResponse>(await this.execute(params, req, runtime), new GetDomainResponse({}));
    }

  }

  /**
   * Query domain details
   * 
   * @param request - GetDomainRequest
   * @returns GetDomainResponse
   */
  async getDomain(domainId: string, request: GetDomainRequest): Promise<GetDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainWithOptions(domainId, request, headers, runtime);
  }

  /**
   * GetEnvironment
   * 
   * @deprecated OpenAPI GetEnvironment is deprecated
   * 
   * @param request - GetEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnvironmentResponse
   */
  // Deprecated
  async getEnvironmentWithOptions(environmentId: string, request: GetEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetEnvironmentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.withStatistics)) {
      query["withStatistics"] = request.withStatistics;
    }

    if (!$dara.isNull(request.withVpcInfo)) {
      query["withVpcInfo"] = request.withVpcInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${$dara.URL.percentEncode(environmentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetEnvironmentResponse>(await this.callApi(params, req, runtime), new GetEnvironmentResponse({}));
    } else {
      return $dara.cast<GetEnvironmentResponse>(await this.execute(params, req, runtime), new GetEnvironmentResponse({}));
    }

  }

  /**
   * GetEnvironment
   * 
   * @deprecated OpenAPI GetEnvironment is deprecated
   * 
   * @param request - GetEnvironmentRequest
   * @returns GetEnvironmentResponse
   */
  // Deprecated
  async getEnvironment(environmentId: string, request: GetEnvironmentRequest): Promise<GetEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentWithOptions(environmentId, request, headers, runtime);
  }

  /**
   * Get a gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayResponse
   */
  async getGatewayWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetGatewayResponse>(await this.callApi(params, req, runtime), new GetGatewayResponse({}));
    } else {
      return $dara.cast<GetGatewayResponse>(await this.execute(params, req, runtime), new GetGatewayResponse({}));
    }

  }

  /**
   * Get a gateway.
   * @returns GetGatewayResponse
   */
  async getGateway(gatewayId: string): Promise<GetGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGatewayWithOptions(gatewayId, headers, runtime);
  }

  /**
   * Read HttpApi
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpApiResponse
   */
  async getHttpApiWithOptions(httpApiId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHttpApiResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHttpApiResponse>(await this.callApi(params, req, runtime), new GetHttpApiResponse({}));
    } else {
      return $dara.cast<GetHttpApiResponse>(await this.execute(params, req, runtime), new GetHttpApiResponse({}));
    }

  }

  /**
   * Read HttpApi
   * @returns GetHttpApiResponse
   */
  async getHttpApi(httpApiId: string): Promise<GetHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHttpApiWithOptions(httpApiId, headers, runtime);
  }

  /**
   * Get Operation
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpApiOperationResponse
   */
  async getHttpApiOperationWithOptions(httpApiId: string, operationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHttpApiOperationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations/${$dara.URL.percentEncode(operationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHttpApiOperationResponse>(await this.callApi(params, req, runtime), new GetHttpApiOperationResponse({}));
    } else {
      return $dara.cast<GetHttpApiOperationResponse>(await this.execute(params, req, runtime), new GetHttpApiOperationResponse({}));
    }

  }

  /**
   * Get Operation
   * @returns GetHttpApiOperationResponse
   */
  async getHttpApiOperation(httpApiId: string, operationId: string): Promise<GetHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHttpApiOperationWithOptions(httpApiId, operationId, headers, runtime);
  }

  /**
   * Get the details of an HttpApi route
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpApiRouteResponse
   */
  async getHttpApiRouteWithOptions(httpApiId: string, routeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHttpApiRouteResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes/${$dara.URL.percentEncode(routeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHttpApiRouteResponse>(await this.callApi(params, req, runtime), new GetHttpApiRouteResponse({}));
    } else {
      return $dara.cast<GetHttpApiRouteResponse>(await this.execute(params, req, runtime), new GetHttpApiRouteResponse({}));
    }

  }

  /**
   * Get the details of an HttpApi route
   * @returns GetHttpApiRouteResponse
   */
  async getHttpApiRoute(httpApiId: string, routeId: string): Promise<GetHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHttpApiRouteWithOptions(httpApiId, routeId, headers, runtime);
  }

  /**
   * GetPolicy
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyResponse
   */
  async getPolicyWithOptions(policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies/${$dara.URL.percentEncode(policyId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPolicyResponse>(await this.callApi(params, req, runtime), new GetPolicyResponse({}));
    } else {
      return $dara.cast<GetPolicyResponse>(await this.execute(params, req, runtime), new GetPolicyResponse({}));
    }

  }

  /**
   * GetPolicy
   * @returns GetPolicyResponse
   */
  async getPolicy(policyId: string): Promise<GetPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPolicyWithOptions(policyId, headers, runtime);
  }

  /**
   * Query Policy Resource Attachment
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyAttachmentResponse
   */
  async getPolicyAttachmentWithOptions(policyAttachmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetPolicyAttachmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-attachments/${$dara.URL.percentEncode(policyAttachmentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPolicyAttachmentResponse>(await this.callApi(params, req, runtime), new GetPolicyAttachmentResponse({}));
    } else {
      return $dara.cast<GetPolicyAttachmentResponse>(await this.execute(params, req, runtime), new GetPolicyAttachmentResponse({}));
    }

  }

  /**
   * Query Policy Resource Attachment
   * @returns GetPolicyAttachmentResponse
   */
  async getPolicyAttachment(policyAttachmentId: string): Promise<GetPolicyAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPolicyAttachmentWithOptions(policyAttachmentId, headers, runtime);
  }

  /**
   * Get resource overview information
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceOverviewResponse
   */
  async getResourceOverviewWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetResourceOverviewResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceOverview",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/overview/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetResourceOverviewResponse>(await this.callApi(params, req, runtime), new GetResourceOverviewResponse({}));
    } else {
      return $dara.cast<GetResourceOverviewResponse>(await this.execute(params, req, runtime), new GetResourceOverviewResponse({}));
    }

  }

  /**
   * Get resource overview information
   * @returns GetResourceOverviewResponse
   */
  async getResourceOverview(): Promise<GetResourceOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceOverviewWithOptions(headers, runtime);
  }

  /**
   * Get Service Details
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services/${$dara.URL.percentEncode(serviceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
    } else {
      return $dara.cast<GetServiceResponse>(await this.execute(params, req, runtime), new GetServiceResponse({}));
    }

  }

  /**
   * Get Service Details
   * @returns GetServiceResponse
   */
  async getService(serviceId: string): Promise<GetServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(serviceId, headers, runtime);
  }

  /**
   * Retrieve Tracing Configuration
   * 
   * @param request - GetTraceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceConfigResponse
   */
  async getTraceConfigWithOptions(gatewayId: string, request: GetTraceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTraceConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTraceConfig",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/trace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTraceConfigResponse>(await this.callApi(params, req, runtime), new GetTraceConfigResponse({}));
    } else {
      return $dara.cast<GetTraceConfigResponse>(await this.execute(params, req, runtime), new GetTraceConfigResponse({}));
    }

  }

  /**
   * Retrieve Tracing Configuration
   * 
   * @param request - GetTraceConfigRequest
   * @returns GetTraceConfigResponse
   */
  async getTraceConfig(gatewayId: string, request: GetTraceConfigRequest): Promise<GetTraceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTraceConfigWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Import HttpApi
   * 
   * @param request - ImportHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportHttpApiResponse
   */
  async importHttpApiWithOptions(request: ImportHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ImportHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.specContentBase64)) {
      body["specContentBase64"] = request.specContentBase64;
    }

    if (!$dara.isNull(request.specFileUrl)) {
      body["specFileUrl"] = request.specFileUrl;
    }

    if (!$dara.isNull(request.specOssConfig)) {
      body["specOssConfig"] = request.specOssConfig;
    }

    if (!$dara.isNull(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    if (!$dara.isNull(request.targetHttpApiId)) {
      body["targetHttpApiId"] = request.targetHttpApiId;
    }

    if (!$dara.isNull(request.versionConfig)) {
      body["versionConfig"] = request.versionConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ImportHttpApiResponse>(await this.callApi(params, req, runtime), new ImportHttpApiResponse({}));
    } else {
      return $dara.cast<ImportHttpApiResponse>(await this.execute(params, req, runtime), new ImportHttpApiResponse({}));
    }

  }

  /**
   * Import HttpApi
   * 
   * @param request - ImportHttpApiRequest
   * @returns ImportHttpApiResponse
   */
  async importHttpApi(request: ImportHttpApiRequest): Promise<ImportHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.importHttpApiWithOptions(request, headers, runtime);
  }

  /**
   * ListDomains
   * 
   * @param request - ListDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: ListDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDomainsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDomainsResponse>(await this.callApi(params, req, runtime), new ListDomainsResponse({}));
    } else {
      return $dara.cast<ListDomainsResponse>(await this.execute(params, req, runtime), new ListDomainsResponse({}));
    }

  }

  /**
   * ListDomains
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDomainsWithOptions(request, headers, runtime);
  }

  /**
   * ListEnvironments
   * 
   * @deprecated OpenAPI ListEnvironments is deprecated
   * 
   * @param request - ListEnvironmentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentsResponse
   */
  // Deprecated
  async listEnvironmentsWithOptions(request: ListEnvironmentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListEnvironmentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliasLike)) {
      query["aliasLike"] = request.aliasLike;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayNameLike)) {
      query["gatewayNameLike"] = request.gatewayNameLike;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvironments",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new ListEnvironmentsResponse({}));
    } else {
      return $dara.cast<ListEnvironmentsResponse>(await this.execute(params, req, runtime), new ListEnvironmentsResponse({}));
    }

  }

  /**
   * ListEnvironments
   * 
   * @deprecated OpenAPI ListEnvironments is deprecated
   * 
   * @param request - ListEnvironmentsRequest
   * @returns ListEnvironmentsResponse
   */
  // Deprecated
  async listEnvironments(request: ListEnvironmentsRequest): Promise<ListEnvironmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve the list of created cloud-native gateways
   * 
   * @param tmpReq - ListGatewaysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewaysResponse
   */
  async listGatewaysWithOptions(tmpReq: ListGatewaysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListGatewaysResponse> {
    tmpReq.validate();
    let request = new ListGatewaysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGateways",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListGatewaysResponse>(await this.callApi(params, req, runtime), new ListGatewaysResponse({}));
    } else {
      return $dara.cast<ListGatewaysResponse>(await this.execute(params, req, runtime), new ListGatewaysResponse({}));
    }

  }

  /**
   * Retrieve the list of created cloud-native gateways
   * 
   * @param request - ListGatewaysRequest
   * @returns ListGatewaysResponse
   */
  async listGateways(request: ListGatewaysRequest): Promise<ListGatewaysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewaysWithOptions(request, headers, runtime);
  }

  /**
   * List Operations
   * 
   * @param request - ListHttpApiOperationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpApiOperationsResponse
   */
  async listHttpApiOperationsWithOptions(httpApiId: string, request: ListHttpApiOperationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListHttpApiOperationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerAuthorizationRuleId)) {
      query["consumerAuthorizationRuleId"] = request.consumerAuthorizationRuleId;
    }

    if (!$dara.isNull(request.method)) {
      query["method"] = request.method;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pathLike)) {
      query["pathLike"] = request.pathLike;
    }

    if (!$dara.isNull(request.withConsumerInEnvironmentId)) {
      query["withConsumerInEnvironmentId"] = request.withConsumerInEnvironmentId;
    }

    if (!$dara.isNull(request.withConsumerInfoById)) {
      query["withConsumerInfoById"] = request.withConsumerInfoById;
    }

    if (!$dara.isNull(request.withPluginAttachmentByPluginId)) {
      query["withPluginAttachmentByPluginId"] = request.withPluginAttachmentByPluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpApiOperations",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHttpApiOperationsResponse>(await this.callApi(params, req, runtime), new ListHttpApiOperationsResponse({}));
    } else {
      return $dara.cast<ListHttpApiOperationsResponse>(await this.execute(params, req, runtime), new ListHttpApiOperationsResponse({}));
    }

  }

  /**
   * List Operations
   * 
   * @param request - ListHttpApiOperationsRequest
   * @returns ListHttpApiOperationsResponse
   */
  async listHttpApiOperations(httpApiId: string, request: ListHttpApiOperationsRequest): Promise<ListHttpApiOperationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHttpApiOperationsWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Create a route for HttpApi
   * 
   * @param request - ListHttpApiRoutesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpApiRoutesResponse
   */
  async listHttpApiRoutesWithOptions(httpApiId: string, request: ListHttpApiRoutesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListHttpApiRoutesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerAuthorizationRuleId)) {
      query["consumerAuthorizationRuleId"] = request.consumerAuthorizationRuleId;
    }

    if (!$dara.isNull(request.deployStatuses)) {
      query["deployStatuses"] = request.deployStatuses;
    }

    if (!$dara.isNull(request.domainId)) {
      query["domainId"] = request.domainId;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pathLike)) {
      query["pathLike"] = request.pathLike;
    }

    if (!$dara.isNull(request.withAuthPolicyInfo)) {
      query["withAuthPolicyInfo"] = request.withAuthPolicyInfo;
    }

    if (!$dara.isNull(request.withConsumerInfoById)) {
      query["withConsumerInfoById"] = request.withConsumerInfoById;
    }

    if (!$dara.isNull(request.withPluginAttachmentByPluginId)) {
      query["withPluginAttachmentByPluginId"] = request.withPluginAttachmentByPluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpApiRoutes",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHttpApiRoutesResponse>(await this.callApi(params, req, runtime), new ListHttpApiRoutesResponse({}));
    } else {
      return $dara.cast<ListHttpApiRoutesResponse>(await this.execute(params, req, runtime), new ListHttpApiRoutesResponse({}));
    }

  }

  /**
   * Create a route for HttpApi
   * 
   * @param request - ListHttpApiRoutesRequest
   * @returns ListHttpApiRoutesResponse
   */
  async listHttpApiRoutes(httpApiId: string, request: ListHttpApiRoutesRequest): Promise<ListHttpApiRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHttpApiRoutesWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * List HTTP APIs
   * 
   * @param request - ListHttpApisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpApisResponse
   */
  async listHttpApisWithOptions(request: ListHttpApisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListHttpApisResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.types)) {
      query["types"] = request.types;
    }

    if (!$dara.isNull(request.withAuthPolicyInEnvironmentId)) {
      query["withAuthPolicyInEnvironmentId"] = request.withAuthPolicyInEnvironmentId;
    }

    if (!$dara.isNull(request.withAuthPolicyList)) {
      query["withAuthPolicyList"] = request.withAuthPolicyList;
    }

    if (!$dara.isNull(request.withConsumerInfoById)) {
      query["withConsumerInfoById"] = request.withConsumerInfoById;
    }

    if (!$dara.isNull(request.withEnvironmentInfo)) {
      query["withEnvironmentInfo"] = request.withEnvironmentInfo;
    }

    if (!$dara.isNull(request.withEnvironmentInfoById)) {
      query["withEnvironmentInfoById"] = request.withEnvironmentInfoById;
    }

    if (!$dara.isNull(request.withIngressInfo)) {
      query["withIngressInfo"] = request.withIngressInfo;
    }

    if (!$dara.isNull(request.withPluginAttachmentByPluginId)) {
      query["withPluginAttachmentByPluginId"] = request.withPluginAttachmentByPluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpApis",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHttpApisResponse>(await this.callApi(params, req, runtime), new ListHttpApisResponse({}));
    } else {
      return $dara.cast<ListHttpApisResponse>(await this.execute(params, req, runtime), new ListHttpApisResponse({}));
    }

  }

  /**
   * List HTTP APIs
   * 
   * @param request - ListHttpApisRequest
   * @returns ListHttpApisResponse
   */
  async listHttpApis(request: ListHttpApisRequest): Promise<ListHttpApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHttpApisWithOptions(request, headers, runtime);
  }

  /**
   * ListPolicyClasses
   * 
   * @param request - ListPolicyClassesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyClassesResponse
   */
  async listPolicyClassesWithOptions(request: ListPolicyClassesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListPolicyClassesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceType)) {
      query["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyClasses",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-classes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPolicyClassesResponse>(await this.callApi(params, req, runtime), new ListPolicyClassesResponse({}));
    } else {
      return $dara.cast<ListPolicyClassesResponse>(await this.execute(params, req, runtime), new ListPolicyClassesResponse({}));
    }

  }

  /**
   * ListPolicyClasses
   * 
   * @param request - ListPolicyClassesRequest
   * @returns ListPolicyClassesResponse
   */
  async listPolicyClasses(request: ListPolicyClassesRequest): Promise<ListPolicyClassesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPolicyClassesWithOptions(request, headers, runtime);
  }

  /**
   * Get Service List
   * 
   * @param request - ListServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(request: ListServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServices",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
    } else {
      return $dara.cast<ListServicesResponse>(await this.execute(params, req, runtime), new ListServicesResponse({}));
    }

  }

  /**
   * Get Service List
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  /**
   * ListSslCerts
   * 
   * @param request - ListSslCertsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSslCertsResponse
   */
  async listSslCertsWithOptions(request: ListSslCertsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListSslCertsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certNameLike)) {
      query["certNameLike"] = request.certNameLike;
    }

    if (!$dara.isNull(request.domainName)) {
      query["domainName"] = request.domainName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSslCerts",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ssl/certs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSslCertsResponse>(await this.callApi(params, req, runtime), new ListSslCertsResponse({}));
    } else {
      return $dara.cast<ListSslCertsResponse>(await this.execute(params, req, runtime), new ListSslCertsResponse({}));
    }

  }

  /**
   * ListSslCerts
   * 
   * @param request - ListSslCertsRequest
   * @returns ListSslCertsResponse
   */
  async listSslCerts(request: ListSslCertsRequest): Promise<ListSslCertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSslCertsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve the availability zones under a cloud-native API gateway region
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListZonesResponse
   */
  async listZonesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListZonesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListZones",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/zones`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListZonesResponse>(await this.callApi(params, req, runtime), new ListZonesResponse({}));
    } else {
      return $dara.cast<ListZonesResponse>(await this.execute(params, req, runtime), new ListZonesResponse({}));
    }

  }

  /**
   * Retrieve the availability zones under a cloud-native API gateway region
   * @returns ListZonesResponse
   */
  async listZones(): Promise<ListZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listZonesWithOptions(headers, runtime);
  }

  /**
   * Gateway Restart
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartGatewayResponse
   */
  async restartGatewayWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RestartGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RestartGatewayResponse>(await this.callApi(params, req, runtime), new RestartGatewayResponse({}));
    } else {
      return $dara.cast<RestartGatewayResponse>(await this.execute(params, req, runtime), new RestartGatewayResponse({}));
    }

  }

  /**
   * Gateway Restart
   * @returns RestartGatewayResponse
   */
  async restartGateway(gatewayId: string): Promise<RestartGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartGatewayWithOptions(gatewayId, headers, runtime);
  }

  /**
   * 取消部署HttpApi
   * 
   * @param request - UndeployHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UndeployHttpApiResponse
   */
  async undeployHttpApiWithOptions(httpApiId: string, request: UndeployHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UndeployHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.routeId)) {
      body["routeId"] = request.routeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UndeployHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/undeploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UndeployHttpApiResponse>(await this.callApi(params, req, runtime), new UndeployHttpApiResponse({}));
    } else {
      return $dara.cast<UndeployHttpApiResponse>(await this.execute(params, req, runtime), new UndeployHttpApiResponse({}));
    }

  }

  /**
   * 取消部署HttpApi
   * 
   * @param request - UndeployHttpApiRequest
   * @returns UndeployHttpApiResponse
   */
  async undeployHttpApi(httpApiId: string, request: UndeployHttpApiRequest): Promise<UndeployHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.undeployHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * UpdateDomain
   * 
   * @remarks
   * 只有类型为**容器服务**的来源允许更新监听Ingress的配置。
   * 
   * @param request - UpdateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainResponse
   */
  async updateDomainWithOptions(domainId: string, request: UpdateDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.caCertIdentifier)) {
      body["caCertIdentifier"] = request.caCertIdentifier;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      body["certIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.clientCACert)) {
      body["clientCACert"] = request.clientCACert;
    }

    if (!$dara.isNull(request.forceHttps)) {
      body["forceHttps"] = request.forceHttps;
    }

    if (!$dara.isNull(request.http2Option)) {
      body["http2Option"] = request.http2Option;
    }

    if (!$dara.isNull(request.mTLSEnabled)) {
      body["mTLSEnabled"] = request.mTLSEnabled;
    }

    if (!$dara.isNull(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.tlsCipherSuitesConfig)) {
      body["tlsCipherSuitesConfig"] = request.tlsCipherSuitesConfig;
    }

    if (!$dara.isNull(request.tlsMax)) {
      body["tlsMax"] = request.tlsMax;
    }

    if (!$dara.isNull(request.tlsMin)) {
      body["tlsMin"] = request.tlsMin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${$dara.URL.percentEncode(domainId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDomainResponse>(await this.callApi(params, req, runtime), new UpdateDomainResponse({}));
    } else {
      return $dara.cast<UpdateDomainResponse>(await this.execute(params, req, runtime), new UpdateDomainResponse({}));
    }

  }

  /**
   * UpdateDomain
   * 
   * @remarks
   * 只有类型为**容器服务**的来源允许更新监听Ingress的配置。
   * 
   * @param request - UpdateDomainRequest
   * @returns UpdateDomainResponse
   */
  async updateDomain(domainId: string, request: UpdateDomainRequest): Promise<UpdateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDomainWithOptions(domainId, request, headers, runtime);
  }

  /**
   * UpdateEnvironment
   * 
   * @deprecated OpenAPI UpdateEnvironment is deprecated
   * 
   * @param request - UpdateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnvironmentResponse
   */
  // Deprecated
  async updateEnvironmentWithOptions(environmentId: string, request: UpdateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateEnvironmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${$dara.URL.percentEncode(environmentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateEnvironmentResponse>(await this.callApi(params, req, runtime), new UpdateEnvironmentResponse({}));
    } else {
      return $dara.cast<UpdateEnvironmentResponse>(await this.execute(params, req, runtime), new UpdateEnvironmentResponse({}));
    }

  }

  /**
   * UpdateEnvironment
   * 
   * @deprecated OpenAPI UpdateEnvironment is deprecated
   * 
   * @param request - UpdateEnvironmentRequest
   * @returns UpdateEnvironmentResponse
   */
  // Deprecated
  async updateEnvironment(environmentId: string, request: UpdateEnvironmentRequest): Promise<UpdateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnvironmentWithOptions(environmentId, request, headers, runtime);
  }

  /**
   * Get the feature configuration of the gateway
   * 
   * @param request - UpdateGatewayFeatureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayFeatureResponse
   */
  async updateGatewayFeatureWithOptions(gatewayId: string, name: string, request: UpdateGatewayFeatureRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateGatewayFeatureResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.value)) {
      body["value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayFeature",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/gateway-features/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateGatewayFeatureResponse>(await this.callApi(params, req, runtime), new UpdateGatewayFeatureResponse({}));
    } else {
      return $dara.cast<UpdateGatewayFeatureResponse>(await this.execute(params, req, runtime), new UpdateGatewayFeatureResponse({}));
    }

  }

  /**
   * Get the feature configuration of the gateway
   * 
   * @param request - UpdateGatewayFeatureRequest
   * @returns UpdateGatewayFeatureResponse
   */
  async updateGatewayFeature(gatewayId: string, name: string, request: UpdateGatewayFeatureRequest): Promise<UpdateGatewayFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayFeatureWithOptions(gatewayId, name, request, headers, runtime);
  }

  /**
   * Change the name of a gateway instance
   * 
   * @param request - UpdateGatewayNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayNameResponse
   */
  async updateGatewayNameWithOptions(gatewayId: string, request: UpdateGatewayNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateGatewayNameResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayName",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/name`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateGatewayNameResponse>(await this.callApi(params, req, runtime), new UpdateGatewayNameResponse({}));
    } else {
      return $dara.cast<UpdateGatewayNameResponse>(await this.execute(params, req, runtime), new UpdateGatewayNameResponse({}));
    }

  }

  /**
   * Change the name of a gateway instance
   * 
   * @param request - UpdateGatewayNameRequest
   * @returns UpdateGatewayNameResponse
   */
  async updateGatewayName(gatewayId: string, request: UpdateGatewayNameRequest): Promise<UpdateGatewayNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayNameWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Updates an HTTP API.
   * 
   * @param request - UpdateHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpApiResponse
   */
  async updateHttpApiWithOptions(httpApiId: string, request: UpdateHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aiProtocols)) {
      body["aiProtocols"] = request.aiProtocols;
    }

    if (!$dara.isNull(request.authConfig)) {
      body["authConfig"] = request.authConfig;
    }

    if (!$dara.isNull(request.basePath)) {
      body["basePath"] = request.basePath;
    }

    if (!$dara.isNull(request.deployConfigs)) {
      body["deployConfigs"] = request.deployConfigs;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enableAuth)) {
      body["enableAuth"] = request.enableAuth;
    }

    if (!$dara.isNull(request.ingressConfig)) {
      body["ingressConfig"] = request.ingressConfig;
    }

    if (!$dara.isNull(request.protocols)) {
      body["protocols"] = request.protocols;
    }

    if (!$dara.isNull(request.versionConfig)) {
      body["versionConfig"] = request.versionConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateHttpApiResponse>(await this.callApi(params, req, runtime), new UpdateHttpApiResponse({}));
    } else {
      return $dara.cast<UpdateHttpApiResponse>(await this.execute(params, req, runtime), new UpdateHttpApiResponse({}));
    }

  }

  /**
   * Updates an HTTP API.
   * 
   * @param request - UpdateHttpApiRequest
   * @returns UpdateHttpApiResponse
   */
  async updateHttpApi(httpApiId: string, request: UpdateHttpApiRequest): Promise<UpdateHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Update Operation
   * 
   * @param request - UpdateHttpApiOperationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpApiOperationResponse
   */
  async updateHttpApiOperationWithOptions(httpApiId: string, operationId: string, request: UpdateHttpApiOperationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateHttpApiOperationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operation)) {
      body["operation"] = request.operation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations/${$dara.URL.percentEncode(operationId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateHttpApiOperationResponse>(await this.callApi(params, req, runtime), new UpdateHttpApiOperationResponse({}));
    } else {
      return $dara.cast<UpdateHttpApiOperationResponse>(await this.execute(params, req, runtime), new UpdateHttpApiOperationResponse({}));
    }

  }

  /**
   * Update Operation
   * 
   * @param request - UpdateHttpApiOperationRequest
   * @returns UpdateHttpApiOperationResponse
   */
  async updateHttpApiOperation(httpApiId: string, operationId: string, request: UpdateHttpApiOperationRequest): Promise<UpdateHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHttpApiOperationWithOptions(httpApiId, operationId, request, headers, runtime);
  }

  /**
   * Update the route of HttpApi
   * 
   * @param request - UpdateHttpApiRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpApiRouteResponse
   */
  async updateHttpApiRouteWithOptions(httpApiId: string, routeId: string, request: UpdateHttpApiRouteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateHttpApiRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backendConfig)) {
      body["backendConfig"] = request.backendConfig;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainIds)) {
      body["domainIds"] = request.domainIds;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.match)) {
      body["match"] = request.match;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes/${$dara.URL.percentEncode(routeId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateHttpApiRouteResponse>(await this.callApi(params, req, runtime), new UpdateHttpApiRouteResponse({}));
    } else {
      return $dara.cast<UpdateHttpApiRouteResponse>(await this.execute(params, req, runtime), new UpdateHttpApiRouteResponse({}));
    }

  }

  /**
   * Update the route of HttpApi
   * 
   * @param request - UpdateHttpApiRouteRequest
   * @returns UpdateHttpApiRouteResponse
   */
  async updateHttpApiRoute(httpApiId: string, routeId: string, request: UpdateHttpApiRouteRequest): Promise<UpdateHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHttpApiRouteWithOptions(httpApiId, routeId, request, headers, runtime);
  }

  /**
   * Update Policy
   * 
   * @param request - UpdatePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyResponse
   */
  async updatePolicyWithOptions(policyId: string, request: UpdatePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdatePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies/${$dara.URL.percentEncode(policyId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePolicyResponse>(await this.callApi(params, req, runtime), new UpdatePolicyResponse({}));
    } else {
      return $dara.cast<UpdatePolicyResponse>(await this.execute(params, req, runtime), new UpdatePolicyResponse({}));
    }

  }

  /**
   * Update Policy
   * 
   * @param request - UpdatePolicyRequest
   * @returns UpdatePolicyResponse
   */
  async updatePolicy(policyId: string, request: UpdatePolicyRequest): Promise<UpdatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePolicyWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Upgrade the gateway version
   * 
   * @param request - UpgradeGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeGatewayResponse
   */
  async upgradeGatewayWithOptions(gatewayId: string, request: UpgradeGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpgradeGatewayResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeGatewayResponse>(await this.callApi(params, req, runtime), new UpgradeGatewayResponse({}));
    } else {
      return $dara.cast<UpgradeGatewayResponse>(await this.execute(params, req, runtime), new UpgradeGatewayResponse({}));
    }

  }

  /**
   * Upgrade the gateway version
   * 
   * @param request - UpgradeGatewayRequest
   * @returns UpgradeGatewayResponse
   */
  async upgradeGateway(gatewayId: string, request: UpgradeGatewayRequest): Promise<UpgradeGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeGatewayWithOptions(gatewayId, request, headers, runtime);
  }

}
