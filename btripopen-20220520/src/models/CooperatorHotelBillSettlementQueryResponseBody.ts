// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CooperatorHotelBillSettlementQueryResponseBodyModuleItems extends $dara.Model {
  adjustTime?: string;
  alipayTradeNo?: string;
  applyArrCityCode?: string;
  applyArrCityName?: string;
  applyDepCityCode?: string;
  applyDepCityName?: string;
  applyExtendField?: string;
  applyId?: string;
  approverEmail?: string;
  approverId?: string;
  approverName?: string;
  averageNights?: number;
  baseLocation?: string;
  billRecordTime?: string;
  bookChannel?: string;
  bookMode?: string;
  bookReason?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  brandGroup?: string;
  brandName?: string;
  businessTripResult?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  checkInDate?: string;
  checkoutDate?: string;
  city?: string;
  cityCode?: string;
  cityCounty?: string;
  cityCountyCode?: number;
  cooperatorBillCode?: string;
  cooperatorName?: string;
  cooperatorOrderId?: string;
  corpRefundFee?: number;
  corpTotalFee?: number;
  costCenter?: string;
  costCenterNumber?: string;
  costDepartment?: string;
  customContent?: string;
  department?: string;
  departmentId?: string;
  exceedReason?: string;
  feeType?: string;
  feeTypeDesc?: string;
  fees?: number;
  fines?: number;
  foreignersTag?: string;
  fuPointFee?: number;
  hotelName?: string;
  index?: string;
  invoiceTitle?: string;
  isEarlyDeparture?: string;
  isNegotiation?: string;
  isShareStr?: string;
  location?: string;
  mappingCompanyCode?: string;
  nights?: number;
  orderId?: string;
  orderPrice?: number;
  orderStatusDesc?: string;
  orderType?: string;
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  personRefundFee?: number;
  personSettlePrice?: number;
  position?: string;
  positionLevel?: string;
  primaryId?: number;
  processorOaCode?: string;
  projectCode?: string;
  projectName?: string;
  promotionFee?: number;
  remark?: string;
  reserveRule?: number;
  roomNo?: string;
  roomNumber?: number;
  roomPrice?: number;
  roomType?: string;
  serviceFee?: number;
  settleTypeDesc?: string;
  settlementFee?: number;
  settlementGrantFee?: number;
  settlementTime?: string;
  settlementType?: string;
  sio?: string;
  star?: string;
  status?: number;
  statusDesc?: string;
  subOrderId?: string;
  taxRate?: string;
  thirdInvoiceId?: string;
  thirdItineraryId?: string;
  totalNights?: number;
  tradeActionDesc?: string;
  travelerEmail?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  voucherType?: number;
  voucherTypeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      adjustTime: 'adjust_time',
      alipayTradeNo: 'alipay_trade_no',
      applyArrCityCode: 'apply_arr_city_code',
      applyArrCityName: 'apply_arr_city_name',
      applyDepCityCode: 'apply_dep_city_code',
      applyDepCityName: 'apply_dep_city_name',
      applyExtendField: 'apply_extend_field',
      applyId: 'apply_id',
      approverEmail: 'approver_email',
      approverId: 'approver_id',
      approverName: 'approver_name',
      averageNights: 'average_nights',
      baseLocation: 'base_location',
      billRecordTime: 'bill_record_time',
      bookChannel: 'book_channel',
      bookMode: 'book_mode',
      bookReason: 'book_reason',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      brandGroup: 'brand_group',
      brandName: 'brand_name',
      businessTripResult: 'business_trip_result',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      checkInDate: 'check_in_date',
      checkoutDate: 'checkout_date',
      city: 'city',
      cityCode: 'city_code',
      cityCounty: 'city_county',
      cityCountyCode: 'city_county_code',
      cooperatorBillCode: 'cooperator_bill_code',
      cooperatorName: 'cooperator_name',
      cooperatorOrderId: 'cooperator_order_id',
      corpRefundFee: 'corp_refund_fee',
      corpTotalFee: 'corp_total_fee',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      costDepartment: 'cost_department',
      customContent: 'custom_content',
      department: 'department',
      departmentId: 'department_id',
      exceedReason: 'exceed_reason',
      feeType: 'fee_type',
      feeTypeDesc: 'fee_type_desc',
      fees: 'fees',
      fines: 'fines',
      foreignersTag: 'foreigners_tag',
      fuPointFee: 'fu_point_fee',
      hotelName: 'hotel_name',
      index: 'index',
      invoiceTitle: 'invoice_title',
      isEarlyDeparture: 'is_early_departure',
      isNegotiation: 'is_negotiation',
      isShareStr: 'is_share_str',
      location: 'location',
      mappingCompanyCode: 'mapping_company_code',
      nights: 'nights',
      orderId: 'order_id',
      orderPrice: 'order_price',
      orderStatusDesc: 'order_status_desc',
      orderType: 'order_type',
      overApplyId: 'over_apply_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      personRefundFee: 'person_refund_fee',
      personSettlePrice: 'person_settle_price',
      position: 'position',
      positionLevel: 'position_level',
      primaryId: 'primary_id',
      processorOaCode: 'processor_oa_code',
      projectCode: 'project_code',
      projectName: 'project_name',
      promotionFee: 'promotion_fee',
      remark: 'remark',
      reserveRule: 'reserve_rule',
      roomNo: 'room_no',
      roomNumber: 'room_number',
      roomPrice: 'room_price',
      roomType: 'room_type',
      serviceFee: 'service_fee',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      sio: 'sio',
      star: 'star',
      status: 'status',
      statusDesc: 'status_desc',
      subOrderId: 'sub_order_id',
      taxRate: 'tax_rate',
      thirdInvoiceId: 'third_invoice_id',
      thirdItineraryId: 'third_itinerary_id',
      totalNights: 'total_nights',
      tradeActionDesc: 'trade_action_desc',
      travelerEmail: 'traveler_email',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerMemberType: 'traveler_member_type',
      travelerMemberTypeName: 'traveler_member_type_name',
      travelerName: 'traveler_name',
      voucherType: 'voucher_type',
      voucherTypeDesc: 'voucher_type_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustTime: 'string',
      alipayTradeNo: 'string',
      applyArrCityCode: 'string',
      applyArrCityName: 'string',
      applyDepCityCode: 'string',
      applyDepCityName: 'string',
      applyExtendField: 'string',
      applyId: 'string',
      approverEmail: 'string',
      approverId: 'string',
      approverName: 'string',
      averageNights: 'number',
      baseLocation: 'string',
      billRecordTime: 'string',
      bookChannel: 'string',
      bookMode: 'string',
      bookReason: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      brandGroup: 'string',
      brandName: 'string',
      businessTripResult: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      checkInDate: 'string',
      checkoutDate: 'string',
      city: 'string',
      cityCode: 'string',
      cityCounty: 'string',
      cityCountyCode: 'number',
      cooperatorBillCode: 'string',
      cooperatorName: 'string',
      cooperatorOrderId: 'string',
      corpRefundFee: 'number',
      corpTotalFee: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      costDepartment: 'string',
      customContent: 'string',
      department: 'string',
      departmentId: 'string',
      exceedReason: 'string',
      feeType: 'string',
      feeTypeDesc: 'string',
      fees: 'number',
      fines: 'number',
      foreignersTag: 'string',
      fuPointFee: 'number',
      hotelName: 'string',
      index: 'string',
      invoiceTitle: 'string',
      isEarlyDeparture: 'string',
      isNegotiation: 'string',
      isShareStr: 'string',
      location: 'string',
      mappingCompanyCode: 'string',
      nights: 'number',
      orderId: 'string',
      orderPrice: 'number',
      orderStatusDesc: 'string',
      orderType: 'string',
      overApplyId: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      personRefundFee: 'number',
      personSettlePrice: 'number',
      position: 'string',
      positionLevel: 'string',
      primaryId: 'number',
      processorOaCode: 'string',
      projectCode: 'string',
      projectName: 'string',
      promotionFee: 'number',
      remark: 'string',
      reserveRule: 'number',
      roomNo: 'string',
      roomNumber: 'number',
      roomPrice: 'number',
      roomType: 'string',
      serviceFee: 'number',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      sio: 'string',
      star: 'string',
      status: 'number',
      statusDesc: 'string',
      subOrderId: 'string',
      taxRate: 'string',
      thirdInvoiceId: 'string',
      thirdItineraryId: 'string',
      totalNights: 'number',
      tradeActionDesc: 'string',
      travelerEmail: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerMemberType: 'string',
      travelerMemberTypeName: 'string',
      travelerName: 'string',
      voucherType: 'number',
      voucherTypeDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CooperatorHotelBillSettlementQueryResponseBodyModule extends $dara.Model {
  category?: number;
  corpId?: string;
  items?: CooperatorHotelBillSettlementQueryResponseBodyModuleItems[];
  periodEnd?: string;
  periodStart?: string;
  scrollId?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      items: 'items',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      scrollId: 'scroll_id',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      items: { 'type': 'array', 'itemType': CooperatorHotelBillSettlementQueryResponseBodyModuleItems },
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CooperatorHotelBillSettlementQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: CooperatorHotelBillSettlementQueryResponseBodyModule;
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
      module: CooperatorHotelBillSettlementQueryResponseBodyModule,
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

