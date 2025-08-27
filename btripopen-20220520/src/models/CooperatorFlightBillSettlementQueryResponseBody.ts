// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CooperatorFlightBillSettlementQueryResponseBodyModuleItems extends $dara.Model {
  adjustTime?: string;
  /**
   * @example
   * 1
   */
  advanceDay?: number;
  /**
   * @example
   * AB
   */
  airlineCorpCode?: string;
  airlineCorpName?: string;
  /**
   * @example
   * 123aaa
   */
  alipayId?: string;
  /**
   * @example
   * a123
   */
  alipayTradeNo?: string;
  /**
   * @example
   * CD
   */
  applyArrCityCode?: string;
  applyArrCityName?: string;
  /**
   * @example
   * AB
   */
  applyDepCityCode?: string;
  applyDepCityName?: string;
  applyExtendField?: string;
  /**
   * @example
   * 1004430880
   */
  applyId?: string;
  /**
   * @example
   * CKG
   */
  arrAirportCode?: string;
  arrCity?: string;
  /**
   * @example
   * CKG
   */
  arrCityCode?: string;
  /**
   * @example
   * 2023-01-01
   */
  arrDate?: string;
  arrStation?: string;
  /**
   * @example
   * 12:00:00
   */
  arrTime?: string;
  baseLocation?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  billRecordTime?: string;
  bookChannel?: string;
  bookMode?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  bookTime?: string;
  /**
   * @example
   * 1234
   */
  bookerId?: string;
  /**
   * @example
   * A1234
   */
  bookerJobNo?: string;
  bookerName?: string;
  /**
   * @example
   * 100.0
   */
  btripCouponFee?: number;
  /**
   * @example
   * 50.0
   */
  buildFee?: number;
  businessTripResult?: string;
  /**
   * @example
   * A
   */
  cabin?: string;
  /**
   * @example
   * YS
   */
  cabinClass?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  /**
   * @example
   * 100.0
   */
  changeFee?: number;
  changeResult?: string;
  /**
   * @example
   * IN240102113438277278
   */
  cooperatorBillCode?: string;
  cooperatorName?: string;
  /**
   * @example
   * DF24020163776907739
   */
  cooperatorOrderId?: string;
  /**
   * @example
   * 100.0
   */
  corpPayOrderFee?: number;
  /**
   * @example
   * 100.0
   */
  corpSettlePrice?: number;
  costCenter?: string;
  /**
   * @example
   * cs1
   */
  costCenterNumber?: string;
  costDepartment?: string;
  /**
   * @example
   * 0.0
   */
  coupon?: number;
  customContent?: string;
  /**
   * @example
   * JHG
   */
  depAirportCode?: string;
  /**
   * @example
   * TAO
   */
  depCityCode?: string;
  department?: string;
  /**
   * @example
   * 1112
   */
  departmentId?: string;
  deptCity?: string;
  /**
   * @example
   * 2023-01-01
   */
  deptDate?: string;
  deptStation?: string;
  /**
   * @example
   * 09:30:00
   */
  deptTime?: string;
  /**
   * @example
   * 1
   */
  discount?: string;
  exceedReason?: string;
  feeType?: string;
  feeTypeDesc?: string;
  /**
   * @example
   * CZ3590
   */
  flightNo?: string;
  flightTripType?: string;
  /**
   * @example
   * 1
   */
  index?: string;
  /**
   * @example
   * 111
   */
  insOrderId?: string;
  /**
   * @example
   * 0.0
   */
  insuranceFee?: number;
  /**
   * @example
   * 1234A
   */
  insuranceNumber?: string;
  invoiceTitle?: string;
  itemType?: string;
  /**
   * @example
   * 6666666666
   */
  itineraryNum?: string;
  /**
   * @example
   * 100.0
   */
  itineraryPrice?: number;
  mappingCompanyCode?: string;
  /**
   * @example
   * 100
   */
  mileage?: number;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  mostDifferenceDeptTime?: string;
  /**
   * @example
   * 1
   */
  mostDifferenceDiscount?: string;
  /**
   * @example
   * 123
   */
  mostDifferenceFlightNo?: string;
  /**
   * @example
   * 100.0
   */
  mostDifferencePrice?: number;
  mostDifferenceReason?: string;
  /**
   * @example
   * 100.0
   */
  mostPrice?: number;
  /**
   * @example
   * 0.0
   */
  negotiationCouponFee?: number;
  /**
   * @example
   * 30.0
   */
  oilFee?: number;
  /**
   * @example
   * 3137168772101111000
   */
  orderId?: string;
  orderStatusDesc?: string;
  orderTicketNo?: string;
  /**
   * @example
   * 123
   */
  overApplyId?: string;
  /**
   * @example
   * 123
   */
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  /**
   * @example
   * 100.0
   */
  personSettlePrice?: number;
  position?: string;
  positionLevel?: string;
  preBookTip?: string;
  /**
   * @example
   * 60399513
   */
  primaryId?: number;
  processorOaCode?: string;
  /**
   * @example
   * acs
   */
  projectCode?: string;
  projectName?: string;
  /**
   * @example
   * 100.0
   */
  refundFee?: number;
  refundResult?: string;
  /**
   * @example
   * 20.0
   */
  refundUpgradeCost?: number;
  remark?: string;
  repeatRefund?: string;
  /**
   * @example
   * 100.0
   */
  sealPrice?: number;
  /**
   * @example
   * 0.0
   */
  serviceFee?: number;
  settleTypeDesc?: string;
  /**
   * @example
   * 200.0
   */
  settlementFee?: number;
  /**
   * @example
   * 0.0
   */
  settlementGrantFee?: number;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  settlementTime?: string;
  settlementType?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  statusDesc?: string;
  /**
   * @example
   * 169551103
   */
  subOrderId?: string;
  /**
   * @example
   * 9%
   */
  taxRate?: string;
  /**
   * @example
   * cs2
   */
  thirdInvoiceId?: string;
  /**
   * @example
   * 11
   */
  thirdItineraryId?: string;
  /**
   * @example
   * 123-2345
   */
  ticketId?: string;
  /**
   * @example
   * 1
   */
  trade?: string;
  tradeActionDesc?: string;
  /**
   * @example
   * A1234
   */
  travelerId?: string;
  /**
   * @example
   * A1234
   */
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  /**
   * @example
   * 100.0
   */
  upgradeCost?: number;
  /**
   * @example
   * 11
   */
  voucherType?: number;
  voucherTypeDesc?: string;
  voyageName?: string;
  static names(): { [key: string]: string } {
    return {
      adjustTime: 'adjust_time',
      advanceDay: 'advance_day',
      airlineCorpCode: 'airline_corp_code',
      airlineCorpName: 'airline_corp_name',
      alipayId: 'alipay_id',
      alipayTradeNo: 'alipay_trade_no',
      applyArrCityCode: 'apply_arr_city_code',
      applyArrCityName: 'apply_arr_city_name',
      applyDepCityCode: 'apply_dep_city_code',
      applyDepCityName: 'apply_dep_city_name',
      applyExtendField: 'apply_extend_field',
      applyId: 'apply_id',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      baseLocation: 'base_location',
      billRecordTime: 'bill_record_time',
      bookChannel: 'book_channel',
      bookMode: 'book_mode',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      btripCouponFee: 'btrip_coupon_fee',
      buildFee: 'build_fee',
      businessTripResult: 'business_trip_result',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      changeFee: 'change_fee',
      changeResult: 'change_result',
      cooperatorBillCode: 'cooperator_bill_code',
      cooperatorName: 'cooperator_name',
      cooperatorOrderId: 'cooperator_order_id',
      corpPayOrderFee: 'corp_pay_order_fee',
      corpSettlePrice: 'corp_settle_price',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      costDepartment: 'cost_department',
      coupon: 'coupon',
      customContent: 'custom_content',
      depAirportCode: 'dep_airport_code',
      depCityCode: 'dep_city_code',
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
      flightTripType: 'flight_trip_type',
      index: 'index',
      insOrderId: 'ins_order_id',
      insuranceFee: 'insurance_fee',
      insuranceNumber: 'insurance_number',
      invoiceTitle: 'invoice_title',
      itemType: 'item_type',
      itineraryNum: 'itinerary_num',
      itineraryPrice: 'itinerary_price',
      mappingCompanyCode: 'mapping_company_code',
      mileage: 'mileage',
      mostDifferenceDeptTime: 'most_difference_dept_time',
      mostDifferenceDiscount: 'most_difference_discount',
      mostDifferenceFlightNo: 'most_difference_flight_no',
      mostDifferencePrice: 'most_difference_price',
      mostDifferenceReason: 'most_difference_reason',
      mostPrice: 'most_price',
      negotiationCouponFee: 'negotiation_coupon_fee',
      oilFee: 'oil_fee',
      orderId: 'order_id',
      orderStatusDesc: 'order_status_desc',
      orderTicketNo: 'order_ticket_no',
      overApplyId: 'over_apply_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      personSettlePrice: 'person_settle_price',
      position: 'position',
      positionLevel: 'position_level',
      preBookTip: 'pre_book_tip',
      primaryId: 'primary_id',
      processorOaCode: 'processor_oa_code',
      projectCode: 'project_code',
      projectName: 'project_name',
      refundFee: 'refund_fee',
      refundResult: 'refund_result',
      refundUpgradeCost: 'refund_upgrade_cost',
      remark: 'remark',
      repeatRefund: 'repeat_refund',
      sealPrice: 'seal_price',
      serviceFee: 'service_fee',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      status: 'status',
      statusDesc: 'status_desc',
      subOrderId: 'sub_order_id',
      taxRate: 'tax_rate',
      thirdInvoiceId: 'third_invoice_id',
      thirdItineraryId: 'third_itinerary_id',
      ticketId: 'ticket_id',
      trade: 'trade',
      tradeActionDesc: 'trade_action_desc',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerMemberType: 'traveler_member_type',
      travelerMemberTypeName: 'traveler_member_type_name',
      travelerName: 'traveler_name',
      upgradeCost: 'upgrade_cost',
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
      alipayId: 'string',
      alipayTradeNo: 'string',
      applyArrCityCode: 'string',
      applyArrCityName: 'string',
      applyDepCityCode: 'string',
      applyDepCityName: 'string',
      applyExtendField: 'string',
      applyId: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrDate: 'string',
      arrStation: 'string',
      arrTime: 'string',
      baseLocation: 'string',
      billRecordTime: 'string',
      bookChannel: 'string',
      bookMode: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      btripCouponFee: 'number',
      buildFee: 'number',
      businessTripResult: 'string',
      cabin: 'string',
      cabinClass: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      changeFee: 'number',
      changeResult: 'string',
      cooperatorBillCode: 'string',
      cooperatorName: 'string',
      cooperatorOrderId: 'string',
      corpPayOrderFee: 'number',
      corpSettlePrice: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      costDepartment: 'string',
      coupon: 'number',
      customContent: 'string',
      depAirportCode: 'string',
      depCityCode: 'string',
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
      flightTripType: 'string',
      index: 'string',
      insOrderId: 'string',
      insuranceFee: 'number',
      insuranceNumber: 'string',
      invoiceTitle: 'string',
      itemType: 'string',
      itineraryNum: 'string',
      itineraryPrice: 'number',
      mappingCompanyCode: 'string',
      mileage: 'number',
      mostDifferenceDeptTime: 'string',
      mostDifferenceDiscount: 'string',
      mostDifferenceFlightNo: 'string',
      mostDifferencePrice: 'number',
      mostDifferenceReason: 'string',
      mostPrice: 'number',
      negotiationCouponFee: 'number',
      oilFee: 'number',
      orderId: 'string',
      orderStatusDesc: 'string',
      orderTicketNo: 'string',
      overApplyId: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      personSettlePrice: 'number',
      position: 'string',
      positionLevel: 'string',
      preBookTip: 'string',
      primaryId: 'number',
      processorOaCode: 'string',
      projectCode: 'string',
      projectName: 'string',
      refundFee: 'number',
      refundResult: 'string',
      refundUpgradeCost: 'number',
      remark: 'string',
      repeatRefund: 'string',
      sealPrice: 'number',
      serviceFee: 'number',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      status: 'number',
      statusDesc: 'string',
      subOrderId: 'string',
      taxRate: 'string',
      thirdInvoiceId: 'string',
      thirdItineraryId: 'string',
      ticketId: 'string',
      trade: 'string',
      tradeActionDesc: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerMemberType: 'string',
      travelerMemberTypeName: 'string',
      travelerName: 'string',
      upgradeCost: 'number',
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

export class CooperatorFlightBillSettlementQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1
   */
  category?: number;
  /**
   * @example
   * 123
   */
  corpId?: string;
  items?: CooperatorFlightBillSettlementQueryResponseBodyModuleItems[];
  /**
   * @example
   * 2022-11-02
   */
  periodEnd?: string;
  /**
   * @example
   * 2021-10-13
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
      items: { 'type': 'array', 'itemType': CooperatorFlightBillSettlementQueryResponseBodyModuleItems },
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

export class CooperatorFlightBillSettlementQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  message?: string;
  module?: CooperatorFlightBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * 2103ad1216872266815642815d7e03
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * trace_id
   * 
   * @example
   * 213e20c816937929648732715e16f1
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
      module: CooperatorFlightBillSettlementQueryResponseBodyModule,
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

