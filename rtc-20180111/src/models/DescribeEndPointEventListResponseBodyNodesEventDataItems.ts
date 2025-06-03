// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList } from "./DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList";


export class DescribeEndPointEventListResponseBodyNodesEventDataItems extends $dara.Model {
  eventList?: DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList[];
  /**
   * @example
   * 1614936817
   */
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList },
      ts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

