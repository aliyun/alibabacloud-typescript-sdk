// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshot } from "./QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshot";


export class QueryMediaListResponseBodyMediaListMediaSnapshotList extends $dara.Model {
  snapshot?: QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshot },
    };
  }

  validate() {
    if(Array.isArray(this.snapshot)) {
      $dara.Model.validateArray(this.snapshot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

