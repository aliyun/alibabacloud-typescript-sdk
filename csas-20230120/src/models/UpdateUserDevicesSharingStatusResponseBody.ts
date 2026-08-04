// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserDevicesSharingStatusResponseBodyDevicesNetInterfaceInfo extends $dara.Model {
  /**
   * @remarks
   * NIC MAC address.
   * 
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * NIC name.
   * 
   * @example
   * eth0
   */
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

export class UpdateUserDevicesSharingStatusResponseBodyDevices extends $dara.Model {
  /**
   * @remarks
   * The client status. Values:
   * 
   * - **Online**: Online.
   * 
   * - **Offline**: Offline.
   * 
   * @example
   * Online
   */
  appStatus?: string;
  /**
   * @remarks
   * Client version.
   * 
   * @example
   * 2.2.0
   */
  appVersion?: string;
  /**
   * @remarks
   * Device CPU model.
   * 
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @remarks
   * Device registration time.
   * 
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  /**
   * @remarks
   * User\\"s department.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * Device ownership. Values:
   * 
   * - **Personal**: Personal device.
   * 
   * - **Company**: Company device.
   * 
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @remarks
   * Device model.
   * 
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @remarks
   * The status of the device. Values:
   * 
   * - **Online**: Online.
   * 
   * - **Offline**: Offline.
   * 
   * - **LongTermOffline**: Long-term offline.
   * 
   * - **Locked**: Locked.
   * 
   * - **Lost**: Lost.
   * 
   * - **Unbound**: Unbound.
   * 
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @remarks
   * The operating system type of the device. Values:
   * 
   * - **Windows**: Windows system.
   * 
   * - **macOS**: macOS system.
   * 
   * - **Linux**: Linux system.
   * 
   * - **Android**: Android system.
   * 
   * - **iOS**: iOS system.
   * 
   * - **Windows_Wuying**: Wuying Cloud Desktop system.
   * 
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @remarks
   * Device operating system version.
   * 
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @remarks
   * Device disk model.
   * 
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @remarks
   * Data protection status. Values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * - **Unprovisioned**: Unprovisioned.
   * 
   * - **Unauthorized**: Unauthorized.
   * 
   * @example
   * Enabled
   */
  dlpStatus?: string;
  /**
   * @remarks
   * Device name.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * Internet access status. Values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * - **Unprovisioned**: Unprovisioned.
   * 
   * @example
   * Enabled
   */
  iaStatus?: string;
  /**
   * @remarks
   * Device private network IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  innerIP?: string;
  /**
   * @remarks
   * Device MAC address.
   * 
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * Device memory capacity. Unit: GB.
   * 
   * @example
   * 16
   */
  memory?: string;
  /**
   * @remarks
   * Network access control status. Values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * - **Unprovisioned**: Unprovisioned.
   * 
   * @example
   * Enabled
   */
  nacStatus?: string;
  /**
   * @remarks
   * NIC list.
   */
  netInterfaceInfo?: UpdateUserDevicesSharingStatusResponseBodyDevicesNetInterfaceInfo[];
  /**
   * @remarks
   * Private network access status. Values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * - **Unprovisioned**: Unprovisioned.
   * 
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * Indicates whether device sharing is enabled. Values:
   * 
   * - **true**: Enable sharing.
   * 
   * - **false**: Disable sharing.
   * 
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @remarks
   * Device logon IP address.
   * 
   * @example
   * 11.49.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * Device last online time.
   * 
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * 王先生
   */
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

export class UpdateUserDevicesSharingStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Device list.
   */
  devices?: UpdateUserDevicesSharingStatusResponseBodyDevices[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': UpdateUserDevicesSharingStatusResponseBodyDevices },
      requestId: 'string',
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

