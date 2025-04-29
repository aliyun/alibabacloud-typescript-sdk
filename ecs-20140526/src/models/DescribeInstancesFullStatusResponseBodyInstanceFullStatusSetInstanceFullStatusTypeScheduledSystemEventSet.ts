// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventType } from "./DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventType";


export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet extends $dara.Model {
  scheduledSystemEventType?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventType[];
  static names(): { [key: string]: string } {
    return {
      scheduledSystemEventType: 'ScheduledSystemEventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledSystemEventType: { 'type': 'array', 'itemType': DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventType },
    };
  }

  validate() {
    if(Array.isArray(this.scheduledSystemEventType)) {
      $dara.Model.validateArray(this.scheduledSystemEventType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

