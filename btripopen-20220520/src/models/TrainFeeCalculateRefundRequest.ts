// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainFeeCalculateRefundRequestRefundTrainInfos } from "./TrainFeeCalculateRefundRequestRefundTrainInfos";


export class TrainFeeCalculateRefundRequest extends $dara.Model {
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
  refundTrainInfos?: TrainFeeCalculateRefundRequestRefundTrainInfos[];
  static names(): { [key: string]: string } {
    return {
      distributeOrderId: 'distribute_order_id',
      orderId: 'order_id',
      refundTrainInfos: 'refund_train_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeOrderId: 'string',
      orderId: 'string',
      refundTrainInfos: { 'type': 'array', 'itemType': TrainFeeCalculateRefundRequestRefundTrainInfos },
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

