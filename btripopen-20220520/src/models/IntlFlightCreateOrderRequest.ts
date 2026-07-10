// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightCreateOrderRequestContactInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
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

export class IntlFlightCreateOrderRequestPassengerListCertInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * E1234567
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  certType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2029-12-31
   */
  certValidDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 中国大陆
   */
  issuePlace?: string;
  static names(): { [key: string]: string } {
    return {
      certNo: 'cert_no',
      certType: 'cert_type',
      certValidDate: 'cert_valid_date',
      issuePlace: 'issue_place',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certType: 'number',
      certValidDate: 'string',
      issuePlace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightCreateOrderRequestPassengerList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1998-12-28
   */
  birthday?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  certInfo?: IntlFlightCreateOrderRequestPassengerListCertInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZHANG/SAN
   */
  fullName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @example
   * L5000924
   */
  jobNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 中国大陆
   */
  nationality?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nationalityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13100008888
   */
  phone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12292812036903456
   */
  userId?: string;
  /**
   * @example
   * 0
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certInfo: 'cert_info',
      fullName: 'full_name',
      gender: 'gender',
      jobNo: 'job_no',
      nationality: 'nationality',
      nationalityCode: 'nationality_code',
      phone: 'phone',
      type: 'type',
      userId: 'user_id',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certInfo: IntlFlightCreateOrderRequestPassengerListCertInfo,
      fullName: 'string',
      gender: 'number',
      jobNo: 'string',
      nationality: 'string',
      nationalityCode: 'string',
      phone: 'string',
      type: 'number',
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(this.certInfo && typeof (this.certInfo as any).validate === 'function') {
      (this.certInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightCreateOrderRequest extends $dara.Model {
  asyncCreateOrderKey?: string;
  asyncCreateOrderMode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZHANG/SAN
   */
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactInfo?: IntlFlightCreateOrderRequestContactInfo;
  extraInfo?: { [key: string]: string };
  isvName?: string;
  orderPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  otaItemId?: string;
  outOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerList?: IntlFlightCreateOrderRequestPassengerList[];
  renderKey?: string;
  static names(): { [key: string]: string } {
    return {
      asyncCreateOrderKey: 'async_create_order_key',
      asyncCreateOrderMode: 'async_create_order_mode',
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      contactInfo: 'contact_info',
      extraInfo: 'extra_info',
      isvName: 'isv_name',
      orderPrice: 'order_price',
      otaItemId: 'ota_item_id',
      outOrderId: 'out_order_id',
      passengerList: 'passenger_list',
      renderKey: 'render_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncCreateOrderKey: 'string',
      asyncCreateOrderMode: 'boolean',
      btripUserId: 'string',
      buyerName: 'string',
      contactInfo: IntlFlightCreateOrderRequestContactInfo,
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isvName: 'string',
      orderPrice: 'number',
      otaItemId: 'string',
      outOrderId: 'string',
      passengerList: { 'type': 'array', 'itemType': IntlFlightCreateOrderRequestPassengerList },
      renderKey: 'string',
    };
  }

  validate() {
    if(this.contactInfo && typeof (this.contactInfo as any).validate === 'function') {
      (this.contactInfo as any).validate();
    }
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

