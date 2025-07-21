// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevicesResponseBodyDataConnectConfigs extends $dara.Model {
  connectScript?: string;
  peripheralPid?: string;
  peripheralVid?: string;
  redirectPolicy?: number;
  static names(): { [key: string]: string } {
    return {
      connectScript: 'ConnectScript',
      peripheralPid: 'PeripheralPid',
      peripheralVid: 'PeripheralVid',
      redirectPolicy: 'RedirectPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectScript: 'string',
      peripheralPid: 'string',
      peripheralVid: 'string',
      redirectPolicy: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDataCustomResourcePackage extends $dara.Model {
  configAboutLogo?: string;
  desktopWallpaper?: string;
  loginPageBackground?: string;
  loginPageLogo?: string;
  personalCenterLogo?: string;
  startLogo?: string;
  startMenuLogo?: string;
  upgradeLogo?: string;
  static names(): { [key: string]: string } {
    return {
      configAboutLogo: 'ConfigAboutLogo',
      desktopWallpaper: 'DesktopWallpaper',
      loginPageBackground: 'LoginPageBackground',
      loginPageLogo: 'LoginPageLogo',
      personalCenterLogo: 'PersonalCenterLogo',
      startLogo: 'StartLogo',
      startMenuLogo: 'StartMenuLogo',
      upgradeLogo: 'UpgradeLogo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configAboutLogo: 'string',
      desktopWallpaper: 'string',
      loginPageBackground: 'string',
      loginPageLogo: 'string',
      personalCenterLogo: 'string',
      startLogo: 'string',
      startMenuLogo: 'string',
      upgradeLogo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDataEndUserList extends $dara.Model {
  adDomain?: string;
  bindTime?: string;
  directoryId?: string;
  endUserId?: string;
  id?: number;
  serialNo?: string;
  tenantId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      bindTime: 'BindTime',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      id: 'Id',
      serialNo: 'SerialNo',
      tenantId: 'TenantId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      bindTime: 'string',
      directoryId: 'string',
      endUserId: 'string',
      id: 'number',
      serialNo: 'string',
      tenantId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDataLabelList extends $dara.Model {
  content?: string;
  gmtCreate?: number;
  gmtModified?: number;
  labelId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      labelId: 'LabelId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      labelId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDataPeripheralConfig extends $dara.Model {
  defaultPolicy?: number;
  policyStrategy?: number;
  usbAndInternalCamera?: number;
  usbPrinter?: number;
  usbStorage?: number;
  static names(): { [key: string]: string } {
    return {
      defaultPolicy: 'DefaultPolicy',
      policyStrategy: 'PolicyStrategy',
      usbAndInternalCamera: 'UsbAndInternalCamera',
      usbPrinter: 'UsbPrinter',
      usbStorage: 'UsbStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPolicy: 'number',
      policyStrategy: 'number',
      usbAndInternalCamera: 'number',
      usbPrinter: 'number',
      usbStorage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyData extends $dara.Model {
  activeTime?: string;
  alias?: string;
  autoLockScreenTime?: number;
  autoLogin?: number;
  autoType?: string;
  bluetooth?: string;
  buildId?: string;
  clientId?: string;
  clientType?: string;
  connectConfigs?: ListDevicesResponseBodyDataConnectConfigs[];
  customIdleAction?: number;
  customPowerOn?: number;
  customProperty?: string;
  customResourcePackage?: ListDevicesResponseBodyDataCustomResourcePackage;
  definePowerButton?: number;
  deviceIpV4?: string;
  deviceLock?: number;
  deviceMqttConnectionStatus?: number;
  deviceName?: string;
  deviceOS?: string;
  devicePlatform?: string;
  displayLayout?: string;
  displayResolution?: string;
  displayScaleRatio?: string;
  enableAdb?: number;
  enableAutoLockScreen?: number;
  enableBluetooth?: number;
  enableLockScreenPassword?: number;
  enableModifyPassword?: number;
  enableScheduledPowerOff?: number;
  enableUnlockPassword?: number;
  enableWlan?: number;
  endUserList?: ListDevicesResponseBodyDataEndUserList[];
  etherMac?: string;
  gmtModified?: string;
  gmtSync?: string;
  id?: number;
  idleTime?: number;
  isActive?: string;
  labelList?: ListDevicesResponseBodyDataLabelList[];
  lastLoginUser?: string;
  localUsbPrint?: number;
  locationInfo?: string;
  lockPassword?: string;
  model?: string;
  orderId?: string;
  peripheralConfig?: ListDevicesResponseBodyDataPeripheralConfig;
  scheduledPowerOff?: string;
  secureNetworkType?: string;
  serialNo?: string;
  sleepTime?: number;
  source?: string;
  tenantId?: string;
  usbStorage?: number;
  uuid?: string;
  wlan?: string;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      alias: 'Alias',
      autoLockScreenTime: 'AutoLockScreenTime',
      autoLogin: 'AutoLogin',
      autoType: 'AutoType',
      bluetooth: 'Bluetooth',
      buildId: 'BuildId',
      clientId: 'ClientId',
      clientType: 'ClientType',
      connectConfigs: 'ConnectConfigs',
      customIdleAction: 'CustomIdleAction',
      customPowerOn: 'CustomPowerOn',
      customProperty: 'CustomProperty',
      customResourcePackage: 'CustomResourcePackage',
      definePowerButton: 'DefinePowerButton',
      deviceIpV4: 'DeviceIpV4',
      deviceLock: 'DeviceLock',
      deviceMqttConnectionStatus: 'DeviceMqttConnectionStatus',
      deviceName: 'DeviceName',
      deviceOS: 'DeviceOS',
      devicePlatform: 'DevicePlatform',
      displayLayout: 'DisplayLayout',
      displayResolution: 'DisplayResolution',
      displayScaleRatio: 'DisplayScaleRatio',
      enableAdb: 'EnableAdb',
      enableAutoLockScreen: 'EnableAutoLockScreen',
      enableBluetooth: 'EnableBluetooth',
      enableLockScreenPassword: 'EnableLockScreenPassword',
      enableModifyPassword: 'EnableModifyPassword',
      enableScheduledPowerOff: 'EnableScheduledPowerOff',
      enableUnlockPassword: 'EnableUnlockPassword',
      enableWlan: 'EnableWlan',
      endUserList: 'EndUserList',
      etherMac: 'EtherMac',
      gmtModified: 'GmtModified',
      gmtSync: 'GmtSync',
      id: 'Id',
      idleTime: 'IdleTime',
      isActive: 'IsActive',
      labelList: 'LabelList',
      lastLoginUser: 'LastLoginUser',
      localUsbPrint: 'LocalUsbPrint',
      locationInfo: 'LocationInfo',
      lockPassword: 'LockPassword',
      model: 'Model',
      orderId: 'OrderId',
      peripheralConfig: 'PeripheralConfig',
      scheduledPowerOff: 'ScheduledPowerOff',
      secureNetworkType: 'SecureNetworkType',
      serialNo: 'SerialNo',
      sleepTime: 'SleepTime',
      source: 'Source',
      tenantId: 'TenantId',
      usbStorage: 'UsbStorage',
      uuid: 'Uuid',
      wlan: 'Wlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      alias: 'string',
      autoLockScreenTime: 'number',
      autoLogin: 'number',
      autoType: 'string',
      bluetooth: 'string',
      buildId: 'string',
      clientId: 'string',
      clientType: 'string',
      connectConfigs: { 'type': 'array', 'itemType': ListDevicesResponseBodyDataConnectConfigs },
      customIdleAction: 'number',
      customPowerOn: 'number',
      customProperty: 'string',
      customResourcePackage: ListDevicesResponseBodyDataCustomResourcePackage,
      definePowerButton: 'number',
      deviceIpV4: 'string',
      deviceLock: 'number',
      deviceMqttConnectionStatus: 'number',
      deviceName: 'string',
      deviceOS: 'string',
      devicePlatform: 'string',
      displayLayout: 'string',
      displayResolution: 'string',
      displayScaleRatio: 'string',
      enableAdb: 'number',
      enableAutoLockScreen: 'number',
      enableBluetooth: 'number',
      enableLockScreenPassword: 'number',
      enableModifyPassword: 'number',
      enableScheduledPowerOff: 'number',
      enableUnlockPassword: 'number',
      enableWlan: 'number',
      endUserList: { 'type': 'array', 'itemType': ListDevicesResponseBodyDataEndUserList },
      etherMac: 'string',
      gmtModified: 'string',
      gmtSync: 'string',
      id: 'number',
      idleTime: 'number',
      isActive: 'string',
      labelList: { 'type': 'array', 'itemType': ListDevicesResponseBodyDataLabelList },
      lastLoginUser: 'string',
      localUsbPrint: 'number',
      locationInfo: 'string',
      lockPassword: 'string',
      model: 'string',
      orderId: 'string',
      peripheralConfig: ListDevicesResponseBodyDataPeripheralConfig,
      scheduledPowerOff: 'string',
      secureNetworkType: 'string',
      serialNo: 'string',
      sleepTime: 'number',
      source: 'string',
      tenantId: 'string',
      usbStorage: 'number',
      uuid: 'string',
      wlan: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectConfigs)) {
      $dara.Model.validateArray(this.connectConfigs);
    }
    if(this.customResourcePackage && typeof (this.customResourcePackage as any).validate === 'function') {
      (this.customResourcePackage as any).validate();
    }
    if(Array.isArray(this.endUserList)) {
      $dara.Model.validateArray(this.endUserList);
    }
    if(Array.isArray(this.labelList)) {
      $dara.Model.validateArray(this.labelList);
    }
    if(this.peripheralConfig && typeof (this.peripheralConfig as any).validate === 'function') {
      (this.peripheralConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBody extends $dara.Model {
  code?: string;
  data?: ListDevicesResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDevicesResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

