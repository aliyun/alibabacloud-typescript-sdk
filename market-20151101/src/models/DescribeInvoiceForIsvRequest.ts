// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvoiceForIsvRequest extends $dara.Model {
  /**
   * @example
   * 2025-01-01 00:00:00
   */
  createTimeEnd?: string;
  /**
   * @example
   * 2025-01-31 23:59:59
   */
  createTimeStart?: string;
  /**
   * @example
   * 4072040****
   */
  invoiceId?: number;
  maxResults?: number;
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  type?: number;
  /**
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

