// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the snapshot. The description can be up to 128 characters in length.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****"
   */
  desktopId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the snapshot. The name must be 2 to 127 characters in length. The name must start with a letter. The name can contain letters, digits, underscores (_), and hyphens (-). The name cannot start with `auto` because snapshots whose names start with auto are recognized as automatic snapshots.
   * 
   * This parameter is required.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * The type of the disk for which you want to create a snapshot.
   * 
   * Valid values:
   * 
   * *   system: system disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   data: data disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * system
   */
  sourceDiskType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      snapshotName: 'SnapshotName',
      sourceDiskType: 'SourceDiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      desktopId: 'string',
      regionId: 'string',
      snapshotName: 'string',
      sourceDiskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

