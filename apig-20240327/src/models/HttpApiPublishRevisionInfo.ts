// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDomainInfo } from "./HttpApiDomainInfo";
import { HttpApiOperationInfo } from "./HttpApiOperationInfo";
import { HttpApiBackendMatchConditions } from "./HttpApiBackendMatchConditions";


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

