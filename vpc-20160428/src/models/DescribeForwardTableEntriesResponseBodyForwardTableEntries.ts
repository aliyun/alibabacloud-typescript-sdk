// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry } from "./DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry";


export class DescribeForwardTableEntriesResponseBodyForwardTableEntries extends $dara.Model {
  forwardTableEntry?: DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry[];
  static names(): { [key: string]: string } {
    return {
      forwardTableEntry: 'ForwardTableEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableEntry: { 'type': 'array', 'itemType': DescribeForwardTableEntriesResponseBodyForwardTableEntriesForwardTableEntry },
    };
  }

  validate() {
    if(Array.isArray(this.forwardTableEntry)) {
      $dara.Model.validateArray(this.forwardTableEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

