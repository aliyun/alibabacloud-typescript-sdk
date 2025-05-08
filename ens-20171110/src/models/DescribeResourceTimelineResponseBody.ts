// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourceTimelineResponseBodyAvailableEvents } from "./DescribeResourceTimelineResponseBodyAvailableEvents";
import { DescribeResourceTimelineResponseBodyBizEvents } from "./DescribeResourceTimelineResponseBodyBizEvents";
import { DescribeResourceTimelineResponseBodyInventoryEvents } from "./DescribeResourceTimelineResponseBodyInventoryEvents";
import { DescribeResourceTimelineResponseBodyReserveEvents } from "./DescribeResourceTimelineResponseBodyReserveEvents";


export class DescribeResourceTimelineResponseBody extends $dara.Model {
  availableEvents?: DescribeResourceTimelineResponseBodyAvailableEvents[];
  bizEvents?: DescribeResourceTimelineResponseBodyBizEvents[];
  desc?: string;
  inventoryEvents?: DescribeResourceTimelineResponseBodyInventoryEvents[];
  msg?: string;
  requestId?: string;
  reserveEvents?: DescribeResourceTimelineResponseBodyReserveEvents[];
  static names(): { [key: string]: string } {
    return {
      availableEvents: 'AvailableEvents',
      bizEvents: 'BizEvents',
      desc: 'Desc',
      inventoryEvents: 'InventoryEvents',
      msg: 'Msg',
      requestId: 'RequestId',
      reserveEvents: 'ReserveEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableEvents: { 'type': 'array', 'itemType': DescribeResourceTimelineResponseBodyAvailableEvents },
      bizEvents: { 'type': 'array', 'itemType': DescribeResourceTimelineResponseBodyBizEvents },
      desc: 'string',
      inventoryEvents: { 'type': 'array', 'itemType': DescribeResourceTimelineResponseBodyInventoryEvents },
      msg: 'string',
      requestId: 'string',
      reserveEvents: { 'type': 'array', 'itemType': DescribeResourceTimelineResponseBodyReserveEvents },
    };
  }

  validate() {
    if(Array.isArray(this.availableEvents)) {
      $dara.Model.validateArray(this.availableEvents);
    }
    if(Array.isArray(this.bizEvents)) {
      $dara.Model.validateArray(this.bizEvents);
    }
    if(Array.isArray(this.inventoryEvents)) {
      $dara.Model.validateArray(this.inventoryEvents);
    }
    if(Array.isArray(this.reserveEvents)) {
      $dara.Model.validateArray(this.reserveEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

