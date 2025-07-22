// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInvoiceShrinkRequest extends $dara.Model {
  /**
   * @example
   * 0.01
   */
  amount?: string;
  ecIdAccountIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  invoiceCandidateIdsShrink?: string;
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

