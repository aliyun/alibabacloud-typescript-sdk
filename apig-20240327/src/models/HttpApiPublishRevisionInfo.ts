// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDomainInfo } from "./HttpApiDomainInfo";
import { HttpApiOperationInfo } from "./HttpApiOperationInfo";
import { HttpApiBackendMatchConditions } from "./HttpApiBackendMatchConditions";


export class HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * The associated service ID.
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
   * The K8s service name.
   * 
   * @example
   * demo-service
   */
  name?: string;
  /**
   * @remarks
   * The K8s namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The service port.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The service protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The service weight.
   * 
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
   * @remarks
   * The associated service ID.
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
   * The function name.
   * 
   * @example
   * demo-function
   */
  name?: string;
  /**
   * @remarks
   * The function version or alias.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
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
   * @remarks
   * The associated service ID.
   * 
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  /**
   * @remarks
   * The service group.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The matching conditions.
   */
  match?: HttpApiBackendMatchConditions;
  /**
   * @remarks
   * The Nacos service name.
   * 
   * @example
   * spring-demo
   */
  name?: string;
  /**
   * @remarks
   * The Nacos namespace.
   * 
   * @example
   * public
   */
  namespace?: string;
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
   * @remarks
   * The type of the cloud service.
   * 
   * @example
   * FC
   */
  cloudProductType?: string;
  /**
   * @remarks
   * The ACK configurations.
   */
  containerServiceConfigs?: HttpApiPublishRevisionInfoCloudProductConfigContainerServiceConfigs[];
  /**
   * @remarks
   * The Function Compute configurations.
   */
  functionConfigs?: HttpApiPublishRevisionInfoCloudProductConfigFunctionConfigs[];
  /**
   * @remarks
   * The MSE Nacos configurations.
   */
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
  /**
   * @remarks
   * The DNS domain names.
   */
  dnsList?: string[];
  /**
   * @remarks
   * The matching condition. This condition is valid only in content-based routing.
   */
  match?: HttpApiBackendMatchConditions;
  /**
   * @remarks
   * The weight. Valid values: [1,100]. This parameter is valid only in proportional routing.
   * 
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
   * Instance 1
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
   * @remarks
   * The environment alias.
   * 
   * @example
   * Test
   */
  alias?: string;
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
   * The instance information.
   */
  gatewayInfo?: HttpApiPublishRevisionInfoEnvironmentInfoGatewayInfo;
  /**
   * @remarks
   * The environment name.
   * 
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
   * The service port.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The service protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
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
  /**
   * @remarks
   * The IP addresses.
   */
  endpoints?: string[];
  /**
   * @remarks
   * The matching condition. This condition is valid only in content-based routing.
   */
  match?: HttpApiBackendMatchConditions;
  /**
   * @remarks
   * The weight. Valid values: [1,100]. This parameter is valid only in proportional routing.
   * 
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

export class HttpApiPublishRevisionInfo extends $dara.Model {
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
   * The cloud service configurations.
   */
  cloudProductConfig?: HttpApiPublishRevisionInfoCloudProductConfig;
  /**
   * @remarks
   * The publishing timestamp.
   * 
   * @example
   * 1718807057927
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The custom domain names.
   */
  customDomains?: HttpApiDomainInfo[];
  /**
   * @remarks
   * The configurations of DNS domain names. For single-service publishing, only one entry is allowed. For other scenarios, multiple entries are allowed.
   */
  dnsConfigs?: HttpApiPublishRevisionInfoDnsConfigs[];
  /**
   * @remarks
   * The environment information.
   * 
   * @example
   * env-xxx
   */
  environmentInfo?: HttpApiPublishRevisionInfoEnvironmentInfo;
  /**
   * @remarks
   * Specifies whether the current version is used.
   * 
   * @example
   * true
   */
  isCurrentVersion?: boolean;
  /**
   * @remarks
   * The operations.
   */
  operations?: HttpApiOperationInfo[];
  /**
   * @remarks
   * The published version.
   * 
   * @example
   * apr-xxx
   */
  revisionId?: string;
  /**
   * @remarks
   * The configurations of existing services. For single-service publishing, only one entry is allowed. For other scenarios, multiple entries are allowed.
   */
  serviceConfigs?: HttpApiPublishRevisionInfoServiceConfigs[];
  /**
   * @remarks
   * The default domain names of the environment.
   * 
   * @example
   * env-xxx.com
   */
  subDomains?: HttpApiDomainInfo[];
  /**
   * @remarks
   * The configurations of fixed IP addresses. For single-service publishing, only one entry is allowed. For other scenarios, multiple entries are allowed.
   */
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

