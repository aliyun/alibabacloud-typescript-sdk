// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortRangeListEntriesResponseBodyEntries } from "./DescribePortRangeListEntriesResponseBodyEntries";


export class DescribePortRangeListEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Port list entries.
   */
  entries?: DescribePortRangeListEntriesResponseBodyEntries[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 882304EC-5CE2-5860-98ED-3FA1D8D74A0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entries: 'Entries',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entries: { 'type': 'array', 'itemType': DescribePortRangeListEntriesResponseBodyEntries },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

