// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCreateOrderV2RequestContactInfo extends $dara.Model {
  contactEmail?: string;
  contactName?: string;
  contactPhone?: string;
  sendMsgToPassenger?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactEmail: 'contact_email',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
      sendMsgToPassenger: 'send_msg_to_passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactEmail: 'string',
      contactName: 'string',
      contactPhone: 'string',
      sendMsgToPassenger: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderV2RequestTravelers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1991-01-22
   */
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
   * 
   * @example
   * 0
   */
  certType?: number;
  certValidDate?: string;
  costCenterName?: string;
  costCenterNumber?: string;
  deptId?: string;
  deptName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gender?: number;
  invoiceTitle?: string;
  nationality?: string;
  nationalityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  phone?: string;
  projectCode?: string;
  projectTitle?: string;
  taxNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18155711459129970552412
   */
  userId?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certNation: 'cert_nation',
      certNo: 'cert_no',
      certType: 'cert_type',
      certValidDate: 'cert_valid_date',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      deptId: 'dept_id',
      deptName: 'dept_name',
      gender: 'gender',
      invoiceTitle: 'invoice_title',
      nationality: 'nationality',
      nationalityCode: 'nationality_code',
      passengerName: 'passenger_name',
      passengerType: 'passenger_type',
      phone: 'phone',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      taxNumber: 'tax_number',
      userId: 'user_id',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certNation: 'string',
      certNo: 'string',
      certType: 'number',
      certValidDate: 'string',
      costCenterName: 'string',
      costCenterNumber: 'string',
      deptId: 'string',
      deptName: 'string',
      gender: 'number',
      invoiceTitle: 'string',
      nationality: 'string',
      nationalityCode: 'string',
      passengerName: 'string',
      passengerType: 'number',
      phone: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      taxNumber: 'string',
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightCreateOrderV2Request extends $dara.Model {
  asyncCreateOrderKey?: string;
  /**
   * @example
   * false
   */
  asyncCreateOrderMode?: boolean;
  btripUserId?: string;
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactInfo?: FlightCreateOrderV2RequestContactInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cheshiapi
   */
  isvName?: string;
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
   */
  outOrderId?: string;
  totalPriceCent?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  travelers?: FlightCreateOrderV2RequestTravelers[];
  static names(): { [key: string]: string } {
    return {
      asyncCreateOrderKey: 'async_create_order_key',
      asyncCreateOrderMode: 'async_create_order_mode',
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      contactInfo: 'contact_info',
      isvName: 'isv_name',
      otaItemId: 'ota_item_id',
      outOrderId: 'out_order_id',
      totalPriceCent: 'total_price_cent',
      travelers: 'travelers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncCreateOrderKey: 'string',
      asyncCreateOrderMode: 'boolean',
      btripUserId: 'string',
      buyerName: 'string',
      contactInfo: FlightCreateOrderV2RequestContactInfo,
      isvName: 'string',
      otaItemId: 'string',
      outOrderId: 'string',
      totalPriceCent: 'number',
      travelers: { 'type': 'array', 'itemType': FlightCreateOrderV2RequestTravelers },
    };
  }

  validate() {
    if(this.contactInfo && typeof (this.contactInfo as any).validate === 'function') {
      (this.contactInfo as any).validate();
    }
    if(Array.isArray(this.travelers)) {
      $dara.Model.validateArray(this.travelers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

