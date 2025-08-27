// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails extends $dara.Model {
  /**
   * @remarks
   * 金额
   * 
   * @example
   * 75.21
   */
  amount?: string;
  /**
   * @remarks
   * 行号
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * 货物或应税劳务、服务名称
   */
  itemName?: string;
  /**
   * @remarks
   * 数量
   * 
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @remarks
   * 规格型号
   * 
   * @example
   * 66PT11230069
   */
  specification?: string;
  /**
   * @remarks
   * 税额
   * 
   * @example
   * 12.79
   */
  tax?: string;
  /**
   * @remarks
   * 税率
   * 
   * @example
   * 17%
   */
  taxRate?: string;
  /**
   * @remarks
   * 单位
   */
  unit?: string;
  /**
   * @remarks
   * 单价
   * 
   * @example
   * 75.21
   */
  unitPrice?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      index: 'index',
      itemName: 'item_name',
      quantity: 'quantity',
      specification: 'specification',
      tax: 'tax',
      taxRate: 'tax_rate',
      unit: 'unit',
      unitPrice: 'unit_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      index: 'string',
      itemName: 'string',
      quantity: 'string',
      specification: 'string',
      tax: 'string',
      taxRate: 'string',
      unit: 'string',
      unitPrice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsInvoiceScanQueryResponseBodyModuleItems extends $dara.Model {
  /**
   * @example
   * 20
   */
  amountWithTax?: string;
  /**
   * @example
   * 18.87
   */
  amountWithoutTax?: string;
  /**
   * @example
   * 2022-12-01
   */
  billDate?: string;
  category?: number;
  /**
   * @remarks
   * 校验码
   * 
   * @example
   * 07122942791187744475
   */
  checkCode?: string;
  costCenter?: string;
  department?: string;
  /**
   * @remarks
   * 开票人
   */
  drawer?: string;
  /**
   * @remarks
   * 应用ID
   * 
   * @example
   * 566
   */
  id?: string;
  insuranceCompany?: string;
  /**
   * @example
   * T123343234242323232
   */
  insuranceOrderId?: string;
  insuranceType?: string;
  /**
   * @example
   * 3300111303
   */
  invoiceCode?: string;
  /**
   * @example
   * 2022-12-01
   */
  invoiceDay?: string;
  /**
   * @remarks
   * 发票明细
   */
  invoiceDetails?: InsInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails[];
  /**
   * @remarks
   * 发票地区
   */
  invoiceLocation?: string;
  /**
   * @example
   * 24021111
   */
  invoiceNo?: string;
  /**
   * @remarks
   * 发票抬头
   */
  invoiceTitle?: string;
  invoiceType?: number;
  /**
   * @remarks
   * 机器码
   * 
   * @example
   * 661619906841
   */
  machineCode?: string;
  ofdOssUrl?: string;
  /**
   * @example
   * 3137168772101111000
   */
  orderId?: number;
  /**
   * @example
   * https://www.testurl.com
   */
  ossUrl?: string;
  passenger?: string;
  /**
   * @remarks
   * 密码区
   * 
   * @example
   * <87*>>53>5023>-446>/4+83/5* *>5/81<75/1931>4>>
   */
  passwordArea?: string;
  project?: string;
  /**
   * @remarks
   * 购方银行信息
   */
  purchaserBankAccountInfo?: string;
  /**
   * @remarks
   * 购方联系方式
   */
  purchaserContactInfo?: string;
  purchaserName?: string;
  /**
   * @example
   * 91441111111111111S
   */
  purchaserTaxNo?: string;
  /**
   * @remarks
   * 收款人
   */
  recipient?: string;
  /**
   * @remarks
   * 备注
   */
  remarks?: string;
  /**
   * @remarks
   * 复核人
   */
  reviewer?: string;
  /**
   * @remarks
   * 销售方银行信息
   */
  sellerBankAccountInfo?: string;
  /**
   * @remarks
   * 销售方联系方式
   */
  sellerContactInfo?: string;
  sellerName?: string;
  /**
   * @example
   * 91441111111111111N
   */
  sellerTaxNo?: string;
  /**
   * @remarks
   * 校验码
   * 
   * @example
   * 4475
   */
  smartCheckCode?: string;
  /**
   * @example
   * 1.13
   */
  taxAmount?: string;
  /**
   * @example
   * 6%
   */
  taxRate?: string;
  /**
   * @remarks
   * 大写金额
   */
  totalAmountInWords?: string;
  xmlOssUrl?: string;
  static names(): { [key: string]: string } {
    return {
      amountWithTax: 'amount_with_tax',
      amountWithoutTax: 'amount_without_tax',
      billDate: 'bill_date',
      category: 'category',
      checkCode: 'check_code',
      costCenter: 'cost_center',
      department: 'department',
      drawer: 'drawer',
      id: 'id',
      insuranceCompany: 'insurance_company',
      insuranceOrderId: 'insurance_order_id',
      insuranceType: 'insurance_type',
      invoiceCode: 'invoice_code',
      invoiceDay: 'invoice_day',
      invoiceDetails: 'invoice_details',
      invoiceLocation: 'invoice_location',
      invoiceNo: 'invoice_no',
      invoiceTitle: 'invoice_title',
      invoiceType: 'invoice_type',
      machineCode: 'machine_code',
      ofdOssUrl: 'ofd_oss_url',
      orderId: 'order_id',
      ossUrl: 'oss_url',
      passenger: 'passenger',
      passwordArea: 'password_area',
      project: 'project',
      purchaserBankAccountInfo: 'purchaser_bank_account_info',
      purchaserContactInfo: 'purchaser_contact_info',
      purchaserName: 'purchaser_name',
      purchaserTaxNo: 'purchaser_tax_no',
      recipient: 'recipient',
      remarks: 'remarks',
      reviewer: 'reviewer',
      sellerBankAccountInfo: 'seller_bank_account_info',
      sellerContactInfo: 'seller_contact_info',
      sellerName: 'seller_name',
      sellerTaxNo: 'seller_tax_no',
      smartCheckCode: 'smart_check_code',
      taxAmount: 'tax_amount',
      taxRate: 'tax_rate',
      totalAmountInWords: 'total_amount_in_words',
      xmlOssUrl: 'xml_oss_url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountWithTax: 'string',
      amountWithoutTax: 'string',
      billDate: 'string',
      category: 'number',
      checkCode: 'string',
      costCenter: 'string',
      department: 'string',
      drawer: 'string',
      id: 'string',
      insuranceCompany: 'string',
      insuranceOrderId: 'string',
      insuranceType: 'string',
      invoiceCode: 'string',
      invoiceDay: 'string',
      invoiceDetails: { 'type': 'array', 'itemType': InsInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails },
      invoiceLocation: 'string',
      invoiceNo: 'string',
      invoiceTitle: 'string',
      invoiceType: 'number',
      machineCode: 'string',
      ofdOssUrl: 'string',
      orderId: 'number',
      ossUrl: 'string',
      passenger: 'string',
      passwordArea: 'string',
      project: 'string',
      purchaserBankAccountInfo: 'string',
      purchaserContactInfo: 'string',
      purchaserName: 'string',
      purchaserTaxNo: 'string',
      recipient: 'string',
      remarks: 'string',
      reviewer: 'string',
      sellerBankAccountInfo: 'string',
      sellerContactInfo: 'string',
      sellerName: 'string',
      sellerTaxNo: 'string',
      smartCheckCode: 'string',
      taxAmount: 'string',
      taxRate: 'string',
      totalAmountInWords: 'string',
      xmlOssUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invoiceDetails)) {
      $dara.Model.validateArray(this.invoiceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsInvoiceScanQueryResponseBodyModule extends $dara.Model {
  items?: InsInvoiceScanQueryResponseBodyModuleItems[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 2
   */
  totalPage?: number;
  /**
   * @example
   * 30
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNo: 'page_no',
      pageSize: 'page_size',
      totalPage: 'total_page',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': InsInvoiceScanQueryResponseBodyModuleItems },
      pageNo: 'number',
      pageSize: 'number',
      totalPage: 'number',
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

export class InsInvoiceScanQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  module?: InsInvoiceScanQueryResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
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
   * @remarks
   * traceId
   * 
   * @example
   * 210e847f16611516748613869de4f6
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
      module: InsInvoiceScanQueryResponseBodyModule,
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

