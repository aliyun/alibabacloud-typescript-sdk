// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserDeviceResponseBodyDeviceHistoryUsers } from "./GetUserDeviceResponseBodyDeviceHistoryUsers";
import { GetUserDeviceResponseBodyDeviceNetInterfaceInfo } from "./GetUserDeviceResponseBodyDeviceNetInterfaceInfo";


export class GetUserDeviceResponseBodyDevice extends $dara.Model {
  /**
   * @example
   * Online
   */
  appStatus?: string;
  /**
   * @example
   * 2.2.0
   */
  appVersion?: string;
  /**
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @example
   * Unauthorized
   */
  dlpStatus?: string;
  edrStatus?: string;
  historyUsers?: GetUserDeviceResponseBodyDeviceHistoryUsers[];
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * Disabled
   */
  iaStatus?: string;
  /**
   * @example
   * 172.16.XX.XX
   */
  innerIP?: string;
  /**
   * @example
   * 48:9e:XX:XX:02:80
   */
  mac?: string;
  matchDeviceGroupIds?: string[];
  /**
   * @example
   * 16
   */
  memory?: string;
  /**
   * @example
   * Unprovisioned
   */
  nacStatus?: string;
  netInterfaceInfo?: GetUserDeviceResponseBodyDeviceNetInterfaceInfo[];
  /**
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @example
   * 106.14.XX.XX
   */
  srcIP?: string;
  /**
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  username?: string;
  workshop?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      appVersion: 'AppVersion',
      CPU: 'CPU',
      createTime: 'CreateTime',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceModel: 'DeviceModel',
      deviceStatus: 'DeviceStatus',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      deviceVersion: 'DeviceVersion',
      disk: 'Disk',
      dlpStatus: 'DlpStatus',
      edrStatus: 'EdrStatus',
      historyUsers: 'HistoryUsers',
      hostname: 'Hostname',
      iaStatus: 'IaStatus',
      innerIP: 'InnerIP',
      mac: 'Mac',
      matchDeviceGroupIds: 'MatchDeviceGroupIds',
      memory: 'Memory',
      nacStatus: 'NacStatus',
      netInterfaceInfo: 'NetInterfaceInfo',
      paStatus: 'PaStatus',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      srcIP: 'SrcIP',
      updateTime: 'UpdateTime',
      username: 'Username',
      workshop: 'Workshop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: 'string',
      appVersion: 'string',
      CPU: 'string',
      createTime: 'string',
      department: 'string',
      deviceBelong: 'string',
      deviceModel: 'string',
      deviceStatus: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      deviceVersion: 'string',
      disk: 'string',
      dlpStatus: 'string',
      edrStatus: 'string',
      historyUsers: { 'type': 'array', 'itemType': GetUserDeviceResponseBodyDeviceHistoryUsers },
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      mac: 'string',
      matchDeviceGroupIds: { 'type': 'array', 'itemType': 'string' },
      memory: 'string',
      nacStatus: 'string',
      netInterfaceInfo: { 'type': 'array', 'itemType': GetUserDeviceResponseBodyDeviceNetInterfaceInfo },
      paStatus: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      srcIP: 'string',
      updateTime: 'string',
      username: 'string',
      workshop: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyUsers)) {
      $dara.Model.validateArray(this.historyUsers);
    }
    if(Array.isArray(this.matchDeviceGroupIds)) {
      $dara.Model.validateArray(this.matchDeviceGroupIds);
    }
    if(Array.isArray(this.netInterfaceInfo)) {
      $dara.Model.validateArray(this.netInterfaceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

