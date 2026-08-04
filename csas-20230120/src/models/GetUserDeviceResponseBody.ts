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
   * The CPU usage percentage of the process.
   * 
   * @example
   * 0.05
   */
  cpu?: number;
  /**
   * @remarks
   * The process running description.
   * 
   * @example
   * C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe
   */
  description?: string;
  /**
   * @remarks
   * The memory usage of the process, in MB.
   * 
   * @example
   * 233
   */
  memory?: number;
  /**
   * @remarks
   * The process name.
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
   * The auto-logon status of the device. Valid values:
   * 
   * @example
   * Enabled
   */
  autoLoginStatus?: string;
  /**
   * @remarks
   * The battery health percentage.
   * 
   * @example
   * 100
   */
  batteryHealthPercentage?: number;
  /**
   * @remarks
   * The battery remaining charge percentage.
   * 
   * @example
   * 90
   */
  batteryRemainingPercentage?: number;
  /**
   * @remarks
   * The CPU model of the terminal device.
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
   * The city name in English.
   * 
   * @example
   * Beijing City
   */
  cityEn?: string;
  /**
   * @remarks
   * The city name in Chinese.
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
   * The continent name in English.
   * 
   * @example
   * Asia
   */
  continentEn?: string;
  /**
   * @remarks
   * The continent name in Chinese.
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
   * The country name in English.
   * 
   * @example
   * China
   */
  countryEn?: string;
  /**
   * @remarks
   * The country name in Chinese.
   * 
   * @example
   * 中国
   */
  countryZh?: string;
  /**
   * @remarks
   * The registration time of the terminal device.
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
   * QA Department
   */
  department?: string;
  /**
   * @remarks
   * The ownership of the terminal device. Valid values:
   * 
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @remarks
   * The model of the terminal device.
   * 
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @remarks
   * The status of the terminal device. Valid values:
   * 
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @remarks
   * The ID of the terminal device.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @remarks
   * The operating system type of the terminal device. Valid values:
   * 
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @remarks
   * The operating system version of the terminal device.
   * 
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @remarks
   * The disk model of the terminal device.
   * 
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @remarks
   * The available disk space, in GB.
   * 
   * @example
   * 200
   */
  diskAvailable?: number;
  /**
   * @remarks
   * The used disk space, in GB.
   * 
   * @example
   * 103
   */
  diskUsed?: number;
  /**
   * @remarks
   * The office data protection status. Valid values:
   * 
   * @example
   * Unauthorized
   */
  dlpStatus?: string;
  /**
   * @remarks
   * The anti-intrusion status. Valid values:
   * 
   * @example
   * Disabled
   */
  edrStatus?: string;
  /**
   * @remarks
   * The historical users of the terminal device.
   */
  historyUsers?: GetUserDeviceResponseBodyDeviceHistoryUsers[];
  /**
   * @remarks
   * The name of the terminal device.
   * 
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @remarks
   * The Internet access status. Valid values:
   * 
   * @example
   * Disabled
   */
  iaStatus?: string;
  /**
   * @remarks
   * The internal IP address of the terminal device.
   * 
   * @example
   * 172.16.XX.XX
   */
  innerIP?: string;
  /**
   * @remarks
   * Indicates whether the terminal has joined an AD domain.
   * 
   * @example
   * true
   */
  joinAdDomain?: boolean;
  /**
   * @remarks
   * The MAC address of the terminal device.
   * 
   * @example
   * 48:9e:XX:XX:02:80
   */
  mac?: string;
  /**
   * @remarks
   * The IDs of matched device groups.
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
   * The private access status. Valid values:
   * 
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @remarks
   * The list of processes running on the terminal.
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
   * The province name in English.
   * 
   * @example
   * Beijing
   */
  provinceEn?: string;
  /**
   * @remarks
   * The province name in Chinese.
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
   * 
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @remarks
   * The motherboard serial number.
   * 
   * @example
   * PJGGU00WBD****
   */
  snBaseBoard?: string;
  /**
   * @remarks
   * The serial number (SN) of the BIOS system.
   * 
   * @example
   * 5CG003****
   */
  snBios?: string;
  /**
   * @remarks
   * The hard disk serial number.
   * 
   * @example
   * WD-WXR1A99A****
   */
  snDiskDrive?: string;
  /**
   * @remarks
   * The serial number (SN) of the processor.
   * 
   * @example
   * BFEBFBFF0008****
   */
  snProcessor?: string;
  /**
   * @remarks
   * The system serial number.
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
   * The last online time of the terminal device.
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
   * Test Office Area
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
   * The terminal device.
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

