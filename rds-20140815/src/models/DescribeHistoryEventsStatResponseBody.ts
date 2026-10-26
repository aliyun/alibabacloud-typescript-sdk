// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsStatResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The categorization of system events. Valid values:
   * - **Exception**: abnormal events.
   * - **Optimize**: optimization events.
   * - **Notification**: notification events.
   * - **Maintenance**: scheduled O&M events.
   * 
   * @example
   * Exception
   */
  eventCategory?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 31
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
   * The list of events.
   */
  items?: DescribeHistoryEventsStatResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E52666CC-330E-418A-8E5B-A19E3FB42D13
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

