// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInvoiceCandidateShrinkRequest extends $dara.Model {
  billingCyclesShrink?: string;
  businessIdsShrink?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  ecIdAccountIdsShrink?: string;
  /**
   * @example
   * 2025-07-01 00:00:00
   */
  endTime?: string;
  invoiceIssuersShrink?: string;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 2025-06-01 00:00:00
   */
  startTime?: string;
  statusShrink?: string;
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      billingCyclesShrink: 'BillingCycles',
      businessIdsShrink: 'BusinessIds',
      currentPage: 'CurrentPage',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      endTime: 'EndTime',
      invoiceIssuersShrink: 'InvoiceIssuers',
      nbid: 'Nbid',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      statusShrink: 'Status',
      typesShrink: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCyclesShrink: 'string',
      businessIdsShrink: 'string',
      currentPage: 'number',
      ecIdAccountIdsShrink: 'string',
      endTime: 'string',
      invoiceIssuersShrink: 'string',
      nbid: 'string',
      pageSize: 'number',
      startTime: 'string',
      statusShrink: 'string',
      typesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

