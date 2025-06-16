// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnatTableEntriesResponseBodySnatTableEntriesSnatTableEntry } from "./DescribeSnatTableEntriesResponseBodySnatTableEntriesSnatTableEntry";


export class DescribeSnatTableEntriesResponseBodySnatTableEntries extends $dara.Model {
  snatTableEntry?: DescribeSnatTableEntriesResponseBodySnatTableEntriesSnatTableEntry[];
  static names(): { [key: string]: string } {
    return {
      snatTableEntry: 'SnatTableEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatTableEntry: { 'type': 'array', 'itemType': DescribeSnatTableEntriesResponseBodySnatTableEntriesSnatTableEntry },
    };
  }

  validate() {
    if(Array.isArray(this.snatTableEntry)) {
      $dara.Model.validateArray(this.snatTableEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

