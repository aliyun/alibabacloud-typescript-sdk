// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IeFlightBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
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
   * 中国国航
   */
  airlineCorpName?: string;
  /**
   * @example
   * 2021123432260
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
   * @remarks
   * 审批扩展自定义字段
   * 
   * @example
   * {"memo":"备注"}
   */
  applyExtendField?: string;
  /**
   * @example
   * 103189557
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
   * 巴黎
   */
  arrCity?: string;
  /**
   * @example
   * 330100
   */
  arrCityCode?: string;
  /**
   * @example
   * 中国
   */
  arrCountry?: string;
  /**
   * @example
   * CN
   */
  arrCountryCode?: string;
  /**
   * @example
   * 2021-10-02
   */
  arrDate?: string;
  /**
   * @example
   * Paris Charles de Gaulle Airport
   */
  arrStation?: string;
  /**
   * @example
   * 13:30:00
   */
  arrTime?: string;
  /**
   * @example
   * 杭州
   */
  baseLocation?: string;
  /**
   * @example
   * 2020-12-23T20:18Z
   */
  billRecordTime?: string;
  /**
   * @example
   * 线上（自助预订）；
   */
  bookMode?: string;
  /**
   * @example
   * 2021-10-01 00:17:05
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
   * 国际城市以及中国香港、中国澳门、中国台湾机票
   */
  categoryDesc?: string;
  /**
   * @example
   * 23.0
   */
  changeFee?: number;
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
   * 运营部成本中心
   */
  costCenter?: string;
  /**
   * @example
   * 8b7f3cd-24324-097
   */
  costCenterNumber?: string;
  /**
   * @example
   * code1
   */
  costDepartment?: string;
  /**
   * @example
   * 1
   */
  coupon?: number;
  /**
   * @example
   * "{\\"key1\\":\\"value1\\",\\"key2\\":\\"value2\\",\\"key3\\":\\"value3\\"}"
   */
  customContent?: string;
  /**
   * @example
   * 1.2
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
   * 美国
   */
  depCountry?: string;
  /**
   * @example
   * US
   */
  depCountryCode?: string;
  /**
   * @example
   * 华北运营大区
   */
  department?: string;
  /**
   * @example
   * 2345866
   */
  departmentId?: string;
  /**
   * @example
   * 北京
   */
  deptCity?: string;
  /**
   * @example
   * 2021-10-02
   */
  deptDate?: string;
  /**
   * @example
   * 北京首都国际机场
   */
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
  /**
   * @example
   * 无低价机票，故超标购买
   */
  exceedReason?: string;
  /**
   * @example
   * 20101
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
   * Y
   */
  foreignersTag?: string;
  /**
   * @example
   * 4564547
   */
  index?: string;
  /**
   * @example
   * 343458349722002
   */
  insOrderId?: string;
  /**
   * @example
   * 23.9
   */
  insuranceFee?: number;
  /**
   * @example
   * 15548214852
   */
  insuranceNumber?: string;
  /**
   * @example
   * 旅游意外险
   */
  insuranceProductName?: string;
  /**
   * @example
   * 飞小猪有限公司。
   */
  invoiceTitle?: string;
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
   * 原因为：xxx
   */
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
  /**
   * @example
   * 234223423423
   */
  orderId?: string;
  /**
   * @example
   * null
   */
  orderStatusDesc?: string;
  /**
   * @example
   * 234324324423
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
   * 4564547
   */
  primaryId?: number;
  /**
   * @example
   * www123
   */
  processorOaCode?: string;
  /**
   * @example
   * 23423432423
   */
  projectCode?: string;
  /**
   * @example
   * 运营生产项目
   */
  projectName?: string;
  /**
   * @example
   * 23.9
   */
  refundChangeCost?: number;
  /**
   * @example
   * 23.9
   */
  refundFee?: number;
  /**
   * @example
   * 因公退票,因工作原因取消计划
   */
  refundResult?: string;
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
   * 洲际
   */
  segmentType?: string;
  /**
   * @example
   * 23.9
   */
  serviceFee?: number;
  /**
   * @example
   * 企业月结
   */
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
   * 2021-10-08 23:39:01
   */
  settlementTime?: string;
  /**
   * @example
   * 4
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
   * 123123232
   */
  subOrderId?: string;
  /**
   * @example
   * 125.6
   */
  taxFee?: number;
  /**
   * @remarks
   * 税率
   * 
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
   * 781-6586234234324
   */
  ticketId?: string;
  /**
   * @example
   * CAN-KUL-BKK
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
   * 54463464
   */
  travelerId?: string;
  /**
   * @example
   * 326246
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
   * 李四
   */
  travelerName?: string;
  /**
   * @example
   * 0
   */
  tripType?: number;
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
  /**
   * @example
   * 11
   */
  category?: number;
  /**
   * @example
   * corp1
   */
  corpId?: string;
  dataList?: IeFlightBillSettlementQueryResponseBodyModuleDataList[];
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
  /**
   * @example
   * 1qwe
   */
  scrollId?: string;
  /**
   * @example
   * 1402
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
  module?: IeFlightBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * true
   */
  morePage?: boolean;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 210e842b16611337974412836dae27
   */
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

