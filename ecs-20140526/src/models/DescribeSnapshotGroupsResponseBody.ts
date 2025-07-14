// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshotTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot. The default values of Key and Value contain snapshot source information.
   * 
   * @example
   * acs:ecs:createFrom
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the snapshot. The default values of Key and Value contain snapshot source information.
   * 
   * @example
   * i-bp11qm0o3dk4iuc****
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

export class DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshotTags extends $dara.Model {
  tag?: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshotTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshotTagsTag },
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

export class DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshot extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the snapshot can be shared and be used to create or roll back a disk. Valid values:
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
   * Indicates whether the instant access feature is enabled. Valid values:
   * 
   * *   true: The instant access feature is enabled. By default, the instant access feature is enabled for ESSDs.
   * *   false: The instant access feature is disabled. The snapshot is a standard snapshot for which the instant access feature is disabled.
   * 
   * >  This parameter is no longer used. By default, standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](https://help.aliyun.com/document_detail/193667.html).
   * 
   * @example
   * true
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * The validity period of the instant access feature. When the validity period ends, the instant access snapshot is automatically released.
   * 
   * >  This parameter is no longer used. By default, standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](https://help.aliyun.com/document_detail/193667.html).
   * 
   * @example
   * 3
   */
  instantAccessRetentionDays?: number;
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
   * The ID of the snapshot.
   * 
   * @example
   * s-j6cbzmrlbf09w72q****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The ID of the source disk. This parameter is retained even after the source disk of the snapshot is released.
   * 
   * @example
   * d-j6c3ogynmvpi6wy7****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The type of the source disk. Valid values:
   * 
   * *   system: system disk
   * *   data: data disk
   * 
   * @example
   * system
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The tags of the snapshot. The default values contain snapshot source information.
   */
  tags?: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshotTags;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      instantAccess: 'InstantAccess',
      instantAccessRetentionDays: 'InstantAccessRetentionDays',
      progress: 'Progress',
      snapshotId: 'SnapshotId',
      sourceDiskId: 'SourceDiskId',
      sourceDiskType: 'SourceDiskType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      instantAccess: 'boolean',
      instantAccessRetentionDays: 'number',
      progress: 'string',
      snapshotId: 'string',
      sourceDiskId: 'string',
      sourceDiskType: 'string',
      tags: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshotTags,
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

export class DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshots extends $dara.Model {
  snapshot?: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshot },
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

export class DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot-consistent group.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the snapshot-consistent group.
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

export class DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupTags extends $dara.Model {
  tag?: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupTagsTag },
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

export class DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroup extends $dara.Model {
  /**
   * @remarks
   * The time when the snapshot-consistent group was created.
   * 
   * @example
   * 2021-03-23T10:58:48Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the snapshot-consistent group.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance to which the snapshot-consistent group belongs. This parameter has a value only when all disk snapshots in the snapshot-consistent group belong to the same instance. If disk snapshots in the snapshot-consistent group belong to different instances, you can check the response parameters that start with `Snapshots.Snapshot.Tags.` to determine the ID of the instance to which each snapshot in the snapshot-consistent group belongs.
   * 
   * @example
   * i-j6ca469urv8ei629****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the snapshot-consistent group.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  progressStatus?: string;
  /**
   * @remarks
   * The ID of the resource group to which the snapshot-consistent group belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the snapshot-consistent group.
   * 
   * @example
   * ssg-j6ciyh3k52qp7ovm****
   */
  snapshotGroupId?: string;
  /**
   * @remarks
   * The information about the snapshots in the snapshot-consistent group.
   */
  snapshots?: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshots;
  /**
   * @remarks
   * The state of the snapshot-consistent group. Valid values:
   * 
   * *   progressing: The snapshot-consistent group was being created.
   * *   accomplished: The snapshot-consistent group was created.
   * *   failed: The snapshot-consistent group failed to be created.
   * 
   * @example
   * accomplished
   */
  status?: string;
  /**
   * @remarks
   * The tags of the snapshot-consistent group.
   */
  tags?: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupTags;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      progressStatus: 'ProgressStatus',
      resourceGroupId: 'ResourceGroupId',
      snapshotGroupId: 'SnapshotGroupId',
      snapshots: 'Snapshots',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      progressStatus: 'string',
      resourceGroupId: 'string',
      snapshotGroupId: 'string',
      snapshots: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshots,
      status: 'string',
      tags: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupTags,
    };
  }

  validate() {
    if(this.snapshots && typeof (this.snapshots as any).validate === 'function') {
      (this.snapshots as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotGroupsResponseBodySnapshotGroups extends $dara.Model {
  snapshotGroup?: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroup[];
  static names(): { [key: string]: string } {
    return {
      snapshotGroup: 'SnapshotGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotGroup: { 'type': 'array', 'itemType': DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroup },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotGroup)) {
      $dara.Model.validateArray(this.snapshotGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * > If the return value is empty, no more data exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F9A4CC4-362F-469A-B9EF-B3204EF8AA3A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the snapshot-consistent groups.
   */
  snapshotGroups?: DescribeSnapshotGroupsResponseBodySnapshotGroups;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshotGroups: 'SnapshotGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      snapshotGroups: DescribeSnapshotGroupsResponseBodySnapshotGroups,
    };
  }

  validate() {
    if(this.snapshotGroups && typeof (this.snapshotGroups as any).validate === 'function') {
      (this.snapshotGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

