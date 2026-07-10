// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails extends $dara.Model {
  amount?: string;
  index?: string;
  itemName?: string;
  quantity?: string;
  specification?: string;
  tax?: string;
  taxRate?: string;
  unit?: string;
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
  amountWithTax?: string;
  amountWithoutTax?: string;
  billDate?: string;
  category?: number;
  checkCode?: string;
  costCenter?: string;
  department?: string;
  drawer?: string;
  id?: string;
  insuranceCompany?: string;
  insuranceOrderId?: string;
  insuranceType?: string;
  invoiceCode?: string;
  invoiceDay?: string;
  invoiceDetails?: InsInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails[];
  invoiceLocation?: string;
  invoiceNo?: string;
  invoiceTitle?: string;
  invoiceType?: number;
  machineCode?: string;
  ofdOssUrl?: string;
  orderId?: number;
  ossUrl?: string;
  passenger?: string;
  passwordArea?: string;
  project?: string;
  purchaserBankAccountInfo?: string;
  purchaserContactInfo?: string;
  purchaserName?: string;
  purchaserTaxNo?: string;
  recipient?: string;
  remarks?: string;
  reviewer?: string;
  sellerBankAccountInfo?: string;
  sellerContactInfo?: string;
  sellerName?: string;
  sellerTaxNo?: string;
  smartCheckCode?: string;
  taxAmount?: string;
  taxRate?: string;
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
  pageNo?: number;
  pageSize?: number;
  totalPage?: number;
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
  code?: string;
  message?: string;
  module?: InsInvoiceScanQueryResponseBodyModule;
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

