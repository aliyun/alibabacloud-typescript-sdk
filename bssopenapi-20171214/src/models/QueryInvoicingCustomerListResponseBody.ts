// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceListCustomerInvoice extends $dara.Model {
  /**
   * @remarks
   * The type of invoice that was changed to.
   * 
   * @example
   * 1
   */
  adjustType?: number;
  /**
   * @remarks
   * The bank that issues the invoice.
   * 
   * @example
   * Test Bank
   */
  bank?: string;
  /**
   * @remarks
   * The bank account number.
   * 
   * @example
   * 389576348573296349853476
   */
  bankNo?: string;
  /**
   * @remarks
   * The authentication type of Alipay. Valid values:
   * 
   * *   1: individual
   * *   2: company
   * 
   * @example
   * 1
   */
  customerType?: number;
  /**
   * @remarks
   * The default note that is attached when the title is specified.
   * 
   * @example
   * PO Code: 12984554
   */
  defaultRemark?: string;
  /**
   * @remarks
   * The time when the payment ended.
   * 
   * @example
   * 202003
   */
  endCycle?: number;
  /**
   * @remarks
   * The time when the invoice was created. The time was in the yyyy-mm-dd hh:mm:ss format.
   * 
   * @example
   * 2018-09-07 15:26:20
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The ID of the invoice.
   * 
   * @example
   * 239875502738
   */
  id?: number;
  /**
   * @remarks
   * The company name in the invoice title.
   * 
   * @example
   * Test Company
   */
  invoiceTitle?: string;
  /**
   * @remarks
   * The type of issue.
   * 
   * @example
   * 1
   */
  issueType?: number;
  /**
   * @remarks
   * The address of the business license.
   * 
   * @example
   * XXX, XXX district, XXX city, XXX province
   */
  operatingLicenseAddress?: string;
  /**
   * @remarks
   * The phone number of the business license.
   * 
   * @example
   * 138xxxxxxxx
   */
  operatingLicensePhone?: string;
  /**
   * @remarks
   * The tax registration number.
   * 
   * @example
   * 21343245342534
   */
  registerNo?: string;
  /**
   * @remarks
   * The time when the payment started.
   * 
   * @example
   * 202002
   */
  startCycle?: number;
  /**
   * @remarks
   * The status of the invoice title.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The path and file name of the scanned copy of the tax registration certificate.
   * 
   * @example
   * taxationLicense.jpg
   */
  taxationLicense?: string;
  /**
   * @remarks
   * The type of the taxpayer. Valid values:
   * 
   * *   1: general taxpayer
   * *   2: special taxpayer
   * 
   * @example
   * 1
   */
  taxpayerType?: number;
  /**
   * @remarks
   * The instruction document of the invoice title change.
   * 
   * @example
   * instruction.doc
   */
  titleChangeInstructions?: string;
  /**
   * @remarks
   * The type of the invoice. Valid values:
   * 
   * *   0: plain value-added tax (VAT) invoice
   * *   1: special VAT invoice
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 34565465675
   */
  userId?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * testNick
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      adjustType: 'AdjustType',
      bank: 'Bank',
      bankNo: 'BankNo',
      customerType: 'CustomerType',
      defaultRemark: 'DefaultRemark',
      endCycle: 'EndCycle',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      invoiceTitle: 'InvoiceTitle',
      issueType: 'IssueType',
      operatingLicenseAddress: 'OperatingLicenseAddress',
      operatingLicensePhone: 'OperatingLicensePhone',
      registerNo: 'RegisterNo',
      startCycle: 'StartCycle',
      status: 'Status',
      taxationLicense: 'TaxationLicense',
      taxpayerType: 'TaxpayerType',
      titleChangeInstructions: 'TitleChangeInstructions',
      type: 'Type',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustType: 'number',
      bank: 'string',
      bankNo: 'string',
      customerType: 'number',
      defaultRemark: 'string',
      endCycle: 'number',
      gmtCreate: 'string',
      id: 'number',
      invoiceTitle: 'string',
      issueType: 'number',
      operatingLicenseAddress: 'string',
      operatingLicensePhone: 'string',
      registerNo: 'string',
      startCycle: 'number',
      status: 'number',
      taxationLicense: 'string',
      taxpayerType: 'number',
      titleChangeInstructions: 'string',
      type: 'number',
      userId: 'number',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceList extends $dara.Model {
  customerInvoice?: QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceListCustomerInvoice[];
  static names(): { [key: string]: string } {
    return {
      customerInvoice: 'CustomerInvoice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoice: { 'type': 'array', 'itemType': QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceListCustomerInvoice },
    };
  }

  validate() {
    if(Array.isArray(this.customerInvoice)) {
      $dara.Model.validateArray(this.customerInvoice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the invoice.
   */
  customerInvoiceList?: QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceList;
  static names(): { [key: string]: string } {
    return {
      customerInvoiceList: 'CustomerInvoiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoiceList: QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceList,
    };
  }

  validate() {
    if(this.customerInvoiceList && typeof (this.customerInvoiceList as any).validate === 'function') {
      (this.customerInvoiceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryInvoicingCustomerListResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BBEF51A3-E933-4F40-A534-C673CBDB9C80
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryInvoicingCustomerListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

