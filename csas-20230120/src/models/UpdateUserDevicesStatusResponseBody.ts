// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserDevicesStatusResponseBodyDevicesNetInterfaceInfo extends $dara.Model {
  /**
   * @remarks
   * The MAC address of the NIC.
   * 
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * The NIC name.
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

export class UpdateUserDevicesStatusResponseBodyDevices extends $dara.Model {
  /**
   * @remarks
   * The client status. Valid values:
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
   * The client version.
   * 
   * @example
   * 2.2.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The CPU model of the endpoint device.
   * 
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @remarks
   * The time when the endpoint device was registered.
   * 
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  /**
   * @remarks
   * The department to which the user belongs.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * The ownership of the endpoint device. Valid values:
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
   * The model of the endpoint device.
   * 
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @remarks
   * The status of the endpoint device. Valid values:
   * 
   * - **Online**: Online.
   * 
   * - **Offline**: Offline.
   * 
   * - **LongTermOffline**: Long-term offline.
   * 
   * - **Locked**: Locked.
   * 
   * - **Lost**: Reported as lost.
   * 
   * - **Unbound**: Detached.
   * 
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @remarks
   * The endpoint device ID.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @remarks
   * The operating system type of the endpoint device. Valid values:
   * 
   * - **Windows**: Windows.
   * 
   * - **macOS**: macOS.
   * 
   * - **Linux**: Linux.
   * 
   * - **Android**: Android.
   * 
   * - **iOS**: iOS.
   * 
   * - **Windows_Wuying**: Alibaba Cloud Cloud Desktop.
   * 
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @remarks
   * The operating system version of the endpoint device.
   * 
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @remarks
   * The disk model of the endpoint device.
   * 
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @remarks
   * The data protection status. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * - **Unprovisioned**: Not configured.
   * 
   * - **Unauthorized**: Unauthorized.
   * 
   * @example
   * Enabled
   */
  dlpStatus?: string;
  /**
   * @remarks
   * The device name.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * Internet access status. Valid values:
   * 
   * - **Enabled**: Internet access is enabled.
   * 
   * - **Disabled**: Internet access is disabled.
   * 
   * - **Unprovisioned**: The device is unconfigured.
   * 
   * @example
   * Enabled
   */
  iaStatus?: string;
  /**
   * @remarks
   * The private network IP address of the endpoint device.
   * 
   * @example
   * 192.168.XX.XX
   */
  innerIP?: string;
  /**
   * @remarks
   * The MAC address of the endpoint device.
   * 
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * The memory capacity of the endpoint device, in GB.
   * 
   * @example
   * 16
   */
  memory?: string;
  /**
   * @remarks
   * The network admission control status. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * - **Unprovisioned**: Not configured.
   * 
   * @example
   * Enabled
   */
  nacStatus?: string;
  /**
   * @remarks
   * A list of network interface controllers (NICs) on the endpoint device.
   */
  netInterfaceInfo?: UpdateUserDevicesStatusResponseBodyDevicesNetInterfaceInfo[];
  /**
   * @remarks
   * The private network access status. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * - **Unprovisioned**: Not configured.
   * 
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * Whether sharing is enabled for the device. Valid values:
   * 
   * - **true**: Sharing is enabled.
   * 
   * - **false**: Sharing is disabled.
   * 
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @remarks
   * The IP address used to log on to the endpoint device.
   * 
   * @example
   * 11.49.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The last time the endpoint device was online.
   * 
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  /**
   * @remarks
   * The username.
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
      netInterfaceInfo: { 'type': 'array', 'itemType': UpdateUserDevicesStatusResponseBodyDevicesNetInterfaceInfo },
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

export class UpdateUserDevicesStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of endpoint devices.
   */
  devices?: UpdateUserDevicesStatusResponseBodyDevices[];
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
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
      devices: { 'type': 'array', 'itemType': UpdateUserDevicesStatusResponseBodyDevices },
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

