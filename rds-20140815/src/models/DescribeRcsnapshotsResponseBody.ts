// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCSnapshotsResponseBodySnapshotsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the snapshot can be shared and used to create or roll back a cloud disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  available?: boolean;
  /**
   * @remarks
   * The snapshot type. Valid values:
   * 
   * *   Standard: standard snapshot
   * *   Flash: local snapshot This value will be deprecated. The local snapshot feature is replaced with the instant access feature.
   * *   archive: archived snapshot
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * The creation time. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-10-18T09:37:14Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The snapshot description.
   * 
   * @example
   * zd_test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the snapshot was encrypted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * none
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * The progress of the snapshot creation task in percentage.
   * 
   * @example
   * 100
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
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * rcds-hc1zg51xobdg4****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The snapshot name.
   * 
   * @example
   * s-2ze8klip00xcogcwer76
   */
  snapshotName?: string;
  /**
   * @remarks
   * The snapshot type. Valid values:
   * 
   * *   auto or timer: automatically created snapshot
   * *   user: manually created snapshot
   * *   all: all snapshot types
   * 
   * @example
   * auto
   */
  snapshotType?: string;
  /**
   * @remarks
   * The ID of the original disk. This parameter is retained even after the original disk for which the snapshot was created is released.
   * 
   * @example
   * rcd-bp67acfmxazb4ph****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The storage capacity of the original disk. Unit: GiB.
   * 
   * @example
   * 60
   */
  sourceDiskSize?: number;
  /**
   * @remarks
   * The type of the original disk. Valid values:
   * 
   * *   SYSTEM: system disk
   * *   DATA: data disk
   * 
   * @example
   * data
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The type of the source disk.
   * 
   * >  This parameter will be removed in the future. To ensure future compatibility, we recommend that you use other parameters.
   * 
   * @example
   * disk
   */
  sourceStorageType?: string;
  /**
   * @remarks
   * The snapshot status. Valid values:
   * 
   * *   progressing: The snapshot is being created.
   * *   accomplished: The snapshot is created.
   * *   failed: The snapshot fails to be created.
   * 
   * @example
   * progressing
   */
  status?: string;
  tag?: DescribeRCSnapshotsResponseBodySnapshotsTag[];
  /**
   * @remarks
   * Indicates whether the snapshot is used to create custom images or disks. Valid values:
   * 
   * *   image: The snapshot is used to create custom images.
   * *   disk: The snapshot is used to create disks.
   * *   image_disk: The snapshot is used to create custom images and data disks.
   * *   none: The snapshot is not used to create custom images or disks.
   * 
   * @example
   * none
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      category: 'Category',
      creationTime: 'CreationTime',
      description: 'Description',
      encrypted: 'Encrypted',
      instantAccess: 'InstantAccess',
      progress: 'Progress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceDiskId: 'SourceDiskId',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      sourceStorageType: 'SourceStorageType',
      status: 'Status',
      tag: 'Tag',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      category: 'string',
      creationTime: 'string',
      description: 'string',
      encrypted: 'boolean',
      instantAccess: 'boolean',
      progress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceDiskId: 'string',
      sourceDiskSize: 'number',
      sourceDiskType: 'string',
      sourceStorageType: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeRCSnapshotsResponseBodySnapshotsTag },
      usage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCSnapshotsResponseBody extends $dara.Model {
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
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DAC759A-F4F0-5D02-8335-BC458C0CCB94
   */
  requestId?: string;
  /**
   * @remarks
   * The details of snapshots.
   */
  snapshots?: DescribeRCSnapshotsResponseBodySnapshots[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
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
      snapshots: { 'type': 'array', 'itemType': DescribeRCSnapshotsResponseBodySnapshots },
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

