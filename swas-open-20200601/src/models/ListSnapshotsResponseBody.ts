// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotsResponseBodySnapshotsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the snapshot.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The time when the snapshot was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-09T07:12:49Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The instance ID of the simple application server.
   * 
   * Note: This field has a value for system cloud disk snapshots and is empty for data cloud disk snapshots.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The progress of snapshot creation.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the snapshot.
   * 
   * @example
   * test-Remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the snapshot belongs.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The time of the most recent rollback. The time is in the UTC (Z) time zone in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2021-03-09T07:12:49Z
   */
  rollbackTime?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-bp16oazlsold4dks****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The snapshot name.
   * 
   * @example
   * test-SnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * The ID of the source disk. This value is retained even if the source disk of the snapshot has been released.
   * 
   * @example
   * d-bp14wq0149cpp2xy****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The type of the source disk for the snapshot. Valid values:
   * - System: system cloud disk.
   * - Data: data cloud disk.
   * 
   * @example
   * System
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The snapshot status. Valid values:
   * 
   * - progressing: The snapshot is being created.
   * - accomplished: The snapshot is created.
   * - failed: The snapshot failed to be created.
   * - disabled: Rollback is not supported.
   * 
   * @example
   * Accomplished
   */
  status?: string;
  /**
   * @remarks
   * The tags of the snapshot.
   */
  tags?: ListSnapshotsResponseBodySnapshotsTags[];
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      instanceId: 'InstanceId',
      progress: 'Progress',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      rollbackTime: 'RollbackTime',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      sourceDiskId: 'SourceDiskId',
      sourceDiskType: 'SourceDiskType',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      instanceId: 'string',
      progress: 'string',
      regionId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      rollbackTime: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      sourceDiskId: 'string',
      sourceDiskType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListSnapshotsResponseBodySnapshotsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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
   * The page number of the snapshot list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
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
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot information.
   */
  snapshots?: ListSnapshotsResponseBodySnapshots[];
  /**
   * @remarks
   * The total number of snapshots.
   * 
   * @example
   * 1
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
      snapshots: { 'type': 'array', 'itemType': ListSnapshotsResponseBodySnapshots },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

