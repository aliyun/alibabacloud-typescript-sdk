// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelGoodsQueryRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  adultNum?: string;
  /**
   * @example
   * false
   */
  agreementPrice?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-02-27
   */
  beginDate?: string;
  /**
   * @example
   * false
   */
  breakfastIncluded?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  btripUserId?: string;
  /**
   * @example
   * 330100
   */
  cityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-02-28
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 182873
   */
  hotelId?: string;
  /**
   * @example
   * 0
   */
  payOverType?: number;
  /**
   * @example
   * 0
   */
  paymentType?: number;
  /**
   * @example
   * false
   */
  specialInvoice?: boolean;
  /**
   * @example
   * 0
   */
  superMan?: number;
  static names(): { [key: string]: string } {
    return {
      adultNum: 'adult_num',
      agreementPrice: 'agreement_price',
      beginDate: 'begin_date',
      breakfastIncluded: 'breakfast_included',
      btripUserId: 'btrip_user_id',
      cityCode: 'city_code',
      endDate: 'end_date',
      hotelId: 'hotel_id',
      payOverType: 'pay_over_type',
      paymentType: 'payment_type',
      specialInvoice: 'special_invoice',
      superMan: 'super_man',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultNum: 'string',
      agreementPrice: 'boolean',
      beginDate: 'string',
      breakfastIncluded: 'boolean',
      btripUserId: 'string',
      cityCode: 'string',
      endDate: 'string',
      hotelId: 'string',
      payOverType: 'number',
      paymentType: 'number',
      specialInvoice: 'boolean',
      superMan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

