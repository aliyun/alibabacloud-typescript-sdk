// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInvoiceCandidateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of billing cycles.
   */
  billingCyclesShrink?: string;
  /**
   * @remarks
   * The list of business document numbers.
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
   * The list of enterprises and accounts. If this parameter is left empty, the current account is queried.
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
   * The list of invoice issuers.
   */
  invoiceIssuersShrink?: string;
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
   * The list of invoice object statuses.
   */
  statusShrink?: string;
  /**
   * @remarks
   * The list of invoice object types.
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

