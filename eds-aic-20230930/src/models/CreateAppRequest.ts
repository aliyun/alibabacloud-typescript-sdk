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
   * The download URL of the application.
   * 
   * @example
   * http://testApp.apk
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The MD5 value of the .apk package.
   * 
   * @example
   * df3f46ce5844ddb278f14c5a9cd2****
   */
  md5?: string;
  /**
   * @remarks
   * The application package name.
   * 
   * @example
   * com.example.demo
   */
  packageName?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The application version code.
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

export class CreateAppRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Application name 1
   */
  appName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The custom application information.
   * 
   * > - If you pass a custom application, pass the `CustomAppInfo` parameter. All six fields in this object parameter are required.
   * >
   * > - Custom applications have a higher priority than applications from the WUYING Workspace app center. If you pass the `CustomAppInfo` parameter, `FileName` and `FilePath`, or `OssAppUrl` will be invalid.
   */
  customAppInfo?: CreateAppRequestCustomAppInfo;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * Application description
   */
  description?: string;
  /**
   * @remarks
   * The name of the application file stored in Object Storage Service (OSS). This parameter and `FilePath` together determine the unique OSS address.
   * 
   * > - If you pass an application from the WUYING Workspace app center, you must pass `FileName` and `FilePath`, or `OssAppUrl`. The former takes precedence.
   * >
   * > - Log on to the [WUYING Workspace console](https://eds.console.aliyun.com/osshelp). Follow the on-screen instructions to upload your application file to the WUYING Workspace app center to obtain this parameter.
   * 
   * @example
   * testApp.apk
   */
  fileName?: string;
  /**
   * @remarks
   * The storage address of the application file in an OSS bucket. This parameter and `FileName` together determine the unique OSS address.
   * 
   * > - If you pass an application from the WUYING Workspace app center, you must pass `FileName` and `FilePath`, or `OssAppUrl`. The former takes precedence.
   * >
   * > - Log on to the [WUYING Workspace console](https://eds.console.aliyun.com/osshelp). Follow the on-screen instructions to upload your application file to the WUYING Workspace app center to obtain this parameter.
   */
  filePath?: string;
  /**
   * @remarks
   * The URL of the application icon.
   * 
   * @example
   * https://www.example.com/icon.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The installation parameters. The `-r` installation parameter is included by default when you install the application.
   * 
   * @example
   * -d
   */
  installParam?: string;
  /**
   * @remarks
   * The OSS address of the application.
   * 
   * > - If you pass an application from the WUYING Workspace app center, you must pass `FileName` and `FilePath`, or `OssAppUrl`. The former takes precedence.
   * >
   * > - Log on to the [WUYING Workspace console](https://eds.console.aliyun.com/osshelp). Follow the on-screen instructions to upload your application file to the WUYING Workspace app center to obtain this parameter.
   * 
   * @example
   * http://testApp.apk
   */
  ossAppUrl?: string;
  /**
   * @remarks
   * Specifies whether to perform a system signature.
   * 
   * @example
   * false
   */
  signApk?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizRegionId: 'BizRegionId',
      customAppInfo: 'CustomAppInfo',
      description: 'Description',
      fileName: 'FileName',
      filePath: 'FilePath',
      iconUrl: 'IconUrl',
      installParam: 'InstallParam',
      ossAppUrl: 'OssAppUrl',
      signApk: 'SignApk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bizRegionId: 'string',
      customAppInfo: CreateAppRequestCustomAppInfo,
      description: 'string',
      fileName: 'string',
      filePath: 'string',
      iconUrl: 'string',
      installParam: 'string',
      ossAppUrl: 'string',
      signApk: 'string',
    };
  }

  validate() {
    if(this.customAppInfo && typeof (this.customAppInfo as any).validate === 'function') {
      (this.customAppInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

