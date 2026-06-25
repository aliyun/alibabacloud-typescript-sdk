// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackupAppRequest extends $dara.Model {
  /**
   * @remarks
   * A list of instance IDs.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * The name of the backup file.
   * 
   * @example
   * MyBackup
   */
  backupFileName?: string;
  /**
   * @remarks
   * The URL of the backup file.
   * 
   * This parameter is required.
   */
  backupFilePath?: string;
  /**
   * @remarks
   * The description of the application backup.
   * 
   * @example
   * this is a backup app
   */
  description?: string;
  /**
   * @remarks
   * A list of package names for the applications to back up.
   * 
   * This parameter is required.
   */
  sourceAppList?: string[];
  /**
   * @remarks
   * Specifies the region where the backup is created.
   * 
   * This parameter is required.
   * 
   * @example
   * oss-cn-shanghai-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      backupFileName: 'BackupFileName',
      backupFilePath: 'BackupFilePath',
      description: 'Description',
      sourceAppList: 'SourceAppList',
      uploadEndpoint: 'UploadEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      backupFileName: 'string',
      backupFilePath: 'string',
      description: 'string',
      sourceAppList: { 'type': 'array', 'itemType': 'string' },
      uploadEndpoint: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIdList)) {
      $dara.Model.validateArray(this.androidInstanceIdList);
    }
    if(Array.isArray(this.sourceAppList)) {
      $dara.Model.validateArray(this.sourceAppList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

