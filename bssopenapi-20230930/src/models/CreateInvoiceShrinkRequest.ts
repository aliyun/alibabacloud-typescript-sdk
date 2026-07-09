// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInvoiceShrinkRequest extends $dara.Model {
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
  ecIdAccountIdsShrink?: string;
  /**
   * @remarks
   * List of invoice candidate IDs.
   * 
   * This parameter is required.
   */
  invoiceCandidateIdsShrink?: string;
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
  recipientEmailsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      invoiceCandidateIdsShrink: 'InvoiceCandidateIds',
      invoiceMode: 'InvoiceMode',
      invoiceRemark: 'InvoiceRemark',
      invoiceTitleId: 'InvoiceTitleId',
      invoiceType: 'InvoiceType',
      nbid: 'Nbid',
      recipientEmailsShrink: 'RecipientEmails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      ecIdAccountIdsShrink: 'string',
      invoiceCandidateIdsShrink: 'string',
      invoiceMode: 'number',
      invoiceRemark: 'string',
      invoiceTitleId: 'string',
      invoiceType: 'number',
      nbid: 'string',
      recipientEmailsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

