// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCloudAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application name. For Android applications, use the package name, such as com.aaa.bbb.
   * 
   * Value rules:
   * 1. Length: 4 to 50 characters.
   * 2. Lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 3. The first and last characters must be letters or digits.
   * 
   * This parameter is required.
   * 
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @remarks
   * The application version. For Android applications, use the VersionName, such as 1.1.1.
   * 
   * Value rules:
   * 1. Length: 1 to 50 characters.
   * 2. Lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 3. The first and last characters must be letters or digits.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.1.1
   */
  appVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Test application package
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
   * The MD5 checksum of the application package, used to verify package integrity.
   * 
   * This parameter is required.
   * 
   * @example
   * 0CFBB7BD10CDD7279642ADAB8FEF3DEE
   */
  md5?: string;
  /**
   * @remarks
   * The package format. The default value is the file extension of the download URL. Valid values:
   * 1. apk
   * 2. tar.gz
   * 3. tar
   * 4. zip
   * 5. rar
   * 
   * @example
   * apk
   */
  pkgFormat?: string;
  /**
   * @remarks
   * The cloud application labels. You can select multiple values. Valid values:
   * 1. hot
   * 2. game
   * 3. app
   */
  pkgLabelsShrink?: string;
  /**
   * @remarks
   * The package type.
   * 
   * ## Valid values:
   * 
   * 1. android
   * 2. win
   * 3. android_appmarket: corresponds to the Android app marketplace scenario. In this scenario, the actual APK PackageName is restricted:
   * a. Different AppName values cannot share the same PackageName.
   * b. The same AppName with different AppVersion values can be associated with different PackageName values.
   * 
   * ## Default value:
   * If not specified, the package type is automatically mapped based on PkgFormat (or the file extension of DownloadUrl). Default mappings between PkgFormat and package type:
   * 1. android: apk (the apk format is mapped to android by default).
   * 2. win: tar.gz, tar, zip, rar.
   * 3. android_appmarket: apk.
   * 
   * @example
   * android
   */
  pkgType?: string;
  /**
   * @remarks
   * The relative path of the post-installation command within the application package. Only supported for win type applications.
   * 
   * @example
   * install.ps1
   */
  postCommandPath?: string;
  /**
   * @remarks
   * The timeout period (in seconds) for the post-installation command. Only supported for win type applications.
   * 
   * @example
   * 10
   */
  postCommandTimeoutSec?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appVersion: 'AppVersion',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      md5: 'Md5',
      pkgFormat: 'PkgFormat',
      pkgLabelsShrink: 'PkgLabels',
      pkgType: 'PkgType',
      postCommandPath: 'PostCommandPath',
      postCommandTimeoutSec: 'PostCommandTimeoutSec',
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
      pkgLabelsShrink: 'string',
      pkgType: 'string',
      postCommandPath: 'string',
      postCommandTimeoutSec: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

