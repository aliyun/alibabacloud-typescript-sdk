// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePrefixListAttributesResponseBodyEntriesEntry } from "./DescribePrefixListAttributesResponseBodyEntriesEntry";


export class DescribePrefixListAttributesResponseBodyEntries extends $dara.Model {
  entry?: DescribePrefixListAttributesResponseBodyEntriesEntry[];
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: { 'type': 'array', 'itemType': DescribePrefixListAttributesResponseBodyEntriesEntry },
    };
  }

  validate() {
    if(Array.isArray(this.entry)) {
      $dara.Model.validateArray(this.entry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

