// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduleMonitorRequestCreateCommandMonitoredItemConfigMonitoredNodeRangeFilterRuleList extends $dara.Model {
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
   * The list of filter values. Multiple values are supported.
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

export class CreateScheduleMonitorRequestCreateCommandMonitoredItemConfigMonitoredNodeRange extends $dara.Model {
  /**
   * @remarks
   * The list of filter rules. If this parameter is left empty, all tasks are monitored by default.
   */
  filterRuleList?: CreateScheduleMonitorRequestCreateCommandMonitoredItemConfigMonitoredNodeRangeFilterRuleList[];
  static names(): { [key: string]: string } {
    return {
      filterRuleList: 'FilterRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterRuleList: { 'type': 'array', 'itemType': CreateScheduleMonitorRequestCreateCommandMonitoredItemConfigMonitoredNodeRangeFilterRuleList },
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

export class CreateScheduleMonitorRequestCreateCommandMonitoredItemConfig extends $dara.Model {
  /**
   * @remarks
   * The business unit ID. Specify this parameter when the summary logical table does not have a project ID.
   * 
   * @example
   * 100001
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The logical table ID. Specify this parameter when the monitored object type is LOGICAL_FIELD or LOGICAL_TABLE_NODE.
   * 
   * @example
   * 6812345678901234
   */
  logicalTableId?: number;
  /**
   * @remarks
   * The name of the logical table.
   * 
   * @example
   * dwd_order_detail
   */
  logicalTableName?: string;
  /**
   * @remarks
   * The monitored object type. Valid values:
   * - LOGICAL_FIELD: logical field.
   * - OND_ID_NODE: logical table node.
   * - SCHEDULE_PHYSICAL_NODE: physical task with epoch scheduling.
   * - MANUAL_PHYSICAL_NODE: physical task with manual scheduling.
   * - ODM_NODE: source data path task.
   * - LOGICAL_TABLE_NODE: logical table task.
   * - PROJECT: project.
   * 
   * This parameter is required.
   * 
   * @example
   * SCHEDULE_PHYSICAL_NODE
   */
  monitoredItemType?: string;
  /**
   * @remarks
   * The scope of monitored tasks, which serves as the filtering rule for project-level monitoring. Specify this parameter when the monitored object type is PROJECT.
   */
  monitoredNodeRange?: CreateScheduleMonitorRequestCreateCommandMonitoredItemConfigMonitoredNodeRange;
  /**
   * @remarks
   * The ID of the monitored task, which is the node ID. This parameter is required when the monitored object type is not PROJECT.
   * 
   * @example
   * 12345678
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the monitored task, which is the node name. This parameter is required when the monitored object type is not PROJECT.
   * 
   * @example
   * dwd_order_detail_daily
   */
  nodeName?: string;
  /**
   * @remarks
   * The subtype of the node. This parameter is required when the monitored object type is not PROJECT or LOGICAL_FIELD.
   * 
   * @example
   * MAX_COMPUTE_SQL
   */
  nodeSubType?: string;
  /**
   * @remarks
   * The list of O&M owner IDs for the node. This serves as the source for the OWNER recipient type.
   */
  opsOwnerIdList?: string[];
  /**
   * @remarks
   * The project ID. This parameter is required when the monitored object type is PROJECT. For other types, it specifies the project to which the monitored object belongs.
   * 
   * @example
   * 7086194564164288
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      logicalTableId: 'LogicalTableId',
      logicalTableName: 'LogicalTableName',
      monitoredItemType: 'MonitoredItemType',
      monitoredNodeRange: 'MonitoredNodeRange',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeSubType: 'NodeSubType',
      opsOwnerIdList: 'OpsOwnerIdList',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      logicalTableId: 'number',
      logicalTableName: 'string',
      monitoredItemType: 'string',
      monitoredNodeRange: CreateScheduleMonitorRequestCreateCommandMonitoredItemConfigMonitoredNodeRange,
      nodeId: 'string',
      nodeName: 'string',
      nodeSubType: 'string',
      opsOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
    };
  }

  validate() {
    if(this.monitoredNodeRange && typeof (this.monitoredNodeRange as any).validate === 'function') {
      (this.monitoredNodeRange as any).validate();
    }
    if(Array.isArray(this.opsOwnerIdList)) {
      $dara.Model.validateArray(this.opsOwnerIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListAlertStrategyMonitoredTimeRange extends $dara.Model {
  /**
   * @remarks
   * The end time in HH:mm format. Set this parameter to 0 to indicate no limit.
   * 
   * @example
   * 11:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time in HH:mm format. Set this parameter to 0 to indicate no limit.
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

export class CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListAlertStrategyReceiverConfigList extends $dara.Model {
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
   * The list of notification methods. Valid values:
   * - PHONE: Phone call.
   * - MESSAGE: Text message.
   * - EMAIL: Email.
   * - DING_TALK: DingTalk.
   * - FEISHU: Lark.
   * - WECHAT: WeChat.
   * - CUSTOM: Custom channel.
   * 
   * This parameter is required.
   */
  receivedWayList?: string[];
  /**
   * @remarks
   * The recipient type. Valid values:
   * - OWNER: The owner.
   * - USER_CUSTOM: A custom user.
   * - ON_DUTY_TABLE: An on-duty table.
   * 
   * This parameter is required.
   * 
   * @example
   * OWNER
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

export class CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListAlertStrategy extends $dara.Model {
  /**
   * @remarks
   * The alert trigger frequency.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  alertFrequency?: number;
  /**
   * @remarks
   * The monitored time range.
   */
  monitoredTimeRange?: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListAlertStrategyMonitoredTimeRange;
  /**
   * @remarks
   * The list of recipient configurations.
   * 
   * This parameter is required.
   */
  receiverConfigList?: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListAlertStrategyReceiverConfigList[];
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
      monitoredTimeRange: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListAlertStrategyMonitoredTimeRange,
      receiverConfigList: { 'type': 'array', 'itemType': CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListAlertStrategyReceiverConfigList },
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

export class CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigDailyUnfinishedConfig extends $dara.Model {
  /**
   * @remarks
   * The daily time to check for unfinished tasks in HH:mm format.
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

export class CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfigCustomPeriodList extends $dara.Model {
  /**
   * @remarks
   * The time to check for unfinished tasks in HH:mm format.
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

export class CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfig extends $dara.Model {
  /**
   * @remarks
   * The list of custom monitoring periods. Specify this parameter when MonitorPeriodType is set to CUSTOM.
   */
  customPeriodList?: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfigCustomPeriodList[];
  /**
   * @remarks
   * The interval time value. This parameter is used together with IntervalUnit.
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
   * The trigger rule type. Valid values:
   * - INTERVAL_AFTER_DUE_TIME: Triggered at an interval after the due time.
   * - FIX_TIME: Triggered at a fixed time.
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
      customPeriodList: { 'type': 'array', 'itemType': CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfigCustomPeriodList },
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

export class CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfig extends $dara.Model {
  /**
   * @remarks
   * The daily unfinished configuration.
   */
  dailyUnfinishedConfig?: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigDailyUnfinishedConfig;
  /**
   * @remarks
   * The multi-period unfinished configuration.
   */
  multiPeriodUnfinishedConfig?: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfig;
  static names(): { [key: string]: string } {
    return {
      dailyUnfinishedConfig: 'DailyUnfinishedConfig',
      multiPeriodUnfinishedConfig: 'MultiPeriodUnfinishedConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyUnfinishedConfig: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigDailyUnfinishedConfig,
      multiPeriodUnfinishedConfig: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfig,
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

export class CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigList extends $dara.Model {
  /**
   * @remarks
   * The alert cause type. Valid values:
   * - FAILED: The task execution failed.
   * - TIME_OUT: The task execution timed out.
   * - UNFINISHED: The task is not completed.
   * - SUCCESS: The task execution succeeded.
   * - DATA_DELAY: The data is delayed.
   * 
   * This parameter is required.
   * 
   * @example
   * TIME_OUT
   */
  alertReasonType?: string;
  /**
   * @remarks
   * The alert strategy.
   * 
   * This parameter is required.
   */
  alertStrategy?: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListAlertStrategy;
  /**
   * @remarks
   * The timeout period in minutes. Specify this parameter only when AlertReasonType is set to TIME_OUT.
   * 
   * @example
   * 60
   */
  fixedElapsedTime?: number;
  /**
   * @remarks
   * The daily time to check for unfinished tasks in HH:mm format. Specify this parameter only when AlertReasonType is set to UNFINISHED.
   * 
   * @example
   * 07:00
   */
  fixedUnfinishedTime?: string;
  /**
   * @remarks
   * The detailed configuration for the unfinished rule. Specify this parameter only when AlertReasonType is set to UNFINISHED.
   */
  unfinishedRuleDetailConfig?: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfig;
  static names(): { [key: string]: string } {
    return {
      alertReasonType: 'AlertReasonType',
      alertStrategy: 'AlertStrategy',
      fixedElapsedTime: 'FixedElapsedTime',
      fixedUnfinishedTime: 'FixedUnfinishedTime',
      unfinishedRuleDetailConfig: 'UnfinishedRuleDetailConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertReasonType: 'string',
      alertStrategy: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListAlertStrategy,
      fixedElapsedTime: 'number',
      fixedUnfinishedTime: 'string',
      unfinishedRuleDetailConfig: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfig,
    };
  }

  validate() {
    if(this.alertStrategy && typeof (this.alertStrategy as any).validate === 'function') {
      (this.alertStrategy as any).validate();
    }
    if(this.unfinishedRuleDetailConfig && typeof (this.unfinishedRuleDetailConfig as any).validate === 'function') {
      (this.unfinishedRuleDetailConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleMonitorRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The monitored object configuration.
   * 
   * This parameter is required.
   */
  monitoredItemConfig?: CreateScheduleMonitorRequestCreateCommandMonitoredItemConfig;
  /**
   * @remarks
   * The list of monitoring rule configurations. You can configure multiple rules for different alert causes.
   * 
   * This parameter is required.
   */
  monitoredRuleConfigList?: CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigList[];
  static names(): { [key: string]: string } {
    return {
      monitoredItemConfig: 'MonitoredItemConfig',
      monitoredRuleConfigList: 'MonitoredRuleConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitoredItemConfig: CreateScheduleMonitorRequestCreateCommandMonitoredItemConfig,
      monitoredRuleConfigList: { 'type': 'array', 'itemType': CreateScheduleMonitorRequestCreateCommandMonitoredRuleConfigList },
    };
  }

  validate() {
    if(this.monitoredItemConfig && typeof (this.monitoredItemConfig as any).validate === 'function') {
      (this.monitoredItemConfig as any).validate();
    }
    if(Array.isArray(this.monitoredRuleConfigList)) {
      $dara.Model.validateArray(this.monitoredRuleConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for creating a scheduling monitoring configuration.
   * 
   * This parameter is required.
   */
  createCommand?: CreateScheduleMonitorRequestCreateCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The operator user ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateScheduleMonitorRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

