// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDevicesResponseBodyDevicesNetInterfaceInfo extends $dara.Model {
  /**
   * @remarks
   * The MAC address of the network interface.
   * 
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * The name of the network interface.
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

export class ListUserDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @remarks
   * The client status. Valid values:
   * - **Online**: Online.
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
   * The auto-login status of the client.
   * 
   * @example
   * Enabled
   */
  autoLoginStatus?: string;
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
   * The registration time of the endpoint device. Format: YYYY-MM-DD HH:mm:ss.
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
   * Test Department
   */
  department?: string;
  /**
   * @remarks
   * The ownership of the terminal device. Valid values:
   * - **Personal**: Personal device.
   * - **Company**: Corporate device.
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
   * - **Online**: Online.
   * - **Offline**: Offline.
   * - **LongTermOffline**: Long-term offline.
   * - **Locked**: Locked.
   * - **Lost**: Reported as lost.
   * - **Unbound**: Unbound.
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
   * The terminal device operating system type. Valid values:
   * - **Windows**: Windows.
   * - **macOS**: macOS.
   * - **Linux**: Linux.
   * - **Android**: Android.
   * - **iOS**: iOS.
   * - **Windows_Wuying**: Wuying cloud desktop.
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
   * The disk encryption status of the user endpoint device. Valid values: Unsupported (encryption is not supported), Unencrypted (not encrypted), Encrypting (encrypting), Encrypted (encrypted), and EncryptFailed (encryption failed). If the status is not reported, null, or unknown, Unencrypted is returned.
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
   * The current operating system version does not support BitLocker.
   */
  diskEncryptStatusReason?: string;
  /**
   * @remarks
   * The office data protection status. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * - **Unprovisioned**: Unprovisioned.
   * - **Unauthorized**: Unauthorized.
   * 
   * @example
   * Enabled
   */
  dlpStatus?: string;
  /**
   * @remarks
   * The anti-intrusion status. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  edrStatus?: string;
  /**
   * @remarks
   * The list of full department paths.
   */
  fullDepartment?: string[];
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
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * - **Unprovisioned**: Unprovisioned.
   * 
   * @example
   * Enabled
   */
  iaStatus?: string;
  /**
   * @remarks
   * The internal IP address of the terminal device.
   * 
   * @example
   * 192.168.XX.XX
   */
  innerIP?: string;
  /**
   * @remarks
   * Indicates whether the device is joined to an AD domain.
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
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @remarks
   * The IDs of the matched device groups.
   */
  matchDeviceGroupIds?: string[];
  /**
   * @remarks
   * The memory capacity of the endpoint device. Unit: GB.
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
   * Enabled
   */
  nacStatus?: string;
  /**
   * @remarks
   * The list of network interfaces.
   */
  netInterfaceInfo?: ListUserDevicesResponseBodyDevicesNetInterfaceInfo[];
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
   * Specifies whether sharing is enabled for the device. Valid values:
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
   * 11.49.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The last online time of the terminal device, in the YYYY-MM-DD HH:mm:ss format.
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
      diskEncryptStatus: 'DiskEncryptStatus',
      diskEncryptStatusReason: 'DiskEncryptStatusReason',
      dlpStatus: 'DlpStatus',
      edrStatus: 'EdrStatus',
      fullDepartment: 'FullDepartment',
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
      diskEncryptStatus: 'string',
      diskEncryptStatusReason: 'string',
      dlpStatus: 'string',
      edrStatus: 'string',
      fullDepartment: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      joinAdDomain: 'boolean',
      mac: 'string',
      matchDeviceGroupIds: { 'type': 'array', 'itemType': 'string' },
      memory: 'string',
      nacStatus: 'string',
      netInterfaceInfo: { 'type': 'array', 'itemType': ListUserDevicesResponseBodyDevicesNetInterfaceInfo },
      paStatus: 'string',
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
      updateTime: 'string',
      username: 'string',
      workshop: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fullDepartment)) {
      $dara.Model.validateArray(this.fullDepartment);
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

export class ListUserDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of endpoint devices.
   */
  devices?: ListUserDevicesResponseBodyDevices[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of terminal devices.
   * 
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

