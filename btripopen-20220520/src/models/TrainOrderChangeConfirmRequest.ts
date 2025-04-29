// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderChangeConfirmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890
   */
  changeApplyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  changeSettleAmount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1002145190081005400
   */
  orderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  outChangeApplyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeApplyId: 'change_apply_id',
      changeSettleAmount: 'change_settle_amount',
      orderId: 'order_id',
      outChangeApplyId: 'out_change_apply_id',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeApplyId: 'string',
      changeSettleAmount: 'number',
      orderId: 'string',
      outChangeApplyId: 'string',
      outOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

