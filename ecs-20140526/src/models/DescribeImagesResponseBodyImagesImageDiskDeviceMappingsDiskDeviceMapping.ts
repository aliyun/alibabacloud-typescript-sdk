// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The device name of the disk. Example: /dev/xvdb.
   * 
   * @example
   * /dev/xvda
   */
  device?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The format of the image.
   * 
   * @example
   * qcow2
   */
  format?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) bucket that contains the imported image file.
   * 
   * @example
   * testEcsImport
   */
  importOSSBucket?: string;
  /**
   * @remarks
   * The OSS object that corresponds to the imported image file.
   * 
   * @example
   * imageImport
   */
  importOSSObject?: string;
  /**
   * @remarks
   * The progress of the image copy task.
   * 
   * @example
   * 32%
   */
  progress?: string;
  /**
   * @remarks
   * The remaining time of the image copy task. Unit: seconds.
   * 
   * @example
   * 233
   */
  remainTime?: number;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 60
   */
  size?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * s-bp17ot2q7x72ggtw****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the image.
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      encrypted: 'Encrypted',
      format: 'Format',
      importOSSBucket: 'ImportOSSBucket',
      importOSSObject: 'ImportOSSObject',
      progress: 'Progress',
      remainTime: 'RemainTime',
      size: 'Size',
      snapshotId: 'SnapshotId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      encrypted: 'boolean',
      format: 'string',
      importOSSBucket: 'string',
      importOSSObject: 'string',
      progress: 'string',
      remainTime: 'number',
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

