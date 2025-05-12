// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJob } from "./QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJob";


export class QuerySnapshotJobListResponseBodySnapshotJobList extends $dara.Model {
  snapshotJob?: QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJob[];
  static names(): { [key: string]: string } {
    return {
      snapshotJob: 'SnapshotJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotJob: { 'type': 'array', 'itemType': QuerySnapshotJobListResponseBodySnapshotJobListSnapshotJob },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotJob)) {
      $dara.Model.validateArray(this.snapshotJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

