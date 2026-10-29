// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
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
   * The OSS address to which the backup file is uploaded.
   * 
   * This parameter is required.
   */
  backupFilePath?: string;
  /**
   * @remarks
   * The list of app package names excluded from the full-device restore. Excluded apps are not uninstalled and their APKs are not installed, which is compatible with legacy backups that contain APKs. Only user data is replaced. Empty shells must be installed by the customer by using the pm install command. If this parameter is not specified, no apps are excluded.
   */
  excludeAppList?: string[];
  /**
   * @remarks
   * The backup region.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The upload type.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
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

