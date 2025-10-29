// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageRequestDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The OSS Bucket where the image is stored.
   * 
   * @example
   * www-cn
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The filename (key) of the image file after it is uploaded to the OSS Bucket.
   * 
   * @example
   * image-bucket
   */
  OSSObject?: string;
  /**
   * @remarks
   * The Region where the image is located.
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
   * System architecture. Allowed values:</br>
   * 
   * - x86_64.</br>
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
   * `Image Type`
   * ens_vm: ens virtual machine image (default)
   * 
   * This parameter is required.
   * 
   * @example
   * ens_vm
   */
  computeType?: string;
  /**
   * @remarks
   * List of custom image information being created.
   */
  diskDeviceMapping?: ImportImageRequestDiskDeviceMapping[];
  /**
   * @remarks
   * Image format. Allowed values:</br>
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
   * Image name. The length should be [2, 128] English or Chinese characters. It must start with a letter (uppercase or lowercase) or a Chinese character, and cannot start with http:// or https://. It can contain numbers, colons (:), underscores (_), or hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * 镜像名称
   */
  imageName?: string;
  licenseType?: string;
  /**
   * @remarks
   * The OSS Bucket where the image file is located.
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
   * The Region where the image is located. Currently, only cn-beijing is supported.
   * 
   * @example
   * cn-beijing
   */
  OSSRegion?: string;
  /**
   * @remarks
   * Operating system platform type. Allowed values:
   * 
   * - windows.
   * - linux.
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
   * Operating system distribution version
   * 
   * @example
   * 6.8
   */
  OSVersion?: string;
  /**
   * @remarks
   * Operating system distribution. Allowed values:
   * * centos
   * * ubuntu
   * 
   * @example
   * centos
   */
  platform?: string;
  /**
   * @remarks
   * The target OSS region where the image will be stored.</br>
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

