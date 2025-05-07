// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventsResponseBodyEventItems } from "./DescribeEventsResponseBodyEventItems";


export class DescribeEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The events.
   */
  eventItems?: DescribeEventsResponseBodyEventItems;
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A103039D-B1B2-4C57-B989-7D7C0DA95426
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 40
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
      eventItems: DescribeEventsResponseBodyEventItems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.eventItems && typeof (this.eventItems as any).validate === 'function') {
      (this.eventItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

