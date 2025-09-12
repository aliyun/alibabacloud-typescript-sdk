// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDevicesResponseBodyDevicesNetInterfaceInfo extends $dara.Model {
  mac?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mac: 'Mac',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mac: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDevicesResponseBodyDevices extends $dara.Model {
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
  autoLoginStatus?: string;
  /**
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
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
   * Enabled
   */
  dlpStatus?: string;
  edrStatus?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * Enabled
   */
  iaStatus?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  innerIP?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
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
   * Enabled
   */
  nacStatus?: string;
  netInterfaceInfo?: ListUserDevicesResponseBodyDevicesNetInterfaceInfo[];
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
  snBaseBoard?: string;
  snBios?: string;
  snDiskDrive?: string;
  snProcessor?: string;
  snSystem?: string;
  /**
   * @example
   * 11.49.XX.XX
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
      autoLoginStatus: 'AutoLoginStatus',
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
      snBaseBoard: 'SnBaseBoard',
      snBios: 'SnBios',
      snDiskDrive: 'SnDiskDrive',
      snProcessor: 'SnProcessor',
      snSystem: 'SnSystem',
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
      autoLoginStatus: 'string',
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
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      mac: 'string',
      matchDeviceGroupIds: { 'type': 'array', 'itemType': 'string' },
      memory: 'string',
      nacStatus: 'string',
      netInterfaceInfo: { 'type': 'array', 'itemType': ListUserDevicesResponseBodyDevicesNetInterfaceInfo },
      paStatus: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      snBaseBoard: 'string',
      snBios: 'string',
      snDiskDrive: 'string',
      snProcessor: 'string',
      snSystem: 'string',
      srcIP: 'string',
      updateTime: 'string',
      username: 'string',
      workshop: 'string',
    };
  }

  validate() {
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

export class ListUserDevicesResponseBody extends $dara.Model {
  devices?: ListUserDevicesResponseBodyDevices[];
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': ListUserDevicesResponseBodyDevices },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

