// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfo } from "./HttpApiApiInfo";
import { EnvironmentInfo } from "./EnvironmentInfo";
import { GatewayInfo } from "./GatewayInfo";


export class GetConsumerAuthorizationRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API information.
   */
  apiInfo?: HttpApiApiInfo;
  /**
   * @remarks
   * Filters the list of operations by a specific consumer authorization rule ID. Only authorized operations are returned in the response.
   * 
   * @example
   * car-ctgdn8em1hko5krqq03g
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * cs-ctgdn2um1hkossul8gvg
   */
  consumerId?: string;
  /**
   * @remarks
   * The creation timestamp. Unit: milliseconds.
   * 
   * @example
   * 1750852089975
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The publishing status of the API in the current environment.
   * 
   * @example
   * ""
   */
  deployStatus?: string;
  /**
   * @remarks
   * The environment information.
   */
  environmentInfo?: EnvironmentInfo;
  /**
   * @remarks
   * The expiry mode. Valid values: LongTerm and ShortTerm.
   * 
   * @example
   * LongTerm
   */
  expireMode?: string;
  /**
   * @remarks
   * The rule status.
   * 
   * @example
   * true
   */
  expireStatus?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1750852089975
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The gateway information.
   */
  gatewayInfo?: GatewayInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 53102737-1E4E-5A8B-8E0A-4184B0959B84
   */
  requestId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * API
   */
  resourceType?: string;
  /**
   * @remarks
   * The update timestamp. Unit: milliseconds.
   * 
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

