// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCreateOrderShrinkRequest extends $dara.Model {
  arrAirportCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  arrCityCode?: string;
  autoPay?: number;
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  buyerUniqueKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactInfoShrink?: string;
  depAirportCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  disOrderId?: string;
  orderAttrShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderParams?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  otaItemId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  price?: number;
  receiptAddress?: string;
  receiptTarget?: number;
  receiptTitle?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  travelerInfoListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      arrAirportCode: 'arr_airport_code',
      arrCityCode: 'arr_city_code',
      autoPay: 'auto_pay',
      buyerName: 'buyer_name',
      buyerUniqueKey: 'buyer_unique_key',
      contactInfoShrink: 'contact_info',
      depAirportCode: 'dep_airport_code',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      disOrderId: 'dis_order_id',
      orderAttrShrink: 'order_attr',
      orderParams: 'order_params',
      otaItemId: 'ota_item_id',
      price: 'price',
      receiptAddress: 'receipt_address',
      receiptTarget: 'receipt_target',
      receiptTitle: 'receipt_title',
      travelerInfoListShrink: 'traveler_info_list',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportCode: 'string',
      arrCityCode: 'string',
      autoPay: 'number',
      buyerName: 'string',
      buyerUniqueKey: 'string',
      contactInfoShrink: 'string',
      depAirportCode: 'string',
      depCityCode: 'string',
      depDate: 'string',
      disOrderId: 'string',
      orderAttrShrink: 'string',
      orderParams: 'string',
      otaItemId: 'string',
      price: 'number',
      receiptAddress: 'string',
      receiptTarget: 'number',
      receiptTitle: 'string',
      travelerInfoListShrink: 'string',
      tripType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

