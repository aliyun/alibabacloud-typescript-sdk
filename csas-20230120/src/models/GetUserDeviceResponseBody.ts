// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserDeviceResponseBodyDeviceHistoryUsers extends $dara.Model {
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
   * The username.
   * 
   * @example
   * Ms. Zhang
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceResponseBodyDeviceNetInterfaceInfo extends $dara.Model {
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
   * The name of the NIC.
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

export class GetUserDeviceResponseBodyDeviceProcesses extends $dara.Model {
  /**
   * @remarks
   * The percentage of CPU usage by the process.
   * 
   * @example
   * 0.05
   */
  cpu?: number;
  /**
   * @remarks
   * The description of the running process.
   * 
   * @example
   * C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe
   */
  description?: string;
  /**
   * @remarks
   * The memory usage of the process. Unit: MB.
   * 
   * @example
   * 233
   */
  memory?: number;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * chrome.exe
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      description: 'Description',
      memory: 'Memory',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      description: 'string',
      memory: 'number',
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

export class GetUserDeviceResponseBodyDevice extends $dara.Model {
  /**
   * @remarks
   * The client status. Valid values:
   * - **Online**: online
   * - **Offline**: offline
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
   * The passwordless login status of the device. Valid values:
   * - **Enabled**: enabled
   * - **Disabled**: disabled
   * - **Unprovisioned**: unprovisioned
   * 
   * @example
   * Enabled
   */
  autoLoginStatus?: string;
  /**
   * @remarks
   * The battery health.
   * 
   * @example
   * 100
   */
  batteryHealthPercentage?: number;
  /**
   * @remarks
   * The remaining battery percentage.
   * 
   * @example
   * 90
   */
  batteryRemainingPercentage?: number;
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
   * The city to which the public IP address belongs.
   * 
   * @example
   * Hangzhou City
   */
  city?: string;
  /**
   * @remarks
   * The city in English.
   * 
   * @example
   * Beijing City
   */
  cityEn?: string;
  /**
   * @remarks
   * The city in Chinese.
   * 
   * @example
   * 北京市
   */
  cityZh?: string;
  /**
   * @remarks
   * The continent to which the public IP address belongs.
   * 
   * @example
   * Asia
   */
  continent?: string;
  /**
   * @remarks
   * The continent in English.
   * 
   * @example
   * Asia
   */
  continentEn?: string;
  /**
   * @remarks
   * The continent in Chinese.
   * 
   * @example
   * 亚洲
   */
  continentZh?: string;
  /**
   * @remarks
   * The country to which the public IP address belongs.
   * 
   * @example
   * China
   */
  country?: string;
  /**
   * @remarks
   * The country in English.
   * 
   * @example
   * China
   */
  countryEn?: string;
  /**
   * @remarks
   * The country in Chinese.
   * 
   * @example
   * 中国
   */
  countryZh?: string;
  /**
   * @remarks
   * The registration time of the endpoint device. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  /**
   * @remarks
   * The department to which the user belongs.
   * 
   * @example
   * Test Department
   */
  department?: string;
  /**
   * @remarks
   * The ownership of the endpoint device. Valid values:
   * - **Personal**: personal device
   * - **Company**: company device
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
   * - **Online**: online
   * - **Offline**: offline
   * - **LongTermOffline**: long-term offline
   * - **Locked**: locked
   * - **Lost**: lost
   * - **Unbound**: unbound
   * 
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @remarks
   * The ID of the endpoint device.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @remarks
   * The operating system type of the endpoint device. Valid values:
   * - **Windows**: Windows
   * - **macOS**: macOS
   * - **Linux**: Linux
   * - **Android**: Android
   * - **iOS**: iOS
   * - **Windows_Wuying**: WUYING Workspace
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
   * The available disk space. Unit: GB.
   * 
   * @example
   * 200
   */
  diskAvailable?: number;
  /**
   * @remarks
   * The disk encryption status of the user endpoint device. Valid values: Unsupported (encryption not supported), Unencrypted (not encrypted), Encrypting (encrypting), Encrypted (encrypted), and EncryptFailed (encryption failed). If the status is not reported, is null, or is unknown, Unencrypted is returned.
   * 
   * @example
   * Unsupported
   */
  diskEncryptStatus?: string;
  /**
   * @remarks
   * The reason why disk encryption failed or is not supported on the user endpoint device. This reason is returned only when DiskEncryptStatus is Unsupported or EncryptFailed. For other statuses, an empty string is returned. Maximum length: 512 characters.
   * 
   * @example
   * The current operating system version does not support BitLocker
   */
  diskEncryptStatusReason?: string;
  /**
   * @remarks
   * The used disk space. Unit: GB.
   * 
   * @example
   * 103
   */
  diskUsed?: number;
  /**
   * @remarks
   * The office data protection status. Valid values:
   * - **Enabled**: enabled
   * - **Disabled**: disabled
   * - **Unprovisioned**: unprovisioned
   * - **Unauthorized**: unauthorized
   * 
   * @example
   * Unauthorized
   */
  dlpStatus?: string;
  /**
   * @remarks
   * The anti-intrusion status. Valid values:
   * - **Enabled**: enabled
   * - **Disabled**: disabled
   * 
   * @example
   * Disabled
   */
  edrStatus?: string;
  /**
   * @remarks
   * The collection of historical users of the endpoint device.
   */
  historyUsers?: GetUserDeviceResponseBodyDeviceHistoryUsers[];
  /**
   * @remarks
   * The name of the endpoint device.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * The Internet access status. Valid values:
   * - **Enabled**: enabled
   * - **Disabled**: disabled
   * - **Unprovisioned**: unprovisioned
   * 
   * @example
   * Disabled
   */
  iaStatus?: string;
  /**
   * @remarks
   * The internal IP address of the endpoint device.
   * 
   * @example
   * 172.16.XX.XX
   */
  innerIP?: string;
  /**
   * @remarks
   * Indicates whether the endpoint has joined an Active Directory (AD) domain.
   * 
   * @example
   * true
   */
  joinAdDomain?: boolean;
  /**
   * @remarks
   * The MAC address of the endpoint device.
   * 
   * @example
   * 48:9e:XX:XX:02:80
   */
  mac?: string;
  /**
   * @remarks
   * The collection of matched device group IDs.
   */
  matchDeviceGroupIds?: string[];
  /**
   * @remarks
   * The memory capacity of the terminal device. Unit: GB.
   * 
   * @example
   * 16
   */
  memory?: string;
  /**
   * @remarks
   * The network access control status. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * - **Unprovisioned**: Unprovisioned.
   * 
   * @example
   * Unprovisioned
   */
  nacStatus?: string;
  /**
   * @remarks
   * The list of network interface controllers (NICs) of the terminal device.
   */
  netInterfaceInfo?: GetUserDeviceResponseBodyDeviceNetInterfaceInfo[];
  /**
   * @remarks
   * The internal network access status. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * - **Unprovisioned**: Unprovisioned.
   * 
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @remarks
   * The list of running processes on the terminal device.
   */
  processes?: GetUserDeviceResponseBodyDeviceProcesses[];
  /**
   * @remarks
   * The province to which the public IP address belongs.
   * 
   * @example
   * Zhejiang
   */
  province?: string;
  /**
   * @remarks
   * The province in English.
   * 
   * @example
   * Beijing
   */
  provinceEn?: string;
  /**
   * @remarks
   * The province in Chinese.
   * 
   * @example
   * 北京市
   */
  provinceZh?: string;
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
   * Indicates whether sharing is enabled for the device. Valid values:
   * - **true**: Sharing is enabled.
   * - **false**: Sharing is disabled.
   * 
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @remarks
   * The serial number of the baseboard.
   * 
   * @example
   * PJGGU00WBD****
   */
  snBaseBoard?: string;
  /**
   * @remarks
   * The serial number of the BIOS.
   * 
   * @example
   * 5CG003****
   */
  snBios?: string;
  /**
   * @remarks
   * The serial number of the disk drive.
   * 
   * @example
   * WD-WXR1A99A****
   */
  snDiskDrive?: string;
  /**
   * @remarks
   * The serial number of the processor.
   * 
   * @example
   * BFEBFBFF0008****
   */
  snProcessor?: string;
  /**
   * @remarks
   * The serial number of the system.
   * 
   * @example
   * KVN9C9****
   */
  snSystem?: string;
  /**
   * @remarks
   * The logon IP address of the terminal device.
   * 
   * @example
   * 106.14.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The timestamp when the terminal process information was collected.
   * 
   * @example
   * 1775096714
   */
  terminalInfoCollectTime?: number;
  /**
   * @remarks
   * The last online time of the terminal device. Format: YYYY-MM-DD HH:mm:ss.
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
   * Mr. Wang
   */
  username?: string;
  /**
   * @remarks
   * The name of the office area.
   * 
   * @example
   * Test office area
   */
  workshop?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      appVersion: 'AppVersion',
      autoLoginStatus: 'AutoLoginStatus',
      batteryHealthPercentage: 'BatteryHealthPercentage',
      batteryRemainingPercentage: 'BatteryRemainingPercentage',
      CPU: 'CPU',
      city: 'City',
      cityEn: 'CityEn',
      cityZh: 'CityZh',
      continent: 'Continent',
      continentEn: 'ContinentEn',
      continentZh: 'ContinentZh',
      country: 'Country',
      countryEn: 'CountryEn',
      countryZh: 'CountryZh',
      createTime: 'CreateTime',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceModel: 'DeviceModel',
      deviceStatus: 'DeviceStatus',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      deviceVersion: 'DeviceVersion',
      disk: 'Disk',
      diskAvailable: 'DiskAvailable',
      diskEncryptStatus: 'DiskEncryptStatus',
      diskEncryptStatusReason: 'DiskEncryptStatusReason',
      diskUsed: 'DiskUsed',
      dlpStatus: 'DlpStatus',
      edrStatus: 'EdrStatus',
      historyUsers: 'HistoryUsers',
      hostname: 'Hostname',
      iaStatus: 'IaStatus',
      innerIP: 'InnerIP',
      joinAdDomain: 'JoinAdDomain',
      mac: 'Mac',
      matchDeviceGroupIds: 'MatchDeviceGroupIds',
      memory: 'Memory',
      nacStatus: 'NacStatus',
      netInterfaceInfo: 'NetInterfaceInfo',
      paStatus: 'PaStatus',
      processes: 'Processes',
      province: 'Province',
      provinceEn: 'ProvinceEn',
      provinceZh: 'ProvinceZh',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      snBaseBoard: 'SnBaseBoard',
      snBios: 'SnBios',
      snDiskDrive: 'SnDiskDrive',
      snProcessor: 'SnProcessor',
      snSystem: 'SnSystem',
      srcIP: 'SrcIP',
      terminalInfoCollectTime: 'TerminalInfoCollectTime',
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
      batteryHealthPercentage: 'number',
      batteryRemainingPercentage: 'number',
      CPU: 'string',
      city: 'string',
      cityEn: 'string',
      cityZh: 'string',
      continent: 'string',
      continentEn: 'string',
      continentZh: 'string',
      country: 'string',
      countryEn: 'string',
      countryZh: 'string',
      createTime: 'string',
      department: 'string',
      deviceBelong: 'string',
      deviceModel: 'string',
      deviceStatus: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      deviceVersion: 'string',
      disk: 'string',
      diskAvailable: 'number',
      diskEncryptStatus: 'string',
      diskEncryptStatusReason: 'string',
      diskUsed: 'number',
      dlpStatus: 'string',
      edrStatus: 'string',
      historyUsers: { 'type': 'array', 'itemType': GetUserDeviceResponseBodyDeviceHistoryUsers },
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      joinAdDomain: 'boolean',
      mac: 'string',
      matchDeviceGroupIds: { 'type': 'array', 'itemType': 'string' },
      memory: 'string',
      nacStatus: 'string',
      netInterfaceInfo: { 'type': 'array', 'itemType': GetUserDeviceResponseBodyDeviceNetInterfaceInfo },
      paStatus: 'string',
      processes: { 'type': 'array', 'itemType': GetUserDeviceResponseBodyDeviceProcesses },
      province: 'string',
      provinceEn: 'string',
      provinceZh: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      snBaseBoard: 'string',
      snBios: 'string',
      snDiskDrive: 'string',
      snProcessor: 'string',
      snSystem: 'string',
      srcIP: 'string',
      terminalInfoCollectTime: 'number',
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
    if(Array.isArray(this.processes)) {
      $dara.Model.validateArray(this.processes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint device.
   */
  device?: GetUserDeviceResponseBodyDevice;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: GetUserDeviceResponseBodyDevice,
      requestId: 'string',
    };
  }

  validate() {
    if(this.device && typeof (this.device as any).validate === 'function') {
      (this.device as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

