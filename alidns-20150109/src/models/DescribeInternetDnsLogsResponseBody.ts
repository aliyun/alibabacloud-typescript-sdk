// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInternetDnsLogsResponseBodyLogs } from "./DescribeInternetDnsLogsResponseBodyLogs";


export class DescribeInternetDnsLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the log query is precise.
   * 
   * @example
   * true
   */
  complete?: boolean;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  curPage?: number;
  /**
   * @remarks
   * The queried logs.
   */
  logs?: DescribeInternetDnsLogsResponseBodyLogs;
  /**
   * @remarks
   * Page size for query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Unique request identifier.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 5
   */
  totalPage?: number;
  /**
   * @remarks
   * Total quantity.
   * 
   * @example
   * 48
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'Complete',
      curPage: 'CurPage',
      logs: 'Logs',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      curPage: 'number',
      logs: DescribeInternetDnsLogsResponseBodyLogs,
      pageSize: 'number',
      requestId: 'string',
      totalPage: 'number',
      totalSize: 'number',
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

