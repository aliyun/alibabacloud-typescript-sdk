// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainApplyChangeShrinkRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  acceptNoSeat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  changeTrainInfoSShrink?: string;
  /**
   * @example
   * 0
   */
  forceMatch?: string;
  /**
   * @example
   * false
   */
  isPayNow?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1017028198411054446
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
      acceptNoSeat: 'accept_no_seat',
      changeTrainInfoSShrink: 'change_train_info_s',
      forceMatch: 'force_match',
      isPayNow: 'is_pay_now',
      orderId: 'order_id',
      outChangeApplyId: 'out_change_apply_id',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptNoSeat: 'string',
      changeTrainInfoSShrink: 'string',
      forceMatch: 'string',
      isPayNow: 'boolean',
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

