// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiDomainInfo } from "./HttpApiDomainInfo";
import { HttpApiApiInfoEnvironmentsGatewayInfo } from "./HttpApiApiInfoEnvironmentsGatewayInfo";
import { HttpApiApiInfoEnvironmentsServiceConfigs } from "./HttpApiApiInfoEnvironmentsServiceConfigs";
import { HttpApiApiInfoEnvironmentsSubDomains } from "./HttpApiApiInfoEnvironmentsSubDomains";


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

