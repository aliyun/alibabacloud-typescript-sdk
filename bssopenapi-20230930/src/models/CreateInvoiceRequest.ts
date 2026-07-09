// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInvoiceRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * List of accounts to access. If empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * Enterprise entity ID.
   * 
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
   * @remarks
   * Specifies the invoice amount. Supports up to two decimal places.
   * - If not specified, the invoice will be issued for the total invoiceable amount of all invoiceCandidateIds.
   * - If specified, the invoice will be issued for the specified amount. The specified amount cannot exceed the total invoiceable amount of all invoiceCandidateIds.
   * 
   * @example
   * 0.01
   */
  amount?: string;
  /**
   * @remarks
   * Enterprise and account list. If empty, the current account is queried.
   */
  ecIdAccountIds?: CreateInvoiceRequestEcIdAccountIds[];
  /**
   * @remarks
   * List of invoice candidate IDs.
   * 
   * This parameter is required.
   */
  invoiceCandidateIds?: string[];
  /**
   * @remarks
   * Invoice mode.
   * - 0: Independent invoicing. Expenses of multiple accounts under the enterprise are invoiced separately for each account.
   * - 1: Consolidated invoicing. Expenses of multiple accounts under the enterprise are consolidated and invoiced under the invoicing entity.
   * If only one account is passed in the AccountIds parameter, independent invoicing is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  invoiceMode?: number;
  /**
   * @remarks
   * Invoice remark.
   * 
   * @example
   * 备注信息
   */
  invoiceRemark?: string;
  /**
   * @remarks
   * Invoice title ID.
   * 
   * - The ID parameter returned by the ListInvoiceTitle API for the current logged-in account.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  invoiceTitleId?: string;
  /**
   * @remarks
   * Invoice type.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  invoiceType?: number;
  /**
   * @remarks
   * Primary marketplace ID. If empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * List of email addresses to receive the invoice. A maximum of 3 can be specified.
   * 
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

