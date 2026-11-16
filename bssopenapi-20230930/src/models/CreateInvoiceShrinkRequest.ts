// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInvoiceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the invoice amount. Two decimal places are supported.
   * - If left empty, the invoice is issued for the total invoiceable amount of all invoice candidate IDs.
   * - If specified, the invoice is issued for the specified amount. The specified amount cannot exceed the total invoiceable amount of all invoice candidate IDs.
   * 
   * @example
   * 0.01
   */
  amount?: string;
  /**
   * @remarks
   * The list of enterprises and accounts. If this parameter is left empty, the current account is queried.
   */
  ecIdAccountIdsShrink?: string;
  /**
   * @remarks
   * The list of invoice candidate IDs.
   * 
   * This parameter is required.
   */
  invoiceCandidateIdsShrink?: string;
  /**
   * @remarks
   * The invoicing mode. Valid values:
   * - 0: Independent invoicing. The consumption of multiple accounts under an enterprise is invoiced independently for each account.
   * - 1: Consolidated invoicing. The consumption of multiple accounts under an enterprise is consolidated and invoiced based on the invoicing entity.
   * If only one account is specified in the AccountIds request parameter, independent invoicing is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  invoiceMode?: number;
  /**
   * @remarks
   * The invoice remark.
   * 
   * @example
   * Remark information
   */
  invoiceRemark?: string;
  /**
   * @remarks
   * The invoice title ID.
   * 
   * - The ID returned by the ListInvoiceTitle operation for the current logon account.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  invoiceTitleId?: string;
  /**
   * @remarks
   * The invoice type.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  invoiceType?: number;
  /**
   * @remarks
   * The level-1 marketplace ID. If this parameter is left empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The list of email addresses that receive the invoice. You can specify up to three email addresses.
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

