// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCreateOrderRequestContactInfo extends $dara.Model {
  contactEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactPhone?: string;
  static names(): { [key: string]: string } {
    return {
      contactEmail: 'contact_email',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactEmail: 'string',
      contactName: 'string',
      contactPhone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderRequestTravelerInfoList extends $dara.Model {
  birthday?: string;
  certNation?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  certType?: string;
  certValidDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nationality?: string;
  nationalityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  phone?: string;
  sex?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certNation: 'cert_nation',
      certNo: 'cert_no',
      certType: 'cert_type',
      certValidDate: 'cert_valid_date',
      name: 'name',
      nationality: 'nationality',
      nationalityCode: 'nationality_code',
      outUserId: 'out_user_id',
      phone: 'phone',
      sex: 'sex',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certNation: 'string',
      certNo: 'string',
      certType: 'string',
      certValidDate: 'string',
      name: 'string',
      nationality: 'string',
      nationalityCode: 'string',
      outUserId: 'string',
      phone: 'string',
      sex: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderRequest extends $dara.Model {
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
  contactInfo?: FlightCreateOrderRequestContactInfo;
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
  orderAttr?: { [key: string]: any };
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
  travelerInfoList?: FlightCreateOrderRequestTravelerInfoList[];
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

