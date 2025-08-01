// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertRuleRequestNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The additional configuration of the alert recipient. If the ReceiverType parameter is set to DingdingUrl, you can set this parameter to {"atAll":true} to remind all members in a DingTalk group.
   * 
   * @example
   * {"atAll":true}
   */
  extension?: string;
  /**
   * @remarks
   * The type of the alert recipient. Valid valves:
   * 
   * *   AliUid: Alibaba Cloud account ID.
   * *   Shift Schedules: the personnel in a shift schedule.
   * *   TaskOwner: the task owner. The task owner can receive custom alerts and event alerts.
   * *   Owner: the baseline owner. The baseline owner can receive baseline alerts.
   * *   WebhookUrl: URL of a custom webhook.
   * *   DingdingUrl: DingTalk webhook URL.
   * *   FeishuUrl: Lark webhook URL.
   * *   WeixinUrl: WeCom webhook URL.
   * 
   * @example
   * TaskOwner
   */
  receiverType?: string;
  /**
   * @remarks
   * The alert recipients.
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

export class UpdateAlertRuleRequestNotification extends $dara.Model {
  /**
   * @remarks
   * The alert notification channels.
   */
  channels?: string[];
  /**
   * @remarks
   * The interval at which an alert notification is sent. Unit: minutes. Valid values: [5,10000].
   * 
   * @example
   * 30
   */
  intervalInMinutes?: number;
  /**
   * @remarks
   * The maximum number of times an alert notification can be sent within a calendar day. Valid values: [1, 10000].
   * 
   * @example
   * 3
   */
  maximum?: number;
  /**
   * @remarks
   * The alert recipients.
   */
  receivers?: UpdateAlertRuleRequestNotificationReceivers[];
  /**
   * @remarks
   * The end time for silence. The time is in the HH:mm:ss format.
   * 
   * @example
   * 00:00:00
   */
  silenceEndTime?: string;
  /**
   * @remarks
   * The start time for silence. The time is in the HH:mm:ss format.
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
      receivers: { 'type': 'array', 'itemType': UpdateAlertRuleRequestNotificationReceivers },
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

export class UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinishedCycleAndTime extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduling cycle of the instance. Valid values: [1,288].
   * 
   * @example
   * 1
   */
  cycleId?: number;
  /**
   * @remarks
   * The latest completion time of the instance within the scheduling cycle. The time is in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * 
   * @example
   * 01:00
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

export class UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinished extends $dara.Model {
  /**
   * @remarks
   * The configurations of the scheduling cycle and timeout period of the instance.
   */
  cycleAndTime?: UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinishedCycleAndTime[];
  static names(): { [key: string]: string } {
    return {
      cycleAndTime: 'CycleAndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleAndTime: { 'type': 'array', 'itemType': UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinishedCycleAndTime },
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

export class UpdateAlertRuleRequestTriggerConditionExtensionError extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to trigger an alert if a batch synchronization task is automatically rerun upon a failure.
   * 
   * @example
   * false
   */
  autoRerunAlertEnabled?: boolean;
  /**
   * @remarks
   * The IDs of the real-time computing tasks. This parameter is required when you monitor real-time computing tasks.
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

export class UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount extends $dara.Model {
  /**
   * @remarks
   * The maximum number of instances on which an error occurs. Valid values: [1,10000].
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

export class UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage extends $dara.Model {
  /**
   * @remarks
   * The maximum percentage of instances on which an error occurs in the workspace to the total number of instances. Valid values: [1-100].
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

export class UpdateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate extends $dara.Model {
  /**
   * @remarks
   * The maximum percentage of fluctuation in the number of auto triggered node instances that are generated in your workspace. Valid values: [1-100].
   * 
   * @example
   * 10
   */
  percentage?: number;
  /**
   * @remarks
   * The way in which the number of auto triggered node instances that are generated in your workspace fluctuates. Valid values:
   * 
   * *   abs: the absolute value. The number of instances increases or decreases.
   * *   increase: The number of instances increases.
   * *   decrease: The number of instances decreases.
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

export class UpdateAlertRuleRequestTriggerConditionExtensionTimeout extends $dara.Model {
  /**
   * @remarks
   * The timeout period. Unit: minutes.
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

export class UpdateAlertRuleRequestTriggerConditionExtensionUnFinished extends $dara.Model {
  /**
   * @remarks
   * The latest completion time of the instance. The period is in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
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

export class UpdateAlertRuleRequestTriggerConditionExtension extends $dara.Model {
  /**
   * @remarks
   * The configuration for an alert of the CycleUnfinished type.
   */
  cycleUnfinished?: UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinished;
  /**
   * @remarks
   * The configuration for an alert of the Error type.
   */
  error?: UpdateAlertRuleRequestTriggerConditionExtensionError;
  /**
   * @remarks
   * The configuration for an alert of the InstanceErrorCount type.
   */
  instanceErrorCount?: UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount;
  /**
   * @remarks
   * The configuration for an alert of the InstanceErrorPercentage type.
   */
  instanceErrorPercentage?: UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage;
  /**
   * @remarks
   * The configuration for an alert of the InstanceTransferFluctuate type.
   */
  instanceTransferFluctuate?: UpdateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate;
  /**
   * @remarks
   * The configuration for an alert of the Timeout type.
   */
  timeout?: UpdateAlertRuleRequestTriggerConditionExtensionTimeout;
  /**
   * @remarks
   * The configuration for an alert of the UnFinished type.
   */
  unFinished?: UpdateAlertRuleRequestTriggerConditionExtensionUnFinished;
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
      cycleUnfinished: UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinished,
      error: UpdateAlertRuleRequestTriggerConditionExtensionError,
      instanceErrorCount: UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount,
      instanceErrorPercentage: UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage,
      instanceTransferFluctuate: UpdateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate,
      timeout: UpdateAlertRuleRequestTriggerConditionExtensionTimeout,
      unFinished: UpdateAlertRuleRequestTriggerConditionExtensionUnFinished,
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

export class UpdateAlertRuleRequestTriggerConditionTarget extends $dara.Model {
  /**
   * @remarks
   * The nodes that are not to be monitored.
   */
  allowTasks?: number[];
  /**
   * @remarks
   * The IDs of monitored objects.
   */
  ids?: number[];
  /**
   * @remarks
   * The type of the monitored objects. Valid values:
   * 
   * *   Task: node
   * *   Baseline: baseline
   * *   project: workspace
   * *   BizProcess: workflow
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

export class UpdateAlertRuleRequestTriggerCondition extends $dara.Model {
  /**
   * @remarks
   * The extended information about the rule. This parameter is required for specific types of alerts.
   */
  extension?: UpdateAlertRuleRequestTriggerConditionExtension;
  /**
   * @remarks
   * The monitored objects.
   */
  target?: UpdateAlertRuleRequestTriggerConditionTarget;
  /**
   * @remarks
   * The alert type. Valid values:
   * 
   * *   Finished: An instance is successfully run.
   * *   UnFinished: An instance does not finish running before a specified point in time.
   * *   Error: An error occurs on an instance.
   * *   CycleUnfinished: An instance does not finish running as expected within a specific cycle.
   * *   Timeout: An instance times out.
   * *   InstanceTransferComplete: An instance is generated by the auto triggered node.
   * *   InstanceTransferFluctuate: The number of generated instances fluctuates.
   * *   ExhaustedError: An error persists after an instance is automatically rerun.
   * *   InstanceKeyword: An instance with errors contains specified keywords.
   * *   InstanceErrorCount: The number of instances on which an error occurs reaches a specified threshold.
   * *   InstanceErrorPercentage: The proportion of instances on which an error occurs in the workspace to the total number of instances reaches a specified threshold.
   * *   ResourceGroupPercentage: The usage rate of the resource group reaches a specified threshold.
   * *   ResourceGroupWaitCount: The number of instances that are waiting for resources in the resource group reaches a specified threshold.
   * 
   * @example
   * ERROR
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
      extension: UpdateAlertRuleRequestTriggerConditionExtension,
      target: UpdateAlertRuleRequestTriggerConditionTarget,
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

export class UpdateAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the rule.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 105412
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * collection_name
   */
  name?: string;
  /**
   * @remarks
   * The configuration for the alert notification.
   */
  notification?: UpdateAlertRuleRequestNotification;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the owner of the rule.
   * 
   * @example
   * 193379****
   */
  owner?: string;
  /**
   * @remarks
   * The alert triggering condition.
   */
  triggerCondition?: UpdateAlertRuleRequestTriggerCondition;
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
      notification: UpdateAlertRuleRequestNotification,
      owner: 'string',
      triggerCondition: UpdateAlertRuleRequestTriggerCondition,
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

