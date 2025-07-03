// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventsResponseBodyEventItems } from "./DescribeEventsResponseBodyEventItems";


export class DescribeEventsResponseBody extends $dara.Model {
  eventItems?: DescribeEventsResponseBodyEventItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 4748127A-6D50-432C-B635-433467074C27
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventItems: 'EventItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventItems: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEventItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventItems)) {
      $dara.Model.validateArray(this.eventItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

