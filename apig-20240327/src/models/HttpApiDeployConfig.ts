// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDeployConfigCustomDomainInfos } from "./HttpApiDeployConfigCustomDomainInfos";
import { GatewayInfo } from "./GatewayInfo";
import { HttpApiMockContract } from "./HttpApiMockContract";
import { HttpApiDeployConfigPolicyConfigs } from "./HttpApiDeployConfigPolicyConfigs";
import { Backend } from "./Backend";
import { HttpApiDeployConfigServiceConfigs } from "./HttpApiDeployConfigServiceConfigs";
import { HttpApiDeployConfigSubDomains } from "./HttpApiDeployConfigSubDomains";


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

