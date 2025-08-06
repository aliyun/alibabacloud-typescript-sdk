// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotsResponseBodyMediaSnapshotSnapshotsSnapshot extends $dara.Model {
  /**
   * @remarks
   * The index of the snapshot.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The URL of the snapshot.
   * 
   * @example
   * http://example.aliyundoc.com/snapshot/sample00001****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBodyMediaSnapshotSnapshots extends $dara.Model {
  snapshot?: ListSnapshotsResponseBodyMediaSnapshotSnapshotsSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': ListSnapshotsResponseBodyMediaSnapshotSnapshotsSnapshot },
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

export class ListSnapshotsResponseBodyMediaSnapshot extends $dara.Model {
  /**
   * @remarks
   * The time when the snapshot job was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-20T12:23:45Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the snapshot job.
   * 
   * @example
   * ad90a501b1b9472374ad005046****
   */
  jobId?: string;
  /**
   * @remarks
   * The rule used to generate snapshot URLs.
   * 
   * @example
   * http://example.aliyundoc.com/snapshot/sample{SnapshotCount}.jpg
   */
  regular?: string;
  /**
   * @remarks
   * The details of the snapshot.
   */
  snapshots?: ListSnapshotsResponseBodyMediaSnapshotSnapshots;
  /**
   * @remarks
   * The total number of snapshots.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      jobId: 'JobId',
      regular: 'Regular',
      snapshots: 'Snapshots',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      jobId: 'string',
      regular: 'string',
      snapshots: ListSnapshotsResponseBodyMediaSnapshotSnapshots,
      total: 'number',
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

export class ListSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the snapshot.
   */
  mediaSnapshot?: ListSnapshotsResponseBodyMediaSnapshot;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaSnapshot: 'MediaSnapshot',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaSnapshot: ListSnapshotsResponseBodyMediaSnapshot,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaSnapshot && typeof (this.mediaSnapshot as any).validate === 'function') {
      (this.mediaSnapshot as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

