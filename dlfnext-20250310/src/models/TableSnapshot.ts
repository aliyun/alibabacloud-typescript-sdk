// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Snapshot } from "./Snapshot";


export class TableSnapshot extends $dara.Model {
  /**
   * @remarks
   * The number of files.
   * 
   * @example
   * 63
   */
  fileCount?: number;
  /**
   * @remarks
   * The file size.
   * 
   * @example
   * 645631581
   */
  fileSizeInBytes?: number;
  /**
   * @remarks
   * The creation time of the latest file.
   * 
   * @example
   * 1761704112024
   */
  lastFileCreationTime?: number;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 10
   */
  partitionCount?: number;
  /**
   * @remarks
   * The number of records.
   * 
   * @example
   * 16627
   */
  recordCount?: number;
  /**
   * @remarks
   * The name of the snapshot.
   */
  snapshot?: Snapshot;
  /**
   * @remarks
   * The total number of buckets.
   * 
   * @example
   * 64
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

