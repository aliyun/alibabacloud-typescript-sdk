// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-08-20T14:52:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the snapshot.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-beijing-15
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The capacity of the disk. Unit: MiB.
   * 
   * @example
   * 40
   */
  size?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The name of the snapshot. This parameter is returned only if a snapshot name was specified when the snapshot was created.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * The type of the disk. Valid value:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: all-flash disk
   * *   local_hdd: local HDD
   * *   local_ssd: local SSD
   * 
   * @example
   * cloud_efficiency
   */
  sourceDiskCategory?: string;
  /**
   * @remarks
   * The ID of the source disk. This parameter is retained even after the source disk for which the snapshot was created is released.
   * 
   * @example
   * d-bp67acfmxazb4ph****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The type of the disk. Valid value:
   * 
   * *   1: system disk
   * *   2: data disk
   * 
   * @example
   * 1
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The ID of the source edge node.
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
   * The status of the snapshot. Valid value:
   * 
   * *   creating: The snapshot is being created.
   * *   Available: The snapshot is available.
   * *   deleting: The snapshot is being deleted.
   * *   error: An error occurred on the snapshot.
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
   * The page number of the returned page.
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
   * 9635ED2E-3103-1606-84D4-9F8E816B19F9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the snapshots.
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

