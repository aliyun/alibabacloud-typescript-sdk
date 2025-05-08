// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeForwardTableEntriesResponseBodyForwardTableEntries } from "./DescribeForwardTableEntriesResponseBodyForwardTableEntries";


export class DescribeForwardTableEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of DNAT entries.
   */
  forwardTableEntries?: DescribeForwardTableEntriesResponseBodyForwardTableEntries[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: string;
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
      forwardTableEntries: { 'type': 'array', 'itemType': DescribeForwardTableEntriesResponseBodyForwardTableEntries },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forwardTableEntries)) {
      $dara.Model.validateArray(this.forwardTableEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

