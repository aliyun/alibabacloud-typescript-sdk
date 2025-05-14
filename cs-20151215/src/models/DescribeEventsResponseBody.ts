// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventsResponseBodyEvents } from "./DescribeEventsResponseBodyEvents";
import { DescribeEventsResponseBodyPageInfo } from "./DescribeEventsResponseBodyPageInfo";


export class DescribeEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the events.
   */
  events?: DescribeEventsResponseBodyEvents[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeEventsResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEvents },
      pageInfo: DescribeEventsResponseBodyPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

