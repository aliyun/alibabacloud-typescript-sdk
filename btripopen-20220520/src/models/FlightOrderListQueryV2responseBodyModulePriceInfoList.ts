// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ResponseBodyModulePriceInfoList extends $dara.Model {
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
   * yyyy-MM-dd HH:mm:ss
   */
  gmtCreate?: string;
  /**
   * @example
   * 1
   */
  payType?: number;
  price?: number;
  /**
   * @example
   * 175549295
   */
  subOrderId?: string;
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
      gmtCreate: 'gmt_create',
      payType: 'pay_type',
      price: 'price',
      subOrderId: 'sub_order_id',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      categoryType: 'number',
      gmtCreate: 'string',
      payType: 'number',
      price: 'number',
      subOrderId: 'string',
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

