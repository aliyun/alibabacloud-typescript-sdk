// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSubDomainRecordsResponseBodyDomainRecords } from "./DescribeSubDomainRecordsResponseBodyDomainRecords";


export class DescribeSubDomainRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned Domain Name System (DNS) records.
   */
  domainRecords?: DescribeSubDomainRecordsResponseBodyDomainRecords;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainRecords: 'DomainRecords',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRecords: DescribeSubDomainRecordsResponseBodyDomainRecords,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domainRecords && typeof (this.domainRecords as any).validate === 'function') {
      (this.domainRecords as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

