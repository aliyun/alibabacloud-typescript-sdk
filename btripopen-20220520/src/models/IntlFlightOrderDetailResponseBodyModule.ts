// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModuleContactInfo } from "./IntlFlightOrderDetailResponseBodyModuleContactInfo";
import { IntlFlightOrderDetailResponseBodyModuleJourneyList } from "./IntlFlightOrderDetailResponseBodyModuleJourneyList";
import { IntlFlightOrderDetailResponseBodyModuleOrderItemList } from "./IntlFlightOrderDetailResponseBodyModuleOrderItemList";
import { IntlFlightOrderDetailResponseBodyModulePassengerItemDetailList } from "./IntlFlightOrderDetailResponseBodyModulePassengerItemDetailList";
import { IntlFlightOrderDetailResponseBodyModulePassengerList } from "./IntlFlightOrderDetailResponseBodyModulePassengerList";


export class IntlFlightOrderDetailResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 122928120369012
   */
  bookUserId?: string;
  /**
   * @example
   * ZHANG/SAN
   */
  bookUserName?: string;
  closeReason?: string;
  /**
   * @example
   * 1709708165000
   */
  closeTime?: number;
  /**
   * @example
   * 2024-03-06 14:56:05
   */
  closeTimeStr?: string;
  contactInfo?: IntlFlightOrderDetailResponseBodyModuleContactInfo;
  /**
   * @example
   * 1709708165000
   */
  createTime?: number;
  /**
   * @example
   * 2024-03-06 14:56:05
   */
  createTimeStr?: string;
  extInfoMap?: { [key: string]: string };
  journeyList?: IntlFlightOrderDetailResponseBodyModuleJourneyList[];
  /**
   * @example
   * 1012000000000000
   */
  orderId?: number;
  orderItemList?: IntlFlightOrderDetailResponseBodyModuleOrderItemList[];
  /**
   * @example
   * F11374007131319304192
   */
  outOrderId?: string;
  passengerItemDetailList?: IntlFlightOrderDetailResponseBodyModulePassengerItemDetailList[];
  passengerList?: IntlFlightOrderDetailResponseBodyModulePassengerList[];
  /**
   * @example
   * 1709711779000
   */
  payExpireTime?: number;
  /**
   * @example
   * 2024-03-06 15:56:19
   */
  payExpireTimeStr?: string;
  /**
   * @example
   * 1
   */
  payStatus?: number;
  /**
   * @example
   * 2024-03-06 15:00:35
   */
  payTime?: number;
  /**
   * @example
   * 1709708435000
   */
  payTimeStr?: string;
  /**
   * @example
   * 8
   */
  payType?: number;
  /**
   * @example
   * 4
   */
  status?: number;
  /**
   * @example
   * 1709711779000
   */
  succeedTime?: number;
  /**
   * @example
   * 2024-03-06 15:56:19
   */
  succeedTimeStr?: string;
  /**
   * @example
   * 21300
   */
  totalPrice?: number;
  /**
   * @example
   * 0
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      bookUserId: 'book_user_id',
      bookUserName: 'book_user_name',
      closeReason: 'close_reason',
      closeTime: 'close_time',
      closeTimeStr: 'close_time_str',
      contactInfo: 'contact_info',
      createTime: 'create_time',
      createTimeStr: 'create_time_str',
      extInfoMap: 'ext_info_map',
      journeyList: 'journey_list',
      orderId: 'order_id',
      orderItemList: 'order_item_list',
      outOrderId: 'out_order_id',
      passengerItemDetailList: 'passenger_item_detail_list',
      passengerList: 'passenger_list',
      payExpireTime: 'pay_expire_time',
      payExpireTimeStr: 'pay_expire_time_str',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      payTimeStr: 'pay_time_str',
      payType: 'pay_type',
      status: 'status',
      succeedTime: 'succeed_time',
      succeedTimeStr: 'succeed_time_str',
      totalPrice: 'total_price',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookUserId: 'string',
      bookUserName: 'string',
      closeReason: 'string',
      closeTime: 'number',
      closeTimeStr: 'string',
      contactInfo: IntlFlightOrderDetailResponseBodyModuleContactInfo,
      createTime: 'number',
      createTimeStr: 'string',
      extInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      journeyList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleJourneyList },
      orderId: 'number',
      orderItemList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModuleOrderItemList },
      outOrderId: 'string',
      passengerItemDetailList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerItemDetailList },
      passengerList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerList },
      payExpireTime: 'number',
      payExpireTimeStr: 'string',
      payStatus: 'number',
      payTime: 'number',
      payTimeStr: 'string',
      payType: 'number',
      status: 'number',
      succeedTime: 'number',
      succeedTimeStr: 'string',
      totalPrice: 'number',
      tripType: 'number',
    };
  }

  validate() {
    if(this.contactInfo && typeof (this.contactInfo as any).validate === 'function') {
      (this.contactInfo as any).validate();
    }
    if(this.extInfoMap) {
      $dara.Model.validateMap(this.extInfoMap);
    }
    if(Array.isArray(this.journeyList)) {
      $dara.Model.validateArray(this.journeyList);
    }
    if(Array.isArray(this.orderItemList)) {
      $dara.Model.validateArray(this.orderItemList);
    }
    if(Array.isArray(this.passengerItemDetailList)) {
      $dara.Model.validateArray(this.passengerItemDetailList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

