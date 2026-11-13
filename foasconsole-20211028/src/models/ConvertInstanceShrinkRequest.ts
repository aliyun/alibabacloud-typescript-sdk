// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of subscription cycles.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The instance ID of the order.
   * 
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  isAutoRenew?: boolean;
  /**
   * @remarks
   * The resource specifications of the workspace.
   * 
   * This parameter is required.
   */
  namespaceResourceSpecsShrink?: string;
  /**
   * @remarks
   * The subscription cycle.
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
   * The region.
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
   * - true: Use a coupon.
   * - false: Do not use a coupon.
   */
  usePromotionCode?: boolean;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      isAutoRenew: 'IsAutoRenew',
      namespaceResourceSpecsShrink: 'NamespaceResourceSpecs',
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
      isAutoRenew: 'boolean',
      namespaceResourceSpecsShrink: 'string',
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

