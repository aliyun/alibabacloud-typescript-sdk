// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetails } from "./TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetails";


export class TrainFeeCalculateRefundResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 123445
   */
  distributeOrderId?: string;
  /**
   * @example
   * 1017002195370467200
   */
  orderId?: string;
  refundTrainDetails?: TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetails[];
  static names(): { [key: string]: string } {
    return {
      distributeOrderId: 'distribute_order_id',
      orderId: 'order_id',
      refundTrainDetails: 'refund_train_details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeOrderId: 'string',
      orderId: 'string',
      refundTrainDetails: { 'type': 'array', 'itemType': TrainFeeCalculateRefundResponseBodyModuleRefundTrainDetails },
    };
  }

  validate() {
    if(Array.isArray(this.refundTrainDetails)) {
      $dara.Model.validateArray(this.refundTrainDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

