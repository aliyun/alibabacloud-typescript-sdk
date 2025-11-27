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
   * The name of the application version.
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
   * The number of destination resources.
   * 
   * @example
   * 5
   */
  amount?: number;
  /**
   * @remarks
   * The end time of the scaling policy. Format: HH:mm.
   * 
   * @example
   * 11:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the scaling policy. Format: HH:mm.
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
   * The schedule type of the scaling policy. This parameter must be configured together with `RecurrenceValues`.``
   * 
   * @example
   * Weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The days of each week on which the scaling policy is executed.
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * The time periods during which the scaling policy can be executed.
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
   * 空闲会话数上限。指定该值时，当会话使用率超过`ScalingUsageThreshold`且当前交付组空闲会话数小于`MaxIdleAppInstanceAmount`时，才会触发自动扩容，否则认为交付组空闲会话已足够使用，不自动扩容。该参数可用于灵活控制弹性扩容行为和降低使用成本。
   * 
   * @example
   * 3
   */
  maxIdleAppInstanceAmount?: number;
  /**
   * @remarks
   * The maximum number of resources that can be created for scale-out.
   * 
   * @example
   * 8
   */
  maxScalingAmount?: number;
  /**
   * @remarks
   * The total number of subscription resources.
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The maximum number of sessions to which a resource can connect at the same time. If a resource connects to a large number of sessions at the same time, user experience can be compromised. The value range varies based on the resource type. The following items describe the value ranges of different resource types:
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
   * The ID of the resource type that you purchase.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-g6922kced36hx****
   */
  nodePoolId?: string;
  /**
   * @remarks
   * The name of the resource type.
   */
  nodeTypeName?: string;
  /**
   * @remarks
   * The number of subscription resources that are in use.
   * 
   * @example
   * 1
   */
  nodeUsed?: number;
  /**
   * @remarks
   * The schedules of the scaling policy.
   */
  recurrenceSchedules?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules[];
  /**
   * @remarks
   * The duration for which no session is connected. Unit: minutes. If no session is connected in the resources after the specified duration elapses, automatic scale-in is triggered. Default value: 5.
   * 
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @remarks
   * The total number of scalable resources.
   * 
   * @example
   * 8
   */
  scalingNodeAmount?: number;
  /**
   * @remarks
   * The number of scalable resources that are in use.
   * 
   * @example
   * 4
   */
  scalingNodeUsed?: number;
  /**
   * @remarks
   * The number of resources that are created each time resources are scaled out. Valid values: 1 to 10.
   * 
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper limit of session usage. If the session usage exceeds the specified upper limit, auto scaling is automatically triggered. The session usage is calculated by using the following formula: `Session usage = Number of current sessions/(Total number of resources × Number of concurrent sessions) × 100%`.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The expiration date of the scaling policy. Format: yyyy-MM-dd.
   * 
   * @example
   * 2022-09-08
   */
  strategyDisableDate?: string;
  /**
   * @remarks
   * The effective date of the scaling policy. Format: yyyy-MM-dd.
   * 
   * @example
   * 2022-08-01
   */
  strategyEnableDate?: string;
  /**
   * @remarks
   * The type of the scaling policy.
   * 
   * >  `NODE_SCALING_BY_USAGE` is returned for this parameter only if ChargeType is set to `PrePaid`. `NODE_SCALING_BY_SCHEDULE` is returned for this parameter only if ChargeType is set to `PostPaid`.
   * 
   * Valid values:
   * 
   * *   NODE_FIXED: No scalable resources are used.
   * *   NODE_SCALING_BY_SCHEDULE: Scheduled scaling is used.
   * *   NODE_SCALING_BY_USAGE: Resources are scaled based on usage.
   * 
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @remarks
   * Indicates whether the warmup policy is enabled for resources.
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
   * The new OTA version. A null value indicates that no new version is available.
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
   * The ID of the OTA update task.
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
   * 标签键。
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * 标签类型。
   * 
   * @example
   * Custom
   */
  scope?: string;
  /**
   * @remarks
   * 标签值。
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
   * 接入类型。
   * 
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @remarks
   * The number of subscription resources. Minimum value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The image ID of the application.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The image name of the application.
   * 
   * @example
   * OfficeApps
   */
  appCenterImageName?: string;
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the delivery group.
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The resource type of the delivery group.
   * 
   * @example
   * __dynamic__
   */
  appInstanceType?: string;
  /**
   * @remarks
   * The name of the resource type of the delivery group.
   * 
   * @example
   * test001
   */
  appInstanceTypeName?: string;
  /**
   * @remarks
   * The policy ID of the application.
   * 
   * @example
   * pg-g3k5wa2ms2****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * The applications.
   */
  apps?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps[];
  /**
   * @remarks
   * 授权模式。
   * 
   * @example
   * App
   */
  authMode?: string;
  /**
   * @remarks
   * The sales mode.
   * 
   * Valid values:
   * 
   * *   AppInstance: by session
   * *   Node: by resource
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
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the delivery group expires.
   * 
   * @example
   * 2022-04-27T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The time when the delivery group was created.
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
   * The information about the resource group.
   */
  nodePool?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool[];
  /**
   * @remarks
   * 办公网络ID。
   * 
   * @example
   * cn-beijing+dir-172301****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The information about the over-the-air (OTA) update task.
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
   * The ID of the region where the delivery group resides. For information about the supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The percentage of reserved instances. The value indicates the percentage of unused sessions in the delivery group. Valid values: 0 to 99.
   * 
   * @example
   * 20
   */
  reserveAmountRatio?: string;
  /**
   * @remarks
   * The maximum number of reserved instances. The value indicates the maximum number of unused sessions in the delivery group. Minimum value: 1.
   * 
   * @example
   * 5
   */
  reserveMaxAmount?: number;
  /**
   * @remarks
   * The minimum number of reserved instances. The value indicates the minimum number of unused sessions in the delivery group. Minimum value: 1.
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
   * The duration for which no session is connected. Unit: minutes. If no session is connected in the resources after the specified duration elapses, automatic scale-in is triggered. Minimum value: 0.
   * 
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @remarks
   * The number of sessions that are created each time the delivery group is scaled out. Minimum value: 1.
   * 
   * @example
   * 10
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper limit of session usage. If the session usage exceeds the specified upper limit, auto scaling is automatically triggered. The session usage rate is calculated by using the following formula: Session usage rate = Number of sessions in use/Total number of sessions × 100%. Valid values: 0 to 99.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The duration for which sessions are retained after disconnection. Unit: minutes. After an end user disconnects from a session, the session is closed only after the specified duration elapses. If you want to permanently retain sessions, set this parameter to `-1`. Valid values:-1 and 3 to 300. Default value: `15`.
   * 
   * @example
   * 15
   */
  sessionTimeout?: string;
  /**
   * @remarks
   * 会话类型。
   * 
   * @example
   * NORMAL
   */
  sessionType?: string;
  /**
   * @remarks
   * Indicates whether user permission verification is skipped.
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
  /**
   * @remarks
   * The specification ID that uniquely corresponds to the ID of the delivery group.
   * 
   * @example
   * spec-8o18t8uc31qib0****
   */
  specId?: string;
  /**
   * @remarks
   * The status of the delivery group.
   * 
   * Valid values:
   * 
   * *   PUBLISHED: The delivery group is published.
   * *   FAILED: The delivery group failed to be published.
   * *   MAINTAIN_FAILED: The delivery group failed to be updated.
   * *   EXPIRED: The delivery group is expired.
   * *   MAINTAINING: The delivery group is being updated.
   * *   CEASED: The delivery group has overdue payments.
   * *   EXPIRED_RECYCLING: The delivery group is expired and being recycled.
   * *   DEPLOYING: The delivery group is being published.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  supportUserGroupMixedAuth?: boolean;
  /**
   * @remarks
   * 资源标签列表。
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

