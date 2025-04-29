// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageRequestDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The device name of disk N in the custom image.
   * 
   * >  This parameter will be removed in the future. We recommend that you do not use this parameter to ensure future compatibility.
   * 
   * @example
   * null
   */
  device?: string;
  /**
   * @remarks
   * The size of disk N in the custom image. Unit: GiB.
   * 
   * You can use this parameter to specify the sizes of the system disk and data disks in the custom image. When you specify the size of the system disk, make sure that the specified size is greater than or equal to the size of the imported image file. Unit: GiB. Valid values:
   * 
   * *   When the N value is 1, this parameter specifies the size of the system disk in the custom image. Valid values: 1 to 2048.
   * *   When the N value is an integer in the range of 2 to 17, this parameter specifies the size of a data disk in the custom image. Valid values: 1 to 2048.
   * 
   * After the image file is uploaded to an OSS bucket, you can view the size of the image file in the OSS bucket.
   * 
   * >  This parameter will be removed in the future. We recommend that you use `DiskDeviceMapping.N.DiskImageSize` to ensure future compatibility.
   * 
   * @example
   * 80
   */
  diskImSize?: number;
  /**
   * @remarks
   * The size of disk N in the custom image after the image is imported.
   * 
   * You can use this parameter to specify the sizes of the system disk and data disks in the custom image. When you specify the size of the system disk, make sure that the specified size is greater than or equal to the size of the imported image file. Unit: GiB. Valid values:
   * 
   * *   When the N value is 1, this parameter specifies the size of the system disk in the custom image. Valid values: 1 to 2048.
   * *   When the N value is an integer in the range of 2 to 17, this parameter specifies the size of a data disk in the custom image. Valid values: 1 to 2048.
   * 
   * After the image file is uploaded to an OSS bucket, you can view the size of the image file in the OSS bucket.
   * 
   * @example
   * 80
   */
  diskImageSize?: number;
  /**
   * @remarks
   * The image format. Valid values:
   * 
   * *   RAW
   * *   VHD
   * *   QCOW2
   * 
   * This parameter is empty by default, which indicates that the system checks the format of the image and uses the check result as the value of this parameter.
   * 
   * @example
   * QCOW2
   */
  format?: string;
  /**
   * @remarks
   * The OSS bucket where the image file is stored.
   * 
   * >  Before you import images for the first time, you must use RAM to authorize ECS to access your OSS buckets. If ECS is not authorized to access your OSS buckets, the `NoSetRoletoECSServiceAcount` error code is returned when you call the ImportImage operation. For more information, see the "**Usage notes**" section in this topic.
   * 
   * @example
   * ecsimageos
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The name (key) of the object that the uploaded image is stored as in the OSS bucket.
   * 
   * @example
   * CentOS_5.4_32.raw
   */
  OSSObject?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      diskImSize: 'DiskImSize',
      diskImageSize: 'DiskImageSize',
      format: 'Format',
      OSSBucket: 'OSSBucket',
      OSSObject: 'OSSObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      diskImSize: 'number',
      diskImageSize: 'number',
      format: 'string',
      OSSBucket: 'string',
      OSSObject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

