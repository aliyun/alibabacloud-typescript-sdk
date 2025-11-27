// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupRequestNetworkDomainRules extends $dara.Model {
  /**
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @example
   * block
   */
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestNetworkRoutes extends $dara.Model {
  /**
   * @example
   * 139.196.XX.XX/32
   */
  destination?: string;
  /**
   * @example
   * Shared
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestNetwork extends $dara.Model {
  domainRules?: CreateAppInstanceGroupRequestNetworkDomainRules[];
  /**
   * @example
   * 60
   */
  ipExpireMinutes?: number;
  /**
   * @example
   * cn-hongkong+dir-842567****
   */
  officeSiteId?: string;
  routes?: CreateAppInstanceGroupRequestNetworkRoutes[];
  /**
   * @example
   * Shared
   */
  strategyType?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      domainRules: 'DomainRules',
      ipExpireMinutes: 'IpExpireMinutes',
      officeSiteId: 'OfficeSiteId',
      routes: 'Routes',
      strategyType: 'StrategyType',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRules: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNetworkDomainRules },
      ipExpireMinutes: 'number',
      officeSiteId: 'string',
      routes: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNetworkRoutes },
      strategyType: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.domainRules)) {
      $dara.Model.validateArray(this.domainRules);
    }
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestNodePoolRecurrenceSchedulesTimerPeriods extends $dara.Model {
  /**
   * @example
   * 2
   */
  amount?: number;
  /**
   * @example
   * 15:00
   */
  endTime?: string;
  /**
   * @example
   * 12:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules extends $dara.Model {
  /**
   * @example
   * weekly
   */
  recurrenceType?: string;
  recurrenceValues?: number[];
  timerPeriods?: CreateAppInstanceGroupRequestNodePoolRecurrenceSchedulesTimerPeriods[];
  static names(): { [key: string]: string } {
    return {
      recurrenceType: 'RecurrenceType',
      recurrenceValues: 'RecurrenceValues',
      timerPeriods: 'TimerPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrenceType: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'number' },
      timerPeriods: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNodePoolRecurrenceSchedulesTimerPeriods },
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceValues)) {
      $dara.Model.validateArray(this.recurrenceValues);
    }
    if(Array.isArray(this.timerPeriods)) {
      $dara.Model.validateArray(this.timerPeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestNodePool extends $dara.Model {
  /**
   * @example
   * 3
   */
  maxIdleAppInstanceAmount?: number;
  /**
   * @example
   * 10
   */
  maxScalingAmount?: number;
  /**
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @example
   * appstreaming.general.4c8g
   */
  nodeInstanceType?: string;
  recurrenceSchedules?: CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules[];
  /**
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @example
   * 2022-09-08
   */
  strategyDisableDate?: string;
  /**
   * @example
   * 2022-08-01
   */
  strategyEnableDate?: string;
  /**
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @example
   * false
   */
  warmUp?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxIdleAppInstanceAmount: 'MaxIdleAppInstanceAmount',
      maxScalingAmount: 'MaxScalingAmount',
      nodeAmount: 'NodeAmount',
      nodeCapacity: 'NodeCapacity',
      nodeInstanceType: 'NodeInstanceType',
      recurrenceSchedules: 'RecurrenceSchedules',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      strategyDisableDate: 'StrategyDisableDate',
      strategyEnableDate: 'StrategyEnableDate',
      strategyType: 'StrategyType',
      warmUp: 'WarmUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxIdleAppInstanceAmount: 'number',
      maxScalingAmount: 'number',
      nodeAmount: 'number',
      nodeCapacity: 'number',
      nodeInstanceType: 'string',
      recurrenceSchedules: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules },
      scalingDownAfterIdleMinutes: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      strategyDisableDate: 'string',
      strategyEnableDate: 'string',
      strategyType: 'string',
      warmUp: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceSchedules)) {
      $dara.Model.validateArray(this.recurrenceSchedules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestRuntimePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the debugging mode. If you want to call the `GetDebugAppInstance` and `CreateImageFromAppInstanceGroup` operations, you must set this parameter to `ON`.
   * 
   * Valid values:
   * 
   * *   OFF
   * *   ON
   * 
   * @example
   * OFF
   */
  debugMode?: string;
  /**
   * @remarks
   * Specifies whether only one app can be opened in a session.
   * 
   * *   After you enable this feature, the system assigns a session to each app if you open multiple apps in a delivery group. This consumes a larger number of sessions.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  perSessionPerApp?: boolean;
  /**
   * @example
   * DYNAMIC
   * 
   * **if can be null:**
   * true
   */
  persistentAppInstanceScheduleMode?: string;
  /**
   * @remarks
   * Specifies whether to enable pre-open for sessions.
   * 
   * *   Default value: true
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  sessionPreOpen?: string;
  /**
   * @remarks
   * The session type.
   * 
   * Valid values:
   * 
   * *   CONSOLE: console session
   * *   NORMAL: Remote Desktop Protocol (RDP)-based O\\&M session
   * 
   * @example
   * NORMAL
   */
  sessionType?: string;
  /**
   * @remarks
   * The generation mode of the session users. Valid value:
   * 
   * *   wyid. In this case, you must set sessionPreOpen to false.
   * 
   * @example
   * wyid
   */
  sessionUserGenerationMode?: string;
  static names(): { [key: string]: string } {
    return {
      debugMode: 'DebugMode',
      perSessionPerApp: 'PerSessionPerApp',
      persistentAppInstanceScheduleMode: 'PersistentAppInstanceScheduleMode',
      sessionPreOpen: 'SessionPreOpen',
      sessionType: 'SessionType',
      sessionUserGenerationMode: 'SessionUserGenerationMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugMode: 'string',
      perSessionPerApp: 'boolean',
      persistentAppInstanceScheduleMode: 'string',
      sessionPreOpen: 'string',
      sessionType: 'string',
      sessionUserGenerationMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestSecurityPolicy extends $dara.Model {
  /**
   * @example
   * true
   */
  resetAfterUnbind?: boolean;
  /**
   * @example
   * false
   */
  skipUserAuthCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      resetAfterUnbind: 'ResetAfterUnbind',
      skipUserAuthCheck: 'SkipUserAuthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resetAfterUnbind: 'boolean',
      skipUserAuthCheck: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestStoragePolicyUserProfile extends $dara.Model {
  /**
   * @example
   * ID20250101
   */
  remoteStoragePath?: string;
  /**
   * @example
   * NAS
   */
  remoteStorageType?: string;
  /**
   * @example
   * false
   */
  userProfileSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      remoteStoragePath: 'RemoteStoragePath',
      remoteStorageType: 'RemoteStorageType',
      userProfileSwitch: 'UserProfileSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteStoragePath: 'string',
      remoteStorageType: 'string',
      userProfileSwitch: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestStoragePolicy extends $dara.Model {
  storageTypeList?: string[];
  userProfile?: CreateAppInstanceGroupRequestStoragePolicyUserProfile;
  static names(): { [key: string]: string } {
    return {
      storageTypeList: 'StorageTypeList',
      userProfile: 'UserProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageTypeList: { 'type': 'array', 'itemType': 'string' },
      userProfile: CreateAppInstanceGroupRequestStoragePolicyUserProfile,
    };
  }

  validate() {
    if(Array.isArray(this.storageTypeList)) {
      $dara.Model.validateArray(this.storageTypeList);
    }
    if(this.userProfile && typeof (this.userProfile as any).validate === 'function') {
      (this.userProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestUserDefinePolicy extends $dara.Model {
  /**
   * @example
   * [{"target":"agent","config":{"abc":"xxx"}}]
   */
  customConfig?: string;
  static names(): { [key: string]: string } {
    return {
      customConfig: 'CustomConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestUserInfo extends $dara.Model {
  /**
   * @example
   * Simple
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequestVideoPolicy extends $dara.Model {
  /**
   * @example
   * 60
   */
  frameRate?: number;
  /**
   * @example
   * 1080
   */
  sessionResolutionHeight?: number;
  /**
   * @example
   * 1920
   */
  sessionResolutionWidth?: number;
  /**
   * @example
   * video
   */
  streamingMode?: string;
  /**
   * @example
   * false
   */
  terminalResolutionAdaptive?: boolean;
  /**
   * @example
   * true
   */
  webrtc?: boolean;
  static names(): { [key: string]: string } {
    return {
      frameRate: 'FrameRate',
      sessionResolutionHeight: 'SessionResolutionHeight',
      sessionResolutionWidth: 'SessionResolutionWidth',
      streamingMode: 'StreamingMode',
      terminalResolutionAdaptive: 'TerminalResolutionAdaptive',
      webrtc: 'Webrtc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRate: 'number',
      sessionResolutionHeight: 'number',
      sessionResolutionWidth: 'number',
      streamingMode: 'string',
      terminalResolutionAdaptive: 'boolean',
      webrtc: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  appInstanceGroupName?: string;
  /**
   * @example
   * browser.package.5.250.appstreaming.general.basic
   */
  appPackageType?: string;
  /**
   * @example
   * pg-0clfzcy0adpcf****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * The authentication mode of the delivery group.
   * 
   * @example
   * App
   * 
   * **if can be null:**
   * true
   */
  authMode?: string;
  /**
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Node
   */
  chargeResourceMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * cls-d39iq73l5c0a8****
   */
  clusterId?: string;
  network?: CreateAppInstanceGroupRequestNetwork;
  nodePool?: CreateAppInstanceGroupRequestNodePool;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @example
   * cag-b2ron*******
   */
  preOpenAppId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The runtime policy.
   */
  runtimePolicy?: CreateAppInstanceGroupRequestRuntimePolicy;
  securityPolicy?: CreateAppInstanceGroupRequestSecurityPolicy;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15
   */
  sessionTimeout?: number;
  storagePolicy?: CreateAppInstanceGroupRequestStoragePolicy;
  /**
   * @example
   * postPaid
   */
  subPayType?: string;
  userDefinePolicy?: CreateAppInstanceGroupRequestUserDefinePolicy;
  /**
   * **if can be null:**
   * true
   */
  userGroupIds?: string[];
  userInfo?: CreateAppInstanceGroupRequestUserInfo;
  users?: string[];
  videoPolicy?: CreateAppInstanceGroupRequestVideoPolicy;
  static names(): { [key: string]: string } {
    return {
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appPackageType: 'AppPackageType',
      appPolicyId: 'AppPolicyId',
      authMode: 'AuthMode',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      chargeResourceMode: 'ChargeResourceMode',
      chargeType: 'ChargeType',
      clusterId: 'ClusterId',
      network: 'Network',
      nodePool: 'NodePool',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      preOpenAppId: 'PreOpenAppId',
      productType: 'ProductType',
      promotionId: 'PromotionId',
      runtimePolicy: 'RuntimePolicy',
      securityPolicy: 'SecurityPolicy',
      sessionTimeout: 'SessionTimeout',
      storagePolicy: 'StoragePolicy',
      subPayType: 'SubPayType',
      userDefinePolicy: 'UserDefinePolicy',
      userGroupIds: 'UserGroupIds',
      userInfo: 'UserInfo',
      users: 'Users',
      videoPolicy: 'VideoPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCenterImageId: 'string',
      appInstanceGroupName: 'string',
      appPackageType: 'string',
      appPolicyId: 'string',
      authMode: 'string',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      chargeResourceMode: 'string',
      chargeType: 'string',
      clusterId: 'string',
      network: CreateAppInstanceGroupRequestNetwork,
      nodePool: CreateAppInstanceGroupRequestNodePool,
      period: 'number',
      periodUnit: 'string',
      preOpenAppId: 'string',
      productType: 'string',
      promotionId: 'string',
      runtimePolicy: CreateAppInstanceGroupRequestRuntimePolicy,
      securityPolicy: CreateAppInstanceGroupRequestSecurityPolicy,
      sessionTimeout: 'number',
      storagePolicy: CreateAppInstanceGroupRequestStoragePolicy,
      subPayType: 'string',
      userDefinePolicy: CreateAppInstanceGroupRequestUserDefinePolicy,
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userInfo: CreateAppInstanceGroupRequestUserInfo,
      users: { 'type': 'array', 'itemType': 'string' },
      videoPolicy: CreateAppInstanceGroupRequestVideoPolicy,
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.nodePool && typeof (this.nodePool as any).validate === 'function') {
      (this.nodePool as any).validate();
    }
    if(this.runtimePolicy && typeof (this.runtimePolicy as any).validate === 'function') {
      (this.runtimePolicy as any).validate();
    }
    if(this.securityPolicy && typeof (this.securityPolicy as any).validate === 'function') {
      (this.securityPolicy as any).validate();
    }
    if(this.storagePolicy && typeof (this.storagePolicy as any).validate === 'function') {
      (this.storagePolicy as any).validate();
    }
    if(this.userDefinePolicy && typeof (this.userDefinePolicy as any).validate === 'function') {
      (this.userDefinePolicy as any).validate();
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    if(this.videoPolicy && typeof (this.videoPolicy as any).validate === 'function') {
      (this.videoPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

