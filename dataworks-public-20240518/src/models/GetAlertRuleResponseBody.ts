// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRuleResponseBodyAlertRuleNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The additional configuration required by the alert recipient. If ReceiverType is DingdingUrl, you can set {"atAll":true} to @ all members.
   * 
   * @example
   * {"atAll":true}
   */
  extension?: string;
  /**
   * @remarks
   * The type of the alert recipient. Valid values:
   * 
   * - AliUid: Alibaba Cloud UID.
   * - ShiftSchedule: shift schedule.
   * - TaskOwner: node owner. Applicable to custom alerting and event alerting.
   * - Owner: owner. Applicable to baseline alerting.
   * - WebhookUrl: custom webhook URL.
   * - DingdingUrl: DingTalk webhook URL.
   * - FeishuUrl: Lark webhook URL.
   * - WeixinUrl: WeChat webhook URL.
   * 
   * @example
   * WebhookUrl
   */
  receiverType?: string;
  /**
   * @remarks
   * The values of the alert recipient.
   */
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.receiverValues)) {
      $dara.Model.validateArray(this.receiverValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleNotification extends $dara.Model {
  /**
   * @remarks
   * The list of alert channels.
   */
  channels?: string[];
  /**
   * @remarks
   * The alert interval, in minutes. Valid values: 5 to 10000.
   * 
   * @example
   * 30
   */
  intervalInMinutes?: number;
  /**
   * @remarks
   * The maximum number of alerts within a calendar day. Valid values: 1 to 10000.
   * 
   * @example
   * 3
   */
  maximum?: number;
  /**
   * @remarks
   * The alert recipients.
   */
  receivers?: GetAlertRuleResponseBodyAlertRuleNotificationReceivers[];
  /**
   * @remarks
   * The end time of the mute period. Format: HH:mm:ss.
   * 
   * @example
   * 00:00:00
   */
  silenceEndTime?: string;
  /**
   * @remarks
   * The start time of the mute period. Format: HH:mm:ss.
   * 
   * @example
   * 00:00:00
   */
  silenceStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      intervalInMinutes: 'IntervalInMinutes',
      maximum: 'Maximum',
      receivers: 'Receivers',
      silenceEndTime: 'SilenceEndTime',
      silenceStartTime: 'SilenceStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      intervalInMinutes: 'number',
      maximum: 'number',
      receivers: { 'type': 'array', 'itemType': GetAlertRuleResponseBodyAlertRuleNotificationReceivers },
      silenceEndTime: 'string',
      silenceStartTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinishedCycleAndTime extends $dara.Model {
  /**
   * @remarks
   * The cycle ID. Valid values: 1 to 288.
   * 
   * @example
   * 1
   */
  cycleId?: number;
  /**
   * @remarks
   * The timeout time. Format: hh:mm. Valid values of hh: 0 to 47. Valid values of mm: 0 to 59.
   * 
   * @example
   * 12:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cycleId: 'CycleId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleId: 'number',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinished extends $dara.Model {
  /**
   * @remarks
   * The list of cycle and time configurations.
   */
  cycleAndTime?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinishedCycleAndTime[];
  static names(): { [key: string]: string } {
    return {
      cycleAndTime: 'CycleAndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleAndTime: { 'type': 'array', 'itemType': GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinishedCycleAndTime },
    };
  }

  validate() {
    if(Array.isArray(this.cycleAndTime)) {
      $dara.Model.validateArray(this.cycleAndTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionError extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate an alert when a batch task is automatically rerun due to a failure.
   * 
   * @example
   * false
   */
  autoRerunAlertEnabled?: boolean;
  /**
   * @remarks
   * The IDs of real-time computing nodes to monitor.
   */
  streamTaskIds?: number[];
  static names(): { [key: string]: string } {
    return {
      autoRerunAlertEnabled: 'AutoRerunAlertEnabled',
      streamTaskIds: 'StreamTaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRerunAlertEnabled: 'boolean',
      streamTaskIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.streamTaskIds)) {
      $dara.Model.validateArray(this.streamTaskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorCount extends $dara.Model {
  /**
   * @remarks
   * The number of failed instances. Valid values: 1 to 10000.
   * 
   * @example
   * 10
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorPercentage extends $dara.Model {
  /**
   * @remarks
   * The percentage of failed instances. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  percentage?: number;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceTransferFluctuate extends $dara.Model {
  /**
   * @remarks
   * The fluctuation percentage. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  percentage?: number;
  /**
   * @remarks
   * The fluctuation type. Valid values:
   * 
   * - abs: absolute value.
   * - increase: increase.
   * - decrease: decrease.
   * 
   * @example
   * 10
   */
  trend?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      trend: 'Trend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      trend: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionTimeout extends $dara.Model {
  /**
   * @remarks
   * The timeout duration, in minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeoutInMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionUnFinished extends $dara.Model {
  /**
   * @remarks
   * The not-completed time. Format: hh:mm. Valid values of hh: 0 to 47. Valid values of mm: 0 to 59.
   * 
   * @example
   * 12:00
   */
  unFinishedTime?: string;
  static names(): { [key: string]: string } {
    return {
      unFinishedTime: 'UnFinishedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unFinishedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleTriggerConditionExtension extends $dara.Model {
  /**
   * @remarks
   * The cycle-not-completed alert configuration.
   */
  cycleUnfinished?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinished;
  /**
   * @remarks
   * The error alert configuration.
   */
  error?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionError;
  /**
   * @remarks
   * The instance error count alert configuration.
   */
  instanceErrorCount?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorCount;
  /**
   * @remarks
   * The instance error percentage alert configuration.
   */
  instanceErrorPercentage?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorPercentage;
  /**
   * @remarks
   * The instance count fluctuation alert configuration.
   */
  instanceTransferFluctuate?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceTransferFluctuate;
  /**
   * @remarks
   * The timeout alert configuration.
   */
  timeout?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionTimeout;
  /**
   * @remarks
   * The not-completed alert configuration.
   */
  unFinished?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionUnFinished;
  static names(): { [key: string]: string } {
    return {
      cycleUnfinished: 'CycleUnfinished',
      error: 'Error',
      instanceErrorCount: 'InstanceErrorCount',
      instanceErrorPercentage: 'InstanceErrorPercentage',
      instanceTransferFluctuate: 'InstanceTransferFluctuate',
      timeout: 'Timeout',
      unFinished: 'UnFinished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleUnfinished: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinished,
      error: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionError,
      instanceErrorCount: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorCount,
      instanceErrorPercentage: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorPercentage,
      instanceTransferFluctuate: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceTransferFluctuate,
      timeout: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionTimeout,
      unFinished: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionUnFinished,
    };
  }

  validate() {
    if(this.cycleUnfinished && typeof (this.cycleUnfinished as any).validate === 'function') {
      (this.cycleUnfinished as any).validate();
    }
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    if(this.instanceErrorCount && typeof (this.instanceErrorCount as any).validate === 'function') {
      (this.instanceErrorCount as any).validate();
    }
    if(this.instanceErrorPercentage && typeof (this.instanceErrorPercentage as any).validate === 'function') {
      (this.instanceErrorPercentage as any).validate();
    }
    if(this.instanceTransferFluctuate && typeof (this.instanceTransferFluctuate as any).validate === 'function') {
      (this.instanceTransferFluctuate as any).validate();
    }
    if(this.timeout && typeof (this.timeout as any).validate === 'function') {
      (this.timeout as any).validate();
    }
    if(this.unFinished && typeof (this.unFinished as any).validate === 'function') {
      (this.unFinished as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleTriggerConditionTarget extends $dara.Model {
  /**
   * @remarks
   * The whitelist of monitored nodes.
   */
  allowTasks?: number[];
  /**
   * @remarks
   * The list of monitored object IDs.
   */
  ids?: number[];
  /**
   * @remarks
   * The monitored object type. Valid values:
   * 
   * - Task: node.
   * - Baseline: baseline.
   * - Project: workspace.
   * - BizProcess: business process flow.
   * 
   * @example
   * Task
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowTasks: 'AllowTasks',
      ids: 'Ids',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowTasks: { 'type': 'array', 'itemType': 'number' },
      ids: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowTasks)) {
      $dara.Model.validateArray(this.allowTasks);
    }
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRuleTriggerCondition extends $dara.Model {
  /**
   * @remarks
   * The extension information. Required for certain trigger conditions.
   */
  extension?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtension;
  /**
   * @remarks
   * The monitored object.
   */
  target?: GetAlertRuleResponseBodyAlertRuleTriggerConditionTarget;
  /**
   * @remarks
   * The type of the alert trigger. Valid values:
   * 
   * - Finished: instance completed.
   * - UnFinished: instance not completed.
   * - Error: instance failed.
   * - CycleUnfinished: instance cycle not completed.
   * - Timeout: instance timed out.
   * - InstanceTransferComplete: node-to-instance conversion completed.
   * - InstanceTransferFluctuate: instance count fluctuation.
   * - ExhaustedError: instance still failed after automatic reruns.
   * - InstanceKeyword: failed instance contains keyword.
   * - InstanceErrorCount: number of failed instances.
   * - InstanceErrorPercentage: percentage of failed instances.
   * - ResourceGroupPercentage: schedule resource utilization.
   * - ResourceGroupWaitCount: number of instances waiting for schedule resources.
   * 
   * @example
   * Error
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtension,
      target: GetAlertRuleResponseBodyAlertRuleTriggerConditionTarget,
      type: 'string',
    };
  }

  validate() {
    if(this.extension && typeof (this.extension as any).validate === 'function') {
      (this.extension as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBodyAlertRule extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the alert rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the custom alert rule.
   * 
   * @example
   * 16035
   */
  id?: number;
  /**
   * @remarks
   * The name of the custom alert rule.
   * 
   * @example
   * error_rule
   */
  name?: string;
  /**
   * @remarks
   * The alert notification configuration.
   */
  notification?: GetAlertRuleResponseBodyAlertRuleNotification;
  /**
   * @remarks
   * The Alibaba Cloud UID of the owner of the custom alert rule.
   * 
   * @example
   * 279961421580845157
   */
  owner?: string;
  /**
   * @remarks
   * The condition that triggers the alert.
   */
  triggerCondition?: GetAlertRuleResponseBodyAlertRuleTriggerCondition;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      id: 'Id',
      name: 'Name',
      notification: 'Notification',
      owner: 'Owner',
      triggerCondition: 'TriggerCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
      name: 'string',
      notification: GetAlertRuleResponseBodyAlertRuleNotification,
      owner: 'string',
      triggerCondition: GetAlertRuleResponseBodyAlertRuleTriggerCondition,
    };
  }

  validate() {
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.triggerCondition && typeof (this.triggerCondition as any).validate === 'function') {
      (this.triggerCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the custom alert rule.
   */
  alertRule?: GetAlertRuleResponseBodyAlertRule;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertRule: 'AlertRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRule: GetAlertRuleResponseBodyAlertRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alertRule && typeof (this.alertRule as any).validate === 'function') {
      (this.alertRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

