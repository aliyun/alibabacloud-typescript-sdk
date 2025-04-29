// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeForwardTableEntriesResponseBodyForwardTableEntries } from "./DescribeForwardTableEntriesResponseBodyForwardTableEntries";


export class DescribeForwardTableEntriesResponseBody extends $dara.Model {
  forwardTableEntries?: DescribeForwardTableEntriesResponseBodyForwardTableEntries;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

