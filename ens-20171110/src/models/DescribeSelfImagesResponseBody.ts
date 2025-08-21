// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSelfImagesResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
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
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 100
   */
  size?: string;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   system: system disk.
   * *   data: data disk.
   * 
   * @example
   * Data
   */
  type?: string;
  /**
   * @remarks
   * The ID of image.
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

export class DescribeSelfImagesResponseBodyImagesImageDiskDeviceMappings extends $dara.Model {
  diskDeviceMapping?: DescribeSelfImagesResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping[];
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': DescribeSelfImagesResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping },
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

export class DescribeSelfImagesResponseBodyImagesImage extends $dara.Model {
  /**
   * @remarks
   * The image architecture. Valid values:
   * 
   * *   i386
   * *   x86_64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * Computing type. ens_vm/ens: x86 computing. bare_metal: x86 bare machine or x86 bare metal. arm_vm: ARM computing. arm_bare_metal: ARM bare machine or ARM bare metal. pcfarm: heterogeneous computing.
   * 
   * @example
   * ens_vm
   */
  computeType?: string;
  /**
   * @remarks
   * The image creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-08T12:10:03Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The mappings between the disk and the snapshot in the image.
   */
  diskDeviceMappings?: DescribeSelfImagesResponseBodyImagesImageDiskDeviceMappings;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * centos_6_08_64_20G_a****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * centos_6_08_64_20G_a****
   */
  imageName?: string;
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * *   **others**: a custom image that is shared by other Alibaba Cloud accounts.
   * *   **self**: your own custom image.
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
   * 20
   */
  imageSize?: string;
  /**
   * @remarks
   * The size of the image storage.
   * 
   * @example
   * 400
   */
  imageStorageSize?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-5iqczfxps7csjrxeca****
   */
  instanceId?: string;
  /**
   * @remarks
   * The operating system version.
   * 
   * @example
   * 7.2
   */
  osVersion?: string;
  /**
   * @remarks
   * The platform.
   * 
   * *   centos
   * *   ubuntu
   * *   alios
   * *   debian
   * *   rhel
   * *   windows
   * 
   * @example
   * centos
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * sp-5yt3bdedxzdz6t6uuw****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The state of the image.
   * 
   * *   Creating.
   * *   Packing.
   * *   Uploading.
   * *   Pack_failed.
   * *   Upload_failed.
   * *   Available: Only images in the Available state can be used and operated.
   * *   Unavailable.
   * *   Copying.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      computeType: 'ComputeType',
      creationTime: 'CreationTime',
      diskDeviceMappings: 'DiskDeviceMappings',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageSize: 'ImageSize',
      imageStorageSize: 'ImageStorageSize',
      instanceId: 'InstanceId',
      osVersion: 'OsVersion',
      platform: 'Platform',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      computeType: 'string',
      creationTime: 'string',
      diskDeviceMappings: DescribeSelfImagesResponseBodyImagesImageDiskDeviceMappings,
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      imageSize: 'string',
      imageStorageSize: 'string',
      instanceId: 'string',
      osVersion: 'string',
      platform: 'string',
      regionId: 'string',
      snapshotId: 'string',
      status: 'string',
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

export class DescribeSelfImagesResponseBodyImages extends $dara.Model {
  image?: DescribeSelfImagesResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeSelfImagesResponseBodyImagesImage },
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

export class DescribeSelfImagesResponseBody extends $dara.Model {
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
   * The image information.
   */
  images?: DescribeSelfImagesResponseBodyImages;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A8B8EB73-B4FD-4262-8EF6-680DF39C9BA0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeSelfImagesResponseBodyImages,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
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

