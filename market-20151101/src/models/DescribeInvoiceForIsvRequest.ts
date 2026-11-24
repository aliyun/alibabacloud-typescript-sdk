// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvoiceForIsvRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. By default, 23:59:59 is appended to the date.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start time. By default, 00:00:00 is appended to the date.
   * 
   * @example
   * 2025-01-31 23:59:59
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The ID of the invoice application. This corresponds to the Result.Id field in the response of the DescribeInvoiceForIsv operation.
   * 
   * @example
   * 4072040****
   */
  invoiceId?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query. Maximum value: 50. Default value: 10. (This parameter is not enabled.)
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned by the current call. This parameter is not enabled.
   * 
   * @example
   * 3v3mzZN1QdVsTPNiT0OkD9v+MeV8LSqSQDSuTTVFCUMMWShmnj/LXRMScqm242bB
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The current invoice status. Valid values:
   * - 0: Applying.
   * - 1: Completed.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The invoice type. If this parameter is left empty, all types are queried by default. Valid values:
   * - 2: Digital electronic ordinary invoice.
   * - 3: Digital electronic special invoice.
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * The Alibaba Cloud user ID of the customer.
   * 
   * @example
   * 174452687724****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      invoiceId: 'InvoiceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      status: 'Status',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      invoiceId: 'number',
      maxResults: 'number',
      nextToken: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      status: 'number',
      type: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

