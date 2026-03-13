// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IeCarBillSettlementQueryResponseBodyModuleItems extends $dara.Model {
  /**
   * @example
   * 20251201
   */
  accountMonth?: string;
  /**
   * @example
   * 2025-01-01 00:00:00
   */
  adjustTime?: string;
  /**
   * @example
   * 123aaa
   */
  alipayId?: string;
  /**
   * @example
   * 124
   */
  alipayTradeNo?: string;
  /**
   * @example
   * 123
   */
  applyArrCityCode?: string;
  applyArrCityName?: string;
  /**
   * @example
   * 123
   */
  applyDepCityCode?: string;
  applyDepCityName?: string;
  applyExtendField?: string;
  /**
   * @example
   * 265741695
   */
  applyId?: string;
  /**
   * @example
   * 123@qq.com
   */
  approverEmail?: string;
  /**
   * @example
   * 11
   */
  approverId?: string;
  approverName?: string;
  arrCity?: string;
  /**
   * @example
   * 131000
   */
  arrCityCode?: string;
  arrCountry?: string;
  /**
   * @example
   * 2025-12-02 10:00:00
   */
  arrDate?: string;
  /**
   * @example
   * 2025-12-02 10:00:00
   */
  arrDateLocal?: string;
  arrLocation?: string;
  baseLocation?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  billRecordTime?: string;
  /**
   * @example
   * 2025-11-01 00:00:00
   */
  billRecordTimeStr?: string;
  billingEntity?: string;
  bookChannel?: string;
  bookMode?: string;
  bookModel?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  bookTime?: string;
  /**
   * @example
   * 2025-12-01 10:00:00
   */
  bookTimeLocal?: string;
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
   * 123
   */
  bookerUseId?: string;
  businessCategory?: string;
  capitalDirection?: string;
  carLevel?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  costCenter?: string;
  /**
   * @example
   * cs1
   */
  costCenterNumber?: string;
  /**
   * @example
   * code1
   */
  costDepartment?: string;
  /**
   * @example
   * 0.0
   */
  coupon?: number;
  /**
   * @example
   * 3.0
   */
  couponPrice?: number;
  /**
   * @example
   * "{\\"key1\\":\\"value1\\",\\"key2\\":\\"value2\\",\\"key3\\":\\"value3\\"}"
   */
  customContent?: string;
  /**
   * @example
   * 0.11
   */
  deductibleTax?: number;
  /**
   * @example
   * 131000
   */
  depCityCode?: string;
  depCountry?: string;
  /**
   * @example
   * 2025-12-01 10:00:00
   */
  depDateLocal?: string;
  department?: string;
  /**
   * @example
   * 1112
   */
  departmentId?: string;
  deptCity?: string;
  /**
   * @example
   * 2025-12-01 10:00:00
   */
  deptDate?: string;
  deptLocation?: string;
  /**
   * @example
   * 2.0
   */
  driverAddDetail?: string;
  /**
   * @example
   * 1.0
   */
  driverAddFee?: number;
  /**
   * @example
   * 100
   */
  estimateDriveDistance?: string;
  /**
   * @example
   * 110.0
   */
  estimatePrice?: number;
  /**
   * @example
   * 140101
   */
  feeType?: string;
  feeTypeDesc?: string;
  financialSubject?: string;
  foreignersTag?: string;
  /**
   * @example
   * 1
   */
  index?: string;
  invoiceTitle?: string;
  lastDepartment?: string;
  levelName?: string;
  /**
   * @remarks
   * Location
   */
  location?: string;
  /**
   * @example
   * 112
   */
  mainApplyId?: string;
  /**
   * @example
   * q1
   */
  mappingCompanyCode?: string;
  memo?: string;
  /**
   * @example
   * 1017034204020120044
   */
  orderId?: string;
  /**
   * @example
   * 100.0
   */
  orderPrice?: number;
  orderStatusDesc?: string;
  /**
   * @example
   * 112
   */
  originApplyId?: string;
  /**
   * @example
   * 123
   */
  overApplyId?: string;
  /**
   * @example
   * EN01002423
   */
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  /**
   * @example
   * 10.0
   */
  personSettleFee?: number;
  position?: string;
  positionLevel?: string;
  /**
   * @example
   * 72328485
   */
  primaryId?: number;
  /**
   * @example
   * www123
   */
  processorOaCode?: string;
  /**
   * @example
   * acs
   */
  projectCode?: string;
  projectName?: string;
  /**
   * @example
   * 10.0
   */
  protocolDiscountFee?: number;
  providerName?: string;
  /**
   * @example
   * 111224324
   */
  purchaseOrderId?: string;
  /**
   * @example
   * 120
   */
  realDriveDistance?: string;
  realFromAddr?: string;
  realToAddr?: string;
  recordStatus?: string;
  remark?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  sceneName?: string;
  /**
   * @example
   * 5.0
   */
  serviceFee?: number;
  settleTypeDesc?: string;
  /**
   * @example
   * 110.0
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
   * 188385292
   */
  showSubOrderId?: string;
  /**
   * @remarks
   * SIO
   * 
   * @example
   * SIO
   */
  sio?: string;
  specialOrder?: string;
  specialReason?: string;
  /**
   * @example
   * 2
   */
  status?: number;
  statusDesc?: string;
  /**
   * @example
   * 188385292
   */
  subOrderId?: string;
  /**
   * @example
   * 123456789
   */
  supplementApplyId?: string;
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
   * 123
   */
  thirdPartBusinessId?: string;
  /**
   * @example
   * 7244-1968
   */
  thirdpartApplyId?: string;
  timeType?: string;
  tradeActionDesc?: string;
  /**
   * @example
   * 123@qq.com
   */
  travelerEmail?: string;
  /**
   * @example
   * 1234
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
   * 123
   */
  travelerUseId?: string;
  userConfirmDesc?: string;
  /**
   * @example
   * 12
   */
  vehicleSceneId?: string;
  vehicleSceneName?: string;
  /**
   * @example
   * 1
   */
  voucherType?: number;
  voucherTypeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      accountMonth: 'account_month',
      adjustTime: 'adjust_time',
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
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrCountry: 'arr_country',
      arrDate: 'arr_date',
      arrDateLocal: 'arr_date_local',
      arrLocation: 'arr_location',
      baseLocation: 'base_location',
      billRecordTime: 'bill_record_time',
      billRecordTimeStr: 'bill_record_time_str',
      billingEntity: 'billing_entity',
      bookChannel: 'book_channel',
      bookMode: 'book_mode',
      bookModel: 'book_model',
      bookTime: 'book_time',
      bookTimeLocal: 'book_time_local',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      bookerUseId: 'booker_use_id',
      businessCategory: 'business_category',
      capitalDirection: 'capital_direction',
      carLevel: 'car_level',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      costDepartment: 'cost_department',
      coupon: 'coupon',
      couponPrice: 'coupon_price',
      customContent: 'custom_content',
      deductibleTax: 'deductible_tax',
      depCityCode: 'dep_city_code',
      depCountry: 'dep_country',
      depDateLocal: 'dep_date_local',
      department: 'department',
      departmentId: 'department_id',
      deptCity: 'dept_city',
      deptDate: 'dept_date',
      deptLocation: 'dept_location',
      driverAddDetail: 'driver_add_detail',
      driverAddFee: 'driver_add_fee',
      estimateDriveDistance: 'estimate_drive_distance',
      estimatePrice: 'estimate_price',
      feeType: 'fee_type',
      feeTypeDesc: 'fee_type_desc',
      financialSubject: 'financial_subject',
      foreignersTag: 'foreigners_tag',
      index: 'index',
      invoiceTitle: 'invoice_title',
      lastDepartment: 'last_department',
      levelName: 'level_name',
      location: 'location',
      mainApplyId: 'main_apply_id',
      mappingCompanyCode: 'mapping_company_code',
      memo: 'memo',
      orderId: 'order_id',
      orderPrice: 'order_price',
      orderStatusDesc: 'order_status_desc',
      originApplyId: 'origin_apply_id',
      overApplyId: 'over_apply_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      personSettleFee: 'person_settle_fee',
      position: 'position',
      positionLevel: 'position_level',
      primaryId: 'primary_id',
      processorOaCode: 'processor_oa_code',
      projectCode: 'project_code',
      projectName: 'project_name',
      protocolDiscountFee: 'protocol_discount_fee',
      providerName: 'provider_name',
      purchaseOrderId: 'purchase_order_id',
      realDriveDistance: 'real_drive_distance',
      realFromAddr: 'real_from_addr',
      realToAddr: 'real_to_addr',
      recordStatus: 'record_status',
      remark: 'remark',
      sceneId: 'scene_id',
      sceneName: 'scene_name',
      serviceFee: 'service_fee',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      showSubOrderId: 'show_sub_order_id',
      sio: 'sio',
      specialOrder: 'special_order',
      specialReason: 'special_reason',
      status: 'status',
      statusDesc: 'status_desc',
      subOrderId: 'sub_order_id',
      supplementApplyId: 'supplement_apply_id',
      taxRate: 'tax_rate',
      thirdInvoiceId: 'third_invoice_id',
      thirdItineraryId: 'third_itinerary_id',
      thirdPartBusinessId: 'third_part_business_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      timeType: 'time_type',
      tradeActionDesc: 'trade_action_desc',
      travelerEmail: 'traveler_email',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerMemberType: 'traveler_member_type',
      travelerMemberTypeName: 'traveler_member_type_name',
      travelerName: 'traveler_name',
      travelerUseId: 'traveler_use_id',
      userConfirmDesc: 'user_confirm_desc',
      vehicleSceneId: 'vehicle_scene_id',
      vehicleSceneName: 'vehicle_scene_name',
      voucherType: 'voucher_type',
      voucherTypeDesc: 'voucher_type_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountMonth: 'string',
      adjustTime: 'string',
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
      arrCity: 'string',
      arrCityCode: 'string',
      arrCountry: 'string',
      arrDate: 'string',
      arrDateLocal: 'string',
      arrLocation: 'string',
      baseLocation: 'string',
      billRecordTime: 'string',
      billRecordTimeStr: 'string',
      billingEntity: 'string',
      bookChannel: 'string',
      bookMode: 'string',
      bookModel: 'string',
      bookTime: 'string',
      bookTimeLocal: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      bookerUseId: 'string',
      businessCategory: 'string',
      capitalDirection: 'string',
      carLevel: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      costCenter: 'string',
      costCenterNumber: 'string',
      costDepartment: 'string',
      coupon: 'number',
      couponPrice: 'number',
      customContent: 'string',
      deductibleTax: 'number',
      depCityCode: 'string',
      depCountry: 'string',
      depDateLocal: 'string',
      department: 'string',
      departmentId: 'string',
      deptCity: 'string',
      deptDate: 'string',
      deptLocation: 'string',
      driverAddDetail: 'string',
      driverAddFee: 'number',
      estimateDriveDistance: 'string',
      estimatePrice: 'number',
      feeType: 'string',
      feeTypeDesc: 'string',
      financialSubject: 'string',
      foreignersTag: 'string',
      index: 'string',
      invoiceTitle: 'string',
      lastDepartment: 'string',
      levelName: 'string',
      location: 'string',
      mainApplyId: 'string',
      mappingCompanyCode: 'string',
      memo: 'string',
      orderId: 'string',
      orderPrice: 'number',
      orderStatusDesc: 'string',
      originApplyId: 'string',
      overApplyId: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      personSettleFee: 'number',
      position: 'string',
      positionLevel: 'string',
      primaryId: 'number',
      processorOaCode: 'string',
      projectCode: 'string',
      projectName: 'string',
      protocolDiscountFee: 'number',
      providerName: 'string',
      purchaseOrderId: 'string',
      realDriveDistance: 'string',
      realFromAddr: 'string',
      realToAddr: 'string',
      recordStatus: 'string',
      remark: 'string',
      sceneId: 'string',
      sceneName: 'string',
      serviceFee: 'number',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      showSubOrderId: 'string',
      sio: 'string',
      specialOrder: 'string',
      specialReason: 'string',
      status: 'number',
      statusDesc: 'string',
      subOrderId: 'string',
      supplementApplyId: 'string',
      taxRate: 'string',
      thirdInvoiceId: 'string',
      thirdItineraryId: 'string',
      thirdPartBusinessId: 'string',
      thirdpartApplyId: 'string',
      timeType: 'string',
      tradeActionDesc: 'string',
      travelerEmail: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerMemberType: 'string',
      travelerMemberTypeName: 'string',
      travelerName: 'string',
      travelerUseId: 'string',
      userConfirmDesc: 'string',
      vehicleSceneId: 'string',
      vehicleSceneName: 'string',
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

export class IeCarBillSettlementQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 14
   */
  category?: number;
  corpId?: string;
  items?: IeCarBillSettlementQueryResponseBodyModuleItems[];
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
   * CAESBgoEIgIIABgAIhkKFwMSAAAAMUw4MDAwMDAwMDA4YTU2NDMy
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
      items: 'items',
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
      items: { 'type': 'array', 'itemType': IeCarBillSettlementQueryResponseBodyModuleItems },
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
      totalNum: 'number',
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

export class IeCarBillSettlementQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: IeCarBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * A1984987-9C0D-5EEB-A2AC-0D5D76D41705
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 3b5287ed17606676287351344d0095
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
      module: IeCarBillSettlementQueryResponseBodyModule,
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

