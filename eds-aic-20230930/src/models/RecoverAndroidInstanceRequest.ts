// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @example
   * bf-azhps4rdyi2th****
   */
  backupFileId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  backupFilePath?: string;
  /**
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
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
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      backupFileId: 'string',
      backupFilePath: 'string',
      uploadEndpoint: 'string',
      uploadType: 'string',
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

