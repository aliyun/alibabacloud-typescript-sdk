// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInvoiceRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @example
   * 12345
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInvoiceRequest extends $dara.Model {
  /**
   * @example
   * 0.01
   */
  amount?: string;
  ecIdAccountIds?: CreateInvoiceRequestEcIdAccountIds[];
  /**
   * @remarks
   * This parameter is required.
   */
  invoiceCandidateIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  invoiceMode?: number;
  invoiceRemark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  invoiceTitleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  invoiceType?: number;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recipientEmails?: string[];
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      ecIdAccountIds: 'EcIdAccountIds',
      invoiceCandidateIds: 'InvoiceCandidateIds',
      invoiceMode: 'InvoiceMode',
      invoiceRemark: 'InvoiceRemark',
      invoiceTitleId: 'InvoiceTitleId',
      invoiceType: 'InvoiceType',
      nbid: 'Nbid',
      recipientEmails: 'RecipientEmails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': CreateInvoiceRequestEcIdAccountIds },
      invoiceCandidateIds: { 'type': 'array', 'itemType': 'string' },
      invoiceMode: 'number',
      invoiceRemark: 'string',
      invoiceTitleId: 'string',
      invoiceType: 'number',
      nbid: 'string',
      recipientEmails: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(Array.isArray(this.invoiceCandidateIds)) {
      $dara.Model.validateArray(this.invoiceCandidateIds);
    }
    if(Array.isArray(this.recipientEmails)) {
      $dara.Model.validateArray(this.recipientEmails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

