// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarOrderListQueryResponseBodyModulePriceInfoList extends $dara.Model {
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
   * 2022-07-04T16:13Z
   */
  gmtCreate?: string;
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
  personPrice?: number;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 8908076767
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
      gmtCreate: 'gmt_create',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      personPrice: 'person_price',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      categoryType: 'number',
      gmtCreate: 'string',
      passengerName: 'string',
      payType: 'number',
      personPrice: 'number',
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

