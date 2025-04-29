// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderDetailQueryResponseBodyModuleBookInfos } from "./TrainOrderDetailQueryResponseBodyModuleBookInfos";
import { TrainOrderDetailQueryResponseBodyModuleChangeInfos } from "./TrainOrderDetailQueryResponseBodyModuleChangeInfos";
import { TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetails } from "./TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetails";
import { TrainOrderDetailQueryResponseBodyModulePassengerInfoS } from "./TrainOrderDetailQueryResponseBodyModulePassengerInfoS";
import { TrainOrderDetailQueryResponseBodyModuleRefundInfos } from "./TrainOrderDetailQueryResponseBodyModuleRefundInfos";


export class TrainOrderDetailQueryResponseBodyModule extends $dara.Model {
  bookInfos?: TrainOrderDetailQueryResponseBodyModuleBookInfos;
  changeInfos?: TrainOrderDetailQueryResponseBodyModuleChangeInfos[];
  offlineRefundDetails?: TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetails[];
  /**
   * @example
   * 1017028198411054446
   */
  orderId?: string;
  /**
   * @example
   * 3703184209587306496
   */
  outOrderId?: string;
  passengerInfoS?: TrainOrderDetailQueryResponseBodyModulePassengerInfoS[];
  refundInfos?: TrainOrderDetailQueryResponseBodyModuleRefundInfos[];
  static names(): { [key: string]: string } {
    return {
      bookInfos: 'book_infos',
      changeInfos: 'change_infos',
      offlineRefundDetails: 'offlineRefundDetails',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      passengerInfoS: 'passenger_info_s',
      refundInfos: 'refund_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookInfos: TrainOrderDetailQueryResponseBodyModuleBookInfos,
      changeInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleChangeInfos },
      offlineRefundDetails: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetails },
      orderId: 'string',
      outOrderId: 'string',
      passengerInfoS: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModulePassengerInfoS },
      refundInfos: { 'type': 'array', 'itemType': TrainOrderDetailQueryResponseBodyModuleRefundInfos },
    };
  }

  validate() {
    if(this.bookInfos && typeof (this.bookInfos as any).validate === 'function') {
      (this.bookInfos as any).validate();
    }
    if(Array.isArray(this.changeInfos)) {
      $dara.Model.validateArray(this.changeInfos);
    }
    if(Array.isArray(this.offlineRefundDetails)) {
      $dara.Model.validateArray(this.offlineRefundDetails);
    }
    if(Array.isArray(this.passengerInfoS)) {
      $dara.Model.validateArray(this.passengerInfoS);
    }
    if(Array.isArray(this.refundInfos)) {
      $dara.Model.validateArray(this.refundInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

