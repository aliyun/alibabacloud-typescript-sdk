// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCloudAppRequest extends $dara.Model {
  /**
   * @remarks
   * The application name. For Android apps, use the package name, such as com.aaa.bbb.
   * 
   * Value requirements:
   * 
   * 1. Length: 4–50 characters
   * 
   * 2. Allowed characters: lowercase letters, digits, underscores (_), hyphens (-), and dots (.)
   * 
   * 3. The first and last characters must be a letter or digit
   * 
   * This parameter is required.
   * 
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @remarks
   * Value requirements:
   * 
   * 1. Length: 1–50 characters
   * 
   * 2. Allowed characters: lowercase letters, digits, underscores (_), hyphens (-), and dots (.)
   * 
   * 3. The first and last characters must be a letter or digit
   * 
   * This parameter is required.
   * 
   * @example
   * 1.1.1
   */
  appVersion?: string;
  /**
   * @remarks
   * A description of the application.
   * 
   * @example
   * 测试应用包
   */
  description?: string;
  /**
   * @remarks
   * The download URL of the application package.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxx.xxx.xxx.apk
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The MD5 hash of the application package, used to verify package integrity.
   * 
   * This parameter is required.
   * 
   * @example
   * 0CFBB7BD10CDD7279642ADAB8FEF3DEE
   */
  md5?: string;
  /**
   * @remarks
   * The package format. By default, this is inferred from the file extension in the DownloadUrl. Valid values:
   * 
   * 1. apk
   * 
   * 2. tar.gz
   * 
   * 3. tar
   * 
   * 4. zip
   * 
   * 5. rar
   * 
   * @example
   * apk
   */
  pkgFormat?: string;
  /**
   * @remarks
   * Cloud application labels. You can select multiple. Valid values:
   * 
   * 1. hot
   * 
   * 2. game
   * 
   * 3. app
   */
  pkgLabels?: string[];
  /**
   * @remarks
   * The package type.
   * 
   * ## Valid values:
   * 
   * 1. android
   * 
   * 2. win
   * 
   * 3. android_appmarket: for Android app marketplace scenarios. This scenario enforces real APK PackageName restrictions:
   *    a. PackageNames must be unique across different AppNames.
   *    b. The same AppName with different AppVersions can map to different PackageNames.
   * 
   * ## Default behavior:
   * 
   * If not specified, the system automatically maps the package type based on PkgFormat (or infers PkgFormat from the DownloadUrl file extension). The default mapping is:
   * 
   * 1. android: apk
   * 
   * 2. win: tar.gz, tar, zip, rar
   * 
   * 3. android_appmarket: apk
   * 
   * @example
   * android
   */
  pkgType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appVersion: 'AppVersion',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      md5: 'Md5',
      pkgFormat: 'PkgFormat',
      pkgLabels: 'PkgLabels',
      pkgType: 'PkgType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appVersion: 'string',
      description: 'string',
      downloadUrl: 'string',
      md5: 'string',
      pkgFormat: 'string',
      pkgLabels: { 'type': 'array', 'itemType': 'string' },
      pkgType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pkgLabels)) {
      $dara.Model.validateArray(this.pkgLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

