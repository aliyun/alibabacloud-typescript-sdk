// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageFromFamilyResponseBodyImageDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The device name of the disk. Example: /dev/xvdb.
   * 
   * >  This parameter will be removed in the future. To ensure compatibility, we recommend that you use other parameters.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The image format.
   * 
   * @example
   * qcow2
   */
  format?: string;
  /**
   * @remarks
   * The OSS bucket that contains the imported image file.
   * 
   * @example
   * testEcsImport
   */
  importOSSBucket?: string;
  /**
   * @remarks
   * The OSS object to which the imported image belongs.
   * 
   * @example
   * imageImport
   */
  importOSSObject?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 80
   */
  size?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-bp17ot2q7x72ggtw****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The image type.
   * 
   * @example
   * custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      format: 'Format',
      importOSSBucket: 'ImportOSSBucket',
      importOSSObject: 'ImportOSSObject',
      size: 'Size',
      snapshotId: 'SnapshotId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      format: 'string',
      importOSSBucket: 'string',
      importOSSObject: 'string',
      size: 'string',
      snapshotId: 'string',
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

