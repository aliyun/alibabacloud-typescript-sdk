// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTerminalPolicyRequest extends $dara.Model {
  allowManualLockScreen?: number;
  backgroundModeTitle?: string;
  customScreenCastRes?: boolean;
  displayLayout?: string;
  displayResolution?: string;
  displayScaleRatio?: string;
  enableAutoLockScreen?: number;
  enableAutoLogin?: number;
  enableBackgroundMode?: number;
  enableBluetooth?: number;
  enableControlPanel?: number;
  enableImmersiveMode?: number;
  enableLockScreenHotKey?: number;
  enableModifyPassword?: number;
  enableScanLogin?: number;
  enableScheduledReboot?: number;
  enableScheduledShutdown?: number;
  enableSmsLogin?: number;
  enableSwitchPersonal?: number;
  enableWlan?: number;
  followCloudReboot?: number;
  followCloudShutdown?: number;
  followTerminalReboot?: number;
  followTerminalShutdown?: number;
  forceSetPinCode?: number;
  idleTimeout?: number;
  idleTimeoutAction?: number;
  lockScreenPasswordRequired?: number;
  lockScreenTimeout?: number;
  mainBizType?: string;
  name?: string;
  powerButtonDefine?: number;
  powerButtonDefineForAs?: number;
  powerButtonDefineForNs?: number;
  powerOnBehavior?: number;
  runningMode?: string;
  scheduledReboot?: string;
  scheduledShutdown?: string;
  screenCastResPaths?: string[];
  settingLock?: number;
  terminalPolicyId?: string;
  unlockMethod?: number;
  static names(): { [key: string]: string } {
    return {
      allowManualLockScreen: 'AllowManualLockScreen',
      backgroundModeTitle: 'BackgroundModeTitle',
      customScreenCastRes: 'CustomScreenCastRes',
      displayLayout: 'DisplayLayout',
      displayResolution: 'DisplayResolution',
      displayScaleRatio: 'DisplayScaleRatio',
      enableAutoLockScreen: 'EnableAutoLockScreen',
      enableAutoLogin: 'EnableAutoLogin',
      enableBackgroundMode: 'EnableBackgroundMode',
      enableBluetooth: 'EnableBluetooth',
      enableControlPanel: 'EnableControlPanel',
      enableImmersiveMode: 'EnableImmersiveMode',
      enableLockScreenHotKey: 'EnableLockScreenHotKey',
      enableModifyPassword: 'EnableModifyPassword',
      enableScanLogin: 'EnableScanLogin',
      enableScheduledReboot: 'EnableScheduledReboot',
      enableScheduledShutdown: 'EnableScheduledShutdown',
      enableSmsLogin: 'EnableSmsLogin',
      enableSwitchPersonal: 'EnableSwitchPersonal',
      enableWlan: 'EnableWlan',
      followCloudReboot: 'FollowCloudReboot',
      followCloudShutdown: 'FollowCloudShutdown',
      followTerminalReboot: 'FollowTerminalReboot',
      followTerminalShutdown: 'FollowTerminalShutdown',
      forceSetPinCode: 'ForceSetPinCode',
      idleTimeout: 'IdleTimeout',
      idleTimeoutAction: 'IdleTimeoutAction',
      lockScreenPasswordRequired: 'LockScreenPasswordRequired',
      lockScreenTimeout: 'LockScreenTimeout',
      mainBizType: 'MainBizType',
      name: 'Name',
      powerButtonDefine: 'PowerButtonDefine',
      powerButtonDefineForAs: 'PowerButtonDefineForAs',
      powerButtonDefineForNs: 'PowerButtonDefineForNs',
      powerOnBehavior: 'PowerOnBehavior',
      runningMode: 'RunningMode',
      scheduledReboot: 'ScheduledReboot',
      scheduledShutdown: 'ScheduledShutdown',
      screenCastResPaths: 'ScreenCastResPaths',
      settingLock: 'SettingLock',
      terminalPolicyId: 'TerminalPolicyId',
      unlockMethod: 'UnlockMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowManualLockScreen: 'number',
      backgroundModeTitle: 'string',
      customScreenCastRes: 'boolean',
      displayLayout: 'string',
      displayResolution: 'string',
      displayScaleRatio: 'string',
      enableAutoLockScreen: 'number',
      enableAutoLogin: 'number',
      enableBackgroundMode: 'number',
      enableBluetooth: 'number',
      enableControlPanel: 'number',
      enableImmersiveMode: 'number',
      enableLockScreenHotKey: 'number',
      enableModifyPassword: 'number',
      enableScanLogin: 'number',
      enableScheduledReboot: 'number',
      enableScheduledShutdown: 'number',
      enableSmsLogin: 'number',
      enableSwitchPersonal: 'number',
      enableWlan: 'number',
      followCloudReboot: 'number',
      followCloudShutdown: 'number',
      followTerminalReboot: 'number',
      followTerminalShutdown: 'number',
      forceSetPinCode: 'number',
      idleTimeout: 'number',
      idleTimeoutAction: 'number',
      lockScreenPasswordRequired: 'number',
      lockScreenTimeout: 'number',
      mainBizType: 'string',
      name: 'string',
      powerButtonDefine: 'number',
      powerButtonDefineForAs: 'number',
      powerButtonDefineForNs: 'number',
      powerOnBehavior: 'number',
      runningMode: 'string',
      scheduledReboot: 'string',
      scheduledShutdown: 'string',
      screenCastResPaths: { 'type': 'array', 'itemType': 'string' },
      settingLock: 'number',
      terminalPolicyId: 'string',
      unlockMethod: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.screenCastResPaths)) {
      $dara.Model.validateArray(this.screenCastResPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

