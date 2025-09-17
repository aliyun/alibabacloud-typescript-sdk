// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRunningAppsResponseBodyRunningCloudApps extends $dara.Model {
  /**
   * @example
   * ca-dln05y44ze6esfl8x
   */
  appId?: string;
  /**
   * @example
   * aig-dk8p95irk9xs5xi6a
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * ai-gc1gemx6vpa6vlync
   */
  appInstanceId?: string;
  /**
   * @example
   * alihealth-keeper
   */
  appName?: string;
  /**
   * @example
   * 11.1
   */
  appVersion?: string;
  /**
   * @example
   * test1.0
   */
  appVersionName?: string;
  /**
   * @example
   * 87
   */
  duration?: number;
  /**
   * @example
   * https://app-icon-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/187465/18_bf1.jpg
   */
  iconUrl?: string;
  /**
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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
   * Id of the request
   * 
   * @example
   * 2DC3521C-3820-5EA5-9A9A-00BB7AF4E8E5
   */
  requestId?: string;
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

