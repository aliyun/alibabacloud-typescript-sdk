// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainFeeCalculateRefundShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  distributeOrderId?: string;
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
   */
  refundTrainInfosShrink?: string;
  static names(): { [key: string]: string } {
    return {
      distributeOrderId: 'distribute_order_id',
      orderId: 'order_id',
      refundTrainInfosShrink: 'refund_train_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeOrderId: 'string',
      orderId: 'string',
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

