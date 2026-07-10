// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IeCarBillSettlementQueryResponseBodyModuleItems extends $dara.Model {
  accountMonth?: string;
  adjustTime?: string;
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
  arrCity?: string;
  arrCityCode?: string;
  arrCountry?: string;
  arrDate?: string;
  arrDateLocal?: string;
  arrLocation?: string;
  baseLocation?: string;
  billRecordTime?: string;
  billRecordTimeStr?: string;
  billingEntity?: string;
  bookChannel?: string;
  bookMode?: string;
  bookModel?: string;
  bookTime?: string;
  bookTimeLocal?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  bookerUseId?: string;
  businessCategory?: string;
  capitalDirection?: string;
  carLevel?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  costCenter?: string;
  costCenterNumber?: string;
  costDepartment?: string;
  coupon?: number;
  couponPrice?: number;
  customContent?: string;
  deductibleTax?: number;
  depCityCode?: string;
  depCountry?: string;
  depDateLocal?: string;
  department?: string;
  departmentId?: string;
  deptCity?: string;
  deptDate?: string;
  deptLocation?: string;
  driverAddDetail?: string;
  driverAddFee?: number;
  estimateDriveDistance?: string;
  estimatePrice?: number;
  feeType?: string;
  feeTypeDesc?: string;
  financialSubject?: string;
  foreignersTag?: string;
  index?: string;
  invoiceTitle?: string;
  lastDepartment?: string;
  levelName?: string;
  location?: string;
  mainApplyId?: string;
  mappingCompanyCode?: string;
  memo?: string;
  orderId?: string;
  orderPrice?: number;
  orderStatusDesc?: string;
  originApplyId?: string;
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  personSettleFee?: number;
  position?: string;
  positionLevel?: string;
  primaryId?: number;
  processorOaCode?: string;
  projectCode?: string;
  projectName?: string;
  protocolDiscountFee?: number;
  providerName?: string;
  purchaseOrderId?: string;
  realDriveDistance?: string;
  realFromAddr?: string;
  realToAddr?: string;
  recordStatus?: string;
  remark?: string;
  sceneId?: string;
  sceneName?: string;
  serviceFee?: number;
  settleTypeDesc?: string;
  settlementFee?: number;
  settlementGrantFee?: number;
  settlementTime?: string;
  settlementType?: string;
  showSubOrderId?: string;
  sio?: string;
  specialOrder?: string;
  specialReason?: string;
  status?: number;
  statusDesc?: string;
  subOrderId?: string;
  supplementApplyId?: string;
  taxRate?: string;
  thirdInvoiceId?: string;
  thirdItineraryId?: string;
  thirdPartBusinessId?: string;
  thirdpartApplyId?: string;
  timeType?: string;
  tradeActionDesc?: string;
  travelerEmail?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  travelerUseId?: string;
  userConfirmDesc?: string;
  vehicleSceneId?: string;
  vehicleSceneName?: string;
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
  category?: number;
  corpId?: string;
  items?: IeCarBillSettlementQueryResponseBodyModuleItems[];
  periodEnd?: string;
  periodStart?: string;
  scrollId?: string;
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
  code?: string;
  message?: string;
  module?: IeCarBillSettlementQueryResponseBodyModule;
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

