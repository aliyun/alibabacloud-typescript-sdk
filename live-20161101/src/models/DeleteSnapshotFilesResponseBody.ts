// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotFilesResponseBodySnapshotDeleteInfoListSnapshotDeleteInfo extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the snapshot was captured. Unit: milliseconds.
   * 
   * @example
   * 1653641526637
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The processing result of the snapshot. Valid values:
   * 
   * *   **OK**: The snapshot was deleted.
   * *   **FileNotFound**: The snapshot was not found.
   * 
   * @example
   * OK
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotFilesResponseBodySnapshotDeleteInfoList extends $dara.Model {
  snapshotDeleteInfo?: DeleteSnapshotFilesResponseBodySnapshotDeleteInfoListSnapshotDeleteInfo[];
  static names(): { [key: string]: string } {
    return {
      snapshotDeleteInfo: 'SnapshotDeleteInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotDeleteInfo: { 'type': 'array', 'itemType': DeleteSnapshotFilesResponseBodySnapshotDeleteInfoListSnapshotDeleteInfo },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotDeleteInfo)) {
      $dara.Model.validateArray(this.snapshotDeleteInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of snapshots that failed to be deleted.
   * 
   * @example
   * 1
   */
  failureCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90F60327-ABEC-5A93-BF1F-****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the snapshots.
   */
  snapshotDeleteInfoList?: DeleteSnapshotFilesResponseBodySnapshotDeleteInfoList;
  /**
   * @remarks
   * The number of successful screenshot deletions.
   * 
   * @example
   * 1
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failureCount: 'FailureCount',
      requestId: 'RequestId',
      snapshotDeleteInfoList: 'SnapshotDeleteInfoList',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureCount: 'number',
      requestId: 'string',
      snapshotDeleteInfoList: DeleteSnapshotFilesResponseBodySnapshotDeleteInfoList,
      successCount: 'number',
    };
  }

  validate() {
    if(this.snapshotDeleteInfoList && typeof (this.snapshotDeleteInfoList as any).validate === 'function') {
      (this.snapshotDeleteInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

