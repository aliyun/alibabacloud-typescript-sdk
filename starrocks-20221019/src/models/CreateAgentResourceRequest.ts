// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentResourceRequest extends $dara.Model {
  /**
   * @example
   * True
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @example
   * 2
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prePay
   */
  payType?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @example
   * 2345
   */
  promotionOptionNo?: string;
  /**
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

