// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInvoiceRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accounts to access. If this parameter is left empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The enterprise entity ID.
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
  ecIdAccountIds?: CreateInvoiceRequestEcIdAccountIds[];
  /**
   * @remarks
   * The list of invoice candidate IDs.
   * 
   * This parameter is required.
   */
  invoiceCandidateIds?: string[];
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

