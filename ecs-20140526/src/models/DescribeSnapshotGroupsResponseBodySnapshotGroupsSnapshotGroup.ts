// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshots } from "./DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshots";
import { DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupTags } from "./DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupTags";


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

