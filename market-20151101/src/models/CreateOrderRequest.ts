// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2709c68a-d569-4819-9c5d-1222ed2ee924
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commodity?: string;
  /**
   * @example
   * abc
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
  /**
   * @example
   * 111********11
   */
  ownerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HAND
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

