// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Enable auto-renewal. This parameter is valid only when payType is set to PrePaid. Auto-renewal is disabled by default.
   * 
   * @example
   * True
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Number of CUs. A CU (Compute Unit) is the basic unit of service measurement. 1 CU = 1 CPU core + 4 GiB memory. For memory-enhanced instance family, 1 CU = 1 CPU core + 8 GiB memory.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @remarks
   * Duration. This parameter is valid only when payType is set to PrePaid.
   * 
   * @example
   * 2
   */
  duration?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * Payment type:
   * 
   * 1. Subscription (prePaid).
   * 
   * 2. Pay-as-you-go (postPaid).
   * 
   * This parameter is required.
   * 
   * @example
   * prePay
   */
  payType?: string;
  /**
   * @remarks
   * Unit of subscription duration:
   * 
   * - Month
   * 
   * - Year
   * 
   * This parameter is valid only when payType is set to PrePaid.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Coupon ID.
   * 
   * @example
   * 2345
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * Compute group specification type.
   * 
   * @example
   * standard
   */
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      cu: 'Cu',
      duration: 'Duration',
      instanceId: 'InstanceId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      specType: 'SpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      cu: 'number',
      duration: 'number',
      instanceId: 'string',
      payType: 'string',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      specType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

