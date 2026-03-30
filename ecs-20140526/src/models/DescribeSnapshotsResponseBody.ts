// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsResponseBodySnapshotsSnapshotTagsTag extends $dara.Model {
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
  available?: boolean;
  category?: string;
  creationTime?: string;
  description?: string;
  encrypted?: boolean;
  /**
   * @example
   * 65535
   */
  fullSnapshotSizeInBytes?: number;
  instantAccess?: boolean;
  instantAccessRetentionDays?: number;
  KMSKeyId?: string;
  lastModifiedTime?: string;
  productCode?: string;
  progress?: string;
  regionId?: string;
  remainTime?: number;
  resourceGroupId?: string;
  retentionDays?: number;
  snapshotId?: string;
  snapshotLinkId?: string;
  snapshotName?: string;
  snapshotSN?: string;
  snapshotType?: string;
  sourceDiskId?: string;
  sourceDiskSize?: string;
  sourceDiskType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  sourceRegionId?: string;
  /**
   * @example
   * s-bp67acfmxazb4p****
   */
  sourceSnapshotId?: string;
  sourceStorageType?: string;
  status?: string;
  tags?: DescribeSnapshotsResponseBodySnapshotsSnapshotTags;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      category: 'Category',
      creationTime: 'CreationTime',
      description: 'Description',
      encrypted: 'Encrypted',
      fullSnapshotSizeInBytes: 'FullSnapshotSizeInBytes',
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
      fullSnapshotSizeInBytes: 'number',
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
  snapshots?: DescribeSnapshotsResponseBodySnapshots;
  /**
   * @remarks
   * The total number of snapshots.
   * 
   * > When using the `MaxResults` and `NextToken` parameters for a paginated query, the returned `TotalCount` parameter value is invalid.
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

