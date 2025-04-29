// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelGoodsQueryResponseBodyModuleRoomsRatesHotelDetailRatePriceDTO extends $dara.Model {
  /**
   * @example
   * 100
   */
  beforeDiscountPrice?: number;
  /**
   * @example
   * demo
   */
  breakfast?: string;
  /**
   * @example
   * 1000
   */
  discountPrice?: number;
  /**
   * @example
   * 100
   */
  lastDiscountsPrice?: number;
  lastDiscountsRoundingPrice?: number;
  /**
   * @example
   * 1
   */
  lastNum?: number;
  /**
   * @example
   * 2023-03-25
   */
  rateStartTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      beforeDiscountPrice: 'before_discount_price',
      breakfast: 'breakfast',
      discountPrice: 'discount_price',
      lastDiscountsPrice: 'last_discounts_price',
      lastDiscountsRoundingPrice: 'last_discounts_rounding_price',
      lastNum: 'last_num',
      rateStartTime: 'rate_start_time',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeDiscountPrice: 'number',
      breakfast: 'string',
      discountPrice: 'number',
      lastDiscountsPrice: 'number',
      lastDiscountsRoundingPrice: 'number',
      lastNum: 'number',
      rateStartTime: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

