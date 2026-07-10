// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList extends $dara.Model {
  hour?: number;
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
  cancelEndTime?: string;
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
  address?: string;
  cityName?: string;
  hotelName?: string;
  hotelTel?: string;
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
  checkinDate?: string;
  checkoutDate?: string;
  penalSum?: number;
  realCheckoutDate?: string;
  refundStatus?: number;
  roomNo?: number;
  roomPrice?: number;
  roomRefundPrice?: number;
  travelerId?: string;
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
  billingMoney?: number;
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
  postage?: number;
  receiverName?: string;
  receiverPhone?: string;
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
  costCenterId?: string;
  costCenterName?: string;
  costCenterNo?: string;
  costCenterPrices?: number;
  costCenterRatios?: number;
  costCenterSubjectCode?: string;
  costCenterSubjectName?: string;
  settleSubjectId?: string;
  settleSubjectName?: string;
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
  cardNo?: string;
  cardType?: number;
  costCenterInfoList?: HotelOrderDetailInfoResponseBodyModuleOccupantInfoListCostCenterInfoList[];
  customerType?: number;
  departmentId?: string;
  departmentName?: string;
  email?: string;
  employeeType?: number;
  firstName?: string;
  isBooker?: boolean;
  lastName?: string;
  name?: string;
  phone?: string;
  roomNo?: number;
  selected?: boolean;
  staffNo?: string;
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
  board?: string;
  boardNum?: number;
  checkIn?: string;
  ratePlanId?: string;
  ratePlanName?: string;
  roomId?: string;
  roomName?: string;
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
  actualCheckInTime?: string;
  actualCheckOutTime?: string;
  btripHotelCancelPolicyDTO?: HotelOrderDetailInfoResponseBodyModuleBtripHotelCancelPolicyDTO;
  btripOrderId?: string;
  cancelFine?: number;
  cancelInfo?: HotelOrderDetailInfoResponseBodyModuleCancelInfo;
  checkIn?: string;
  checkOut?: string;
  confirmOrderTime?: string;
  contractName?: string;
  contractTel?: string;
  createOrderTime?: string;
  earlyArrivalTime?: string;
  earlyDeparture?: boolean;
  guestCount?: number;
  hotelDetailInfo?: HotelOrderDetailInfoResponseBodyModuleHotelDetailInfo;
  hotelOnSitePriceDetail?: HotelOrderDetailInfoResponseBodyModuleHotelOnSitePriceDetail;
  hotelSaleOrderRoomInfos?: HotelOrderDetailInfoResponseBodyModuleHotelSaleOrderRoomInfos[];
  invoiceInfo?: HotelOrderDetailInfoResponseBodyModuleInvoiceInfo;
  itemId?: string;
  lastArrivalTime?: string;
  occupantInfoList?: HotelOrderDetailInfoResponseBodyModuleOccupantInfoList[];
  orderStatus?: number;
  orderStatusDesc?: string;
  outConfirmCode?: string;
  payTime?: string;
  productType?: number;
  purchaseOrderId?: string;
  refundPrice?: number;
  refundReason?: string;
  refundServiceFee?: number;
  roomNightPriceInfoList?: HotelOrderDetailInfoResponseBodyModuleRoomNightPriceInfoList[];
  roomNumber?: number;
  roomTypeName?: string;
  sellerId?: string;
  sellerName?: string;
  serviceFee?: number;
  settleType?: string;
  supplierOrderId?: string;
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
  code?: string;
  message?: string;
  module?: HotelOrderDetailInfoResponseBodyModule;
  requestId?: string;
  success?: boolean;
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

