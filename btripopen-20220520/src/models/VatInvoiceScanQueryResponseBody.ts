// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VatInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails extends $dara.Model {
  /**
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
  itemName?: string;
  /**
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @example
   * 66PT11230069
   */
  specification?: string;
  /**
   * @example
   * 12.79
   */
  tax?: string;
  /**
   * @example
   * 17%
   */
  taxRate?: string;
  unit?: string;
  /**
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
  /**
   * @example
   * 07122942791187744475
   */
  checkCode?: string;
  drawer?: string;
  /**
   * @example
   * 60
   */
  id?: string;
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
  invoiceDetail?: string;
  invoiceDetails?: VatInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails[];
  invoiceLocation?: string;
  /**
   * @example
   * 24021111
   */
  invoiceNo?: string;
  /**
   * @example
   * 123
   */
  invoiceSubTaskId?: number;
  /**
   * @example
   * 2
   */
  invoiceType?: number;
  invoiceTypeDesc?: string;
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
   * https://www.testurl.com
   */
  ossUrl?: string;
  /**
   * @example
   * <87*>>53>5023>-446>/4+83/5* *>5/81<75/1931>4>>
   */
  passwordArea?: string;
  pdfOssUrl?: string;
  purchaserBankAccountInfo?: string;
  purchaserContactInfo?: string;
  purchaserName?: string;
  /**
   * @example
   * 91441111111111111S
   */
  purchaserTaxNo?: string;
  recipient?: string;
  remarks?: string;
  reviewer?: string;
  sellerBankAccountInfo?: string;
  sellerContactInfo?: string;
  sellerName?: string;
  /**
   * @example
   * 91441111111111111N
   */
  sellerTaxNo?: string;
  /**
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
  totalAmountInWords?: string;
  xmlOssUrl?: string;
  static names(): { [key: string]: string } {
    return {
      amountWithTax: 'amount_with_tax',
      amountWithoutTax: 'amount_without_tax',
      billDate: 'bill_date',
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
  items?: VatInvoiceScanQueryResponseBodyModuleItems[];
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
   * @example
   * 200
   */
  code?: string;
  message?: string;
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

