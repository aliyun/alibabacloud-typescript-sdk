// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList } from "./FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList";
import { FlightOrderQueryResponseBodyModuleFlightInfoList } from "./FlightOrderQueryResponseBodyModuleFlightInfoList";
import { FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList } from "./FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList";
import { FlightOrderQueryResponseBodyModuleFlightTicketInfoList } from "./FlightOrderQueryResponseBodyModuleFlightTicketInfoList";
import { FlightOrderQueryResponseBodyModuleInsuranceInfoList } from "./FlightOrderQueryResponseBodyModuleInsuranceInfoList";
import { FlightOrderQueryResponseBodyModuleInvoiceInfo } from "./FlightOrderQueryResponseBodyModuleInvoiceInfo";
import { FlightOrderQueryResponseBodyModuleOrderBaseInfo } from "./FlightOrderQueryResponseBodyModuleOrderBaseInfo";
import { FlightOrderQueryResponseBodyModulePassengerInfoList } from "./FlightOrderQueryResponseBodyModulePassengerInfoList";
import { FlightOrderQueryResponseBodyModulePriceInfoList } from "./FlightOrderQueryResponseBodyModulePriceInfoList";


export class FlightOrderQueryResponseBodyModule extends $dara.Model {
  flightChangeTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList[];
  flightInfoList?: FlightOrderQueryResponseBodyModuleFlightInfoList[];
  flightRefundTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList[];
  flightTicketInfoList?: FlightOrderQueryResponseBodyModuleFlightTicketInfoList[];
  insuranceInfoList?: FlightOrderQueryResponseBodyModuleInsuranceInfoList[];
  invoiceInfo?: FlightOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: FlightOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerInfoList?: FlightOrderQueryResponseBodyModulePassengerInfoList[];
  priceInfoList?: FlightOrderQueryResponseBodyModulePriceInfoList[];
  static names(): { [key: string]: string } {
    return {
      flightChangeTicketInfoList: 'flight_change_ticket_info_list',
      flightInfoList: 'flight_info_list',
      flightRefundTicketInfoList: 'flight_refund_ticket_info_list',
      flightTicketInfoList: 'flight_ticket_info_list',
      insuranceInfoList: 'insurance_info_list',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerInfoList: 'passenger_info_list',
      priceInfoList: 'price_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightChangeTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList },
      flightInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightInfoList },
      flightRefundTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList },
      flightTicketInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleFlightTicketInfoList },
      insuranceInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModuleInsuranceInfoList },
      invoiceInfo: FlightOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: FlightOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModulePassengerInfoList },
      priceInfoList: { 'type': 'array', 'itemType': FlightOrderQueryResponseBodyModulePriceInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.flightChangeTicketInfoList)) {
      $dara.Model.validateArray(this.flightChangeTicketInfoList);
    }
    if(Array.isArray(this.flightInfoList)) {
      $dara.Model.validateArray(this.flightInfoList);
    }
    if(Array.isArray(this.flightRefundTicketInfoList)) {
      $dara.Model.validateArray(this.flightRefundTicketInfoList);
    }
    if(Array.isArray(this.flightTicketInfoList)) {
      $dara.Model.validateArray(this.flightTicketInfoList);
    }
    if(Array.isArray(this.insuranceInfoList)) {
      $dara.Model.validateArray(this.insuranceInfoList);
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

