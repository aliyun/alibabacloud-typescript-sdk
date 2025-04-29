// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryResponseBodyModulePriceInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  categoryCode?: number;
  /**
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @example
   * MU5354
   */
  changeFlightNo?: string;
  /**
   * @example
   * 12%
   */
  discount?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  endTime?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 00-7687
   */
  originalTicketNo?: string;
  passengerName?: string;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  startTime?: string;
  /**
   * @example
   * A-135767
   */
  ticketNo?: string;
  /**
   * @example
   * f98236773
   */
  tradeId?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      categoryType: 'category_type',
      changeFlightNo: 'change_flight_no',
      discount: 'discount',
      endTime: 'end_time',
      gmtCreate: 'gmt_create',
      originalTicketNo: 'original_ticket_no',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      startTime: 'start_time',
      ticketNo: 'ticket_no',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      categoryType: 'number',
      changeFlightNo: 'string',
      discount: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      originalTicketNo: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
      startTime: 'string',
      ticketNo: 'string',
      tradeId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

