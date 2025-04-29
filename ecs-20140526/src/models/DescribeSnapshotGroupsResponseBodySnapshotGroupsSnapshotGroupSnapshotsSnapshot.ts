// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshotTags } from "./DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroupSnapshotsSnapshotTags";


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

