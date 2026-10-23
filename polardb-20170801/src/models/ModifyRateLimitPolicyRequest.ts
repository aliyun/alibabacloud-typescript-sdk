// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRateLimitPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway instance. You can obtain the ID from the GwClusterId parameter returned by CreateGateway.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The ID of the throttling policy to be modified. You can obtain the ID from the PolicyId parameter returned by CreateRateLimitPolicy.
   * 
   * This parameter is required.
   * 
   * @example
   * 02eccf7c61cf4d05a543075ee907f3**
   */
  policyId?: string;
  /**
   * @remarks
   * The limit on the number of requests per minute.
   * 
   * @example
   * 10
   */
  rateLimitRpm?: string;
  /**
   * @remarks
   * The limit on the number of tokens per minute.
   * 
   * @example
   * 10
   */
  rateLimitTpm?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      gwClusterId: 'GwClusterId',
      policyId: 'PolicyId',
      rateLimitRpm: 'RateLimitRpm',
      rateLimitTpm: 'RateLimitTpm',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gwClusterId: 'string',
      policyId: 'string',
      rateLimitRpm: 'string',
      rateLimitTpm: 'string',
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

