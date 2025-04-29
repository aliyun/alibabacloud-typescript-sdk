// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderQueryV2ResponseBodyModuleChangeTicketInfoList } from "./TrainOrderQueryV2responseBodyModuleChangeTicketInfoList";
import { TrainOrderQueryV2ResponseBodyModuleInvoiceInfo } from "./TrainOrderQueryV2responseBodyModuleInvoiceInfo";
import { TrainOrderQueryV2ResponseBodyModuleOrderBaseInfo } from "./TrainOrderQueryV2responseBodyModuleOrderBaseInfo";
import { TrainOrderQueryV2ResponseBodyModulePassengerInfoList } from "./TrainOrderQueryV2responseBodyModulePassengerInfoList";
import { TrainOrderQueryV2ResponseBodyModulePriceInfoList } from "./TrainOrderQueryV2responseBodyModulePriceInfoList";
import { TrainOrderQueryV2ResponseBodyModuleRefundTicketInfoList } from "./TrainOrderQueryV2responseBodyModuleRefundTicketInfoList";
import { TrainOrderQueryV2ResponseBodyModuleTrainOrderInfo } from "./TrainOrderQueryV2responseBodyModuleTrainOrderInfo";


export class TrainOrderQueryV2ResponseBodyModule extends $dara.Model {
  changeTicketInfoList?: TrainOrderQueryV2ResponseBodyModuleChangeTicketInfoList[];
  invoiceInfo?: TrainOrderQueryV2ResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: TrainOrderQueryV2ResponseBodyModuleOrderBaseInfo;
  passengerInfoList?: TrainOrderQueryV2ResponseBodyModulePassengerInfoList[];
  priceInfoList?: TrainOrderQueryV2ResponseBodyModulePriceInfoList[];
  refundTicketInfoList?: TrainOrderQueryV2ResponseBodyModuleRefundTicketInfoList[];
  trainOrderInfo?: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfo;
  static names(): { [key: string]: string } {
    return {
      changeTicketInfoList: 'change_ticket_info_list',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerInfoList: 'passenger_info_list',
      priceInfoList: 'price_info_list',
      refundTicketInfoList: 'refund_ticket_info_list',
      trainOrderInfo: 'train_order_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTicketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModuleChangeTicketInfoList },
      invoiceInfo: TrainOrderQueryV2ResponseBodyModuleInvoiceInfo,
      orderBaseInfo: TrainOrderQueryV2ResponseBodyModuleOrderBaseInfo,
      passengerInfoList: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModulePassengerInfoList },
      priceInfoList: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModulePriceInfoList },
      refundTicketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryV2ResponseBodyModuleRefundTicketInfoList },
      trainOrderInfo: TrainOrderQueryV2ResponseBodyModuleTrainOrderInfo,
    };
  }

  validate() {
    if(Array.isArray(this.changeTicketInfoList)) {
      $dara.Model.validateArray(this.changeTicketInfoList);
    }
    if(this.invoiceInfo && typeof (this.invoiceInfo as any).validate === 'function') {
      (this.invoiceInfo as any).validate();
    }
    if(this.orderBaseInfo && typeof (this.orderBaseInfo as any).validate === 'function') {
      (this.orderBaseInfo as any).validate();
    }
    if(Array.isArray(this.passengerInfoList)) {
      $dara.Model.validateArray(this.passengerInfoList);
    }
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
    }
    if(Array.isArray(this.refundTicketInfoList)) {
      $dara.Model.validateArray(this.refundTicketInfoList);
    }
    if(this.trainOrderInfo && typeof (this.trainOrderInfo as any).validate === 'function') {
      (this.trainOrderInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

