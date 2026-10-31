// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduleMonitorRequestUpdateCommandMonitoredItemConfigMonitoredNodeRangeFilterRuleList extends $dara.Model {
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
   * Specifies whether to exclude the selection.
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

export class UpdateScheduleMonitorRequestUpdateCommandMonitoredItemConfigMonitoredNodeRange extends $dara.Model {
  /**
   * @remarks
   * The list of filter rules. If left empty, all rules are applied by default.
   */
  filterRuleList?: UpdateScheduleMonitorRequestUpdateCommandMonitoredItemConfigMonitoredNodeRangeFilterRuleList[];
  static names(): { [key: string]: string } {
    return {
      filterRuleList: 'FilterRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterRuleList: { 'type': 'array', 'itemType': UpdateScheduleMonitorRequestUpdateCommandMonitoredItemConfigMonitoredNodeRangeFilterRuleList },
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

export class UpdateScheduleMonitorRequestUpdateCommandMonitoredItemConfig extends $dara.Model {
  /**
   * @remarks
   * The business unit ID. Required when the summary logical table does not have a project ID.
   * 
   * @example
   * 100001
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The logical table ID. Required for the LOGICAL_FIELD and LOGICAL_TABLE_NODE types.
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
   * The monitored object type. Valid values: LOGICAL_FIELD (logical field), OND_ID_NODE (logical table node), SCHEDULE_PHYSICAL_NODE (periodically scheduled physical task), MANUAL_PHYSICAL_NODE (manually scheduled physical task), ODM_NODE (source path task), LOGICAL_TABLE_NODE (logical table task), and PROJECT (project).
   * 
   * This parameter is required.
   * 
   * @example
   * SCHEDULE_PHYSICAL_NODE
   */
  monitoredItemType?: string;
  /**
   * @remarks
   * The monitored task scope, which specifies project-level monitoring filter rules. Required for the PROJECT type.
   */
  monitoredNodeRange?: UpdateScheduleMonitorRequestUpdateCommandMonitoredItemConfigMonitoredNodeRange;
  /**
   * @remarks
   * The monitored task ID, which is the node ID. Required for types other than PROJECT.
   * 
   * @example
   * 12345678
   */
  nodeId?: string;
  /**
   * @remarks
   * The monitored task name, which is the node name. Required for types other than PROJECT.
   * 
   * @example
   * dwd_order_detail_daily
   */
  nodeName?: string;
  /**
   * @remarks
   * The node subtype. Required for types other than PROJECT and LOGICAL_FIELD.
   * 
   * @example
   * MAX_COMPUTE_SQL
   */
  nodeSubType?: string;
  /**
   * @remarks
   * The list of node O&M owner IDs. This serves as the source for OWNER recipients.
   */
  opsOwnerIdList?: string[];
  /**
   * @remarks
   * The project ID. Required for the PROJECT type. For other types, it specifies the project to which the monitored object belongs.
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
      monitoredNodeRange: UpdateScheduleMonitorRequestUpdateCommandMonitoredItemConfigMonitoredNodeRange,
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

export class UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListAlertStrategyMonitoredTimeRange extends $dara.Model {
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

export class UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListAlertStrategyReceiverConfigList extends $dara.Model {
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
   * The list of receiving methods. Valid values: PHONE: Phone call. MESSAGE: Text message. EMAIL: Email. DING_TALK: DingTalk. FEISHU: Lark. WECHAT: WeChat. CUSTOM: Custom channel.
   * 
   * This parameter is required.
   */
  receivedWayList?: string[];
  /**
   * @remarks
   * The recipient type. Valid values: OWNER: Owner. USER_CUSTOM: Custom user. ON_DUTY_TABLE: On-duty table.
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

export class UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListAlertStrategy extends $dara.Model {
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
  monitoredTimeRange?: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListAlertStrategyMonitoredTimeRange;
  /**
   * @remarks
   * The list of recipient configurations.
   * 
   * This parameter is required.
   */
  receiverConfigList?: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListAlertStrategyReceiverConfigList[];
  /**
   * @remarks
   * The maximum number of times an alert can be sent.
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
      monitoredTimeRange: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListAlertStrategyMonitoredTimeRange,
      receiverConfigList: { 'type': 'array', 'itemType': UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListAlertStrategyReceiverConfigList },
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

export class UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigDailyUnfinishedConfig extends $dara.Model {
  /**
   * @remarks
   * The daily check time for unfinished nodes in HH:mm format.
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

export class UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfigCustomPeriodList extends $dara.Model {
  /**
   * @remarks
   * The check time for unfinished nodes in HH:mm format.
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

export class UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfig extends $dara.Model {
  /**
   * @remarks
   * The list of custom monitoring periods. Specify this parameter when MonitorPeriodType is set to CUSTOM.
   */
  customPeriodList?: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfigCustomPeriodList[];
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
   * The trigger rule type. Valid values: INTERVAL_AFTER_DUE_TIME: Triggered at an interval after the due time. FIX_TIME: Triggered at a fixed time.
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
      customPeriodList: { 'type': 'array', 'itemType': UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfigCustomPeriodList },
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

export class UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfig extends $dara.Model {
  /**
   * @remarks
   * The daily unfinished configuration.
   */
  dailyUnfinishedConfig?: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigDailyUnfinishedConfig;
  /**
   * @remarks
   * The multi-period unfinished configuration.
   */
  multiPeriodUnfinishedConfig?: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfig;
  static names(): { [key: string]: string } {
    return {
      dailyUnfinishedConfig: 'DailyUnfinishedConfig',
      multiPeriodUnfinishedConfig: 'MultiPeriodUnfinishedConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyUnfinishedConfig: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigDailyUnfinishedConfig,
      multiPeriodUnfinishedConfig: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfigMultiPeriodUnfinishedConfig,
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

export class UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigList extends $dara.Model {
  /**
   * @remarks
   * The alert cause type. Valid values: FAILED: The node fails to run. TIME_OUT: The node execution times out. UNFINISHED: The node does not generate data. SUCCESS: The node runs successfully. DATA_DELAY: Data is delayed.
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
  alertStrategy?: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListAlertStrategy;
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
   * The daily check time for unfinished nodes in HH:mm format. Specify this parameter only when AlertReasonType is set to UNFINISHED.
   * 
   * @example
   * 07:00
   */
  fixedUnfinishedTime?: string;
  /**
   * @remarks
   * The detailed configuration for the unfinished rule. Specify this parameter only when AlertReasonType is set to UNFINISHED.
   */
  unfinishedRuleDetailConfig?: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfig;
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
      alertStrategy: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListAlertStrategy,
      fixedElapsedTime: 'number',
      fixedUnfinishedTime: 'string',
      unfinishedRuleDetailConfig: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigListUnfinishedRuleDetailConfig,
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

export class UpdateScheduleMonitorRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The monitored object configuration.
   * 
   * This parameter is required.
   */
  monitoredItemConfig?: UpdateScheduleMonitorRequestUpdateCommandMonitoredItemConfig;
  /**
   * @remarks
   * The monitored object ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6912345678901234
   */
  monitoredItemId?: number;
  /**
   * @remarks
   * The list of monitored rule configurations. You can configure multiple rules with different alert causes.
   * 
   * This parameter is required.
   */
  monitoredRuleConfigList?: UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigList[];
  static names(): { [key: string]: string } {
    return {
      monitoredItemConfig: 'MonitoredItemConfig',
      monitoredItemId: 'MonitoredItemId',
      monitoredRuleConfigList: 'MonitoredRuleConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitoredItemConfig: UpdateScheduleMonitorRequestUpdateCommandMonitoredItemConfig,
      monitoredItemId: 'number',
      monitoredRuleConfigList: { 'type': 'array', 'itemType': UpdateScheduleMonitorRequestUpdateCommandMonitoredRuleConfigList },
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

export class UpdateScheduleMonitorRequest extends $dara.Model {
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The request body for updating scheduling monitoring.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateScheduleMonitorRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateScheduleMonitorRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

