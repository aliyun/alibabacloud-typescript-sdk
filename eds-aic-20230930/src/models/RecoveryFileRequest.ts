// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoveryFileRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * Specifies whether to back up the entire device.
   * 
   * @example
   * false
   */
  backupAll?: boolean;
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * bf-azhps4rdyi2th****
   */
  backupFileId?: string;
  /**
   * @remarks
   * The OSS URL to which the backup file is uploaded.
   * <notice>Call the describeBuckets operation to obtain the bucketName, and select ossObjectList to obtain the key. The key is the path of the backup file. Concatenate them into "oss://${bucketName}/${key}".</notice>
   */
  backupFilePath?: string;
  excludeAppList?: string[];
  /**
   * @remarks
   * The domain name of the backup address.
   * <notice>Call the DescribeBuckets operation to obtain the bucket. If the cloud phone and the bucket are in the same region, obtain the IntranetEndpoint field. If they are in different regions, obtain the ExtranetEndpoint field.</notice>
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The backup type.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      backupAll: 'BackupAll',
      backupFileId: 'BackupFileId',
      backupFilePath: 'BackupFilePath',
      excludeAppList: 'ExcludeAppList',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      backupAll: 'boolean',
      backupFileId: 'string',
      backupFilePath: 'string',
      excludeAppList: { 'type': 'array', 'itemType': 'string' },
      uploadEndpoint: 'string',
      uploadType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIdList)) {
      $dara.Model.validateArray(this.androidInstanceIdList);
    }
    if(Array.isArray(this.excludeAppList)) {
      $dara.Model.validateArray(this.excludeAppList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

