// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRenewInstancePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of subscription periods.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sc_flinkserverless_public_cn-7e22ae5sess
   */
  instanceId?: string;
  /**
   * @remarks
   * The unit of the subscription period.
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 500043499350689
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - true: Uses a coupon.
   * - false: Does not use a coupon.
   */
  usePromotionCode?: boolean;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      pricingCycle: 'PricingCycle',
      promotionCode: 'PromotionCode',
      region: 'Region',
      usePromotionCode: 'UsePromotionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      pricingCycle: 'string',
      promotionCode: 'string',
      region: 'string',
      usePromotionCode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

