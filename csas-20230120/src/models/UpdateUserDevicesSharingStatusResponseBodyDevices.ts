// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUserDevicesSharingStatusResponseBodyDevicesNetInterfaceInfo } from "./UpdateUserDevicesSharingStatusResponseBodyDevicesNetInterfaceInfo";


export class UpdateUserDevicesSharingStatusResponseBodyDevices extends $dara.Model {
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
   * Enabled
   */
  dlpStatus?: string;
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
  netInterfaceInfo?: UpdateUserDevicesSharingStatusResponseBodyDevicesNetInterfaceInfo[];
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
   * 11.49.XX.XX
   */
  srcIP?: string;
  /**
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  username?: string;
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
      hostname: 'Hostname',
      iaStatus: 'IaStatus',
      innerIP: 'InnerIP',
      mac: 'Mac',
      memory: 'Memory',
      nacStatus: 'NacStatus',
      netInterfaceInfo: 'NetInterfaceInfo',
      paStatus: 'PaStatus',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      srcIP: 'SrcIP',
      updateTime: 'UpdateTime',
      username: 'Username',
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
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      mac: 'string',
      memory: 'string',
      nacStatus: 'string',
      netInterfaceInfo: { 'type': 'array', 'itemType': UpdateUserDevicesSharingStatusResponseBodyDevicesNetInterfaceInfo },
      paStatus: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      srcIP: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.netInterfaceInfo)) {
      $dara.Model.validateArray(this.netInterfaceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

