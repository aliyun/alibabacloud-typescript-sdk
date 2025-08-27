// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderCreateRequestInvoiceInfo extends $dara.Model {
  /**
   * @example
   * demo
   */
  buyerAdd?: string;
  /**
   * @example
   * demo
   */
  buyerBankAcc?: string;
  /**
   * @example
   * demo
   */
  buyerBankAdd?: string;
  /**
   * @example
   * 0571-82321777
   */
  buyerPhone?: string;
  /**
   * @example
   * 1
   */
  buyerTaxNum?: string;
  deliveryAddress?: string;
  deliveryArea?: string;
  deliveryCity?: string;
  deliveryProvince?: string;
  deliveryStreet?: string;
  /**
   * @example
   * demo
   */
  email?: string;
  /**
   * @example
   * 1
   */
  invoiceMaterial?: number;
  /**
   * @example
   * demo
   */
  invoiceTitle?: string;
  /**
   * @example
   * 1
   */
  invoiceType?: number;
  receiverName?: string;
  /**
   * @example
   * 0571-82321777
   */
  receiverPhone?: string;
  /**
   * @example
   * demo
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      buyerAdd: 'buyer_add',
      buyerBankAcc: 'buyer_bank_acc',
      buyerBankAdd: 'buyer_bank_add',
      buyerPhone: 'buyer_phone',
      buyerTaxNum: 'buyer_tax_num',
      deliveryAddress: 'delivery_address',
      deliveryArea: 'delivery_area',
      deliveryCity: 'delivery_city',
      deliveryProvince: 'delivery_province',
      deliveryStreet: 'delivery_street',
      email: 'email',
      invoiceMaterial: 'invoice_material',
      invoiceTitle: 'invoice_title',
      invoiceType: 'invoice_type',
      receiverName: 'receiver_name',
      receiverPhone: 'receiver_phone',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerAdd: 'string',
      buyerBankAcc: 'string',
      buyerBankAdd: 'string',
      buyerPhone: 'string',
      buyerTaxNum: 'string',
      deliveryAddress: 'string',
      deliveryArea: 'string',
      deliveryCity: 'string',
      deliveryProvince: 'string',
      deliveryStreet: 'string',
      email: 'string',
      invoiceMaterial: 'number',
      invoiceTitle: 'string',
      invoiceType: 'number',
      receiverName: 'string',
      receiverPhone: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderCreateRequestOccupantInfoList extends $dara.Model {
  /**
   * @example
   * 124231213
   */
  cardNo?: string;
  /**
   * @example
   * 1
   */
  cardType?: number;
  /**
   * @example
   * 1
   */
  customerType?: number;
  /**
   * @example
   * 123112
   */
  departmentId?: string;
  departmentName?: string;
  /**
   * @example
   * demo
   */
  email?: string;
  /**
   * @example
   * 1
   */
  employeeType?: number;
  /**
   * @example
   * san
   */
  firstName?: string;
  /**
   * @example
   * zhang
   */
  lastName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18277123451
   */
  phone?: string;
  roomNo?: number;
  /**
   * @example
   * 87817182
   */
  staffNo?: string;
  /**
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      cardNo: 'card_no',
      cardType: 'card_type',
      customerType: 'customer_type',
      departmentId: 'department_id',
      departmentName: 'department_name',
      email: 'email',
      employeeType: 'employee_type',
      firstName: 'first_name',
      lastName: 'last_name',
      name: 'name',
      phone: 'phone',
      roomNo: 'room_no',
      staffNo: 'staff_no',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNo: 'string',
      cardType: 'number',
      customerType: 'number',
      departmentId: 'string',
      departmentName: 'string',
      email: 'string',
      employeeType: 'number',
      firstName: 'string',
      lastName: 'string',
      name: 'string',
      phone: 'string',
      roomNo: 'number',
      staffNo: 'string',
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

export class HotelOrderCreateRequestPromotionInfoPromotionDetailInfoList extends $dara.Model {
  /**
   * @example
   * true
   */
  checkStatus?: boolean;
  /**
   * @example
   * true
   */
  needCheck?: boolean;
  promotionCode?: string;
  /**
   * @example
   * 23778127
   */
  promotionId?: string;
  promotionName?: string;
  /**
   * @example
   * 100
   */
  promotionPrice?: number;
  /**
   * @example
   * 1
   */
  promotionType?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'check_status',
      needCheck: 'need_check',
      promotionCode: 'promotion_code',
      promotionId: 'promotion_id',
      promotionName: 'promotion_name',
      promotionPrice: 'promotion_price',
      promotionType: 'promotion_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'boolean',
      needCheck: 'boolean',
      promotionCode: 'string',
      promotionId: 'string',
      promotionName: 'string',
      promotionPrice: 'number',
      promotionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderCreateRequestPromotionInfo extends $dara.Model {
  promotionDetailInfoList?: HotelOrderCreateRequestPromotionInfoPromotionDetailInfoList[];
  /**
   * @example
   * 100
   */
  promotionTotalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      promotionDetailInfoList: 'promotion_detail_info_list',
      promotionTotalPrice: 'promotion_total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDetailInfoList: { 'type': 'array', 'itemType': HotelOrderCreateRequestPromotionInfoPromotionDetailInfoList },
      promotionTotalPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.promotionDetailInfoList)) {
      $dara.Model.validateArray(this.promotionDetailInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderCreateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123122
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-10-20
   */
  checkIn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-10-20
   */
  checkOut?: string;
  /**
   * @example
   * demo
   */
  contractEmail?: string;
  contractName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19281772123
   */
  contractPhone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  corpPayPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dis123
   */
  disOrderId?: string;
  extra?: string;
  invoiceInfo?: HotelOrderCreateRequestInvoiceInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 671570615157
   */
  itemId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fb5e1abf33924b6c912bd6d80deec0eb-1
   */
  itineraryNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  occupantInfoList?: HotelOrderCreateRequestOccupantInfoList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  personPayPrice?: number;
  promotionInfo?: HotelOrderCreateRequestPromotionInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1399417428510
   */
  ratePlanId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 187211
   */
  roomId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  roomNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2088441675613762
   */
  sellerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2198781
   */
  shid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  totalOrderPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nonUltron_1673575241156_d91ea8ad16735752359161037bf6cf_c54d3768312a4b249b719f126377bf82
   */
  validateResKey?: string;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      checkIn: 'check_in',
      checkOut: 'check_out',
      contractEmail: 'contract_email',
      contractName: 'contract_name',
      contractPhone: 'contract_phone',
      corpPayPrice: 'corp_pay_price',
      disOrderId: 'dis_order_id',
      extra: 'extra',
      invoiceInfo: 'invoice_info',
      itemId: 'item_id',
      itineraryNo: 'itinerary_no',
      occupantInfoList: 'occupant_info_list',
      personPayPrice: 'person_pay_price',
      promotionInfo: 'promotion_info',
      ratePlanId: 'rate_plan_id',
      roomId: 'room_id',
      roomNum: 'room_num',
      sellerId: 'seller_id',
      shid: 'shid',
      totalOrderPrice: 'total_order_price',
      validateResKey: 'validate_res_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      checkIn: 'string',
      checkOut: 'string',
      contractEmail: 'string',
      contractName: 'string',
      contractPhone: 'string',
      corpPayPrice: 'number',
      disOrderId: 'string',
      extra: 'string',
      invoiceInfo: HotelOrderCreateRequestInvoiceInfo,
      itemId: 'number',
      itineraryNo: 'string',
      occupantInfoList: { 'type': 'array', 'itemType': HotelOrderCreateRequestOccupantInfoList },
      personPayPrice: 'number',
      promotionInfo: HotelOrderCreateRequestPromotionInfo,
      ratePlanId: 'number',
      roomId: 'number',
      roomNum: 'number',
      sellerId: 'number',
      shid: 'number',
      totalOrderPrice: 'number',
      validateResKey: 'string',
    };
  }

  validate() {
    if(this.invoiceInfo && typeof (this.invoiceInfo as any).validate === 'function') {
      (this.invoiceInfo as any).validate();
    }
    if(Array.isArray(this.occupantInfoList)) {
      $dara.Model.validateArray(this.occupantInfoList);
    }
    if(this.promotionInfo && typeof (this.promotionInfo as any).validate === 'function') {
      (this.promotionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

