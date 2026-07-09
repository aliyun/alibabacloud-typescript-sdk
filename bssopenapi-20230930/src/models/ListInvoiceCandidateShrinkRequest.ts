// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInvoiceCandidateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of billing cycles.
   */
  billingCyclesShrink?: string;
  /**
   * @remarks
   * List of business document numbers.
   */
  businessIdsShrink?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of enterprises and accounts. If empty, the current account itself is queried.
   */
  ecIdAccountIdsShrink?: string;
  /**
   * @remarks
   * The end time. Format: yyyy-mm-dd hh:mm:ss.
   * 
   * @example
   * 2025-07-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * List of invoice issuers.
   */
  invoiceIssuersShrink?: string;
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
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time. Format: yyyy-mm-dd hh:mm:ss.
   * 
   * @example
   * 2025-06-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * List of invoice candidate statuses.
   */
  statusShrink?: string;
  /**
   * @remarks
   * List of invoice candidate types.
   */
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

