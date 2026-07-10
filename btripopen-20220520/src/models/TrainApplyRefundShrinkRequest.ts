// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainApplyRefundShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outRefundId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  refundTrainInfosShrink?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outRefundId: 'out_refund_id',
      refundTrainInfosShrink: 'refund_train_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      outOrderId: 'string',
      outRefundId: 'string',
      refundTrainInfosShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

