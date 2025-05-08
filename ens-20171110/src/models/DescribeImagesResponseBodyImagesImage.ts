// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagesResponseBodyImagesImageDiskDeviceMappings } from "./DescribeImagesResponseBodyImagesImageDiskDeviceMappings";


export class DescribeImagesResponseBodyImagesImage extends $dara.Model {
  /**
   * @remarks
   * The architecture of the image. Example: **x86_64**.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The time when the image was created. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2017-12-08T12:10:03Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The mappings between the disk and the snapshot in the image.
   */
  diskDeviceMappings?: DescribeImagesResponseBodyImagesImageDiskDeviceMappings;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * centos_6_08_64_20G_alibase_2017****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * Ubuntu_16.04
   */
  imageName?: string;
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * *   system: Alibaba Cloud public images
   * *   self: your custom images
   * *   others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts
   * 
   * @example
   * system
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The size of the image. Unit: GiB.
   * 
   * @example
   * 40
   */
  imageSize?: string;
  /**
   * @remarks
   * The operating system type of the image. Valid values:
   * 
   * *   Linux
   * *   Windows
   * 
   * @example
   * centos
   */
  platform?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * mock-clone_snapshot_id
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      diskDeviceMappings: 'DiskDeviceMappings',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageSize: 'ImageSize',
      platform: 'Platform',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      creationTime: 'string',
      diskDeviceMappings: DescribeImagesResponseBodyImagesImageDiskDeviceMappings,
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      imageSize: 'string',
      platform: 'string',
      regionId: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    if(this.diskDeviceMappings && typeof (this.diskDeviceMappings as any).validate === 'function') {
      (this.diskDeviceMappings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

