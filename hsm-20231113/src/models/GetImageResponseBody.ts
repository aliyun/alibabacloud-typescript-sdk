// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageResponseBodyImage extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * backup-1618017313
   */
  backupId?: string;
  /**
   * @remarks
   * The time when the image was copied. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1641275680000
   */
  copyTime?: number;
  /**
   * @remarks
   * The time when the image was generated. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1786776567788
   */
  exportTime?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * image-wz9c5ths5dfuwx47****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the hardware security module (HSM).
   * 
   * @example
   * hsm-cn-9lb32vll****
   */
  instanceId?: string;
  /**
   * @remarks
   * The image generation mode. Valid values:
   * 
   * *   PERIODIC
   * *   MANUAL
   * 
   * @example
   * MANUAL
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the backup.
   * 
   * @example
   * hsm-test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the source backup.
   * 
   * @example
   * backup-gfuiasdfa****
   */
  sourceBackupUid?: string;
  /**
   * @remarks
   * The ID of the source image.
   * 
   * @example
   * image-kklhhhh****
   */
  sourceImageUid?: string;
  /**
   * @remarks
   * The ID of the source HSM.
   * 
   * @example
   * hsm-wz9fnmvx190shfbk****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The region ID of the source image.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The status of the image. Valid values:
   * 
   * *   NEW
   * *   DELETED
   * *   CREATING
   * *   NORMAL
   * 
   * @example
   * NEW
   */
  status?: string;
  /**
   * @remarks
   * The digest of the HSM.
   * 
   * @example
   * 3kGeHnmQzXwSsfF0Jk9eJYhe2gP6An0/HlYIiZh1****
   */
  vsmDigest?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      copyTime: 'CopyTime',
      exportTime: 'ExportTime',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      mode: 'Mode',
      regionId: 'RegionId',
      remark: 'Remark',
      sourceBackupUid: 'SourceBackupUid',
      sourceImageUid: 'SourceImageUid',
      sourceInstanceId: 'SourceInstanceId',
      sourceRegionId: 'SourceRegionId',
      status: 'Status',
      vsmDigest: 'VsmDigest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      copyTime: 'number',
      exportTime: 'number',
      imageId: 'string',
      instanceId: 'string',
      mode: 'string',
      regionId: 'string',
      remark: 'string',
      sourceBackupUid: 'string',
      sourceImageUid: 'string',
      sourceInstanceId: 'string',
      sourceRegionId: 'string',
      status: 'string',
      vsmDigest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image information.
   */
  image?: GetImageResponseBodyImage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: GetImageResponseBodyImage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

