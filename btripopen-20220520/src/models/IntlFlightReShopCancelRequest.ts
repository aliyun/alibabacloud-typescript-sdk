// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopCancelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: string;
  outOrderId?: string;
  outReShopApplyId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  reShopApplyId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outReShopApplyId: 'out_re_shop_apply_id',
      reShopApplyId: 're_shop_apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      outOrderId: 'string',
      outReShopApplyId: 'string',
      reShopApplyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

