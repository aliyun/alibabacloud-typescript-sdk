// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceConfigsResponseBodyDataCustomResourcePackage extends $dara.Model {
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

export class GetDeviceConfigsResponseBodyData extends $dara.Model {
  autoLockScreenTime?: number;
  autoLogin?: number;
  autoUpdate?: number;
  customIdleAction?: number;
  customPowerOn?: number;
  customResourcePackage?: GetDeviceConfigsResponseBodyDataCustomResourcePackage;
  definePowerButton?: number;
  deviceLock?: number;
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
  idleTime?: number;
  localUsbPrint?: number;
  lockPassword?: string;
  scheduledPowerOff?: string;
  secureNetworkType?: string;
  serialNo?: string;
  sleepTime?: number;
  urcl?: string;
  usbStorage?: number;
  userCustomId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      autoLockScreenTime: 'AutoLockScreenTime',
      autoLogin: 'AutoLogin',
      autoUpdate: 'AutoUpdate',
      customIdleAction: 'CustomIdleAction',
      customPowerOn: 'CustomPowerOn',
      customResourcePackage: 'CustomResourcePackage',
      definePowerButton: 'DefinePowerButton',
      deviceLock: 'DeviceLock',
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
      idleTime: 'IdleTime',
      localUsbPrint: 'LocalUsbPrint',
      lockPassword: 'LockPassword',
      scheduledPowerOff: 'ScheduledPowerOff',
      secureNetworkType: 'SecureNetworkType',
      serialNo: 'SerialNo',
      sleepTime: 'SleepTime',
      urcl: 'Urcl',
      usbStorage: 'UsbStorage',
      userCustomId: 'UserCustomId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLockScreenTime: 'number',
      autoLogin: 'number',
      autoUpdate: 'number',
      customIdleAction: 'number',
      customPowerOn: 'number',
      customResourcePackage: GetDeviceConfigsResponseBodyDataCustomResourcePackage,
      definePowerButton: 'number',
      deviceLock: 'number',
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
      idleTime: 'number',
      localUsbPrint: 'number',
      lockPassword: 'string',
      scheduledPowerOff: 'string',
      secureNetworkType: 'string',
      serialNo: 'string',
      sleepTime: 'number',
      urcl: 'string',
      usbStorage: 'number',
      userCustomId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.customResourcePackage && typeof (this.customResourcePackage as any).validate === 'function') {
      (this.customResourcePackage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigsResponseBody extends $dara.Model {
  code?: string;
  data?: GetDeviceConfigsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeviceConfigsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

