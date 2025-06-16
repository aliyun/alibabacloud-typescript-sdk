// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeForwardTableEntriesResponseBodyForwardTableEntries } from "./DescribeForwardTableEntriesResponseBodyForwardTableEntries";


export class DescribeForwardTableEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of DNAT entries.
   */
  forwardTableEntries?: DescribeForwardTableEntriesResponseBodyForwardTableEntries;
  /**
   * @remarks
   * The page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6C4A8B1-7561-4509-949C-20DEB40D71E6
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      forwardTableEntries: 'ForwardTableEntries',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableEntries: DescribeForwardTableEntriesResponseBodyForwardTableEntries,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.forwardTableEntries && typeof (this.forwardTableEntries as any).validate === 'function') {
      (this.forwardTableEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

