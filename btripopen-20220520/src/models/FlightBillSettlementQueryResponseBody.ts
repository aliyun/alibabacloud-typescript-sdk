// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
  adjustTime?: string;
  advanceDay?: number;
  airlineCorpCode?: string;
  airlineCorpName?: string;
  alipayId?: string;
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
  arrDate?: string;
  arrStation?: string;
  arrTime?: string;
  baseLocation?: string;
  beforeTicketNo?: string;
  billRecordTime?: string;
  bookChannel?: string;
  bookMode?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  btripCouponFee?: number;
  buildFee?: number;
  businessTripResult?: string;
  cabin?: string;
  cabinClass?: string;
  cabinClassCode?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  changeFee?: number;
  changeReasonCode?: string;
  changeResult?: string;
  corpPayOrderFee?: number;
  corpSettlePrice?: number;
  costCenter?: string;
  costCenterNumber?: string;
  costDepartment?: string;
  coupon?: number;
  customContent?: string;
  deductibleTax?: number;
  depAirportCode?: string;
  depCityCode?: string;
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
  flightTripType?: string;
  foreignersTag?: string;
  index?: string;
  insOrderId?: string;
  insuranceFee?: number;
  insuranceNumber?: string;
  invoiceTitle?: string;
  itemType?: string;
  itineraryNum?: string;
  itineraryPrice?: number;
  location?: string;
  mappingCompanyCode?: string;
  mileage?: string;
  mostDifferenceDeptTime?: string;
  mostDifferenceDiscount?: string;
  mostDifferenceFlightNo?: string;
  mostDifferencePrice?: number;
  mostDifferenceReason?: string;
  mostPrice?: number;
  negotiationCouponFee?: number;
  offlineStatus?: string;
  oilFee?: number;
  orderId?: string;
  orderTicketNo?: string;
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  personSettlePrice?: number;
  position?: string;
  positionLevel?: string;
  preBookTip?: string;
  primaryId?: number;
  processorOaCode?: string;
  projectCode?: string;
  projectName?: string;
  refundAffiliateNo?: string;
  refundApplyId?: string;
  refundFee?: number;
  refundReasonCode?: string;
  refundResult?: string;
  refundUpgradeCost?: number;
  remark?: string;
  repeatRefund?: string;
  sceneId?: string;
  sceneName?: string;
  sealPrice?: number;
  segmentList?: string;
  serviceFee?: number;
  settleTypeDesc?: string;
  settlementFee?: number;
  settlementGrantFee?: number;
  settlementTime?: string;
  settlementType?: string;
  sio?: string;
  status?: number;
  statusDesc?: string;
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
  upgradeCost?: number;
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
      approverEmail: 'approver_email',
      approverId: 'approver_id',
      approverName: 'approver_name',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      baseLocation: 'base_location',
      beforeTicketNo: 'before_ticket_no',
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
      cabinClassCode: 'cabin_class_code',
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
      foreignersTag: 'foreigners_tag',
      index: 'index',
      insOrderId: 'ins_order_id',
      insuranceFee: 'insurance_fee',
      insuranceNumber: 'insurance_number',
      invoiceTitle: 'invoice_title',
      itemType: 'item_type',
      itineraryNum: 'itinerary_num',
      itineraryPrice: 'itinerary_price',
      location: 'location',
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
      segmentList: 'segment_list',
      serviceFee: 'service_fee',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      sio: 'sio',
      status: 'status',
      statusDesc: 'status_desc',
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
      approverEmail: 'string',
      approverId: 'string',
      approverName: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrDate: 'string',
      arrStation: 'string',
      arrTime: 'string',
      baseLocation: 'string',
      beforeTicketNo: 'string',
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
      cabinClassCode: 'string',
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
      foreignersTag: 'string',
      index: 'string',
      insOrderId: 'string',
      insuranceFee: 'number',
      insuranceNumber: 'string',
      invoiceTitle: 'string',
      itemType: 'string',
      itineraryNum: 'string',
      itineraryPrice: 'number',
      location: 'string',
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
      segmentList: 'string',
      serviceFee: 'number',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      sio: 'string',
      status: 'number',
      statusDesc: 'string',
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
  category?: number;
  corpId?: string;
  dataList?: FlightBillSettlementQueryResponseBodyModuleDataList[];
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
  code?: string;
  message?: string;
  module?: FlightBillSettlementQueryResponseBodyModule;
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

