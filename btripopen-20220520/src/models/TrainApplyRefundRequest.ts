// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainApplyRefundRequestRefundTrainInfos } from "./TrainApplyRefundRequestRefundTrainInfos";


export class TrainApplyRefundRequest extends $dara.Model {
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
   * 123456
   */
  outOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456778
   */
  outRefundId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  refundTrainInfos?: TrainApplyRefundRequestRefundTrainInfos[];
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outRefundId: 'out_refund_id',
      refundTrainInfos: 'refund_train_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      outOrderId: 'string',
      outRefundId: 'string',
      refundTrainInfos: { 'type': 'array', 'itemType': TrainApplyRefundRequestRefundTrainInfos },
    };
  }

  validate() {
    if(Array.isArray(this.refundTrainInfos)) {
      $dara.Model.validateArray(this.refundTrainInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

