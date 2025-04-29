// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryV2ResponseBodyModulePriceInfoList extends $dara.Model {
  categoryCode?: number;
  /**
   * @example
   * 1669344020
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
   * 176000
   */
  price?: number;
  /**
   * @example
   * 12345678910987654321
   */
  tradeId?: string;
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

