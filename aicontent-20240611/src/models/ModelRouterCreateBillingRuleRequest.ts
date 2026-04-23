// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateBillingRuleRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @example
   * {}
   */
  pricingConfig?: any;
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
      modelId: 'modelId',
      pricingConfig: 'pricingConfig',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      effectiveTime: 'string',
      expireTime: 'string',
      modelId: 'number',
      pricingConfig: 'any',
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

