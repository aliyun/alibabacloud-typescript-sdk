// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderQueryResponseBodyModuleChangeTicketInfoList } from "./TrainOrderQueryResponseBodyModuleChangeTicketInfoList";
import { TrainOrderQueryResponseBodyModuleInvoiceInfo } from "./TrainOrderQueryResponseBodyModuleInvoiceInfo";
import { TrainOrderQueryResponseBodyModuleOrderBaseInfo } from "./TrainOrderQueryResponseBodyModuleOrderBaseInfo";
import { TrainOrderQueryResponseBodyModulePassengerInfoList } from "./TrainOrderQueryResponseBodyModulePassengerInfoList";
import { TrainOrderQueryResponseBodyModulePriceInfoList } from "./TrainOrderQueryResponseBodyModulePriceInfoList";
import { TrainOrderQueryResponseBodyModuleRefundTicketInfoList } from "./TrainOrderQueryResponseBodyModuleRefundTicketInfoList";
import { TrainOrderQueryResponseBodyModuleTicketInfoList } from "./TrainOrderQueryResponseBodyModuleTicketInfoList";
import { TrainOrderQueryResponseBodyModuleTrainInfo } from "./TrainOrderQueryResponseBodyModuleTrainInfo";


export class TrainOrderQueryResponseBodyModule extends $dara.Model {
  changeTicketInfoList?: TrainOrderQueryResponseBodyModuleChangeTicketInfoList[];
  invoiceInfo?: TrainOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: TrainOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerInfoList?: TrainOrderQueryResponseBodyModulePassengerInfoList[];
  priceInfoList?: TrainOrderQueryResponseBodyModulePriceInfoList[];
  refundTicketInfoList?: TrainOrderQueryResponseBodyModuleRefundTicketInfoList[];
  ticketInfoList?: TrainOrderQueryResponseBodyModuleTicketInfoList[];
  trainInfo?: TrainOrderQueryResponseBodyModuleTrainInfo;
  static names(): { [key: string]: string } {
    return {
      changeTicketInfoList: 'change_ticket_info_list',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerInfoList: 'passenger_info_list',
      priceInfoList: 'price_info_list',
      refundTicketInfoList: 'refund_ticket_info_list',
      ticketInfoList: 'ticket_info_list',
      trainInfo: 'train_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTicketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModuleChangeTicketInfoList },
      invoiceInfo: TrainOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: TrainOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModulePassengerInfoList },
      priceInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModulePriceInfoList },
      refundTicketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModuleRefundTicketInfoList },
      ticketInfoList: { 'type': 'array', 'itemType': TrainOrderQueryResponseBodyModuleTicketInfoList },
      trainInfo: TrainOrderQueryResponseBodyModuleTrainInfo,
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
    if(Array.isArray(this.ticketInfoList)) {
      $dara.Model.validateArray(this.ticketInfoList);
    }
    if(this.trainInfo && typeof (this.trainInfo as any).validate === 'function') {
      (this.trainInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

