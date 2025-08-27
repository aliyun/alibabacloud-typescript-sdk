// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
  adjustTime?: string;
  /**
   * @example
   * 1
   */
  advanceDay?: number;
  /**
   * @example
   * MU
   */
  airlineCorpCode?: string;
  airlineCorpName?: string;
  alipayId?: string;
  /**
   * @example
   * 2021100122001138061456080520
   */
  alipayTradeNo?: string;
  applyArrCityCode?: string;
  applyArrCityName?: string;
  applyDepCityCode?: string;
  applyDepCityName?: string;
  /**
   * @remarks
   * 审批扩展自定义字段
   */
  applyExtendField?: string;
  /**
   * @example
   * 103177854
   */
  applyId?: string;
  /**
   * @example
   * CAN
   */
  arrAirportCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  /**
   * @example
   * 2021-10-02
   */
  arrDate?: string;
  arrStation?: string;
  /**
   * @example
   * 13:30:00
   */
  arrTime?: string;
  baseLocation?: string;
  /**
   * @example
   * 2020-12-23T20:18Z
   */
  billRecordTime?: string;
  bookChannel?: string;
  bookMode?: string;
  /**
   * @example
   * 2021-10-01 00:17:05
   */
  bookTime?: string;
  bookerId?: string;
  /**
   * @example
   * 2342432
   */
  bookerJobNo?: string;
  bookerName?: string;
  /**
   * @example
   * 23.9
   */
  btripCouponFee?: number;
  /**
   * @example
   * 50
   */
  buildFee?: number;
  businessTripResult?: string;
  /**
   * @example
   * R
   */
  cabin?: string;
  cabinClass?: string;
  /**
   * @example
   * 1
   */
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  /**
   * @example
   * 23.9
   */
  changeFee?: number;
  changeReasonCode?: string;
  changeResult?: string;
  /**
   * @example
   * 460
   */
  corpPayOrderFee?: number;
  corpSettlePrice?: number;
  costCenter?: string;
  /**
   * @example
   * 48b7f3cd-8a4f-4df9-ae2c-883e008cf097
   */
  costCenterNumber?: string;
  costDepartment?: string;
  /**
   * @example
   * 1
   */
  coupon?: number;
  customContent?: string;
  deductibleTax?: number;
  /**
   * @example
   * KHN
   */
  depAirportCode?: string;
  depCityCode?: string;
  department?: string;
  departmentId?: string;
  deptCity?: string;
  /**
   * @example
   * 2021-10-02
   */
  deptDate?: string;
  deptStation?: string;
  /**
   * @example
   * 12:00:00
   */
  deptTime?: string;
  /**
   * @example
   * 51%
   */
  discount?: string;
  exceedReason?: string;
  /**
   * @example
   * 10101
   */
  feeType?: string;
  feeTypeDesc?: string;
  /**
   * @example
   * MU9684
   */
  flightNo?: string;
  flightTripType?: string;
  /**
   * @example
   * 4564547
   */
  index?: string;
  insOrderId?: string;
  /**
   * @example
   * 23.9
   */
  insuranceFee?: number;
  insuranceNumber?: string;
  invoiceTitle?: string;
  itemType?: string;
  /**
   * @example
   * 5334916421
   */
  itineraryNum?: string;
  /**
   * @example
   * 460
   */
  itineraryPrice?: number;
  mappingCompanyCode?: string;
  mileage?: string;
  /**
   * @example
   * 2021-10-01 00:17:13
   */
  mostDifferenceDeptTime?: string;
  /**
   * @example
   * 23%
   */
  mostDifferenceDiscount?: string;
  /**
   * @example
   * MU9684
   */
  mostDifferenceFlightNo?: string;
  /**
   * @example
   * 23.9
   */
  mostDifferencePrice?: number;
  mostDifferenceReason?: string;
  /**
   * @example
   * 23.9
   */
  mostPrice?: number;
  /**
   * @example
   * 23.9
   */
  negotiationCouponFee?: number;
  offlineStatus?: string;
  /**
   * @example
   * 0
   */
  oilFee?: number;
  /**
   * @example
   * 234223423423
   */
  orderId?: string;
  orderTicketNo?: string;
  /**
   * @example
   * 234324324423
   */
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  personSettlePrice?: number;
  position?: string;
  positionLevel?: string;
  preBookTip?: string;
  /**
   * @example
   * 4564547
   */
  primaryId?: number;
  processorOaCode?: string;
  /**
   * @example
   * 45623234
   */
  projectCode?: string;
  projectName?: string;
  refundAffiliateNo?: string;
  refundApplyId?: string;
  /**
   * @example
   * 23.9
   */
  refundFee?: number;
  refundReasonCode?: string;
  refundResult?: string;
  /**
   * @example
   * 23.9
   */
  refundUpgradeCost?: number;
  remark?: string;
  repeatRefund?: string;
  sceneId?: string;
  sceneName?: string;
  /**
   * @example
   * 410
   */
  sealPrice?: number;
  /**
   * @example
   * 23.9
   */
  serviceFee?: number;
  settleTypeDesc?: string;
  /**
   * @example
   * 460
   */
  settlementFee?: number;
  /**
   * @example
   * 5.67
   */
  settlementGrantFee?: number;
  /**
   * @example
   * 2021-10-01 00:17:13
   */
  settlementTime?: string;
  /**
   * @example
   * 2
   */
  settlementType?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  statusDesc?: string;
  /**
   * @remarks
   * 税率
   * 
   * @example
   * 6%
   */
  taxRate?: string;
  thirdItineraryId?: string;
  /**
   * @example
   * 781-6586234234324
   */
  ticketId?: string;
  trade?: string;
  tradeActionDesc?: string;
  travelerId?: string;
  /**
   * @example
   * 345345
   */
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  /**
   * @example
   * 23.9
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
      changeReasonCode: 'change_reason_code',
      changeResult: 'change_result',
      corpPayOrderFee: 'corp_pay_order_fee',
      corpSettlePrice: 'corp_settle_price',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      costDepartment: 'cost_department',
      coupon: 'coupon',
      customContent: 'custom_content',
      deductibleTax: 'deductible_tax',
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
      offlineStatus: 'offline_status',
      oilFee: 'oil_fee',
      orderId: 'order_id',
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
      refundAffiliateNo: 'refund_affiliate_no',
      refundApplyId: 'refund_apply_id',
      refundFee: 'refund_fee',
      refundReasonCode: 'refund_reason_code',
      refundResult: 'refund_result',
      refundUpgradeCost: 'refund_upgrade_cost',
      remark: 'remark',
      repeatRefund: 'repeat_refund',
      sceneId: 'scene_id',
      sceneName: 'scene_name',
      sealPrice: 'seal_price',
      serviceFee: 'service_fee',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      status: 'status',
      statusDesc: 'status_desc',
      taxRate: 'tax_rate',
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
      changeReasonCode: 'string',
      changeResult: 'string',
      corpPayOrderFee: 'number',
      corpSettlePrice: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      costDepartment: 'string',
      coupon: 'number',
      customContent: 'string',
      deductibleTax: 'number',
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
      mileage: 'string',
      mostDifferenceDeptTime: 'string',
      mostDifferenceDiscount: 'string',
      mostDifferenceFlightNo: 'string',
      mostDifferencePrice: 'number',
      mostDifferenceReason: 'string',
      mostPrice: 'number',
      negotiationCouponFee: 'number',
      offlineStatus: 'string',
      oilFee: 'number',
      orderId: 'string',
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
      refundAffiliateNo: 'string',
      refundApplyId: 'string',
      refundFee: 'number',
      refundReasonCode: 'string',
      refundResult: 'string',
      refundUpgradeCost: 'number',
      remark: 'string',
      repeatRefund: 'string',
      sceneId: 'string',
      sceneName: 'string',
      sealPrice: 'number',
      serviceFee: 'number',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      status: 'number',
      statusDesc: 'string',
      taxRate: 'string',
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

export class FlightBillSettlementQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1
   */
  category?: number;
  corpId?: string;
  dataList?: FlightBillSettlementQueryResponseBodyModuleDataList[];
  /**
   * @example
   * 2021-10-14
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
   * 5180
   */
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
      dataList: { 'type': 'array', 'itemType': FlightBillSettlementQueryResponseBodyModuleDataList },
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

export class FlightBillSettlementQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: FlightBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
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
      module: FlightBillSettlementQueryResponseBodyModule,
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

