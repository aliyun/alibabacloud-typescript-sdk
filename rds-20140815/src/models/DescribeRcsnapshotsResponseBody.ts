// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCSnapshotsResponseBodySnapshotsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testRC
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test01
   */
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
   * Indicates whether the snapshot can be used to create cloud disks, roll back cloud disks, or share snapshots. Valid values:
   * - true: Available.
   * - false: Not available.
   * 
   * @example
   * true
   */
  available?: boolean;
  /**
   * @remarks
   * The snapshot type. Valid values:
   * - Standard: standard snapshot.
   * - Flash: local snapshot. This value will be deprecated. Local snapshots have been replaced by the instant access feature.
   * - archive: archived snapshot.
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
   * The description of the snapshot.
   * 
   * @example
   * zd_test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the snapshot is encrypted. Valid values:
   * - true: Encrypted.
   * - false: Not encrypted.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * none
   */
  instantAccess?: boolean;
  lastModifiedTime?: string;
  /**
   * @remarks
   * The progress of snapshot creation, in percentage.
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
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rc-t8q22a87745hf8****
   */
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
   * csw-37-SystemDisk
   */
  snapshotName?: string;
  /**
   * @remarks
   * The type of automatic creation. Valid values:
   * - auto or timer: automatic snapshot.
   * - user: manual snapshot.
   * - all: all automatic creation types.
   * 
   * @example
   * auto
   */
  snapshotType?: string;
  /**
   * @remarks
   * The ID of the source cloud disk. This field is retained even if the source cloud disk of the snapshot has been released.
   * 
   * @example
   * rcd-bp67acfmxazb4ph****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The capacity of the source cloud disk. Unit: GiB.
   * 
   * @example
   * 60
   */
  sourceDiskSize?: number;
  /**
   * @remarks
   * The type of the source cloud disk. Valid values:
   * - SYSTEM: system cloud disk.
   * - DATA: data cloud disk.
   * 
   * @example
   * data
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The type of the source cloud disk.
   * 
   * >This parameter will be deprecated. To ensure compatibility, use other parameters instead.
   * 
   * @example
   * disk
   */
  sourceStorageType?: string;
  /**
   * @remarks
   * The snapshot status. Valid values:
   * - progressing: The snapshot is being created.
   * - accomplished: The snapshot is created.
   * - failed: The snapshot failed to be created.
   * 
   * @example
   * progressing
   */
  status?: string;
  /**
   * @remarks
   * The tag details.
   */
  tag?: DescribeRCSnapshotsResponseBodySnapshotsTag[];
  /**
   * @remarks
   * Indicates whether the snapshot has been used to create images or cloud disks. Valid values:
   * - image: The snapshot has been used to create custom images.
   * - disk: The snapshot has been used to create cloud disks.
   * - image_disk: The snapshot has been used to create both data cloud disks and custom images.
   * - none: The snapshot has not been used.
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
      lastModifiedTime: 'LastModifiedTime',
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
      lastModifiedTime: 'string',
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
   * The number of entries per page.
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
   * The snapshot information.
   */
  snapshots?: DescribeRCSnapshotsResponseBodySnapshots[];
  /**
   * @remarks
   * The total number of entries.
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

