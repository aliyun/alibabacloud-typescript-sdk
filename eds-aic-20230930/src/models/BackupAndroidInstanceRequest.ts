// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackupAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * The name of the backup file.
   * 
   * @example
   * abc
   */
  backupFileName?: string;
  /**
   * @remarks
   * The upload URL of the backup file.
   * 
   * This parameter is required.
   */
  backupFilePath?: string;
  /**
   * @remarks
   * The description of the full backup.
   * 
   * @example
   * this is a backup android instance
   */
  description?: string;
  /**
   * @remarks
   * The list of application package names to exclude from the full backup. For matched applications, only APK collection is skipped, and user data is backed up as usual. If this parameter is not specified, no applications are excluded.
   */
  excludeAppList?: string[];
  /**
   * @remarks
   * The backup region.
   * 
   * This parameter is required.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      backupFileName: 'BackupFileName',
      backupFilePath: 'BackupFilePath',
      description: 'Description',
      excludeAppList: 'ExcludeAppList',
      uploadEndpoint: 'UploadEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      backupFileName: 'string',
      backupFilePath: 'string',
      description: 'string',
      excludeAppList: { 'type': 'array', 'itemType': 'string' },
      uploadEndpoint: 'string',
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

