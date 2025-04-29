// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventType } from "./DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventType";


export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSet extends $dara.Model {
  instanceSystemEventType?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventType[];
  static names(): { [key: string]: string } {
    return {
      instanceSystemEventType: 'InstanceSystemEventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSystemEventType: { 'type': 'array', 'itemType': DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventType },
    };
  }

  validate() {
    if(Array.isArray(this.instanceSystemEventType)) {
      $dara.Model.validateArray(this.instanceSystemEventType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

