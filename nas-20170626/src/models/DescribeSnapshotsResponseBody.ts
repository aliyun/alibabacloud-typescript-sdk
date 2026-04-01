// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsResponseBodySnapshotsSnapshot extends $dara.Model {
  completedTime?: string;
  createTime?: string;
  description?: string;
  encryptType?: number;
  fileSystemType?: string;
  progress?: string;
  remainTime?: number;
  retentionDays?: number;
  snapshotId?: string;
  snapshotName?: string;
  snapshotType?: string;
  sourceFileSystemId?: string;
  sourceFileSystemSize?: number;
  sourceFileSystemVersion?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createTime: 'CreateTime',
      description: 'Description',
      encryptType: 'EncryptType',
      fileSystemType: 'FileSystemType',
      progress: 'Progress',
      remainTime: 'RemainTime',
      retentionDays: 'RetentionDays',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceFileSystemId: 'SourceFileSystemId',
      sourceFileSystemSize: 'SourceFileSystemSize',
      sourceFileSystemVersion: 'SourceFileSystemVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      createTime: 'string',
      description: 'string',
      encryptType: 'number',
      fileSystemType: 'string',
      progress: 'string',
      remainTime: 'number',
      retentionDays: 'number',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceFileSystemId: 'string',
      sourceFileSystemSize: 'number',
      sourceFileSystemVersion: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
  snapshot?: DescribeSnapshotsResponseBodySnapshotsSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': DescribeSnapshotsResponseBodySnapshotsSnapshot },
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

export class DescribeSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  snapshots?: DescribeSnapshotsResponseBodySnapshots;
  /**
   * @remarks
   * The total number of snapshots returned.
   * 
   * @example
   * 36
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshots: DescribeSnapshotsResponseBodySnapshots,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snapshots && typeof (this.snapshots as any).validate === 'function') {
      (this.snapshots as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

