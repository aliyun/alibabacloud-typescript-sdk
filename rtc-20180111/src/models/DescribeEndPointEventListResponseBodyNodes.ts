// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEndPointEventListResponseBodyNodesEventDataItems } from "./DescribeEndPointEventListResponseBodyNodesEventDataItems";


export class DescribeEndPointEventListResponseBodyNodes extends $dara.Model {
  eventDataItems?: DescribeEndPointEventListResponseBodyNodesEventDataItems[];
  /**
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDataItems: 'EventDataItems',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDataItems: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItems },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventDataItems)) {
      $dara.Model.validateArray(this.eventDataItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

