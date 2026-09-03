// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to clear personal user data. If this parameter is set to `true`, the created image clears data in all directories under `C:\\Users` except the `Administrator` and `Public` directories.
   * 
   * @example
   * false
   */
  autoCleanUserdata?: boolean;
  /**
   * @remarks
   * The list of data cloud disk snapshot IDs. To include data cloud disks when creating an image, specify the corresponding data cloud disk snapshot IDs. A maximum of 100 IDs are supported.
   * 
   * @example
   * ["s-bp67acfmxazb4ph****", "s-bp67acfmxazb5qh****"]
   */
  dataSnapshotIds?: string[];
  /**
   * @remarks
   * The description of the image. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The cloud computer ID.
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
   * The image name. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter or a Chinese character and cannot start with `http://` or `https://`.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * deprecated
   */
  imageResourceType?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-2zefuwk8l6ytcgd3bf4o
   */
  snapshotId?: string;
  /**
   * @remarks
   * The list of snapshot IDs.
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

