// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsResponseBodySnapshotsSnapshotTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the snapshot.
   * 
   * @example
   * TestValue
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

export class DescribeSnapshotsResponseBodySnapshotsSnapshotTags extends $dara.Model {
  tag?: DescribeSnapshotsResponseBodySnapshotsSnapshotTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSnapshotsResponseBodySnapshotsSnapshotTagsTag },
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

export class DescribeSnapshotsResponseBodySnapshotsSnapshot extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the snapshot can be shared and be used to create or roll back a cloud disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  available?: boolean;
  /**
   * @remarks
   * The category of the snapshot. Valid values:
   * 
   * *   Standard: standard snapshot.
   * *   Flash: local snapshot. This value will be deprecated. The local snapshot feature is replaced by the instant access feature.
   * *   archive: archive snapshot.
   * 
   * @example
   * standard
   */
  category?: string;
  /**
   * @remarks
   * The time when the snapshot was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
   * Indicates whether the snapshot was encrypted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * Indicates whether the instant access feature is enabled. Valid values:
   * 
   * *   true: The instant access feature is enabled. By default, the instant access feature is enabled for Enterprise SSDs (ESSDs) and ESSD Entry disks.
   * *   false: The instant access feature is disabled. The snapshot is a standard snapshot for which the instant access feature is disabled.
   * 
   * >  This parameter is deprecated. By default, new standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](https://help.aliyun.com/document_detail/193667.html).
   * 
   * @example
   * false
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * Indicates the validity period of the instant access feature. When the validity period ends, the instant access feature is automatically disabled.
   * 
   * By default, the value of this parameter is the same as the value of `RetentionDays`.
   * 
   * >  This parameter is deprecated. By default, new standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](https://help.aliyun.com/document_detail/193667.html).
   * 
   * @example
   * 30
   */
  instantAccessRetentionDays?: number;
  /**
   * @remarks
   * The ID of the KMS key used for the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The time when the snapshot was last modified. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-08-25T14:18:09Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The product code of the Alibaba Cloud Marketplace image.
   * 
   * @example
   * jxsc000****
   */
  productCode?: string;
  /**
   * @remarks
   * The progress of the snapshot creation task. Unit: percent (%).
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The region ID of the snapshot.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The amount of remaining time required to create the snapshot. Unit: seconds.
   * 
   * @example
   * 38
   */
  remainTime?: number;
  /**
   * @remarks
   * The ID of the resource group to which the snapshot belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The retention period of the automatic snapshot. Unit: days.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
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
   * The ID of the snapshot chain that is associated with the snapshot.
   * 
   * @example
   * sl-bp1grgphbcc9brb5****
   */
  snapshotLinkId?: string;
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
   * The serial number of the snapshot.
   * 
   * @example
   * 64472-116742336-61976****
   */
  snapshotSN?: string;
  /**
   * @remarks
   * The type of the snapshot. Valid values:
   * 
   * *   auto or timer: automatic snapshot
   * *   user: manual snapshot
   * *   all: all snapshot types
   * 
   * @example
   * all
   */
  snapshotType?: string;
  /**
   * @remarks
   * The ID of the source disk. This parameter is retained even after the source disk is released.
   * 
   * @example
   * d-bp67acfmxazb4ph****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The capacity of the source disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  sourceDiskSize?: string;
  /**
   * @remarks
   * The type of the source disk. Valid values:
   * 
   * *   system
   * *   data
   * 
   * @example
   * system
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The region ID of the source snapshot.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The ID of the source snapshot.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  sourceSnapshotId?: string;
  /**
   * @remarks
   * The category of the source disk.
   * 
   * >  This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
   * 
   * @example
   * disk
   */
  sourceStorageType?: string;
  /**
   * @remarks
   * The status of the snapshot. Valid values:
   * 
   * *   progressing: The snapshot is being created.
   * *   accomplished: The snapshot is created.
   * *   failed: The snapshot failed to be created.
   * 
   * @example
   * accomplished
   */
  status?: string;
  /**
   * @remarks
   * The tags of the snapshot.
   */
  tags?: DescribeSnapshotsResponseBodySnapshotsSnapshotTags;
  /**
   * @remarks
   * Indicates whether the snapshot was used to create images or cloud disks. Valid values:
   * 
   * *   image: The snapshot was used to create custom images.
   * *   disk: The snapshot was used to create cloud disks.
   * *   image_disk: The snapshot was used to create custom images and data disks.
   * *   none: The snapshot was not used to create custom images or cloud disks.
   * 
   * @example
   * image
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
      instantAccessRetentionDays: 'InstantAccessRetentionDays',
      KMSKeyId: 'KMSKeyId',
      lastModifiedTime: 'LastModifiedTime',
      productCode: 'ProductCode',
      progress: 'Progress',
      regionId: 'RegionId',
      remainTime: 'RemainTime',
      resourceGroupId: 'ResourceGroupId',
      retentionDays: 'RetentionDays',
      snapshotId: 'SnapshotId',
      snapshotLinkId: 'SnapshotLinkId',
      snapshotName: 'SnapshotName',
      snapshotSN: 'SnapshotSN',
      snapshotType: 'SnapshotType',
      sourceDiskId: 'SourceDiskId',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      sourceRegionId: 'SourceRegionId',
      sourceSnapshotId: 'SourceSnapshotId',
      sourceStorageType: 'SourceStorageType',
      status: 'Status',
      tags: 'Tags',
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
      instantAccessRetentionDays: 'number',
      KMSKeyId: 'string',
      lastModifiedTime: 'string',
      productCode: 'string',
      progress: 'string',
      regionId: 'string',
      remainTime: 'number',
      resourceGroupId: 'string',
      retentionDays: 'number',
      snapshotId: 'string',
      snapshotLinkId: 'string',
      snapshotName: 'string',
      snapshotSN: 'string',
      snapshotType: 'string',
      sourceDiskId: 'string',
      sourceDiskSize: 'string',
      sourceDiskType: 'string',
      sourceRegionId: 'string',
      sourceSnapshotId: 'string',
      sourceStorageType: 'string',
      status: 'string',
      tags: DescribeSnapshotsResponseBodySnapshotsSnapshotTags,
      usage: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
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
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the snapshots.
   */
  snapshots?: DescribeSnapshotsResponseBodySnapshots;
  /**
   * @remarks
   * The total number of snapshots returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
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

