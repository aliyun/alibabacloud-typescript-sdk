// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRunningAppsResponseBodyRunningCloudApps extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * ca-dln05y44ze6esfl8x
   */
  appId?: string;
  /**
   * @remarks
   * The app instance group ID.
   * 
   * @example
   * aig-dk8p95irk9xs5xi6a
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The application instance ID.
   * 
   * @example
   * ai-gc1gemx6vpa6vlync
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * alihealth-keeper
   */
  appName?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 11.1
   */
  appVersion?: string;
  /**
   * @remarks
   * The application version name.
   * 
   * @example
   * test1.0
   */
  appVersionName?: string;
  /**
   * @remarks
   * The running duration of the cloud application instance. Unit: seconds.
   * 
   * @example
   * 87
   */
  duration?: number;
  /**
   * @remarks
   * The URL of the application icon.
   * 
   * @example
   * https://app-icon-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/187465/18_bf1.jpg
   */
  iconUrl?: string;
  /**
   * @remarks
   * The operating system type of the instance platform.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The region ID of the cloud application.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642748400
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
      duration: 'Duration',
      iconUrl: 'IconUrl',
      osType: 'OsType',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appName: 'string',
      appVersion: 'string',
      appVersionName: 'string',
      duration: 'number',
      iconUrl: 'string',
      osType: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunningAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2DC3521C-3820-5EA5-9A9A-00BB7AF4E8E5
   */
  requestId?: string;
  /**
   * @remarks
   * The list of running cloud applications.
   */
  runningCloudApps?: ListRunningAppsResponseBodyRunningCloudApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runningCloudApps: 'RunningCloudApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runningCloudApps: { 'type': 'array', 'itemType': ListRunningAppsResponseBodyRunningCloudApps },
    };
  }

  validate() {
    if(Array.isArray(this.runningCloudApps)) {
      $dara.Model.validateArray(this.runningCloudApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

