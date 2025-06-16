// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderListResponseBodyDataListPassengerList } from "./OrderListResponseBodyDataListPassengerList";


export class OrderListResponseBodyDataList extends $dara.Model {
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
   * 1: order reservation in process
   * 
   * 2: order reservation successful
   * 
   * 3: order paid
   * 
   * 4: order successful
   * 
   * 5: order closed
   * 
   * @example
   * 4
   */
  orderStatus?: string;
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
  passengerList?: OrderListResponseBodyDataListPassengerList[];
  /**
   * @remarks
   * payment status
   * 
   * 1: payment in process
   * 
   * 2: deduction successful
   * 
   * 3: paid to the seller
   * 
   * 4: transaction closed
   * 
   * @example
   * 2
   */
  payStatus?: string;
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
   * buyer nickname
   * 
   * @example
   * nick
   */
  sessionNick?: string;
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
      bookTime: 'book_time',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      outOrderNum: 'out_order_num',
      passengerList: 'passenger_list',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      promotionPrice: 'promotion_price',
      realPayPrice: 'real_pay_price',
      sessionNick: 'session_nick',
      succeedTime: 'succeed_time',
      totalPrice: 'total_price',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookTime: 'number',
      orderNum: 'number',
      orderStatus: 'string',
      outOrderNum: 'string',
      passengerList: { 'type': 'array', 'itemType': OrderListResponseBodyDataListPassengerList },
      payStatus: 'string',
      payTime: 'number',
      promotionPrice: 'number',
      realPayPrice: 'number',
      sessionNick: 'string',
      succeedTime: 'number',
      totalPrice: 'number',
      transactionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

