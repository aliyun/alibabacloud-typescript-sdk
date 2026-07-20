// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealBillSettlementQueryResponseBodyModuleItems extends $dara.Model {
  /**
   * @example
   * 2025-01-01 00:00:00
   */
  adjustTime?: string;
  /**
   * @example
   * 无
   */
  applyExtendField?: string;
  /**
   * @example
   * 1004430880
   */
  applyId?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  billRecordTime?: string;
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
  /**
   * @example
   * 张三
   */
  bookerName?: string;
  /**
   * @example
   * 1
   */
  capitalDirection?: string;
  /**
   * @example
   * 技术部-开发部
   */
  cascadeDepartment?: string;
  /**
   * @example
   * 用餐
   */
  categoryDesc?: string;
  /**
   * @example
   * 杭州市某餐厅
   */
  consumeReportAddress?: string;
  /**
   * @example
   * 杭州市
   */
  consumeReportCity?: string;
  /**
   * @example
   * HGN
   */
  consumeReportCityCode?: string;
  /**
   * @example
   * 到店餐饮
   */
  consumerScene?: string;
  /**
   * @example
   * 100.0
   */
  corpSettleFee?: number;
  /**
   * @example
   * 测试成本中心
   */
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
   * 开发部
   */
  department?: string;
  /**
   * @example
   * 1112
   */
  departmentId?: string;
  /**
   * @example
   * 70101
   */
  feeType?: string;
  /**
   * @example
   * 赔付
   */
  feeTypeDesc?: string;
  /**
   * @example
   * 1
   */
  index?: string;
  /**
   * @example
   * 测试发票抬头
   */
  invoiceTitle?: string;
  /**
   * @example
   * 123
   */
  mainApplyId?: string;
  /**
   * @example
   * q1
   */
  mappingCompanyCode?: string;
  /**
   * @example
   * XXXX
   */
  mealAddress?: string;
  /**
   * @example
   * 杭州市
   */
  mealCity?: string;
  /**
   * @example
   * XXX
   */
  mealCityCode?: string;
  /**
   * @example
   * XXX原因
   */
  mealReason?: string;
  /**
   * @example
   * 差旅用餐-员工
   */
  mealRule?: string;
  /**
   * @example
   * 差旅用餐
   */
  mealScene?: string;
  /**
   * @example
   * MEAL
   */
  merchantCategory?: string;
  /**
   * @example
   * XXXX
   */
  merchantName?: string;
  /**
   * @example
   * 1002039196909288346
   */
  orderId?: string;
  /**
   * @example
   * 100.0
   */
  orderPrice?: number;
  /**
   * @example
   * 预订成功
   */
  orderStatusDesc?: string;
  /**
   * @example
   * 0.0
   */
  personSettlePrice?: number;
  /**
   * @example
   * 60698599
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
  /**
   * @example
   * 测试项目名称
   */
  projectName?: string;
  /**
   * @example
   * 测试单
   */
  remark?: string;
  /**
   * @example
   * 5.0
   */
  serviceFee?: number;
  /**
   * @example
   * 企业月结
   */
  settleTypeDesc?: string;
  /**
   * @example
   * 110.0
   */
  settlementFee?: number;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  settlementTime?: string;
  /**
   * @example
   * 4
   */
  settlementType?: string;
  /**
   * @example
   * 否
   */
  shareDinner?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 入账成功
   */
  statusDesc?: string;
  /**
   * @example
   * XXXX
   */
  storeAddress?: string;
  /**
   * @example
   * 6%
   */
  taxRate?: string;
  /**
   * @example
   * cs2
   */
  thirdInvoiceId?: string;
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
  /**
   * @example
   * 支出
   */
  tradeActionDesc?: string;
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
  /**
   * @example
   * 外部员工
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
   * 1
   */
  voucherType?: number;
  /**
   * @example
   * 增值税发票
   */
  voucherTypeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      adjustTime: 'adjust_time',
      applyExtendField: 'apply_extend_field',
      applyId: 'apply_id',
      billRecordTime: 'bill_record_time',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      consumeReportAddress: 'consume_report_address',
      consumeReportCity: 'consume_report_city',
      consumeReportCityCode: 'consume_report_city_code',
      consumerScene: 'consumer_scene',
      corpSettleFee: 'corp_settle_fee',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      costDepartment: 'cost_department',
      department: 'department',
      departmentId: 'department_id',
      feeType: 'fee_type',
      feeTypeDesc: 'fee_type_desc',
      index: 'index',
      invoiceTitle: 'invoice_title',
      mainApplyId: 'main_apply_id',
      mappingCompanyCode: 'mapping_company_code',
      mealAddress: 'meal_address',
      mealCity: 'meal_city',
      mealCityCode: 'meal_city_code',
      mealReason: 'meal_reason',
      mealRule: 'meal_rule',
      mealScene: 'meal_scene',
      merchantCategory: 'merchant_category',
      merchantName: 'merchant_name',
      orderId: 'order_id',
      orderPrice: 'order_price',
      orderStatusDesc: 'order_status_desc',
      personSettlePrice: 'person_settle_price',
      primaryId: 'primary_id',
      processorOaCode: 'processor_oa_code',
      projectCode: 'project_code',
      projectName: 'project_name',
      remark: 'remark',
      serviceFee: 'service_fee',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      shareDinner: 'share_dinner',
      status: 'status',
      statusDesc: 'status_desc',
      storeAddress: 'store_address',
      taxRate: 'tax_rate',
      thirdInvoiceId: 'third_invoice_id',
      thirdPartBusinessId: 'third_part_business_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      tradeActionDesc: 'trade_action_desc',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerMemberType: 'traveler_member_type',
      travelerMemberTypeName: 'traveler_member_type_name',
      travelerName: 'traveler_name',
      voucherType: 'voucher_type',
      voucherTypeDesc: 'voucher_type_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustTime: 'string',
      applyExtendField: 'string',
      applyId: 'string',
      billRecordTime: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      consumeReportAddress: 'string',
      consumeReportCity: 'string',
      consumeReportCityCode: 'string',
      consumerScene: 'string',
      corpSettleFee: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      costDepartment: 'string',
      department: 'string',
      departmentId: 'string',
      feeType: 'string',
      feeTypeDesc: 'string',
      index: 'string',
      invoiceTitle: 'string',
      mainApplyId: 'string',
      mappingCompanyCode: 'string',
      mealAddress: 'string',
      mealCity: 'string',
      mealCityCode: 'string',
      mealReason: 'string',
      mealRule: 'string',
      mealScene: 'string',
      merchantCategory: 'string',
      merchantName: 'string',
      orderId: 'string',
      orderPrice: 'number',
      orderStatusDesc: 'string',
      personSettlePrice: 'number',
      primaryId: 'number',
      processorOaCode: 'string',
      projectCode: 'string',
      projectName: 'string',
      remark: 'string',
      serviceFee: 'number',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      shareDinner: 'string',
      status: 'number',
      statusDesc: 'string',
      storeAddress: 'string',
      taxRate: 'string',
      thirdInvoiceId: 'string',
      thirdPartBusinessId: 'string',
      thirdpartApplyId: 'string',
      tradeActionDesc: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerMemberType: 'string',
      travelerMemberTypeName: 'string',
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

export class MealBillSettlementQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 7
   */
  category?: number;
  /**
   * @example
   * {商旅企业id}
   */
  corpId?: string;
  items?: MealBillSettlementQueryResponseBodyModuleItems[];
  /**
   * @example
   * 1002039195025156700
   */
  orderId?: string;
  /**
   * @example
   * 2022-07-02
   */
  periodEnd?: string;
  /**
   * @example
   * 2022-07-01
   */
  periodStart?: string;
  /**
   * @example
   * 1qwe
   */
  scrollId?: string;
  /**
   * @example
   * 2695
   */
  totalNum?: number;
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
      orderId: 'order_id',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      scrollId: 'scroll_id',
      totalNum: 'total_num',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      items: { 'type': 'array', 'itemType': MealBillSettlementQueryResponseBodyModuleItems },
      orderId: 'string',
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
      totalNum: 'number',
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

export class MealBillSettlementQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: number;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: MealBillSettlementQueryResponseBodyModule;
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
   * 210f079e16603757182131635d866a
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
      code: 'number',
      message: 'string',
      module: MealBillSettlementQueryResponseBodyModule,
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

