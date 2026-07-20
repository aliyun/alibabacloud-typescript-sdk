// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderRefundDetailQueryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZLJD12241231000002
   */
  cooperatorOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1012000000000000
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      cooperatorOrderId: 'cooperator_order_id',
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cooperatorOrderId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

