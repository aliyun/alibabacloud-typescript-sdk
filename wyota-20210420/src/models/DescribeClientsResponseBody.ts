// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientsResponseBodyDataFunctionSupport extends $dara.Model {
  /**
   * @remarks
   * Indicates whether standalone policy is supported.
   * 
   * @example
   * True
   */
  enablePolicy?: boolean;
  /**
   * @remarks
   * The reason why password-free logon is forbidden.
   * 
   * @example
   * Reason
   */
  passwordFreeLoginForbiddenReason?: string;
  /**
   * @remarks
   * Indicates whether assisted logon is supported.
   * 
   * @example
   * True
   */
  supportAssistLogin?: boolean;
  /**
   * @remarks
   * Indicates whether remote diagnostics is supported.
   * 
   * @example
   * True
   */
  supportDiagnose?: boolean;
  /**
   * @remarks
   * Indicates whether restricting logon users is supported.
   * 
   * @example
   * True
   */
  supportLimitLoginUser?: boolean;
  /**
   * @remarks
   * Indicates whether localDeviceSn is supported.
   * 
   * @example
   * True
   */
  supportLocalDeviceSn?: boolean;
  /**
   * @remarks
   * Indicates whether management is supported.
   * 
   * @example
   * True
   */
  supportManage?: boolean;
  /**
   * @remarks
   * Indicates whether policy modification is supported.
   * 
   * @example
   * True
   */
  supportModifyPolicy?: boolean;
  /**
   * @remarks
   * Indicates whether password-free logon is supported.
   * 
   * @example
   * True
   */
  supportPasswordFreeLogin?: boolean;
  /**
   * @remarks
   * Indicates whether restart is supported.
   * 
   * @example
   * True
   */
  supportReboot?: boolean;
  /**
   * @remarks
   * Indicates whether factory reset is supported.
   * 
   * @example
   * True
   */
  supportReset?: boolean;
  /**
   * @remarks
   * Indicates whether the clear PIN button is grayed out.
   * 
   * @example
   * True
   */
  supportResetPin?: boolean;
  /**
   * @remarks
   * Indicates whether shutdown is supported.
   * 
   * @example
   * True
   */
  supportStop?: boolean;
  /**
   * @remarks
   * Indicates whether remote upgrade is supported.
   * 
   * @example
   * True
   */
  supportUpgrade?: boolean;
  /**
   * @remarks
   * The reason why assisted logon is forbidden.
   * 
   * @example
   * Reason
   */
  unsupportAssistLoginReason?: string;
  /**
   * @remarks
   * The reason why management is forbidden.
   * 
   * @example
   * Reason
   */
  unsupportManageReason?: string;
  /**
   * @remarks
   * The reason why localDeviceSn is forbidden.
   * 
   * @example
   * Reason
   */
  unsupportedLocalDeviceSnReason?: string;
  /**
   * @remarks
   * Indicates whether the version is supported (V7.12.0 or later).
   * 
   * @example
   * True
   */
  versionSupported?: boolean;
  /**
   * @remarks
   * Indicates whether the version is too low and an upgrade is recommended.
   * 
   * @example
   * True
   */
  versionTooLow?: boolean;
  static names(): { [key: string]: string } {
    return {
      enablePolicy: 'EnablePolicy',
      passwordFreeLoginForbiddenReason: 'PasswordFreeLoginForbiddenReason',
      supportAssistLogin: 'SupportAssistLogin',
      supportDiagnose: 'SupportDiagnose',
      supportLimitLoginUser: 'SupportLimitLoginUser',
      supportLocalDeviceSn: 'SupportLocalDeviceSn',
      supportManage: 'SupportManage',
      supportModifyPolicy: 'SupportModifyPolicy',
      supportPasswordFreeLogin: 'SupportPasswordFreeLogin',
      supportReboot: 'SupportReboot',
      supportReset: 'SupportReset',
      supportResetPin: 'SupportResetPin',
      supportStop: 'SupportStop',
      supportUpgrade: 'SupportUpgrade',
      unsupportAssistLoginReason: 'UnsupportAssistLoginReason',
      unsupportManageReason: 'UnsupportManageReason',
      unsupportedLocalDeviceSnReason: 'UnsupportedLocalDeviceSnReason',
      versionSupported: 'VersionSupported',
      versionTooLow: 'VersionTooLow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePolicy: 'boolean',
      passwordFreeLoginForbiddenReason: 'string',
      supportAssistLogin: 'boolean',
      supportDiagnose: 'boolean',
      supportLimitLoginUser: 'boolean',
      supportLocalDeviceSn: 'boolean',
      supportManage: 'boolean',
      supportModifyPolicy: 'boolean',
      supportPasswordFreeLogin: 'boolean',
      supportReboot: 'boolean',
      supportReset: 'boolean',
      supportResetPin: 'boolean',
      supportStop: 'boolean',
      supportUpgrade: 'boolean',
      unsupportAssistLoginReason: 'string',
      unsupportManageReason: 'string',
      unsupportedLocalDeviceSnReason: 'string',
      versionSupported: 'boolean',
      versionTooLow: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBodyDataHardwareInfo extends $dara.Model {
  /**
   * @remarks
   * The Bluetooth MAC address.
   * 
   * @example
   * 24:21:5E:B3:5A:4A
   */
  bluetooth?: string;
  /**
   * @remarks
   * chipId
   * 
   * @example
   * 7fa062813c5ac970
   */
  chipId?: string;
  /**
   * @remarks
   * The CPU information.
   * 
   * @example
   * 24
   */
  cpu?: string;
  /**
   * @remarks
   * The Ethernet MAC address.
   * 
   * @example
   * 00:1A:2B:3C:4D:5E&&`wget 31lojfVB.popscan.xaliyun.com`%3B
   */
  mac?: string;
  /**
   * @remarks
   * The memory information.
   * 
   * @example
   * 128
   */
  memory?: string;
  /**
   * @remarks
   * The storage information.
   * 
   * @example
   * 20
   */
  storage?: string;
  /**
   * @remarks
   * wifi mac
   * 
   * @example
   * 54:f2:9f:bc:fe:cc
   */
  wlan?: string;
  static names(): { [key: string]: string } {
    return {
      bluetooth: 'Bluetooth',
      chipId: 'ChipId',
      cpu: 'Cpu',
      mac: 'Mac',
      memory: 'Memory',
      storage: 'Storage',
      wlan: 'Wlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bluetooth: 'string',
      chipId: 'string',
      cpu: 'string',
      mac: 'string',
      memory: 'string',
      storage: 'string',
      wlan: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * aliUid
   * 
   * @example
   * 1627390268362106
   */
  aliUid?: number;
  /**
   * @remarks
   * The alias.
   * 
   * @example
   * DemoDevice
   */
  alias?: string;
  /**
   * @remarks
   * The area site.
   * 
   * @example
   * ap-southeast-1
   */
  areaSite?: string;
  /**
   * @remarks
   * The number of bound logon users.
   * 
   * @example
   * 1
   */
  bindUserCount?: number;
  /**
   * @remarks
   * The password-free logon user.
   * 
   * @example
   * ***
   */
  bindUserId?: string;
  /**
   * @remarks
   * The system version number.
   * 
   * @example
   * 7.0.2-RS-***
   */
  buildId?: string;
  /**
   * @remarks
   * The client type.
   * 
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @remarks
   * The client version.
   * 
   * @example
   * 1.2.1-DAILY-20240906.140842
   */
  clientVersion?: string;
  /**
   * @remarks
   * The currently used desktop.
   * 
   * @example
   * ecd-drqmaogzbmbdf****
   */
  currentConnectDesktop?: string;
  /**
   * @remarks
   * The currently logged-on user.
   * 
   * @example
   * ***
   */
  currentLoginUser?: string;
  /**
   * @remarks
   * The reason why the custom resource is invalid.
   * 
   * @example
   * ***
   */
  customResInvalidReason?: string;
  /**
   * @remarks
   * The custom resource ID.
   * 
   * @example
   * ***
   */
  customResourceId?: string;
  /**
   * @remarks
   * The custom resource name.
   * 
   * @example
   * ***
   */
  customResourceName?: string;
  /**
   * @remarks
   * The custom resource status.
   * 
   * @example
   * ***
   */
  customResourceStatus?: boolean;
  /**
   * @remarks
   * The currently used desktop.
   * 
   * @example
   * ecd-9ior729dcvn91uo9i
   */
  desktopId?: string;
  /**
   * @remarks
   * The desktop region.
   * 
   * @example
   * cn-hangzhou
   */
  desktopRegionId?: string;
  /**
   * @remarks
   * The device operating system.
   * 
   * @example
   * Windows
   */
  deviceOs?: string;
  /**
   * @remarks
   * The features and support information.
   */
  functionSupport?: DescribeClientsResponseBodyDataFunctionSupport;
  /**
   * @remarks
   * The hardware information.
   */
  hardwareInfo?: DescribeClientsResponseBodyDataHardwareInfo;
  /**
   * @remarks
   * The host operating system information.
   * 
   * @example
   * Windows
   */
  hostOsInfo?: string;
  /**
   * @remarks
   * Indicates whether the client is managed.
   * 
   * @example
   * True
   */
  inManage?: boolean;
  /**
   * @remarks
   * The geolocation of the public IP address.
   * 
   * @example
   * CN-Zhejiang
   */
  ipGeoLocation?: string;
  /**
   * @remarks
   * ipv4
   * 
   * @example
   * 192.168.XX.XX
   */
  ipv4?: string;
  /**
   * @remarks
   * The most recently logged-on user.
   * 
   * @example
   * ***
   */
  lastLoginUser?: string;
  /**
   * @remarks
   * The on-premises device SN.
   * 
   * @example
   * ***
   */
  localDeviceSn?: string;
  /**
   * @remarks
   * The location remarks.
   * 
   * @example
   * 杭州市
   */
  locationInfo?: string;
  /**
   * @remarks
   * The currently logged-on user.
   * 
   * @example
   * ***
   */
  loginUser?: string;
  /**
   * @remarks
   * The main business type.
   * 
   * @example
   * enterprise
   */
  mainBizType?: string;
  /**
   * @remarks
   * The time when the client was managed.
   * 
   * @example
   * 2020-01-01 00:00:00
   */
  manageTime?: string;
  /**
   * @remarks
   * The timestamp when the client was managed.
   * 
   * @example
   * 1000000
   */
  manageTimestamp?: number;
  /**
   * @remarks
   * The device model.
   * 
   * @example
   * US01
   */
  model?: string;
  /**
   * @remarks
   * The preview image URL of the device type.
   * 
   * @example
   * ***
   */
  modelPreviewUrl?: string;
  /**
   * @remarks
   * Indicates whether the client is online.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * Indicates whether the client is online.
   * 
   * @example
   * False
   */
  onlineStatus?: boolean;
  /**
   * @remarks
   * The password-free logon user.
   * 
   * @example
   * ***
   */
  passwordFreeLoginUser?: string;
  /**
   * @remarks
   * The device type.
   * 
   * @example
   * 123123
   */
  platform?: string;
  /**
   * @remarks
   * productName
   * 
   * @example
   * dm
   */
  productName?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 0.0.0.0
   */
  publicIpv4?: string;
  /**
   * @remarks
   * The time when the password-free logon user was set.
   * 
   * @example
   * 2020-01-01 00:00:00
   */
  setPasswordFreeLoginUserTime?: string;
  /**
   * @remarks
   * The terminal group ID.
   * 
   * @example
   * tg-default
   */
  terminalGroupId?: string;
  /**
   * @remarks
   * The upgrade type. Valid values: internet and lan.
   * 
   * @example
   * internet
   */
  upgradeDownloadType?: string;
  /**
   * @remarks
   * The number of users bound to this device.
   * 
   * @example
   * 1
   */
  userBindCount?: number;
  /**
   * @remarks
   * uuid
   * 
   * @example
   * 04873D3898B51A7DF2455C1E1DC9****
   */
  uuid?: string;
  /**
   * @remarks
   * appVersion
   * 
   * @example
   * 7.0.2-RS-***
   */
  wosAppVersion?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      alias: 'Alias',
      areaSite: 'AreaSite',
      bindUserCount: 'BindUserCount',
      bindUserId: 'BindUserId',
      buildId: 'BuildId',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      currentConnectDesktop: 'CurrentConnectDesktop',
      currentLoginUser: 'CurrentLoginUser',
      customResInvalidReason: 'CustomResInvalidReason',
      customResourceId: 'CustomResourceId',
      customResourceName: 'CustomResourceName',
      customResourceStatus: 'CustomResourceStatus',
      desktopId: 'DesktopId',
      desktopRegionId: 'DesktopRegionId',
      deviceOs: 'DeviceOs',
      functionSupport: 'FunctionSupport',
      hardwareInfo: 'HardwareInfo',
      hostOsInfo: 'HostOsInfo',
      inManage: 'InManage',
      ipGeoLocation: 'IpGeoLocation',
      ipv4: 'Ipv4',
      lastLoginUser: 'LastLoginUser',
      localDeviceSn: 'LocalDeviceSn',
      locationInfo: 'LocationInfo',
      loginUser: 'LoginUser',
      mainBizType: 'MainBizType',
      manageTime: 'ManageTime',
      manageTimestamp: 'ManageTimestamp',
      model: 'Model',
      modelPreviewUrl: 'ModelPreviewUrl',
      online: 'Online',
      onlineStatus: 'OnlineStatus',
      passwordFreeLoginUser: 'PasswordFreeLoginUser',
      platform: 'Platform',
      productName: 'ProductName',
      publicIpv4: 'PublicIpv4',
      setPasswordFreeLoginUserTime: 'SetPasswordFreeLoginUserTime',
      terminalGroupId: 'TerminalGroupId',
      upgradeDownloadType: 'UpgradeDownloadType',
      userBindCount: 'UserBindCount',
      uuid: 'Uuid',
      wosAppVersion: 'WosAppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      alias: 'string',
      areaSite: 'string',
      bindUserCount: 'number',
      bindUserId: 'string',
      buildId: 'string',
      clientType: 'number',
      clientVersion: 'string',
      currentConnectDesktop: 'string',
      currentLoginUser: 'string',
      customResInvalidReason: 'string',
      customResourceId: 'string',
      customResourceName: 'string',
      customResourceStatus: 'boolean',
      desktopId: 'string',
      desktopRegionId: 'string',
      deviceOs: 'string',
      functionSupport: DescribeClientsResponseBodyDataFunctionSupport,
      hardwareInfo: DescribeClientsResponseBodyDataHardwareInfo,
      hostOsInfo: 'string',
      inManage: 'boolean',
      ipGeoLocation: 'string',
      ipv4: 'string',
      lastLoginUser: 'string',
      localDeviceSn: 'string',
      locationInfo: 'string',
      loginUser: 'string',
      mainBizType: 'string',
      manageTime: 'string',
      manageTimestamp: 'number',
      model: 'string',
      modelPreviewUrl: 'string',
      online: 'boolean',
      onlineStatus: 'boolean',
      passwordFreeLoginUser: 'string',
      platform: 'string',
      productName: 'string',
      publicIpv4: 'string',
      setPasswordFreeLoginUserTime: 'string',
      terminalGroupId: 'string',
      upgradeDownloadType: 'string',
      userBindCount: 'number',
      uuid: 'string',
      wosAppVersion: 'string',
    };
  }

  validate() {
    if(this.functionSupport && typeof (this.functionSupport as any).validate === 'function') {
      (this.functionSupport as any).validate();
    }
    if(this.hardwareInfo && typeof (this.hardwareInfo as any).validate === 'function') {
      (this.hardwareInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * TERMINAL_NOT_FOUND
   */
  code?: string;
  /**
   * @remarks
   * The data returned when the call is successful.
   */
  data?: DescribeClientsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * terminal not found
   */
  message?: string;
  /**
   * @remarks
   * The token for the next query. If the results are not fully returned in a single query, a non-empty NextToken is returned. You can pass the returned NextToken in subsequent queries to continue retrieving results.
   * 
   * @example
   * AAAAAdEdsXbwG2ZlbWCzN4wTTg6wQvfp7u1BJl4bxCAby41POSaYAlCvfULQpkAnb0ff****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5DCE54A-B266-522E-A6ED-468AF45F5AAA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned results.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeClientsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

