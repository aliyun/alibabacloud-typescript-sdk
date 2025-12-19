// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewAppInstanceRequest extends $dara.Model {
  /**
   * @example
   * WD20250718165839000001
   */
  bizId?: string;
  /**
   * @example
   * fdfjafdfadfenjeora
   */
  clientToken?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  extend?: string;
  /**
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      clientToken: 'ClientToken',
      duration: 'Duration',
      extend: 'Extend',
      paymentType: 'PaymentType',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      clientToken: 'string',
      duration: 'number',
      extend: 'string',
      paymentType: 'string',
      pricingCycle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

