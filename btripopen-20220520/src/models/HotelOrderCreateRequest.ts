// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderCreateRequestInvoiceInfo extends $dara.Model {
  buyerAdd?: string;
  buyerBankAcc?: string;
  buyerBankAdd?: string;
  buyerPhone?: string;
  buyerTaxNum?: string;
  deliveryAddress?: string;
  deliveryArea?: string;
  deliveryCity?: string;
  deliveryProvince?: string;
  deliveryStreet?: string;
  email?: string;
  invoiceMaterial?: number;
  invoiceTitle?: string;
  invoiceType?: number;
  receiverName?: string;
  receiverPhone?: string;
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

export class HotelOrderCreateRequestMemberInfo extends $dara.Model {
  cardNo?: string;
  realName?: string;
  static names(): { [key: string]: string } {
    return {
      cardNo: 'card_no',
      realName: 'real_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNo: 'string',
      realName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderCreateRequestOccupantInfoListCostCenterInfo extends $dara.Model {
  costCenterId?: string;
  costCenterName?: string;
  costCenterNo?: string;
  invoiceId?: string;
  invoiceTitle?: string;
  projectCode?: string;
  projectTitle?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNo: 'cost_center_no',
      invoiceId: 'invoice_id',
      invoiceTitle: 'invoice_title',
      projectCode: 'project_code',
      projectTitle: 'project_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'string',
      costCenterName: 'string',
      costCenterNo: 'string',
      invoiceId: 'string',
      invoiceTitle: 'string',
      projectCode: 'string',
      projectTitle: 'string',
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
  cardNo?: string;
  cardType?: number;
  cascadeDeptName?: string;
  costCenterInfo?: HotelOrderCreateRequestOccupantInfoListCostCenterInfo;
  customerType?: number;
  departmentId?: string;
  departmentName?: string;
  email?: string;
  employeeType?: number;
  firstName?: string;
  isBooker?: boolean;
  lastName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  phone?: string;
  roomNo?: number;
  staffNo?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      cardNo: 'card_no',
      cardType: 'card_type',
      cascadeDeptName: 'cascade_dept_name',
      costCenterInfo: 'cost_center_info',
      customerType: 'customer_type',
      departmentId: 'department_id',
      departmentName: 'department_name',
      email: 'email',
      employeeType: 'employee_type',
      firstName: 'first_name',
      isBooker: 'is_booker',
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
      cascadeDeptName: 'string',
      costCenterInfo: HotelOrderCreateRequestOccupantInfoListCostCenterInfo,
      customerType: 'number',
      departmentId: 'string',
      departmentName: 'string',
      email: 'string',
      employeeType: 'number',
      firstName: 'string',
      isBooker: 'boolean',
      lastName: 'string',
      name: 'string',
      phone: 'string',
      roomNo: 'number',
      staffNo: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(this.costCenterInfo && typeof (this.costCenterInfo as any).validate === 'function') {
      (this.costCenterInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderCreateRequestPromotionInfoPromotionDetailInfoList extends $dara.Model {
  checkStatus?: boolean;
  needCheck?: boolean;
  promotionCode?: string;
  promotionId?: string;
  promotionName?: string;
  promotionPrice?: number;
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
  arrivalTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  checkIn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  checkOut?: string;
  contractEmail?: string;
  contractName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contractPhone?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  corpPayPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  disOrderId?: string;
  extra?: string;
  invoiceInfo?: HotelOrderCreateRequestInvoiceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  itemId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  itineraryNo?: string;
  leaveTime?: string;
  memberInfo?: HotelOrderCreateRequestMemberInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  occupantInfoList?: HotelOrderCreateRequestOccupantInfoList[];
  /**
   * @remarks
   * This parameter is required.
   */
  personPayPrice?: number;
  promotionInfo?: HotelOrderCreateRequestPromotionInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  ratePlanId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  roomId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  roomNum?: number;
  rpType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sellerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  shid?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  totalOrderPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  validateResKey?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalTime: 'arrival_time',
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
      leaveTime: 'leave_time',
      memberInfo: 'member_info',
      occupantInfoList: 'occupant_info_list',
      personPayPrice: 'person_pay_price',
      promotionInfo: 'promotion_info',
      ratePlanId: 'rate_plan_id',
      roomId: 'room_id',
      roomNum: 'room_num',
      rpType: 'rp_type',
      sellerId: 'seller_id',
      shid: 'shid',
      totalOrderPrice: 'total_order_price',
      validateResKey: 'validate_res_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalTime: 'string',
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
      leaveTime: 'string',
      memberInfo: HotelOrderCreateRequestMemberInfo,
      occupantInfoList: { 'type': 'array', 'itemType': HotelOrderCreateRequestOccupantInfoList },
      personPayPrice: 'number',
      promotionInfo: HotelOrderCreateRequestPromotionInfo,
      ratePlanId: 'number',
      roomId: 'number',
      roomNum: 'number',
      rpType: 'number',
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
    if(this.memberInfo && typeof (this.memberInfo as any).validate === 'function') {
      (this.memberInfo as any).validate();
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

