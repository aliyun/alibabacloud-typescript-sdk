// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRateLimitPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The rate limit policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 02eccf7c61cf4d05a543075ee907f3**
   */
  policyId?: string;
  /**
   * @remarks
   * The maximum number of requests per minute.
   * 
   * @example
   * 10
   */
  rateLimitRpm?: string;
  /**
   * @remarks
   * The maximum number of tokens per minute.
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

