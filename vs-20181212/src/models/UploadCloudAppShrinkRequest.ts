// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCloudAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application name. For Android applications, we recommend that you use the package name, such as com.aaa.bbb. Naming conventions: 1. The length is 4 to 50 characters. 2. The name can contain lowercase letters, digits, underscores (_), hyphens (-), and periods (.). 3. The first and last characters must be letters or digits.
   * 
   * This parameter is required.
   * 
   * @example
   * com.aaa.bbb
   */
  appName?: string;
  /**
   * @remarks
   * The application version. For Android applications, we recommend that you use the VersionName, such as 1.1.1. Naming conventions: 1. The length is 1 to 50 characters. 2. The version can contain lowercase letters, digits, underscores (_), hyphens (-), and periods (.). 3. The first and last characters must be letters or digits.
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
   * The MD5 hash of the application package, which is used to check the integrity of the application package.
   * 
   * This parameter is required.
   * 
   * @example
   * 0CFBB7BD10CDD7279642ADAB8FEF3DEE
   */
  md5?: string;
  /**
   * @remarks
   * The format of the installation package. The default value is the file name extension of the download URL. Valid values: 1. apk 2. tar.gz 3. tar 4. zip 5. rar.
   * 
   * @example
   * apk
   */
  pkgFormat?: string;
  /**
   * @remarks
   * The tags of the cloud application. You can specify multiple tags. Valid values: 1. hot 2. game 3. app.
   */
  pkgLabelsShrink?: string;
  /**
   * @remarks
   * The type of the installation package. ## Valid values: 1. android 2. win 3. android_appmarket: This value applies to Android app marketplace scenarios. In this scenario, the actual package name of the APK is restricted. a. The package names of different AppName values cannot be duplicated. b. Different AppVersion values of the same AppName can be associated with different package names. ## Default value description: If this parameter is not specified, the installation package type is automatically mapped based on the PkgFormat parameter or the file name extension of the DownloadUrl parameter. The default mapping between PkgFormat and the installation package type is as follows: 1. android: apk. The apk format is mapped to android by default. 2. win: tar.gz, tar, zip, and rar. 3. android_appmarket: apk.
   * 
   * @example
   * android
   */
  pkgType?: string;
  /**
   * @remarks
   * The relative path of the post-command in the application package. This parameter is supported only for Windows applications.
   * 
   * @example
   * install.ps1
   */
  postCommandPath?: string;
  /**
   * @remarks
   * The timeout period for executing the post-command, in seconds. This parameter is supported only for Windows applications.
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

