// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderDetailResponseBodyDataAncillaryItemDetailList } from "./OrderDetailResponseBodyDataAncillaryItemDetailList";
import { DataBaggageAllowanceMapValue } from "./DataBaggageAllowanceMapValue";
import { OrderDetailResponseBodyDataFlightItemDetailList } from "./OrderDetailResponseBodyDataFlightItemDetailList";
import { OrderDetailResponseBodyDataPassengerList } from "./OrderDetailResponseBodyDataPassengerList";
import { DataRefundChangeRuleMapValue } from "./DataRefundChangeRuleMapValue";
import { OrderDetailResponseBodyDataSolution } from "./OrderDetailResponseBodyDataSolution";


export class OrderDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * ancillary product fulfillment details
   */
  ancillaryItemDetailList?: OrderDetailResponseBodyDataAncillaryItemDetailList[];
  /**
   * @remarks
   * baggage rule mapping, key is passenger type, value is baggage allowance details
   */
  baggageAllowanceMap?: { [key: string]: DataBaggageAllowanceMapValue };
  /**
   * @remarks
   * book time(timestamp)
   * 
   * @example
   * 1677210784000
   */
  bookTime?: number;
  /**
   * @remarks
   * flight product fulfillment details
   */
  flightItemDetailList?: OrderDetailResponseBodyDataFlightItemDetailList[];
  /**
   * @remarks
   * order number created by book
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * order status 
   * 
   * 1: order creation in process; 
   * 
   * 2: order creation successful; 
   * 
   * 3: order paid; 
   * 
   * 4: order successful; 
   * 
   * 5: order closed
   * 
   * @example
   * 4
   */
  orderStatus?: number;
  /**
   * @remarks
   * external order number(customized by buyer when book)
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  /**
   * @remarks
   * the information about all passenger of current order
   */
  passengerList?: OrderDetailResponseBodyDataPassengerList[];
  /**
   * @remarks
   * payment status 
   * 
   * 1: payment in process; 
   * 
   * 2: deduction successful; 
   * 
   * 3: paid to the seller; 
   * 
   * 4: transaction closed
   * 
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @remarks
   * pay time(timestamp)
   * 
   * @example
   * 1677210788000
   */
  payTime?: number;
  /**
   * @remarks
   * discount amount
   * 
   * @example
   * 10
   */
  promotionPrice?: number;
  /**
   * @remarks
   * actual payment amount
   * 
   * @example
   * 3000
   */
  realPayPrice?: number;
  /**
   * @remarks
   * change and refund policy mapping, key is passenger type, value is change and refund policy details
   */
  refundChangeRuleMap?: { [key: string]: DataRefundChangeRuleMapValue };
  /**
   * @remarks
   * buyer nickname
   * 
   * @example
   * nick
   */
  sessionNick?: string;
  /**
   * @remarks
   * the solution buyer booked
   */
  solution?: OrderDetailResponseBodyDataSolution;
  /**
   * @remarks
   * order success time(timestamp)
   * 
   * @example
   * 1677210786000
   */
  succeedTime?: number;
  /**
   * @remarks
   * total price of current order
   * 
   * @example
   * 3000
   */
  totalPrice?: number;
  /**
   * @remarks
   * transaction number
   * 
   * @example
   * hkduendkd-2023-dj0
   */
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      ancillaryItemDetailList: 'ancillary_item_detail_list',
      baggageAllowanceMap: 'baggage_allowance_map',
      bookTime: 'book_time',
      flightItemDetailList: 'flight_item_detail_list',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      outOrderNum: 'out_order_num',
      passengerList: 'passenger_list',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      promotionPrice: 'promotion_price',
      realPayPrice: 'real_pay_price',
      refundChangeRuleMap: 'refund_change_rule_map',
      sessionNick: 'session_nick',
      solution: 'solution',
      succeedTime: 'succeed_time',
      totalPrice: 'total_price',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillaryItemDetailList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataAncillaryItemDetailList },
      baggageAllowanceMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataBaggageAllowanceMapValue },
      bookTime: 'number',
      flightItemDetailList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataFlightItemDetailList },
      orderNum: 'number',
      orderStatus: 'number',
      outOrderNum: 'string',
      passengerList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataPassengerList },
      payStatus: 'number',
      payTime: 'number',
      promotionPrice: 'number',
      realPayPrice: 'number',
      refundChangeRuleMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataRefundChangeRuleMapValue },
      sessionNick: 'string',
      solution: OrderDetailResponseBodyDataSolution,
      succeedTime: 'number',
      totalPrice: 'number',
      transactionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ancillaryItemDetailList)) {
      $dara.Model.validateArray(this.ancillaryItemDetailList);
    }
    if(this.baggageAllowanceMap) {
      $dara.Model.validateMap(this.baggageAllowanceMap);
    }
    if(Array.isArray(this.flightItemDetailList)) {
      $dara.Model.validateArray(this.flightItemDetailList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(this.refundChangeRuleMap) {
      $dara.Model.validateMap(this.refundChangeRuleMap);
    }
    if(this.solution && typeof (this.solution as any).validate === 'function') {
      (this.solution as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

