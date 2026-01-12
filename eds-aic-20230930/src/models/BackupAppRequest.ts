// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackupAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @example
   * MyBackup
   */
  backupFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  backupFilePath?: string;
  /**
   * @example
   * this is a backup app
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceAppList?: string[];
  /**
   * @remarks
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

