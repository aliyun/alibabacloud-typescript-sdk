// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSelfImagesResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
  format?: string;
  size?: string;
  type?: string;
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
  architecture?: string;
  computeType?: string;
  creationTime?: string;
  diskDeviceMappings?: DescribeSelfImagesResponseBodyImagesImageDiskDeviceMappings;
  imageId?: string;
  imageName?: string;
  imageOwnerAlias?: string;
  imageSize?: string;
  imageStorageSize?: string;
  instanceId?: string;
  osVersion?: string;
  platform?: string;
  regionId?: string;
  snapshotId?: string;
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

