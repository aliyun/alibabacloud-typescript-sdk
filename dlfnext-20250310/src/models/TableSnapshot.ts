// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Snapshot } from "./Snapshot";


export class TableSnapshot extends $dara.Model {
  fileCount?: number;
  fileSizeInBytes?: number;
  lastFileCreationTime?: number;
  recordCount?: number;
  snapshot?: Snapshot;
  totalBuckets?: number;
  static names(): { [key: string]: string } {
    return {
      fileCount: 'fileCount',
      fileSizeInBytes: 'fileSizeInBytes',
      lastFileCreationTime: 'lastFileCreationTime',
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

