// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventsResponseBodyEventItemsEventItems } from "./DescribeEventsResponseBodyEventItemsEventItems";


export class DescribeEventsResponseBodyEventItems extends $dara.Model {
  eventItems?: DescribeEventsResponseBodyEventItemsEventItems[];
  static names(): { [key: string]: string } {
    return {
      eventItems: 'EventItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventItems: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEventItemsEventItems },
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

