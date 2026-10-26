// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCSnapshotsResponseBodySnapshotsTag extends $dara.Model {
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testRC
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag key.
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
   * Specifies whether the snapshot can be used to create cloud disks, roll back cloud disks, and share snapshots. Valid values:
   * - true: The snapshot is available.
   * - false: The snapshot is unavailable.
   * 
   * @example
   * true
   */
  available?: boolean;
  /**
   * @remarks
   * The snapshot category. Valid values:
   * - Standard: Standard snapshot.
   * - Flash: Local snapshot. This value will be deprecated. Local snapshots are replaced by the instant access feature.
   * - archive: Archive snapshot.
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format in accordance with the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard. The time is displayed in UTC.
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
   * Specifies whether the snapshot is encrypted. Valid values:
   * - true: The snapshot is encrypted.
   * - false: The snapshot is not encrypted.
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
  /**
   * @remarks
   * The last modified time of the snapshot. The time is displayed in the yyyy-MM-ddTHH:mm:ssZ format in accordance with the ISO 8601 standard. The time is displayed in UTC.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The creation progress of the snapshot, in percentage.
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
   * csw-37-system cloud disk
   */
  snapshotName?: string;
  /**
   * @remarks
   * The automatic creation type. Valid values:
   * - auto or timer: Automatic snapshot.
   * - user: Manual snapshot.
   * - all: All automatic creation types.
   * 
   * @example
   * auto
   */
  snapshotType?: string;
  /**
   * @remarks
   * The ID of the source cloud disk. If the source cloud disk of the snapshot has been released, this field is still retained.
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
   * - SYSTEM: System cloud disk.
   * - DATA: Data cloud disk.
   * 
   * @example
   * data
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The category of the source cloud disk.
   * 
   * > This parameter will be deprecated. To improve compatibility, use other parameters.
   * 
   * @example
   * disk
   */
  sourceStorageType?: string;
  /**
   * @remarks
   * The snapshot status. Valid values:
   * - progressing: snapshot being created
   * - accomplished: successfully created snapshot
   * - failed: snapshot that failed to be created
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
   * The usage of the snapshot. Valid values:
   * - image: The snapshot is used to create a custom image.
   * - disk: The snapshot is used to create a cloud disk.
   * - image_disk: The snapshot is used to create a data cloud disk and a custom image.
   * - none: The snapshot is not used.
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
   * The list of snapshots.
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

