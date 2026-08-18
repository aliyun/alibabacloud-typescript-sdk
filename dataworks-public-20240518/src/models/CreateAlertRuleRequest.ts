// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertRuleRequestNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The additional configuration required for the alert recipient. If ReceiverType is DingdingUrl, you can set {"atAll":true} to @ all members.
   * 
   * @example
   * {"atAll":true}
   */
  extension?: string;
  /**
   * @remarks
   * The alert recipient type. Valid values:
   * - AliUid: Alibaba Cloud UID
   * - ShiftSchedule: shift schedule
   * - TaskOwner: node owner, applicable to custom alerting and event alerting
   * - Owner: owner, applicable to baseline alerting
   * - WebhookUrl: custom webhook URL
   * - DingdingUrl: DingTalk webhook URL
   * - FeishuUrl: Lark webhook URL
   * - WeixinUrl: WeCom webhook URL
   * 
   * @example
   * TaskOwner
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

export class CreateAlertRuleRequestNotification extends $dara.Model {
  /**
   * @remarks
   * The list of alert channels.
   * 
   * This parameter is required.
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
   * The maximum number of alerts within a calendar year. Valid values: 1 to 10000.
   * 
   * @example
   * 3
   */
  maximum?: number;
  /**
   * @remarks
   * The alert recipients.
   * 
   * This parameter is required.
   */
  receivers?: CreateAlertRuleRequestNotificationReceivers[];
  /**
   * @remarks
   * The end time of the alert silence period, in the format of HH:mm.
   * 
   * @example
   * 00:00
   */
  silenceEndTime?: string;
  /**
   * @remarks
   * The start time of the alert silence period, in the format of HH:mm.
   * 
   * @example
   * 00:00
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
      receivers: { 'type': 'array', 'itemType': CreateAlertRuleRequestNotificationReceivers },
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

export class CreateAlertRuleRequestTriggerConditionExtensionCycleUnfinishedCycleAndTime extends $dara.Model {
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
   * The timeout time, in the format of hh:mm. Valid values of hh: 0 to 47. Valid values of mm: 0 to 59.
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

export class CreateAlertRuleRequestTriggerConditionExtensionCycleUnfinished extends $dara.Model {
  /**
   * @remarks
   * The list of cycle and time configurations.
   */
  cycleAndTime?: CreateAlertRuleRequestTriggerConditionExtensionCycleUnfinishedCycleAndTime[];
  static names(): { [key: string]: string } {
    return {
      cycleAndTime: 'CycleAndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleAndTime: { 'type': 'array', 'itemType': CreateAlertRuleRequestTriggerConditionExtensionCycleUnfinishedCycleAndTime },
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

export class CreateAlertRuleRequestTriggerConditionExtensionError extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate an alert when an offline task is automatically rerun due to failure.
   * 
   * @example
   * false
   */
  autoRerunAlertEnabled?: boolean;
  /**
   * @remarks
   * The IDs of real-time computing tasks to monitor.
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

export class CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount extends $dara.Model {
  /**
   * @remarks
   * The number of error instances. Valid values: 1 to 10000.
   * 
   * @example
   * 5
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

export class CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage extends $dara.Model {
  /**
   * @remarks
   * The percentage of error instances. Valid values: 1 to 100.
   * 
   * @example
   * 5
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

export class CreateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate extends $dara.Model {
  /**
   * @remarks
   * The percentage of instance transfer fluctuation. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  percentage?: number;
  /**
   * @remarks
   * The type of instance transfer fluctuation. Valid values:
   * - abs: absolute value
   * - increase: increase
   * - decrease: decrease
   * 
   * @example
   * abs
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

export class CreateAlertRuleRequestTriggerConditionExtensionTimeout extends $dara.Model {
  /**
   * @remarks
   * The timeout duration, in minutes. Valid values: 1 to 21600.
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

export class CreateAlertRuleRequestTriggerConditionExtensionUnFinished extends $dara.Model {
  /**
   * @remarks
   * The unfinished time, in the format of hh:mm. Valid values of hh: 0 to 47. Valid values of mm: 0 to 59.
   * 
   * @example
   * 30:00
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

export class CreateAlertRuleRequestTriggerConditionExtension extends $dara.Model {
  /**
   * @remarks
   * The cycle unfinished alert configuration.
   */
  cycleUnfinished?: CreateAlertRuleRequestTriggerConditionExtensionCycleUnfinished;
  /**
   * @remarks
   * The error alert configuration.
   */
  error?: CreateAlertRuleRequestTriggerConditionExtensionError;
  /**
   * @remarks
   * The instance error count alert configuration.
   */
  instanceErrorCount?: CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount;
  /**
   * @remarks
   * The instance error percentage alert configuration.
   */
  instanceErrorPercentage?: CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage;
  /**
   * @remarks
   * The instance transfer fluctuation alert configuration.
   */
  instanceTransferFluctuate?: CreateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate;
  /**
   * @remarks
   * The timeout alert configuration.
   */
  timeout?: CreateAlertRuleRequestTriggerConditionExtensionTimeout;
  /**
   * @remarks
   * The unfinished alert configuration.
   */
  unFinished?: CreateAlertRuleRequestTriggerConditionExtensionUnFinished;
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
      cycleUnfinished: CreateAlertRuleRequestTriggerConditionExtensionCycleUnfinished,
      error: CreateAlertRuleRequestTriggerConditionExtensionError,
      instanceErrorCount: CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount,
      instanceErrorPercentage: CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage,
      instanceTransferFluctuate: CreateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate,
      timeout: CreateAlertRuleRequestTriggerConditionExtensionTimeout,
      unFinished: CreateAlertRuleRequestTriggerConditionExtensionUnFinished,
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

export class CreateAlertRuleRequestTriggerConditionTarget extends $dara.Model {
  /**
   * @remarks
   * The whitelist of monitored tasks.
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
   * - Task: node
   * - Baseline: baseline
   * - Project: workspace
   * - BizProcess: business process
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

export class CreateAlertRuleRequestTriggerCondition extends $dara.Model {
  /**
   * @remarks
   * The extension information. This parameter is required for certain trigger condition configurations.
   */
  extension?: CreateAlertRuleRequestTriggerConditionExtension;
  /**
   * @remarks
   * The monitored object.
   */
  target?: CreateAlertRuleRequestTriggerConditionTarget;
  /**
   * @remarks
   * The type of alert trigger. Valid values:
   * - Finished: Instance completed.
   * - UnFinished: Instance not completed.
   * - Error: Instance error.
   * - CycleUnfinished: Instance cycle not completed.
   * - Timeout: Instance timeout.
   * - InstanceTransferComplete: Node-to-instance conversion completed.
   * - InstanceTransferFluctuate: Instance count fluctuation.
   * - ExhaustedError: Error persists after automatic reruns.
   * - InstanceKeyword: Error instance contains keyword.
   * - InstanceErrorCount: Number of error instances.
   * - InstanceErrorPercentage: Percentage of error instances.
   * - ResourceGroupPercentage: Resource group utilization.
   * - ResourceGroupWaitCount: Number of instances waiting for resources in the resource group.
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
      extension: CreateAlertRuleRequestTriggerConditionExtension,
      target: CreateAlertRuleRequestTriggerConditionTarget,
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

export class CreateAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the alert rule is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the custom rule.
   * 
   * This parameter is required.
   * 
   * @example
   * xm_create_test
   */
  name?: string;
  /**
   * @remarks
   * The alert notification configuration.
   */
  notification?: CreateAlertRuleRequestNotification;
  /**
   * @remarks
   * The Alibaba Cloud UID of the owner of the custom rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 279114181****
   */
  owner?: string;
  /**
   * @remarks
   * The condition that triggers the alert.
   * 
   * This parameter is required.
   */
  triggerCondition?: CreateAlertRuleRequestTriggerCondition;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      name: 'Name',
      notification: 'Notification',
      owner: 'Owner',
      triggerCondition: 'TriggerCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      name: 'string',
      notification: CreateAlertRuleRequestNotification,
      owner: 'string',
      triggerCondition: CreateAlertRuleRequestTriggerCondition,
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

