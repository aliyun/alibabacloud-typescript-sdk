// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightCreateOrderRequestContactInfo } from "./FlightCreateOrderRequestContactInfo";
import { FlightCreateOrderRequestTravelerInfoList } from "./FlightCreateOrderRequestTravelerInfoList";


export class FlightCreateOrderRequest extends $dara.Model {
  /**
   * @example
   * HGH
   */
  arrAirportCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @example
   * 0
   */
  autoPay?: number;
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  buyerUniqueKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactInfo?: FlightCreateOrderRequestContactInfo;
  /**
   * @example
   * PEK
   */
  depAirportCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2000-00-00 00:00:00
   */
  depDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dis123
   */
  disOrderId?: string;
  orderAttr?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000_1_0
   */
  orderParams?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7fb731deeb4510b86c17e8c8c25740_11
   */
  otaItemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  price?: number;
  receiptAddress?: string;
  /**
   * @example
   * 1
   */
  receiptTarget?: number;
  receiptTitle?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  travelerInfoList?: FlightCreateOrderRequestTravelerInfoList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      arrAirportCode: 'arr_airport_code',
      arrCityCode: 'arr_city_code',
      autoPay: 'auto_pay',
      buyerName: 'buyer_name',
      buyerUniqueKey: 'buyer_unique_key',
      contactInfo: 'contact_info',
      depAirportCode: 'dep_airport_code',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      disOrderId: 'dis_order_id',
      orderAttr: 'order_attr',
      orderParams: 'order_params',
      otaItemId: 'ota_item_id',
      price: 'price',
      receiptAddress: 'receipt_address',
      receiptTarget: 'receipt_target',
      receiptTitle: 'receipt_title',
      travelerInfoList: 'traveler_info_list',
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
      contactInfo: FlightCreateOrderRequestContactInfo,
      depAirportCode: 'string',
      depCityCode: 'string',
      depDate: 'string',
      disOrderId: 'string',
      orderAttr: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orderParams: 'string',
      otaItemId: 'string',
      price: 'number',
      receiptAddress: 'string',
      receiptTarget: 'number',
      receiptTitle: 'string',
      travelerInfoList: { 'type': 'array', 'itemType': FlightCreateOrderRequestTravelerInfoList },
      tripType: 'number',
    };
  }

  validate() {
    if(this.contactInfo && typeof (this.contactInfo as any).validate === 'function') {
      (this.contactInfo as any).validate();
    }
    if(this.orderAttr) {
      $dara.Model.validateMap(this.orderAttr);
    }
    if(Array.isArray(this.travelerInfoList)) {
      $dara.Model.validateArray(this.travelerInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

