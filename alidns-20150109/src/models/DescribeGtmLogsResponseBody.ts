// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmLogsResponseBodyLogs } from "./DescribeGtmLogsResponseBodyLogs";


export class DescribeGtmLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of logs returned.
   */
  logs?: DescribeGtmLogsResponseBodyLogs;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50C60A29-2E93-425A-ABA8-068686E28873
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned on all pages.
   * 
   * @example
   * 224
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 224
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: DescribeGtmLogsResponseBodyLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.logs && typeof (this.logs as any).validate === 'function') {
      (this.logs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

