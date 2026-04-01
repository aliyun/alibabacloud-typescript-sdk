// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCImageListResponseBodyImagesDiskDeviceMappings extends $dara.Model {
  device?: string;
  size?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      size: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCImageListResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The image architecture. Valid values:
   * 
   * *   x86_64
   * *   arm64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2024-04-25T02:17:40Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * test
   */
  description?: string;
  diskDeviceMappings?: DescribeRCImageListResponseBodyImagesDiskDeviceMappings[];
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-2oqiu973jwcxe****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Created_from_i-2zeh17y17sz677x****
   */
  imageName?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 2
   */
  imageVersion?: string;
  /**
   * @remarks
   * Indicates whether the image is a public image. Public images include public images provided by Alibaba Cloud and custom images published as community images.
   * 
   * *   **true**: The image is a public image.
   * *   **false**: The image is not a public image.
   * 
   * @example
   * false
   */
  isPublic?: boolean;
  isSupportRdsCustom?: boolean;
  /**
   * @remarks
   * The display name of the operating system in Chinese.
   */
  OSName?: string;
  /**
   * @remarks
   * The display name of the operating system in English.
   * 
   * @example
   * Alibaba Cloud Linux  2.1903 LTS 64 bit Quick Boot
   */
  OSNameEn?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   **windows**
   * *   **linux**
   * 
   * @example
   * linux
   */
  OSType?: string;
  platform?: string;
  /**
   * @remarks
   * The image size. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The image status. Valid values:
   * 
   * *   **Unavailable**
   * *   **Available**
   * *   **Creating**
   * *   **CreateFailed**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the image is used by the RDS Custom instance. Valid values:
   * 
   * *   **instance**: The image is used to create one or more RDS Custom instances.
   * *   **none**: The image is not used to create RDS Custom instances.
   * 
   * @example
   * instance
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      description: 'Description',
      diskDeviceMappings: 'DiskDeviceMappings',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageVersion: 'ImageVersion',
      isPublic: 'IsPublic',
      isSupportRdsCustom: 'IsSupportRdsCustom',
      OSName: 'OSName',
      OSNameEn: 'OSNameEn',
      OSType: 'OSType',
      platform: 'Platform',
      size: 'Size',
      status: 'Status',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      creationTime: 'string',
      description: 'string',
      diskDeviceMappings: { 'type': 'array', 'itemType': DescribeRCImageListResponseBodyImagesDiskDeviceMappings },
      imageId: 'string',
      imageName: 'string',
      imageVersion: 'string',
      isPublic: 'boolean',
      isSupportRdsCustom: 'boolean',
      OSName: 'string',
      OSNameEn: 'string',
      OSType: 'string',
      platform: 'string',
      size: 'number',
      status: 'string',
      usage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskDeviceMappings)) {
      $dara.Model.validateArray(this.diskDeviceMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCImageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the images.
   */
  images?: DescribeRCImageListResponseBodyImages[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2553A660-E4EB-4AF4-A402-8AFF70A49143
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of images.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': DescribeRCImageListResponseBodyImages },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

