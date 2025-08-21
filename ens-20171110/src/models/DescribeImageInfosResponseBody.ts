// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageInfosResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The format of the image.
   * 
   * @example
   * The format of the image.
   * raw
   * qcow2
   */
  format?: string;
  /**
   * @remarks
   * The size of the image. Unit: GB.
   * 
   * @example
   * 100
   */
  size?: string;
  /**
   * @remarks
   * The type of the disk. Valid values: System and Data.
   * 
   * @example
   * Data
   */
  type?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * i-test
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      size: 'Size',
      type: 'Type',
      imageId: 'imageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      size: 'string',
      type: 'string',
      imageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponseBodyImagesImageDiskDeviceMappings extends $dara.Model {
  diskDeviceMapping?: DescribeImageInfosResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping[];
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': DescribeImageInfosResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping },
    };
  }

  validate() {
    if(Array.isArray(this.diskDeviceMapping)) {
      $dara.Model.validateArray(this.diskDeviceMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeImageInfosResponseBodyImages extends $dara.Model {
  image?: DescribeImageInfosResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeImageInfosResponseBodyImagesImage },
    };
  }

  validate() {
    if(Array.isArray(this.image)) {
      $dara.Model.validateArray(this.image);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The information about images.
   */
  images?: DescribeImageInfosResponseBodyImages;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5568A08C-10A9-47F3-902F-647298B463FB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeImageInfosResponseBodyImages,
      requestId: 'string',
    };
  }

  validate() {
    if(this.images && typeof (this.images as any).validate === 'function') {
      (this.images as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

