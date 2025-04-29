// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesRateDailys extends $dara.Model {
  /**
   * @example
   * 30000
   */
  discountPrice?: number;
  /**
   * @example
   * 62800
   */
  lastDiscountsPrice?: number;
  /**
   * @example
   * 62800
   */
  price?: number;
  /**
   * @example
   * 2023-10-17
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'discount_price',
      lastDiscountsPrice: 'last_discounts_price',
      price: 'price',
      startDate: 'start_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      lastDiscountsPrice: 'number',
      price: 'number',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

