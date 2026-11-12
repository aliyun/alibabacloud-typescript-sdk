// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps extends $dara.Model {
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
   * Office App
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
   * Initial version
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

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods extends $dara.Model {
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

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules extends $dara.Model {
  /**
   * @remarks
   * The type of the policy execution schedule. You must specify both `RecurrenceType` and `RecurrenceValues`.
   * 
   * @example
   * Weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The list of values for the policy execution schedule.
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * The list of time periods for the policy execution schedule.
   */
  timerPeriods?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods[];
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
      timerPeriods: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods },
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

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool extends $dara.Model {
  /**
   * @remarks
   * The number of resources purchased when the delivery group is created.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The upper limit of idle sessions. If this value is specified, automatic scale-out is triggered only when the session usage exceeds `ScalingUsageThreshold` and the number of idle sessions in the current delivery group is less than `MaxIdleAppInstanceAmount`. Otherwise, the delivery group is considered to have sufficient idle sessions, and automatic scale-out is not triggered. This parameter can be used to flexibly control elastic scale-out behavior and reduce costs.
   * 
   * @example
   * 3
   */
  maxIdleAppInstanceAmount?: number;
  /**
   * @remarks
   * The maximum number of resources created during scale-out.
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
   * The number of concurrent sessions, which is the number of sessions that a single resource can connect to simultaneously. If the number of concurrent sessions is too high, the application experience may degrade. The valid values vary based on the resource specifications.
   * 
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @remarks
   * The instance type ID of the purchased resources.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * rg-g6922kced36hx****
   */
  nodePoolId?: string;
  /**
   * @remarks
   * The name of the resource specification.
   * 
   * @example
   * WUYING-General-purpose_4vCPU8GB
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
   * The list of policy execution schedules.
   */
  recurrenceSchedules?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules[];
  /**
   * @remarks
   * The duration without session connections, in minutes. When a resource has no session connections for the specified duration, automatic scale-in is triggered. Default value: 5.
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
   * The number of resources created each time during scale-out. Valid values: 1 to 10.
   * 
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper limit threshold for session usage (%). When the session usage exceeds this threshold, automatic scale-out is triggered. Session usage is calculated as: `Session usage = Current number of sessions / (Total number of resources × Number of concurrent sessions per resource) × 100%`.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The strategy expiration date. Format: yyyy-MM-dd.
   * 
   * @example
   * 2022-09-08
   */
  strategyDisableDate?: string;
  /**
   * @remarks
   * The strategy effective date. Format: yyyy-MM-dd.
   * 
   * @example
   * 2022-08-01
   */
  strategyEnableDate?: string;
  /**
   * @remarks
   * The elastic policy type.
   * > `NODE_SCALING_BY_USAGE` (usage-based scaling policy) applies only to `PrePaid` (subscription) resources. `NODE_SCALING_BY_SCHEDULE` (scheduled scaling policy) applies only to `PostPaid` (pay-as-you-go) resources.
   * 
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @remarks
   * Specifies whether the resource prefetch strategy is enabled.
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
      recurrenceSchedules: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules },
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

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo extends $dara.Model {
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
   * The ID of the OTA upgrade task.
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

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsResourceTags extends $dara.Model {
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

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsTags extends $dara.Model {
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

export class ListAppInstanceGroupResponseBodyAppInstanceGroupModels extends $dara.Model {
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
   * The number of subscription resources specified by the user. The minimum value is 1.
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
   * The ID of the app instance group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the app instance group.
   * 
   * @example
   * Office App
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The specification type of the delivery group.
   * 
   * @example
   * __dynamic__
   */
  appInstanceType?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-g3k5wa2ms2****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * Specifies whether the current image supports the unified policy.
   * 
   * @example
   * false
   */
  appPolicyImageCheck?: boolean;
  /**
   * @remarks
   * The policy version.
   * 
   * @example
   * CENTER
   */
  appPolicyVersion?: string;
  /**
   * @remarks
   * The application information.
   */
  apps?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps[];
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
   * The expiration time of the app instance group. The time is displayed in the ISO 8601 date and time format, including milliseconds and time zone offset. Format template: yyyy-MM-dd\\"T\\"HH:mm:ss.SSSXXX.
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
   * The maximum number of instances. The minimum value is 1.
   * 
   * @example
   * 10
   */
  maxAmount?: number;
  /**
   * @remarks
   * The minimum number of instances. The minimum value is 1.
   * 
   * @example
   * 1
   */
  minAmount?: number;
  /**
   * @remarks
   * The node pool information.
   */
  nodePool?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool[];
  /**
   * @remarks
   * The ID of the office network.
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
  otaInfo?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo;
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
   * The ID of the region to which the app instance group belongs. For more information about supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The percentage of reserved instances, which is the proportion of unused sessions in the delivery group. Valid values: 0 to 99.
   * 
   * @example
   * 20
   */
  reserveAmountRatio?: string;
  /**
   * @remarks
   * The maximum number of reserved instances, which is the maximum number of unused sessions in the delivery group. The minimum value is 1.
   * 
   * @example
   * 5
   */
  reserveMaxAmount?: number;
  /**
   * @remarks
   * The minimum number of reserved instances, which is the minimum number of unused sessions in the delivery group. The minimum value is 1.
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
   * The list of resource tags.
   */
  resourceTags?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsResourceTags[];
  /**
   * @remarks
   * The duration without session connections, in minutes. When a resource has no session connections for the specified duration, automatic scale-in is triggered. The minimum value is 0.
   * 
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @remarks
   * The number of sessions created each time during scale-out. The minimum value is 1.
   * 
   * @example
   * 10
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper limit threshold for session usage (%). When the session usage exceeds this threshold, automatic scale-out is triggered. Session usage is calculated as: Session usage = Number of active sessions / Total number of sessions × 100%. Valid values: 0 to 99.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The session disconnection retention period, in minutes. After an end user\\"s session is disconnected, the session is retained for the specified period before being logged off. To retain the session indefinitely, set this parameter to `-1`. Valid values: -1 and 3 to 300. Default value: `15`.
   * 
   * @example
   * 15
   */
  sessionTimeout?: string;
  /**
   * @remarks
   * Specifies whether to skip user authorization verification.
   * 
   * @example
   * false
   */
  skipUserAuthCheck?: boolean;
  /**
   * @remarks
   * The ID that uniquely corresponds to the app instance group ID.
   * 
   * @example
   * spec-8o18t8uc31qib0****
   */
  specId?: string;
  /**
   * @remarks
   * The status of the app instance group.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether mixed authorization for users and user groups is supported.
   */
  supportUserGroupMixedAuth?: boolean;
  /**
   * @remarks
   * The list of resource tags.
   */
  tags?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsTags[];
  /**
   * @remarks
   * The user and user group authorization mode.
   * 
   * @example
   * Mixed
   */
  userGroupAuthMode?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      amount: 'Amount',
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appInstanceType: 'AppInstanceType',
      appPolicyId: 'AppPolicyId',
      appPolicyImageCheck: 'AppPolicyImageCheck',
      appPolicyVersion: 'AppPolicyVersion',
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
      resourceTags: 'ResourceTags',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      sessionTimeout: 'SessionTimeout',
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
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      appInstanceType: 'string',
      appPolicyId: 'string',
      appPolicyImageCheck: 'boolean',
      appPolicyVersion: 'string',
      apps: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps },
      authMode: 'string',
      chargeResourceMode: 'string',
      chargeType: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      maxAmount: 'number',
      minAmount: 'number',
      nodePool: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool },
      officeSiteId: 'string',
      osType: 'string',
      otaInfo: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo,
      productType: 'string',
      regionId: 'string',
      reserveAmountRatio: 'string',
      reserveMaxAmount: 'number',
      reserveMinAmount: 'number',
      resourceStatus: 'string',
      resourceTags: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsResourceTags },
      scalingDownAfterIdleMinutes: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      sessionTimeout: 'string',
      skipUserAuthCheck: 'boolean',
      specId: 'string',
      status: 'string',
      supportUserGroupMixedAuth: 'boolean',
      tags: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsTags },
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
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
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

export class ListAppInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery group information.
   */
  appInstanceGroupModels?: ListAppInstanceGroupResponseBodyAppInstanceGroupModels[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupModels: 'AppInstanceGroupModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupModels: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModels },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceGroupModels)) {
      $dara.Model.validateArray(this.appInstanceGroupModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

