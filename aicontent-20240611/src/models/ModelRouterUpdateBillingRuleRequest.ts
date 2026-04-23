// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterUpdateBillingRuleRequest extends $dara.Model {
  /**
   * @example
   * token_tiered
   */
  billingType?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  effectiveTime?: string;
  /**
   * @example
   * 2025-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * {}
   */
  pricingConfig?: any;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      billingType: 'billingType',
      effectiveTime: 'effectiveTime',
      expireTime: 'expireTime',
      pricingConfig: 'pricingConfig',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      effectiveTime: 'string',
      expireTime: 'string',
      pricingConfig: 'any',
      status: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

