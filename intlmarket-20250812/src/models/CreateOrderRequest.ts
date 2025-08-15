// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dhjggh7
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {\\"productCode\\":\\"cmgj00063418\\",\\"skuCode\\":\\"postpay\\",\\"pricingCycle\\":\\"YEAR\\"}
   */
  commodity?: string;
  /**
   * @example
   * ros
   */
  orderSouce?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INSTANCE_BUY
   */
  orderType?: string;
  ownerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      orderSouce: 'OrderSouce',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      paymentType: 'PaymentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: 'string',
      orderSouce: 'string',
      orderType: 'string',
      ownerId: 'string',
      paymentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

