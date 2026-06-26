// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Snapshot } from "./Snapshot";


export class TableSnapshot extends $dara.Model {
  /**
   * @remarks
   * The total number of files in the snapshot.
   */
  fileCount?: number;
  /**
   * @remarks
   * The total size of all files in the snapshot, in bytes.
   */
  fileSizeInBytes?: number;
  /**
   * @remarks
   * The creation time of the most recent file in the snapshot, as a Unix timestamp in milliseconds.
   */
  lastFileCreationTime?: number;
  /**
   * @remarks
   * The total number of partitions in the table.
   */
  partitionCount?: number;
  /**
   * @remarks
   * The total number of records in the snapshot.
   */
  recordCount?: number;
  /**
   * @remarks
   * Contains detailed information about the snapshot.
   */
  snapshot?: Snapshot;
  /**
   * @remarks
   * The total number of buckets in the table.
   */
  totalBuckets?: number;
  static names(): { [key: string]: string } {
    return {
      fileCount: 'fileCount',
      fileSizeInBytes: 'fileSizeInBytes',
      lastFileCreationTime: 'lastFileCreationTime',
      partitionCount: 'partitionCount',
      recordCount: 'recordCount',
      snapshot: 'snapshot',
      totalBuckets: 'totalBuckets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCount: 'number',
      fileSizeInBytes: 'number',
      lastFileCreationTime: 'number',
      partitionCount: 'number',
      recordCount: 'number',
      snapshot: Snapshot,
      totalBuckets: 'number',
    };
  }

  validate() {
    if(this.snapshot && typeof (this.snapshot as any).validate === 'function') {
      (this.snapshot as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

