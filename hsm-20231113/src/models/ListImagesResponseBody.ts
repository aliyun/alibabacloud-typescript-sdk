// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * backup-fdb897sdf****
   */
  backupId?: string;
  /**
   * @remarks
   * The time when the image was copied. Unit: milliseconds. The value is a UNIX timestamp.
   * 
   * @example
   * 1641275680000
   */
  copyTime?: string;
  /**
   * @remarks
   * The time when the image was generated. Unit: milliseconds. The value is a UNIX timestamp.
   * 
   * @example
   * 1782849566738
   */
  exportTime?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * image-d79x4k11pmg19****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the hardware security module (HSM).
   * 
   * @example
   * hsm-cn-6ja1xknf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The image generation mode. Valid values:
   * 
   * *   PERIODIC: It is automatically generated.
   * *   MANUAL: It is manually generated.
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
   * backup-hodfhaol****
   */
  sourceBackupUid?: string;
  /**
   * @remarks
   * The ID of the source image.
   * 
   * @example
   * image-ooopjygsn****
   */
  sourceImageUid?: string;
  /**
   * @remarks
   * The ID of the source HSM.
   * 
   * @example
   * hsm-cn-wz9i2dmefudfxtmb****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the source image resides.
   * 
   * @example
   * cn-shanghai
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The status of the image. Valid values:
   * 
   * *   NEW: It is disabled.
   * *   DELETED: It is deleted.
   * *   CREATING: It is being created.
   * *   NORMAL: It is created.
   * 
   * @example
   * CREATING
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
      copyTime: 'string',
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

export class ListImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The images returned.
   */
  images?: ListImagesResponseBodyImages[];
  /**
   * @remarks
   * The number of images per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of images returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      images: 'Images',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      pageSize: 'number',
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

