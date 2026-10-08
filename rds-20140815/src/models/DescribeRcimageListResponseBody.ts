// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCImageListResponseBodyImagesDiskDeviceMappings extends $dara.Model {
  /**
   * @remarks
   * The device information of the cloud disk, such as `/dev/xvdb`.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The size of the cloud disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: string;
  /**
   * @remarks
   * The type of the cloud disk.
   * 
   * - **system**: System cloud disk.
   * - **data**: Data cloud disk.
   * 
   * @example
   * system
   */
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
   * The system architecture of the image. Valid values:
   * 
   * - x86_64.
   * - arm64.
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
  /**
   * @remarks
   * The mapping between cloud disks and snapshots in the image.
   */
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
   * Indicates whether the image is a public image. Public images include Alibaba Cloud-provided public images and custom images that you have published as community images.
   * 
   * - **true**: The image is a public image.
   * - **false**: The image is not a public image.
   * 
   * @example
   * false
   */
  isPublic?: boolean;
  /**
   * @remarks
   * Indicates whether the image supports RDS Custom instances. Valid values:
   * 
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  isSupportRdsCustom?: boolean;
  /**
   * @remarks
   * The Chinese display name of the operating system.
   * 
   * @example
   * Alibaba Cloud Linux  2.1903 LTS 64位 快速启动版
   */
  OSName?: string;
  /**
   * @remarks
   * The English display name of the operating system.
   * 
   * @example
   * Alibaba Cloud Linux  2.1903 LTS 64 bit Quick Boot
   */
  OSNameEn?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * - **windows**.
   * - **linux**.
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The operating system platform.
   * 
   * @example
   * Aliyun
   */
  platform?: string;
  /**
   * @remarks
   * The size of the image. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The status of the image. Valid values:
   * 
   * - **UnAvailable**: Unavailable.
   * - **Available**: Available.
   * - **Creating**: Being created.
   * - **CreateFailed**: Creation failed.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the image is used by RDS Custom instances. Valid values:
   * 
   * - **instance**: One or more RDS Custom instances have been created.
   * - **none**: No RDS Custom instances have been created.
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
   * The image information.
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
   * The number of entries per page.
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

