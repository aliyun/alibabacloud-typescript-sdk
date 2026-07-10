// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IeHotelBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
  adjustTime?: string;
  alipayTradeNo?: string;
  amountCurrency?: string;
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
  bookMode?: string;
  bookReason?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  brandGroup?: string;
  brandName?: string;
  businessExpense?: number;
  businessTripResult?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  checkInDate?: string;
  checkoutDate?: string;
  city?: string;
  cityCode?: string;
  corpRefundFee?: number;
  corpTotalFee?: number;
  costCenter?: string;
  costCenterNumber?: string;
  costDepartment?: string;
  country?: string;
  countryCode?: string;
  customContent?: string;
  deductibleTax?: number;
  department?: string;
  departmentId?: string;
  exceedReason?: string;
  feeType?: string;
  feeTypeDesc?: string;
  fines?: number;
  foreignBusinessExpense?: number;
  foreignersTag?: string;
  hotelName?: string;
  hotelStar?: string;
  index?: string;
  invoiceTitle?: string;
  isEarlyDeparture?: string;
  isNegotiation?: string;
  isShareStr?: string;
  location?: string;
  mainApplyId?: string;
  mappingCompanyCode?: string;
  nights?: number;
  orderId?: string;
  orderPrice?: number;
  orderStatusDesc?: string;
  orderType?: string;
  originalReserveRule?: string;
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
  rate?: string;
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
  status?: number;
  statusDesc?: string;
  subOrderId?: string;
  taxRate?: string;
  thirdInvoiceId?: string;
  thirdItineraryId?: string;
  thirdPartBusinessId?: string;
  thirdpartApplyId?: string;
  totalNights?: number;
  tradeActionDesc?: string;
  travelerEmail?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerName?: string;
  voucherType?: number;
  voucherTypeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      adjustTime: 'adjust_time',
      alipayTradeNo: 'alipay_trade_no',
      amountCurrency: 'amount_currency',
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
      bookMode: 'book_mode',
      bookReason: 'book_reason',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      brandGroup: 'brand_group',
      brandName: 'brand_name',
      businessExpense: 'business_expense',
      businessTripResult: 'business_trip_result',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      checkInDate: 'check_in_date',
      checkoutDate: 'checkout_date',
      city: 'city',
      cityCode: 'city_code',
      corpRefundFee: 'corp_refund_fee',
      corpTotalFee: 'corp_total_fee',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      costDepartment: 'cost_department',
      country: 'country',
      countryCode: 'country_code',
      customContent: 'custom_content',
      deductibleTax: 'deductible_tax',
      department: 'department',
      departmentId: 'department_id',
      exceedReason: 'exceed_reason',
      feeType: 'fee_type',
      feeTypeDesc: 'fee_type_desc',
      fines: 'fines',
      foreignBusinessExpense: 'foreign_business_expense',
      foreignersTag: 'foreigners_tag',
      hotelName: 'hotel_name',
      hotelStar: 'hotel_star',
      index: 'index',
      invoiceTitle: 'invoice_title',
      isEarlyDeparture: 'is_early_departure',
      isNegotiation: 'is_negotiation',
      isShareStr: 'is_share_str',
      location: 'location',
      mainApplyId: 'main_apply_id',
      mappingCompanyCode: 'mapping_company_code',
      nights: 'nights',
      orderId: 'order_id',
      orderPrice: 'order_price',
      orderStatusDesc: 'order_status_desc',
      orderType: 'order_type',
      originalReserveRule: 'original_reserve_rule',
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
      rate: 'rate',
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
      status: 'status',
      statusDesc: 'status_desc',
      subOrderId: 'sub_order_id',
      taxRate: 'tax_rate',
      thirdInvoiceId: 'third_invoice_id',
      thirdItineraryId: 'third_itinerary_id',
      thirdPartBusinessId: 'third_part_business_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      totalNights: 'total_nights',
      tradeActionDesc: 'trade_action_desc',
      travelerEmail: 'traveler_email',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerMemberType: 'traveler_member_type',
      travelerName: 'traveler_name',
      voucherType: 'voucher_type',
      voucherTypeDesc: 'voucher_type_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustTime: 'string',
      alipayTradeNo: 'string',
      amountCurrency: 'string',
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
      bookMode: 'string',
      bookReason: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      brandGroup: 'string',
      brandName: 'string',
      businessExpense: 'number',
      businessTripResult: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      checkInDate: 'string',
      checkoutDate: 'string',
      city: 'string',
      cityCode: 'string',
      corpRefundFee: 'number',
      corpTotalFee: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      costDepartment: 'string',
      country: 'string',
      countryCode: 'string',
      customContent: 'string',
      deductibleTax: 'number',
      department: 'string',
      departmentId: 'string',
      exceedReason: 'string',
      feeType: 'string',
      feeTypeDesc: 'string',
      fines: 'number',
      foreignBusinessExpense: 'number',
      foreignersTag: 'string',
      hotelName: 'string',
      hotelStar: 'string',
      index: 'string',
      invoiceTitle: 'string',
      isEarlyDeparture: 'string',
      isNegotiation: 'string',
      isShareStr: 'string',
      location: 'string',
      mainApplyId: 'string',
      mappingCompanyCode: 'string',
      nights: 'number',
      orderId: 'string',
      orderPrice: 'number',
      orderStatusDesc: 'string',
      orderType: 'string',
      originalReserveRule: 'string',
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
      rate: 'string',
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
      status: 'number',
      statusDesc: 'string',
      subOrderId: 'string',
      taxRate: 'string',
      thirdInvoiceId: 'string',
      thirdItineraryId: 'string',
      thirdPartBusinessId: 'string',
      thirdpartApplyId: 'string',
      totalNights: 'number',
      tradeActionDesc: 'string',
      travelerEmail: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerMemberType: 'string',
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

export class IeHotelBillSettlementQueryResponseBodyModule extends $dara.Model {
  category?: number;
  corpId?: string;
  dataList?: IeHotelBillSettlementQueryResponseBodyModuleDataList[];
  orderId?: string;
  periodEnd?: string;
  periodStart?: string;
  scrollId?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      dataList: 'data_list',
      orderId: 'order_id',
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
      dataList: { 'type': 'array', 'itemType': IeHotelBillSettlementQueryResponseBodyModuleDataList },
      orderId: 'string',
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IeHotelBillSettlementQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: IeHotelBillSettlementQueryResponseBodyModule;
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
      module: IeHotelBillSettlementQueryResponseBodyModule,
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

