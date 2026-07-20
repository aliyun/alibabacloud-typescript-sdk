// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList extends $dara.Model {
  /**
   * @example
   * 1
   */
  hour?: number;
  /**
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      hour: 'hour',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hour: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTO extends $dara.Model {
  btripHotelCancelPolicyInfoDTOList?: HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList[];
  /**
   * @example
   * 1（取消类型见报价详情）
   */
  cancelPolicyType?: number;
  static names(): { [key: string]: string } {
    return {
      btripHotelCancelPolicyInfoDTOList: 'btrip_hotel_cancel_policy_info_d_t_o_list',
      cancelPolicyType: 'cancel_policy_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripHotelCancelPolicyInfoDTOList: { 'type': 'array', 'itemType': HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList },
      cancelPolicyType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.btripHotelCancelPolicyInfoDTOList)) {
      $dara.Model.validateArray(this.btripHotelCancelPolicyInfoDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderDetailInfoResponseBodyModuleCancelInfo extends $dara.Model {
  /**
   * @example
   * 2022-01-29
   */
  cancelEndTime?: string;
  /**
   * @example
   * 2022-01-29
   */
  cancelStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      cancelEndTime: 'cancel_end_time',
      cancelStartTime: 'cancel_start_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelEndTime: 'string',
      cancelStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderDetailInfoResponseBodyModuleHotelDetailInfo extends $dara.Model {
  /**
   * @example
   * 杭州市余杭区文一西路聚橙路阿里未来酒店菲住布渴
   */
  address?: string;
  /**
   * @example
   * 杭州市
   */
  cityName?: string;
  /**
   * @example
   * 菲住布渴酒店（阿里未来酒店）
   */
  hotelName?: string;
  /**
   * @example
   * 0571-87217
   */
  hotelTel?: string;
  /**
   * @example
   * 2198781
   */
  shid?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityName: 'city_name',
      hotelName: 'hotel_name',
      hotelTel: 'hotel_tel',
      shid: 'shid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityName: 'string',
      hotelName: 'string',
      hotelTel: 'string',
      shid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderDetailInfoResponseBodyModuleHotelOnSitePriceDetailTotalOnSitePrice extends $dara.Model {
  currency?: string;
  foreignCurrency?: string;
  foreignPrice?: number;
  price?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'currency',
      foreignCurrency: 'foreign_currency',
      foreignPrice: 'foreign_price',
      price: 'price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      foreignCurrency: 'string',
      foreignPrice: 'number',
      price: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderDetailInfoResponseBodyModuleHotelOnSitePriceDetail extends $dara.Model {
  totalOnSitePrice?: HotelOrderDetailInfoResponseBodyModuleHotelOnSitePriceDetailTotalOnSitePrice;
  static names(): { [key: string]: string } {
    return {
      totalOnSitePrice: 'total_on_site_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalOnSitePrice: HotelOrderDetailInfoResponseBodyModuleHotelOnSitePriceDetailTotalOnSitePrice,
    };
  }

  validate() {
    if(this.totalOnSitePrice && typeof (this.totalOnSitePrice as any).validate === 'function') {
      (this.totalOnSitePrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderDetailInfoResponseBodyModuleHotelSaleOrderRoomInfos extends $dara.Model {
  /**
   * @example
   * 1715702400000
   */
  checkinDate?: string;
  /**
   * @example
   * 1715702400000
   */
  checkoutDate?: string;
  /**
   * @example
   * 0
   */
  penalSum?: number;
  /**
   * @example
   * 1715702400000
   */
  realCheckoutDate?: string;
  /**
   * @example
   * 3
   */
  refundStatus?: number;
  /**
   * @example
   * 1
   */
  roomNo?: number;
  /**
   * @example
   * 1200
   */
  roomPrice?: number;
  /**
   * @example
   * 300
   */
  roomRefundPrice?: number;
  /**
   * @example
   * 1_occupant_default_userId
   */
  travelerId?: string;
  /**
   * @example
   * xxx
   */
  travelerName?: string;
  static names(): { [key: string]: string } {
    return {
      checkinDate: 'checkin_date',
      checkoutDate: 'checkout_date',
      penalSum: 'penal_sum',
      realCheckoutDate: 'real_checkout_date',
      refundStatus: 'refund_status',
      roomNo: 'room_no',
      roomPrice: 'room_price',
      roomRefundPrice: 'room_refund_price',
      travelerId: 'traveler_id',
      travelerName: 'traveler_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkinDate: 'string',
      checkoutDate: 'string',
      penalSum: 'number',
      realCheckoutDate: 'string',
      refundStatus: 'number',
      roomNo: 'number',
      roomPrice: 'number',
      roomRefundPrice: 'number',
      travelerId: 'string',
      travelerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderDetailInfoResponseBodyModuleInvoiceInfo extends $dara.Model {
  /**
   * @example
   * 100
   */
  billingMoney?: number;
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
  /**
   * @example
   * **小区
   */
  deliveryAddress?: string;
  /**
   * @example
   * 拱墅
   */
  deliveryArea?: string;
  /**
   * @example
   * 杭州
   */
  deliveryCity?: string;
  /**
   * @example
   * 浙江
   */
  deliveryProvince?: string;
  /**
   * @example
   * ***街道
   */
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
  /**
   * @example
   * 100
   */
  postage?: number;
  /**
   * @example
   * 张三
   */
  receiverName?: string;
  /**
   * @example
   * 0571-82321777
   */
  receiverPhone?: string;
  /**
   * @example
   * tmf closeCloneTask
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      billingMoney: 'billing_money',
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
      postage: 'postage',
      receiverName: 'receiver_name',
      receiverPhone: 'receiver_phone',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMoney: 'number',
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
      postage: 'number',
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

export class HotelOrderDetailInfoResponseBodyModuleOccupantInfoListCostCenterInfoList extends $dara.Model {
  /**
   * @example
   * demo
   */
  costCenterId?: string;
  /**
   * @example
   * demo
   */
  costCenterName?: string;
  /**
   * @example
   * demo
   */
  costCenterNo?: string;
  /**
   * @example
   * demo
   */
  costCenterPrices?: number;
  /**
   * @example
   * demo
   */
  costCenterRatios?: number;
  /**
   * @example
   * demo
   */
  costCenterSubjectCode?: string;
  /**
   * @example
   * demo
   */
  costCenterSubjectName?: string;
  /**
   * @example
   * demo
   */
  settleSubjectId?: string;
  /**
   * @example
   * demo
   */
  settleSubjectName?: string;
  /**
   * @example
   * demo
   */
  settleSubjectNo?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNo: 'cost_center_no',
      costCenterPrices: 'cost_center_prices',
      costCenterRatios: 'cost_center_ratios',
      costCenterSubjectCode: 'cost_center_subject_code',
      costCenterSubjectName: 'cost_center_subject_name',
      settleSubjectId: 'settle_subject_id',
      settleSubjectName: 'settle_subject_name',
      settleSubjectNo: 'settle_subject_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'string',
      costCenterName: 'string',
      costCenterNo: 'string',
      costCenterPrices: 'number',
      costCenterRatios: 'number',
      costCenterSubjectCode: 'string',
      costCenterSubjectName: 'string',
      settleSubjectId: 'string',
      settleSubjectName: 'string',
      settleSubjectNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderDetailInfoResponseBodyModuleOccupantInfoList extends $dara.Model {
  /**
   * @example
   * 1235615612424222
   */
  cardNo?: string;
  /**
   * @example
   * 1
   */
  cardType?: number;
  costCenterInfoList?: HotelOrderDetailInfoResponseBodyModuleOccupantInfoListCostCenterInfoList[];
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
  /**
   * @example
   * demo
   */
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
   * zhangsan
   */
  firstName?: string;
  /**
   * @example
   * true
   */
  isBooker?: boolean;
  /**
   * @example
   * zhang
   */
  lastName?: string;
  /**
   * @example
   * 张三
   */
  name?: string;
  /**
   * @example
   * 0571-872237
   */
  phone?: string;
  /**
   * @example
   * 从1开始,根据诉求依次向下排序(如果多间预定该字段表示哪些人住哪些房间)
   */
  roomNo?: number;
  /**
   * @example
   * true
   */
  selected?: boolean;
  /**
   * @example
   * 12817218
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
      costCenterInfoList: 'cost_center_info_list',
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
      selected: 'selected',
      staffNo: 'staff_no',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNo: 'string',
      cardType: 'number',
      costCenterInfoList: { 'type': 'array', 'itemType': HotelOrderDetailInfoResponseBodyModuleOccupantInfoListCostCenterInfoList },
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
      selected: 'boolean',
      staffNo: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.costCenterInfoList)) {
      $dara.Model.validateArray(this.costCenterInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderDetailInfoResponseBodyModuleRoomNightPriceInfoList extends $dara.Model {
  /**
   * @example
   * 含双早
   */
  board?: string;
  /**
   * @example
   * 2
   */
  boardNum?: number;
  /**
   * @example
   * 1677600000000
   */
  checkIn?: string;
  /**
   * @example
   * 1399417428510
   */
  ratePlanId?: string;
  /**
   * @example
   * 阿里员工价-含双早
   */
  ratePlanName?: string;
  /**
   * @example
   * 545993154510
   */
  roomId?: string;
  /**
   * @example
   * 高级房(HDS)-阿里员工价含双早
   */
  roomName?: string;
  /**
   * @example
   * 50000
   */
  roomPrice?: number;
  static names(): { [key: string]: string } {
    return {
      board: 'board',
      boardNum: 'board_num',
      checkIn: 'check_in',
      ratePlanId: 'rate_plan_id',
      ratePlanName: 'rate_plan_name',
      roomId: 'room_id',
      roomName: 'room_name',
      roomPrice: 'room_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      board: 'string',
      boardNum: 'number',
      checkIn: 'string',
      ratePlanId: 'string',
      ratePlanName: 'string',
      roomId: 'string',
      roomName: 'string',
      roomPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderDetailInfoResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2022-01-29
   */
  actualCheckInTime?: string;
  /**
   * @example
   * 2022-01-29
   */
  actualCheckOutTime?: string;
  btripHotelCancelPolicyDTO?: HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTO;
  /**
   * @example
   * 123
   */
  btripOrderId?: string;
  /**
   * @example
   * 100
   */
  cancelFine?: number;
  cancelInfo?: HotelOrderDetailInfoResponseBodyModuleCancelInfo;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkIn?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkOut?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  confirmOrderTime?: string;
  /**
   * @example
   * 张三
   */
  contractName?: string;
  /**
   * @example
   * 12316261873
   */
  contractTel?: string;
  /**
   * @example
   * 2020-01-21
   */
  createOrderTime?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  earlyArrivalTime?: string;
  /**
   * @example
   * true
   */
  earlyDeparture?: boolean;
  /**
   * @example
   * 2
   */
  guestCount?: number;
  hotelDetailInfo?: HotelOrderDetailInfoResponseBodyModuleHotelDetailInfo;
  hotelOnSitePriceDetail?: HotelOrderDetailInfoResponseBodyModuleHotelOnSitePriceDetail;
  hotelSaleOrderRoomInfos?: HotelOrderDetailInfoResponseBodyModuleHotelSaleOrderRoomInfos[];
  invoiceInfo?: HotelOrderDetailInfoResponseBodyModuleInvoiceInfo;
  /**
   * @example
   * 1289918
   */
  itemId?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  lastArrivalTime?: string;
  occupantInfoList?: HotelOrderDetailInfoResponseBodyModuleOccupantInfoList[];
  /**
   * @example
   * 1
   */
  orderStatus?: number;
  /**
   * @example
   * 预订成功
   */
  orderStatusDesc?: string;
  /**
   * @example
   * A3NAW9
   */
  outConfirmCode?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  payTime?: string;
  /**
   * @example
   * 1
   */
  productType?: number;
  /**
   * @example
   * 100328718728171
   */
  purchaseOrderId?: string;
  /**
   * @example
   * 100
   */
  refundPrice?: number;
  /**
   * @example
   * demo
   */
  refundReason?: string;
  /**
   * @example
   * 100
   */
  refundServiceFee?: number;
  roomNightPriceInfoList?: HotelOrderDetailInfoResponseBodyModuleRoomNightPriceInfoList[];
  /**
   * @example
   * 1
   */
  roomNumber?: number;
  /**
   * @example
   * 大床房
   */
  roomTypeName?: string;
  /**
   * @example
   * 2088441675613762
   */
  sellerId?: string;
  /**
   * @example
   * taobao
   */
  sellerName?: string;
  /**
   * @example
   * 1.02
   */
  serviceFee?: number;
  /**
   * @example
   * 0
   */
  settleType?: string;
  /**
   * @example
   * dis123
   */
  supplierOrderId?: string;
  /**
   * @example
   * 100
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      actualCheckInTime: 'actual_check_in_time',
      actualCheckOutTime: 'actual_check_out_time',
      btripHotelCancelPolicyDTO: 'btrip_hotel_cancel_policy_d_t_o',
      btripOrderId: 'btrip_order_id',
      cancelFine: 'cancel_fine',
      cancelInfo: 'cancel_info',
      checkIn: 'check_in',
      checkOut: 'check_out',
      confirmOrderTime: 'confirm_order_time',
      contractName: 'contract_name',
      contractTel: 'contract_tel',
      createOrderTime: 'create_order_time',
      earlyArrivalTime: 'early_arrival_time',
      earlyDeparture: 'early_departure',
      guestCount: 'guest_count',
      hotelDetailInfo: 'hotel_detail_info',
      hotelOnSitePriceDetail: 'hotel_on_site_price_detail',
      hotelSaleOrderRoomInfos: 'hotel_sale_order_room_infos',
      invoiceInfo: 'invoice_info',
      itemId: 'item_id',
      lastArrivalTime: 'last_arrival_time',
      occupantInfoList: 'occupant_info_list',
      orderStatus: 'order_status',
      orderStatusDesc: 'order_status_desc',
      outConfirmCode: 'out_confirm_code',
      payTime: 'pay_time',
      productType: 'product_type',
      purchaseOrderId: 'purchase_order_id',
      refundPrice: 'refund_price',
      refundReason: 'refund_reason',
      refundServiceFee: 'refund_service_fee',
      roomNightPriceInfoList: 'room_night_price_info_list',
      roomNumber: 'room_number',
      roomTypeName: 'room_type_name',
      sellerId: 'seller_id',
      sellerName: 'seller_name',
      serviceFee: 'service_fee',
      settleType: 'settle_type',
      supplierOrderId: 'supplier_order_id',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualCheckInTime: 'string',
      actualCheckOutTime: 'string',
      btripHotelCancelPolicyDTO: HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTO,
      btripOrderId: 'string',
      cancelFine: 'number',
      cancelInfo: HotelOrderDetailInfoResponseBodyModuleCancelInfo,
      checkIn: 'string',
      checkOut: 'string',
      confirmOrderTime: 'string',
      contractName: 'string',
      contractTel: 'string',
      createOrderTime: 'string',
      earlyArrivalTime: 'string',
      earlyDeparture: 'boolean',
      guestCount: 'number',
      hotelDetailInfo: HotelOrderDetailInfoResponseBodyModuleHotelDetailInfo,
      hotelOnSitePriceDetail: HotelOrderDetailInfoResponseBodyModuleHotelOnSitePriceDetail,
      hotelSaleOrderRoomInfos: { 'type': 'array', 'itemType': HotelOrderDetailInfoResponseBodyModuleHotelSaleOrderRoomInfos },
      invoiceInfo: HotelOrderDetailInfoResponseBodyModuleInvoiceInfo,
      itemId: 'string',
      lastArrivalTime: 'string',
      occupantInfoList: { 'type': 'array', 'itemType': HotelOrderDetailInfoResponseBodyModuleOccupantInfoList },
      orderStatus: 'number',
      orderStatusDesc: 'string',
      outConfirmCode: 'string',
      payTime: 'string',
      productType: 'number',
      purchaseOrderId: 'string',
      refundPrice: 'number',
      refundReason: 'string',
      refundServiceFee: 'number',
      roomNightPriceInfoList: { 'type': 'array', 'itemType': HotelOrderDetailInfoResponseBodyModuleRoomNightPriceInfoList },
      roomNumber: 'number',
      roomTypeName: 'string',
      sellerId: 'string',
      sellerName: 'string',
      serviceFee: 'number',
      settleType: 'string',
      supplierOrderId: 'string',
      totalPrice: 'number',
    };
  }

  validate() {
    if(this.btripHotelCancelPolicyDTO && typeof (this.btripHotelCancelPolicyDTO as any).validate === 'function') {
      (this.btripHotelCancelPolicyDTO as any).validate();
    }
    if(this.cancelInfo && typeof (this.cancelInfo as any).validate === 'function') {
      (this.cancelInfo as any).validate();
    }
    if(this.hotelDetailInfo && typeof (this.hotelDetailInfo as any).validate === 'function') {
      (this.hotelDetailInfo as any).validate();
    }
    if(this.hotelOnSitePriceDetail && typeof (this.hotelOnSitePriceDetail as any).validate === 'function') {
      (this.hotelOnSitePriceDetail as any).validate();
    }
    if(Array.isArray(this.hotelSaleOrderRoomInfos)) {
      $dara.Model.validateArray(this.hotelSaleOrderRoomInfos);
    }
    if(this.invoiceInfo && typeof (this.invoiceInfo as any).validate === 'function') {
      (this.invoiceInfo as any).validate();
    }
    if(Array.isArray(this.occupantInfoList)) {
      $dara.Model.validateArray(this.occupantInfoList);
    }
    if(Array.isArray(this.roomNightPriceInfoList)) {
      $dara.Model.validateArray(this.roomNightPriceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderDetailInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * succeed in handling request
   */
  message?: string;
  module?: HotelOrderDetailInfoResponseBodyModule;
  /**
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: HotelOrderDetailInfoResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

