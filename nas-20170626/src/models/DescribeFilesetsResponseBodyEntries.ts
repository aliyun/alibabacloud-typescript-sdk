// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFilesetsResponseBodyEntriesEntrie } from "./DescribeFilesetsResponseBodyEntriesEntrie";


export class DescribeFilesetsResponseBodyEntries extends $dara.Model {
  entrie?: DescribeFilesetsResponseBodyEntriesEntrie[];
  static names(): { [key: string]: string } {
    return {
      entrie: 'Entrie',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrie: { 'type': 'array', 'itemType': DescribeFilesetsResponseBodyEntriesEntrie },
    };
  }

  validate() {
    if(Array.isArray(this.entrie)) {
      $dara.Model.validateArray(this.entrie);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

