// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHistoryEventsStatResponseBodyItems } from "./DescribeHistoryEventsStatResponseBodyItems";


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
   * BA0F6761-7A8C-59F8-9624-FB56788C0EDF
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

