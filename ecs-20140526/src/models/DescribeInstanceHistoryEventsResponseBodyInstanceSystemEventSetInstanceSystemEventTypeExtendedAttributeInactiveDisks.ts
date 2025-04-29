// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk } from "./DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk";


export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks extends $dara.Model {
  inactiveDisk?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk[];
  static names(): { [key: string]: string } {
    return {
      inactiveDisk: 'InactiveDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inactiveDisk: { 'type': 'array', 'itemType': DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk },
    };
  }

  validate() {
    if(Array.isArray(this.inactiveDisk)) {
      $dara.Model.validateArray(this.inactiveDisk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

