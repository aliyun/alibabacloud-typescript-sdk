// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2020-08-20 14:52:28
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ENS edge zone.
   * 
   * @example
   * cn-beijing-15
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The disk capacity. Unit: MiB.
   * 
   * @example
   * 40
   */
  size?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The display name of the snapshot. This field is returned if a display name was specified when the snapshot was created.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * The snapshot type.
   * 
   * @example
   * manual
   */
  snapshotType?: string;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - cloud_efficiency: ultra cloud disk.
   * - cloud_ssd: all-flash cloud disk.
   * - local_hdd: local HDD.
   * - local_ssd: local SSD.
   * 
   * @example
   * cloud_efficiency
   */
  sourceDiskCategory?: string;
  /**
   * @remarks
   * The ID of the source cloud disk. This field is retained even if the source cloud disk of the snapshot has been released.
   * 
   * @example
   * d-bp67acfmxazb4ph****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The disk property. Valid values:
   * 
   * - 1: system cloud disk.
   * - 2: data cloud disk.
   * 
   * @example
   * 1
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The ID of the source ENS edge zone.
   * 
   * @example
   * cn-hangzhou-27
   */
  sourceEnsRegionId?: string;
  /**
   * @remarks
   * The ID of the source snapshot.
   * 
   * @example
   * s-bpdfer893jfkdqe****
   */
  sourceSnapshotId?: string;
  /**
   * @remarks
   * The snapshot status. Valid values:
   * 
   * - creating: The snapshot is being created.
   * - available: The snapshot is available.
   * - deleting: The snapshot is being deleted.
   * - error: An error occurred.
   * 
   * @example
   * available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      size: 'Size',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceDiskCategory: 'SourceDiskCategory',
      sourceDiskId: 'SourceDiskId',
      sourceDiskType: 'SourceDiskType',
      sourceEnsRegionId: 'SourceEnsRegionId',
      sourceSnapshotId: 'SourceSnapshotId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      size: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceDiskCategory: 'string',
      sourceDiskId: 'string',
      sourceDiskType: 'string',
      sourceEnsRegionId: 'string',
      sourceSnapshotId: 'string',
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

export class DescribeSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the current query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query.
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
   * 9635ED2E-3103-1606-84D4-9F8E816B19F9
   */
  requestId?: string;
  /**
   * @remarks
   * The collection of snapshot details.
   */
  snapshots?: DescribeSnapshotsResponseBodySnapshots[];
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
      snapshots: { 'type': 'array', 'itemType': DescribeSnapshotsResponseBodySnapshots },
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

