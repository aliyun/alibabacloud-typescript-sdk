// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetailsOfflineRefundInfos } from "./TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetailsOfflineRefundInfos";


export class TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetails extends $dara.Model {
  /**
   * @example
   * 123456
   */
  offlineRefundId?: string;
  offlineRefundInfos?: TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetailsOfflineRefundInfos[];
  /**
   * @example
   * 1
   */
  offlineRefundType?: string;
  /**
   * @example
   * 10000
   */
  refundTotalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      offlineRefundId: 'offline_refund_id',
      offlineRefundInfos: 'offline_refund_infos',
      offlineRefundType: 'offline_refund_type',
      refundTotalPrice: 'refund_total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineRefundId: 'string',
      offlineRefundInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetailsOfflineRefundInfos },
      offlineRefundType: 'string',
      refundTotalPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.offlineRefundInfos)) {
      $dara.Model.validateArray(this.offlineRefundInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

