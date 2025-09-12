// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IeHotelBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
  adjustTime?: string;
  /**
   * @example
   * 2021123432260
   */
  alipayTradeNo?: string;
  /**
   * @example
   * AUD
   */
  amountCurrency?: string;
  /**
   * @example
   * MDG
   */
  applyArrCityCode?: string;
  applyArrCityName?: string;
  /**
   * @example
   * HRB
   */
  applyDepCityCode?: string;
  applyDepCityName?: string;
  applyExtendField?: string;
  /**
   * @example
   * 103189557
   */
  applyId?: string;
  approverEmail?: string;
  approverId?: string;
  approverName?: string;
  /**
   * @example
   * 1.0
   */
  averageNights?: number;
  baseLocation?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  billRecordTime?: string;
  bookMode?: string;
  bookReason?: string;
  /**
   * @example
   * 2021-10-08 23:38:55
   */
  bookTime?: string;
  /**
   * @example
   * al_xinuan.zsy
   */
  bookerId?: string;
  /**
   * @example
   * 70022164
   */
  bookerJobNo?: string;
  bookerName?: string;
  brandGroup?: string;
  /**
   * @example
   * XXX
   */
  brandName?: string;
  /**
   * @example
   * 1345
   */
  businessExpense?: number;
  businessTripResult?: string;
  /**
   * @example
   * 1
   */
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  /**
   * @example
   * 2021-10-14 00:00:00
   */
  checkInDate?: string;
  /**
   * @example
   * 2021-10-16 00:00:00
   */
  checkoutDate?: string;
  city?: string;
  /**
   * @example
   * 110100
   */
  cityCode?: string;
  /**
   * @example
   * 12
   */
  corpRefundFee?: number;
  /**
   * @example
   * 1000
   */
  corpTotalFee?: number;
  costCenter?: string;
  /**
   * @example
   * 8b7f3cd-24324-097
   */
  costCenterNumber?: string;
  costDepartment?: string;
  country?: string;
  /**
   * @example
   * 1454567
   */
  countryCode?: string;
  customContent?: string;
  deductibleTax?: number;
  department?: string;
  departmentId?: string;
  exceedReason?: string;
  /**
   * @example
   * 20101
   */
  feeType?: string;
  feeTypeDesc?: string;
  /**
   * @example
   * 10.1
   */
  fines?: number;
  /**
   * @example
   * 345
   */
  foreignBusinessExpense?: number;
  foreignersTag?: string;
  hotelName?: string;
  /**
   * @example
   * 5
   */
  hotelStar?: string;
  /**
   * @example
   * 4564547
   */
  index?: string;
  invoiceTitle?: string;
  isEarlyDeparture?: string;
  isNegotiation?: string;
  isShareStr?: string;
  location?: string;
  /**
   * @example
   * 132143534543
   */
  mainApplyId?: string;
  mappingCompanyCode?: string;
  /**
   * @example
   * 2
   */
  nights?: number;
  /**
   * @example
   * 110285961234324
   */
  orderId?: string;
  /**
   * @example
   * 1088.96
   */
  orderPrice?: number;
  /**
   * @example
   * null
   */
  orderStatusDesc?: string;
  orderType?: string;
  originalReserveRule?: string;
  /**
   * @example
   * 534545345
   */
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  /**
   * @example
   * 34
   */
  personRefundFee?: number;
  /**
   * @example
   * 88.96
   */
  personSettlePrice?: number;
  position?: string;
  positionLevel?: string;
  /**
   * @example
   * 4564547
   */
  primaryId?: number;
  processorOaCode?: string;
  /**
   * @example
   * 2345235435
   */
  projectCode?: string;
  projectName?: string;
  /**
   * @example
   * 113.02
   */
  promotionFee?: number;
  /**
   * @example
   * 1.0d
   */
  rate?: string;
  remark?: string;
  /**
   * @example
   * 1
   */
  reserveRule?: number;
  roomNo?: string;
  /**
   * @example
   * 1
   */
  roomNumber?: number;
  /**
   * @example
   * 1201.98
   */
  roomPrice?: number;
  roomType?: string;
  /**
   * @example
   * 23.9
   */
  serviceFee?: number;
  settleTypeDesc?: string;
  /**
   * @example
   * 350
   */
  settlementFee?: number;
  /**
   * @example
   * 6.11
   */
  settlementGrantFee?: number;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  settlementTime?: string;
  /**
   * @example
   * 4
   */
  settlementType?: string;
  sio?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  statusDesc?: string;
  /**
   * @example
   * 123123232
   */
  subOrderId?: string;
  /**
   * @example
   * 6%
   */
  taxRate?: string;
  /**
   * @example
   * 1321445511345
   */
  thirdInvoiceId?: string;
  /**
   * @example
   * AB0-CDE-1-F-1234567891011
   */
  thirdItineraryId?: string;
  /**
   * @example
   * 202311081011000348578
   */
  thirdPartBusinessId?: string;
  /**
   * @example
   * MGI18000230221072483
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * 2
   */
  totalNights?: number;
  tradeActionDesc?: string;
  travelerEmail?: string;
  /**
   * @example
   * al_xinuan.zsy
   */
  travelerId?: string;
  /**
   * @example
   * 345345
   */
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerName?: string;
  /**
   * @example
   * 11
   */
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
  /**
   * @example
   * 12
   */
  category?: number;
  /**
   * @example
   * corp1
   */
  corpId?: string;
  dataList?: IeHotelBillSettlementQueryResponseBodyModuleDataList[];
  /**
   * @example
   * 1012039195340093034
   */
  orderId?: string;
  /**
   * @example
   * 2022-11-02
   */
  periodEnd?: string;
  /**
   * @example
   * 2022-11-01
   */
  periodStart?: string;
  scrollId?: string;
  /**
   * @example
   * 30
   */
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
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: IeHotelBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * 210e877f16763560074236874d5268
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 2103a08a16861217249785276d5a87
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

