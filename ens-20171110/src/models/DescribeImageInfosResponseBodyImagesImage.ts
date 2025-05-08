// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageInfosResponseBodyImagesImageDiskDeviceMappings } from "./DescribeImageInfosResponseBodyImagesImageDiskDeviceMappings";


export class DescribeImageInfosResponseBodyImagesImage extends $dara.Model {
  /**
   * @remarks
   * The computing type of the image. Valid values:
   * 
   * *   ens_vm: x86 computing.
   * *   arm_vm: ARM computing.
   * *   bare_metal: x86 bare machine.
   * *   pcfarm: heterogeneous computing.
   * 
   * @example
   * ens_vm
   */
  computeType?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * centos_6_08_64_20G_alibase_2017****
   */
  description?: string;
  /**
   * @remarks
   * The mappings between disks and snapshots in the image.
   */
  diskDeviceMappings?: DescribeImageInfosResponseBodyImagesImageDiskDeviceMappings;
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
   * The size of the image. Unit: GiB.
   * 
   * @example
   * 20
   */
  imageSize?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * 6.8
   */
  imageVersion?: string;
  /**
   * @remarks
   * The type of the image. Valid values: **centos**, **debian**, **ubuntu**, and **windows**.
   * 
   * @example
   * centos
   */
  OSName?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      computeType: 'ComputeType',
      description: 'Description',
      diskDeviceMappings: 'DiskDeviceMappings',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageVersion: 'ImageVersion',
      OSName: 'OSName',
      OSType: 'OSType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeType: 'string',
      description: 'string',
      diskDeviceMappings: DescribeImageInfosResponseBodyImagesImageDiskDeviceMappings,
      imageId: 'string',
      imageSize: 'string',
      imageVersion: 'string',
      OSName: 'string',
      OSType: 'string',
      regionId: 'string',
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

