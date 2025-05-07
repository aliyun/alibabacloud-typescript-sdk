// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHistoryEventsStatResponseBodyItems } from "./DescribeHistoryEventsStatResponseBodyItems";


export class DescribeHistoryEventsStatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event.
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

