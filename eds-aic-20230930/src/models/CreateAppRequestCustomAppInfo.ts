// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppRequestCustomAppInfo extends $dara.Model {
  /**
   * @remarks
   * The size of the .apk file. Unit: MB.
   * 
   * @example
   * 10
   */
  apkSize?: string;
  /**
   * @remarks
   * The download URL of the app.
   * 
   * @example
   * http://testApp.apk
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The MD5 value of the .apk file.
   * 
   * @example
   * df3f46ce5844ddb278f14c5a9cd2****
   */
  md5?: string;
  /**
   * @remarks
   * The name of the app package.
   * 
   * @example
   * com.example.demo
   */
  packageName?: string;
  /**
   * @remarks
   * The version of the app.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The code of the app version.
   * 
   * @example
   * 10000
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      apkSize: 'ApkSize',
      downloadUrl: 'DownloadUrl',
      md5: 'Md5',
      packageName: 'PackageName',
      version: 'Version',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkSize: 'string',
      downloadUrl: 'string',
      md5: 'string',
      packageName: 'string',
      version: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

