// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageRequest extends $dara.Model {
  /**
   * @remarks
   * Specify whether to clear user personal data. If set to `true`, the image clears all folders under `C:\\Users`, except `Administrator` and `Public`.
   * 
   * @example
   * false
   */
  autoCleanUserdata?: boolean;
  dataSnapshotIds?: string[];
  /**
   * @remarks
   * The description of the image. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The disk data included in the image.
   * 
   * @example
   * ALL
   */
  diskType?: string;
  /**
   * @remarks
   * The name of the image. The name must be 2 to 128 characters in length. It must start with a letter or Chinese character. It cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * This parameter is not available for use.
   * 
   * @example
   * deprecated
   */
  imageResourceType?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to view the list of regions that support WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * s-2zefuwk8l6ytcgd3bf4o
   */
  snapshotId?: string;
  /**
   * @remarks
   * A list of snapshot IDs.
   */
  snapshotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoCleanUserdata: 'AutoCleanUserdata',
      dataSnapshotIds: 'DataSnapshotIds',
      description: 'Description',
      desktopId: 'DesktopId',
      diskType: 'DiskType',
      imageName: 'ImageName',
      imageResourceType: 'ImageResourceType',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      snapshotIds: 'SnapshotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCleanUserdata: 'boolean',
      dataSnapshotIds: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      desktopId: 'string',
      diskType: 'string',
      imageName: 'string',
      imageResourceType: 'string',
      regionId: 'string',
      snapshotId: 'string',
      snapshotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataSnapshotIds)) {
      $dara.Model.validateArray(this.dataSnapshotIds);
    }
    if(Array.isArray(this.snapshotIds)) {
      $dara.Model.validateArray(this.snapshotIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

