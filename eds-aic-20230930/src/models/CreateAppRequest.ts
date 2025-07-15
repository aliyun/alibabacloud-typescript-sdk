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

export class CreateAppRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * Application Name 1
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The information about the custom app.
   * 
   * > 
   * 
   * *   If you want to pass in a custom app, configure the `CustomAppInfo` parameter. Take note that the six fields within it are mandatory.
   * 
   * *   A custom app has a higher priority than an app from the Alibaba Cloud Workspace Application Center. If you configure the `CustomAppInfo` parameter, the `FileName` and `FilePath` pair or the `OssAppUrl` will not take effect.
   */
  customAppInfo?: CreateAppRequestCustomAppInfo;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name used by the app file in Object Storage Service (OSS). This parameter, combined with `FilePath`, uniquely identifies the OSS path of the app file.
   * 
   * > 
   * 
   * *   If you want to pass in an app from the Alibaba Cloud Workspace Application Center, configure the `FileName` and `FilePath` parameters. Alternatively, configure the `OssAppUrl` parameter. The FileName and FilePath parameters takes precedence over the OssAppUrl parameter.
   * 
   * *   Log on to the [Elastic Desktop Service (EDS) Enterprise](https://eds.console.aliyun.com/osshelp) console, upload the app file to the Application Center according to the on-screen instructions, and then retrieve the parameter value.
   * 
   * @example
   * testApp.apk
   */
  fileName?: string;
  /**
   * @remarks
   * The OSS bucket path to the app file. This parameter, combined with `FileName`, uniquely identifies the OSS path of the app file.
   * 
   * > 
   * 
   * *   If you want to pass in an app from the Alibaba Cloud Workspace Application Center, configure the `FileName` and `FilePath` parameters. Alternatively, configure the `OssAppUrl` parameter. The FileName and FilePath parameters takes precedence over the OssAppUrl parameter.
   * 
   * *   Log on to the [EDS Enterprise](https://eds.console.aliyun.com/osshelp) console, upload the app file to the Application Center according to the on-screen instructions, and then retrieve the parameter value.
   */
  filePath?: string;
  /**
   * @remarks
   * The icon URL of the application.
   * 
   * @example
   * https://www.example.com/icon.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The parameters used for installing the application. By default, the `-r` parameter is included when you install an application.
   * 
   * @example
   * -d
   */
  installParam?: string;
  /**
   * @remarks
   * The OSS bucket endpoint of the app file.
   * 
   * > 
   * 
   * *   If you want to pass in an app from the Alibaba Cloud Workspace Application Center, configure the `FileName` and `FilePath` parameters. Alternatively, configure the `OssAppUrl` parameter. The FileName and FilePath parameters takes precedence over the OssAppUrl parameter.
   * 
   * *   Log on to the [EDS Enterprise](https://eds.console.aliyun.com/osshelp) console, upload the app file to the Application Center according to the on-screen instructions, and then retrieve the parameter value.
   * 
   * @example
   * http://testApp.apk
   */
  ossAppUrl?: string;
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

