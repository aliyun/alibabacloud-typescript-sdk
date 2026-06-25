// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackupAndroidInstanceRequest extends $dara.Model {
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
   * abc
   */
  backupFileName?: string;
  /**
   * @remarks
   * The upload URL for the backup file.
   * 
   * This parameter is required.
   */
  backupFilePath?: string;
  /**
   * @remarks
   * The description of the full instance backup.
   * 
   * @example
   * this is a backup android instance
   */
  description?: string;
  /**
   * @remarks
   * The region where the backup is stored.
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
      uploadEndpoint: 'UploadEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      backupFileName: 'string',
      backupFilePath: 'string',
      description: 'string',
      uploadEndpoint: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIdList)) {
      $dara.Model.validateArray(this.androidInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

