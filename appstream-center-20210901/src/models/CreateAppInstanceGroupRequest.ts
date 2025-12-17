// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupRequestNetworkDomainRules extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The policy used for the domain name.
   * 
   * Valid values:
   * 
   * *   allow
   * *   block
   * 
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
   * @remarks
   * The destination. The value is a CIDR block.
   * 
   * @example
   * 139.196.XX.XX/32
   */
  destination?: string;
  /**
   * @remarks
   * The network egress mode.
   * 
   * Valid value:
   * 
   * *   Shared: accesses the network by using NAT Gateway.
   * 
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
  /**
   * @remarks
   * The domain name rules.
   */
  domainRules?: CreateAppInstanceGroupRequestNetworkDomainRules[];
  /**
   * @remarks
   * The validity period of the public IP address. If the specified value is exceeded, the IP address is updated at next logon. Minimum value: 60. Unit: minutes.
   * 
   * @example
   * 60
   */
  ipExpireMinutes?: number;
  /**
   * @remarks
   * Office Network ID.
   * 
   * @example
   * cn-hongkong+dir-842567****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The route settings. This parameter is available only if you set `StrategyType` to `Mixed`.
   */
  routes?: CreateAppInstanceGroupRequestNetworkRoutes[];
  /**
   * @remarks
   * The type of the network policy.
   * 
   * Valid values:
   * 
   * *   Mixed: the hybrid mode. In this mode, a device is deployed in one virtual private cloud (VPC). Two NICs are provided and an independent public IP address is configured for the device.
   * *   Shared: the shared mode. In this mode, a single NIC is provided for a device and the network is accessed by using NAT Gateway.
   * 
   * @example
   * Shared
   */
  strategyType?: string;
  /**
   * @remarks
   * List of virtual switch IDs.
   * - Valid only for custom office networks.
   */
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
   * @remarks
   * The number of resources.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The end time of the time period. Format: HH:mm.
   * 
   * @example
   * 15:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the time period. Format: HH:mm.
   * 
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
   * @remarks
   * The schedule type of the scaling policy. This parameter must be configured together with `RecurrenceValues`.``
   * 
   * Valid value:
   * 
   * *   Weekly: The scaling policy is executed on specific days each week.
   * 
   * @example
   * weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The days of each week on which the scaling policy is executed.
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * The time periods during which the scaling policy can be executed. The time periods must meet the following requirements:
   * 
   * *   Up to three time periods can be added.
   * *   Time periods cannot be overlapped.
   * *   The interval between two consecutive time periods must be greater than or equal to 5 minutes.
   * *   Each time period must be greater than or equal to 15 minutes.
   * *   The total length of the time periods that you specify cannot be greater than a day.
   */
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
   * @remarks
   * Maximum number of idle sessions. When this value is specified, auto-scaling is triggered only if the session utilization exceeds `ScalingUsageThreshold` and the current number of idle sessions in the delivery group is less than `MaxIdleAppInstanceAmount`. Otherwise, it is considered that sufficient idle sessions are available, and no auto-scaling will occur. This parameter allows flexible control over elastic scaling behavior and helps reduce usage costs.
   * 
   * @example
   * 3
   */
  maxIdleAppInstanceAmount?: number;
  /**
   * @remarks
   * The maximum number of resources that can be created for scale-out. This parameter is required if you set `StrategyType` to `NODE_SCALING_BY_USAGE`.
   * 
   * @example
   * 10
   */
  maxScalingAmount?: number;
  /**
   * @remarks
   * The number of resources that you want to purchase. Valid values: 1 to 100.
   * 
   * > 
   * 
   * *   This parameter is required if the resources are subscription resources.
   * 
   * *   If the resources are pay-as-you-go resources, this parameter is required only if you set `StrategyType` to `NODE_FIXED` or `NODE_SCALING_BY_USAGE`.
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The maximum number of sessions to which a resource can connect at the same time. If a resource connects to a large number of sessions at the same time, the user experience can be compromised. The value range varies based on the resource type. The following items describe the value ranges of different resource types:
   * 
   * *   appstreaming.general.4c8g: 1 to 2
   * *   appstreaming.general.8c16g: 1 to 4
   * *   appstreaming.vgpu.8c16g.4g: 1 to 4
   * *   appstreaming.vgpu.8c31g.16g: 1 to 4
   * *   appstreaming.vgpu.14c93g.12g: 1 to 6
   * 
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @remarks
   * The ID of the resource type that you want to purchase. You can call the [ListNodeInstanceType](https://help.aliyun.com/document_detail/428502.html) operation to obtain the ID.
   * 
   * Valid values:
   * 
   * *   appstreaming.vgpu.8c16g.4g: WUYING - Graphics_8 vCPUs, 16 GiB Memory, 4 GiB GPU Memory
   * *   appstreaming.general.8c16g: WUYING - General_8 vCPUs, 16 GiB Memory
   * *   appstreaming.general.4c8g: WUYING - General_4 vCPUs, 8 GiB Memory
   * *   appstreaming.vgpu.14c93g.12g: WUYING - Graphics_14 vCPUs, 93 GiB Memory, 12 GiB GPU Memory.
   * *   appstreaming.vgpu.8c31g.16g: WUYING - Graphics_8 vCPUs, 31 GiB Memory, 16 GiB GPU Memory
   * 
   * @example
   * appstreaming.general.4c8g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The schedules of the scaling policy. This parameter is required if you set `StrategyType` to `NODE_SCALING_BY_SCHEDULE`.
   */
  recurrenceSchedules?: CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules[];
  /**
   * @remarks
   * The maximum retention period of a resource to which no session is connected. If no session is connected to a resource, the resource is automatically scaled in after the specified retention period elapses. Valid values: 5 to 120. Default value: 5. Unit: minutes. If one of the following situations occurs, the resource is not scaled in.
   * 
   * *   If automatic scale-out is triggered after the resource is scaled in, the scale-in is not executed. This prevents repeated scale-in and scale-out.
   * *   If automatic scale-out is triggered due to an increase in the number of sessions during the specified period of time, the resource is not scaled in and the countdown restarts.
   * 
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @remarks
   * The number of resources that are created each time resources are scaled out. Valid values: 1 to 10. This parameter is required if you set `StrategyType` to `NODE_SCALING_BY_USAGE`.
   * 
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper limit of session usage. If the session usage exceeds the specified upper limit, auto scaling is automatically triggered. The session usage is calculated by using the following formula: `Session usage = Number of current sessions/(Total number of resources × Number of concurrent sessions) × 100%`. This parameter is required if you set `StrategyType` to `NODE_SCALING_BY_USAGE`. Valid values: 0 to 100. Default value: 85.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The expiration date of the scaling policy. Format: yyyy-MM-dd. The interval between the expiration date and the effective date must be from 7 days to 1 year. This parameter is required if you set `StrategyType` to `NODE_SCALING_BY_SCHEDULE`.
   * 
   * @example
   * 2022-09-08
   */
  strategyDisableDate?: string;
  /**
   * @remarks
   * The effective date of the scaling policy. Format: yyyy-MM-dd. The date must be the same as or later than the current date. This parameter is required if you set `StrategyType` to `NODE_SCALING_BY_SCHEDULE`.
   * 
   * @example
   * 2022-08-01
   */
  strategyEnableDate?: string;
  /**
   * @remarks
   * The scaling policy of resources.
   * 
   * > 
   * 
   * *   `NODE_FIXED`: fixed number of resources. This value is applicable to pay-as-you-go resources and subscription resources.
   * 
   * *   `NODE_SCALING_BY_USAGE`: auto scaling. This value is applicable to pay-as-you-go resources and subscription resources.
   * 
   * *   `NODE_SCALING_BY_SCHEDULE`: scheduled scaling. This value is applicable only to pay-as-you-go resources.
   * 
   * Valid values:
   * 
   * *   NODE_FIXED: fixed number of resources
   * *   NODE_SCALING_BY_SCHEDULE: scheduled scaling
   * *   NODE_SCALING_BY_USAGE: auto scaling
   * 
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @remarks
   * Specifies whether to enable the warmup policy for resources. This parameter is required if you set `StrategyType` to `NODE_SCALING_BY_SCHEDULE`.
   * 
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
   * Only one application is allowed to be opened within a single session.
   * 
   * - When enabled, launching multiple applications from the delivery group will allocate a separate session for each application, resulting in higher session consumption.
   * 
   * @example
   * false
   */
  perSessionPerApp?: boolean;
  /**
   * @remarks
   * Persistent session scheduling mode.
   * 
   * @example
   * DYNAMIC
   * 
   * **if can be null:**
   * true
   */
  persistentAppInstanceScheduleMode?: string;
  /**
   * @remarks
   * Session pre-launch toggle.
   * 
   * - If not specified, the default value is true.
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
   * - wyid. In this case, you must set sessionPreOpen to false.
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
   * @remarks
   * Specifies whether to reset after unbinding from a delivery group.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  resetAfterUnbind?: boolean;
  /**
   * @remarks
   * Specifies whether to skip user permission verification.
   * 
   * Valid values:
   * 
   * *   true
   * *   false: This is the default value.
   * 
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
   * @remarks
   * Remote storage path for user data roaming.
   * 
   * - If left empty, the default value is the delivery group ID.
   * - For cross-delivery-group (within the same VPC) user data roaming, the same value must be configured for all participating delivery groups.
   * 
   * @example
   * ID20250101
   */
  remoteStoragePath?: string;
  /**
   * @remarks
   * Remote storage type used for user data roaming.
   * 
   * @example
   * NAS
   */
  remoteStorageType?: string;
  /**
   * @remarks
   * User data roaming toggle.
   * 
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
  /**
   * @remarks
   * The storage types.
   */
  storageTypeList?: string[];
  /**
   * @remarks
   * User data roaming configuration.
   */
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
   * @remarks
   * The content of the custom policy. The content must meet the specifications of image versions. To use this parameter, submit a ticket to apply to enable the whitelist feature.
   * 
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
   * @remarks
   * The account type of the user.
   * 
   * Valid value:
   * 
   * *   Simple: convenience account
   * 
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
   * @remarks
   * Frame rate (FPS).
   * 
   * @example
   * 60
   */
  frameRate?: number;
  /**
   * @remarks
   * Resolution height, in pixels.
   * 
   * @example
   * 1080
   */
  sessionResolutionHeight?: number;
  /**
   * @remarks
   * Resolution width, in pixels.
   * 
   * @example
   * 1920
   */
  sessionResolutionWidth?: number;
  /**
   * @remarks
   * Streaming mode. Combined with the Webrtc parameter, it indicates the protocol type.
   * 
   * - When Webrtc=true and StreamingMode=video, it indicates a WebRTC stream.
   * - When Webrtc=false and StreamingMode=video, it indicates a video stream.
   * - When Webrtc=false and StreamingMode=mix, it indicates a mixed stream.
   * 
   * @example
   * video
   */
  streamingMode?: string;
  /**
   * @remarks
   * Whether to use adaptive resolution.
   * 
   * - true: The session resolution follows changes in the terminal\\"s display area. In this case, SessionResolutionWidth and SessionResolutionHeight represent the maximum values for resolution adjustment.
   * 
   * - false: The session resolution does not follow changes in the terminal\\"s display area. In this case, the resolution is fixed to the values of SessionResolutionWidth and SessionResolutionHeight.
   * 
   * @example
   * false
   */
  terminalResolutionAdaptive?: boolean;
  /**
   * @remarks
   * Whether to enable WebRTC. Combined with the StreamingMode parameter, it indicates the protocol type.
   * 
   * - When Webrtc=true and StreamingMode=video, it indicates a WebRTC stream.
   * - When Webrtc=false and StreamingMode=video, it indicates a video stream.
   * - When Webrtc=false and StreamingMode=mix, it indicates a mixed stream.
   * 
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
   * The image ID of the application. To obtain the image ID, log on to the [App Streaming console](https://appstreaming.console.aliyun.com/). In the left-side navigation pane, choose **Maintenance** > **Custom Images** or Maintenance > **System Images**.
   * 
   * This parameter is required.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The name of the delivery group.
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * Package type.
   * 
   * @example
   * browser.package.5.250.appstreaming.general.basic
   */
  appPackageType?: string;
  /**
   * @remarks
   * Policy ID.
   * 
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
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * Valid values:
   * 
   * *   true
   * *   false: manual payment. This is the default value.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * Valid values:
   * 
   * *   true
   * *   false: manual payment. This is the default value.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the region where the delivery group resides. For information about the supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * Valid values:
   * 
   * *   cn-shanghai: China (Shanghai)
   * *   cn-hangzhou: China (Hangzhou)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The sales mode.
   * 
   * Valid value:
   * 
   * *   Node: by resource
   * 
   * This parameter is required.
   * 
   * @example
   * Node
   */
  chargeResourceMode?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * cls-d39iq73l5c0a8****
   */
  clusterId?: string;
  /**
   * @remarks
   * The network settings.
   * 
   * >  If you want to use this parameter, submit a ticket.
   */
  network?: CreateAppInstanceGroupRequestNetwork;
  /**
   * @remarks
   * The node pool object.
   */
  nodePool?: CreateAppInstanceGroupRequestNodePool;
  /**
   * @remarks
   * The subscription duration of resources. This parameter is required if you set `ChargeType` to `PrePaid`. The unit of this parameter is specified by `PeriodUnit`.
   * 
   * *   Valid value if you set `PeriodUnit` to `Week`:
   * 
   *     *   1
   * 
   * *   Valid values if you set `PeriodUnit` to `Month`:
   * 
   *     *   1
   *     *   2
   *     *   3
   *     *   6
   * 
   * *   Valid values if you set `PeriodUnit` to `Year`:
   * 
   *     *   1
   *     *   2
   *     *   3
   * 
   * >  If you set `ChargeType` to `PostPaid`, set this parameter to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is available if you set `ChargeType` to `PrePaid`.
   * 
   * >  The value of this parameter is case-insensitive. For example, `Week` is valid and `week` is invalid. If you specify an invalid value combination for Period and PeriodUnit, such as `2 Week`, the operation can still be called. However, an error occurs when you place the order.
   * 
   * >  If you set `ChargeType` to `PostPaid`, set this parameter to `Month`.
   * 
   * Valid values:
   * 
   * *   Month
   * *   Year
   * *   Week
   * 
   * This parameter is required.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the pre-open application.
   * 
   * @example
   * cag-b2ron*******
   */
  preOpenAppId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * Valid value:
   * 
   * *   CloudApp: App Streaming
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The promotion ID. You can call the [GetResourcePrice](https://help.aliyun.com/document_detail/428503.html) operation to obtain the ID.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The runtime policy.
   */
  runtimePolicy?: CreateAppInstanceGroupRequestRuntimePolicy;
  /**
   * @remarks
   * The security policy.
   */
  securityPolicy?: CreateAppInstanceGroupRequestSecurityPolicy;
  /**
   * @remarks
   * The period of time during which the application can be recycled. The recycling period is the period of time between the time when the end user disconnects from the application and the time when processes exit the application. If you do not want to recycle the application, set this parameter to `-1`. Valid values:-1 and 3 to 300. The value must be an integer. Default value: `15`. Unit: minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 15
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * The storage policy.
   */
  storagePolicy?: CreateAppInstanceGroupRequestStoragePolicy;
  /**
   * @remarks
   * Payment method subtype.
   * 
   * @example
   * postPaid
   */
  subPayType?: string;
  /**
   * @remarks
   * The custom policy.
   */
  userDefinePolicy?: CreateAppInstanceGroupRequestUserDefinePolicy;
  /**
   * @remarks
   * List of authorized user group IDs.
   * 
   * **if can be null:**
   * true
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The information about the user that you want to add to the assigned user list of the delivery group. This parameter is required if you configure `Users`.
   */
  userInfo?: CreateAppInstanceGroupRequestUserInfo;
  /**
   * @remarks
   * The users that you want to add to the assigned user list of the delivery group.
   */
  users?: string[];
  /**
   * @remarks
   * Display policy.
   */
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

