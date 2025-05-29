// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCloudAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.1.1
   */
  appVersion?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxx.xxx.xxx.apk
   */
  downloadUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0CFBB7BD10CDD7279642ADAB8FEF3DEE
   */
  md5?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appVersion: 'AppVersion',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      md5: 'Md5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appVersion: 'string',
      description: 'string',
      downloadUrl: 'string',
      md5: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

