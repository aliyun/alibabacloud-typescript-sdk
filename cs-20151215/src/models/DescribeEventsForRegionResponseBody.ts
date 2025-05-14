// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventsForRegionResponseBodyEvents } from "./DescribeEventsForRegionResponseBodyEvents";
import { DescribeEventsForRegionResponseBodyPageInfo } from "./DescribeEventsForRegionResponseBodyPageInfo";


export class DescribeEventsForRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The events.
   */
  events?: DescribeEventsForRegionResponseBodyEvents[];
  /**
   * @remarks
   * The pagination details.
   */
  pageInfo?: DescribeEventsForRegionResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeEventsForRegionResponseBodyEvents },
      pageInfo: DescribeEventsForRegionResponseBodyPageInfo,
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

