// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshotTagsTag extends $dara.Model {
  key?: string;
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
  available?: boolean;
  instantAccess?: boolean;
  instantAccessRetentionDays?: number;
  progress?: string;
  snapshotId?: string;
  sourceDiskId?: string;
  sourceDiskType?: string;
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
  key?: string;
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
  creationTime?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  progressStatus?: string;
  resourceGroupId?: string;
  snapshotGroupId?: string;
  snapshots?: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshots;
  status?: string;
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

