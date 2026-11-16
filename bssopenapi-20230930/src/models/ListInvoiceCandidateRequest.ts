// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInvoiceCandidateRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accessed accounts. If this parameter is left empty, all accounts under the current entity ID are selected.
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

export class ListInvoiceCandidateRequest extends $dara.Model {
  /**
   * @remarks
   * The list of billing cycles.
   */
  billingCycles?: number[];
  /**
   * @remarks
   * The list of business document numbers.
   */
  businessIds?: string[];
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
  ecIdAccountIds?: ListInvoiceCandidateRequestEcIdAccountIds[];
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
  invoiceIssuers?: string[];
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
  status?: number[];
  /**
   * @remarks
   * The list of invoice object types.
   */
  types?: number[];
  static names(): { [key: string]: string } {
    return {
      billingCycles: 'BillingCycles',
      businessIds: 'BusinessIds',
      currentPage: 'CurrentPage',
      ecIdAccountIds: 'EcIdAccountIds',
      endTime: 'EndTime',
      invoiceIssuers: 'InvoiceIssuers',
      nbid: 'Nbid',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycles: { 'type': 'array', 'itemType': 'number' },
      businessIds: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': ListInvoiceCandidateRequestEcIdAccountIds },
      endTime: 'string',
      invoiceIssuers: { 'type': 'array', 'itemType': 'string' },
      nbid: 'string',
      pageSize: 'number',
      startTime: 'string',
      status: { 'type': 'array', 'itemType': 'number' },
      types: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.billingCycles)) {
      $dara.Model.validateArray(this.billingCycles);
    }
    if(Array.isArray(this.businessIds)) {
      $dara.Model.validateArray(this.businessIds);
    }
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(Array.isArray(this.invoiceIssuers)) {
      $dara.Model.validateArray(this.invoiceIssuers);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

