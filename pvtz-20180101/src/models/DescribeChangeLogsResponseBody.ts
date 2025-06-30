// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChangeLogsResponseBodyChangeLogs } from "./DescribeChangeLogsResponseBodyChangeLogs";


export class DescribeChangeLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation logs.
   */
  changeLogs?: DescribeChangeLogsResponseBodyChangeLogs;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0FCB52A-D512-41A0-8595-40234EDCFD8B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 100
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      changeLogs: 'ChangeLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeLogs: DescribeChangeLogsResponseBodyChangeLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.changeLogs && typeof (this.changeLogs as any).validate === 'function') {
      (this.changeLogs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

