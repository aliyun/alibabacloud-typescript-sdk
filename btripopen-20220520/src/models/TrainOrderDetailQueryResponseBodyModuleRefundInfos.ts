// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfo } from "./TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfo";


export class TrainOrderDetailQueryResponseBodyModuleRefundInfos extends $dara.Model {
  /**
   * @example
   * 1111
   */
  failCode?: string;
  failMsg?: string;
  /**
   * @example
   * 123456778
   */
  outRefundId?: string;
  /**
   * @remarks
   * String
   * 
   * @example
   * 123456
   */
  refundId?: string;
  refundTrainInfo?: TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfo[];
  /**
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failCode: 'fail_code',
      failMsg: 'fail_msg',
      outRefundId: 'out_refund_id',
      refundId: 'refund_id',
      refundTrainInfo: 'refund_train_info',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCode: 'string',
      failMsg: 'string',
      outRefundId: 'string',
      refundId: 'string',
      refundTrainInfo: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleRefundInfosRefundTrainInfo },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.refundTrainInfo)) {
      $dara.Model.validateArray(this.refundTrainInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

