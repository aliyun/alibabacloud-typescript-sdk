// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBaselineRequestAlertSettingsDingRobots extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to @all members. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * false
   */
  atAll?: boolean;
  /**
   * @remarks
   * The webhook URL of the DingTalk group chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=xxx
   */
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      atAll: 'AtAll',
      webUrl: 'WebUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atAll: 'boolean',
      webUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBaselineRequestAlertSettingsTopicSlowConfig extends $dara.Model {
  /**
   * @remarks
   * The minimum slowdown threshold. Unit: seconds. Valid values: 300 to 18000.
   * 
   * @example
   * 3600
   */
  minOver?: number;
  /**
   * @remarks
   * The ratio used to calculate the slowdown threshold based on the historical average execution duration of the node. Valid values: 0.1 to 2.
   * 
   * @example
   * 0.2
   */
  overFactor?: number;
  static names(): { [key: string]: string } {
    return {
      minOver: 'MinOver',
      overFactor: 'OverFactor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minOver: 'number',
      overFactor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBaselineRequestAlertSettings extends $dara.Model {
  /**
   * @remarks
   * The event alerting interval. Unit: minutes. Minimum value: 5. Maximum value: 1440.
   * 
   * @example
   * 30
   */
  alertInterval?: number;
  /**
   * @remarks
   * The maximum number of event alerting notifications. Maximum value: 288.
   * 
   * @example
   * 1
   */
  alertMaximum?: number;
  /**
   * @remarks
   * Valid values:
   * - MAIL: email.
   * - SMS: text message.
   * - PHONE: phone call. Only DataWorks Professional Edition and higher support phone call alerts.
   * - DINGROBOTS: DingTalk chatbot. This alert method takes effect only after the RobotUrls parameter is configured.
   * - Webhooks: WeCom or Lark chatbot. This alert method takes effect only after the Webhooks parameter is configured.
   */
  alertMethods?: string[];
  /**
   * @remarks
   * The alert recipient details. For specified users: a list of employee IDs. For on-duty schedule: the schedule name. For owner: leave empty.
   * 
   * @example
   * 123123
   */
  alertRecipient?: string;
  /**
   * @remarks
   * The alert recipient type. Valid values:
   * - OWNER: node owner.
   * - OTHER: specified users.
   * - SHIFT_SCHEDULE: on-duty schedule.
   * 
   * @example
   * OWNER
   */
  alertRecipientType?: string;
  /**
   * @remarks
   * The alert type. Valid values:
   * - BASELINE: baseline alerting.
   * - TOPIC: event alerting.
   * 
   * @example
   * BASELINE
   */
  alertType?: string;
  /**
   * @remarks
   * Specifies whether baseline alerting is enabled. This is a baseline-specific configuration. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  baselineAlertEnabled?: boolean;
  /**
   * @remarks
   * The list of DingTalk chatbots.
   */
  dingRobots?: UpdateBaselineRequestAlertSettingsDingRobots[];
  /**
   * @remarks
   * The silence end time.
   * 
   * @example
   * 00:00
   */
  silenceEndTime?: string;
  /**
   * @remarks
   * The silence start time.
   * 
   * @example
   * 00:00
   */
  silenceStartTime?: string;
  /**
   * @remarks
   * The threshold configuration for event slowdown alerts.
   */
  topicSlowConfig?: UpdateBaselineRequestAlertSettingsTopicSlowConfig;
  /**
   * @remarks
   * The event alerting type. This is an event-specific configuration.
   */
  topicTypes?: string[];
  /**
   * @remarks
   * The webhook list.
   */
  webhooks?: string[];
  static names(): { [key: string]: string } {
    return {
      alertInterval: 'AlertInterval',
      alertMaximum: 'AlertMaximum',
      alertMethods: 'AlertMethods',
      alertRecipient: 'AlertRecipient',
      alertRecipientType: 'AlertRecipientType',
      alertType: 'AlertType',
      baselineAlertEnabled: 'BaselineAlertEnabled',
      dingRobots: 'DingRobots',
      silenceEndTime: 'SilenceEndTime',
      silenceStartTime: 'SilenceStartTime',
      topicSlowConfig: 'TopicSlowConfig',
      topicTypes: 'TopicTypes',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInterval: 'number',
      alertMaximum: 'number',
      alertMethods: { 'type': 'array', 'itemType': 'string' },
      alertRecipient: 'string',
      alertRecipientType: 'string',
      alertType: 'string',
      baselineAlertEnabled: 'boolean',
      dingRobots: { 'type': 'array', 'itemType': UpdateBaselineRequestAlertSettingsDingRobots },
      silenceEndTime: 'string',
      silenceStartTime: 'string',
      topicSlowConfig: UpdateBaselineRequestAlertSettingsTopicSlowConfig,
      topicTypes: { 'type': 'array', 'itemType': 'string' },
      webhooks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertMethods)) {
      $dara.Model.validateArray(this.alertMethods);
    }
    if(Array.isArray(this.dingRobots)) {
      $dara.Model.validateArray(this.dingRobots);
    }
    if(this.topicSlowConfig && typeof (this.topicSlowConfig as any).validate === 'function') {
      (this.topicSlowConfig as any).validate();
    }
    if(Array.isArray(this.topicTypes)) {
      $dara.Model.validateArray(this.topicTypes);
    }
    if(Array.isArray(this.webhooks)) {
      $dara.Model.validateArray(this.webhooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBaselineRequestOvertimeSettings extends $dara.Model {
  /**
   * @remarks
   * The epoch corresponding to the committed time. For daily baselines, the value is 1. For hourly baselines, you can configure up to 24 epochs.
   * 
   * @example
   * 1
   */
  cycle?: number;
  /**
   * @remarks
   * The committed time in hh:mm format. Valid values of hh: 0 to 47. Valid values of mm: 0 to 59.
   * 
   * @example
   * 00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cycle: 'Cycle',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycle: 'number',
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

export class UpdateBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether alerting is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  alertEnabled?: boolean;
  /**
   * @remarks
   * The baseline alert margin. Unit: minutes.
   * 
   * @example
   * 30
   */
  alertMarginThreshold?: number;
  /**
   * @remarks
   * The baseline alert configurations.
   */
  alertSettings?: UpdateBaselineRequestAlertSettings[];
  /**
   * @remarks
   * The ID of the baseline. You can call [ListBaselines](https://help.aliyun.com/document_detail/2261507.html) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000010800007
   */
  baselineId?: number;
  /**
   * @remarks
   * The baseline name.
   * 
   * @example
   * BaselineName
   */
  baselineName?: string;
  /**
   * @remarks
   * The baseline type. Valid values:
   * - DAILY: daily baseline.
   * - HOURLY: hourly baseline.
   * 
   * @example
   * DAILY
   */
  baselineType?: string;
  /**
   * @remarks
   * Specifies whether the baseline is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of upstream node IDs for the baseline, separated by commas. If there are many nodes, we recommend that you add a virtual node downstream for easier management.
   * 
   * @example
   * 1,2,3
   */
  nodeIds?: string;
  /**
   * @remarks
   * The baseline committed time configurations.
   */
  overtimeSettings?: UpdateBaselineRequestOvertimeSettings[];
  /**
   * @remarks
   * The Alibaba Cloud UID of the baseline owner.
   * 
   * @example
   * 3726346****
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the baseline. Valid values: 1, 3, 5, 7, and 8.
   * 
   * @example
   * 7
   */
  priority?: number;
  /**
   * @remarks
   * The project ID. You can call [ListBaselines](https://help.aliyun.com/document_detail/2261507.html) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2043
   */
  projectId?: number;
  /**
   * @remarks
   * The IDs of nodes to remove from the baseline. Separate multiple IDs with commas (,).
   * 
   * @example
   * 123,456
   */
  removeNodeIds?: string;
  static names(): { [key: string]: string } {
    return {
      alertEnabled: 'AlertEnabled',
      alertMarginThreshold: 'AlertMarginThreshold',
      alertSettings: 'AlertSettings',
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineType: 'BaselineType',
      enabled: 'Enabled',
      nodeIds: 'NodeIds',
      overtimeSettings: 'OvertimeSettings',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      removeNodeIds: 'RemoveNodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEnabled: 'boolean',
      alertMarginThreshold: 'number',
      alertSettings: { 'type': 'array', 'itemType': UpdateBaselineRequestAlertSettings },
      baselineId: 'number',
      baselineName: 'string',
      baselineType: 'string',
      enabled: 'boolean',
      nodeIds: 'string',
      overtimeSettings: { 'type': 'array', 'itemType': UpdateBaselineRequestOvertimeSettings },
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      removeNodeIds: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertSettings)) {
      $dara.Model.validateArray(this.alertSettings);
    }
    if(Array.isArray(this.overtimeSettings)) {
      $dara.Model.validateArray(this.overtimeSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

