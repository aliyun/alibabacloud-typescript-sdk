// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageRequestDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores the image.
   * 
   * @example
   * www-cn
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The file name (key) of the image file stored in the OSS bucket after the image is uploaded.
   * 
   * @example
   * image-bucket
   */
  OSSObject?: string;
  /**
   * @remarks
   * The region where the image resides.
   * 
   * @example
   * cn-beijing
   */
  OSSRegion?: string;
  static names(): { [key: string]: string } {
    return {
      OSSBucket: 'OSSBucket',
      OSSObject: 'OSSObject',
      OSSRegion: 'OSSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSSBucket: 'string',
      OSSObject: 'string',
      OSSRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportImageRequest extends $dara.Model {
  /**
   * @remarks
   * The system architecture. Valid values:</br>
   * 
   * - x86_64
   * 
   * Currently, only x86_64 is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * 
   * ens_vm: ENS virtual machine image (default).
   * 
   * This parameter is required.
   * 
   * @example
   * ens_vm
   */
  computeType?: string;
  /**
   * @remarks
   * The list of custom image information.
   */
  diskDeviceMapping?: ImportImageRequestDiskDeviceMapping[];
  /**
   * @remarks
   * The image format. Valid values:</br>
   * qcow2.</br>
   * Currently, only qcow2 is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * qcow2
   */
  imageFormat?: string;
  /**
   * @remarks
   * The image name. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * ImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The image license type. Valid values: Aliyun (Alibaba Cloud license) and BYOL (Bring Your Own Key).
   * 
   * @example
   * Aliyun
   */
  licenseType?: string;
  /**
   * @remarks
   * The OSS bucket that stores the image file.
   * 
   * @example
   * tmp-hybrid
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The name of the image file.
   * 
   * @example
   * image-test
   */
  OSSObject?: string;
  /**
   * @remarks
   * The region where the image resides. Currently, only cn-beijing is supported.
   * 
   * @example
   * cn-beijing
   */
  OSSRegion?: string;
  /**
   * @remarks
   * The type of the operating system platform. Valid values:
   * 
   * - windows
   * - linux
   * 
   * Currently, only linux is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The version of the operating system distribution.
   * 
   * @example
   * 6.8
   */
  OSVersion?: string;
  /**
   * @remarks
   * The operating system distribution. Valid values:
   * * centos
   * * ubuntu
   * 
   * @example
   * centos
   */
  platform?: string;
  /**
   * @remarks
   * The region of the destination OSS bucket where the image is stored.</br>
   * 
   * > Currently, only cn-beijing and ap-southeast-1 are supported.
   * 
   * @example
   * cn-beijing
   */
  targetOSSRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      computeType: 'ComputeType',
      diskDeviceMapping: 'DiskDeviceMapping',
      imageFormat: 'ImageFormat',
      imageName: 'ImageName',
      licenseType: 'LicenseType',
      OSSBucket: 'OSSBucket',
      OSSObject: 'OSSObject',
      OSSRegion: 'OSSRegion',
      OSType: 'OSType',
      OSVersion: 'OSVersion',
      platform: 'Platform',
      targetOSSRegionId: 'TargetOSSRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      computeType: 'string',
      diskDeviceMapping: { 'type': 'array', 'itemType': ImportImageRequestDiskDeviceMapping },
      imageFormat: 'string',
      imageName: 'string',
      licenseType: 'string',
      OSSBucket: 'string',
      OSSObject: 'string',
      OSSRegion: 'string',
      OSType: 'string',
      OSVersion: 'string',
      platform: 'string',
      targetOSSRegionId: 'string',
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

