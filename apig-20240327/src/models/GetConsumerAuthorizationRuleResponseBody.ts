// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfo } from "./HttpApiApiInfo";
import { EnvironmentInfo } from "./EnvironmentInfo";
import { GatewayInfo } from "./GatewayInfo";


export class GetConsumerAuthorizationRuleResponseBody extends $dara.Model {
  apiInfo?: HttpApiApiInfo;
  /**
   * @example
   * car-ctgdn8em1hko5krqq03g
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @example
   * cs-ctgdn2um1hkossul8gvg
   */
  consumerId?: string;
  /**
   * @example
   * 1750852089975
   */
  createTimestamp?: number;
  /**
   * @example
   * ""
   */
  deployStatus?: string;
  environmentInfo?: EnvironmentInfo;
  /**
   * @example
   * LongTerm
   */
  expireMode?: string;
  /**
   * @example
   * true
   */
  expireStatus?: string;
  /**
   * @example
   * 1750852089975
   */
  expireTimestamp?: number;
  gatewayInfo?: GatewayInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 53102737-1E4E-5A8B-8E0A-4184B0959B84
   */
  requestId?: string;
  /**
   * @example
   * API
   */
  resourceType?: string;
  /**
   * @example
   * 1750852089975
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'apiInfo',
      consumerAuthorizationRuleId: 'consumerAuthorizationRuleId',
      consumerId: 'consumerId',
      createTimestamp: 'createTimestamp',
      deployStatus: 'deployStatus',
      environmentInfo: 'environmentInfo',
      expireMode: 'expireMode',
      expireStatus: 'expireStatus',
      expireTimestamp: 'expireTimestamp',
      gatewayInfo: 'gatewayInfo',
      requestId: 'requestId',
      resourceType: 'resourceType',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: HttpApiApiInfo,
      consumerAuthorizationRuleId: 'string',
      consumerId: 'string',
      createTimestamp: 'number',
      deployStatus: 'string',
      environmentInfo: EnvironmentInfo,
      expireMode: 'string',
      expireStatus: 'string',
      expireTimestamp: 'number',
      gatewayInfo: GatewayInfo,
      requestId: 'string',
      resourceType: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.apiInfo && typeof (this.apiInfo as any).validate === 'function') {
      (this.apiInfo as any).validate();
    }
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

