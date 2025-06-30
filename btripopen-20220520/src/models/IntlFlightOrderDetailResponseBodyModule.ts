// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModuleContactInfo } from "./IntlFlightOrderDetailResponseBodyModuleContactInfo";
import { IntlFlightOrderDetailResponseBodyModuleJourneyList } from "./IntlFlightOrderDetailResponseBodyModuleJourneyList";
import { IntlFlightOrderDetailResponseBodyModuleOrderItemList } from "./IntlFlightOrderDetailResponseBodyModuleOrderItemList";
import { IntlFlightOrderDetailResponseBodyModulePassengerList } from "./IntlFlightOrderDetailResponseBodyModulePassengerList";
import { IntlFlightOrderDetailResponseBodyModulePassengerTicketList } from "./IntlFlightOrderDetailResponseBodyModulePassengerTicketList";


export class IntlFlightOrderDetailResponseBodyModule extends $dara.Model {
  bookerUserId?: string;
  bookerUserName?: string;
  closeReason?: string;
  /**
   * @example
   * 1709708165000
   */
  closeTime?: string;
  contactInfo?: IntlFlightOrderDetailResponseBodyModuleContactInfo;
  journeyList?: IntlFlightOrderDetailResponseBodyModuleJourneyList[];
  /**
   * @example
   * 1012000000000000
   */
  orderId?: string;
  orderItemList?: IntlFlightOrderDetailResponseBodyModuleOrderItemList[];
  orderStatus?: number;
  /**
   * @example
   * F11374007131319304192
   */
  outOrderId?: string;
  passengerList?: IntlFlightOrderDetailResponseBodyModulePassengerList[];
  passengerTicketList?: IntlFlightOrderDetailResponseBodyModulePassengerTicketList[];
  payLatestTime?: string;
  /**
   * @example
   * 1
   */
  payStatus?: number;
  /**
   * @example
   * 2024-03-06 15:00:35
   */
  payTime?: string;
  /**
   * @example
   * 8
   */
  payType?: number;
  successTime?: string;
  /**
   * @example
   * 21300
   */
  totalPrice?: number;
  totalTaxPrice?: number;
  totalTicketPrice?: number;
  /**
   * @example
   * 0
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      bookerUserId: 'booker_user_id',
      bookerUserName: 'booker_user_name',
      closeReason: 'close_reason',
      closeTime: 'close_time',
      contactInfo: 'contact_info',
      journeyList: 'journey_list',
      orderId: 'order_id',
      orderItemList: 'order_item_list',
      orderStatus: 'order_status',
      outOrderId: 'out_order_id',
      passengerList: 'passenger_list',
      passengerTicketList: 'passenger_ticket_list',
      payLatestTime: 'pay_latest_time',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      payType: 'pay_type',
      successTime: 'success_time',
      totalPrice: 'total_price',
      totalTaxPrice: 'total_tax_price',
      totalTicketPrice: 'total_ticket_price',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookerUserId: 'string',
      bookerUserName: 'string',
      closeReason: 'string',
      closeTime: 'string',
      contactInfo: IntlFlightOrderDetailResponseBodyModuleContactInfo,
      journeyList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleJourneyList },
      orderId: 'string',
      orderItemList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleOrderItemList },
      orderStatus: 'number',
      outOrderId: 'string',
      passengerList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerList },
      passengerTicketList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerTicketList },
      payLatestTime: 'string',
      payStatus: 'number',
      payTime: 'string',
      payType: 'number',
      successTime: 'string',
      totalPrice: 'number',
      totalTaxPrice: 'number',
      totalTicketPrice: 'number',
      tripType: 'number',
    };
  }

  validate() {
    if(this.contactInfo && typeof (this.contactInfo as any).validate === 'function') {
      (this.contactInfo as any).validate();
    }
    if(Array.isArray(this.journeyList)) {
      $dara.Model.validateArray(this.journeyList);
    }
    if(Array.isArray(this.orderItemList)) {
      $dara.Model.validateArray(this.orderItemList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(Array.isArray(this.passengerTicketList)) {
      $dara.Model.validateArray(this.passengerTicketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

