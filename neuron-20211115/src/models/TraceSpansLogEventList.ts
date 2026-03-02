// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagEntry } from "./TagEntry";


export class TraceSpansLogEventList extends $dara.Model {
  logEventTagEntryList?: TagEntry[];
  static names(): { [key: string]: string } {
    return {
      logEventTagEntryList: 'logEventTagEntryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEventTagEntryList: { 'type': 'array', 'itemType': TagEntry },
    };
  }

  validate() {
    if(Array.isArray(this.logEventTagEntryList)) {
      $dara.Model.validateArray(this.logEventTagEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

