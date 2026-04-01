// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageInfosResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
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
  computeType?: string;
  description?: string;
  diskDeviceMappings?: DescribeImageInfosResponseBodyImagesImageDiskDeviceMappings;
  imageId?: string;
  imageSize?: string;
  imageVersion?: string;
  OSName?: string;
  OSType?: string;
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

