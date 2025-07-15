// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The version of the application.
   * 
   * @example
   * 1.0.0
   */
  androidAppVersion?: string;
  /**
   * @remarks
   * Apk size.
   * 
   * @example
   * 10244893
   */
  apkSize?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 10404
   */
  appId?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * testapp
   */
  appName?: string;
  appType?: string;
  /**
   * @remarks
   * Region id.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * default description.
   */
  description?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2022-08-11 17:45:03
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the application was last modified.
   * 
   * @example
   * 2022-08-11 17:45:03
   */
  gmtModified?: string;
  /**
   * @remarks
   * The icon URL of the application.
   * 
   * @example
   * https://test.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The installation/uninstallation status of the application.
   * 
   * Valid values:
   * 
   * *   INSTALLFAILED: The application failed to be installed.
   * *   UNINSTALLING: The application is being uninstalled.
   * *   INSTALLING: The application is being installed.
   * *   UNINSTALLED: The application is uninstalled.
   * *   INSTALLED: The application is installed.
   * *   UNINSTALLFAILED: The application failed to be uninstalled.
   * 
   * @example
   * INSTALLING
   */
  installationStatus?: string;
  /**
   * @remarks
   * The list of instance groups where the application is installed.
   */
  instanceGroupList?: string[];
  /**
   * @remarks
   * The value of MD5.
   * 
   * @example
   * THCIEH73KEK3334
   */
  MD5?: string;
  /**
   * @remarks
   * The name of the application package.
   * 
   * @example
   * cn.rdstar.rdstarandroid
   */
  packageName?: string;
  /**
   * @remarks
   * The status of the application.
   * 
   * Valid values:
   * 
   * *   FAILED: The application failed to be created.
   * *   NORMAL: The application is available.
   * *   CREATING: The application is being created.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      androidAppVersion: 'AndroidAppVersion',
      apkSize: 'ApkSize',
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      bizRegionId: 'BizRegionId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      iconUrl: 'IconUrl',
      installationStatus: 'InstallationStatus',
      instanceGroupList: 'InstanceGroupList',
      MD5: 'MD5',
      packageName: 'PackageName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidAppVersion: 'string',
      apkSize: 'string',
      appId: 'number',
      appName: 'string',
      appType: 'string',
      bizRegionId: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      iconUrl: 'string',
      installationStatus: 'string',
      instanceGroupList: { 'type': 'array', 'itemType': 'string' },
      MD5: 'string',
      packageName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupList)) {
      $dara.Model.validateArray(this.instanceGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that are returned.
   */
  data?: DescribeAppsResponseBodyData[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB95E410-FD1D-53C5-9F7D-93CC44D7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeAppsResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

