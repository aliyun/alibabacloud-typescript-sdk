// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderQueryResponseBodyModulePriceInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  categoryCode?: number;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtCreate?: string;
  passengerName?: string;
  /**
   * @example
   * 4
   */
  payType?: number;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * CS73290
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
      gmtCreate: 'gmt_create',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      gmtCreate: 'string',
      passengerName: 'string',
      payType: 'number',
      price: 'number',
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

