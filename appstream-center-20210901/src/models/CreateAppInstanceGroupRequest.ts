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
   * The policy value.
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
   * The access destination. CIDR format.
   * 
   * @example
   * 139.196.XX.XX/32
   */
  destination?: string;
  /**
   * @remarks
   * The network egress mode.
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
   * The domain name rule configurations.
   */
  domainRules?: CreateAppInstanceGroupRequestNetworkDomainRules[];
  /**
   * @remarks
   * The duration (in minutes) after which the public IP address is refreshed upon the next logon. Minimum value: 60.
   * 
   * @example
   * 60
   */
  ipExpireMinutes?: number;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hongkong+dir-842567****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The route configurations. This parameter can be configured only when the network policy type (`StrategyType`) is set to mixed mode (`Mixed`).
   */
  routes?: CreateAppInstanceGroupRequestNetworkRoutes[];
  /**
   * @remarks
   * The network policy type.
   * 
   * @example
   * Shared
   */
  strategyType?: string;
  /**
   * @remarks
   * The list of vSwitch IDs.
   * 
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
   * The resource count.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The end time. Format: HH:mm.
   * 
   * @example
   * 15:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time. Format: HH:mm.
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
   * The type of the recurrence schedule. You must specify both `RecurrenceType` and `RecurrenceValues`.
   * 
   * @example
   * weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The list of recurrence values.
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * The list of time periods for the recurrence schedule. Requirements for time period settings:
   * 
   * - You can add up to 3 time periods.
   * - Time periods must not overlap.
   * - The interval between time periods must be at least 5 minutes.
   * - Each time period must be at least 15 minutes long.
   * - All time periods combined must not span across days.
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
   * The maximum number of idle sessions. When this value is specified, auto scale-out is triggered only when the session usage exceeds `ScalingUsageThreshold` and the number of idle sessions in the current delivery group is less than `MaxIdleAppInstanceAmount`. Otherwise, the idle sessions are considered sufficient and no auto scale-out is performed. This parameter allows you to flexibly control elastic scaling behavior and reduce costs.
   * 
   * @example
   * 3
   */
  maxIdleAppInstanceAmount?: number;
  /**
   * @remarks
   * The maximum number of resources that can be created during scale-out. This field is required when `StrategyType` is set to `NODE_SCALING_BY_USAGE` (elastic resources).
   * 
   * @example
   * 10
   */
  maxScalingAmount?: number;
  /**
   * @remarks
   * The number of resources to purchase. Valid values: 1 to 100.
   * 
   * >- This parameter is required for subscription resources.
   * >- This parameter is required for pay-as-you-go resources when the scaling mode (`StrategyType`) is set to fixed quantity (`NODE_FIXED`) or auto scaling (`NODE_SCALING_BY_USAGE`).
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The number of concurrent sessions, which is the number of sessions that a single resource can handle simultaneously. Too many concurrent sessions may degrade the application experience. The valid value range varies by resource specification. You can call the ListNodeInstanceType operation to obtain the valid value range for each resource specification.
   * 
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @remarks
   * The instance type ID of the resource to purchase. You can call the [ListNodeInstanceType](https://help.aliyun.com/document_detail/428502.html) operation to obtain the ID.
   * 
   * @example
   * appstreaming.general.4c8g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The list of recurrence schedules. This field is required when `StrategyType` (scaling mode) is set to `NODE_SCALING_BY_SCHEDULE` (scheduled scaling).
   */
  recurrenceSchedules?: CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules[];
  /**
   * @remarks
   * The maximum duration (in minutes) that a resource without active sessions is retained. When no sessions are connected to a resource, a countdown starts based on this value. The resource is released when the countdown ends. Valid values: 5 to 120. Default value: 5. The following exceptions apply:
   * 
   * - If releasing the resource would trigger auto scale-out again, the scale-down is not performed to avoid repeated scaling operations.
   * - If auto scale-out is triggered due to increased sessions during this period, the resource is not released as originally planned, and the countdown restarts.
   * 
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @remarks
   * The number of resources to create per scale-out operation. Valid values: 1 to 10. This field is required when `StrategyType` is set to `NODE_SCALING_BY_USAGE` (elastic resources).
   * 
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper threshold of session usage (%). Auto scale-out is triggered when the session usage exceeds this threshold. The session usage is calculated as follows: `Session usage = Current sessions ÷ (Total resources × Concurrent sessions per resource) × 100%`. This field is required when `StrategyType` is set to `NODE_SCALING_BY_USAGE` (elastic resources). Valid values: 0 to 100. Default value: 85.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The date when the policy expires. Format: yyyy-MM-dd. The interval between the expiration date and the effective date must be between 7 days and 1 year, inclusive. This field is required when `StrategyType` (scaling mode) is set to `NODE_SCALING_BY_SCHEDULE` (scheduled scaling).
   * 
   * @example
   * 2022-09-08
   */
  strategyDisableDate?: string;
  /**
   * @remarks
   * The date when the policy takes effect. Format: yyyy-MM-dd. The date must be equal to or later than the current date. This field is required when `StrategyType` (scaling mode) is set to `NODE_SCALING_BY_SCHEDULE` (scheduled scaling).
   * 
   * @example
   * 2022-08-01
   */
  strategyEnableDate?: string;
  /**
   * @remarks
   * The scaling mode.
   * 
   * > 
   * >- `NODE_FIXED` (fixed quantity): applicable to subscription and pay-as-you-go resources.
   * >- `NODE_SCALING_BY_USAGE` (auto scaling): applicable to subscription and pay-as-you-go resources.
   * >- `NODE_SCALING_BY_SCHEDULE` (scheduled scaling): applicable only to pay-as-you-go resources.
   * 
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @remarks
   * Specifies whether to enable the resource prefetch policy. This field is required when `StrategyType` (scaling mode) is set to `NODE_SCALING_BY_SCHEDULE` (scheduled scaling).
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
   * Specifies whether to enable debug mode. To call `GetDebugAppInstance` and `CreateImageFromAppInstanceGroup`, set this field to `ON`.
   * 
   * @example
   * OFF
   */
  debugMode?: string;
  /**
   * @remarks
   * Specifies whether to allow only one application per session.
   * - When enabled, opening multiple applications in the delivery group allocates a separate session for each application, consuming more sessions.
   * 
   * @example
   * false
   */
  perSessionPerApp?: boolean;
  /**
   * @remarks
   * The scheduling mode for persistent sessions.
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
   * Specifies whether to enable session pre-opening.
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
   * @example
   * NORMAL
   */
  sessionType?: string;
  /**
   * @remarks
   * The generation mode for session users.
   * - wyid: The session pre-open (SessionPreOpen) must be set to false.
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
   * Specifies whether to reset after unbinding.
   * 
   * @example
   * true
   */
  resetAfterUnbind?: boolean;
  /**
   * @remarks
   * Specifies whether to skip user authorization verification.
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
   * The remote storage path for user data roaming.
   * - If not specified, the default value is the delivery group ID.
   * - For cross-delivery-group (same VPC) user data roaming, set the same value for all delivery groups involved.
   * 
   * @example
   * ID20250101
   */
  remoteStoragePath?: string;
  /**
   * @remarks
   * The remote storage type used for user data roaming.
   * 
   * @example
   * NAS
   */
  remoteStorageType?: string;
  /**
   * @remarks
   * Specifies whether to enable user data roaming.
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
   * The list of storage types.
   */
  storageTypeList?: string[];
  /**
   * @remarks
   * The user data roaming configuration.
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
   * The custom policy content. The content must comply with the image version specifications. To use this parameter, submit a ticket to enable the whitelist.
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
   * The user account type.
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
   * The frame rate (FPS).
   * 
   * @example
   * 60
   */
  frameRate?: number;
  /**
   * @remarks
   * The height of the resolution, in pixels.
   * 
   * @example
   * 1080
   */
  sessionResolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution, in pixels.
   * 
   * @example
   * 1920
   */
  sessionResolutionWidth?: number;
  /**
   * @remarks
   * The streaming mode. Used together with the `Webrtc` parameter to specify the protocol type.
   * 
   * - `Webrtc`=`true` and `StreamingMode`=`video`: WebRTC streaming.
   * - `Webrtc`=`false` and `StreamingMode`=`video`: video streaming.
   * - `Webrtc`=`false` and `StreamingMode`=`mix`: mixed streaming.
   * 
   * @example
   * video
   */
  streamingMode?: string;
  /**
   * @remarks
   * Specifies whether to use adaptive resolution.
   * 
   * - `true`: The session resolution follows the terminal display area. In this case, `SessionResolutionWidth` and `SessionResolutionHeight` specify the maximum resolution values.
   * 
   * - `false`: The session resolution does not follow the terminal display area. In this case, the resolution is fixed to the values of `SessionResolutionWidth` and `SessionResolutionHeight`.
   * 
   * @example
   * false
   */
  terminalResolutionAdaptive?: boolean;
  /**
   * @remarks
   * Specifies whether to enable WebRTC. Used together with the `StreamingMode` parameter to specify the protocol type.
   * 
   * - `Webrtc`=`true` and `StreamingMode`=`video`: WebRTC streaming.
   * - `Webrtc`=`false` and `StreamingMode`=`video`: video streaming.
   * - `Webrtc`=`false` and `StreamingMode`=`mix`: mixed streaming.
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
   * The application image ID. You can obtain the ID from the **O&M** > **Custom Images** or **System Images** page in the [WUYING Cloud Application console](https://appstreaming.console.aliyun.com/).
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
   * 
   * @example
   * 办公应用
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The package type.
   * 
   * @example
   * browser.package.5.250.appstreaming.general.basic
   */
  appPackageType?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-0clfzcy0adpcf****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * The authorization mode of the delivery group.
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
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The region ID of the delivery group. For information about supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
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
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cls-d39iq73l5c0a8****
   */
  clusterId?: string;
  /**
   * @remarks
   * The network configuration.
   * 
   * > To use this parameter, submit a ticket.
   */
  network?: CreateAppInstanceGroupRequestNetwork;
  /**
   * @remarks
   * The node pool object.
   */
  nodePool?: CreateAppInstanceGroupRequestNodePool;
  /**
   * @remarks
   * The subscription duration of the resource when `ChargeType` is set to `PrePaid`. This parameter is required. The unit is specified by `PeriodUnit`.
   * 
   * - If `PeriodUnit` is set to `Week`, valid values:
   * 
   *    - 1
   * 
   * - If `PeriodUnit` is set to `Month`, valid values:
   * 
   *    - 1
   *    - 2
   *    - 3
   *    - 6
   * 
   * - If `PeriodUnit` is set to `Year`, valid values:
   * 
   *    - 1
   *    - 2
   *    - 3
   * 
   * > If `ChargeType` is set to `PostPaid`, set this parameter to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration when `ChargeType` is set to `PrePaid`.
   * 
   * > This parameter is case-sensitive. For example, `Week` is valid, but `week` is invalid.
   * If the request parameters do not match the valid combinations, such as `2 Week`, the API call succeeds but an error occurs during the order placement.
   * 
   * > If `ChargeType` is set to `PostPaid`, set this parameter to `Month`.
   * 
   * This parameter is required.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @remarks
   * The pre-opened application ID.
   * 
   * @example
   * cag-b2ronxxd****
   */
  preOpenAppId?: string;
  /**
   * @remarks
   * The product type.
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
   * The application recycling timeout period, in minutes. After an end user disconnects from a cloud application for a period of time, the cloud application process exits. This period is the application recycling timeout. Set this parameter to `-1` if you do not want the application to be recycled. Valid values: -1 and 3 to 300 (integer). Default value: `15`.
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
   * The billing method subtype.
   * 
   * @example
   * postPaid
   */
  subPayType?: string;
  /**
   * @remarks
   * The user-defined policy.
   */
  userDefinePolicy?: CreateAppInstanceGroupRequestUserDefinePolicy;
  /**
   * @remarks
   * The list of authorized user group IDs.
   * 
   * **if can be null:**
   * true
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The user information of the users to be added to the delivery group. This field is required if the `Users` parameter is specified.
   */
  userInfo?: CreateAppInstanceGroupRequestUserInfo;
  /**
   * @remarks
   * The list of usernames to be added to the delivery group as assigned users.
   */
  users?: string[];
  /**
   * @remarks
   * The display policy.
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

