// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TicketChangingDetailResponseBodyModuleFlightInfoList } from "./TicketChangingDetailResponseBodyModuleFlightInfoList";
import { TicketChangingDetailResponseBodyModuleTravelerInfoList } from "./TicketChangingDetailResponseBodyModuleTravelerInfoList";


export class TicketChangingDetailResponseBodyModule extends $dara.Model {
  alipayTradeNo?: string;
  /**
   * @example
   * 1002
   */
  btripOrderId?: number;
  /**
   * @example
   * 37772
   */
  btripSubOrderId?: number;
  /**
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @example
   * chang123
   */
  disSubOrderId?: string;
  /**
   * @example
   * {}
   */
  extra?: string;
  flightInfoList?: TicketChangingDetailResponseBodyModuleFlightInfoList[];
  /**
   * @example
   * 2022-12-30 11:30:00
   */
  lastPayTime?: string;
  /**
   * @example
   * 0
   */
  payStatus?: number;
  /**
   * @example
   * 2022-12-30 11:30:00
   */
  payTime?: string;
  /**
   * @example
   * 100
   */
  settlePrice?: number;
  settleType?: number;
  status?: number;
  /**
   * @example
   * 100
   */
  totalChangePrice?: number;
  /**
   * @example
   * 100
   */
  totalPrice?: number;
  /**
   * @example
   * 100
   */
  totalUpgradePrice?: number;
  travelerInfoList?: TicketChangingDetailResponseBodyModuleTravelerInfoList[];
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      btripOrderId: 'btrip_order_id',
      btripSubOrderId: 'btrip_sub_order_id',
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      extra: 'extra',
      flightInfoList: 'flight_info_list',
      lastPayTime: 'last_pay_time',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      settlePrice: 'settle_price',
      settleType: 'settle_type',
      status: 'status',
      totalChangePrice: 'total_change_price',
      totalPrice: 'total_price',
      totalUpgradePrice: 'total_upgrade_price',
      travelerInfoList: 'traveler_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      btripOrderId: 'number',
      btripSubOrderId: 'number',
      disOrderId: 'string',
      disSubOrderId: 'string',
      extra: 'string',
      flightInfoList: { 'type': 'array', 'itemType': TicketChangingDetailResponseBodyModuleFlightInfoList },
      lastPayTime: 'string',
      payStatus: 'number',
      payTime: 'string',
      settlePrice: 'number',
      settleType: 'number',
      status: 'number',
      totalChangePrice: 'number',
      totalPrice: 'number',
      totalUpgradePrice: 'number',
      travelerInfoList: { 'type': 'array', 'itemType': TicketChangingDetailResponseBodyModuleTravelerInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.flightInfoList)) {
      $dara.Model.validateArray(this.flightInfoList);
    }
    if(Array.isArray(this.travelerInfoList)) {
      $dara.Model.validateArray(this.travelerInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

