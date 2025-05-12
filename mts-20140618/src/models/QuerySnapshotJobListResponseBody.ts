// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySnapshotJobListResponseBodyNonExistSnapshotJobIds } from "./QuerySnapshotJobListResponseBodyNonExistSnapshotJobIds";
import { QuerySnapshotJobListResponseBodySnapshotJobList } from "./QuerySnapshotJobListResponseBodySnapshotJobList";


export class QuerySnapshotJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS object that is used as the input file.
   * 
   * @example
   * b11c171cced04565b1f38f1ecc39****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The OSS object that is generated as the output file of the tiling job.
   */
  nonExistSnapshotJobIds?: QuerySnapshotJobListResponseBodyNonExistSnapshotJobIds;
  /**
   * @remarks
   * The ID of the snapshot job.
   * 
   * @example
   * 34BCAB31-2833-43A7-9FBD-B34302AB23EQ
   */
  requestId?: string;
  /**
   * @remarks
   * The distance between images.
   * 
   * *   Default value: **0**.
   * *   Unit: pixel.
   */
  snapshotJobList?: QuerySnapshotJobListResponseBodySnapshotJobList;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      nonExistSnapshotJobIds: 'NonExistSnapshotJobIds',
      requestId: 'RequestId',
      snapshotJobList: 'SnapshotJobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      nonExistSnapshotJobIds: QuerySnapshotJobListResponseBodyNonExistSnapshotJobIds,
      requestId: 'string',
      snapshotJobList: QuerySnapshotJobListResponseBodySnapshotJobList,
    };
  }

  validate() {
    if(this.nonExistSnapshotJobIds && typeof (this.nonExistSnapshotJobIds as any).validate === 'function') {
      (this.nonExistSnapshotJobIds as any).validate();
    }
    if(this.snapshotJobList && typeof (this.snapshotJobList as any).validate === 'function') {
      (this.snapshotJobList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

