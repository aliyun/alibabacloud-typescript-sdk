// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
  /**
   * @example
   * 2025-01-01 00:00:00
   */
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
  /**
   * @example
   * 中国东方航空
   */
  airlineCorpName?: string;
  /**
   * @example
   * 20230********000
   */
  alipayId?: string;
  /**
   * @example
   * 20211********456080520
   */
  alipayTradeNo?: string;
  /**
   * @example
   * MDG
   */
  applyArrCityCode?: string;
  /**
   * @example
   * 牡丹江
   */
  applyArrCityName?: string;
  /**
   * @example
   * HRB
   */
  applyDepCityCode?: string;
  /**
   * @example
   * 哈尔滨
   */
  applyDepCityName?: string;
  /**
   * @example
   * 补充说明
   */
  applyExtendField?: string;
  /**
   * @example
   * 103****54
   */
  applyId?: string;
  /**
   * @example
   * abc@123.com
   */
  approverEmail?: string;
  /**
   * @example
   * 11
   */
  approverId?: string;
  /**
   * @example
   * zhangsan
   */
  approverName?: string;
  /**
   * @example
   * CAN
   */
  arrAirportCode?: string;
  /**
   * @example
   * 广州
   */
  arrCity?: string;
  /**
   * @example
   * 110100
   */
  arrCityCode?: string;
  /**
   * @example
   * 2000-01-01
   */
  arrDate?: string;
  /**
   * @example
   * 白云国际机场
   */
  arrStation?: string;
  /**
   * @example
   * 14:30:00
   */
  arrTime?: string;
  /**
   * @example
   * 杭州
   */
  baseLocation?: string;
  /**
   * @example
   * 012-002145
   */
  beforeTicketNo?: string;
  /**
   * @example
   * 2000-01-01T00:00Z
   */
  billRecordTime?: string;
  /**
   * @example
   * 移动端
   */
  bookChannel?: string;
  /**
   * @example
   * 线上（自助预订）
   */
  bookMode?: string;
  /**
   * @example
   * 2021-10-01 00:17:05
   */
  bookTime?: string;
  /**
   * @example
   * user_1234
   */
  bookerId?: string;
  /**
   * @example
   * job_1234
   */
  bookerJobNo?: string;
  /**
   * @example
   * 张三
   */
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
  /**
   * @example
   * 因公司要求，需要到XX同XX公司谈业务
   */
  businessTripResult?: string;
  /**
   * @example
   * R
   */
  cabin?: string;
  /**
   * @example
   * 经济舱
   */
  cabinClass?: string;
  /**
   * @example
   * Y
   */
  cabinClassCode?: string;
  /**
   * @example
   * 1
   */
  capitalDirection?: string;
  /**
   * @example
   * 商旅事业群-运营部-华北营运大区
   */
  cascadeDepartment?: string;
  /**
   * @example
   * 国内机票
   */
  categoryDesc?: string;
  /**
   * @example
   * 23.9
   */
  changeFee?: number;
  /**
   * @example
   * 001
   */
  changeReasonCode?: string;
  /**
   * @example
   * 原航班时间与预计不符
   */
  changeResult?: string;
  /**
   * @example
   * 460
   */
  corpPayOrderFee?: number;
  /**
   * @example
   * 10.0
   */
  corpSettlePrice?: number;
  /**
   * @example
   * 运营部成本中心
   */
  costCenter?: string;
  /**
   * @example
   * cost_1234
   */
  costCenterNumber?: string;
  /**
   * @example
   * code2
   */
  costDepartment?: string;
  /**
   * @example
   * 5
   */
  coupon?: number;
  /**
   * @example
   * "{\\"key1\\":\\"value1\\",\\"key2\\":\\"value2\\",\\"key3\\":\\"value3\\"}"
   */
  customContent?: string;
  /**
   * @example
   * 1.23
   */
  deductibleTax?: number;
  /**
   * @example
   * KHN
   */
  depAirportCode?: string;
  /**
   * @example
   * 110100
   */
  depCityCode?: string;
  /**
   * @example
   * 华北营运大区
   */
  department?: string;
  /**
   * @example
   * depart_1234
   */
  departmentId?: string;
  /**
   * @example
   * 南昌
   */
  deptCity?: string;
  /**
   * @example
   * 2000-01-01
   */
  deptDate?: string;
  /**
   * @example
   * 昌北国际机场
   */
  deptStation?: string;
  /**
   * @example
   * 12:00:00
   */
  deptTime?: string;
  /**
   * @example
   * 80%
   */
  discount?: string;
  /**
   * @example
   * 无低价机票，故超标购买
   */
  exceedReason?: string;
  /**
   * @example
   * 10101
   */
  feeType?: string;
  /**
   * @example
   * 赔付
   */
  feeTypeDesc?: string;
  /**
   * @example
   * MU9684
   */
  flightNo?: string;
  /**
   * @example
   * 拼接往返
   */
  flightTripType?: string;
  /**
   * @example
   * Y
   */
  foreignersTag?: string;
  /**
   * @example
   * 45***47
   */
  index?: string;
  /**
   * @example
   * 1002************464
   */
  insOrderId?: string;
  /**
   * @example
   * 29
   */
  insuranceFee?: number;
  /**
   * @example
   * 100**************101
   */
  insuranceNumber?: string;
  /**
   * @example
   * 飞小猪有限公司
   */
  invoiceTitle?: string;
  /**
   * @example
   * 直达
   */
  itemType?: string;
  /**
   * @example
   * 53****21
   */
  itineraryNum?: string;
  /**
   * @example
   * 460
   */
  itineraryPrice?: number;
  /**
   * @example
   * 116.385449,39.997733
   */
  location?: string;
  /**
   * @example
   * q1
   */
  mappingCompanyCode?: string;
  /**
   * @example
   * 1200
   */
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
  /**
   * @example
   * 原因为：xxxxx。
   */
  mostDifferenceReason?: string;
  /**
   * @example
   * 400
   */
  mostPrice?: number;
  /**
   * @example
   * 23.9
   */
  negotiationCouponFee?: number;
  /**
   * @example
   * 线下改签
   */
  offlineStatus?: string;
  /**
   * @example
   * 0
   */
  oilFee?: number;
  /**
   * @example
   * 1002************464
   */
  orderId?: string;
  /**
   * @example
   * 123-23423587
   */
  orderTicketNo?: string;
  /**
   * @example
   * 2343****23
   */
  overApplyId?: string;
  /**
   * @example
   * depart_1234
   */
  paymentDepartmentId?: string;
  /**
   * @example
   * 运营部
   */
  paymentDepartmentName?: string;
  /**
   * @example
   * 1.0
   */
  personSettlePrice?: number;
  /**
   * @example
   * 开发
   */
  position?: string;
  /**
   * @example
   * 初级
   */
  positionLevel?: string;
  /**
   * @example
   * 紧急业务，无法提前预定
   */
  preBookTip?: string;
  /**
   * @example
   * 45***47
   */
  primaryId?: number;
  /**
   * @example
   * www122
   */
  processorOaCode?: string;
  /**
   * @example
   * project_1234
   */
  projectCode?: string;
  /**
   * @example
   * 运营生产项目
   */
  projectName?: string;
  /**
   * @example
   * 企业
   */
  refundAffiliateNo?: string;
  /**
   * @example
   * 4753********7527127
   */
  refundApplyId?: string;
  /**
   * @example
   * 23.9
   */
  refundFee?: number;
  /**
   * @example
   * 002
   */
  refundReasonCode?: string;
  /**
   * @example
   * 因公退票,因工作原因取消计划
   */
  refundResult?: string;
  /**
   * @example
   * 23.9
   */
  refundUpgradeCost?: number;
  /**
   * @example
   * 线下改签
   */
  remark?: string;
  /**
   * @example
   * 是
   */
  repeatRefund?: string;
  /**
   * @example
   * 123
   */
  sceneId?: string;
  /**
   * @example
   * 福利
   */
  sceneName?: string;
  /**
   * @example
   * 410
   */
  sealPrice?: number;
  /**
   * @example
   * [{"voyage": "PKX-CAN", "arrCity": "广州", "arrDate": "2025-03-20", "arrTime": "14:45:00", "depCity": "北京", "depDate": "2025-03-20", "depTime": "11:30:00", "flightNo": "CZ3112", "cabinClass": "经济舱", "voyageName": "北京-广州", "arrCityCode": "BJS", "depCityCode": "CAN", "airlineCompany": "南方航空", "arrAirportCode": "CAN", "arrAirportName": "白云国际机场", "cabinClassCode": "K", "depAirportCode": "PKX", "depAirportName": "大兴国际机场", "airlineCompanyCode": "CZ"}, {"voyage": "CAN-BKK", "arrCity": "曼谷", "arrDate": "2025-03-20", "arrTime": "19:20:00", "depCity": "广州", "depDate": "2025-03-20", "depTime": "17:20:00", "flightNo": "CZ8019", "cabinClass": "经济舱", "voyageName": "广州-曼谷", "arrCityCode": "CAN", "depCityCode": "BKK", "airlineCompany": "南方航空", "arrAirportCode": "BKK", "arrAirportName": "素万那普国际机场", "cabinClassCode": "K", "depAirportCode": "CAN", "depAirportName": "白云国际机场", "airlineCompanyCode": "CZ"}]
   */
  segmentList?: string;
  /**
   * @example
   * 30
   */
  serviceFee?: number;
  /**
   * @example
   * 企业月结
   */
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
   * 2000-01-01 00:00:00
   */
  settlementTime?: string;
  /**
   * @example
   * 2
   */
  settlementType?: string;
  /**
   * @example
   * sio
   */
  sio?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 入账成功
   */
  statusDesc?: string;
  /**
   * @example
   * 6%
   */
  taxRate?: string;
  /**
   * @example
   * AB0-****-****-****1011
   */
  thirdItineraryId?: string;
  /**
   * @example
   * 781-65********24
   */
  ticketId?: string;
  /**
   * @example
   * PEK-HGH
   */
  trade?: string;
  /**
   * @example
   * 支出
   */
  tradeActionDesc?: string;
  /**
   * @example
   * abc@123.com
   */
  travelerEmail?: string;
  /**
   * @example
   * user_1234
   */
  travelerId?: string;
  /**
   * @example
   * job_1234
   */
  travelerJobNo?: string;
  /**
   * @example
   * 内部员工
   */
  travelerMemberType?: string;
  /**
   * @example
   * 内部员工
   */
  travelerMemberTypeName?: string;
  /**
   * @example
   * 张三
   */
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
  /**
   * @example
   * 增值税发票
   */
  voucherTypeDesc?: string;
  /**
   * @example
   * 北京-杭州-上海
   */
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
  /**
   * @example
   * 1
   */
  category?: number;
  /**
   * @example
   * btripiws********12ofjm
   */
  corpId?: string;
  dataList?: FlightBillSettlementQueryResponseBodyModuleDataList[];
  /**
   * @example
   * 2000-01-02
   */
  periodEnd?: string;
  /**
   * @example
   * 2000-01-01
   */
  periodStart?: string;
  /**
   * @example
   * 1qesf
   */
  scrollId?: string;
  /**
   * @example
   * 100
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
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: FlightBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * 407543AF-****-****-****-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce********056433edbb2
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

