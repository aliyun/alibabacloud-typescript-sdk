// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsStatResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The system event category. Valid values:
   * 
   * *   **Exception**: abnormal events
   * *   **Optimize**: optimization events.
   * *   **Notification**: notification events.
   * *   **Maintenance**: scheduled maintenance events.
   * 
   * @example
   * Exception
   */
  eventCategory?: string;
  /**
   * @remarks
   * The total number of returned events.
   * 
   * @example
   * 21
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventCategory: 'EventCategory',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCategory: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryEventsStatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried events.
   */
  items?: DescribeHistoryEventsStatResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B32A350C-3A8E-5FF1-A56F-51C3769D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeHistoryEventsStatResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

