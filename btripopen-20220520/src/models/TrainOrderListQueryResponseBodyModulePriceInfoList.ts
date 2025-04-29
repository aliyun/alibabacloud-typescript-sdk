// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderListQueryResponseBodyModulePriceInfoList extends $dara.Model {
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
  endCity?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  endTime?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtCreate?: string;
  /**
   * @example
   * CS-663
   */
  originalTrainNo?: string;
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
  seatType?: string;
  startCity?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  startTime?: string;
  /**
   * @example
   * cs1165734212
   */
  tradeId?: string;
  /**
   * @example
   * Z1521
   */
  trainNo?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      categoryType: 'category_type',
      endCity: 'end_city',
      endTime: 'end_time',
      gmtCreate: 'gmt_create',
      originalTrainNo: 'original_train_no',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      seatType: 'seat_type',
      startCity: 'start_city',
      startTime: 'start_time',
      tradeId: 'trade_id',
      trainNo: 'train_no',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      categoryType: 'number',
      endCity: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      originalTrainNo: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
      seatType: 'string',
      startCity: 'string',
      startTime: 'string',
      tradeId: 'string',
      trainNo: 'string',
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

