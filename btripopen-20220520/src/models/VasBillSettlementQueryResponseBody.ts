// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VasBillSettlementQueryResponseBodyModuleItems extends $dara.Model {
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
  /**
   * @example
   * 成都
   */
  applyArrCityName?: string;
  /**
   * @example
   * 123
   */
  applyDepCityCode?: string;
  /**
   * @example
   * 杭州
   */
  applyDepCityName?: string;
  /**
   * @example
   * 无
   */
  applyExtendField?: string;
  /**
   * @example
   * 1424070910031252025
   */
  applyId?: string;
  /**
   * @example
   * 账单
   */
  belongBusiness?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  billRecordTime?: string;
  /**
   * @example
   * 测试
   */
  billingEntity?: string;
  /**
   * @example
   * 线上预订
   */
  bookMode?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  bookTime?: string;
  /**
   * @example
   * 123
   */
  bookerId?: string;
  /**
   * @example
   * zs123
   */
  bookerJobNo?: string;
  /**
   * @example
   * 张三
   */
  bookerName?: string;
  /**
   * @example
   * 支出
   */
  capitalDirection?: string;
  /**
   * @example
   * 技术部-测试部
   */
  cascadeDepartment?: string;
  /**
   * @example
   * 服务大厅增值服务
   */
  categoryDesc?: string;
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
   * 测试部
   */
  department?: string;
  /**
   * @example
   * 1112
   */
  departmentId?: string;
  /**
   * @example
   * 机票预订
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
   * q1
   */
  mappingCompanyCode?: string;
  /**
   * @example
   * 1007025201876066223
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
   * 123
   */
  overApplyId?: string;
  /**
   * @example
   * 123
   */
  paymentDepartmentId?: string;
  /**
   * @example
   * 测试部
   */
  paymentDepartmentName?: string;
  /**
   * @example
   * 87687788
   */
  primaryId?: number;
  /**
   * @example
   * www123
   */
  processorOaCode?: string;
  /**
   * @example
   * 1
   */
  productCount?: number;
  /**
   * @example
   * 111
   */
  productId?: string;
  /**
   * @example
   * 账单分发
   */
  productName?: string;
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
   * 0.0
   */
  promotionFee?: number;
  /**
   * @example
   * 111224324
   */
  purchaseOrderId?: string;
  /**
   * @example
   * 同意
   */
  remark?: string;
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
   * 0.0
   */
  settlementGrantFee?: number;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  settlementTime?: string;
  /**
   * @example
   * 企业月结
   */
  settlementType?: string;
  /**
   * @example
   * 1年
   */
  specification?: string;
  /**
   * @example
   * 2
   */
  status?: number;
  /**
   * @example
   * 入账成功
   */
  statusDesc?: string;
  /**
   * @example
   * 185025497
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
   * 支出
   */
  tradeActionDesc?: string;
  /**
   * @example
   * 备注
   */
  tradeRemark?: string;
  /**
   * @example
   * 254
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
   * 外部员工
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
      alipayId: 'alipay_id',
      alipayTradeNo: 'alipay_trade_no',
      applyArrCityCode: 'apply_arr_city_code',
      applyArrCityName: 'apply_arr_city_name',
      applyDepCityCode: 'apply_dep_city_code',
      applyDepCityName: 'apply_dep_city_name',
      applyExtendField: 'apply_extend_field',
      applyId: 'apply_id',
      belongBusiness: 'belong_business',
      billRecordTime: 'bill_record_time',
      billingEntity: 'billing_entity',
      bookMode: 'book_mode',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      costDepartment: 'cost_department',
      department: 'department',
      departmentId: 'department_id',
      feeType: 'fee_type',
      feeTypeDesc: 'fee_type_desc',
      index: 'index',
      invoiceTitle: 'invoice_title',
      mappingCompanyCode: 'mapping_company_code',
      orderId: 'order_id',
      orderPrice: 'order_price',
      orderStatusDesc: 'order_status_desc',
      overApplyId: 'over_apply_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      primaryId: 'primary_id',
      processorOaCode: 'processor_oa_code',
      productCount: 'product_count',
      productId: 'product_id',
      productName: 'product_name',
      projectCode: 'project_code',
      projectName: 'project_name',
      promotionFee: 'promotion_fee',
      purchaseOrderId: 'purchase_order_id',
      remark: 'remark',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      specification: 'specification',
      status: 'status',
      statusDesc: 'status_desc',
      subOrderId: 'sub_order_id',
      taxRate: 'tax_rate',
      thirdInvoiceId: 'third_invoice_id',
      thirdItineraryId: 'third_itinerary_id',
      tradeActionDesc: 'trade_action_desc',
      tradeRemark: 'trade_remark',
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
      alipayId: 'string',
      alipayTradeNo: 'string',
      applyArrCityCode: 'string',
      applyArrCityName: 'string',
      applyDepCityCode: 'string',
      applyDepCityName: 'string',
      applyExtendField: 'string',
      applyId: 'string',
      belongBusiness: 'string',
      billRecordTime: 'string',
      billingEntity: 'string',
      bookMode: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      costCenter: 'string',
      costCenterNumber: 'string',
      costDepartment: 'string',
      department: 'string',
      departmentId: 'string',
      feeType: 'string',
      feeTypeDesc: 'string',
      index: 'string',
      invoiceTitle: 'string',
      mappingCompanyCode: 'string',
      orderId: 'string',
      orderPrice: 'number',
      orderStatusDesc: 'string',
      overApplyId: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      primaryId: 'number',
      processorOaCode: 'string',
      productCount: 'number',
      productId: 'string',
      productName: 'string',
      projectCode: 'string',
      projectName: 'string',
      promotionFee: 'number',
      purchaseOrderId: 'string',
      remark: 'string',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      specification: 'string',
      status: 'number',
      statusDesc: 'string',
      subOrderId: 'string',
      taxRate: 'string',
      thirdInvoiceId: 'string',
      thirdItineraryId: 'string',
      tradeActionDesc: 'string',
      tradeRemark: 'string',
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

export class VasBillSettlementQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 21
   */
  category?: number;
  /**
   * @example
   * 第三方企业id
   */
  corpId?: string;
  items?: VasBillSettlementQueryResponseBodyModuleItems[];
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
   * CAESBgoEIgIIABgAIhkKFwMSAAAAMUw4MDAwMDAwMDA2ZTFjZTNi
   */
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
      items: { 'type': 'array', 'itemType': VasBillSettlementQueryResponseBodyModuleItems },
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

export class VasBillSettlementQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  module?: VasBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
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
   * 3b52152017470153218107062d0096
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
      module: VasBillSettlementQueryResponseBodyModule,
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

