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
   * 1424070910031252025
   */
  applyId?: string;
  belongBusiness?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  billRecordTime?: string;
  billingEntity?: string;
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
  bookerName?: string;
  capitalDirection?: string;
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
  department?: string;
  /**
   * @example
   * 1112
   */
  departmentId?: string;
  feeType?: string;
  feeTypeDesc?: string;
  /**
   * @example
   * 1
   */
  index?: string;
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
  productName?: string;
  /**
   * @example
   * acs
   */
  projectCode?: string;
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
  remark?: string;
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
  specification?: string;
  /**
   * @example
   * 2
   */
  status?: number;
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
  tradeActionDesc?: string;
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
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  /**
   * @example
   * 1
   */
  voucherType?: number;
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

