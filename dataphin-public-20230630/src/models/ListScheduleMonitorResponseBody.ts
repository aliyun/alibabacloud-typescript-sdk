// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleMonitorResponseBodyPageResultMonitorItemListBizUnit extends $dara.Model {
  /**
   * @remarks
   * The display name of the business segment.
   * 
   * @example
   * Test segment
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the business segment.
   * 
   * @example
   * 6612345678901234
   */
  id?: number;
  /**
   * @remarks
   * The name of the business segment.
   * 
   * @example
   * bd_demo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListLogicTable extends $dara.Model {
  /**
   * @remarks
   * The ID of the business segment.
   * 
   * @example
   * 6612345678901234
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The ID of the monitoring task.
   * 
   * @example
   * 6812345678901234
   */
  id?: string;
  /**
   * @remarks
   * The name of the monitoring task.
   * 
   * @example
   * dim_user
   */
  name?: string;
  /**
   * @remarks
   * The subtype of the node.
   * 
   * @example
   * MAX_COMPUTE_SQL
   */
  nodeSubType?: string;
  /**
   * @remarks
   * The list of O&M owner IDs.
   */
  ownerIdList?: string[];
  /**
   * @remarks
   * The name of the project to which the task belongs.
   * 
   * @example
   * ds_demo
   */
  projectName?: string;
  /**
   * @remarks
   * The type of the scheduling period.
   * 
   * @example
   * DAILY
   */
  schedulePeriodType?: string;
  /**
   * @remarks
   * Specifies whether data delay is supported.
   */
  supportDataDelay?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      id: 'Id',
      name: 'Name',
      nodeSubType: 'NodeSubType',
      ownerIdList: 'OwnerIdList',
      projectName: 'ProjectName',
      schedulePeriodType: 'SchedulePeriodType',
      supportDataDelay: 'SupportDataDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      id: 'string',
      name: 'string',
      nodeSubType: 'string',
      ownerIdList: { 'type': 'array', 'itemType': 'string' },
      projectName: 'string',
      schedulePeriodType: 'string',
      supportDataDelay: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.ownerIdList)) {
      $dara.Model.validateArray(this.ownerIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitorNodeRangeFilterRuleList extends $dara.Model {
  /**
   * @remarks
   * The filter key.
   * 
   * @example
   * NODE_NAME
   */
  filterKey?: string;
  /**
   * @remarks
   * The list of filter values.
   */
  filterValueList?: string[];
  /**
   * @remarks
   * Specifies whether to invert the selection.
   */
  isExclude?: boolean;
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterValueList: 'FilterValueList',
      isExclude: 'IsExclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterValueList: { 'type': 'array', 'itemType': 'string' },
      isExclude: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.filterValueList)) {
      $dara.Model.validateArray(this.filterValueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitorNodeRange extends $dara.Model {
  /**
   * @remarks
   * The list of filter rules.
   */
  filterRuleList?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitorNodeRangeFilterRuleList[];
  static names(): { [key: string]: string } {
    return {
      filterRuleList: 'FilterRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterRuleList: { 'type': 'array', 'itemType': ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitorNodeRangeFilterRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.filterRuleList)) {
      $dara.Model.validateArray(this.filterRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfigDailyUnfinishedConfig extends $dara.Model {
  /**
   * @remarks
   * The time of day for the unfinished check, in HH:mm format.
   * 
   * @example
   * 07:00
   */
  fixedUnfinishedTime?: string;
  static names(): { [key: string]: string } {
    return {
      fixedUnfinishedTime: 'FixedUnfinishedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedUnfinishedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfigCustomPeriodList extends $dara.Model {
  /**
   * @remarks
   * The time for the unfinished check, in HH:mm format.
   * 
   * @example
   * 07:00
   */
  fixedUnfinishedTime?: string;
  /**
   * @remarks
   * The number of periods.
   * 
   * @example
   * 1
   */
  periodNum?: number;
  static names(): { [key: string]: string } {
    return {
      fixedUnfinishedTime: 'FixedUnfinishedTime',
      periodNum: 'PeriodNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedUnfinishedTime: 'string',
      periodNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfig extends $dara.Model {
  /**
   * @remarks
   * The list of custom monitoring periods.
   */
  customPeriodList?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfigCustomPeriodList[];
  /**
   * @remarks
   * The interval value.
   * 
   * @example
   * 30
   */
  intervalAfterDueTime?: number;
  /**
   * @remarks
   * The interval unit. Valid values: SECONDS, MINUTES, and HOURS.
   * 
   * @example
   * MINUTES
   */
  intervalUnit?: string;
  /**
   * @remarks
   * The monitoring period type. Valid values: ALL, FIRST, LAST, and CUSTOM.
   * 
   * @example
   * ALL
   */
  monitorPeriodType?: string;
  /**
   * @remarks
   * The trigger rule type.
   * 
   * @example
   * INTERVAL_AFTER_DUE_TIME
   */
  triggerRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      customPeriodList: 'CustomPeriodList',
      intervalAfterDueTime: 'IntervalAfterDueTime',
      intervalUnit: 'IntervalUnit',
      monitorPeriodType: 'MonitorPeriodType',
      triggerRuleType: 'TriggerRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPeriodList: { 'type': 'array', 'itemType': ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfigCustomPeriodList },
      intervalAfterDueTime: 'number',
      intervalUnit: 'string',
      monitorPeriodType: 'string',
      triggerRuleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customPeriodList)) {
      $dara.Model.validateArray(this.customPeriodList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfig extends $dara.Model {
  /**
   * @remarks
   * The daily configuration for unfinished tasks.
   */
  dailyUnfinishedConfig?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfigDailyUnfinishedConfig;
  /**
   * @remarks
   * The multi-period unfinished configuration.
   */
  multiPeriodUnfinishedConfig?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfig;
  static names(): { [key: string]: string } {
    return {
      dailyUnfinishedConfig: 'DailyUnfinishedConfig',
      multiPeriodUnfinishedConfig: 'MultiPeriodUnfinishedConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyUnfinishedConfig: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfigDailyUnfinishedConfig,
      multiPeriodUnfinishedConfig: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfig,
    };
  }

  validate() {
    if(this.dailyUnfinishedConfig && typeof (this.dailyUnfinishedConfig as any).validate === 'function') {
      (this.dailyUnfinishedConfig as any).validate();
    }
    if(this.multiPeriodUnfinishedConfig && typeof (this.multiPeriodUnfinishedConfig as any).validate === 'function') {
      (this.multiPeriodUnfinishedConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReason extends $dara.Model {
  /**
   * @remarks
   * The type of the alert reason. Valid values: FAILED, TIME_OUT, UNFINISHED, SUCCESS, and DATA_DELAY.
   * 
   * @example
   * TIME_OUT
   */
  alertReasonType?: string;
  /**
   * @remarks
   * The timeout period in minutes. This parameter is returned only when the alert reason type is TIME_OUT.
   * 
   * @example
   * 60
   */
  fixedElapsedTime?: number;
  /**
   * @remarks
   * The daily check time for unfinished tasks in HH:mm format. This parameter is returned only when the alert reason type is UNFINISHED.
   * 
   * @example
   * 07:00
   */
  fixedUnfinishedTime?: string;
  /**
   * @remarks
   * The detailed configuration of the unfinished rule. This parameter is returned only when the alert reason type is UNFINISHED.
   */
  unfinishedRuleDetailConfig?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfig;
  static names(): { [key: string]: string } {
    return {
      alertReasonType: 'AlertReasonType',
      fixedElapsedTime: 'FixedElapsedTime',
      fixedUnfinishedTime: 'FixedUnfinishedTime',
      unfinishedRuleDetailConfig: 'UnfinishedRuleDetailConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertReasonType: 'string',
      fixedElapsedTime: 'number',
      fixedUnfinishedTime: 'string',
      unfinishedRuleDetailConfig: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReasonUnfinishedRuleDetailConfig,
    };
  }

  validate() {
    if(this.unfinishedRuleDetailConfig && typeof (this.unfinishedRuleDetailConfig as any).validate === 'function') {
      (this.unfinishedRuleDetailConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertStrategyMonitoredTimeRange extends $dara.Model {
  /**
   * @remarks
   * The end time in HH:mm format. A value of 0 indicates no limit.
   * 
   * @example
   * 11:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time in HH:mm format. A value of 0 indicates no limit.
   * 
   * @example
   * 07:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertStrategyReceiverConfigList extends $dara.Model {
  /**
   * @remarks
   * The list of custom alert channel IDs.
   */
  customAlertChannelIdList?: string[];
  /**
   * @remarks
   * The list of on-duty table IDs. This parameter is required when ReceiverType is set to ON_DUTY_TABLE.
   */
  onDutyTableIdList?: string[];
  /**
   * @remarks
   * The list of notification methods. Valid values: PHONE, MESSAGE, EMAIL, DING_TALK, FEISHU, WECHAT, and CUSTOM.
   * 
   * This parameter is required.
   */
  receivedWayList?: string[];
  /**
   * @remarks
   * The recipient type. Valid values: OWNER (owner), USER_CUSTOM (custom user), and ON_DUTY_TABLE (on-duty table).
   * 
   * This parameter is required.
   * 
   * @example
   * USER_CUSTOM
   */
  receiverType?: string;
  /**
   * @remarks
   * The list of recipient user IDs. This parameter is required when ReceiverType is set to USER_CUSTOM.
   */
  receiverUserIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      customAlertChannelIdList: 'CustomAlertChannelIdList',
      onDutyTableIdList: 'OnDutyTableIdList',
      receivedWayList: 'ReceivedWayList',
      receiverType: 'ReceiverType',
      receiverUserIdList: 'ReceiverUserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAlertChannelIdList: { 'type': 'array', 'itemType': 'string' },
      onDutyTableIdList: { 'type': 'array', 'itemType': 'string' },
      receivedWayList: { 'type': 'array', 'itemType': 'string' },
      receiverType: 'string',
      receiverUserIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customAlertChannelIdList)) {
      $dara.Model.validateArray(this.customAlertChannelIdList);
    }
    if(Array.isArray(this.onDutyTableIdList)) {
      $dara.Model.validateArray(this.onDutyTableIdList);
    }
    if(Array.isArray(this.receivedWayList)) {
      $dara.Model.validateArray(this.receivedWayList);
    }
    if(Array.isArray(this.receiverUserIdList)) {
      $dara.Model.validateArray(this.receiverUserIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertStrategy extends $dara.Model {
  /**
   * @remarks
   * The alert trigger frequency.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  alertFrequency?: number;
  /**
   * @remarks
   * The monitored time range.
   */
  monitoredTimeRange?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertStrategyMonitoredTimeRange;
  /**
   * @remarks
   * The list of recipient configurations.
   * 
   * This parameter is required.
   */
  receiverConfigList?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertStrategyReceiverConfigList[];
  /**
   * @remarks
   * The maximum number of alert notifications to send.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sendTimes?: number;
  static names(): { [key: string]: string } {
    return {
      alertFrequency: 'AlertFrequency',
      monitoredTimeRange: 'MonitoredTimeRange',
      receiverConfigList: 'ReceiverConfigList',
      sendTimes: 'SendTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertFrequency: 'number',
      monitoredTimeRange: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertStrategyMonitoredTimeRange,
      receiverConfigList: { 'type': 'array', 'itemType': ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertStrategyReceiverConfigList },
      sendTimes: 'number',
    };
  }

  validate() {
    if(this.monitoredTimeRange && typeof (this.monitoredTimeRange as any).validate === 'function') {
      (this.monitoredTimeRange as any).validate();
    }
    if(Array.isArray(this.receiverConfigList)) {
      $dara.Model.validateArray(this.receiverConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListCreator extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 200012345
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Zhang San
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListModifier extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 200012345
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Li Si
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleList extends $dara.Model {
  /**
   * @remarks
   * The reason for the alert.
   */
  alertReason?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReason;
  /**
   * @remarks
   * The alert strategy.
   */
  alertStrategy?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertStrategy;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-09-10 15:30:00
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   */
  creator?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListCreator;
  /**
   * @remarks
   * The monitoring rule ID.
   * 
   * @example
   * 6912345678909876
   */
  id?: number;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2026-09-10 15:30:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The last modifier.
   */
  modifier?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListModifier;
  /**
   * @remarks
   * The ID of the associated monitoring item.
   * 
   * @example
   * 6912345678901234
   */
  monitoredItemId?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 7086194564164288
   */
  projectId?: number;
  /**
   * @remarks
   * The enablement status of the rule.
   */
  switchStatus?: boolean;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 30001011
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      alertReason: 'AlertReason',
      alertStrategy: 'AlertStrategy',
      createTime: 'CreateTime',
      creator: 'Creator',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      modifier: 'Modifier',
      monitoredItemId: 'MonitoredItemId',
      projectId: 'ProjectId',
      switchStatus: 'SwitchStatus',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertReason: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertReason,
      alertStrategy: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListAlertStrategy,
      createTime: 'string',
      creator: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListCreator,
      id: 'number',
      modifiedTime: 'string',
      modifier: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleListModifier,
      monitoredItemId: 'number',
      projectId: 'number',
      switchStatus: 'boolean',
      tenantId: 'string',
    };
  }

  validate() {
    if(this.alertReason && typeof (this.alertReason as any).validate === 'function') {
      (this.alertReason as any).validate();
    }
    if(this.alertStrategy && typeof (this.alertStrategy as any).validate === 'function') {
      (this.alertStrategy as any).validate();
    }
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.modifier && typeof (this.modifier as any).validate === 'function') {
      (this.modifier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredTask extends $dara.Model {
  /**
   * @remarks
   * The ID of the monitoring task.
   * 
   * @example
   * 6712345678901234
   */
  id?: string;
  /**
   * @remarks
   * The name of the monitoring task.
   * 
   * @example
   * dwd_order_detail
   */
  name?: string;
  /**
   * @remarks
   * The name of the project to which the task belongs.
   * 
   * @example
   * ds_demo
   */
  projectName?: string;
  /**
   * @remarks
   * The schedule period type. Valid values: MINUTELY, HOURLY, DAILY, WEEKLY, MONTHLY, and YEARLY.
   * 
   * @example
   * DAILY
   */
  schedulePeriodType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectName: 'ProjectName',
      schedulePeriodType: 'SchedulePeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectName: 'string',
      schedulePeriodType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemListProjectInfo extends $dara.Model {
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 7086194564164288
   */
  id?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * ds_demo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResultMonitorItemList extends $dara.Model {
  /**
   * @remarks
   * The business segment information.
   */
  bizUnit?: ListScheduleMonitorResponseBodyPageResultMonitorItemListBizUnit;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-09-10 15:30:00
   */
  createTime?: string;
  /**
   * @remarks
   * The logical table information.
   */
  logicTable?: ListScheduleMonitorResponseBodyPageResultMonitorItemListLogicTable;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2026-09-10 15:30:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The scope of the monitoring task.
   */
  monitorNodeRange?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitorNodeRange;
  /**
   * @remarks
   * The ID of the monitored object.
   * 
   * @example
   * 6912345678901234
   */
  monitoredItemId?: number;
  /**
   * @remarks
   * The list of monitoring rules.
   */
  monitoredRuleList?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleList[];
  /**
   * @remarks
   * The monitored task information.
   */
  monitoredTask?: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredTask;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 7086194564164288
   */
  projectId?: number;
  /**
   * @remarks
   * The project information.
   */
  projectInfo?: ListScheduleMonitorResponseBodyPageResultMonitorItemListProjectInfo;
  /**
   * @remarks
   * The business subtype.
   * 
   * @example
   * MAX_COMPUTE_SQL
   */
  subType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 30001011
   */
  tenantId?: string;
  /**
   * @remarks
   * The monitored object type.
   * 
   * @example
   * SCHEDULE_PHYSICAL_NODE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnit: 'BizUnit',
      createTime: 'CreateTime',
      logicTable: 'LogicTable',
      modifiedTime: 'ModifiedTime',
      monitorNodeRange: 'MonitorNodeRange',
      monitoredItemId: 'MonitoredItemId',
      monitoredRuleList: 'MonitoredRuleList',
      monitoredTask: 'MonitoredTask',
      projectId: 'ProjectId',
      projectInfo: 'ProjectInfo',
      subType: 'SubType',
      tenantId: 'TenantId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnit: ListScheduleMonitorResponseBodyPageResultMonitorItemListBizUnit,
      createTime: 'string',
      logicTable: ListScheduleMonitorResponseBodyPageResultMonitorItemListLogicTable,
      modifiedTime: 'string',
      monitorNodeRange: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitorNodeRange,
      monitoredItemId: 'number',
      monitoredRuleList: { 'type': 'array', 'itemType': ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredRuleList },
      monitoredTask: ListScheduleMonitorResponseBodyPageResultMonitorItemListMonitoredTask,
      projectId: 'number',
      projectInfo: ListScheduleMonitorResponseBodyPageResultMonitorItemListProjectInfo,
      subType: 'string',
      tenantId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.bizUnit && typeof (this.bizUnit as any).validate === 'function') {
      (this.bizUnit as any).validate();
    }
    if(this.logicTable && typeof (this.logicTable as any).validate === 'function') {
      (this.logicTable as any).validate();
    }
    if(this.monitorNodeRange && typeof (this.monitorNodeRange as any).validate === 'function') {
      (this.monitorNodeRange as any).validate();
    }
    if(Array.isArray(this.monitoredRuleList)) {
      $dara.Model.validateArray(this.monitoredRuleList);
    }
    if(this.monitoredTask && typeof (this.monitoredTask as any).validate === 'function') {
      (this.monitoredTask as any).validate();
    }
    if(this.projectInfo && typeof (this.projectInfo as any).validate === 'function') {
      (this.projectInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The list of monitored objects on the current page.
   */
  monitorItemList?: ListScheduleMonitorResponseBodyPageResultMonitorItemList[];
  /**
   * @remarks
   * The total number of monitored objects that meet the conditions.
   * 
   * @example
   * 128
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      monitorItemList: 'MonitorItemList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItemList: { 'type': 'array', 'itemType': ListScheduleMonitorResponseBodyPageResultMonitorItemList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.monitorItemList)) {
      $dara.Model.validateArray(this.monitorItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code of the request. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message of the request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The paginated result of the scheduling monitoring alert query.
   */
  pageResult?: ListScheduleMonitorResponseBodyPageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListScheduleMonitorResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

