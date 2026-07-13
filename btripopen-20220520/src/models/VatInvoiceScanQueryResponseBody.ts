// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VatInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails extends $dara.Model {
  /**
   * @remarks
   * The amount.
   * 
   * @example
   * 75.21
   */
  amount?: string;
  /**
   * @remarks
   * The line number.
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * The name of the goods, taxable services, or service name.
   * 
   * @example
   * 铂金首饰
   */
  itemName?: string;
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @remarks
   * The specification and model.
   * 
   * @example
   * 66PT11230069
   */
  specification?: string;
  /**
   * @remarks
   * The tax amount.
   * 
   * @example
   * 12.79
   */
  tax?: string;
  /**
   * @remarks
   * The tax rate.
   * 
   * @example
   * 17%
   */
  taxRate?: string;
  /**
   * @remarks
   * The unit of measurement.
   * 
   * @example
   * 件
   */
  unit?: string;
  /**
   * @remarks
   * The unit price.
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

export class VatInvoiceScanQueryResponseBodyModuleItems extends $dara.Model {
  /**
   * @remarks
   * The tax-inclusive amount.
   * 
   * @example
   * 20
   */
  amountWithTax?: string;
  /**
   * @remarks
   * The tax-exclusive amount.
   * 
   * @example
   * 18.87
   */
  amountWithoutTax?: string;
  /**
   * @remarks
   * The billing date.
   * 
   * @example
   * 2022-12-01
   */
  billDate?: string;
  /**
   * @remarks
   * Indicates whether the invoice has been reissued. Valid values:
   * - true: Reissued.
   * - false: Not reissued.
   * 
   * @example
   * true
   */
  changed?: boolean;
  /**
   * @remarks
   * The verification code.
   * 
   * @example
   * 07122942791187744475
   */
  checkCode?: string;
  /**
   * @remarks
   * The invoice issuer.
   * 
   * @example
   * 敏
   */
  drawer?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 60
   */
  id?: string;
  /**
   * @remarks
   * The invoice code.
   * 
   * @example
   * 3300111303
   */
  invoiceCode?: string;
  /**
   * @remarks
   * The invoice date.
   * 
   * @example
   * 24-4-7 上午12:00
   */
  invoiceDay?: string;
  /**
   * @remarks
   * The invoice details.
   * 
   * @example
   * 代理服务费¥20
   */
  invoiceDetail?: string;
  /**
   * @remarks
   * The invoice line items.
   */
  invoiceDetails?: VatInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails[];
  /**
   * @remarks
   * The invoice region.
   * 
   * @example
   * 上海
   */
  invoiceLocation?: string;
  /**
   * @remarks
   * The invoice number.
   * 
   * @example
   * 24021111
   */
  invoiceNo?: string;
  /**
   * @remarks
   * The invoice subtask ID.
   * 
   * @example
   * 123
   */
  invoiceSubTaskId?: number;
  /**
   * @remarks
   * The invoice type.
   * 
   * @example
   * 2
   */
  invoiceType?: number;
  /**
   * @remarks
   * The invoice type description.
   * 
   * @example
   * 增值税专用发票（纸质）
   */
  invoiceTypeDesc?: string;
  /**
   * @remarks
   * The machine code.
   * 
   * @example
   * 661619906841
   */
  machineCode?: string;
  /**
   * @remarks
   * The URL for the VAT invoice file in OFD format. This URL is available only for digitalized electronic invoicing and electronic general VAT invoices.
   * 
   * @example
   * https://www.testurl.com
   */
  ofdOssUrl?: string;
  /**
   * @remarks
   * The URL for the VAT invoice file in image format.
   * 
   * @example
   * https://www.testurl.com
   */
  ossUrl?: string;
  /**
   * @remarks
   * The password area.
   * 
   * @example
   * <87*>>53>5023>-446>/4+83/5* *>5/81<75/1931>4>>
   */
  passwordArea?: string;
  /**
   * @remarks
   * The URL for the VAT invoice file in PDF format. This URL is available only for digitalized electronic invoicing and electronic general VAT invoices.
   * 
   * @example
   * https://www.testurl.com
   */
  pdfOssUrl?: string;
  /**
   * @remarks
   * The purchaser bank account information.
   * 
   * @example
   * 中国农业银行深圳
   */
  purchaserBankAccountInfo?: string;
  /**
   * @remarks
   * The purchaser contact information.
   * 
   * @example
   * 杭州余杭区五常街道五常大道168
   */
  purchaserContactInfo?: string;
  /**
   * @remarks
   * The purchaser name.
   * 
   * @example
   * 测试购方抬头
   */
  purchaserName?: string;
  /**
   * @remarks
   * The purchaser tax number.
   * 
   * @example
   * 91441111111111111S
   */
  purchaserTaxNo?: string;
  /**
   * @remarks
   * The payee.
   * 
   * @example
   * 琳
   */
  recipient?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 舰店OMS
   */
  remarks?: string;
  /**
   * @remarks
   * The reviewer.
   * 
   * @example
   * 敏
   */
  reviewer?: string;
  /**
   * @remarks
   * The seller bank account information.
   * 
   * @example
   * 中国农业银行深圳东
   */
  sellerBankAccountInfo?: string;
  /**
   * @remarks
   * The seller contact information.
   * 
   * @example
   * 深圳市盐田区深盐路黄
   */
  sellerContactInfo?: string;
  /**
   * @remarks
   * The seller name.
   * 
   * @example
   * 测试销方名称
   */
  sellerName?: string;
  /**
   * @remarks
   * The seller tax number.
   * 
   * @example
   * 91441111111111111N
   */
  sellerTaxNo?: string;
  /**
   * @remarks
   * The abbreviated verification code.
   * 
   * @example
   * 4475
   */
  smartCheckCode?: string;
  /**
   * @remarks
   * The tax amount.
   * 
   * @example
   * 1.13
   */
  taxAmount?: string;
  /**
   * @remarks
   * The tax rate.
   * 
   * @example
   * 6%
   */
  taxRate?: string;
  /**
   * @remarks
   * The total amount in words.
   * 
   * @example
   * 叁佰叁拾贰圆整
   */
  totalAmountInWords?: string;
  /**
   * @remarks
   * The URL for the VAT invoice file in XML format. This URL is available only for digitalized electronic invoicing.
   * 
   * @example
   * https://www.testurl.com
   */
  xmlOssUrl?: string;
  static names(): { [key: string]: string } {
    return {
      amountWithTax: 'amount_with_tax',
      amountWithoutTax: 'amount_without_tax',
      billDate: 'bill_date',
      changed: 'changed',
      checkCode: 'check_code',
      drawer: 'drawer',
      id: 'id',
      invoiceCode: 'invoice_code',
      invoiceDay: 'invoice_day',
      invoiceDetail: 'invoice_detail',
      invoiceDetails: 'invoice_details',
      invoiceLocation: 'invoice_location',
      invoiceNo: 'invoice_no',
      invoiceSubTaskId: 'invoice_sub_task_id',
      invoiceType: 'invoice_type',
      invoiceTypeDesc: 'invoice_type_desc',
      machineCode: 'machine_code',
      ofdOssUrl: 'ofd_oss_url',
      ossUrl: 'oss_url',
      passwordArea: 'password_area',
      pdfOssUrl: 'pdf_oss_url',
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
      changed: 'boolean',
      checkCode: 'string',
      drawer: 'string',
      id: 'string',
      invoiceCode: 'string',
      invoiceDay: 'string',
      invoiceDetail: 'string',
      invoiceDetails: { 'type': 'array', 'itemType': VatInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails },
      invoiceLocation: 'string',
      invoiceNo: 'string',
      invoiceSubTaskId: 'number',
      invoiceType: 'number',
      invoiceTypeDesc: 'string',
      machineCode: 'string',
      ofdOssUrl: 'string',
      ossUrl: 'string',
      passwordArea: 'string',
      pdfOssUrl: 'string',
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

export class VatInvoiceScanQueryResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The paginated results.
   */
  items?: VatInvoiceScanQueryResponseBodyModuleItems[];
  /**
   * @remarks
   * The page number of this request.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size of this request.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPage?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
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
      items: { 'type': 'array', 'itemType': VatInvoiceScanQueryResponseBodyModuleItems },
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

export class VatInvoiceScanQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The response data. This parameter is returned by the server. An empty value is returned if no result is found or an exception occurs.
   */
  module?: VatInvoiceScanQueryResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210e842b16611337974412836dae27
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
      module: VatInvoiceScanQueryResponseBodyModule,
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

