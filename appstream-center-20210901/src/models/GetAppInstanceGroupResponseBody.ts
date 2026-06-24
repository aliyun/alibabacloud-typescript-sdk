// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps extends $dara.Model {
  /**
   * @remarks
   * The application icon.
   * 
   * @example
   * https://app-center-icon-****.png
   */
  appIcon?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * ca-i87mycyn419nu****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * 办公应用
   */
  appName?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The application version name.
   * 
   * @example
   * 初始版本
   */
  appVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      appIcon: 'AppIcon',
      appId: 'AppId',
      appName: 'AppName',
      appVersion: 'AppVersion',
      appVersionName: 'AppVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIcon: 'string',
      appId: 'string',
      appName: 'string',
      appVersion: 'string',
      appVersionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods extends $dara.Model {
  /**
   * @remarks
   * The target resource count.
   * 
   * @example
   * 5
   */
  amount?: number;
  /**
   * @remarks
   * The end time. Format: HH:mm.
   * 
   * @example
   * 11:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time. Format: HH:mm.
   * 
   * @example
   * 09:30
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

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules extends $dara.Model {
  /**
   * @remarks
   * The type of the policy execution cycle. You must specify both `RecurrenceType` and `RecurrenceValues`.
   * 
   * @example
   * Weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The list of values for the policy execution cycle.
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * The list of time periods for the policy execution cycle.
   */
  timerPeriods?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods[];
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
      timerPeriods: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods },
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

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool extends $dara.Model {
  /**
   * @remarks
   * The number of resources purchased when the delivery group was created.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The upper limit of idle sessions. When this value is specified, automatic scale-out is triggered only when the session usage exceeds `ScalingUsageThreshold` and the number of idle sessions in the delivery group is less than `MaxIdleAppInstanceAmount`. Otherwise, the delivery group is considered to have sufficient idle sessions and no automatic scale-out is performed. This parameter allows you to flexibly control elastic scaling behavior and reduce costs.
   * 
   * @example
   * 3
   */
  maxIdleAppInstanceAmount?: number;
  /**
   * @remarks
   * The maximum number of resources that can be created during scale-out.
   * 
   * @example
   * 8
   */
  maxScalingAmount?: number;
  /**
   * @remarks
   * The total number of current subscription resources.
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The number of concurrent sessions, which is the number of sessions that a single resource can handle simultaneously. If too many sessions are connected simultaneously, the application experience may degrade. The valid values vary by resource specification:
   * 
   * - appstreaming.general.4c8g: 1 to 2.
   * - appstreaming.general.8c16g: 1 to 4.
   * - appstreaming.vgpu.8c16g.4g: 1 to 4.
   * - appstreaming.vgpu.8c31g.16g: 1 to 4.
   * - appstreaming.vgpu.14c93g.12g: 1 to 6.
   * 
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @remarks
   * The instance type ID of the purchased resource.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-g6922kced36hx****
   */
  nodePoolId?: string;
  /**
   * @remarks
   * The resource specification name.
   * 
   * @example
   * 无影-通用型_4核8G
   */
  nodeTypeName?: string;
  /**
   * @remarks
   * The resource count of subscription resources in use.
   * 
   * @example
   * 1
   */
  nodeUsed?: number;
  /**
   * @remarks
   * The list of policy execution cycles.
   */
  recurrenceSchedules?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules[];
  /**
   * @remarks
   * The idle duration without session connections, in minutes. When a resource remains without session connections for the specified duration, automatic scale-in is triggered. Default value: 5.
   * 
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @remarks
   * The total number of elastic resources.
   * 
   * @example
   * 8
   */
  scalingNodeAmount?: number;
  /**
   * @remarks
   * The resource count of elastic resources in use.
   * 
   * @example
   * 4
   */
  scalingNodeUsed?: number;
  /**
   * @remarks
   * The number of resources created during each scale-out event. Valid values: 1 to 10.
   * 
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper threshold of session usage (%). When the session usage exceeds this threshold, automatic scale-out is triggered. The session usage is calculated as follows: `Session usage = Number of current sessions ÷ (Total number of resources × Concurrent sessions per resource) × 100%`.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The date when the policy expires. Format: yyyy-MM-dd.
   * 
   * @example
   * 2022-09-08
   */
  strategyDisableDate?: string;
  /**
   * @remarks
   * The date when the policy takes effect. Format: yyyy-MM-dd.
   * 
   * @example
   * 2022-08-01
   */
  strategyEnableDate?: string;
  /**
   * @remarks
   * The elastic policy type.
   * 
   * > `NODE_SCALING_BY_USAGE` (usage-based scaling policy) applies only to `PrePaid` (subscription) resources. `NODE_SCALING_BY_SCHEDULE` (scheduled scaling policy) applies only to `PostPaid` (pay-as-you-go) resources.
   * 
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @remarks
   * Indicates whether the resource prefetch policy is enabled.
   * 
   * @example
   * false
   */
  warmUp?: boolean;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      maxIdleAppInstanceAmount: 'MaxIdleAppInstanceAmount',
      maxScalingAmount: 'MaxScalingAmount',
      nodeAmount: 'NodeAmount',
      nodeCapacity: 'NodeCapacity',
      nodeInstanceType: 'NodeInstanceType',
      nodePoolId: 'NodePoolId',
      nodeTypeName: 'NodeTypeName',
      nodeUsed: 'NodeUsed',
      recurrenceSchedules: 'RecurrenceSchedules',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingNodeAmount: 'ScalingNodeAmount',
      scalingNodeUsed: 'ScalingNodeUsed',
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
      amount: 'number',
      maxIdleAppInstanceAmount: 'number',
      maxScalingAmount: 'number',
      nodeAmount: 'number',
      nodeCapacity: 'number',
      nodeInstanceType: 'string',
      nodePoolId: 'string',
      nodeTypeName: 'string',
      nodeUsed: 'number',
      recurrenceSchedules: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules },
      scalingDownAfterIdleMinutes: 'number',
      scalingNodeAmount: 'number',
      scalingNodeUsed: 'number',
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

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo extends $dara.Model {
  /**
   * @remarks
   * The new OTA version. An empty value indicates that no new version is available.
   * 
   * @example
   * 0.0.1-D-20220630.11****
   */
  newOtaVersion?: string;
  /**
   * @remarks
   * The current OTA version.
   * 
   * @example
   * 0.0.1-D-20220615.11****
   */
  otaVersion?: string;
  /**
   * @remarks
   * The OTA upgrade task ID.
   * 
   * @example
   * ota-e49929gv8acz5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      newOtaVersion: 'NewOtaVersion',
      otaVersion: 'OtaVersion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newOtaVersion: 'string',
      otaVersion: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The tag type.
   * 
   * @example
   * Custom
   */
  scope?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * design
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      scope: 'Scope',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      scope: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponseBodyAppInstanceGroupModels extends $dara.Model {
  /**
   * @remarks
   * The access type.
   * 
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @remarks
   * The number of subscription resources configured by the user. Minimum value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The application image ID.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The application image name.
   * 
   * @example
   * OfficeApps
   */
  appCenterImageName?: string;
  /**
   * @remarks
   * The delivery group ID.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group name.
   * 
   * @example
   * 办公应用
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The instance type of the delivery group.
   * 
   * @example
   * __dynamic__
   */
  appInstanceType?: string;
  /**
   * @remarks
   * The name of the instance type of the delivery group.
   * 
   * @example
   * test001
   */
  appInstanceTypeName?: string;
  /**
   * @remarks
   * The application policy ID.
   * 
   * @example
   * pg-g3k5wa2ms2****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * The list of application information.
   */
  apps?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps[];
  /**
   * @remarks
   * The authorization mode.
   * 
   * @example
   * App
   */
  authMode?: string;
  /**
   * @remarks
   * The sales mode.
   * 
   * @example
   * Node
   */
  chargeResourceMode?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The expiration time of the delivery group.
   * 
   * @example
   * 2022-04-27T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-04-26T15:06:16.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The maximum number of instances. Minimum value: 1.
   * 
   * @example
   * 10
   */
  maxAmount?: number;
  /**
   * @remarks
   * The minimum number of instances. Minimum value: 1.
   * 
   * @example
   * 1
   */
  minAmount?: number;
  /**
   * @remarks
   * The resource group information.
   */
  nodePool?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool[];
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-beijing+dir-172301****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The OTA upgrade task information.
   */
  otaInfo?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The region ID of the delivery group. For more information about supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The percentage of reserved instances, which represents the ratio of unused sessions in the delivery group. Valid values: 0 to 99.
   * 
   * @example
   * 20
   */
  reserveAmountRatio?: string;
  /**
   * @remarks
   * The maximum number of reserved instances, which represents the maximum number of unused sessions in the delivery group. Minimum value: 1.
   * 
   * @example
   * 5
   */
  reserveMaxAmount?: number;
  /**
   * @remarks
   * The minimum number of reserved instances, which represents the minimum number of unused sessions in the delivery group. Minimum value: 1.
   * 
   * @example
   * 1
   */
  reserveMinAmount?: number;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * AVAILABLE
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The idle duration without session connections, in minutes. When a resource remains without session connections for the specified duration, automatic scale-in is triggered. Minimum value: 0.
   * 
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @remarks
   * The number of sessions created during each scale-out event. Minimum value: 1.
   * 
   * @example
   * 10
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper threshold of session usage (%). When the session usage exceeds this threshold, automatic scale-out is triggered. The session usage is calculated as follows: Session usage = Number of sessions in use ÷ Total number of sessions × 100%. Valid values: 0 to 99.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The session disconnection retention duration, in minutes. After an end user session is disconnected, the session is retained for the specified duration before being logged off. Set this parameter to `-1` to retain the session indefinitely. Valid values: -1 and 3 to 300. Default value: `15`.
   * 
   * @example
   * 15
   */
  sessionTimeout?: string;
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
   * Indicates whether user authorization verification is skipped.
   * 
   * @example
   * false
   */
  skipUserAuthCheck?: boolean;
  /**
   * @remarks
   * The ID that uniquely corresponds to the delivery group ID.
   * 
   * @example
   * spec-8o18t8uc31qib0****
   */
  specId?: string;
  /**
   * @remarks
   * The delivery group status.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  supportUserGroupMixedAuth?: boolean;
  /**
   * @remarks
   * The list of resource tags.
   */
  tags?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsTags[];
  /**
   * @example
   * Mixed
   */
  userGroupAuthMode?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      amount: 'Amount',
      appCenterImageId: 'AppCenterImageId',
      appCenterImageName: 'AppCenterImageName',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appInstanceType: 'AppInstanceType',
      appInstanceTypeName: 'AppInstanceTypeName',
      appPolicyId: 'AppPolicyId',
      apps: 'Apps',
      authMode: 'AuthMode',
      chargeResourceMode: 'ChargeResourceMode',
      chargeType: 'ChargeType',
      expiredTime: 'ExpiredTime',
      gmtCreate: 'GmtCreate',
      maxAmount: 'MaxAmount',
      minAmount: 'MinAmount',
      nodePool: 'NodePool',
      officeSiteId: 'OfficeSiteId',
      osType: 'OsType',
      otaInfo: 'OtaInfo',
      productType: 'ProductType',
      regionId: 'RegionId',
      reserveAmountRatio: 'ReserveAmountRatio',
      reserveMaxAmount: 'ReserveMaxAmount',
      reserveMinAmount: 'ReserveMinAmount',
      resourceStatus: 'ResourceStatus',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      sessionTimeout: 'SessionTimeout',
      sessionType: 'SessionType',
      skipUserAuthCheck: 'SkipUserAuthCheck',
      specId: 'SpecId',
      status: 'Status',
      supportUserGroupMixedAuth: 'SupportUserGroupMixedAuth',
      tags: 'Tags',
      userGroupAuthMode: 'UserGroupAuthMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      amount: 'number',
      appCenterImageId: 'string',
      appCenterImageName: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      appInstanceType: 'string',
      appInstanceTypeName: 'string',
      appPolicyId: 'string',
      apps: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps },
      authMode: 'string',
      chargeResourceMode: 'string',
      chargeType: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      maxAmount: 'number',
      minAmount: 'number',
      nodePool: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool },
      officeSiteId: 'string',
      osType: 'string',
      otaInfo: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo,
      productType: 'string',
      regionId: 'string',
      reserveAmountRatio: 'string',
      reserveMaxAmount: 'number',
      reserveMinAmount: 'number',
      resourceStatus: 'string',
      scalingDownAfterIdleMinutes: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      sessionTimeout: 'string',
      sessionType: 'string',
      skipUserAuthCheck: 'boolean',
      specId: 'string',
      status: 'string',
      supportUserGroupMixedAuth: 'boolean',
      tags: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsTags },
      userGroupAuthMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apps)) {
      $dara.Model.validateArray(this.apps);
    }
    if(Array.isArray(this.nodePool)) {
      $dara.Model.validateArray(this.nodePool);
    }
    if(this.otaInfo && typeof (this.otaInfo as any).validate === 'function') {
      (this.otaInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * AppInstanceGroupModels
   */
  appInstanceGroupModels?: GetAppInstanceGroupResponseBodyAppInstanceGroupModels;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupModels: 'AppInstanceGroupModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupModels: GetAppInstanceGroupResponseBodyAppInstanceGroupModels,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appInstanceGroupModels && typeof (this.appInstanceGroupModels as any).validate === 'function') {
      (this.appInstanceGroupModels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

