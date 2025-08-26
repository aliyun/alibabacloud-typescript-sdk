// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeVATInvoiceResponseBodyDataBox extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  checkers?: number[];
  /**
   * @remarks
   * 1
   */
  clerks?: number[];
  /**
   * @remarks
   * 1
   */
  invoiceAmounts?: number[];
  /**
   * @remarks
   * 1
   */
  invoiceCodes?: number[];
  /**
   * @remarks
   * 1
   */
  invoiceDates?: number[];
  /**
   * @remarks
   * 1
   */
  invoiceFakeCodes?: number[];
  /**
   * @remarks
   * 1
   */
  invoiceNoes?: number[];
  /**
   * @remarks
   * 1
   */
  itemNames?: number[];
  /**
   * @remarks
   * 1
   */
  payeeAddresses?: number[];
  /**
   * @remarks
   * 1
   */
  payeeBankNames?: number[];
  /**
   * @remarks
   * 1
   */
  payeeNames?: number[];
  /**
   * @remarks
   * 1
   */
  payeeRegisterNoes?: number[];
  /**
   * @remarks
   * 1
   */
  payees?: number[];
  /**
   * @remarks
   * 1
   */
  payerAddresses?: number[];
  /**
   * @remarks
   * 1
   */
  payerBankNames?: number[];
  /**
   * @remarks
   * 1
   */
  payerNames?: number[];
  /**
   * @remarks
   * 1
   */
  payerRegisterNoes?: number[];
  /**
   * @remarks
   * 1
   */
  sumAmounts?: number[];
  /**
   * @remarks
   * 1
   */
  taxAmounts?: number[];
  /**
   * @remarks
   * 1
   */
  withoutTaxAmounts?: number[];
  static names(): { [key: string]: string } {
    return {
      checkers: 'Checkers',
      clerks: 'Clerks',
      invoiceAmounts: 'InvoiceAmounts',
      invoiceCodes: 'InvoiceCodes',
      invoiceDates: 'InvoiceDates',
      invoiceFakeCodes: 'InvoiceFakeCodes',
      invoiceNoes: 'InvoiceNoes',
      itemNames: 'ItemNames',
      payeeAddresses: 'PayeeAddresses',
      payeeBankNames: 'PayeeBankNames',
      payeeNames: 'PayeeNames',
      payeeRegisterNoes: 'PayeeRegisterNoes',
      payees: 'Payees',
      payerAddresses: 'PayerAddresses',
      payerBankNames: 'PayerBankNames',
      payerNames: 'PayerNames',
      payerRegisterNoes: 'PayerRegisterNoes',
      sumAmounts: 'SumAmounts',
      taxAmounts: 'TaxAmounts',
      withoutTaxAmounts: 'WithoutTaxAmounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkers: { 'type': 'array', 'itemType': 'number' },
      clerks: { 'type': 'array', 'itemType': 'number' },
      invoiceAmounts: { 'type': 'array', 'itemType': 'number' },
      invoiceCodes: { 'type': 'array', 'itemType': 'number' },
      invoiceDates: { 'type': 'array', 'itemType': 'number' },
      invoiceFakeCodes: { 'type': 'array', 'itemType': 'number' },
      invoiceNoes: { 'type': 'array', 'itemType': 'number' },
      itemNames: { 'type': 'array', 'itemType': 'number' },
      payeeAddresses: { 'type': 'array', 'itemType': 'number' },
      payeeBankNames: { 'type': 'array', 'itemType': 'number' },
      payeeNames: { 'type': 'array', 'itemType': 'number' },
      payeeRegisterNoes: { 'type': 'array', 'itemType': 'number' },
      payees: { 'type': 'array', 'itemType': 'number' },
      payerAddresses: { 'type': 'array', 'itemType': 'number' },
      payerBankNames: { 'type': 'array', 'itemType': 'number' },
      payerNames: { 'type': 'array', 'itemType': 'number' },
      payerRegisterNoes: { 'type': 'array', 'itemType': 'number' },
      sumAmounts: { 'type': 'array', 'itemType': 'number' },
      taxAmounts: { 'type': 'array', 'itemType': 'number' },
      withoutTaxAmounts: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.checkers)) {
      $dara.Model.validateArray(this.checkers);
    }
    if(Array.isArray(this.clerks)) {
      $dara.Model.validateArray(this.clerks);
    }
    if(Array.isArray(this.invoiceAmounts)) {
      $dara.Model.validateArray(this.invoiceAmounts);
    }
    if(Array.isArray(this.invoiceCodes)) {
      $dara.Model.validateArray(this.invoiceCodes);
    }
    if(Array.isArray(this.invoiceDates)) {
      $dara.Model.validateArray(this.invoiceDates);
    }
    if(Array.isArray(this.invoiceFakeCodes)) {
      $dara.Model.validateArray(this.invoiceFakeCodes);
    }
    if(Array.isArray(this.invoiceNoes)) {
      $dara.Model.validateArray(this.invoiceNoes);
    }
    if(Array.isArray(this.itemNames)) {
      $dara.Model.validateArray(this.itemNames);
    }
    if(Array.isArray(this.payeeAddresses)) {
      $dara.Model.validateArray(this.payeeAddresses);
    }
    if(Array.isArray(this.payeeBankNames)) {
      $dara.Model.validateArray(this.payeeBankNames);
    }
    if(Array.isArray(this.payeeNames)) {
      $dara.Model.validateArray(this.payeeNames);
    }
    if(Array.isArray(this.payeeRegisterNoes)) {
      $dara.Model.validateArray(this.payeeRegisterNoes);
    }
    if(Array.isArray(this.payees)) {
      $dara.Model.validateArray(this.payees);
    }
    if(Array.isArray(this.payerAddresses)) {
      $dara.Model.validateArray(this.payerAddresses);
    }
    if(Array.isArray(this.payerBankNames)) {
      $dara.Model.validateArray(this.payerBankNames);
    }
    if(Array.isArray(this.payerNames)) {
      $dara.Model.validateArray(this.payerNames);
    }
    if(Array.isArray(this.payerRegisterNoes)) {
      $dara.Model.validateArray(this.payerRegisterNoes);
    }
    if(Array.isArray(this.sumAmounts)) {
      $dara.Model.validateArray(this.sumAmounts);
    }
    if(Array.isArray(this.taxAmounts)) {
      $dara.Model.validateArray(this.taxAmounts);
    }
    if(Array.isArray(this.withoutTaxAmounts)) {
      $dara.Model.validateArray(this.withoutTaxAmounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceResponseBodyDataContent extends $dara.Model {
  /**
   * @example
   * 02702870934284730434
   */
  antiFakeCode?: string;
  checker?: string;
  clerk?: string;
  /**
   * @example
   * 200.00
   */
  invoiceAmount?: string;
  /**
   * @example
   * 031001600311
   */
  invoiceCode?: string;
  /**
   * @example
   * 20190415
   */
  invoiceDate?: string;
  /**
   * @example
   * 03753869
   */
  invoiceNo?: string;
  /**
   * @remarks
   * 1
   */
  itemName?: string[];
  payee?: string;
  payeeAddress?: string;
  payeeBankName?: string;
  payeeName?: string;
  /**
   * @example
   * 91420200000123403
   */
  payeeRegisterNo?: string;
  payerAddress?: string;
  /**
   * @example
   * 6221************1234
   */
  payerBankName?: string;
  payerName?: string;
  /**
   * @example
   * 91420200000123403
   */
  payerRegisterNo?: string;
  /**
   * @example
   * 87
   */
  sumAmount?: string;
  /**
   * @example
   * 9.52
   */
  taxAmount?: string;
  /**
   * @example
   * 190.48
   */
  withoutTaxAmount?: string;
  static names(): { [key: string]: string } {
    return {
      antiFakeCode: 'AntiFakeCode',
      checker: 'Checker',
      clerk: 'Clerk',
      invoiceAmount: 'InvoiceAmount',
      invoiceCode: 'InvoiceCode',
      invoiceDate: 'InvoiceDate',
      invoiceNo: 'InvoiceNo',
      itemName: 'ItemName',
      payee: 'Payee',
      payeeAddress: 'PayeeAddress',
      payeeBankName: 'PayeeBankName',
      payeeName: 'PayeeName',
      payeeRegisterNo: 'PayeeRegisterNo',
      payerAddress: 'PayerAddress',
      payerBankName: 'PayerBankName',
      payerName: 'PayerName',
      payerRegisterNo: 'PayerRegisterNo',
      sumAmount: 'SumAmount',
      taxAmount: 'TaxAmount',
      withoutTaxAmount: 'WithoutTaxAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiFakeCode: 'string',
      checker: 'string',
      clerk: 'string',
      invoiceAmount: 'string',
      invoiceCode: 'string',
      invoiceDate: 'string',
      invoiceNo: 'string',
      itemName: { 'type': 'array', 'itemType': 'string' },
      payee: 'string',
      payeeAddress: 'string',
      payeeBankName: 'string',
      payeeName: 'string',
      payeeRegisterNo: 'string',
      payerAddress: 'string',
      payerBankName: 'string',
      payerName: 'string',
      payerRegisterNo: 'string',
      sumAmount: 'string',
      taxAmount: 'string',
      withoutTaxAmount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemName)) {
      $dara.Model.validateArray(this.itemName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceResponseBodyData extends $dara.Model {
  box?: RecognizeVATInvoiceResponseBodyDataBox;
  content?: RecognizeVATInvoiceResponseBodyDataContent;
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: RecognizeVATInvoiceResponseBodyDataBox,
      content: RecognizeVATInvoiceResponseBodyDataContent,
    };
  }

  validate() {
    if(this.box && typeof (this.box as any).validate === 'function') {
      (this.box as any).validate();
    }
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVATInvoiceResponseBody extends $dara.Model {
  data?: RecognizeVATInvoiceResponseBodyData;
  /**
   * @example
   * 56A10D65-ECE0-59DE-9775-F6494D2AF13B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVATInvoiceResponseBodyData,
      requestId: 'string',
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

