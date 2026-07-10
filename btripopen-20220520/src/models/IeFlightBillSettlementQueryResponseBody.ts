// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IeFlightBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
  adjustTime?: string;
  advanceDay?: number;
  airlineCorpCode?: string;
  airlineCorpName?: string;
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
  arrAirportCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  arrCountry?: string;
  arrCountryCode?: string;
  arrDate?: string;
  arrStation?: string;
  arrTime?: string;
  baseLocation?: string;
  billRecordTime?: string;
  bookMode?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  btripCouponFee?: number;
  businessTripResult?: string;
  cabin?: string;
  cabinClass?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  changeFee?: number;
  changeResult?: string;
  corpPayOrderFee?: number;
  costCenter?: string;
  costCenterNumber?: string;
  costDepartment?: string;
  coupon?: number;
  customContent?: string;
  deductibleTax?: number;
  depAirportCode?: string;
  depCityCode?: string;
  depCountry?: string;
  depCountryCode?: string;
  department?: string;
  departmentId?: string;
  deptCity?: string;
  deptDate?: string;
  deptStation?: string;
  deptTime?: string;
  discount?: string;
  exceedReason?: string;
  feeType?: string;
  feeTypeDesc?: string;
  flightNo?: string;
  foreignersTag?: string;
  index?: string;
  insOrderId?: string;
  insuranceFee?: number;
  insuranceNumber?: string;
  insuranceProductName?: string;
  invoiceTitle?: string;
  location?: string;
  mappingCompanyCode?: string;
  mostDifferenceDeptTime?: string;
  mostDifferenceDiscount?: string;
  mostDifferenceFlightNo?: string;
  mostDifferencePrice?: number;
  mostDifferenceReason?: string;
  mostPrice?: number;
  negotiationCouponFee?: number;
  orderId?: string;
  orderStatusDesc?: string;
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  position?: string;
  positionLevel?: string;
  primaryId?: number;
  processorOaCode?: string;
  projectCode?: string;
  projectName?: string;
  refundChangeCost?: number;
  refundFee?: number;
  refundResult?: string;
  remark?: string;
  repeatRefund?: string;
  sealPrice?: number;
  segmentList?: string;
  segmentType?: string;
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
  taxFee?: number;
  taxRate?: string;
  thirdItineraryId?: string;
  ticketId?: string;
  trade?: string;
  tradeActionDesc?: string;
  travelerEmail?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  tripType?: number;
  voucherType?: number;
  voucherTypeDesc?: string;
  voyageName?: string;
  static names(): { [key: string]: string } {
    return {
      adjustTime: 'adjust_time',
      advanceDay: 'advance_day',
      airlineCorpCode: 'airline_corp_code',
      airlineCorpName: 'airline_corp_name',
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
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrCountry: 'arr_country',
      arrCountryCode: 'arr_country_code',
      arrDate: 'arr_date',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      baseLocation: 'base_location',
      billRecordTime: 'bill_record_time',
      bookMode: 'book_mode',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      btripCouponFee: 'btrip_coupon_fee',
      businessTripResult: 'business_trip_result',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      changeFee: 'change_fee',
      changeResult: 'change_result',
      corpPayOrderFee: 'corp_pay_order_fee',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      costDepartment: 'cost_department',
      coupon: 'coupon',
      customContent: 'custom_content',
      deductibleTax: 'deductible_tax',
      depAirportCode: 'dep_airport_code',
      depCityCode: 'dep_city_code',
      depCountry: 'dep_country',
      depCountryCode: 'dep_country_code',
      department: 'department',
      departmentId: 'department_id',
      deptCity: 'dept_city',
      deptDate: 'dept_date',
      deptStation: 'dept_station',
      deptTime: 'dept_time',
      discount: 'discount',
      exceedReason: 'exceed_reason',
      feeType: 'fee_type',
      feeTypeDesc: 'fee_type_desc',
      flightNo: 'flight_no',
      foreignersTag: 'foreigners_tag',
      index: 'index',
      insOrderId: 'ins_order_id',
      insuranceFee: 'insurance_fee',
      insuranceNumber: 'insurance_number',
      insuranceProductName: 'insurance_product_name',
      invoiceTitle: 'invoice_title',
      location: 'location',
      mappingCompanyCode: 'mapping_company_code',
      mostDifferenceDeptTime: 'most_difference_dept_time',
      mostDifferenceDiscount: 'most_difference_discount',
      mostDifferenceFlightNo: 'most_difference_flight_no',
      mostDifferencePrice: 'most_difference_price',
      mostDifferenceReason: 'most_difference_reason',
      mostPrice: 'most_price',
      negotiationCouponFee: 'negotiation_coupon_fee',
      orderId: 'order_id',
      orderStatusDesc: 'order_status_desc',
      overApplyId: 'over_apply_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      position: 'position',
      positionLevel: 'position_level',
      primaryId: 'primary_id',
      processorOaCode: 'processor_oa_code',
      projectCode: 'project_code',
      projectName: 'project_name',
      refundChangeCost: 'refund_change_cost',
      refundFee: 'refund_fee',
      refundResult: 'refund_result',
      remark: 'remark',
      repeatRefund: 'repeat_refund',
      sealPrice: 'seal_price',
      segmentList: 'segment_list',
      segmentType: 'segment_type',
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
      taxFee: 'tax_fee',
      taxRate: 'tax_rate',
      thirdItineraryId: 'third_itinerary_id',
      ticketId: 'ticket_id',
      trade: 'trade',
      tradeActionDesc: 'trade_action_desc',
      travelerEmail: 'traveler_email',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerMemberType: 'traveler_member_type',
      travelerMemberTypeName: 'traveler_member_type_name',
      travelerName: 'traveler_name',
      tripType: 'trip_type',
      voucherType: 'voucher_type',
      voucherTypeDesc: 'voucher_type_desc',
      voyageName: 'voyage_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustTime: 'string',
      advanceDay: 'number',
      airlineCorpCode: 'string',
      airlineCorpName: 'string',
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
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrCountry: 'string',
      arrCountryCode: 'string',
      arrDate: 'string',
      arrStation: 'string',
      arrTime: 'string',
      baseLocation: 'string',
      billRecordTime: 'string',
      bookMode: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      btripCouponFee: 'number',
      businessTripResult: 'string',
      cabin: 'string',
      cabinClass: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      changeFee: 'number',
      changeResult: 'string',
      corpPayOrderFee: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      costDepartment: 'string',
      coupon: 'number',
      customContent: 'string',
      deductibleTax: 'number',
      depAirportCode: 'string',
      depCityCode: 'string',
      depCountry: 'string',
      depCountryCode: 'string',
      department: 'string',
      departmentId: 'string',
      deptCity: 'string',
      deptDate: 'string',
      deptStation: 'string',
      deptTime: 'string',
      discount: 'string',
      exceedReason: 'string',
      feeType: 'string',
      feeTypeDesc: 'string',
      flightNo: 'string',
      foreignersTag: 'string',
      index: 'string',
      insOrderId: 'string',
      insuranceFee: 'number',
      insuranceNumber: 'string',
      insuranceProductName: 'string',
      invoiceTitle: 'string',
      location: 'string',
      mappingCompanyCode: 'string',
      mostDifferenceDeptTime: 'string',
      mostDifferenceDiscount: 'string',
      mostDifferenceFlightNo: 'string',
      mostDifferencePrice: 'number',
      mostDifferenceReason: 'string',
      mostPrice: 'number',
      negotiationCouponFee: 'number',
      orderId: 'string',
      orderStatusDesc: 'string',
      overApplyId: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      position: 'string',
      positionLevel: 'string',
      primaryId: 'number',
      processorOaCode: 'string',
      projectCode: 'string',
      projectName: 'string',
      refundChangeCost: 'number',
      refundFee: 'number',
      refundResult: 'string',
      remark: 'string',
      repeatRefund: 'string',
      sealPrice: 'number',
      segmentList: 'string',
      segmentType: 'string',
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
      taxFee: 'number',
      taxRate: 'string',
      thirdItineraryId: 'string',
      ticketId: 'string',
      trade: 'string',
      tradeActionDesc: 'string',
      travelerEmail: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerMemberType: 'string',
      travelerMemberTypeName: 'string',
      travelerName: 'string',
      tripType: 'number',
      voucherType: 'number',
      voucherTypeDesc: 'string',
      voyageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IeFlightBillSettlementQueryResponseBodyModule extends $dara.Model {
  category?: number;
  corpId?: string;
  dataList?: IeFlightBillSettlementQueryResponseBodyModuleDataList[];
  periodEnd?: string;
  periodStart?: string;
  scrollId?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      dataList: 'data_list',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      scrollId: 'scroll_id',
      totalNum: 'total_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      dataList: { 'type': 'array', 'itemType': IeFlightBillSettlementQueryResponseBodyModuleDataList },
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
      totalNum: 'number',
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

export class IeFlightBillSettlementQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: IeFlightBillSettlementQueryResponseBodyModule;
  morePage?: boolean;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      morePage: 'more_page',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: IeFlightBillSettlementQueryResponseBodyModule,
      morePage: 'boolean',
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

